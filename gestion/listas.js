/* Mireka Perfumería – configuración general + editor individual + edición masiva de cuatro listas.
   Configuración y excepciones se guardan en las tablas Mireka ya existentes. */
(() => {
    'use strict';
    const ESCALONES = [3, 6, 15, 30];
    const CAMPO = i => `markup_lista_${i}`;
    const $ = id => document.getElementById(id);
    const panel = $('seccion-listas-mireka');
    if (!panel) return;

    let configuracion = null;
    let excepciones = new Map();
    let ocupado = false;
    let listo = false;

    const escapar = v => String(v ?? '')
        .replaceAll('&', '&amp;').replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
    const dinero = v => v === null ? 'Sin costo' :
        new Intl.NumberFormat('es-AR', {style:'currency',currency:'ARS',maximumFractionDigits:0}).format(v);
    const numero = v => {
        if (v === null || v === undefined || String(v).trim() === '') return null;
        const n = Number(v);
        return Number.isFinite(n) && n >= 0 && n <= 1000 ? n : NaN;
    };
    const productosElegibles = () => (typeof productosGestion === 'undefined' ? [] : productosGestion)
        .filter(p => p.retirado !== true && ['perfumes-grandes','maison-30ml'].includes(p.categoria_mostrar));
    const coste = p => {
        const valor = p?.costo_actual;
        if (valor === null || valor === undefined || String(valor).trim() === '') return null;
        const n = Number(valor);
        return Number.isFinite(n) && n >= 0 ? n : null;
    };
    const efectivo = (costo, markup) => {
        if (costo === null || markup === null || !Number.isFinite(costo) || !Number.isFinite(markup)) return null;
        return Math.ceil((costo * (1 + markup / 100) - 1e-7) / 500) * 500;
    };
    const estado = (msj, error = false) => {
        const nodo = $('listas-mireka-estado');
        nodo.textContent = msj;
        nodo.classList.toggle('listas-mireka-error', error);
    };
    const obtenerOverride = id => excepciones.get(Number(id)) || {};
    const porcentaje = (p, i) => {
        const x = obtenerOverride(p.id)[CAMPO(i)];
        return x !== undefined && x !== null ? Number(x) : numero(configuracion?.[CAMPO(i)]);
    };
    const listaDescendente = valores => valores.every((v, j) => j === 0 || valores[j - 1] >= v);
    const validarPorcentajes = (valores, producto) => {
        if (valores.some(v => Number.isNaN(v))) throw new Error('El porcentaje debe estar entre 0 y 1000.');
        if (valores.some(v => v === null)) return; // Puede faltar configuración al comienzo.
        if (!listaDescendente(valores)) {
            throw new Error(`En ${producto}, la Lista 1 debe ser igual o más cara que la Lista 2, y así sucesivamente.`);
        }
    };
    const valoresProducto = p => ESCALONES.map((_, k) => porcentaje(p, k + 1));

    async function cargarDatos() {
        const [r1, r2] = await Promise.all([
            supabaseClient.from('mireka_configuracion_listas').select('*').eq('id', 1).maybeSingle(),
            supabaseClient.from('mireka_markup_listas_producto').select('*')
        ]);
        if (r1.error || r2.error) {
            listo = false;
            throw new Error('No se pudieron cargar las listas. Primero ejecutá el SQL incluido en el ZIP desde Supabase y revisá los permisos. ' + (r1.error?.message || r2.error?.message || ''));
        }
        configuracion = r1.data || {id: 1};
        excepciones = new Map((r2.data || []).map(row => [Number(row.producto_id), row]));
        listo = true;
        ESCALONES.forEach((_, k) => {
            const n = $('listas-mireka-general-' + (k + 1));
            n.value = configuracion[CAMPO(k + 1)] ?? '';
        });
    }

    async function abrir() {
        if (typeof cerrarSeccionesGestion === 'function') cerrarSeccionesGestion();
        if (typeof ocultarSeccionesMenuGestion === 'function') ocultarSeccionesMenuGestion();
        panel.classList.remove('oculto');
        if (typeof activarPantallaGestion === 'function') activarPantallaGestion('seccion-listas-mireka');
        estado('Cargando listas mayoristas...');
        try {
            if (!productosElegibles().length && typeof cargarProductosGestion === 'function') await cargarProductosGestion();
            await cargarDatos();
            estado('Porcentajes generales cargados. Para personalizar perfumes, usá Stock → Ver stock.');
        } catch(e) { estado(e.message, true); }
    }

    $('abrir-listas-mireka').addEventListener('click', abrir);
    $('cerrar-listas-mireka').addEventListener('click', () => {
        panel.classList.add('oculto');
        if (typeof mostrarInicioGestion === 'function') mostrarInicioGestion();
    });
    $('listas-mireka-guardar-generales').addEventListener('click', async () => {
        if (ocupado || !listo) return;
        try {
            const valores = ESCALONES.map((_,k) => numero($('listas-mireka-general-' + (k + 1)).value));
            if (valores.some(v => v === null || Number.isNaN(v))) throw new Error('Completá los cuatro porcentajes generales (de 0% a 1000%).');
            validarPorcentajes(valores, 'la configuración general');
            // Evita inversiones entre listas en productos con excepciones.
            productosElegibles().forEach(p => {
                const lista = valores.map((v,k) => obtenerOverride(p.id)[CAMPO(k+1)] ?? v);
                validarPorcentajes(lista.map(Number), p.nombre_mostrar || p.nombre || 'un producto');
            });
            if (!window.confirm('¿Guardar los cuatro porcentajes generales? Se recalcularán las listas de los perfumes sin porcentaje personalizado.')) return;
            ocupado = true;
            const item = {id:1}; valores.forEach((v,k) => item[CAMPO(k+1)] = v);
            const {error} = await supabaseClient.from('mireka_configuracion_listas').upsert(item, {onConflict:'id'});
            if (error) throw error;
            configuracion = item;
            estado('Configuración general guardada. Precios calculados con redondeo hacia arriba de $500.');
            actualizarPreciosModal();
        } catch(e) { estado(e.message || 'No se pudo guardar.', true); }
        finally { ocupado = false; }
    });

    // =========================================================
    // EDITOR UNIFICADO STOCK -> EDITAR PRODUCTO
    // Las cuatro listas se guardan SOLO en mireka_markup_listas_producto.
    // No sustituyen aún el precio_mayorista que utiliza la web vieja.
    // =========================================================
    let modalEdicionId = null;
    let modalEdicionLista = false;
    let modalPeticion = 0;
    const modal = $('mireka-listas-editor-producto');
    const filasModal = $('mireka-listas-editor-filas');
    const estadoModal = $('mireka-listas-editor-estado');
    const esElegible = p => p && ['perfumes-grandes','maison-30ml'].includes(p.categoria_mostrar);
    const costoModal = () => {
        const campo = $('editar-producto-costo');
        if (!campo || campo.value.trim() === '') return null;
        const n = Number(campo.value);
        return Number.isFinite(n) && n >= 0 ? n : null;
    };
    const modoEditor = activo => {
        modal?.classList.toggle('oculto', !activo);
        document.querySelector('#modal-editar-producto-gestion .modal-editar-producto-contenido')
            ?.classList.toggle('mireka-listas-modo', activo);
    };
    function sincronizarFilaModal(n) {
        const markupInput = $('mireka-editor-markup-' + n);
        const precioInput = $('mireka-editor-precio-' + n);
        const descripcion = $('mireka-editor-ayuda-' + n);
        if (!markupInput || !precioInput) return;
        const general = numero(configuracion?.[CAMPO(n)]);
        const personalizado = numero(markupInput.value);
        const porc = personalizado === null ? general : personalizado;
        precioInput.value = porc === null || costoModal() === null || Number.isNaN(porc)
            ? '' : efectivo(costoModal(), porc);
        if (descripcion) descripcion.textContent = personalizado === null
            ? `Porcentaje general: ${general === null ? 'sin configurar' : general + '%'}`
            : `Personalizado: ${personalizado}%`;
    }
    function actualizarPreciosModal() {
        if (!modalEdicionLista || !modal || modal.classList.contains('oculto')) return;
        ESCALONES.forEach((_, k) => sincronizarFilaModal(k+1));
    }
    if (filasModal) {
        filasModal.addEventListener('input', ev => {
            if (!modalEdicionLista) return;
            const campo = ev.target;
            const n = Number(campo.dataset.mirekaNumero);
            if (!ESCALONES[n-1]) return;
            if (campo.dataset.mirekaTipo === 'markup') {
                actualizarPreciosModal();
            } else if (campo.dataset.mirekaTipo === 'precio') {
                const costo = costoModal();
                const precioTexto = campo.value.trim();
                const porcentajeCampo = $('mireka-editor-markup-' + n);
                if (precioTexto === '') { porcentajeCampo.value=''; sincronizarFilaModal(n); return; }
                const precio = Number(precioTexto);
                if (costo === null || costo <= 0 || !Number.isFinite(precio) || precio < costo) {
                    estadoModal.textContent = 'Para modificar el precio necesitás un costo mayor a cero y un precio no menor que el costo.';
                    return;
                }
                const precioRedondeado = Math.ceil(precio / 500) * 500;
                const markup = ((precioRedondeado / costo) - 1) * 100;
                porcentajeCampo.value = Number(markup.toFixed(9));
                campo.value = precioRedondeado;
                estadoModal.textContent = 'Los precios de estas listas se redondean hacia arriba cada $500.';
            }
        });
    }
    async function abrirEdicionProducto(producto) {
        const turno = ++modalPeticion;
        modalEdicionId = Number(producto?.id) || null;
        modalEdicionLista = false;
        if (!esElegible(producto)) { modoEditor(false); return; }
        modoEditor(true);
        filasModal.innerHTML = '';
        estadoModal.textContent = 'Cargando porcentajes actuales...';
        try {
            // Siempre refrescar: las listas pueden haberse editado en otra pestaña.
            await cargarDatos();
            if (turno !== modalPeticion || Number(producto?.id) !== modalEdicionId) return;
            const override = obtenerOverride(producto.id);
            filasModal.innerHTML = ESCALONES.map((umbral,k) => {
                const n = k+1;
                const valor = override[CAMPO(n)];
                const general = numero(configuracion?.[CAMPO(n)]);
                const por = valor == null ? general : Number(valor);
                const precio = costoModal() === null ? null : efectivo(costoModal(), por);
                return `<div class="mireka-editor-lista"><strong>Lista ${n} · desde ${umbral} perfumes</strong>
                    <div class="mireka-editor-lista-campos">
                        <label>Markup (%)<input type="number" id="mireka-editor-markup-${n}" data-mireka-numero="${n}" data-mireka-tipo="markup" min="0" max="1000" step="any" value="${valor == null ? '' : Number(valor)}" placeholder="${general == null ? 'Sin configurar' : general + '% general'}"></label>
                        <label>Precio ($)<input type="number" id="mireka-editor-precio-${n}" data-mireka-numero="${n}" data-mireka-tipo="precio" min="0" step="500" value="${precio == null ? '' : precio}" placeholder="Sin precio"></label>
                    </div><small id="mireka-editor-ayuda-${n}"></small></div>`;
            }).join('');
            modalEdicionLista = true;
            actualizarPreciosModal();
            estadoModal.textContent = 'Podés editar porcentaje o precio. Los campos de markup vacíos usan el porcentaje general.';
        } catch(error) {
            if (turno !== modalPeticion) return;
            estadoModal.textContent = 'No pudieron cargarse las cuatro listas: ' + (error.message || 'error de conexión') + '. No guardes el producto hasta resolverlo.';
            modalEdicionLista = false;
        }
    }
    function validarEdicionProducto(producto) {
        if (!esElegible(producto)) return null;
        if (!modalEdicionLista || Number(producto.id) !== modalEdicionId) {
            throw new Error('Las cuatro listas todavía no se cargaron. Esperá o cerrá y abrí nuevamente el producto.');
        }
        const actual = obtenerOverride(producto.id);
        const valores = ESCALONES.map((_,k) => {
            const n=k+1;
            const x = numero($('mireka-editor-markup-' + n).value);
            if (Number.isNaN(x)) throw new Error('Revisá el markup de la Lista ' + n + '.');
            return x;
        });
        const efectivos = valores.map((v,k) => v == null ? numero(configuracion?.[CAMPO(k+1)]) : v);
        validarPorcentajes(efectivos, producto.nombre_mostrar || producto.nombre || 'el perfume');
        if (valores.some(v=>v!==null) && costoModal()===null) throw new Error('Cargá el costo antes de personalizar las listas.');
        const cambio = valores.some((v,k)=>{
            const viejo = actual[CAMPO(k+1)] == null ? null : Number(actual[CAMPO(k+1)]);
            return v === null ? viejo !== null : viejo === null || Math.abs(v - viejo) > 0.0000001;
        });
        if (!cambio) return null; // Evita upsert innecesario.
        const fila = {producto_id: Number(producto.id)};
        valores.forEach((v,k)=> fila[CAMPO(k+1)] = v);
        return fila;
    }
    async function guardarEdicionProducto(productoId, cambios) {
        if (!cambios) return;
        const {error} = await supabaseClient.from('mireka_markup_listas_producto')
            .upsert({...cambios, producto_id: Number(productoId)}, {onConflict:'producto_id'});
        if (error) throw error;
        excepciones.set(Number(productoId), {...cambios, producto_id: Number(productoId)});
        modalEdicionLista = false;
    }
    // =========================================================
    // EDICIÓN MASIVA DESDE VER STOCK: se conserva una sola selección
    // La acción de listas es independiente de stock/costos para evitar
    // escrituras involuntarias en la tabla de productos.
    // =========================================================
    const modalMasivo = $('modal-edicion-masiva-gestion');
    const zonaMasivo = $('edicion-masiva-datos-bloque');
    const categoriaMasivo = $('edicion-masiva-categoria');
    let ocupadoMasivo = false;
    let cargaMasivoEnCurso = false;
    let guardarMasivo = async () => { throw new Error('La edición masiva todavía no está cargada.'); };
    let errorMasivo = '';
    const idSeleccionados = () => typeof productosSeleccionadosMasivoGestion === 'undefined'
        ? [] : [...productosSeleccionadosMasivoGestion].map(Number).filter(Number.isSafeInteger);
    const productosMasivos = () => {
        const ids = new Set(idSeleccionados());
        return productosElegibles().filter(p => ids.has(Number(p.id)) && p.categoria_mostrar === categoriaMasivo?.value);
    };
    const modosMasivos = () => ESCALONES.map((_,k)=>$('mireka-stock-lista-modo-'+(k+1))?.value || '');
    const mensajeMasivo = (msj,error=false) => {
        const el=$('mireka-stock-lista-mensaje');
        if(el) { el.textContent=msj; el.classList.toggle('listas-mireka-error',error); }
    };
    const categoriaAdmiteListas = () => ['perfumes-grandes','maison-30ml'].includes(categoriaMasivo?.value);
    const actualizarPanelMasivo = () => {
        const nodo=$('mireka-stock-listas-masivas');
        if(!nodo) return;
        const activo = categoriaAdmiteListas() && $('mireka-modo-operacion')?.value === 'listas';
        nodo.classList.toggle('oculto', !activo);
        if(!activo) return;
        const total=productosMasivos().length;
        const seleccion=$('mireka-stock-lista-cantidad');
        if(seleccion) seleccion.textContent=`${total} perfume${total===1?'':'s'} seleccionado${total===1?'':'s'}`;
    };
    async function cargarListasMasivas() {
        if (cargaMasivoEnCurso) return;
        cargaMasivoEnCurso = true;
        try {
            if (!productosElegibles().length && typeof cargarProductosGestion === 'function') await cargarProductosGestion();
            await cargarDatos();
            errorMasivo='';
            mensajeMasivo('Porcentajes cargados. Esta sección modifica solo las listas; no modifica costos ni stock.');
        } catch(e) {
            errorMasivo=String(e.message||'No se pudieron cargar las listas.');
            mensajeMasivo(errorMasivo,true);
        } finally {
            cargaMasivoEnCurso=false;
            actualizarPanelMasivo();
        }
    }
    function planMasivo() {
        if (!listo || errorMasivo) throw new Error(errorMasivo || 'Esperá a que terminen de cargar las listas.');
        const productos=productosMasivos();
        if (!productos.length) throw new Error('Seleccioná al menos un perfume de esta categoría.');
        const modos=modosMasivos();
        if (!modos.some(Boolean)) throw new Error('Elegí una lista para modificar (las otras quedan igual).');
        const cambios=modos.map((modo,k)=>{
            if(modo==='general') return null;
            if(modo==='personalizar') {
                const n=numero($('mireka-stock-lista-valor-'+(k+1)).value);
                if(n===null || !Number.isFinite(n)) throw new Error(`Ingresá un porcentaje válido para Lista ${k+1}.`);
                return n;
            }
            return undefined;
        });
        const plan=productos.map(p=>{
            const antes=obtenerOverride(p.id);
            const despues={producto_id:Number(p.id)};
            ESCALONES.forEach((_,k)=> {
                const n=k+1;
                despues[CAMPO(n)]=cambios[k]===undefined?(antes[CAMPO(n)] ?? null):cambios[k];
            });
            const efectivos=ESCALONES.map((_,k)=>despues[CAMPO(k+1)] ?? numero(configuracion?.[CAMPO(k+1)]));
            validarPorcentajes(efectivos,p.nombre_mostrar || p.nombre || 'un perfume');
            const previo=ESCALONES.map((_,k)=>antes[CAMPO(k+1)] ?? numero(configuracion?.[CAMPO(k+1)]));
            return {p,despues,previo,efectivos};
        });
        return plan;
    }
    function vistaPreviaMasiva() {
        actualizarPanelMasivo();
        const previa=$('mireka-stock-lista-preview');
        if (!previa || !categoriaAdmiteListas() || $('edicion-masiva-solo-dolar')?.checked) return;
        if(!modosMasivos().some(Boolean)) { previa.textContent='Elegí qué porcentajes modificar. Las listas no seleccionadas conservarán sus valores.';return; }
        try {
            const plan=planMasivo();
            const muestra=plan.slice(0,8).map(({p,previo,efectivos})=>{
                const datos=efectivos.map((por,k)=>{
                    const costeActual=coste(p);
                    const antes=efectivo(costeActual,previo[k]);
                    const despues=efectivo(costeActual,por);
                    return `<td>${antes===null?'—':dinero(antes)} → <b>${despues===null?'—':dinero(despues)}</b></td>`;
                }).join('');
                return `<tr><td>${escapar(p.nombre_mostrar||p.nombre||'Perfume')}</td>${datos}</tr>`;
            }).join('');
            previa.innerHTML=`<strong>Vista previa: ${plan.length} perfumes</strong><div class="mireka-tabla-masiva"><table><thead><tr><th>Producto</th><th>Lista 1</th><th>Lista 2</th><th>Lista 3</th><th>Lista 4</th></tr></thead><tbody>${muestra}</tbody></table></div>${plan.length>8?`<small>Mostrando los primeros 8 de ${plan.length} productos.</small>`:''}`;
            mensajeMasivo('Revisá los precios antes de confirmar. Solo se actualizarán los porcentajes de las listas que elijas.');
        } catch(e) { previa.textContent=''; mensajeMasivo(e.message,true); }
    }
    if (zonaMasivo && modalMasivo && categoriaMasivo) {
        const div=document.createElement('div');
        div.id='mireka-stock-listas-masivas';
        div.className='edicion-masiva-seccion mireka-stock-listas-masivas oculto';
        div.innerHTML=`<h3>Cuatro listas mayoristas · edición masiva</h3>
            <p>Solo se aplican a los perfumes seleccionados arriba. Los que no modifiques mantienen su porcentaje actual.</p>
            <div class="mireka-bulk-listas-grid">${ESCALONES.map((umbral,k)=>{
                const n=k+1;
                return `<div class="mireka-bulk-lista"><strong>Lista ${n} · desde ${umbral}</strong>
                    <select id="mireka-stock-lista-modo-${n}"><option value="">Sin cambios</option>
                        <option value="personalizar">Poner porcentaje propio</option>
                        <option value="general">Usar porcentaje general</option></select>
                    <input id="mireka-stock-lista-valor-${n}" type="number" min="0" max="1000" step="0.01" placeholder="Markup %" disabled></div>`;
            }).join('')}</div>
            <p id="mireka-stock-lista-cantidad">0 seleccionados</p>
            <div id="mireka-stock-lista-preview" class="mireka-stock-lista-preview" aria-live="polite"></div>
            <p id="mireka-stock-lista-mensaje" class="listas-mireka-estado" role="status"></p>
            <p><small>Usá el botón «Guardar listas de los seleccionados» al pie de la ventana. Solo se guardarán las listas modificadas.</small></p>`;
        const anterior=$('mensaje-edicion-masiva');
        if (anterior) anterior.before(div); else zonaMasivo.appendChild(div);
        $('edicion-masiva-solo-dolar')?.addEventListener('change',()=>queueMicrotask(actualizarPanelMasivo));
        $('edicion-masiva-stock')?.addEventListener('click',()=>queueMicrotask(actualizarPanelMasivo));
        $('cerrar-edicion-masiva')?.addEventListener('click',()=>queueMicrotask(actualizarPanelMasivo));
        $('cancelar-edicion-masiva')?.addEventListener('click',()=>queueMicrotask(actualizarPanelMasivo));
        categoriaMasivo.addEventListener('change',()=> {
            ESCALONES.forEach((_,k)=>{
                const n=k+1;
                $('mireka-stock-lista-modo-'+n).value='';
                $('mireka-stock-lista-valor-'+n).value='';
                $('mireka-stock-lista-valor-'+n).disabled=true;
            });
            actualizarPanelMasivo();
            if(categoriaAdmiteListas()) cargarListasMasivas();
        });
        // Reutilizar los mismos checks; no copiar ni duplicar la selección.
        $('edicion-masiva-productos')?.addEventListener('change',()=>queueMicrotask(vistaPreviaMasiva));
        $('edicion-masiva-marcar-todos')?.addEventListener('click',()=>queueMicrotask(vistaPreviaMasiva));
        $('edicion-masiva-desmarcar-todos')?.addEventListener('click',()=>queueMicrotask(vistaPreviaMasiva));
        ESCALONES.forEach((_,k)=>{
            const n=k+1;
            $('mireka-stock-lista-modo-'+n).addEventListener('change',e=>{
                $('mireka-stock-lista-valor-'+n).disabled=e.target.value!=='personalizar';
                vistaPreviaMasiva();
            });
            $('mireka-stock-lista-valor-'+n).addEventListener('input',vistaPreviaMasiva);
        });
        guardarMasivo = async()=>{
            if(ocupadoMasivo) return;
            const btn=$('guardar-edicion-masiva');
            try {
                const plan=planMasivo();
                const mensaje=`¿Guardar las cuatro listas de ${plan.length} perfumes seleccionados? No cambiará su costo, stock ni precio minorista.`;
                if(!window.confirm(mensaje)) return;
                ocupadoMasivo=true;btn.disabled=true;
                let guardados=0;
                for(let i=0;i<plan.length;i+=40){
                    const lote=plan.slice(i,i+40);
                    const {error}=await supabaseClient.from('mireka_markup_listas_producto')
                        .upsert(lote.map(p=>p.despues),{onConflict:'producto_id'});
                    if(error) throw new Error(`Se guardaron ${guardados} de ${plan.length}. ${error.message}`);
                    lote.forEach(({p,despues})=>excepciones.set(Number(p.id),despues));
                    guardados+=lote.length;
                }
                mensajeMasivo(`Se guardaron las listas de ${guardados} perfumes. Costos, stock y minorista intactos.`);
                ESCALONES.forEach((_,k)=>{
                    const n=k+1;
                    $('mireka-stock-lista-modo-'+n).value='';
                    $('mireka-stock-lista-valor-'+n).value='';
                    $('mireka-stock-lista-valor-'+n).disabled=true;
                });
                vistaPreviaMasiva();
            } catch(e) { mensajeMasivo(e.message || 'No se pudieron guardar las listas.',true); }
            finally { ocupadoMasivo=false; btn.disabled=false; btn.textContent='Guardar listas de los seleccionados'; }
        };
        actualizarPanelMasivo();
    }

    window.MirekaListasGestion = {abrirEdicionProducto, actualizarPreciosModal,
        validarEdicionProducto, guardarEdicionProducto, guardarMasivo,
        actualizarMasivo: () => { actualizarPanelMasivo(); if ($('mireka-modo-operacion')?.value === 'listas') vistaPreviaMasiva(); }};
})();

/* Mireka Perfumería — stock físico de etiquetas de decants.
 * La carga inicial/corrección es manual. La base de datos descuenta una
 * etiqueta por cada decant vendido en venta_items, sin duplicar pedidos web.
 */
(() => {
  'use strict';

  const $ = id => document.getElementById(id);
  const panel = $('seccion-etiquetas-decants');
  const aplicacion = $('aplicacion-gestion');
  if (!panel || !aplicacion) return;

  const NOMBRE_TABLA = 'mireka_stock_etiquetas_decants';
  const UMBRAL_ALERTA = 4;
  let productos = [];
  let stock = new Map();
  let borradores = new Map();
  let cargado = false;
  let cargando = false;
  let guardando = false;
  let intentoInicial = false;

  const escapar = valor => String(valor ?? '')
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');

  const esVisible = () => !aplicacion.classList.contains('oculto');
  const normalizar = v => v === null || v === undefined || v === '' ? null : Number(v);
  const valido = v => v === null || (Number.isSafeInteger(v) && v >= -999999 && v <= 999999);
  const validoParaGuardar = v => v === null || (Number.isSafeInteger(v) && v >= 0 && v <= 999999);
  const valorActual = id => borradores.has(id)
    ? normalizar(borradores.get(id))
    : (stock.get(id) ?? null);
  const datos = () => productos.map(p => ({...p, cantidad: valorActual(p.id)}));
  const esBajo = n => n !== null && valido(n) && n <= UMBRAL_ALERTA;

  function estado(mensaje, error = false) {
    const e = $('mireka-etiquetas-estado');
    if (e) {
      e.textContent = mensaje;
      e.classList.toggle('error', error);
    }
  }

  function resumen() {
    const filas = datos();
    const bajo = filas.filter(p => esBajo(p.cantidad));
    const sinCargar = filas.filter(p => p.cantidad === null);
    const invalidos = [...borradores].filter(([id,texto]) => !validoParaGuardar(normalizar(texto)));
    const met = $('mireka-etiquetas-metricas');
    if (met) met.innerHTML = `
      <div class="mireka-etiquetas-metrica"><strong>${filas.length}</strong><span>Perfumes en decants</span></div>
      <div class="mireka-etiquetas-metrica ${bajo.length ? 'bajo' : ''}"><strong>${bajo.length}</strong><span>Alerta: 4 o menos</span></div>
      <div class="mireka-etiquetas-metrica"><strong>${sinCargar.length}</strong><span>Sin stock inicial</span></div>`;
    const pendientes = $('mireka-etiquetas-pendientes');
    if (pendientes) pendientes.textContent = invalidos.length
      ? 'Revisá las cantidades: usá números enteros de 0 a 999999.'
      : borradores.size
        ? `${borradores.size} ${borradores.size === 1 ? 'cambio pendiente' : 'cambios pendientes'} de guardar.`
        : 'No hay cambios pendientes.';
    const boton = $('mireka-etiquetas-guardar');
    if (boton) boton.disabled = guardando || !borradores.size || !!invalidos.length;
  }

  function alertasServidor() {
    const bajo = productos.filter(p => esBajo(stock.get(p.id) ?? null));
    const banner = $('mireka-etiquetas-alerta-inicio');
    const badge = $('etiquetas-menu-alerta');
    if (banner) banner.classList.toggle('oculto', bajo.length === 0);
    if (badge) {
      badge.classList.toggle('oculto', bajo.length === 0);
      badge.textContent = bajo.length ? String(bajo.length) : '';
    }
    const detalle = $('mireka-etiquetas-alerta-texto');
    if (detalle && bajo.length) {
      const nombres = bajo.slice(0, 3).map(p => {
        const n = stock.get(p.id);
        return `${p.nombre}: ${n < 0 ? `faltan ${Math.abs(n)}` : `quedan ${n}`} ${Math.abs(n) === 1 ? 'etiqueta' : 'etiquetas'}`;
      }).join(' · ');
      detalle.textContent = `${bajo.length} ${bajo.length === 1 ? 'perfume necesita' : 'perfumes necesitan'} etiquetas. ${nombres}${bajo.length > 3 ? ` · y ${bajo.length - 3} más` : ''}.`;
    }
  }

  function estadoStock(n) {
    if (!valido(n)) return {nombre:'Revisar',clase:'bajo'};
    if (n === null) return {nombre:'Sin cargar',clase:''};
    if (n < 0) return {nombre:`⚠ Faltan ${Math.abs(n)}`,clase:'bajo'};
    if (n <= UMBRAL_ALERTA) return {nombre:`⚠ Quedan ${n}`,clase:'bajo'};
    return {nombre:`${n} disponibles`,clase:'ok'};
  }

  function renderizar() {
    const cont = $('mireka-etiquetas-listado');
    if (!cont) return;
    if (!productos.length) {
      cont.innerHTML = '<p style="padding:20px;color:#64748b">No hay decants registrados todavía.</p>';
      resumen();
      return;
    }
    cont.innerHTML = productos.map(p => {
      const n = valorActual(p.id);
      const st = estadoStock(n);
      const cambiado = borradores.has(p.id);
      return `<div class="mireka-etiquetas-fila ${st.clase === 'bajo' ? 'bajo' : ''} ${cambiado ? 'pendiente' : ''}" data-etiquetas-fila="${p.id}" data-etiquetas-nombre="${escapar(p.nombre.toLocaleLowerCase('es-AR'))}">
        <div class="mireka-etiquetas-nombre">${escapar(p.nombre)}<small>Etiqueta para decant 5 ml</small></div>
        <label class="mireka-etiquetas-cantidad"><input type="number" min="0" max="999999" step="1" inputmode="numeric" aria-label="Cantidad de etiquetas de ${escapar(p.nombre)}" data-etiquetas-id="${p.id}" placeholder="Sin cargar" value="${n === null || !valido(n) ? '' : n}"></label>
        <div class="mireka-etiquetas-estado-stock ${st.clase}">${st.nombre}</div>
      </div>`;
    }).join('');
    resumen();
    filtrar();
  }

  function filtrar() {
    const q = ($('mireka-etiquetas-buscar')?.value || '').toLocaleLowerCase('es-AR').trim();
    const f = $('mireka-etiquetas-filtrar')?.value || 'todos';
    panel.querySelectorAll('[data-etiquetas-fila]').forEach(fila => {
      const id = Number(fila.dataset.etiquetasFila);
      const n = valorActual(id);
      const entra = (fila.dataset.etiquetasNombre || '').includes(q)
        && (f === 'todos' || (f === 'bajos' && esBajo(n)) || (f === 'sin-cargar' && n === null));
      fila.classList.toggle('oculto', !entra);
    });
  }

  async function refrescar(forzar = false) {
    if (cargando || guardando || !esVisible()) return;
    if (forzar && borradores.size && !window.confirm('Hay cantidades sin guardar. ¿Descartar esos cambios y actualizar?')) return;
    cargando = true;
    try {
      const [rp, rs] = await Promise.all([
        supabaseClient.from('productos').select('id,nombre,marca,categoria,retirado')
          .eq('categoria', 'decants'),
        supabaseClient.from(NOMBRE_TABLA).select('producto_id,cantidad,actualizado_el')
      ]);
      if (rp.error || rs.error) throw rp.error || rs.error;
      const nuevos = (rp.data || [])
        .filter(p => p.retirado !== true)
        .map(p => ({id:Number(p.id), nombre:String(p.nombre || `Decant #${p.id}`)}))
        .sort((a, b) => a.nombre.localeCompare(b.nombre, 'es-AR'));
      const nuevasCantidades = new Map((rs.data || []).map(row => [Number(row.producto_id), normalizar(row.cantidad)]));
      productos = nuevos;
      stock = nuevasCantidades;
      cargado = true;
      if (forzar) borradores.clear();
      alertasServidor();
      // No perder lo escrito si un refresco automático coincide con la carga manual.
      if (!borradores.size || forzar || !panel.querySelector('[data-etiquetas-fila]')) renderizar();
      else resumen();
      if (!borradores.size) estado(`Actualizado. ${nuevos.length} decants disponibles para controlar.`);
    } catch (error) {
      console.error('Mireka: error al cargar stock de etiquetas:', error);
      estado(`No se pudo cargar el stock de etiquetas: ${error.message || 'error de conexión'}.`, true);
    } finally { cargando = false; }
  }

  async function guardar() {
    if (guardando || !borradores.size || !cargado) return;
    const cambios = [...borradores].map(([id, texto]) => ({producto_id:id, cantidad:normalizar(texto)}));
    if (cambios.some(r => !validoParaGuardar(r.cantidad))) {
      estado('Cada cantidad debe ser un número entero entre 0 y 999999.', true);
      return;
    }
    guardando = true;
    resumen();
    estado('Guardando cantidades...');
    try {
      const {error} = await supabaseClient.from(NOMBRE_TABLA).upsert(cambios,{onConflict:'producto_id'});
      if (error) throw error;
      borradores.clear();
      for (const r of cambios) stock.set(r.producto_id, r.cantidad);
      alertasServidor();
      renderizar();
      estado(`✓ Guardaste ${cambios.length} ${cambios.length === 1 ? 'cantidad' : 'cantidades'}. Las próximas ventas descontarán etiquetas automáticamente.`);
    } catch (error) {
      console.error('Mireka: error al guardar etiquetas:', error);
      estado(`No se pudieron guardar las cantidades: ${error.message || 'error de conexión'}.`, true);
    } finally { guardando = false; resumen(); }
  }

  function abrir() {
    if (typeof cerrarSeccionesGestion === 'function') cerrarSeccionesGestion();
    if (typeof ocultarSeccionesMenuGestion === 'function') ocultarSeccionesMenuGestion();
    panel.classList.remove('oculto');
    if (typeof activarPantallaGestion === 'function') activarPantallaGestion('seccion-etiquetas-decants');
    if (!cargado) estado('Cargando etiquetas...');
    if (cargado && !panel.querySelector('[data-etiquetas-fila]')) renderizar();
    refrescar();
  }

  $('abrir-etiquetas-decants')?.addEventListener('click', abrir);
  $('mireka-etiquetas-alerta-ver')?.addEventListener('click', abrir);
  $('cerrar-etiquetas-decants')?.addEventListener('click', () => {
    if (borradores.size && !window.confirm('Tenés cantidades sin guardar. ¿Salir igual?')) return;
    borradores.clear();
    panel.classList.add('oculto');
    if (typeof mostrarInicioGestion === 'function') mostrarInicioGestion();
  });
  $('mireka-etiquetas-actualizar')?.addEventListener('click', () => refrescar(true));
  $('mireka-etiquetas-guardar')?.addEventListener('click', guardar);
  $('mireka-etiquetas-buscar')?.addEventListener('input', filtrar);
  $('mireka-etiquetas-filtrar')?.addEventListener('change', filtrar);

  $('mireka-etiquetas-listado')?.addEventListener('input', evento => {
    const campo = evento.target.closest('input[data-etiquetas-id]');
    if (!campo) return;
    const id = Number(campo.dataset.etiquetasId);
    const nuevo = normalizar(campo.value);
    if (nuevo === (stock.get(id) ?? null)) borradores.delete(id);
    else borradores.set(id, campo.value);
    const fila = campo.closest('[data-etiquetas-fila]');
    const est = estadoStock(nuevo);
    fila?.classList.toggle('bajo', est.clase === 'bajo');
    fila?.classList.toggle('pendiente', borradores.has(id));
    const etiqueta = fila?.querySelector('.mireka-etiquetas-estado-stock');
    if (etiqueta) {
      etiqueta.className = `mireka-etiquetas-estado-stock ${est.clase}`;
      etiqueta.textContent = est.nombre;
    }
    resumen();
    filtrar();
    estado(borradores.size ? 'Hay cantidades sin guardar. Presioná “Guardar cantidades”.' : 'Cantidades al día.');
  });

  window.mirekaRefrescarEtiquetas = () => refrescar();
  const observarLogin = new MutationObserver(() => {
    if (esVisible() && !intentoInicial) {
      intentoInicial = true;
      refrescar();
    } else if (!esVisible()) {
      intentoInicial = false;
      stock = new Map();
      productos = [];
      borradores.clear();
      cargado = false;
      $('mireka-etiquetas-alerta-inicio')?.classList.add('oculto');
      $('etiquetas-menu-alerta')?.classList.add('oculto');
    }
  });
  observarLogin.observe(aplicacion, {attributes:true,attributeFilter:['class']});
  if (esVisible()) {intentoInicial = true; refrescar();}
  // Si entró una venta desde otra pestaña, reflejar el nuevo saldo sin recargar.
  window.setInterval(() => { if (esVisible() && !document.hidden) refrescar(); }, 30000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden && esVisible()) refrescar(); });
})();

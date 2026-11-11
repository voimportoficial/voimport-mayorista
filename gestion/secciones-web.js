/* Mireka Perfumería | Administración de colecciones y calculadora de ofertas.
 * No utiliza claves privadas. La autorización se mantiene bajo RLS de Supabase.
 * Los datos de costo son exclusivos de Gestión; NO se publican en la tienda.
 */
(() => {
'use strict';
const $ = id => document.getElementById(id);
const lista = $('lista-productos'), status = $('estado-general');
let productos = [], visibles = 30;
const OBJETIVO_MARKUP = 110;
const DESCUENTO_EFECTIVO = .20;
const dinero = n => new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(Number(n)||0);
const esc = s => String(s ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
const costoValido = p => p.costo_actual !== null && p.costo_actual !== undefined && p.costo_actual !== '' && Number.isFinite(Number(p.costo_actual)) && Number(p.costo_actual)>0;
const costo = p => costoValido(p) ? Number(p.costo_actual) : null;
const precioListaReal = p => {
 const base=Number(p.precio_minorista)||0;
 if(base<=0)return 0;
 const valor=base/(1-DESCUENTO_EFECTIVO);
 return p.categoria==='decants' ? Math.ceil(valor/500)*500 : Math.round(valor);
};
function aviso(m,tipo=''){status.textContent=m;status.className='aviso '+tipo;}
function filtrados(){
 const q=$('buscar').value.trim().toLocaleLowerCase('es-AR'), filtro=$('filtro').value;
 return productos.filter(p=>{
  if(q && ![p.nombre,p.marca,p.slug].join(' ').toLocaleLowerCase('es-AR').includes(q))return false;
  if(filtro==='nuevos')return p.destacado_nuevo;
  if(filtro==='ofertas')return p.destacado_oferta;
  if(filtro==='mas-vendidos')return p.destacado_mas_vendido;
  if(filtro==='sin-clasificar')return !p.genero_web;
  return true;
 });
}
function tarjeta(p){
 const base=Number(p.precio_minorista)||0;
 const promocion=p.precio_oferta_minorista??'';
 const seleccionado=p.genero_web||'';
 const nombre=esc(p.nombre||p.slug),marca=esc(p.marca||'');
 // Supabase puede tener el logo genérico como imagen de los productos.
 // Priorizamos la foto del mismo catálogo usado en la tienda pública.
 const clave=[p.nombre,p.marca,p.categoria].map(v=>String(v||'').trim().toLowerCase()).join('|');
 const listado=window.mirekaFotosCatalogo||[];
 const ficha=listado.find(x=>x.id===String(p.slug||'').trim().toLowerCase())
   || listado.find(x=>x.clave===clave);
 const rutaCatalogo=String(ficha?.imagen||'').trim();
 const rutaSupabase=String(p.imagen||'').trim();
 const normalizarRuta=ruta=>{
  if(!ruta)return '';
  if(/^(https?:|data:)/i.test(ruta))return ruta;
  const limpia=ruta.replace(/^(\.\.\/|\.\/|\/)+/g,'');
  return '../'+limpia;
 };
 const src=normalizarRuta(rutaCatalogo||rutaSupabase)||'../images/favicon.PNG';
 const respaldo=normalizarRuta(rutaSupabase)||'../images/favicon.PNG';
 const modoInicial=Number(promocion)>0 ? 'extra' : 'pago';
 return `<form class="tarjeta" data-id="${esc(p.id)}">
  <header><img src="${esc(src)}" alt="" loading="lazy" onerror="this.onerror=null;this.src='${esc(respaldo)}'">
  <div><h2>${nombre}</h2><p class="meta">${marca} · ${esc(p.categoria||'')}</p><span class="estado">${p.retirado?'Retirado · ':p.activo===false?'Oculto · ':''}Stock: ${Number(p.stock)||0}</span></div></header>
  <div class="checks">
   <label><input type="checkbox" name="nuevo" ${p.destacado_nuevo?'checked':''}>Nuevos ingresos</label>
   <label><input type="checkbox" name="oferta" ${p.destacado_oferta?'checked':''}>Ofertas</label>
   <label><input type="checkbox" name="mas" ${p.destacado_mas_vendido?'checked':''}>Más vendidos</label>
  </div>
  <label class="campo">Clasificación en la web
   <select name="genero"><option value="">Automática (presentación)</option>
    <option value="mujer" ${seleccionado==='mujer'?'selected':''}>Para ellas</option>
    <option value="hombre" ${seleccionado==='hombre'?'selected':''}>Para ellos</option>
    <option value="unisex" ${seleccionado==='unisex'?'selected':''}>Unisex</option>
   </select></label>
  <div class="calc-descuentos" ${p.destacado_oferta ? '' : 'hidden'}>
    <div class="calc-encabezado"><strong>Calculadora de descuentos</strong><small>Objetivo: markup ${OBJETIVO_MARKUP}%</small></div>
    <p class="calc-descripcion">Compará el descuento y la ganancia real antes de guardarlo. Solo el 20% de pago en efectivo no modifica tu precio de venta.</p>
    <div class="calc-controles">
      <label>Tipo de descuento
        <select name="modoDescuento">
         <option value="pago" ${modoInicial==='pago'?'selected':''}>20% por efectivo / transferencia (precio de lista real)</option>
         <option value="extra" ${modoInicial==='extra'?'selected':''}>Descuento adicional sobre efectivo</option>
        </select>
      </label>
      <label>Porcentaje
        <input type="number" name="porcentaje" min="1" max="100" step="1" value="10" inputmode="numeric" aria-label="Descuento adicional del 1 al 100 por ciento">
      </label>
    </div>
    <div class="calc-valores" aria-live="polite">
     <div class="calc-valor"><span>Precio de lista real</span><strong data-calc="lista">—</strong></div>
     <div class="calc-valor"><span>Precio efectivo habitual</span><strong data-calc="habitual">—</strong></div>
     <div class="calc-valor destacado"><span>Precio final calculado</span><strong data-calc="final">—</strong></div>
     <div class="calc-valor"><span>Ganancia bruta / unidad</span><strong data-calc="ganancia">—</strong></div>
     <div class="calc-valor"><span>Markup efectivo</span><strong data-calc="markup">—</strong></div>
     <div class="calc-valor"><span>Ganancia objetivo (${OBJETIVO_MARKUP}%)</span><strong data-calc="objetivo">—</strong></div>
    </div>
    <p class="calc-nota" data-calc="mensaje" aria-live="polite"></p>
    <button type="button" class="calc-boton">Aplicar cálculo a esta oferta</button>
  </div>
  <label class="campo" data-campo-promo ${p.destacado_oferta && modoInicial==='extra' ? '' : 'hidden'}>Precio promocional adicional · efectivo / transferencia
   <span class="precio-inicial">Precio habitual: ${dinero(base)}</span>
   <input type="number" name="promo" min="1" step="1" placeholder="Ej.: ${Math.round(base*.9)||50000}" value="${esc(promocion)}">
   <small>Para un descuento adicional real, debe ser menor al precio habitual. No se modifica el precio normal.</small>
  </label>
  <div class="acciones"><button class="guardar" type="submit">Guardar cambios</button><span class="resultado" aria-live="polite"></span></div>
 </form>`;
}
function calcular(form,p){
 const base=Number(p.precio_minorista)||0,listaPrecio=precioListaReal(p);
 const modo=form.elements.modoDescuento.value;
 const textoPorcentaje=form.elements.porcentaje.value.trim();
 const pct=textoPorcentaje==='' ? NaN : Number(textoPorcentaje);
 const pctValido=Number.isInteger(pct)&&pct>=1&&pct<=100;
 const final=modo==='pago' ? base : (pctValido ? Math.round(base*(1-pct/100)) : NaN);
 const c=costo(p),ganancia=c===null?null:final-c;
 const markup=c===null?null:(final/c-1)*100;
 const objetivo=c===null?null:c*(1+OBJETIVO_MARKUP/100);
 const respeta=c!==null&&final+0.01>=objetivo;
 return {modo,base,listaPrecio,pct,pctValido,final,c,ganancia,markup,objetivo,respeta};
}
function actualizarCalculadora(form){
 const p=productos.find(p=>String(p.id)===String(form.dataset.id));if(!p)return;
 const r=calcular(form,p), ver=(k,texto)=>{const nodo=form.querySelector(`[data-calc="${k}"]`);if(nodo)nodo.textContent=texto;};
 // Solo desplegar la calculadora si marcaron este perfume como Oferta.
 // Si elige 20% por medio de pago, ocultar el campo de descuento extra.
 const esOferta=form.elements.oferta.checked;
 form.querySelector('.calc-descuentos').hidden=!esOferta;
 form.querySelector('[data-campo-promo]').hidden=!esOferta||r.modo==='pago';
 form.elements.porcentaje.disabled=!esOferta||r.modo==='pago';
 form.elements.promo.disabled=!esOferta||r.modo==='pago';
 form.querySelector('[data-campo-promo]').classList.toggle('promocion-inactiva',r.modo==='pago');
 ver('lista',r.listaPrecio>0?dinero(r.listaPrecio):'Sin precio');
 ver('habitual',r.base>0?dinero(r.base):'Sin precio');
 ver('final',Number.isFinite(r.final)&&r.base>0?dinero(r.final):'—');
 ver('ganancia',r.ganancia===null||!Number.isFinite(r.ganancia)?'Cargá un costo y descuento válidos':dinero(r.ganancia));
 ver('markup',r.markup===null||!Number.isFinite(r.markup)?'—':r.markup.toFixed(1).replace('.',',')+'%');
 ver('objetivo',r.c===null?'—':dinero(r.objetivo-r.c));
 const mensaje=form.querySelector('[data-calc="mensaje"]');
 let texto='',estilo='';
 if(r.base<=0){texto='Cargá un precio minorista válido en Stock para calcular.';estilo='error';}
 else if(r.modo==='extra'&&!r.pctValido){texto='Ingresá un porcentaje entero entre 1% y 100%.';estilo='error';}
 else if(r.modo==='extra'&&r.final<=0){texto='Con 100% de descuento el perfume quedaría gratis. Podés simularlo, pero no se puede guardar como precio promocional de $0.';estilo='advertencia';}
 else if(r.modo==='pago'){
  texto='Descuento por medio de pago: se compara el precio de lista real ('+dinero(r.listaPrecio)+') con el precio efectivo ('+dinero(r.base)+'). No se cambia tu precio base, ni se aplica un segundo 20%.';
  if(r.c===null){texto+=' Cargá el costo del perfume para comprobar el markup.';estilo='advertencia';}
  else if(!r.respeta){texto+=' Advertencia: el precio actual ya está por debajo del markup objetivo de 110%.';estilo='advertencia';}
 }else if(r.c===null){texto='Falta costo actual. El descuento bajaría el precio habitual: cargá el costo en Stock para verificar tu ganancia.';estilo='error';}
 else if(!r.respeta){texto='Este descuento reduce tu markup al '+r.markup.toFixed(1).replace('.',',')+'%. Para conservar el 110%, el precio final debe ser al menos '+dinero(r.objetivo)+'.';estilo='advertencia';}
 else {texto='Con este descuento seguís ganando al menos el 110% sobre tu costo. Podés aplicarlo.';}
 mensaje.textContent=texto;
 mensaje.className='calc-nota '+estilo;
 form.querySelector('.calc-boton').disabled=r.base<=0||(r.modo==='extra'&&(!r.pctValido||r.final<=0||!r.respeta||r.final>=r.base));
}
function render(){
 const datos=filtrados();$('contador').textContent=`${datos.length} producto(s) encontrado(s). Editá y guardá cada perfume por separado.`;
 lista.innerHTML=datos.slice(0,visibles).map(tarjeta).join('');
 lista.querySelectorAll('form.tarjeta').forEach(actualizarCalculadora);
 $('mas').hidden=datos.length<=visibles;
}
function guardarEstadoLocal(id,valores){
 const p=productos.find(p=>String(p.id)===String(id));if(p)Object.assign(p,valores);
}
lista.addEventListener('change',evento=>{
 const form=evento.target.closest('form.tarjeta');if(!form)return;
 if(['oferta','modoDescuento','porcentaje'].includes(evento.target.name)) actualizarCalculadora(form);
});
 // El campo numérico actualiza en tiempo real mientras se escribe el porcentaje.
lista.addEventListener('input',evento=>{
 if(evento.target.name!=='porcentaje')return;
 const form=evento.target.closest('form.tarjeta');if(form)actualizarCalculadora(form);
});
lista.addEventListener('click',evento=>{
 const boton=evento.target.closest('.calc-boton');if(!boton)return;
 const form=boton.closest('form.tarjeta');if(!form)return;
 const p=productos.find(p=>String(p.id)===String(form.dataset.id));if(!p)return;
 const r=calcular(form,p);
 if(r.base<=0){actualizarCalculadora(form);return;}
 if(r.modo==='extra'&&(!r.pctValido||r.final<=0||!r.respeta||r.final>=r.base)){actualizarCalculadora(form);return;}
 form.elements.oferta.checked=true;
 form.elements.promo.value=r.modo==='pago'?'':String(r.final);
 const estado=form.querySelector('.resultado');
 estado.textContent='✓ Calculado. Presioná «Guardar cambios» para aplicar en Supabase.';estado.className='resultado ok';
 actualizarCalculadora(form);
});
lista.addEventListener('submit',async evento=>{
 const form=evento.target.closest('form.tarjeta');if(!form)return;
 evento.preventDefault();
 const id=form.dataset.id,p=productos.find(p=>String(p.id)===String(id));if(!p)return;
 const boton=form.querySelector('.guardar'),mensaje=form.querySelector('.resultado');
 const oferta=form.elements.oferta.checked,modo=form.elements.modoDescuento.value;
 const texto=form.elements.promo.value.trim(),precio=texto===''?null:Number(texto);
 if(oferta&&Number(p.precio_minorista)<=0){mensaje.textContent='Primero cargá el precio minorista en Stock.';mensaje.className='resultado error';return;}
 if(oferta&&modo==='extra'&&(!Number.isFinite(precio)||precio<=0||precio>=Number(p.precio_minorista))){
  mensaje.textContent='Ingresá un precio promocional mayor a $0 y menor al precio efectivo habitual.';mensaje.className='resultado error';return;
 }
 // En modalidad «pago», no hay precio promocional artificial ni doble descuento.
 // Se anuncia el 20% real contra el precio de lista, que ya existe en la web.
 const valores={
  destacado_nuevo:form.elements.nuevo.checked,
  destacado_oferta:oferta,
  destacado_mas_vendido:form.elements.mas.checked,
  genero_web:form.elements.genero.value||null,
  precio_oferta_minorista:oferta&&modo==='extra'?precio:null
 };
 boton.disabled=true;mensaje.textContent='Guardando…';mensaje.className='resultado';
 try{
  const {data,error}=await supabaseClient.from('productos').update(valores).eq('id',p.id).select('id').maybeSingle();
  if(error)throw error;
  if(!data)throw new Error('No se confirmó la actualización. Revisá los permisos de escritura de Gestión.');
  guardarEstadoLocal(id,valores);
  mensaje.textContent='✓ Guardado en Supabase';mensaje.className='resultado ok';
 }catch(e){mensaje.textContent='Error: '+(e.message||e);mensaje.className='resultado error';}
 finally{boton.disabled=false;}
});
$('buscar').addEventListener('input',()=>{visibles=30;render();});
$('filtro').addEventListener('change',()=>{visibles=30;render();});
$('mas').addEventListener('click',()=>{visibles+=30;render();});
async function iniciar(){
 try{
  if(typeof supabaseClient==='undefined')throw new Error('No se pudo iniciar Supabase.');
  const {data:userData,error:userError}=await supabaseClient.auth.getUser();
  if(userError||!userData?.user)throw new Error('Iniciá sesión en Gestión antes de administrar las secciones.');
  // El costo y el markup se leen únicamente en Gestión para la calculadora.
  const campos='id,slug,nombre,marca,categoria,presentacion,imagen,stock,activo,retirado,precio_minorista,costo_actual,markup_minorista,destacado_nuevo,destacado_oferta,destacado_mas_vendido,genero_web,precio_oferta_minorista';
  const {data,error}=await supabaseClient.from('productos').select(campos).order('nombre');
  if(error)throw new Error('No se pudieron leer los campos de Gestión. Detalle: '+error.message);
  productos=Array.isArray(data)?data:[];
  $('area-admin').hidden=false;
  aviso('Conectado a Supabase · calculadora de descuentos y ofertas lista para usar.','ok');
  render();
 }catch(e){aviso(e.message||String(e),'error');}
}
iniciar();
})();

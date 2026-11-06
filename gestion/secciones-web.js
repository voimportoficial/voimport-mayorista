/* Mireka Perfumería | Administración de colecciones con la sesión de Gestión.
 * No incluye claves privadas. La autorización de escritura depende de las
 * políticas RLS existentes de public.productos.
 */
(() => {
'use strict';
const $ = id => document.getElementById(id);
const lista = $('lista-productos'), status = $('estado-general');
let productos = [], visibles = 30;
const dinero = n => new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(Number(n)||0);
const esc = s => String(s ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#39;');
function aviso(m,tipo='') {status.textContent=m;status.className='aviso '+tipo;}
function filtrados(){
 const q=$('buscar').value.trim().toLocaleLowerCase('es-AR');const filtro=$('filtro').value;
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
 const nombre=esc(p.nombre||p.slug), marca=esc(p.marca||'');
 const imagen=String(p.imagen||'').replace(/^\/+/, '');
 // Las imágenes de productos se almacenan con rutas relativas a la raíz.
 const src=imagen ? (/^(https?:|data:)/i.test(imagen) ? imagen : '../'+imagen) : '../images/favicon.PNG';
 return `<form class="tarjeta" data-id="${esc(p.id)}">
  <header><img src="${esc(src)}" alt="" loading="lazy" onerror="this.hidden=true">
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
  <label class="campo">Precio promocional · efectivo / transferencia
   <span class="precio-inicial">Precio normal: ${dinero(base)}</span>
   <input type="number" name="promo" min="1" step="1" placeholder="Ej.: ${Math.round(base*.9)||50000}" value="${esc(promocion)}">
   <small>Solo se aplica si marcás Ofertas. Debe ser menor al normal.</small>
  </label>
  <div class="acciones"><button class="guardar" type="submit">Guardar cambios</button><span class="resultado" aria-live="polite"></span></div>
 </form>`;
}
function render(){
 const datos=filtrados(); $('contador').textContent=`${datos.length} producto(s) encontrado(s). Editá y guardá cada perfume por separado.`;
 const fraccion=datos.slice(0,visibles);
 lista.innerHTML=fraccion.map(tarjeta).join('');
 $('mas').hidden=datos.length<=visibles;
}
function guardarEstadoLocal(id,valores){
 const p=productos.find(p=>String(p.id)===String(id)); if(p)Object.assign(p,valores);
}
lista.addEventListener('submit',async event=>{
 const form=event.target.closest('form.tarjeta');if(!form)return;
 event.preventDefault();
 const id=form.dataset.id;
 const p=productos.find(p=>String(p.id)===String(id));if(!p)return;
 const boton=form.querySelector('.guardar'), mensaje=form.querySelector('.resultado');
 const oferta=form.elements.oferta.checked, texto=form.elements.promo.value.trim();
 const precio=texto===''?null:Number(texto);
 if(oferta && (!Number.isFinite(precio) || precio<=0 || precio>=Number(p.precio_minorista))){
  mensaje.textContent='Ingresá un precio promocional mayor a $0 y menor al precio normal.';mensaje.className='resultado error';return;
 }
 // Cuando no está en Ofertas, limpiar el precio promocional anterior.
 const valores={
  destacado_nuevo:form.elements.nuevo.checked,
  destacado_oferta:oferta,
  destacado_mas_vendido:form.elements.mas.checked,
  genero_web:form.elements.genero.value||null,
  precio_oferta_minorista:oferta?precio:null
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
  const {data,error}=await supabaseClient.from('productos').select('id,slug,nombre,marca,categoria,presentacion,imagen,stock,activo,retirado,precio_minorista,destacado_nuevo,destacado_oferta,destacado_mas_vendido,genero_web,precio_oferta_minorista').order('nombre');
  if(error)throw new Error('No se pudieron leer los campos nuevos. Primero ejecutá el SQL de instalación en Supabase. Detalle: '+error.message);
  productos=Array.isArray(data)?data:[];
  $('area-admin').hidden=false;
  aviso('Conectado a Supabase · seleccioná y guardá los perfumes que querés destacar.','ok');
  render();
 }catch(e){aviso(e.message||String(e),'error');}
}
iniciar();
})();

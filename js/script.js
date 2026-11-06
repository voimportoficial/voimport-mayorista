// VO IMPORT - CATÁLOGO, STOCK, PRECIOS Y CARRITO

// =============================
// CONFIGURACIÓN GENERAL
// =============================

const REGLAS_CATEGORIAS = {
    "perfumes-grandes": {
        nombre: "Perfumes árabes",
        minimoMayorista: 3,
        tieneMayorista: true
    },
    "maison-30ml": {
        nombre: "Maison Alhambra 30 ml",
        minimoMayorista: 3,
        tieneMayorista: true
    },
    "decants": {
        nombre: "Decants 5 ml",
        minimoMayorista: 3,
        tieneMayorista: true
    }
};

// MIREKA | Vista de prueba. Los pedidos no se finalizan hasta sincronizar el backend.
const MIREKA_PRUEBA_SIN_CHECKOUT = true;
const MIREKA_ESCALONES = [3, 6, 15, 30];
let mirekaPreciosPorSlug = new Map();
let mirekaCotizacionesCargadas = false;
// Mireka: la modalidad se recuerda al navegar y al volver a Inicio.
// Un visitante nuevo ve minorista por defecto; los botones de portada
// siguen pudiendo imponer cualquiera de las dos modalidades mediante ?modo=.
const MIREKA_MODO_STORAGE = 'mireka-modo-compra-elegido-v4';
const MIREKA_MODOS_VALIDOS = ['minorista', 'mayorista'];
function mirekaConsumirModoUrl() {
    try {
        const url = new URL(window.location.href);
        const modo = url.searchParams.get('modo');
        if (!MIREKA_MODOS_VALIDOS.includes(modo)) return null;
        url.searchParams.delete('modo');
        window.history.replaceState(window.history.state, '', url.pathname + url.search + url.hash);
        return modo;
    } catch (_) { return null; }
}
function mirekaGuardarModo(modo) {
    if (!MIREKA_MODOS_VALIDOS.includes(modo)) return;
    try { localStorage.setItem(MIREKA_MODO_STORAGE, modo); } catch (_) {}
}
function mirekaLeerModoElegido() {
    try {
        const guardado = localStorage.getItem(MIREKA_MODO_STORAGE)
            || sessionStorage.getItem('mireka-modo-compra-sesion-v3');
        return MIREKA_MODOS_VALIDOS.includes(guardado) ? guardado : null;
    } catch (_) { return null; }
}
const mirekaModoDesdeUrl = mirekaConsumirModoUrl();
if (mirekaModoDesdeUrl) mirekaGuardarModo(mirekaModoDesdeUrl);
let mirekaModoCompra = mirekaModoDesdeUrl || mirekaLeerModoElegido() || 'minorista';
// No se borra el modo al volver a la portada: navegar no es cambiar de compra.

// Cada categoría usa sus propias cantidades para activar una lista.
// Ej.: 2 árabes + 2 Maison + 2 decants NO forman una Lista 1.
function mirekaCantidadCategoria(categoria) {
    return carrito.reduce((total, item) =>
        total + (item.categoria === categoria ? Number(item.cantidad) || 0 : 0), 0);
}
function mirekaNivelPorCantidad(cantidad) {
    if (cantidad >= 30) return 4;
    if (cantidad >= 15) return 3;
    if (cantidad >= 6) return 2;
    if (cantidad >= 3) return 1;
    return 0;
}
function mirekaNivelCategoria(categoria) {
    return mirekaNivelPorCantidad(mirekaCantidadCategoria(categoria));
}
function mirekaPrecioDeNivel(producto, nivel) {
    if (!nivel || !obtenerReglaCategoria(producto.categoria).tieneMayorista) return null;
    const n = Number(producto.preciosListas?.[nivel - 1]);
    return Number.isFinite(n) && n > 0 ? n : null;
}
function mirekaFaltanCotizaciones() {
    return carrito.some(p => {
        const nivel = mirekaNivelCategoria(p.categoria);
        return nivel > 0 && mirekaPrecioDeNivel(p, nivel) === null;
    });
}
// A pedido del comercio, el precio minorista del decant se redondea hacia
// arriba a $500. Se aplica antes de cargar el carrito, NO solo en pantalla.
function mirekaRedondearDecant(precio) {
    const n = Number(precio);
    return Number.isFinite(n) && n > 0 ? Math.ceil(n / 500) * 500 : precio;
}

async function mirekaCargarPreciosPublicos() {
    if (typeof supabaseClient === 'undefined' || !supabaseClient?.rpc) return;
    const {data, error} = await supabaseClient.rpc('mireka_precios_publicos');
    if (error) {
        console.warn('Mireka: las listas todavía no están conectadas a la web:', error.message);
        mirekaCotizacionesCargadas = false;
        return;
    }
    mirekaPreciosPorSlug = new Map((Array.isArray(data) ? data : []).map(row => [
        String(row.slug),
        [1,2,3,4].map(i => {
            const v = Number(row['precio_lista_' + i]);
            return Number.isFinite(v) && v > 0 ? v : null;
        })
    ]));
    mirekaCotizacionesCargadas = true;
}

// Selector discreto y siempre disponible. Sin portal modal que interrumpa
// cada ingreso a marcas, categorías, novedades, ofertas o fichas de producto.
function mirekaActualizarSelector() {
    document.body.dataset.mirekaModo = mirekaModoCompra;
    document.querySelectorAll('[data-mireka-cambiar-a]').forEach(boton => {
        const activo = boton.dataset.mirekaCambiarA === mirekaModoCompra;
        boton.classList.toggle('mireka-switch-activo', activo);
        boton.setAttribute('aria-pressed', String(activo));
    });
    const ayudaModo = document.getElementById('mireka-selector-ayuda');
    if (ayudaModo) ayudaModo.textContent = mirekaModoCompra === 'mayorista'
        ? 'Listas mayoristas de 3, 6, 15 y 30 unidades. El precio final depende de la cantidad por categoría.'
        : 'Precios por unidad. Podés pagar en efectivo, transferencia o Mercado Pago.';
    const ayuda = document.getElementById('texto-precios-catalogo');
    if (ayuda) {
        ayuda.textContent = mirekaModoCompra === 'mayorista'
            ? 'Cada categoría se calcula por separado: árabes, Maison 30 ml y decants. Desde 3 unidades de la misma categoría accedés a Lista 1; luego 6, 15 y 30.'
            : 'Precios minoristas por unidad. Efectivo / transferencia o Mercado Pago. Desde 3 unidades de la misma categoría el carrito aplica la lista mayorista.';
    }
}
function mirekaCrearSelectorVisible() {
    const grid = document.getElementById('productos-grid');
    const ficha = document.querySelector('.producto-detalle-info');
    if ((!grid && !ficha) || document.getElementById('mireka-resumen-eleccion')) return;
    const bloque = document.createElement('section');
    bloque.id = 'mireka-resumen-eleccion';
    bloque.className = 'mireka-resumen-eleccion mireka-selector-compacto';
    bloque.setAttribute('aria-label', 'Modalidad de compra');
    bloque.innerHTML = `<div class="mireka-selector-descripcion">
          <strong>¿Cómo querés comprar?</strong>
          <small id="mireka-selector-ayuda"></small>
        </div>
        <div class="mireka-selector-opciones" role="group" aria-label="Elegí una modalidad">
          <button type="button" data-mireka-cambiar-a="minorista" aria-pressed="false">Minorista</button>
          <button type="button" data-mireka-cambiar-a="mayorista" aria-pressed="false">Mayorista</button>
        </div>`;
    if (grid) {
        const introduccion = document.querySelector('.catalogo-intro');
        if (introduccion) introduccion.insertAdjacentElement('afterend', bloque);
        else grid.parentElement.insertBefore(bloque, grid);
    } else {
        const precioDetalle = document.getElementById('producto-precios-detalle');
        if (precioDetalle) ficha.insertBefore(bloque, precioDetalle);
        else ficha.prepend(bloque);
    }
    bloque.querySelectorAll('[data-mireka-cambiar-a]').forEach(boton => {
        boton.addEventListener('click', () => mirekaElegirModalidad(boton.dataset.mirekaCambiarA));
    });
    mirekaActualizarSelector();
}
function mirekaElegirModalidad(modo) {
    if (!MIREKA_MODOS_VALIDOS.includes(modo)) return;
    if (mirekaModoCompra === modo) return;
    mirekaModoCompra = modo;
    mirekaGuardarModo(modo);
    mirekaActualizarSelector();
    generarCatalogo();
    actualizarFichaIndividual();
    actualizarCarrito();
}
function mirekaIniciarSelectorCompra() {
    // El cliente puede navegar libremente por Inicio, marcas y categorías.
    // La portada manda ?modo y los catálogos muestran el selector compacto.
    mirekaCrearSelectorVisible();
    mirekaActualizarSelector();
    // En navegaciones BFCache refrescamos las etiquetas sin abrir modales.
    window.addEventListener('pageshow', () => mirekaActualizarSelector());
}

const CATEGORIA_PREDETERMINADA = "perfumes-grandes";
const numeroWhatsApp = "5491134293000";

const DESCUENTO_EFECTIVO_TRANSFERENCIA = 0.20;
const MEDIO_PAGO_CARRITO_KEY = "voimport-medio-pago-carrito";

let medioPagoCarrito = "transferencia";
let flujoCheckoutMinorista = false;
let clienteCheckoutActual = null;

try {
    const medioGuardado = localStorage.getItem(
        MEDIO_PAGO_CARRITO_KEY
    );

    if (
        ["efectivo", "transferencia", "mercado_pago"].includes(
            medioGuardado
        )
    ) {
        medioPagoCarrito = medioGuardado;
    }
} catch (_) {
    medioPagoCarrito = "transferencia";
}

let catalogoActualizado = [];
let productosSupabasePorSlug = new Map();
let productosSupabasePorClave = new Map();
let carrito = cargarCarritoGuardado();


// =============================
// CARRITO GLOBAL
// =============================

if (!document.getElementById("abrir-carrito")) {
    document.body.insertAdjacentHTML(
        "beforeend",
        `
        <button
            type="button"
            class="boton-carrito"
            id="abrir-carrito"
            aria-label="Abrir carrito"
        >
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 3h2l2.2 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 7H7"></path>
                <circle cx="10" cy="20" r="1"></circle>
                <circle cx="18" cy="20" r="1"></circle>
            </svg>

            <span id="contador-carrito">0</span>
        </button>


        <div
            class="carrito-overlay"
            id="carrito-overlay"
        ></div>


        <aside
    class="carrito-panel"
    id="carrito-panel"
>


    <div class="carrito-encabezado">


        <h2>Mi carrito</h2>


        <button
            type="button"
            class="cerrar-carrito"
            id="cerrar-carrito"
            aria-label="Cerrar carrito"
        >
            ×
        </button>


    </div>



    <div
        class="carrito-productos"
        id="carrito-productos"
    >
        <p class="carrito-vacio">
            Tu carrito está vacío.
        </p>
    </div>



    <div class="carrito-resumen">


        <p id="mensaje-mayorista">
            Los mínimos mayoristas se calculan por categoría.
        </p>


        <button
            type="button"
            class="vaciar-carrito"
            id="vaciar-carrito"
        >
            Vaciar carrito
        </button>


        <div class="carrito-total">
            <span>Total</span>
            <strong id="carrito-total">$0</strong>
        </div>


        <button
            type="button"
            class="finalizar-pedido"
            id="finalizar-pedido"
        >
            Finalizar pedido
        </button>


    </div>


</aside>
`
);
}
// =============================
// PAGO POR TRANSFERENCIA
// =============================

const resumenCarritoPago = document.querySelector(".carrito-resumen");

if (
    resumenCarritoPago &&
    !document.getElementById("carrito-medio-pago")
) {
    const mensajeMayoristaCarrito =
        document.getElementById("mensaje-mayorista");

    const htmlMedioPago = `
        <div
            class="carrito-medio-pago"
            id="carrito-medio-pago"
        >
            <h3>¿Cómo querés pagar?</h3>

            <label class="carrito-medio-pago-opcion">
                <input
                    type="radio"
                    name="carrito-medio-pago"
                    value="efectivo"
                >
                <span>
                    <strong>Efectivo</strong>
                    <small>20% OFF</small>
                </span>
            </label>

            <label class="carrito-medio-pago-opcion">
                <input
                    type="radio"
                    name="carrito-medio-pago"
                    value="transferencia"
                >
                <span>
                    <strong>Transferencia</strong>
                    <small>20% OFF</small>
                </span>
            </label>

            <label class="carrito-medio-pago-opcion">
                <input
                    type="radio"
                    name="carrito-medio-pago"
                    value="mercado_pago"
                >
                <span>
                    <strong>Tarjeta / Mercado Pago</strong>
                    <small>Precio de lista</small>
                </span>
            </label>
        </div>
    `;

    if (mensajeMayoristaCarrito) {
        mensajeMayoristaCarrito.insertAdjacentHTML(
            "afterend",
            htmlMedioPago
        );
    } else {
        resumenCarritoPago.insertAdjacentHTML(
            "afterbegin",
            htmlMedioPago
        );
    }
}

if (
    resumenCarritoPago &&
    !document.getElementById("carrito-pago-transferencia")
) {
    resumenCarritoPago.insertAdjacentHTML(
        "afterbegin",
        `
        <div
            class="carrito-pago-transferencia"
            id="carrito-pago-transferencia"
        >

            <h3>Datos para transferencia</h3>

            <p class="carrito-pago-texto">
                Finalizá el pedido por WhatsApp. Después realizá la transferencia y enviá el comprobante para confirmar el pago.
            </p>

            <div class="carrito-dato-pago">
                <span>Titular</span>
                <strong>Eric Damian Ranzoni</strong>
            </div>

            <div class="carrito-dato-pago">
                <span>Alias</span>

                <div class="carrito-alias-fila">
                    <strong>voimport.lemon</strong>

                    <button
                        type="button"
                        class="copiar-alias"
                        id="copiar-alias"
                    >
                        Copiar
                    </button>
                </div>
            </div>

            <div class="carrito-dato-pago">
                <span>CVU</span>
                <strong>0000168300000017205739</strong>
            </div>

            <p class="carrito-reserva-aviso">
                El pedido se registra como pendiente y queda confirmado una vez recibido y verificado el pago.
            </p>

            <button
                type="button"
                class="enviar-comprobante"
                id="enviar-comprobante"
                hidden
            >
                Finalizar pedido por WhatsApp
            </button>

        </div>
        `
    );
}

// =============================
// MERCADO PAGO - BOTÓN
// =============================

const bloqueTotalCarrito =
    document.querySelector(".carrito-total");

if (
    bloqueTotalCarrito &&
    !document.getElementById("pagar-mercado-pago")
) {
    bloqueTotalCarrito.insertAdjacentHTML(
        "afterend",
        `
       <button
    type="button"
    class="boton-mercado-pago"
    id="pagar-mercado-pago"
>
    <img
    src="images/MP_RGB_HANDSHAKE_color_horizontal.svg"
    alt="Mercado Pago"
    class="mercado-pago-logo"
>

</button>

        <p
            id="mensaje-mercado-pago"
            class="carrito-reserva-aviso"
            hidden
        ></p>
        `
    );
}

// =============================
// MEDIO DE PAGO DEL CARRITO
// =============================

const bloqueMedioPagoCarrito =
    document.getElementById("carrito-medio-pago");

const opcionesMedioPagoCarrito =
    document.querySelectorAll(
        'input[name="carrito-medio-pago"]'
    );

function guardarMedioPagoCarrito() {
    try {
        localStorage.setItem(
            MEDIO_PAGO_CARRITO_KEY,
            medioPagoCarrito
        );
    } catch (_) {
        // Si localStorage no está disponible, continuamos igual.
    }
}

opcionesMedioPagoCarrito.forEach((opcion) => {
    opcion.checked =
        opcion.value === medioPagoCarrito;

    opcion.addEventListener("change", () => {
        if (!opcion.checked) return;

        medioPagoCarrito = opcion.value;
        guardarMedioPagoCarrito();
        actualizarCarrito();
    });
});

// =============================
// COPIAR ALIAS
// =============================

const botonCopiarAlias = document.getElementById("copiar-alias");

botonCopiarAlias?.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText("voimport.lemon");

        botonCopiarAlias.textContent = "Copiado ✓";

        setTimeout(() => {
            botonCopiarAlias.textContent = "Copiar";
        }, 1500);

    } catch (error) {
        alert("Alias: voimport.lemon");
    }
});
// =============================
// FINALIZAR PEDIDO POR TRANSFERENCIA EN WHATSAPP
// =============================

const botonEnviarComprobante =
    document.getElementById("enviar-comprobante");

botonEnviarComprobante?.addEventListener(
    "click",
    () => {

        if (carrito.length === 0) {
            alert("Agregá productos al carrito antes de finalizar el pedido.");
            return;
        }

        medioPagoCarrito = "transferencia";
        guardarMedioPagoCarrito();

        abrirModalClienteWeb(
            procesarEnvioComprobanteWeb
        );

    }
);


async function procesarEnvioComprobanteWeb(
    cliente
) {

    const ventanaWhatsApp =
        window.open("", "_blank");

    if (!ventanaWhatsApp) {
        alert("El navegador bloqueó la ventana de WhatsApp. Permití las ventanas emergentes e intentá de nuevo.");
        return;
    }

    ventanaWhatsApp.opener = null;

    const botonAccionTransferencia =
        document.getElementById("checkout-finalizar-whatsapp") ||
        botonFinalizarPedido ||
        botonEnviarComprobante;

    const textoOriginal =
        botonAccionTransferencia?.textContent ||
        "Ya transferí · Enviar comprobante por WhatsApp";

    if (botonAccionTransferencia) {
        botonAccionTransferencia.disabled = true;
        botonAccionTransferencia.textContent =
            "Registrando pedido...";
    }

    try {

        const pedido =
            await registrarPedidoWebPendiente(
                "transferencia",
                cliente
            );

        const introduccionTransferencia =
            carritoTieneMayorista()
                ? "Hola, realicé la transferencia para confirmar el siguiente pedido mayorista:"
                : "Hola, realicé la transferencia para confirmar el siguiente pedido:";

        const mensajePedido =
            crearMensajePedido(
                pedido.codigo,
                cliente
            )
                .replace(
                    "Hola, quiero realizar el siguiente pedido:",
                    introduccionTransferencia
                )
                .replace(
                    "Quedo a la espera para coordinar el pago y la entrega.",
                    "Te envío el comprobante de la transferencia para que puedan verificar el pago."
                );

        const mensaje = encodeURIComponent(
            mensajePedido
        );

        const enlaceWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

        ventanaWhatsApp.location.href =
            enlaceWhatsApp;

        cerrarModalClienteWeb();

    } catch (error) {

        console.error(
            "No se pudo registrar el pedido web:",
            error
        );

        ventanaWhatsApp.close();

        alert(
            error?.message ||
            "No se pudo registrar el pedido. Intentá nuevamente."
        );

    } finally {

        if (botonAccionTransferencia) {
            botonAccionTransferencia.disabled = false;
            botonAccionTransferencia.textContent =
                textoOriginal;
        }

    }

}


// =============================
// ELEMENTOS DE LA PÁGINA
// =============================

const productosGrid = document.getElementById("productos-grid");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


const botonAbrirCarrito = document.getElementById("abrir-carrito");
const botonCerrarCarrito = document.getElementById("cerrar-carrito");
const carritoPanel = document.getElementById("carrito-panel");
const carritoOverlay = document.getElementById("carrito-overlay");
const carritoProductos = document.getElementById("carrito-productos");
const contadorCarrito = document.getElementById("contador-carrito");
const carritoTotal = document.getElementById("carrito-total");
const mensajeMayorista = document.getElementById("mensaje-mayorista");
// =============================
// BOTÓN VACIAR CARRITO GLOBAL
// =============================

const carritoResumen = document.querySelector(".carrito-resumen");

if (
    carritoResumen &&
    !document.getElementById("vaciar-carrito")
) {
    const nuevoBotonVaciar = document.createElement("button");

    nuevoBotonVaciar.type = "button";
    nuevoBotonVaciar.className = "vaciar-carrito";
    nuevoBotonVaciar.id = "vaciar-carrito";
    nuevoBotonVaciar.textContent = "Vaciar carrito";

    const carritoTotal =
        carritoResumen.querySelector(".carrito-total");

    if (carritoTotal) {
        carritoResumen.insertBefore(
            nuevoBotonVaciar,
            carritoTotal
        );
    }
}

const botonVaciarCarrito =
    document.getElementById("vaciar-carrito");

const botonFinalizarPedido =
    document.getElementById("finalizar-pedido");


// =============================
// PAGAR CON MERCADO PAGO
// =============================

const botonPagarMercadoPago =
    document.getElementById(
        "pagar-mercado-pago"
    );

botonPagarMercadoPago?.addEventListener(
    "click",
    () => {

        if (carrito.length === 0) {
            alert(
                "Agregá productos al carrito antes de pagar."
            );
            return;
        }

        const esMayorista =
            carritoTieneMayorista();

        if (esMayorista) {
            alert(
                "Mercado Pago está disponible únicamente para compras minoristas."
            );
            actualizarCarrito();
            return;
        }

        if (medioPagoCarrito !== "mercado_pago") {
            medioPagoCarrito = "mercado_pago";
            guardarMedioPagoCarrito();
            actualizarCarrito();
        }

        abrirModalClienteWeb(
            procesarPagoMercadoPagoWeb
        );

    }
);


async function procesarPagoMercadoPagoWeb(
    cliente
) {

    if (
        typeof crearPreferenciaMercadoPago !==
        "function"
    ) {
        alert(
            "No se pudo conectar con Mercado Pago. Intentá nuevamente."
        );
        return;
    }

    const boton =
        document.getElementById(
            "checkout-pagar-mercado-pago"
        ) ||
        document.getElementById(
            "pagar-mercado-pago"
        );

    if (!boton) {
        return;
    }

    boton.disabled = true;
    boton.setAttribute(
        "aria-busy",
        "true"
    );

    try {

        /*
            Primero registramos el pedido pendiente.
            Los pedidos iniciados desde Mercado Pago
            se registran con el origen web aceptado por Supabase.
        */
        let pedido =
            await registrarPedidoWebPendiente(
                "web",
                cliente
            );

        /*
            A Mercado Pago NO le mandamos precios.
            Solo slug + cantidad.
            La Edge Function consulta nuevamente
            precios y condición minorista
            directamente en Supabase.
        */
        const items =
            carrito.map(
                (producto) => ({
                    slug:
                        producto.slug || "",
                    quantity:
                        Number(
                            producto.cantidad
                        ) || 0
                })
            );

        let preferencia;

        try {

            preferencia =
                await crearPreferenciaMercadoPago({
                    items,
                    pedidoId:
                        pedido.pedidoId,
                    codigoPedido:
                        pedido.codigo,
                    cliente
                });

        } catch (errorPreferencia) {

            /*
                Puede pasar que el navegador conserve
                un pedido que fue cancelado desde Gestión.
                En ese caso borramos solo esa referencia,
                creamos un pedido nuevo y reintentamos una vez.
            */
            if (
                !esErrorPedidoWebNoPendiente(
                    errorPreferencia
                )
            ) {
                throw errorPreferencia;
            }

            borrarPedidoWebTemporal();

            pedido =
                await registrarPedidoWebPendiente(
                    "web",
                    cliente
                );

            preferencia =
                await crearPreferenciaMercadoPago({
                    items,
                    pedidoId:
                        pedido.pedidoId,
                    codigoPedido:
                        pedido.codigo,
                    cliente
                });

        }

        const checkoutUrl =
            preferencia.init_point ||
            "";

        if (!checkoutUrl) {
            throw new Error(
                "Mercado Pago no devolvió el enlace de pago."
            );
        }

        window.location.href =
            checkoutUrl;

    } catch (error) {

        console.error(
            "No se pudo iniciar Mercado Pago:",
            error
        );

        alert(
            error?.message ||
            "No se pudo iniciar Mercado Pago. Intentá nuevamente."
        );

    } finally {

        boton.disabled = false;
        boton.removeAttribute(
            "aria-busy"
        );

    }

}


// =============================
// DATOS DEL CLIENTE PARA PEDIDOS WEB
// Se solicitan recién al finalizar el pedido.
// =============================

const CLIENTE_WEB_RECORDADO_KEY =
    "voimport-cliente-web";

let accionClienteWebPendiente =
    null;

let clienteWebModoEdicion =
    false;

function normalizarWhatsappClienteWeb(
    telefono
) {

    let numero =
        String(
            telefono || ""
        )
            .replace(
                /[^0-9]/g,
                ""
            );


    if (!numero) {
        return "";
    }


    // Aceptamos si el cliente pega el número internacional completo.
    if (
        numero.startsWith("0054")
    ) {
        numero =
            numero.slice(4);
    } else if (
        numero.startsWith("54")
    ) {
        numero =
            numero.slice(2);
    }


    // En formato internacional de celulares argentinos aparece el 9.
    if (
        numero.length === 11 &&
        numero.startsWith("9")
    ) {
        numero =
            numero.slice(1);
    }


    // Quitamos el 0 de larga distancia nacional.
    if (
        numero.startsWith("0")
    ) {
        numero =
            numero.slice(1);
    }


    // Formato argentino antiguo: código de área + 15 + número.
    // El código de área puede tener 2, 3 o 4 dígitos.
    if (
        numero.length === 12
    ) {

        for (
            const largoArea of [2, 3, 4]
        ) {

            if (
                numero.slice(
                    largoArea,
                    largoArea + 2
                ) === "15"
            ) {

                const candidato =
                    numero.slice(
                        0,
                        largoArea
                    ) +
                    numero.slice(
                        largoArea + 2
                    );

                if (
                    candidato.length === 10
                ) {
                    numero =
                        candidato;
                    break;
                }

            }

        }

    }


    // También aceptamos si escribieron el 9 nacional sin +54.
    if (
        numero.length === 11 &&
        numero.startsWith("9")
    ) {
        numero =
            numero.slice(1);
    }


    // "15 + número" sin código de área no alcanza para identificarlo.
    if (
        numero.length === 10 &&
        numero.startsWith("15")
    ) {
        return "";
    }


    return numero;

}


function limpiarTextoClienteWeb(
    valor
) {

    return String(
        valor || ""
    )
        .trim()
        .replace(
            /\s+/g,
            " "
        );

}


function obtenerClienteWebRecordado() {

    try {

        const guardado =
            JSON.parse(
                localStorage.getItem(
                    CLIENTE_WEB_RECORDADO_KEY
                )
            );


        if (
            !guardado ||
            !limpiarTextoClienteWeb(
                guardado.nombre
            ) ||
            !limpiarTextoClienteWeb(
                guardado.apellido
            ) ||
            !normalizarWhatsappClienteWeb(
                guardado.telefono
            )
        ) {
            return null;
        }


        return {
            nombre:
                limpiarTextoClienteWeb(
                    guardado.nombre
                ),

            apellido:
                limpiarTextoClienteWeb(
                    guardado.apellido
                ),

            telefono:
                normalizarWhatsappClienteWeb(
                    guardado.telefono
                )
        };

    } catch (error) {

        console.warn(
            "No se pudieron recuperar los datos del cliente:",
            error
        );

        return null;

    }

}


function guardarClienteWebRecordado(
    cliente
) {

    try {

        localStorage.setItem(
            CLIENTE_WEB_RECORDADO_KEY,
            JSON.stringify({
                nombre:
                    cliente.nombre,

                apellido:
                    cliente.apellido,

                telefono:
                    normalizarWhatsappClienteWeb(
                        cliente.telefono
                    )
            })
        );

    } catch (error) {

        console.warn(
            "No se pudieron recordar los datos del cliente:",
            error
        );

    }

}


function crearModalClienteWeb() {

    if (
        document.getElementById(
            "modal-cliente-web"
        )
    ) {
        return;
    }


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "modal-cliente-web";

    modal.className =
        "modal-cliente-web";

    modal.hidden =
        true;


    modal.innerHTML = `
        <div
            class="modal-cliente-web-contenido"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-cliente-web-titulo"
        >
            <button
                type="button"
                class="modal-cliente-web-cerrar"
                id="modal-cliente-web-cerrar"
                aria-label="Cerrar"
            >
                ×
            </button>

            <div
                id="modal-cliente-web-cuerpo"
            ></div>
        </div>
    `;


    document.body.appendChild(
        modal
    );


    document
        .getElementById(
            "modal-cliente-web-cerrar"
        )
        ?.addEventListener(
            "click",
            cerrarModalClienteWeb
        );


    modal.addEventListener(
        "click",
        (evento) => {

            if (
                evento.target ===
                modal
            ) {
                cerrarModalClienteWeb();
            }

        }
    );

}


function cerrarModalClienteWeb() {

    const modal =
        document.getElementById(
            "modal-cliente-web"
        );


    if (modal) {
        modal.hidden =
            true;
    }


    accionClienteWebPendiente =
        null;

    clienteWebModoEdicion =
        false;

    clienteCheckoutActual =
        null;

    flujoCheckoutMinorista =
        false;

}


function mostrarMensajeClienteWeb(
    mensaje = ""
) {

    const elemento =
        document.getElementById(
            "modal-cliente-web-mensaje"
        );


    if (!elemento) {
        return;
    }


    elemento.textContent =
        mensaje;

    elemento.hidden =
        !mensaje;

}


function renderizarModalClienteWeb() {

    crearModalClienteWeb();


    const cuerpo =
        document.getElementById(
            "modal-cliente-web-cuerpo"
        );


    if (!cuerpo) {
        return;
    }


    const guardado =
        obtenerClienteWebRecordado();


    if (
        guardado &&
        !clienteWebModoEdicion
    ) {

        cuerpo.innerHTML = `
            <div class="modal-cliente-web-encabezado">
                <span class="modal-cliente-web-paso">
                    ${flujoCheckoutMinorista ? "Paso 1 de 2" : "Antes de finalizar"}
                </span>

                <h3 id="modal-cliente-web-titulo">
                    Confirmá tus datos
                </h3>

                <p>
                    Usamos estos datos para identificar tu pedido.
                </p>
            </div>

            <div class="modal-cliente-web-recordado">
                <span>Pedido a nombre de</span>

                <strong>
                    ${escaparHTML(
                        `${guardado.nombre} ${guardado.apellido}`
                    )}
                </strong>

                <small>
                    WhatsApp:
                    +54 ${escaparHTML(
                        guardado.telefono
                    )}
                </small>
            </div>

            <div class="modal-cliente-web-acciones">
                <button
                    type="button"
                    class="modal-cliente-web-principal"
                    id="modal-cliente-web-continuar-recordado"
                >
                    ${flujoCheckoutMinorista ? "Continuar al pago" : "Continuar con el pedido"}
                </button>

                <button
                    type="button"
                    class="modal-cliente-web-secundario"
                    id="modal-cliente-web-cambiar"
                >
                    Cambiar datos
                </button>
            </div>
        `;


        document
            .getElementById(
                "modal-cliente-web-continuar-recordado"
            )
            ?.addEventListener(
                "click",
                () => {

                    ejecutarAccionClienteWeb(
                        guardado
                    );

                }
            );


        document
            .getElementById(
                "modal-cliente-web-cambiar"
            )
            ?.addEventListener(
                "click",
                () => {

                    clienteWebModoEdicion =
                        true;

                    renderizarModalClienteWeb();

                    document
                        .getElementById(
                            "modal-cliente-web-nombre"
                        )
                        ?.focus();

                }
            );


        return;
    }


    cuerpo.innerHTML = `
        <div class="modal-cliente-web-encabezado">
            <span class="modal-cliente-web-paso">
                ${flujoCheckoutMinorista ? "Paso 1 de 2" : "Antes de finalizar"}
            </span>

            <h3 id="modal-cliente-web-titulo">
                Tus datos
            </h3>

            <p>
                Los usamos para identificar tu pedido. No necesitás crear una cuenta.
            </p>
        </div>

        <form id="modal-cliente-web-formulario">
            <div class="modal-cliente-web-campos">
                <label>
                    <span>Nombre</span>

                    <input
                        type="text"
                        id="modal-cliente-web-nombre"
                        autocomplete="given-name"
                        maxlength="60"
                        value="${escaparHTML(
                            guardado?.nombre || ""
                        )}"
                    >
                </label>

                <label>
                    <span>Apellido</span>

                    <input
                        type="text"
                        id="modal-cliente-web-apellido"
                        autocomplete="family-name"
                        maxlength="60"
                        value="${escaparHTML(
                            guardado?.apellido || ""
                        )}"
                    >
                </label>

                <label class="modal-cliente-web-whatsapp">
                    <span>WhatsApp (Argentina)</span>

                    <div class="modal-cliente-web-telefono">
                        <span
                            class="modal-cliente-web-prefijo"
                            aria-hidden="true"
                        >
                            +54
                        </span>

                        <input
                            type="tel"
                            id="modal-cliente-web-whatsapp"
                            autocomplete="tel-national"
                            inputmode="tel"
                            maxlength="30"
                            placeholder="Código de área + número"
                            value="${escaparHTML(
                                guardado?.telefono || ""
                            )}"
                        >
                    </div>

                    <small class="modal-cliente-web-ayuda-whatsapp">
                        Ej: 11 3429-3000 · Interior: 351 555-1234
                    </small>
                </label>
            </div>

            <p
                class="modal-cliente-web-mensaje"
                id="modal-cliente-web-mensaje"
                hidden
            ></p>

            <div class="modal-cliente-web-acciones">
                <button
                    type="submit"
                    class="modal-cliente-web-principal"
                >
                    ${flujoCheckoutMinorista ? "Continuar al pago" : "Continuar con el pedido"}
                </button>

                ${
                    guardado
                        ? `
                            <button
                                type="button"
                                class="modal-cliente-web-secundario"
                                id="modal-cliente-web-volver"
                            >
                                Volver
                            </button>
                        `
                        : ""
                }
            </div>
        </form>
    `;


    document
        .getElementById(
            "modal-cliente-web-formulario"
        )
        ?.addEventListener(
            "submit",
            (evento) => {

                evento.preventDefault();

                let cliente;

                try {
                    cliente =
                        obtenerDatosClienteWebParaPedido();
                } catch (error) {
                    return;
                }


                ejecutarAccionClienteWeb(
                    cliente
                );

            }
        );


    document
        .getElementById(
            "modal-cliente-web-volver"
        )
        ?.addEventListener(
            "click",
            () => {

                clienteWebModoEdicion =
                    false;

                renderizarModalClienteWeb();

            }
        );

}


function obtenerDatosClienteWebParaPedido() {

    const nombre =
        limpiarTextoClienteWeb(
            document.getElementById(
                "modal-cliente-web-nombre"
            )?.value
        );

    const apellido =
        limpiarTextoClienteWeb(
            document.getElementById(
                "modal-cliente-web-apellido"
            )?.value
        );

    const telefono =
        limpiarTextoClienteWeb(
            document.getElementById(
                "modal-cliente-web-whatsapp"
            )?.value
        );


    mostrarMensajeClienteWeb("");


    if (!nombre) {

        mostrarMensajeClienteWeb(
            "Ingresá tu nombre."
        );

        document
            .getElementById(
                "modal-cliente-web-nombre"
            )
            ?.focus();

        throw new Error(
            "Ingresá tu nombre."
        );

    }


    if (!apellido) {

        mostrarMensajeClienteWeb(
            "Ingresá tu apellido."
        );

        document
            .getElementById(
                "modal-cliente-web-apellido"
            )
            ?.focus();

        throw new Error(
            "Ingresá tu apellido."
        );

    }


    const telefonoNormalizado =
        normalizarWhatsappClienteWeb(
            telefono
        );


    if (
        telefonoNormalizado.length !==
        10
    ) {

        mostrarMensajeClienteWeb(
            "Ingresá código de área + número. Ej: 11 3429-3000 o 351 555-1234."
        );

        document
            .getElementById(
                "modal-cliente-web-whatsapp"
            )
            ?.focus();

        throw new Error(
            "Ingresá código de área + número. Ej: 11 3429-3000 o 351 555-1234."
        );

    }


    return {
        nombre,
        apellido,
        telefono:
            telefonoNormalizado
    };

}


function ejecutarAccionClienteWeb(
    cliente
) {

    const accion =
        accionClienteWebPendiente;


    if (
        typeof accion !==
        "function"
    ) {
        cerrarModalClienteWeb();
        return;
    }


    const modal =
        document.getElementById(
            "modal-cliente-web"
        );


    if (modal) {
        modal.hidden =
            true;
    }


    accionClienteWebPendiente =
        null;

    clienteWebModoEdicion =
        false;


    // La acción se ejecuta desde el click del usuario.
    // Así WhatsApp puede abrirse sin que el navegador lo bloquee.
    accion(
        cliente
    );

}


function abrirModalClienteWeb(
    accion
) {

    if (
        typeof accion !==
        "function"
    ) {
        return;
    }


    crearModalClienteWeb();

    accionClienteWebPendiente =
        accion;

    clienteWebModoEdicion =
        false;

    renderizarModalClienteWeb();


    const modal =
        document.getElementById(
            "modal-cliente-web"
        );


    if (modal) {
        modal.hidden =
            false;
    }


    if (
        !obtenerClienteWebRecordado()
    ) {

        setTimeout(
            () => {

                document
                    .getElementById(
                        "modal-cliente-web-nombre"
                    )
                    ?.focus();

            },
            0
        );

    }

}


crearModalClienteWeb();

// =============================
// MENÚ HAMBURGUESA
// =============================

menuToggle?.addEventListener("click", (evento) => {
    evento.stopPropagation();
    navLinks?.classList.toggle("active");
});

navLinks?.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

document.addEventListener("click", (evento) => {
    if (!navLinks?.classList.contains("active")) return;

    if (
        navLinks.contains(evento.target) ||
        menuToggle?.contains(evento.target)
    ) {
        return;
    }

    navLinks.classList.remove("active");
});

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        navLinks?.classList.remove("active");
    }
});


// =============================
// ABRIR Y CERRAR EL CARRITO
// =============================

function abrirCarrito() {
    if (!carritoPanel || !carritoOverlay) return;

    carritoPanel.classList.add("activo");
    carritoOverlay.classList.add("activo");
    document.body.style.overflow = "hidden";
}

function cerrarCarrito() {
    carritoPanel?.classList.remove("activo");
    carritoOverlay?.classList.remove("activo");
    document.body.style.overflow = "";
}

botonAbrirCarrito?.addEventListener("click", abrirCarrito);
botonCerrarCarrito?.addEventListener("click", cerrarCarrito);
carritoOverlay?.addEventListener("click", cerrarCarrito);

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape") {
        cerrarCarrito();
    }
});


// =============================
// FUNCIONES GENERALES
// =============================

function formatearPrecio(precio) {
    return new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        maximumFractionDigits: 0
    }).format(Number(precio) || 0);
}

function escaparHTML(texto) {
    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function numeroValido(valor) {
    const numero = Number(valor);
    return Number.isFinite(numero) ? numero : null;
}

function obtenerSlug(producto) {
    return producto?.slug || producto?.id || "";
}

function obtenerReglaCategoria(categoria) {
    return (
        REGLAS_CATEGORIAS[categoria] ||
        REGLAS_CATEGORIAS[CATEGORIA_PREDETERMINADA]
    );
}

function obtenerCantidadTotal() {
    return carrito.reduce(
        (total, producto) => total + producto.cantidad,
        0
    );
}

function obtenerCantidadCategoria(categoria) {
    return carrito
        .filter((producto) => producto.categoria === categoria)
        .reduce(
            (total, producto) => total + producto.cantidad,
            0
        );
}

function aplicaMayorista(producto) {
    return obtenerReglaCategoria(producto.categoria).tieneMayorista && mirekaNivelCategoria(producto.categoria) > 0;
}

function obtenerPrecioListaDesdeEfectivo(precioEfectivo, categoria = '') {
    const precio = Number(precioEfectivo);
    if (!Number.isFinite(precio) || precio <= 0) return 0;
    const precioLista = precio / (1 - DESCUENTO_EFECTIVO_TRANSFERENCIA);
    // Redondear el importe de Mercado Pago en decants también a $500.
    return categoria === 'decants' ? Math.ceil(precioLista / 500) * 500 : Math.round(precioLista);
}

function carritoTieneMayorista() {
    return carrito.some(
        (producto) => aplicaMayorista(producto)
    );
}

function usarPrecioListaMinorista() {
    return (
        carrito.length > 0 &&
        !carritoTieneMayorista() &&
        medioPagoCarrito === "mercado_pago"
    );
}

// Precio promocional minorista: nunca modifica el precio base ni las 4 listas.
function mirekaEfectivoVigente(producto) {
    const base = Number(producto?.precioMinorista) || 0;
    const promo = Number(producto?.precioOfertaMinorista);
    const valida = producto?.destacadoOferta === true && Number.isFinite(promo) && promo > 0 && promo < base;
    return mirekaModoCompra === 'minorista' && valida ? promo : base;
}
function mirekaOfertaVigente(producto) {
    return mirekaModoCompra === 'minorista' && mirekaEfectivoVigente(producto) < Number(producto?.precioMinorista);
}

function obtenerPrecioUnitario(producto) {
    if (aplicaMayorista(producto)) {
        return mirekaPrecioDeNivel(producto, mirekaNivelCategoria(producto.categoria)) ?? producto.precioMinorista;
    }
    if (usarPrecioListaMinorista()) return obtenerPrecioListaDesdeEfectivo(mirekaEfectivoVigente(producto), producto.categoria);
    return mirekaEfectivoVigente(producto);
}
function obtenerTipoPrecio(producto) {
    if (aplicaMayorista(producto)) return `Mayorista Lista ${mirekaNivelCategoria(producto.categoria)}`;
    if (usarPrecioListaMinorista()) return 'Precio de lista';
    return 'Efectivo / transferencia';
}
function obtenerPrecioCarritoBase(producto) {
    if (aplicaMayorista(producto)) return mirekaPrecioDeNivel(producto, mirekaNivelCategoria(producto.categoria)) ?? producto.precioMinorista;
    return mirekaEfectivoVigente(producto);
}

function calcularSubtotalCarritoBase() {
    return carrito.reduce(
        (acumulado, producto) =>
            acumulado +
            obtenerPrecioCarritoBase(producto) *
            producto.cantidad,
        0
    );
}

function calcularTotalMercadoPagoMinorista() {
    return carrito.reduce(
        (acumulado, producto) =>
            acumulado +
            obtenerPrecioListaDesdeEfectivo(
                mirekaEfectivoVigente(producto),
                producto.categoria
            ) *
            producto.cantidad,
        0
    );
}

function guardarCarrito() {
    localStorage.setItem(
        "voimport-carrito",
        JSON.stringify(carrito)
    );
}

function cargarCarritoGuardado() {
    try {
        const guardado = JSON.parse(
            localStorage.getItem("voimport-carrito")
        );

        if (!Array.isArray(guardado)) return [];

        return guardado.map((producto) => {
            const precioMinorista =
                numeroValido(producto.precioMinorista) || 0;

            const precioMayoristaIngresado =
                numeroValido(producto.precioMayorista);

            return {
                slug: producto.slug || "",
                nombre: producto.nombre || "Producto",
                categoria:
                    producto.categoria ||
                    CATEGORIA_PREDETERMINADA,
                precioMinorista,
                preciosListas: Array.isArray(producto.preciosListas) ? producto.preciosListas : [],
                destacadoOferta: producto.destacadoOferta === true,
                precioOfertaMinorista: Number(producto.precioOfertaMinorista) || null,
                precioMayorista:
                    precioMayoristaIngresado !== null &&
                    precioMayoristaIngresado > 0
                        ? precioMayoristaIngresado
                        : precioMinorista,
                imagen: producto.imagen || "",
                cantidad: Math.max(
                    1,
                    Number(producto.cantidad) || 1
                ),
                stock:
                    numeroValido(producto.stock) !== null
                        ? Math.max(0, Number(producto.stock))
                        : null
            };
        });
    } catch (error) {
        console.error("No se pudo recuperar el carrito:", error);
        return [];
    }
}


// =============================
// SUPABASE: PRECIOS, STOCK Y ACTIVO
// =============================

async function cargarDatosDesdeSupabase() {
    if (typeof obtenerDatosProductos !== "function") {
        console.warn(
            "Supabase todavía no está disponible. Se usarán los datos locales."
        );
        return [];
    }

    try {
        const datos = await obtenerDatosProductos();
        return Array.isArray(datos)
            ? datos.filter((producto) =>
                producto.categoria !== "inspiraciones-disenador" &&
                producto.linea !== "inspiraciones"
              )
            : [];
    } catch (error) {
        console.error(
            "No se pudieron cargar precios y stock desde Supabase:",
            error
        );
        return [];
    }
}

function normalizarClaveProductoWeb(valor) {
    return String(valor ?? "")
        .trim()
        .toLocaleLowerCase("es-AR")
        .replace(/\s+/g, " ");
}

function obtenerClaveCoincidenciaProductoWeb(producto) {
    return [
        normalizarClaveProductoWeb(producto?.nombre),
        normalizarClaveProductoWeb(producto?.marca),
        normalizarClaveProductoWeb(producto?.categoria),
        normalizarClaveProductoWeb(producto?.linea)
    ].join("|");
}


function combinarProductoConSupabase(productoLocal) {
    const slugLocal = obtenerSlug(productoLocal);
    const claveCoincidencia =
        obtenerClaveCoincidenciaProductoWeb(productoLocal);

    const remoto =
        productosSupabasePorSlug.get(slugLocal) ||
        productosSupabasePorClave.get(claveCoincidencia);

    const slug =
        String(remoto?.slug || slugLocal).trim();

    const precioMinoristaLocal =
        numeroValido(productoLocal.precioMinorista) || 0;

    const precioMayoristaLocal =
        numeroValido(productoLocal.precioMayorista) ??
        precioMinoristaLocal;

    if (!remoto) {
        return {
            ...productoLocal,
            slug,
            precioMinorista: precioMinoristaLocal,
            precioMayorista: precioMayoristaLocal,
            stock:
                numeroValido(productoLocal.stock) !== null
                    ? Math.max(0, Number(productoLocal.stock))
                    : null,
            activo: productoLocal.activo !== false,
            destacadoNuevo: false,
            destacadoOferta: false,
            destacadoMasVendido: false,
            generoWeb: null,
            precioOfertaMinorista: null
        };
    }

    const precioMinoristaRemoto =
        numeroValido(remoto.precio_minorista);

    const precioMayoristaRemoto =
        numeroValido(remoto.precio_mayorista);

    const stockRemoto = numeroValido(remoto.stock);

    return {
        ...productoLocal,
        slug,
        precioMinorista:
            precioMinoristaRemoto !== null
                ? precioMinoristaRemoto
                : precioMinoristaLocal,
        precioMayorista:
            precioMayoristaRemoto !== null
                ? precioMayoristaRemoto
                : precioMayoristaLocal,
        stock:
            stockRemoto !== null
                ? Math.max(0, stockRemoto)
                : 0,
        activo:
            remoto.activo !== false &&
            remoto.retirado !== true,
        destacadoNuevo: remoto.destacado_nuevo === true,
        destacadoOferta: remoto.destacado_oferta === true,
        destacadoMasVendido: remoto.destacado_mas_vendido === true,
        generoWeb: remoto.genero_web || null,
        precioOfertaMinorista: Number(remoto.precio_oferta_minorista) || null
    };
}

function crearProductoSoloSupabase(remoto) {
    const slug = String(remoto?.slug || "").trim();

    if (!slug) return null;

    const precioMinorista =
        numeroValido(remoto.precio_minorista) || 0;

    const precioMayoristaIngresado =
        numeroValido(remoto.precio_mayorista);

    const stockRemoto = numeroValido(remoto.stock);

    const categoria =
        String(remoto.categoria || "").trim() ||
        CATEGORIA_PREDETERMINADA;

    const tipoPredeterminado =
        categoria === "decants" ? "decant" : "perfume";

    return {
        id: slug,
        slug,
        nombre:
            String(remoto.nombre || "").trim() || slug,
        marca:
            String(remoto.marca || "").trim(),
        categoria,
        linea:
            String(remoto.linea || "").trim(),
        tipo:
            String(remoto.tipo || "").trim() || tipoPredeterminado,
        presentacion:
            String(remoto.presentacion || "").trim(),
        imagen:
            String(remoto.imagen || "").trim() ||
            "images/favicon.PNG",
        descripcion: "",
        notasSalida: "",
        notasCorazon: "",
        notasFondo: "",
        inspiracion: "",
        recomendacion: "",
        disenador: "",
        precioMinorista,
        precioMayorista:
            precioMayoristaIngresado !== null &&
            precioMayoristaIngresado > 0
                ? precioMayoristaIngresado
                : precioMinorista,
        stock:
            stockRemoto !== null
                ? Math.max(0, stockRemoto)
                : 0,
        activo:
            remoto.activo !== false &&
            remoto.retirado !== true,
        destacadoNuevo: remoto.destacado_nuevo === true,
        destacadoOferta: remoto.destacado_oferta === true,
        destacadoMasVendido: remoto.destacado_mas_vendido === true,
        generoWeb: remoto.genero_web || null,
        precioOfertaMinorista: Number(remoto.precio_oferta_minorista) || null,
        creadoDesdeGestion: true
    };
}

function buscarProductoActual({ slug = "", nombre = "" } = {}) {
    if (slug) {
        return catalogoActualizado.find(
            (producto) => producto.slug === slug
        );
    }

    if (nombre) {
        return catalogoActualizado.find(
            (producto) => producto.nombre === nombre
        );
    }

    return undefined;
}

function sincronizarCarritoConCatalogo() {
    carrito = carrito
        .map((productoCarrito) => {
            const productoActual = buscarProductoActual({
                slug: productoCarrito.slug,
                nombre: productoCarrito.nombre
            });

            // Un producto eliminado del catálogo tampoco debe quedar en
            // carritos anteriores guardados en el navegador.
            if (!productoActual) {
                return null;
            }

            if (!productoActual.activo || productoActual.stock === 0) {
                return null;
            }

            const cantidadMaxima =
                productoActual.stock === null
                    ? productoCarrito.cantidad
                    : Math.min(
                        productoCarrito.cantidad,
                        productoActual.stock
                    );

            if (cantidadMaxima <= 0) return null;

            return {
                ...productoCarrito,
                slug: productoActual.slug,
                nombre: productoActual.nombre,
                categoria:
                    productoActual.categoria ||
                    CATEGORIA_PREDETERMINADA,
                precioMinorista:
                    productoActual.precioMinorista,
                destacadoOferta: productoActual.destacadoOferta === true,
                precioOfertaMinorista: productoActual.precioOfertaMinorista || null,
                precioMayorista:
                    productoActual.precioMayorista,
                preciosListas: productoActual.preciosListas || [],
                imagen: productoActual.imagen || "",
                stock: productoActual.stock,
                cantidad: cantidadMaxima
            };
        })
        .filter(Boolean);
}


// =============================
// CATÁLOGO AUTOMÁTICO
// =============================

function crearTextoStock(producto) {
    if (producto.stock === null) {
        return `
            <p class="producto-stock pendiente">
                Stock a confirmar
            </p>
        `;
    }

    if (producto.stock <= 0) {
        return `
            <p class="producto-stock agotado">
                Agotado
            </p>
        `;
    }

    return `
        <p class="producto-stock disponible">
            Stock: ${producto.stock}
        </p>
    `;
}

function crearPrecioCatalogo(producto) {
    // Visual únicamente: se mantienen los mismos precios y reglas de compra.
    const tieneMayorista = obtenerReglaCategoria(producto.categoria).tieneMayorista;
    const efectivoActual = mirekaEfectivoVigente(producto);
    const esOferta = mirekaOfertaVigente(producto);
    const precioMP = obtenerPrecioListaDesdeEfectivo(efectivoActual, producto.categoria);
    if (mirekaModoCompra !== 'mayorista' || !tieneMayorista) {
        return `<div class="mireka-precios-tarjeta mireka-precio-simple mireka-precios-premium">
            <div class="mireka-efectivo-panel">
                <div class="mireka-precio-cabecera">
                    <span class="mireka-metodo-label">EFECTIVO / TRANSFERENCIA</span>
                    <span class="mireka-beneficio-badge">${esOferta ? 'OFERTA' : producto.categoria === 'decants' ? 'MEJOR PRECIO' : '20% OFF'}</span>
                </div>
                ${esOferta ? `<small class="mireka-precio-anterior">Antes: ${formatearPrecio(producto.precioMinorista)} en efectivo</small>` : ''}
                <strong class="mireka-precio-principal">${formatearPrecio(efectivoActual)}</strong>
                <small class="mireka-precio-beneficio">Precio por unidad</small>
            </div>
            <div class="mireka-mp-panel">
                <div class="mireka-mp-titulo">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="5" width="19" height="14" rx="2.5"/><path d="M3 10h18"/></svg>
                    <span>MERCADO PAGO</span>
                </div>
                <strong class="mireka-mp-monto">${formatearPrecio(precioMP)}</strong>
                <span class="mireka-cuotas-label">3 CUOTAS SIN INTERÉS</span>
            </div>
        </div>`;
    }
    const nivelActual = mirekaNivelCategoria(producto.categoria);
    const listas = MIREKA_ESCALONES.map((unidades, indice) => {
        const nivel = indice + 1;
        const precio = mirekaPrecioDeNivel(producto, nivel);
        const activa = nivelActual === nivel;
        return `<div class="mireka-lista-visible${activa ? ' mireka-lista-visible-activa' : ''}">
            <span class="mireka-lista-identidad">
                <strong>LISTA ${nivel}</strong>
                <small>${unidades}+ perfumes</small>
            </span>
            <strong class="mireka-lista-monto${precio === null ? ' mireka-lista-monto-pendiente' : ''}">${precio === null ? 'A confirmar' : formatearPrecio(precio)}</strong>
        </div>`;
    }).join('');
    return `<div class="mireka-precios-tarjeta mireka-precios-premium mireka-precio-mayorista mireka-cuatro-listas">
        <div class="mireka-listas-encabezado">
            <span>PRECIOS MAYORISTAS</span>
            ${nivelActual > 0 ? `<small>LISTA ${nivelActual} ACTIVA</small>` : ''}
        </div>
        <div class="mireka-listas-todas">${listas}</div>
    </div>`;
}
function mirekaActualizarPreciosVisibles() {
    document.querySelectorAll('.producto-card[data-slug]').forEach(tarjeta => {
        const producto = buscarProductoActual({slug: tarjeta.dataset.slug});
        const contenedor = tarjeta.querySelector('.mireka-precios-tarjeta');
        if (producto && contenedor) contenedor.outerHTML = crearPrecioCatalogo(producto);
    });
    actualizarFichaIndividual();
}

function generarCatalogo() {
    if (!productosGrid) return;

    const marcaActual =
        document.body.dataset.marca;

    const categoriaActual =
        document.body.dataset.categoria;

    const lineaActual =
        document.body.dataset.linea;

    const tipoActual =
        document.body.dataset.tipo;

    const parametrosCatalogo =
        new URLSearchParams(window.location.search);

    const coleccionActual =
        parametrosCatalogo.get("coleccion") || "";

    const generoActual =
        parametrosCatalogo.get("genero") || "";

    const terminoBusqueda =
        document.getElementById("buscador-catalogo")
            ?.value
            .trim()
            .toLowerCase() || "";

    const soloDisponibles =
        document.getElementById("solo-disponibles")
            ?.checked || false;


    const productosDeLaMarca = catalogoActualizado
        .filter((producto) => {

            const coincideMarca =
                !marcaActual ||
                producto.marca === marcaActual;

            // La búsqueda respeta la categoría elegida: no mezclar
            // perfumes grandes, decants y Maison Alhambra 30 ml.
            const coincideCategoria =
                !categoriaActual || producto.categoria === categoriaActual;

            const coincideLinea =
                !lineaActual ||
                producto.linea === lineaActual;

            const coincideTipo =
                !tipoActual ||
                producto.tipo === tipoActual;

            // Clasificación editable en Gestión; si está en Automático, inferir
            // de la presentación para conservar el catálogo existente.
            const presentacionNormalizada = String(producto.presentacion || '').toLowerCase();
            const generoConfigurado = String(producto.generoWeb || '').toLowerCase();
            const generoInferido = presentacionNormalizada.includes('unisex') ? 'unisex'
                : (presentacionNormalizada.includes('mujer') || presentacionNormalizada.includes('woman')
                    || presentacionNormalizada.includes('women') || presentacionNormalizada.includes('femenin')) ? 'mujer'
                : (presentacionNormalizada.includes('hombre') || /\bmen\b/.test(presentacionNormalizada)
                    || presentacionNormalizada.includes('masculin')) ? 'hombre' : '';
            const generoWeb = generoConfigurado || generoInferido;
            const coincideGenero = !generoActual || (
                (generoActual === 'woman' && generoWeb === 'mujer') ||
                (generoActual === 'men' && generoWeb === 'hombre') ||
                (generoActual === 'unisex' && generoWeb === 'unisex')
            );

            // Todas las colecciones se editan desde Gestión en Supabase.
            const coincideColeccion = !coleccionActual ||
                (coleccionActual === 'nuevos' && producto.destacadoNuevo === true) ||
                (coleccionActual === 'ofertas' && producto.destacadoOferta === true &&
                    Number(producto.precioOfertaMinorista) > 0 &&
                    Number(producto.precioOfertaMinorista) < Number(producto.precioMinorista)) ||
                (coleccionActual === 'mas-vendidos' && producto.destacadoMasVendido === true);

            const nombreProducto =
                String(producto.nombre || "")
                    .toLowerCase();

            const marcaProducto =
                String(producto.marca || "")
                    .toLowerCase();

            const coincideBusqueda =
                !terminoBusqueda ||
                nombreProducto.includes(terminoBusqueda) ||
                marcaProducto.includes(terminoBusqueda);

            const coincideStock =
                !soloDisponibles ||
                producto.stock === null ||
                Number(producto.stock) > 0;

            return (
                coincideMarca &&
                coincideCategoria &&
                coincideLinea &&
                coincideTipo &&
                coincideGenero &&
                coincideColeccion &&
                coincideBusqueda &&
                coincideStock &&
                producto.activo !== false
            );
        })

        .sort((productoA, productoB) => {

    const orden =
        document.getElementById("orden-catalogo")
            ?.value || "nombre";

    if (orden === "precio-menor") {
        return (
            mirekaEfectivoVigente(productoA) -
            mirekaEfectivoVigente(productoB)
        );
    }

    if (orden === "precio-mayor") {
        return (
            mirekaEfectivoVigente(productoB) -
            mirekaEfectivoVigente(productoA)
        );
    }

    return productoA.nombre.localeCompare(
    productoB.nombre,
    "es",
    {
        numeric: true,
        sensitivity: "base"
    }
);

});


if (productosDeLaMarca.length === 0) {

    productosGrid.innerHTML = `
        <p class="catalogo-vacio">
            No hay productos disponibles en este momento.
        </p>
    `;

    return;
}


const productosPorMarca = {};


productosDeLaMarca.forEach((producto) => {

    const grupo = producto.marca;

    if (!productosPorMarca[grupo]) {
        productosPorMarca[grupo] = [];
    }

    productosPorMarca[grupo].push(producto);
});


const crearTarjetaProducto = (producto) => {

    const agotado =
        producto.stock === 0;

    const textoBoton =
        agotado
            ? "Agotado"
            : "Agregar al carrito";


    const esProductoArabe =
        ["perfumes-grandes", "decants", "maison-30ml"]
            .includes(producto.categoria);

    const textoSuperior = esProductoArabe ? producto.marca : "";


    const etiquetaSuperior =
    textoSuperior
        ? `
            <p class="producto-disenador">
                ${escaparHTML(textoSuperior)}
            </p>
        `
        : "";



const esMobile = window.matchMedia("(max-width: 768px)").matches;

const nombreVisible = producto.nombre;

const etiquetasDestacadas = [
    producto.destacadoNuevo ? '<span>NUEVO</span>' : '',
    mirekaOfertaVigente(producto) ? '<span>OFERTA</span>' : '',
    producto.destacadoMasVendido ? '<span>MÁS VENDIDO</span>' : ''
].filter(Boolean).join('');

const tieneMayorista =
    obtenerReglaCategoria(producto.categoria).tieneMayorista;

return `
    <div
        class="producto-card${tieneMayorista ? " producto-card-con-mayorista" : ""}"
        data-slug="${escaparHTML(producto.slug)}"
    >


        ${etiquetaSuperior}
        ${etiquetasDestacadas ? `<div class="mireka-destacados-etiquetas">${etiquetasDestacadas}</div>` : ''}

        <img
            src="${escaparHTML(producto.imagen)}"
            alt="${escaparHTML(producto.nombre)}"
        >


        <h3>
            ${escaparHTML(nombreVisible)}
        </h3>


        ${crearPrecioCatalogo(producto)}


        ${crearTextoStock(producto)}


        <a
            href="producto.html?slug=${encodeURIComponent(producto.slug)}"
            class="boton-producto"
        >
            Ver producto
        </a>


        <button
            type="button"
            class="agregar-carrito agregar-carrito-card"
            data-slug="${escaparHTML(producto.slug)}"
            data-nombre="${escaparHTML(producto.nombre)}"
            data-categoria="${escaparHTML(producto.categoria)}"
            data-precio-minorista="${producto.precioMinorista}"
            data-precio-mayorista="${producto.precioMayorista}"
            data-imagen="${escaparHTML(producto.imagen)}"
            data-stock="${producto.stock ?? ""}"
            ${agotado ? "disabled" : ""}
        >


            <svg
                class="icono-carrito"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M3 3h2l2.2 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 7H7"></path>
                <circle cx="10" cy="20" r="1"></circle>
                <circle cx="18" cy="20" r="1"></circle>
            </svg>


            ${textoBoton}


        </button>


    </div>
`;
};


    productosGrid.innerHTML =
    productosDeLaMarca
        .map(crearTarjetaProducto)
        .join("");
}

// =============================
// FICHA INDIVIDUAL DEL PRODUCTO
// =============================

function actualizarFichaIndividual() {
    const botonDetalle = document.querySelector(
        ".producto-detalle-info .agregar-carrito"
    );

    if (!botonDetalle) return;

    const slugUrl =
        new URLSearchParams(window.location.search)
            .get("slug") || "";

    const producto = buscarProductoActual({
        slug:
            slugUrl ||
            botonDetalle.dataset.slug || "",
        nombre:
            botonDetalle.dataset.nombre || ""
    });

    if (!producto) {
        const contenido = document.querySelector(
            ".producto-detalle-contenido"
        );

        if (contenido && slugUrl) {
            contenido.innerHTML = `
                <div style="text-align:center; width:100%;">
                    <h1>Producto no encontrado</h1>
                    <p>No pudimos encontrar este perfume.</p>
                    <a href="catalogo.html">← Volver al catálogo</a>
                </div>
            `;
        }

        return;
    }

    document.title =
        `${producto.nombre} | Mireka Perfumería`;

    const imagenProducto =
        producto.imagen || "images/favicon.PNG";

    const imagen = document.getElementById(
        "producto-imagen"
    );

    if (imagen) {
        imagen.src = imagenProducto;
        imagen.alt = `Perfume ${producto.nombre}`;
    }

    const marca = document.getElementById(
        "producto-marca"
    );

    if (marca) {
        marca.textContent = producto.marca || "";
    }

    const nombre = document.getElementById(
        "producto-nombre"
    );

    if (nombre) {
        nombre.textContent = producto.nombre || "";
    }

    const presentacion = document.getElementById(
        "producto-presentacion"
    );

    if (presentacion) {
        presentacion.textContent =
            producto.presentacion || "";
    }

    const descripcion = document.getElementById(
        "producto-descripcion"
    );

    if (descripcion) {
        descripcion.textContent =
            producto.descripcion || "";
    }

    const notasSalida = document.getElementById(
        "notas-salida"
    );

    const notasCorazon = document.getElementById(
        "notas-corazon"
    );

    const notasFondo = document.getElementById(
        "notas-fondo"
    );

    if (notasSalida) {
        notasSalida.textContent =
            producto.notasSalida || "";
    }

    if (notasCorazon) {
        notasCorazon.textContent =
            producto.notasCorazon || "";
    }

    if (notasFondo) {
        notasFondo.textContent =
            producto.notasFondo || "";
    }

    const bloqueNotas = document.querySelector(
        ".notas-olfativas"
    );

    if (bloqueNotas) {
        const tieneNotas = Boolean(
            producto.notasSalida ||
            producto.notasCorazon ||
            producto.notasFondo
        );

        bloqueNotas.style.display =
            tieneNotas ? "" : "none";
    }

    const inspiracion = document.getElementById(
        "producto-inspiracion"
    );

    const recomendacion = document.getElementById(
        "producto-recomendacion"
    );

    if (inspiracion) {
        inspiracion.textContent =
            producto.inspiracion || "";
    }

    if (recomendacion) {
        recomendacion.textContent =
            producto.recomendacion || "";
    }

    const bloqueInspiracion = document.getElementById(
        "bloque-inspiracion"
    );

    if (bloqueInspiracion) {
        const tieneInspiracion = Boolean(
            producto.inspiracion ||
            producto.recomendacion
        );

        bloqueInspiracion.style.display =
            tieneInspiracion ? "" : "none";
    }

    botonDetalle.dataset.slug = producto.slug;
    botonDetalle.dataset.nombre = producto.nombre;
    botonDetalle.dataset.categoria = producto.categoria;
    botonDetalle.dataset.precioMinorista =
        producto.precioMinorista;
    botonDetalle.dataset.precioMayorista =
        producto.precioMayorista;
    botonDetalle.dataset.imagen = imagenProducto;
    botonDetalle.dataset.stock = producto.stock ?? "";

    const bloquePreciosDetalle = document.getElementById(
        "producto-precios-detalle"
    );

    const regla = obtenerReglaCategoria(producto.categoria);

    const precioLista =
        obtenerPrecioListaDesdeEfectivo(
            producto.precioMinorista
        );

    if (bloquePreciosDetalle) {
        bloquePreciosDetalle.innerHTML = crearPrecioCatalogo(producto);
    }

    let stockDetalle = document.querySelector(
        ".stock-producto-detalle"
    );

    if (!stockDetalle) {
        stockDetalle = document.createElement("p");
        stockDetalle.className = "stock-producto-detalle";

        const referencia = document.getElementById(
            "producto-precios-detalle"
        );

        referencia?.insertAdjacentElement(
            "afterend",
            stockDetalle
        );
    }

    if (stockDetalle) {
        if (!producto.activo) {
            stockDetalle.textContent = "Producto no disponible";
            stockDetalle.className =
                "stock-producto-detalle agotado";
        } else if (producto.stock === 0) {
            stockDetalle.textContent = "Agotado";
            stockDetalle.className =
                "stock-producto-detalle agotado";
        } else if (producto.stock === null) {
            stockDetalle.textContent = "Stock a confirmar";
            stockDetalle.className =
                "stock-producto-detalle pendiente";
        } else {
            stockDetalle.textContent =
                `Stock disponible: ${producto.stock}`;
            stockDetalle.className =
                "stock-producto-detalle disponible";
        }
    }

    const sinStock =
        !producto.activo || producto.stock === 0;

    botonDetalle.disabled = sinStock;
    botonDetalle.textContent = sinStock
        ? "Agotado"
        : "Agregar al carrito";

    const inputCantidad = document.querySelector(
        ".producto-compra input"
    );

    if (inputCantidad) {
        inputCantidad.disabled = sinStock;

        if (producto.stock !== null) {
            inputCantidad.max = String(
                Math.max(1, producto.stock)
            );
        }
    }
}


// =============================
// MENSAJE DE MÍNIMOS MAYORISTAS
// =============================

function mirekaCategoriasCarrito() {
    return Object.keys(REGLAS_CATEGORIAS).filter(cat => mirekaCantidadCategoria(cat) > 0);
}
function crearMensajeMayorista() {
    if (!carrito.length) return 'Sumá productos para acceder a precios mayoristas.';
    return mirekaCategoriasCarrito().map(categoria => {
        const cantidad = mirekaCantidadCategoria(categoria);
        const nivel = mirekaNivelCategoria(categoria);
        const nombre = obtenerReglaCategoria(categoria).nombre;
        if (nivel === 4) return `${nombre}: Lista 4 activa.`;
        const faltan = MIREKA_ESCALONES[nivel] - cantidad;
        return `${nombre}: ${nivel ? `Lista ${nivel} activa; ` : ''}faltan ${faltan} para Lista ${nivel + 1}.`;
    }).join(' · ');
}
function mirekaCalcularAhorroSiguienteLista(categoria) {
    const nivel = mirekaNivelCategoria(categoria);
    if (nivel >= 4) return 0;
    let ahorro = 0;
    for (const p of carrito.filter(item => item.categoria === categoria)) {
        const actual = nivel ? mirekaPrecioDeNivel(p, nivel) : p.precioMinorista;
        const siguiente = mirekaPrecioDeNivel(p, nivel + 1);
        if (actual === null || siguiente === null) return null;
        ahorro += (actual - siguiente) * Number(p.cantidad);
    }
    return Math.max(0, ahorro);
}
function mirekaActualizarProgreso() {
    let bloque = document.getElementById('mireka-progreso-carrito');
    if (!bloque && carritoPanel) {
        bloque = document.createElement('section');
        bloque.id = 'mireka-progreso-carrito';
        bloque.className = 'mireka-progreso-carrito';
        const referencia = carritoPanel.querySelector('.carrito-productos');
        referencia?.insertAdjacentElement('beforebegin', bloque);
    }
    if (!bloque) return;
    const categorias = mirekaCategoriasCarrito();
    if (!categorias.length) { bloque.hidden = true; return; }
    bloque.hidden = false;
    bloque.innerHTML = categorias.map(categoria => {
        const nombre = obtenerReglaCategoria(categoria).nombre;
        const q = mirekaCantidadCategoria(categoria);
        const nivel = mirekaNivelCategoria(categoria);
        const siguiente = MIREKA_ESCALONES[nivel];
        const previo = nivel > 0 ? MIREKA_ESCALONES[nivel-1] : 0;
        const progreso = siguiente ? Math.max(0, Math.min(100,100*(q-previo)/(siguiente-previo))) : 100;
        const mensaje = nivel === 4 ? '¡Llegaste a la Lista 4!' :
            `Faltan ${siguiente-q} unidades de esta categoría para Lista ${nivel+1}`;
        const ahorro = mirekaCalcularAhorroSiguienteLista(categoria);
        const ahorroTexto = nivel === 4 ? 'Ya tenés el mejor precio mayorista.' :
            ahorro === null ? 'El ahorro se mostrará cuando estén los precios de Supabase.' :
            ahorro > 0 ? `Ahorrás ${formatearPrecio(ahorro)} en estos productos al pasar a la próxima lista.` :
            'Sumá más unidades de esta categoría para mejorar el precio.';
        return `<div class="mireka-progreso-grupo">
            <div class="mireka-progreso-cabecera"><strong>${nombre}</strong><span>${q} unid. · ${nivel ? `Lista ${nivel}` : 'Minorista'}</span></div>
            <div class="mireka-progreso-meta">${mensaje}</div>
            <div class="mireka-progreso-barra" role="progressbar" aria-label="Progreso mayorista ${nombre}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${Math.round(progreso)}"><span style="width:${progreso}%"></span></div>
            <p class="mireka-ahorro">${ahorroTexto}</p>
        </div>`;
    }).join('');
}

// =============================
// MOSTRAR EL CARRITO
// =============================

function actualizarCarrito() {
    const cantidadTotal = obtenerCantidadTotal();

    if (contadorCarrito) {
        contadorCarrito.textContent = cantidadTotal;
    }

    if (carritoProductos) {
        if (carrito.length === 0) {
            carritoProductos.innerHTML = `
                <p class="carrito-vacio">
                    Tu carrito está vacío.
                </p>
            `;
        } else {
            carritoProductos.innerHTML = carrito
                .map((producto, indice) => {
                    const precioUnitario =
                        obtenerPrecioCarritoBase(producto);

                    const regla =
                        obtenerReglaCategoria(
                            producto.categoria
                        );

                    const esMayoristaProducto =
                        aplicaMayorista(producto);
                    const cotizacionMayoristaPendiente = esMayoristaProducto &&
                        mirekaPrecioDeNivel(producto, mirekaNivelCategoria(producto.categoria)) === null;

                    const puedeSumar =
                        producto.stock === null ||
                        producto.cantidad < producto.stock;

                    const textoStock =
                        producto.stock === null
                            ? "Stock a confirmar"
                            : `Stock: ${producto.stock}`;

                    return `
                        <div class="carrito-item">
                            <img
                                src="${escaparHTML(producto.imagen)}"
                                alt="${escaparHTML(producto.nombre)}"
                            >

                            <div class="carrito-item-info">
                                <h3>
                                    ${escaparHTML(producto.nombre)}
                                </h3>

                                <small class="carrito-item-categoria">
                                    ${escaparHTML(regla.nombre)}
                                </small>

                                <p class="carrito-item-precio">
                                    ${cotizacionMayoristaPendiente ? 'Precio mayorista a confirmar' : formatearPrecio(precioUnitario) + ' c/u'}
                                    ${
                                        esMayoristaProducto
                                            ? '<span class="carrito-item-mayorista">Mayorista</span>'
                                            : ""
                                    }
                                </p>

                                <small class="carrito-stock">
                                    ${textoStock}
                                </small>

                                <div class="carrito-item-acciones">
                                    <div class="carrito-cantidad">
                                        <button
                                            type="button"
                                            data-accion="restar"
                                            data-indice="${indice}"
                                            aria-label="Restar una unidad"
                                        >
                                            −
                                        </button>

                                        <span>
                                            ${producto.cantidad}
                                        </span>

                                        <button
                                            type="button"
                                            data-accion="sumar"
                                            data-indice="${indice}"
                                            aria-label="Sumar una unidad"
                                            ${puedeSumar ? "" : "disabled"}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <button
                                        type="button"
                                        class="eliminar-producto"
                                        data-accion="eliminar"
                                        data-indice="${indice}"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                })
                .join("");
        }
    }

    if (mensajeMayorista) {
        mensajeMayorista.textContent = crearMensajeMayorista();
        mensajeMayorista.hidden = true;
    }
    mirekaActualizarProgreso();

    const carritoEsMayorista =
        carritoTieneMayorista();

    const subtotal =
        calcularSubtotalCarritoBase();

    if (carritoTotal) {
        carritoTotal.textContent =
            mirekaFaltanCotizaciones() ? 'A confirmar' : formatearPrecio(subtotal);
    }

    const etiquetaTotal =
        document.querySelector(
            ".carrito-total span"
        );

    if (etiquetaTotal) {
        etiquetaTotal.textContent =
            carritoEsMayorista
                ? "Total"
                : "Subtotal";
    }

    /*
        El carrito queda intencionalmente limpio.
        Forma de pago, alias y Mercado Pago aparecen
        recién después de continuar con la compra.
    */
    if (bloqueMedioPagoCarrito) {
        bloqueMedioPagoCarrito.hidden = true;
    }

    const bloquePagoTransferencia =
        document.getElementById(
            "carrito-pago-transferencia"
        );

    if (bloquePagoTransferencia) {
        bloquePagoTransferencia.hidden = true;
    }

    const botonMercadoPago =
        document.getElementById(
            "pagar-mercado-pago"
        );

    if (botonMercadoPago) {
        botonMercadoPago.hidden = true;
    }

    const mensajeMercadoPago =
        document.getElementById(
            "mensaje-mercado-pago"
        );

    if (mensajeMercadoPago) {
        mensajeMercadoPago.hidden = true;
        mensajeMercadoPago.textContent = "";
    }

    if (botonFinalizarPedido) {
        botonFinalizarPedido.hidden =
            carrito.length === 0;

        botonFinalizarPedido.textContent =
            "Continuar compra";
    }
    mirekaActualizarPreciosVisibles();
}


// =============================
// AGREGAR PRODUCTOS AL CARRITO
// =============================

function obtenerCantidadElegida(boton) {
    const zonaDetalle = boton.closest(
        ".producto-detalle-info"
    );

    const inputCantidad = zonaDetalle?.querySelector(
        ".producto-compra input"
    );

    return Math.max(
        1,
        Number(inputCantidad?.value) || 1
    );
}

function agregarProductoAlCarrito(boton) {
    const slug = boton.dataset.slug || "";
    const nombre = boton.dataset.nombre || "Producto";

    const productoActual = buscarProductoActual({
        slug,
        nombre
    });

    const categoria =
        productoActual?.categoria ||
        boton.dataset.categoria ||
        CATEGORIA_PREDETERMINADA;

    const regla = obtenerReglaCategoria(categoria);

    const precioMinorista =
        productoActual?.precioMinorista ??
        numeroValido(boton.dataset.precioMinorista) ??
        0;

    const precioMayoristaIngresado =
        productoActual?.precioMayorista ??
        numeroValido(boton.dataset.precioMayorista);

    const precioMayorista =
        regla.tieneMayorista &&
        precioMayoristaIngresado !== null &&
        precioMayoristaIngresado > 0
            ? precioMayoristaIngresado
            : precioMinorista;

    const imagen =
        productoActual?.imagen ||
        boton.dataset.imagen ||
        "";

    const stock =
        productoActual?.stock ??
        (boton.dataset.stock !== ""
            ? numeroValido(boton.dataset.stock)
            : null);

    const activo = productoActual?.activo !== false;

    if (!activo || stock === 0) {
        alert("Este producto está agotado.");
        return;
    }

    const cantidad = obtenerCantidadElegida(boton);

    const productoExistente = carrito.find(
        (producto) =>
            (slug && producto.slug === slug) ||
            (!slug &&
                producto.nombre === nombre &&
                producto.categoria === categoria)
    );

    const cantidadActual =
        productoExistente?.cantidad || 0;

    if (
        stock !== null &&
        cantidadActual + cantidad > stock
    ) {
        const disponibles = Math.max(
            0,
            stock - cantidadActual
        );

        alert(
            disponibles > 0
                ? `Solo podés agregar ${disponibles} unidad${
                    disponibles === 1 ? "" : "es"
                } más.`
                : "Ya agregaste todo el stock disponible."
        );
        return;
    }

    if (productoExistente) {
        productoExistente.cantidad += cantidad;
        productoExistente.precioMinorista =
            precioMinorista;
        productoExistente.precioMayorista = precioMayorista;
        productoExistente.destacadoOferta = productoActual?.destacadoOferta === true;
        productoExistente.precioOfertaMinorista = productoActual?.precioOfertaMinorista || null;
        productoExistente.preciosListas = productoActual?.preciosListas || [];
        productoExistente.stock = stock;
    } else {
        carrito.push({
            slug: productoActual?.slug || slug,
            nombre,
            categoria,
            precioMinorista,
            precioMayorista,
            destacadoOferta: productoActual?.destacadoOferta === true,
            precioOfertaMinorista: productoActual?.precioOfertaMinorista || null,
            preciosListas: productoActual?.preciosListas || [],
            imagen,
            cantidad,
            stock
        });
    }

   guardarCarrito();
actualizarCarrito();

const contenidoOriginal = boton.innerHTML;
boton.textContent = "Agregado ✓";

setTimeout(() => {
    boton.innerHTML = contenidoOriginal;
}, 900);


// Mostramos aviso visual de producto agregado
mostrarAvisoCarritoAgregado();


// Cantidad total de unidades que hay en el carrito
const cantidadTotalCarrito = carrito.reduce(
    (total, producto) => {
        return total + (Number(producto.cantidad) || 0);
    },
    0
);


// Si es el primer producto, abrimos el carrito.
// Desde el segundo en adelante, solo animamos el botón.
if (cantidadTotalCarrito === 1) {

    abrirCarrito();

} else {

    if (botonAbrirCarrito) {

        botonAbrirCarrito.classList.remove("carrito-agregado");

        void botonAbrirCarrito.offsetWidth;

        botonAbrirCarrito.classList.add("carrito-agregado");

        setTimeout(() => {
            botonAbrirCarrito.classList.remove("carrito-agregado");
        }, 700);
    }

}

}


// =============================
// AVISO PRODUCTO AGREGADO
// =============================

let temporizadorAvisoCarrito;

function mostrarAvisoCarritoAgregado() {

    let aviso = document.getElementById(
        "aviso-carrito-agregado"
    );

    if (!aviso) {

        aviso = document.createElement("div");

        aviso.id = "aviso-carrito-agregado";
        aviso.className = "aviso-carrito-agregado";

        aviso.setAttribute("role", "status");
        aviso.setAttribute("aria-live", "polite");

        aviso.innerHTML = `
            <span class="aviso-carrito-check">✓</span>

            <span class="aviso-carrito-texto">
                Agregado al carrito
            </span>

            <strong class="aviso-carrito-cantidad">
                +1
            </strong>
        `;

        document.body.appendChild(aviso);
    }


    clearTimeout(temporizadorAvisoCarrito);

    aviso.classList.remove("visible");

    void aviso.offsetWidth;

    aviso.classList.add("visible");


    temporizadorAvisoCarrito = setTimeout(() => {
        aviso.classList.remove("visible");
    }, 1300);

}


// Delegación de eventos: funciona también con tarjetas creadas automáticamente.
document.addEventListener("click", (evento) => {
    const boton = evento.target.closest(
        ".agregar-carrito"
    );

    if (!boton || boton.disabled) return;

    agregarProductoAlCarrito(boton);
});


// =============================
// SUMAR, RESTAR O ELIMINAR
// =============================

carritoProductos?.addEventListener("click", (evento) => {
    const boton = evento.target.closest(
        "button[data-accion]"
    );

    if (!boton) return;

    const indice = Number(boton.dataset.indice);
    const accion = boton.dataset.accion;
    const producto = carrito[indice];

    if (!producto) return;

    if (accion === "sumar") {
        if (
            producto.stock !== null &&
            producto.cantidad >= producto.stock
        ) {
            alert("No hay más stock disponible.");
            return;
        }

        producto.cantidad += 1;
    }

    if (accion === "restar") {
        producto.cantidad -= 1;

        if (producto.cantidad <= 0) {
            carrito.splice(indice, 1);
        }
    }

    if (accion === "eliminar") {
        carrito.splice(indice, 1);
    }

    guardarCarrito();
    actualizarCarrito();
});

// =============================
// VACIAR CARRITO
// =============================

botonVaciarCarrito?.addEventListener("click", () => {

    if (carrito.length === 0) {
        alert("Tu carrito ya está vacío.");
        return;
    }

    const confirmarVaciado = window.confirm(
        "¿Querés vaciar todo el carrito?"
    );

    if (!confirmarVaciado) {
        return;
    }

    carrito.length = 0;

    guardarCarrito();
    actualizarCarrito();

});

// =============================
// PEDIDOS WEB PENDIENTES
// =============================

const PEDIDO_WEB_TEMPORAL_KEY =
    "voimport-pedido-web-temporal";

function crearHuellaPedidoWeb(
    cliente = null
) {

    return JSON.stringify({
        carrito:
            carrito
                .map((producto) => ({
                    slug: producto.slug || "",
                    cantidad: Number(producto.cantidad) || 0
                }))
                .sort((a, b) =>
                    a.slug.localeCompare(b.slug)
                ),

        cliente:
            cliente
                ? {
                    nombre:
                        limpiarTextoClienteWeb(
                            cliente.nombre
                        ),

                    apellido:
                        limpiarTextoClienteWeb(
                            cliente.apellido
                        ),

                    telefono:
                        normalizarWhatsappClienteWeb(
                            cliente.telefono
                        )
                }
                : null
    });

}

function obtenerPedidoWebTemporal(
    cliente = null
) {

    try {

        const guardado = JSON.parse(
            localStorage.getItem(
                PEDIDO_WEB_TEMPORAL_KEY
            )
        );

        if (!guardado) return null;

        if (
            guardado.huella !==
            crearHuellaPedidoWeb(
                cliente
            )
        ) {
            return null;
        }

        if (
            !guardado.pedidoId ||
            !guardado.codigo
        ) {
            return null;
        }

        return guardado;

    } catch (error) {

        console.warn(
            "No se pudo recuperar el pedido web temporal:",
            error
        );

        return null;

    }

}

function guardarPedidoWebTemporal(
    pedido,
    cliente = null
) {

    try {

        localStorage.setItem(
            PEDIDO_WEB_TEMPORAL_KEY,
            JSON.stringify({
                pedidoId: pedido.pedidoId,
                codigo: pedido.codigo,
                total: pedido.total,
                huella:
                    crearHuellaPedidoWeb(
                        cliente
                    ),
                creadoEn: Date.now()
            })
        );

    } catch (error) {

        console.warn(
            "No se pudo guardar el pedido web temporal:",
            error
        );

    }

}

function borrarPedidoWebTemporal() {

    try {

        localStorage.removeItem(
            PEDIDO_WEB_TEMPORAL_KEY
        );

    } catch (error) {

        console.warn(
            "No se pudo borrar el pedido web temporal:",
            error
        );

    }

}

function esErrorPedidoWebNoPendiente(
    error
) {

    const mensaje = String(
        error?.message ||
        error?.error ||
        error ||
        ""
    ).toLowerCase();

    return (
        mensaje.includes(
            "el pedido ya no está pendiente"
        ) ||
        mensaje.includes(
            "el pedido ya no esta pendiente"
        ) ||
        mensaje.includes(
            "el pedido no existe"
        )
    );

}

async function pedidoWebTemporalSiguePendiente(
    pedidoTemporal
) {

    if (
        typeof supabaseClient === "undefined" ||
        !supabaseClient?.rpc
    ) {
        throw new Error(
            "No se pudo conectar con el sistema de pedidos. Intentá nuevamente."
        );
    }

    const { data, error } =
        await supabaseClient.rpc(
            "pedido_web_sigue_pendiente",
            {
                p_pedido_id:
                    Number(
                        pedidoTemporal.pedidoId
                    ),
                p_origen:
                    null
            }
        );

    if (error) {
        throw error;
    }

    return data === true;

}

async function registrarPedidoWebPendiente(
    origen = "web",
    cliente = null
) {

    if (!cliente) {
        throw new Error(
            "Completá tus datos para continuar."
        );
    }

    const pedidoTemporal =
        obtenerPedidoWebTemporal(
            cliente
        );

    if (pedidoTemporal) {

        const siguePendiente =
            await pedidoWebTemporalSiguePendiente(
                pedidoTemporal
            );

        if (siguePendiente) {
            return pedidoTemporal;
        }

        borrarPedidoWebTemporal();

    }

    if (
        typeof supabaseClient === "undefined" ||
        !supabaseClient?.rpc
    ) {
        throw new Error(
            "No se pudo conectar con el sistema de pedidos. Intentá nuevamente."
        );
    }

    const items =
        carrito.map((producto) => ({
            slug: producto.slug || "",
            cantidad: Number(producto.cantidad) || 0
        }));

    const { data, error } =
        await supabaseClient.rpc(
            "crear_pedido_web",
            {
                p_items: items,
                p_origen: origen,
                p_nombre:
                    cliente.nombre,
                p_apellido:
                    cliente.apellido,
                p_telefono:
                    cliente.telefono
            }
        );

    if (error) {
        throw error;
    }

    const resultado =
        Array.isArray(data)
            ? data[0]
            : data;

    if (
        !resultado?.pedido_id ||
        !resultado?.codigo
    ) {
        throw new Error(
            "El pedido no pudo registrarse correctamente."
        );
    }

    const pedido = {
        pedidoId: resultado.pedido_id,
        codigo: resultado.codigo,
        total: Number(resultado.total) || 0
    };

    guardarClienteWebRecordado(
        cliente
    );

    guardarPedidoWebTemporal(
        pedido,
        cliente
    );

    return pedido;

}


// =============================
// FINALIZAR PEDIDO POR WHATSAPP
// =============================

function crearMensajePedido(
    codigoPedido = "",
    cliente = null
) {
    const cantidadTotal = obtenerCantidadTotal();

    let mensaje =
        "Hola, quiero realizar el siguiente pedido:\n\n";

    if (codigoPedido) {
        mensaje +=
            `Pedido: ${codigoPedido}\n\n`;
    }

    if (cliente) {
        mensaje +=
            `Cliente: ${cliente.nombre} ${cliente.apellido}\n`;

        mensaje +=
            `WhatsApp: +54 ${normalizarWhatsappClienteWeb(
                cliente.telefono
            )}\n\n`;
    }

    carrito.forEach((producto, indice) => {
        const precioUnitario =
            obtenerPrecioUnitario(producto);

        const tipoPrecio =
            obtenerTipoPrecio(producto);

        const subtotal =
            precioUnitario * producto.cantidad;

        const nombreCompleto = producto.nombre;

        let categoriaTexto = "";

        if (producto.categoria === "perfumes-grandes") {
            categoriaTexto = "Perfume árabe";
        }

        if (producto.categoria === "maison-30ml") {
            categoriaTexto = "Maison Alhambra 30 ml";
        }

        if (producto.categoria === "decants") {
            categoriaTexto = "Decant 5 ml";
        }

        mensaje +=
            `${indice + 1}. ${nombreCompleto}\n`;

        mensaje +=
            `${categoriaTexto} · ${producto.cantidad} ${
                producto.cantidad === 1 ? "u" : "u"
            }`;

        if (tipoPrecio !== "Precio único") {
            mensaje += ` · ${tipoPrecio}`;
        }

        mensaje += "\n";

        if (producto.cantidad === 1) {
            mensaje +=
                `${formatearPrecio(precioUnitario)}\n\n`;
        } else {
            mensaje +=
                `${formatearPrecio(precioUnitario)} c/u\n`;

            mensaje +=
                `Subtotal: ${formatearPrecio(subtotal)}\n\n`;
        }
    });

    const total = carrito.reduce(
        (acumulado, producto) =>
            acumulado +
            obtenerPrecioUnitario(producto) *
            producto.cantidad,
        0
    );

    mensaje +=
        `Total: ${cantidadTotal} unidades\n`;

    mensaje +=
        `Total del pedido: ${formatearPrecio(total)}\n\n`;

    mensaje +=
        "Quedo a la espera para coordinar el pago y la entrega.";

    return mensaje;
}


// =============================
// CHECKOUT MAYORISTA POR PASOS
// Paso 1: datos del cliente
// Paso 2: efectivo o transferencia
// =============================

function abrirPasoPagoCheckoutMayorista(cliente) {
    if (!cliente) return;

    clienteCheckoutActual = cliente;

    /*
        Reutilizamos el indicador de checkout por pasos para que
        el formulario de datos muestre "Paso 1 de 2" también en
        compras mayoristas.
    */
    flujoCheckoutMinorista = true;

    accionClienteWebPendiente =
        abrirPasoPagoCheckoutMayorista;

    crearModalClienteWeb();

    const modal =
        document.getElementById(
            "modal-cliente-web"
        );

    const cuerpo =
        document.getElementById(
            "modal-cliente-web-cuerpo"
        );

    if (!modal || !cuerpo) return;

    const totalMayorista =
        calcularSubtotalCarritoBase();

    cuerpo.innerHTML = `
        <div class="modal-cliente-web-encabezado checkout-pago-encabezado">
            <span class="modal-cliente-web-paso">
                Paso 2 de 2
            </span>

            <h3 id="modal-cliente-web-titulo">
                ¿Cómo querés pagar?
            </h3>

            <p>
                Elegí cómo vas a abonar tu pedido mayorista.
            </p>
        </div>

        <div class="checkout-metodos-pago checkout-metodos-mayorista">
            <button
                type="button"
                class="checkout-metodo-pago"
                data-checkout-medio-mayorista="efectivo"
            >
                <span class="checkout-metodo-info">
                    <strong>Efectivo</strong>
                    <small>Precio mayorista</small>
                </span>
                <span class="checkout-metodo-precio">
                    ${formatearPrecio(totalMayorista)}
                </span>
            </button>

            <button
                type="button"
                class="checkout-metodo-pago"
                data-checkout-medio-mayorista="transferencia"
            >
                <span class="checkout-metodo-info">
                    <strong>Transferencia</strong>
                    <small>Precio mayorista</small>
                </span>
                <span class="checkout-metodo-precio">
                    ${formatearPrecio(totalMayorista)}
                </span>
            </button>
        </div>

        <div
            class="checkout-pago-detalle"
            id="checkout-pago-detalle"
        >
            <p class="checkout-pago-ayuda">
                Seleccioná un medio de pago para continuar.
            </p>
        </div>

        <button
            type="button"
            class="modal-cliente-web-secundario checkout-volver-datos"
            id="checkout-volver-datos"
        >
            Volver a mis datos
        </button>
    `;

    modal.hidden = false;

    cuerpo
        .querySelectorAll(
            "[data-checkout-medio-mayorista]"
        )
        .forEach((boton) => {
            boton.addEventListener(
                "click",
                () => {
                    renderizarDetallePagoCheckoutMayorista(
                        boton.dataset.checkoutMedioMayorista,
                        cliente
                    );
                }
            );
        });

    document
        .getElementById(
            "checkout-volver-datos"
        )
        ?.addEventListener(
            "click",
            () => {
                clienteWebModoEdicion = false;
                accionClienteWebPendiente =
                    abrirPasoPagoCheckoutMayorista;
                renderizarModalClienteWeb();
            }
        );
}


function renderizarDetallePagoCheckoutMayorista(
    medio,
    cliente = clienteCheckoutActual
) {
    if (
        ![
            "efectivo",
            "transferencia"
        ].includes(medio)
    ) {
        return;
    }

    medioPagoCarrito = medio;
    guardarMedioPagoCarrito();

    document
        .querySelectorAll(
            "[data-checkout-medio-mayorista]"
        )
        .forEach((boton) => {
            boton.classList.toggle(
                "seleccionado",
                boton.dataset.checkoutMedioMayorista === medio
            );
        });

    const detalle =
        document.getElementById(
            "checkout-pago-detalle"
        );

    if (!detalle || !cliente) return;

    const totalMayorista =
        calcularSubtotalCarritoBase();

    if (medio === "efectivo") {
        detalle.innerHTML = `
            <div class="checkout-total-final">
                <span>Total mayorista en efectivo</span>
                <strong>${formatearPrecio(totalMayorista)}</strong>
            </div>

            <p class="checkout-pago-nota">
                Finalizá el pedido por WhatsApp y coordinamos el pago y la entrega.
            </p>

            <button
                type="button"
                class="modal-cliente-web-principal checkout-finalizar"
                id="checkout-finalizar-whatsapp"
            >
                Finalizar pedido por WhatsApp
            </button>
        `;

        document
            .getElementById(
                "checkout-finalizar-whatsapp"
            )
            ?.addEventListener(
                "click",
                () => {
                    procesarFinalizacionPedidoWeb(
                        cliente
                    );
                }
            );

        return;
    }

    detalle.innerHTML = `
        <div class="checkout-total-final">
            <span>Total mayorista por transferencia</span>
            <strong>${formatearPrecio(totalMayorista)}</strong>
        </div>

        <div class="checkout-transferencia-datos">
            <div>
                <span>Titular</span>
                <strong>Eric Damian Ranzoni</strong>
            </div>

            <div>
                <span>Alias</span>
                <span class="checkout-alias-linea">
                    <strong>voimport.lemon</strong>
                    <button
                        type="button"
                        id="checkout-copiar-alias"
                    >
                        Copiar
                    </button>
                </span>
            </div>

            <div>
                <span>CVU</span>
                <strong>0000168300000017205739</strong>
            </div>
        </div>

        <p class="checkout-pago-nota">
            Realizá la transferencia con estos datos. Cuando esté hecha, tocá el botón para finalizar el pedido y enviarnos el comprobante por WhatsApp.
        </p>

        <button
            type="button"
            class="modal-cliente-web-principal checkout-finalizar"
            id="checkout-finalizar-whatsapp"
        >
            Ya transferí · Finalizar pedido y enviar comprobante
        </button>
    `;

    document
        .getElementById(
            "checkout-copiar-alias"
        )
        ?.addEventListener(
            "click",
            async (evento) => {
                const boton = evento.currentTarget;

                try {
                    await navigator.clipboard.writeText(
                        "voimport.lemon"
                    );
                    boton.textContent = "Copiado ✓";
                    setTimeout(
                        () => {
                            boton.textContent = "Copiar";
                        },
                        1500
                    );
                } catch (_) {
                    alert("Alias: voimport.lemon");
                }
            }
        );

    document
        .getElementById(
            "checkout-finalizar-whatsapp"
        )
        ?.addEventListener(
            "click",
            () => {
                procesarEnvioComprobanteWeb(
                    cliente
                );
            }
        );
}


// =============================
// CHECKOUT MINORISTA POR PASOS
// Paso 1: datos del cliente
// Paso 2: medio de pago
// =============================

function abrirPasoPagoCheckout(cliente) {
    if (!cliente) return;

    clienteCheckoutActual = cliente;
    flujoCheckoutMinorista = true;

    /*
        Dejamos preparada la misma acción por si el cliente
        vuelve a sus datos y continúa otra vez.
    */
    accionClienteWebPendiente =
        abrirPasoPagoCheckout;

    crearModalClienteWeb();

    const modal =
        document.getElementById(
            "modal-cliente-web"
        );

    const cuerpo =
        document.getElementById(
            "modal-cliente-web-cuerpo"
        );

    if (!modal || !cuerpo) return;

    const subtotalEfectivo =
        calcularSubtotalCarritoBase();

    const totalMercadoPago =
        calcularTotalMercadoPagoMinorista();

    cuerpo.innerHTML = `
        <div class="modal-cliente-web-encabezado checkout-pago-encabezado">
            <span class="modal-cliente-web-paso">
                Paso 2 de 2
            </span>

            <h3 id="modal-cliente-web-titulo">
                ¿Cómo querés pagar?
            </h3>

            <p>
                Elegí una opción para ver el total y finalizar tu pedido.
            </p>
        </div>

        <div class="checkout-metodos-pago">
            <button
                type="button"
                class="checkout-metodo-pago"
                data-checkout-medio="efectivo"
            >
                <span class="checkout-metodo-info">
                    <strong>Efectivo</strong>
                    <small>20% OFF</small>
                </span>
                <span class="checkout-metodo-precio">
                    ${formatearPrecio(subtotalEfectivo)}
                </span>
            </button>

            <button
                type="button"
                class="checkout-metodo-pago"
                data-checkout-medio="transferencia"
            >
                <span class="checkout-metodo-info">
                    <strong>Transferencia</strong>
                    <small>20% OFF</small>
                </span>
                <span class="checkout-metodo-precio">
                    ${formatearPrecio(subtotalEfectivo)}
                </span>
            </button>

            <button
                type="button"
                class="checkout-metodo-pago checkout-metodo-mp"
                data-checkout-medio="mercado_pago"
            >
                <span class="checkout-metodo-info">
                    <strong class="checkout-metodo-tarjeta">
                        <svg class="checkout-icono-tarjeta" viewBox="0 0 24 24" aria-hidden="true">
                            <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                            <path d="M3 10h18"></path>
                        </svg>
                        Mercado Pago
                    </strong>
                    <small>3 cuotas sin interés</small>
                </span>
                <span class="checkout-metodo-precio">
                    ${formatearPrecio(totalMercadoPago)}
                </span>
            </button>
        </div>

        <div
            class="checkout-pago-detalle"
            id="checkout-pago-detalle"
        >
            <p class="checkout-pago-ayuda">
                Seleccioná un medio de pago para continuar.
            </p>
        </div>

        <button
            type="button"
            class="modal-cliente-web-secundario checkout-volver-datos"
            id="checkout-volver-datos"
        >
            Volver a mis datos
        </button>
    `;

    modal.hidden = false;

    cuerpo
        .querySelectorAll(
            "[data-checkout-medio]"
        )
        .forEach((boton) => {
            boton.addEventListener(
                "click",
                () => {
                    renderizarDetallePagoCheckout(
                        boton.dataset.checkoutMedio,
                        cliente
                    );
                }
            );
        });

    document
        .getElementById(
            "checkout-volver-datos"
        )
        ?.addEventListener(
            "click",
            () => {
                clienteWebModoEdicion = false;
                accionClienteWebPendiente =
                    abrirPasoPagoCheckout;
                renderizarModalClienteWeb();
            }
        );
}


function renderizarDetallePagoCheckout(
    medio,
    cliente = clienteCheckoutActual
) {
    if (
        ![
            "efectivo",
            "transferencia",
            "mercado_pago"
        ].includes(medio)
    ) {
        return;
    }

    medioPagoCarrito = medio;
    guardarMedioPagoCarrito();

    document
        .querySelectorAll(
            "[data-checkout-medio]"
        )
        .forEach((boton) => {
            boton.classList.toggle(
                "seleccionado",
                boton.dataset.checkoutMedio === medio
            );
        });

    const detalle =
        document.getElementById(
            "checkout-pago-detalle"
        );

    if (!detalle || !cliente) return;

    const subtotalEfectivo =
        calcularSubtotalCarritoBase();

    const totalMercadoPago =
        calcularTotalMercadoPagoMinorista();

    if (medio === "efectivo") {
        detalle.innerHTML = `
            <div class="checkout-total-final">
                <span>Total en efectivo</span>
                <strong>${formatearPrecio(subtotalEfectivo)}</strong>
            </div>

            <p class="checkout-pago-nota">
                Finalizá el pedido por WhatsApp y coordinamos el pago y la entrega.
            </p>

            <button
                type="button"
                class="modal-cliente-web-principal checkout-finalizar"
                id="checkout-finalizar-whatsapp"
            >
                Finalizar pedido por WhatsApp
            </button>
        `;

        document
            .getElementById(
                "checkout-finalizar-whatsapp"
            )
            ?.addEventListener(
                "click",
                () => {
                    procesarFinalizacionPedidoWeb(
                        cliente
                    );
                }
            );

        return;
    }

    if (medio === "transferencia") {
        detalle.innerHTML = `
            <div class="checkout-total-final">
                <span>Total por transferencia</span>
                <strong>${formatearPrecio(subtotalEfectivo)}</strong>
            </div>

            <div class="checkout-transferencia-datos">
                <div>
                    <span>Titular</span>
                    <strong>Eric Damian Ranzoni</strong>
                </div>

                <div>
                    <span>Alias</span>
                    <span class="checkout-alias-linea">
                        <strong>voimport.lemon</strong>
                        <button
                            type="button"
                            id="checkout-copiar-alias"
                        >
                            Copiar
                        </button>
                    </span>
                </div>

                <div>
                    <span>CVU</span>
                    <strong>0000168300000017205739</strong>
                </div>

            </div>

            <p class="checkout-pago-nota">
                Realizá la transferencia con estos datos. Cuando esté hecha, tocá el botón para enviarnos el comprobante por WhatsApp.
            </p>

            <button
                type="button"
                class="modal-cliente-web-principal checkout-finalizar"
                id="checkout-finalizar-whatsapp"
            >
                Ya transferí · Finalizar pedido y enviar comprobante
            </button>
        `;

        document
            .getElementById(
                "checkout-copiar-alias"
            )
            ?.addEventListener(
                "click",
                async (evento) => {
                    const boton = evento.currentTarget;

                    try {
                        await navigator.clipboard.writeText(
                            "voimport.lemon"
                        );
                        boton.textContent = "Copiado ✓";
                        setTimeout(
                            () => {
                                boton.textContent = "Copiar";
                            },
                            1500
                        );
                    } catch (_) {
                        alert("Alias: voimport.lemon");
                    }
                }
            );

        document
            .getElementById(
                "checkout-finalizar-whatsapp"
            )
            ?.addEventListener(
                "click",
                () => {
                    procesarEnvioComprobanteWeb(
                        cliente
                    );
                }
            );

        return;
    }

    detalle.innerHTML = `
        <div class="checkout-total-final checkout-total-mp">
            <span>Total con Mercado Pago</span>
            <strong>${formatearPrecio(totalMercadoPago)}</strong>
        </div>

        <p class="checkout-pago-nota checkout-pago-nota-mp">
            Pagá con Mercado Pago en 3 cuotas sin interés.
        </p>

        <button
            type="button"
            class="checkout-pagar-mp"
            id="checkout-pagar-mercado-pago"
        >
            <svg class="checkout-mp-icono" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="6" width="18" height="12" rx="2"></rect>
                <path d="M3 10h18"></path>
            </svg>
            Pagar con Mercado Pago
        </button>

    `;

    document
        .getElementById(
            "checkout-pagar-mercado-pago"
        )
        ?.addEventListener(
            "click",
            () => {
                procesarPagoMercadoPagoWeb(
                    cliente
                );
            }
        );
}


botonFinalizarPedido?.addEventListener(
    "click",
    () => {
        if (MIREKA_PRUEBA_SIN_CHECKOUT) {
            alert('Esta es una prueba local del nuevo carrito. La finalización está pausada hasta conectar los precios de las 4 listas con el registro de pedidos en Supabase.');
            return;
        }
        if (mirekaFaltanCotizaciones()) {
            alert('Falta sincronizar los precios mayoristas. No se puede finalizar con precios sin confirmar.');
            return;
        }
        if (carrito.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }

        cerrarCarrito();

        if (carritoTieneMayorista()) {
            /*
                Mayorista también usa checkout por pasos:
                datos del cliente -> efectivo o transferencia.
            */
            flujoCheckoutMinorista = true;
            clienteCheckoutActual = null;

            abrirModalClienteWeb(
                abrirPasoPagoCheckoutMayorista
            );
            return;
        }

        /*
            Minorista: el carrito solo revisa productos.
            Primero pedimos los datos y recién después
            mostramos la forma de pago.
        */
        flujoCheckoutMinorista = true;
        clienteCheckoutActual = null;

        abrirModalClienteWeb(
            abrirPasoPagoCheckout
        );
    }
);


async function procesarFinalizacionPedidoWeb(
    cliente
) {

    const ventanaWhatsApp =
        window.open("", "_blank");

    if (!ventanaWhatsApp) {
        alert("El navegador bloqueó la ventana de WhatsApp. Permití las ventanas emergentes e intentá de nuevo.");
        return;
    }

    ventanaWhatsApp.opener = null;

    const botonAccion =
        document.getElementById(
            "checkout-finalizar-whatsapp"
        ) ||
        botonFinalizarPedido;

    const textoOriginal =
        botonAccion?.textContent ||
        "Finalizar pedido por WhatsApp";

    if (botonAccion) {
        botonAccion.disabled = true;
        botonAccion.textContent =
            "Registrando pedido...";
    }

    try {

        const pedido =
            await registrarPedidoWebPendiente(
                "web",
                cliente
            );

        let mensajePedido =
            crearMensajePedido(
                pedido.codigo,
                cliente
            );

        if (medioPagoCarrito === "efectivo") {
            const introduccionEfectivo =
                carritoTieneMayorista()
                    ? "Hola, quiero realizar el siguiente pedido mayorista y abonar en efectivo:"
                    : "Hola, quiero realizar el siguiente pedido y abonar en efectivo:";

            mensajePedido =
                mensajePedido.replace(
                    "Hola, quiero realizar el siguiente pedido:",
                    introduccionEfectivo
                );
        }

        const mensaje = encodeURIComponent(
            mensajePedido
        );

        const enlaceWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

        ventanaWhatsApp.location.href =
            enlaceWhatsApp;

        cerrarModalClienteWeb();

    } catch (error) {

        console.error(
            "No se pudo registrar el pedido web:",
            error
        );

        ventanaWhatsApp.close();

        alert(
            error?.message ||
            "No se pudo registrar el pedido. Intentá nuevamente."
        );

    } finally {

        if (botonAccion) {
            botonAccion.disabled = false;
            botonAccion.textContent =
                textoOriginal;
        }

    }

}


// =============================
// ESTILOS DE STOCK Y BOTONES
// =============================

function agregarEstilosStock() {
    if (document.getElementById("estilos-stock-voimport")) {
        return;
    }

    const estilos = document.createElement("style");
    estilos.id = "estilos-stock-voimport";
    estilos.textContent = `
        .producto-stock,
        .stock-producto-detalle {
            margin: 10px 0;
            font-size: 14px;
            font-weight: 700;
        }

        .producto-stock.disponible,
        .stock-producto-detalle.disponible {
            color: #79d98c;
        }

        .producto-stock.agotado,
        .stock-producto-detalle.agotado {
            color: #ef7d7d;
        }

        .producto-stock.pendiente,
        .stock-producto-detalle.pendiente {
            color: #bdbdbd;
        }

        .agregar-carrito:disabled,
        .carrito-cantidad button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .carrito-stock {
            display: block;
            margin: -6px 0 10px;
            color: #bdbdbd;
            font-size: 12px;
        }

        .catalogo-vacio {
            grid-column: 1 / -1;
            color: #bdbdbd;
            text-align: center;
        }
    `;

    document.head.appendChild(estilos);
}


// =============================
// INICIAR LA APLICACIÓN
// =============================

async function iniciarAplicacion() {
    agregarEstilosStock();

    const datosSupabase = await cargarDatosDesdeSupabase();

    productosSupabasePorSlug = new Map(
        datosSupabase
            .filter((producto) => producto?.slug)
            .map((producto) => [producto.slug, producto])
    );

    productosSupabasePorClave = new Map(
        datosSupabase
            .map((producto) => [
                obtenerClaveCoincidenciaProductoWeb(producto),
                producto
            ])
            .filter(([clave]) => clave && clave !== "|||")
    );

    const productosLocales =
        typeof productos !== "undefined" &&
        Array.isArray(productos)
            ? productos
            : [];

    const catalogoLocalActualizado =
        productosLocales.map(
            combinarProductoConSupabase
        );

    const slugsLocales = new Set(
        catalogoLocalActualizado
            .map((producto) => producto.slug)
            .filter(Boolean)
    );

    const productosSoloSupabase =
        datosSupabase
            .filter(
                (producto) =>
                    producto?.slug &&
                    !slugsLocales.has(producto.slug)
            )
            .map(crearProductoSoloSupabase)
            .filter(Boolean);

    catalogoActualizado = [
        ...catalogoLocalActualizado,
        ...productosSoloSupabase
    ];

    // Se calcula una sola vez, para que fichas, carrito y navegación coincidan.
    catalogoActualizado.forEach(producto => {
        if (producto.categoria === 'decants') {
            producto.precioMinorista = mirekaRedondearDecant(producto.precioMinorista);
        }
    });

    /*
        El buscador general del inicio usa el array local
        `productos`. Agregamos allí, solo en memoria, los
        productos creados desde Gestión para que también
        puedan encontrarse sin modificar productos.js.
    */
    if (
        typeof productos !== "undefined" &&
        Array.isArray(productos)
    ) {
        productosSoloSupabase.forEach((producto) => {
            const yaExiste = productos.some(
                (local) =>
                    obtenerSlug(local) === producto.slug
            );

            if (!yaExiste) {
                productos.push(producto);
            }
        });
    }

    await mirekaCargarPreciosPublicos();
    catalogoActualizado.forEach(producto => {
        producto.preciosListas = mirekaPreciosPorSlug.get(String(producto.slug)) || [];
    });
    mirekaActualizarSelector();
    sincronizarCarritoConCatalogo();
    generarCatalogo();
    actualizarFichaIndividual();
    guardarCarrito();
    actualizarCarrito();
}

mirekaIniciarSelectorCompra();

iniciarAplicacion().catch((error) => {
    console.error("Error al iniciar la web:", error);
    actualizarCarrito();
});
const cambiarPresentacion =
    document.getElementById("cambiar-presentacion");


function actualizarUrlPresentacion(viendoDecants) {

    const url =
        new URL(window.location.href);


    if (viendoDecants) {

        url.searchParams.set(
            "vista",
            "decants"
        );

    } else {

        url.searchParams.delete(
            "vista"
        );

    }


    window.history.replaceState(
        {},
        "",
        url.pathname +
        url.search +
        url.hash
    );
}


if (cambiarPresentacion) {

    // =====================================================
    // RECUPERAR LA VISTA DESDE EL ENLACE
    // =====================================================

    const parametrosPresentacion =
        new URLSearchParams(
            window.location.search
        );

    const vistaInicial =
        parametrosPresentacion.get("vista");

    if (vistaInicial === "decants") {
        document.body.dataset.categoria = "decants";
        cambiarPresentacion.textContent = "← Volver a perfumes";
    }


    // =====================================================
    // CAMBIAR ENTRE PERFUMES Y DECANTS
    // =====================================================

    cambiarPresentacion.addEventListener(
        "click",
        () => {

            const viendoDecants =
                document.body.dataset.categoria === "decants";

            if (viendoDecants) {
                document.body.dataset.categoria = "perfumes-grandes";
                cambiarPresentacion.textContent = "Ver Decants 5 ml";
                actualizarUrlPresentacion(false);
            } else {
                document.body.dataset.categoria = "decants";
                cambiarPresentacion.textContent = "← Volver a perfumes";
                actualizarUrlPresentacion(true);
            }

            generarCatalogo();

        }
    );

}
// =============================
// VOLVER ARRIBA FLOTANTE GLOBAL
// =============================

function crearVolverFlotanteGlobal() {

    if (document.getElementById("volver-flotante-global")) {
        return;
    }


    // Buscamos si la página tiene un enlace Volver principal
    let enlaceVolver = document.querySelector(
        ".productos-header a, " +
        ".producto-detalle-header a"
    );


    // Respaldo para cualquier otra página de la web
    if (!enlaceVolver) {

        enlaceVolver = Array.from(
            document.querySelectorAll("a")
        ).find((enlace) => {

            const texto = enlace.textContent
                .replace(/\s+/g, " ")
                .trim()
                .toLowerCase();

            return (
                texto.includes("volver") &&
                enlace.id !== "cambiar-presentacion"
            );
        });

    }


    // Si la página no tiene Volver, no hacemos nada
    if (!enlaceVolver) {
        return;
    }


    const botonVolverFlotante =
        document.createElement("button");

    botonVolverFlotante.type = "button";
    botonVolverFlotante.id = "volver-flotante-global";
    botonVolverFlotante.className =
        "volver-flotante-global";

    botonVolverFlotante.setAttribute(
        "aria-label",
        "Volver arriba"
    );

    botonVolverFlotante.innerHTML = `
        <span>Volver</span>

        <span
            class="volver-flotante-flecha"
            aria-hidden="true"
        >
            ↑
        </span>
    `;


    botonVolverFlotante.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );


    document.body.appendChild(
        botonVolverFlotante
    );


    function actualizarVolverFlotante() {

        if (window.scrollY > 180) {

            botonVolverFlotante.classList.add(
                "visible"
            );

        } else {

            botonVolverFlotante.classList.remove(
                "visible"
            );

        }

    }


    actualizarVolverFlotante();


    window.addEventListener(
        "scroll",
        actualizarVolverFlotante,
        { passive: true }
    );

}


crearVolverFlotanteGlobal();
// =============================
// BARRA INFORMATIVA GLOBAL
// =============================

function crearBarraInformativaGlobal() {

    let barra = document.querySelector(".mobile-topbar");

    // Si la página no tiene la barra, la creamos automáticamente
    if (!barra) {

        barra = document.createElement("div");
        barra.className = "mobile-topbar";

        document.body.insertBefore(
            barra,
            document.body.firstChild
        );
    }


    const mensajes = `
        <span>◆ MAYORISTA DESDE 3 PERFUMES ◆</span>
        <span>◆ PERFUMES 100% ORIGINALES ◆</span>
        <span>◆ 20% OFF MINORISTA ◆</span>
        <span>◆ 3 CUOTAS SIN INTERÉS ◆</span>
        <span>◆ TIENDA FÍSICA EN RAMOS MEJÍA ◆</span>
        <span>◆ ENVÍOS A TODO EL PAÍS ◆</span>
        <span>◆ COMPRA MINORISTA Y MAYORISTA ◆</span>
        <span>◆ DECANTS 5 ML PREMIUM ◆</span>
    `;


    barra.innerHTML = `
        <div class="topbar-marquee">
            <div class="topbar-track">

                <div class="topbar-grupo">
                    ${mensajes}
                </div>

                <div
                    class="topbar-grupo"
                    aria-hidden="true"
                >
                    ${mensajes}
                </div>

            </div>
        </div>
    `;

}


crearBarraInformativaGlobal();
// =============================
// VOLVER DESDE DETALLE DE PRODUCTO
// =============================

const enlaceVolverProducto =
    document.getElementById("volver-marca");

if (enlaceVolverProducto) {

    const paginaAnterior = document.referrer;

    let vieneDeLaWeb = false;

    if (paginaAnterior) {

        try {

            const urlAnterior = new URL(paginaAnterior);

            vieneDeLaWeb =
                urlAnterior.origin === window.location.origin &&
                urlAnterior.href !== window.location.href;

        } catch (error) {
            vieneDeLaWeb = false;
        }

    }


    enlaceVolverProducto.addEventListener("click", (evento) => {

        if (!vieneDeLaWeb) {
            return;
        }

        evento.preventDefault();

        if (window.history.length > 1) {

            window.history.back();

        } else {

            window.location.href = paginaAnterior;

        }

    });

}
// =============================
// AVISO DE SCROLL EN EL CARRITO
// =============================

function configurarAvisoScrollCarrito() {

    const carritoProductos =
        document.querySelector(".carrito-productos");

    if (!carritoProductos) {
        return;
    }


    let avisoScroll =
        document.getElementById("aviso-scroll-carrito");


    if (!avisoScroll) {

        avisoScroll = document.createElement("div");

        avisoScroll.id = "aviso-scroll-carrito";
        avisoScroll.className = "aviso-scroll-carrito";

        avisoScroll.innerHTML = `
            <span>Deslizá para ver más</span>
            <span class="aviso-scroll-flecha">↓</span>
        `;


        carritoProductos.insertAdjacentElement(
            "afterend",
            avisoScroll
        );

    }


    function actualizarAvisoScroll() {

        const tieneScroll =
            carritoProductos.scrollHeight >
            carritoProductos.clientHeight + 5;

        const llegoAlFinal =
            carritoProductos.scrollTop +
            carritoProductos.clientHeight >=
            carritoProductos.scrollHeight - 8;


        if (tieneScroll && !llegoAlFinal) {

            avisoScroll.classList.add("visible");

        } else {

            avisoScroll.classList.remove("visible");

        }

    }


    carritoProductos.addEventListener(
        "scroll",
        actualizarAvisoScroll,
        { passive: true }
    );


    const observadorCarrito =
        new MutationObserver(() => {

            requestAnimationFrame(
                actualizarAvisoScroll
            );

        });


    observadorCarrito.observe(
        carritoProductos,
        {
            childList: true,
            subtree: true
        }
    );


    window.addEventListener(
        "resize",
        actualizarAvisoScroll
    );


    actualizarAvisoScroll();

}


configurarAvisoScrollCarrito();
// =============================
// RESULTADOS INSTANTÁNEOS BUSCADOR CATÁLOGO
// =============================

const buscadorCatalogoInstantaneo =
    document.getElementById("buscador-catalogo");

const resultadosBuscadorCatalogo =
    document.getElementById("catalogo-buscador-resultados");


if (
    buscadorCatalogoInstantaneo &&
    resultadosBuscadorCatalogo
) {

    const obtenerEtiquetaCategoria = (producto) => {
if (producto.categoria === "decants") {
            return "DECANT 5 ML";
        }

        if (producto.categoria === "maison-30ml") {
            return "MAISON ALHAMBRA 30 ML";
        }

        return "PERFUME ÁRABE";
    };


    const cerrarResultadosCatalogo = () => {
        resultadosBuscadorCatalogo.innerHTML = "";
        resultadosBuscadorCatalogo.classList.remove("visible");
    };


    const mostrarResultadosCatalogo = () => {

        const termino =
            buscadorCatalogoInstantaneo.value
                .trim()
                .toLowerCase();


        if (termino.length < 2) {
            cerrarResultadosCatalogo();
            return;
        }


        const coincidencias = catalogoActualizado
            .filter((producto) => {

                if (producto.activo === false) {
                    return false;
                }

                const nombre =
                    String(producto.nombre || "")
                        .toLowerCase();

                const marca =
                    String(producto.marca || "")
                        .toLowerCase();

                return (
                    nombre.includes(termino) ||
                    marca.includes(termino)
                );

            })
            .slice(0, 8);


        if (coincidencias.length === 0) {

            resultadosBuscadorCatalogo.innerHTML = `
                <div class="catalogo-resultado-vacio">
                    No encontramos productos para
                    “${escaparHTML(
                        buscadorCatalogoInstantaneo.value.trim()
                    )}”
                </div>
            `;

            resultadosBuscadorCatalogo.classList.add("visible");

            return;
        }


        resultadosBuscadorCatalogo.innerHTML = `
            <div class="catalogo-resultados-lista">

                ${coincidencias.map((producto) => {

                    const etiquetaCategoria =
                        obtenerEtiquetaCategoria(producto);

                    return `
                        <a
                            href="producto.html?slug=${encodeURIComponent(producto.slug)}"
                            class="catalogo-resultado-item"
                        >

                            <img
                                src="${escaparHTML(producto.imagen)}"
                                alt="${escaparHTML(producto.nombre)}"
                            >

                            <div class="catalogo-resultado-info">

                                <small>
                                    ${escaparHTML(etiquetaCategoria)}
                                </small>

                                <strong>
                                    ${escaparHTML(producto.nombre)}
                                </strong>

                                <span>
                                    ${escaparHTML(producto.marca || "")}
                                </span>

                            </div>

                            <span
                                class="catalogo-resultado-flecha"
                                aria-hidden="true"
                            >
                                →
                            </span>

                        </a>
                    `;

                }).join("")}

            </div>

            <button
                type="button"
                class="catalogo-ver-resultados"
                id="catalogo-ver-resultados"
            >
                Ver todos los resultados
            </button>
        `;


        resultadosBuscadorCatalogo.classList.add("visible");


        document
            .getElementById("catalogo-ver-resultados")
            ?.addEventListener("click", () => {

                buscadorCatalogoInstantaneo.blur();

                cerrarResultadosCatalogo();

                document
                    .getElementById("productos-grid")
                    ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

            });

    };


    buscadorCatalogoInstantaneo.addEventListener(
        "input",
        mostrarResultadosCatalogo
    );


    buscadorCatalogoInstantaneo.addEventListener(
        "search",
        mostrarResultadosCatalogo
    );


    document.addEventListener("click", (evento) => {

        if (
            !evento.target.closest(".catalogo-buscador")
        ) {
            cerrarResultadosCatalogo();
        }

    });

}
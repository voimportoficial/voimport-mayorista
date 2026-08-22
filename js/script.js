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
        nombre: "Maison de 30 ml",
        minimoMayorista: 3,
        tieneMayorista: true
    },
    "inspiraciones-disenador": {
        nombre: "Inspiraciones en diseñador",
        minimoMayorista: 3,
        tieneMayorista: true
    },
    "decants": {
        nombre: "Decants",
        minimoMayorista: 0,
        tieneMayorista: false
    }
};

const CATEGORIA_PREDETERMINADA = "perfumes-grandes";
const numeroWhatsApp = "5491134293000";

let catalogoActualizado = [];
let productosSupabasePorSlug = new Map();
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
    !document.getElementById("carrito-pago-transferencia")
) {
    resumenCarritoPago.insertAdjacentHTML(
        "afterbegin",
        `
        <div
            class="carrito-pago-transferencia"
            id="carrito-pago-transferencia"
        >

            <h3>¿Querés confirmar tu pedido?</h3>

            <p class="carrito-pago-texto">
                Podés abonar por transferencia para confirmar tu pedido.
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

            <div class="carrito-dato-pago">
                <span>Lemontag</span>
                <strong>$ericranzoni</strong>
            </div>

            <p class="carrito-reserva-aviso">
                El pedido queda confirmado una vez recibido y verificado el pago.
            </p>

            <button
                type="button"
                class="enviar-comprobante"
                id="enviar-comprobante"
            >
                Enviar comprobante por WhatsApp
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
// ENVIAR COMPROBANTE POR WHATSAPP
// =============================

const botonEnviarComprobante =
    document.getElementById("enviar-comprobante");

botonEnviarComprobante?.addEventListener(
    "click",
    () => {

        if (carrito.length === 0) {
            alert("Agregá productos al carrito antes de enviar el comprobante.");
            return;
        }


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

    const textoOriginal =
        botonEnviarComprobante.textContent;

    botonEnviarComprobante.disabled = true;
    botonEnviarComprobante.textContent =
        "Registrando pedido...";

    try {

        const pedido =
            await registrarPedidoWebPendiente(
                "transferencia",
                cliente
            );

        const detallePedido =
            crearMensajePedido(
                pedido.codigo,
                cliente
            )
                .replace(
                    "Hola, quiero realizar el siguiente pedido:\n\n",
                    ""
                )
                .replace(
                    "\n\nQuedo a la espera para coordinar el pago y la entrega.",
                    ""
                );

        const mensaje = encodeURIComponent(
            `Hola, realicé la transferencia para confirmar mi pedido.\n\nDetalle del pedido:\n\n${detallePedido}\n\nAdjunto el comprobante de pago.\n\nQuedo a la espera de la confirmación y para coordinar la entrega.`
        );

        const enlaceWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

        ventanaWhatsApp.location.href =
            enlaceWhatsApp;

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

        botonEnviarComprobante.disabled = false;
        botonEnviarComprobante.textContent =
            textoOriginal;

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
            carrito.some(
                (producto) =>
                    aplicaMayorista(producto)
            );

        if (esMayorista) {
            alert(
                "Mercado Pago está disponible únicamente para compras minoristas."
            );
            actualizarCarrito();
            return;
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
            Así el pedido ya existe en Supabase antes
            de enviar al cliente al checkout.
        */
        const pedido =
            await registrarPedidoWebPendiente(
                "web",
                cliente
            );

        /*
            A Mercado Pago NO le mandamos precios.
            Solo slug + cantidad.
            La Edge Function consulta nuevamente
            precios, stock y condición minorista
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

        const preferencia =
            await crearPreferenciaMercadoPago({
                items,
                pedidoId:
                    pedido.pedidoId,
                codigoPedido:
                    pedido.codigo,
                cliente
            });

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
                    Antes de finalizar
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
                    Continuar con el pedido
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
                Antes de finalizar
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
                    Continuar con el pedido
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
    const regla = obtenerReglaCategoria(producto.categoria);

    if (!regla.tieneMayorista) return false;

    return (
        obtenerCantidadCategoria(producto.categoria) >=
        regla.minimoMayorista
    );
}

function obtenerPrecioUnitario(producto) {
    return aplicaMayorista(producto)
        ? producto.precioMayorista
        : producto.precioMinorista;
}

function obtenerTipoPrecio(producto) {
    const regla = obtenerReglaCategoria(producto.categoria);

    if (!regla.tieneMayorista) return "Precio único";

    return aplicaMayorista(producto)
        ? "Mayorista"
        : "Minorista";
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
        return Array.isArray(datos) ? datos : [];
    } catch (error) {
        console.error(
            "No se pudieron cargar precios y stock desde Supabase:",
            error
        );
        return [];
    }
}

function combinarProductoConSupabase(productoLocal) {
    const slug = obtenerSlug(productoLocal);
    const remoto = productosSupabasePorSlug.get(slug);

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
            activo: productoLocal.activo !== false
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
            remoto.retirado !== true
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

            if (!productoActual) {
                return productoCarrito;
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
                precioMayorista:
                    productoActual.precioMayorista,
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
    const regla = obtenerReglaCategoria(producto.categoria);

    if (!regla.tieneMayorista) {
        return `
            <p class="producto-precio minorista">
                Precio: ${formatearPrecio(producto.precioMinorista)}
            </p>
        `;
    }

    return `
        <p class="producto-precio minorista">
            Minorista: ${formatearPrecio(producto.precioMinorista)}
        </p>

        <p class="producto-precio mayorista">
            Mayorista: ${formatearPrecio(producto.precioMayorista)}
            <span>desde 3 perfumes surtidos</span>
        </p>
    `;
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

    const disenadorActual =
        new URLSearchParams(window.location.search)
            .get("disenador");

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

            const coincideCategoria =
    terminoBusqueda
        ? true
        : !categoriaActual || producto.categoria === categoriaActual;

            const coincideLinea =
                !lineaActual ||
                producto.linea === lineaActual;

            const coincideTipo =
                !tipoActual ||
                producto.tipo === tipoActual;

            const coincideDisenador =
                !disenadorActual ||
                producto.disenador === disenadorActual;

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


            /*
                En el catálogo general de Decants 5 ml
                NO mostramos los decants de inspiraciones.

                Pero en inspiraciones-decants.html,
                donde lineaActual = "inspiraciones",
                SÍ deben aparecer.
            */
            const ocultarDecantInspiracionGeneral =
                categoriaActual === "decants" &&
                !lineaActual &&
                producto.linea === "inspiraciones";


            return (
                coincideMarca &&
                coincideCategoria &&
                coincideLinea &&
                coincideTipo &&
                coincideDisenador &&
                !ocultarDecantInspiracionGeneral &&
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
            Number(productoA.precioMinorista) -
            Number(productoB.precioMinorista)
        );
    }

    if (orden === "precio-mayor") {
        return (
            Number(productoB.precioMinorista) -
            Number(productoA.precioMinorista)
        );
    }

    const esInspiracion =
    lineaActual === "inspiraciones" &&
    ["perfume", "decant"].includes(tipoActual);


if (esInspiracion) {

    const disenadorA =
        productoA.disenador === "armani"
            ? "Giorgio Armani"
            : productoA.disenador === "dior"
                ? "Christian Dior"
                : String(productoA.disenador || "");

    const disenadorB =
        productoB.disenador === "armani"
            ? "Giorgio Armani"
            : productoB.disenador === "dior"
                ? "Christian Dior"
                : String(productoB.disenador || "");


    const ordenDisenador =
        disenadorA.localeCompare(
            disenadorB,
            "es",
            {
                sensitivity: "base"
            }
        );


    if (ordenDisenador !== 0) {
        return ordenDisenador;
    }
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


const esPaginaInspiraciones =
    lineaActual === "inspiraciones" &&
    ["perfume", "decant"].includes(tipoActual);


const nombresDisenadores = {
    "armani": "Giorgio Armani",
    "azzaro": "Azzaro",
    "bvlgari": "Bvlgari",
    "cacharel": "Cacharel",
    "carolina-herrera": "Carolina Herrera",
    "chanel": "Chanel",
    "creed": "Creed",
    "dior": "Christian Dior",
    "dolce-gabbana": "Dolce & Gabbana",
    "francis-kurkdjian": "Francis Kurkdjian",
    "jean-paul-gaultier": "Jean Paul Gaultier",
    "kenzo": "Kenzo",
    "lancome": "Lancôme",
    "louis-vuitton": "Louis Vuitton",
    "moschino": "Moschino",
    "nina-ricci": "Nina Ricci",
    "paco-rabanne": "Paco Rabanne",
    "ralph-lauren": "Ralph Lauren",
    "thierry-mugler": "Thierry Mugler",
    "tom-ford": "Tom Ford",
    "valentino": "Valentino",
    "versace": "Versace",
    "viktor-rolf": "Viktor & Rolf",
    "xerjoff": "Xerjoff",
    "yves-saint-laurent": "Yves Saint Laurent"
};


const productosPorMarca = {};


productosDeLaMarca.forEach((producto) => {

    const grupo = esPaginaInspiraciones
        ? nombresDisenadores[producto.disenador] || "Otros"
        : producto.marca;

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


    const nombreDisenador =
        nombresDisenadores[producto.disenador] ||
        producto.disenador ||
        "";


    const esProductoArabe =
    !esPaginaInspiraciones &&
    ["perfumes-grandes", "decants", "maison-30ml"]
        .includes(producto.categoria);


    const textoSuperior =
        esPaginaInspiraciones
            ? nombreDisenador
            : esProductoArabe
                ? producto.marca
                : "";


    const etiquetaSuperior =
    textoSuperior
        ? `
            <p class="producto-disenador">
                ${escaparHTML(textoSuperior)}
            </p>
        `
        : "";



const esMobile = window.matchMedia("(max-width: 768px)").matches;

const nombreVisible =
    producto.linea === "inspiraciones" && textoSuperior
        ? `${textoSuperior} ${producto.nombre}`
        : producto.nombre;

return `
    <div
        class="producto-card"
        data-slug="${escaparHTML(producto.slug)}"
    >


        ${etiquetaSuperior}


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
            href="producto.html?slug=${encodeURIComponent(producto.id)}"
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
        `${producto.nombre} | Vo Import`;

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

    const precioMinorista = document.querySelector(
        ".detalle-precio.minorista"
    );

    const precioMayorista = document.querySelector(
        ".detalle-precio.mayorista"
    );

    const condicionMayorista = document.querySelector(
        ".condicion-mayorista"
    );

    const regla = obtenerReglaCategoria(producto.categoria);

    if (precioMinorista) {
        precioMinorista.textContent = regla.tieneMayorista
            ? `Minorista: ${formatearPrecio(producto.precioMinorista)}`
            : `Precio: ${formatearPrecio(producto.precioMinorista)}`;
    }

    if (precioMayorista) {
        if (regla.tieneMayorista) {
            precioMayorista.textContent =
                `Mayorista: ${formatearPrecio(producto.precioMayorista)}`;
            precioMayorista.hidden = false;
            precioMayorista.style.display = "";
        } else {
            precioMayorista.hidden = true;
            precioMayorista.style.display = "none";
        }
    }

    if (condicionMayorista) {
        condicionMayorista.style.display =
            regla.tieneMayorista ? "" : "none";
    }

    let stockDetalle = document.querySelector(
        ".stock-producto-detalle"
    );

    if (!stockDetalle) {
        stockDetalle = document.createElement("p");
        stockDetalle.className = "stock-producto-detalle";

        const referencia = document.querySelector(
            ".condicion-mayorista"
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

function crearMensajeMayorista() {
    if (carrito.length === 0) {
        return "Los mínimos mayoristas se calculan por categoría.";
    }

    const categoriasPresentes = [
        ...new Set(
            carrito.map((producto) => producto.categoria)
        )
    ];

    return categoriasPresentes
        .map((categoria) => {
            const regla = obtenerReglaCategoria(categoria);

            if (!regla.tieneMayorista) {
                return `${regla.nombre}: precio único.`;
            }

            const cantidad =
                obtenerCantidadCategoria(categoria);

            if (cantidad >= regla.minimoMayorista) {
                return `${regla.nombre}: ¡precio mayorista aplicado!`;
            }

            const faltan = regla.minimoMayorista - cantidad;

            return `${regla.nombre}: faltan ${faltan} ${
                faltan === 1 ? "unidad" : "unidades"
            } para mayorista.`;
        })
        .join(" • ");
}


// =============================
// MOSTRAR EL CARRITO
// =============================

function actualizarCarrito() {
    const cantidadTotal = obtenerCantidadTotal();

    const bloquePagoTransferencia =
        document.getElementById("carrito-pago-transferencia");

    /*
        Si el bloque de pago estaba dentro de la zona de productos,
        lo sacamos momentáneamente antes de volver a dibujar el carrito.
    */
    if (
        bloquePagoTransferencia &&
        bloquePagoTransferencia.parentElement === carritoProductos
    ) {
        bloquePagoTransferencia.remove();
    }


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
                        obtenerPrecioUnitario(producto);

                    const tipoPrecio =
                        obtenerTipoPrecio(producto);

                    const regla =
                        obtenerReglaCategoria(
                            producto.categoria
                        );

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

                                <small>
                                    ${escaparHTML(regla.nombre)}
                                </small>

                                <p>
                                    ${formatearPrecio(precioUnitario)}
                                    c/u · ${tipoPrecio}
                                </p>

                                <small class="carrito-stock">
                                    ${textoStock}
                                </small>

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
                    `;
                })
                .join("");
        }


        /*
            Con productos:
            el pago queda debajo de los productos y hace scroll con ellos.

            Sin productos:
            vuelve al resumen pero queda oculto.
        */
        if (bloquePagoTransferencia) {

            if (carrito.length > 0) {

                bloquePagoTransferencia.hidden = false;

                carritoProductos.appendChild(
                    bloquePagoTransferencia
                );

            } else {

                bloquePagoTransferencia.hidden = true;

                resumenCarritoPago?.prepend(
                    bloquePagoTransferencia
                );
            }
        }
    }


    if (mensajeMayorista) {
        mensajeMayorista.textContent =
            crearMensajeMayorista();
    }


    const total = carrito.reduce(
        (acumulado, producto) =>
            acumulado +
            obtenerPrecioUnitario(producto) *
            producto.cantidad,
        0
    );


    if (carritoTotal) {

    carritoTotal.textContent =

        formatearPrecio(total);

}


// =============================
// MERCADO PAGO SOLO MINORISTA
// =============================

const botonMercadoPago =
    document.getElementById(
        "pagar-mercado-pago"
    );

const mensajeMercadoPago =
    document.getElementById(
        "mensaje-mercado-pago"
    );

const carritoEsMayorista =
    carrito.some(
        (producto) =>
            aplicaMayorista(producto)
    );


if (botonMercadoPago) {

    botonMercadoPago.hidden =
        carrito.length === 0 ||
        carritoEsMayorista;

}


if (mensajeMercadoPago) {

    if (
        carrito.length > 0 &&
        carritoEsMayorista
    ) {

        mensajeMercadoPago.textContent =
            "Mercado Pago está disponible únicamente para compras minoristas.";

        mensajeMercadoPago.hidden =
            false;

    } else {

        mensajeMercadoPago.textContent =
            "";

        mensajeMercadoPago.hidden =
            true;

    }

}

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
        productoExistente.precioMayorista =
            precioMayorista;
        productoExistente.stock = stock;
    } else {
        carrito.push({
            slug: productoActual?.slug || slug,
            nombre,
            categoria,
            precioMinorista,
            precioMayorista,
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

const PEDIDO_WEB_REUTILIZAR_MS =
    30 * 60 * 1000;

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

        const antiguedad =
            Date.now() -
            Number(guardado.creadoEn || 0);

        if (
            !Number.isFinite(antiguedad) ||
            antiguedad < 0 ||
            antiguedad > PEDIDO_WEB_REUTILIZAR_MS
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
        return pedidoTemporal;
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

    const nombresDisenadoresPedido = {
        "armani": "Giorgio Armani",
        "azzaro": "Azzaro",
        "bvlgari": "Bvlgari",
        "cacharel": "Cacharel",
        "carolina-herrera": "Carolina Herrera",
        "chanel": "Chanel",
        "creed": "Creed",
        "dior": "Christian Dior",
        "dolce-gabbana": "Dolce & Gabbana",
        "francis-kurkdjian": "Francis Kurkdjian",
        "jean-paul-gaultier": "Jean Paul Gaultier",
        "kenzo": "Kenzo",
        "lancome": "Lancôme",
        "louis-vuitton": "Louis Vuitton",
        "moschino": "Moschino",
        "nina-ricci": "Nina Ricci",
        "paco-rabanne": "Paco Rabanne",
        "ralph-lauren": "Ralph Lauren",
        "thierry-mugler": "Thierry Mugler",
        "tom-ford": "Tom Ford",
        "valentino": "Valentino",
        "versace": "Versace",
        "viktor-rolf": "Viktor & Rolf",
        "xerjoff": "Xerjoff",
        "yves-saint-laurent": "Yves Saint Laurent"
    };

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

        const productoActual =
            buscarProductoActual({
                slug: producto.slug,
                nombre: producto.nombre
            });

        const disenador =
            productoActual?.disenador || "";

        const nombreDisenador =
            nombresDisenadoresPedido[disenador] ||
            disenador ||
            "";

        const esInspiracion =
            producto.categoria === "inspiraciones-disenador" ||
            (
                producto.categoria === "decants" &&
                productoActual?.linea === "inspiraciones"
            );

        let nombreCompleto =
            producto.nombre;

        if (esInspiracion && nombreDisenador) {
            const nombreProductoNormalizado =
                producto.nombre
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "");

            const disenadorNormalizado =
                nombreDisenador
                    .toLowerCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "");

            if (
                !nombreProductoNormalizado.startsWith(
                    disenadorNormalizado
                )
            ) {
                nombreCompleto =
                    `${nombreDisenador} ${producto.nombre}`;
            }
        }

        let categoriaTexto = "";

        if (producto.categoria === "perfumes-grandes") {
            categoriaTexto = "Perfume árabe";
        }

        if (producto.categoria === "maison-30ml") {
            categoriaTexto = "Maison Alhambra 30 ml";
        }

        if (producto.categoria === "inspiraciones-disenador") {
            categoriaTexto = "Inspiración 60 ml";
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


botonFinalizarPedido?.addEventListener(
    "click",
    () => {

        if (carrito.length === 0) {
            alert("Tu carrito está vacío.");
            return;
        }


        abrirModalClienteWeb(
            procesarFinalizacionPedidoWeb
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

    const textoOriginal =
        botonFinalizarPedido.textContent;

    botonFinalizarPedido.disabled = true;
    botonFinalizarPedido.textContent =
        "Registrando pedido...";

    try {

        const pedido =
            await registrarPedidoWebPendiente(
                "web",
                cliente
            );

        const mensaje = encodeURIComponent(
            crearMensajePedido(
                pedido.codigo,
                cliente
            )
        );

        const enlaceWhatsApp =
            `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

        ventanaWhatsApp.location.href =
            enlaceWhatsApp;

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

        botonFinalizarPedido.disabled = false;
        botonFinalizarPedido.textContent =
            textoOriginal;

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

    sincronizarCarritoConCatalogo();
    generarCatalogo();
    actualizarFichaIndividual();
    guardarCarrito();
    actualizarCarrito();
}

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

    const esPaginaInspiracionesInicial =
        document.body.dataset.linea ===
        "inspiraciones";


    if (vistaInicial === "decants") {

        document.body.dataset.categoria =
            "decants";


        if (esPaginaInspiracionesInicial) {

            document.body.dataset.tipo =
                "decant";

            const tituloInspiraciones =
                document.getElementById(
                    "titulo-inspiraciones-listado"
                );

            if (tituloInspiraciones) {

                tituloInspiraciones.textContent =
                    "Decants 5 ml inspirados en diseñador";

            }

        }


        cambiarPresentacion.textContent =
            "← Volver a perfumes";

    }


    // =====================================================
    // CAMBIAR ENTRE PERFUMES Y DECANTS
    // =====================================================

    cambiarPresentacion.addEventListener(
        "click",
        () => {

            const esPaginaInspiraciones =
                document.body.dataset.linea ===
                "inspiraciones";

            const viendoDecants =
                document.body.dataset.categoria ===
                "decants";


            if (esPaginaInspiraciones) {

                const tituloInspiraciones =
                    document.getElementById(
                        "titulo-inspiraciones-listado"
                    );


                if (viendoDecants) {

                    document.body.dataset.categoria =
                        "inspiraciones-disenador";

                    document.body.dataset.tipo =
                        "perfume";

                    cambiarPresentacion.textContent =
                        "Ver Decants 5 ml";

                    actualizarUrlPresentacion(
                        false
                    );


                    if (tituloInspiraciones) {

                        tituloInspiraciones.textContent =
                            "Perfumes inspirados en diseñador";

                    }

                } else {

                    document.body.dataset.categoria =
                        "decants";

                    document.body.dataset.tipo =
                        "decant";

                    cambiarPresentacion.textContent =
                        "← Volver a perfumes";

                    actualizarUrlPresentacion(
                        true
                    );


                    if (tituloInspiraciones) {

                        tituloInspiraciones.textContent =
                            "Decants 5 ml inspirados en diseñador";

                    }

                }

            } else {

                if (viendoDecants) {

                    document.body.dataset.categoria =
                        "perfumes-grandes";

                    cambiarPresentacion.textContent =
                        "Ver Decants 5 ml";

                    actualizarUrlPresentacion(
                        false
                    );

                } else {

                    document.body.dataset.categoria =
                        "decants";

                    cambiarPresentacion.textContent =
                        "← Volver a perfumes";

                    actualizarUrlPresentacion(
                        true
                    );

                }

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
        ".producto-detalle-header a, " +
        "#volver-inspiraciones"
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
        <span>◆ MAYORISTA DESDE 3 PERFUMES SURTIDOS ◆</span>
        <span>◆ PERFUMES 100% ORIGINALES ◆</span>
        <span>◆ TIENDA FÍSICA EN VILLA LUZURIAGA ◆</span>
        <span>◆ ENVÍOS A TODO EL PAÍS ◆</span>
        <span>◆ COMPRA MINORISTA Y MAYORISTA ◆</span>
        <span>◆ INSPIRACIONES DE DISEÑADOR ◆</span>
        <span>◆ DECANTS 5 ML PREMIUM ◆</span>
        <span>◆ RETIRO DISPONIBLE ◆</span>
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

        if (
            producto.linea === "inspiraciones" &&
            producto.tipo === "decant"
        ) {
            return "DECANT 5 ML";
        }

        if (
            producto.linea === "inspiraciones" &&
            producto.tipo === "perfume"
        ) {
            return "INSPIRACIÓN 60 ML";
        }

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
                            href="producto.html?slug=${encodeURIComponent(producto.id)}"
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
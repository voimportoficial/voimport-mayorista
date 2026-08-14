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

botonEnviarComprobante?.addEventListener("click", () => {

    if (carrito.length === 0) {
        alert("Agregá productos al carrito antes de enviar el comprobante.");
        return;
    }

    const detallePedido = crearMensajePedido()
        .replace(
            "Hola, quiero realizar el siguiente pedido:\n\n",
            ""
        )
        .replace(
            "\n\nQuedo a la espera para coordinar el pago y la entrega.",
            ""
        );

    const mensaje = encodeURIComponent(
        `Hola, realicé la transferencia para confirmar mi pedido.

Detalle del pedido:

${detallePedido}

Adjunto el comprobante de pago.

Quedo a la espera de la confirmación y para coordinar la entrega.`
    );

    const enlaceWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    window.open(
        enlaceWhatsApp,
        "_blank",
        "noopener,noreferrer"
    );

});


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
        activo: remoto.activo !== false
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

    const producto = buscarProductoActual({
        slug: botonDetalle.dataset.slug || "",
        nombre: botonDetalle.dataset.nombre || ""
    });

    if (!producto) return;

    botonDetalle.dataset.slug = producto.slug;
    botonDetalle.dataset.categoria = producto.categoria;
    botonDetalle.dataset.precioMinorista =
        producto.precioMinorista;
    botonDetalle.dataset.precioMayorista =
        producto.precioMayorista;
    botonDetalle.dataset.imagen = producto.imagen || "";
    botonDetalle.dataset.stock = producto.stock ?? "";

    const precioMinorista = document.querySelector(
        ".detalle-precio.minorista"
    );

    const precioMayorista = document.querySelector(
        ".detalle-precio.mayorista"
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
        } else {
            precioMayorista.hidden = true;
        }
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

    if (inputCantidad && producto.stock !== null) {
        inputCantidad.max = String(
            Math.max(1, producto.stock)
        );
        inputCantidad.disabled = sinStock;
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
// FINALIZAR PEDIDO POR WHATSAPP
// =============================

function crearMensajePedido() {
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


botonFinalizarPedido?.addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    const mensaje = encodeURIComponent(
        crearMensajePedido()
    );

    const enlaceWhatsApp =
        `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    window.open(
        enlaceWhatsApp,
        "_blank",
        "noopener,noreferrer"
    );
});


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

    catalogoActualizado = productosLocales.map(
        combinarProductoConSupabase
    );

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

if (cambiarPresentacion) {

    cambiarPresentacion.addEventListener("click", () => {

        const esPaginaInspiraciones =
            document.body.dataset.linea === "inspiraciones";

        const viendoDecants =
            document.body.dataset.categoria === "decants";


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

            } else {

                document.body.dataset.categoria =
                    "decants";

                cambiarPresentacion.textContent =
                    "← Volver a perfumes";
            }
        }


        generarCatalogo();

    });

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
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
const botonFinalizarPedido = document.getElementById("finalizar-pedido");


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
const marcaActual = document.body.dataset.marca;
const categoriaActual = document.body.dataset.categoria;
const lineaActual = document.body.dataset.linea;
const tipoActual = document.body.dataset.tipo;

const terminoBusqueda =
    document.getElementById("buscador-catalogo")?.value
        .trim()
        .toLowerCase() || "";

const soloDisponibles =
    document.getElementById("solo-disponibles")?.checked || false;

const productosDeLaMarca = catalogoActualizado
    .filter((producto) => {
        const coincideMarca =
            !marcaActual || producto.marca === marcaActual;

        const coincideCategoria =
            !categoriaActual || producto.categoria === categoriaActual;
        const coincideLinea =
    !lineaActual || producto.linea === lineaActual;
        const coincideTipo =
    !tipoActual || producto.tipo === tipoActual;
        const coincideBusqueda =
            !terminoBusqueda ||
            producto.nombre.toLowerCase().includes(terminoBusqueda) ||
            producto.marca.toLowerCase().includes(terminoBusqueda);

        const coincideStock =
    !soloDisponibles ||
    producto.stock === null ||
    Number(producto.stock) > 0;

        return (
    coincideMarca &&
    coincideCategoria &&
    coincideLinea &&
    coincideTipo &&
    !(categoriaActual === "decants" && producto.linea === "inspiraciones") &&
    coincideBusqueda &&
    coincideStock &&
    producto.activo !== false
);
    })
        .sort((productoA, productoB) => {
    const orden =
        document.getElementById("orden-catalogo")?.value || "nombre";

    if (orden === "precio-menor") {
        return Number(productoA.precioMinorista) - Number(productoB.precioMinorista);
    }

    if (orden === "precio-mayor") {
        return Number(productoB.precioMinorista) - Number(productoA.precioMinorista);
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
    if (!productosPorMarca[producto.marca]) {
        productosPorMarca[producto.marca] = [];
    }

    productosPorMarca[producto.marca].push(producto);
});
    const crearTarjetaProducto = (producto) => {
    const agotado = producto.stock === 0;
    const textoBoton = agotado
        ? "Agotado"
        : "Agregar al carrito";

    return `
        <div class="producto-card" data-slug="${escaparHTML(producto.slug)}">

            <img
                src="${escaparHTML(producto.imagen)}"
                alt="${escaparHTML(producto.nombre)}"
            >

            <h3>${escaparHTML(producto.nombre)}</h3>

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

const esCatalogoGeneral =
    !marcaActual &&
    ["perfumes-grandes", "decants"].includes(categoriaActual) &&
    !lineaActual &&
    !tipoActual;

if (esCatalogoGeneral) {

    const marcasOrdenadas = Object.keys(productosPorMarca)
        .sort((marcaA, marcaB) =>
            marcaA.localeCompare(marcaB, "es", {
                sensitivity: "base"
            })
        );

    productosGrid.innerHTML = marcasOrdenadas
    .map((marca) => `
        <section class="catalogo-marca">

            <h2 class="catalogo-marca-titulo">
                ${escaparHTML(marca)}
            </h2>

            <div class="catalogo-marca-grid">
                ${productosPorMarca[marca]
                    .map(crearTarjetaProducto)
                    .join("")}
            </div>

        </section>
    `)
    .join("");

} else {

    productosGrid.innerHTML = productosDeLaMarca
        .map(crearTarjetaProducto)
        .join("");
}
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

                    const regla = obtenerReglaCategoria(
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

                                <h3>${escaparHTML(producto.nombre)}</h3>

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

                                    <span>${producto.cantidad}</span>

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
        carritoTotal.textContent = formatearPrecio(total);
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

    abrirCarrito();
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
// FINALIZAR PEDIDO POR WHATSAPP
// =============================

function crearMensajePedido() {
    const cantidadTotal = obtenerCantidadTotal();

    let mensaje =
        "Hola, quiero realizar el siguiente pedido:\n\n";

    carrito.forEach((producto, indice) => {
        const precioUnitario =
            obtenerPrecioUnitario(producto);

        const tipoPrecio =
            obtenerTipoPrecio(producto);

        const regla = obtenerReglaCategoria(
            producto.categoria
        );

        const subtotal =
            precioUnitario * producto.cantidad;

        mensaje += `${indice + 1}. ${producto.nombre}\n`;
        mensaje += `Categoría: ${regla.nombre}\n`;
        mensaje += `Cantidad: ${producto.cantidad}\n`;
        mensaje += `Precio aplicado: ${tipoPrecio}\n`;
        mensaje += `Precio unitario: ${formatearPrecio(precioUnitario)}\n`;
        mensaje += `Subtotal: ${formatearPrecio(subtotal)}\n\n`;
    });

    const total = carrito.reduce(
        (acumulado, producto) =>
            acumulado +
            obtenerPrecioUnitario(producto) *
            producto.cantidad,
        0
    );

    mensaje += `Cantidad total: ${cantidadTotal} unidades\n`;
    mensaje += `Total del pedido: ${formatearPrecio(total)}\n\n`;
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

        const viendoDecants =
            document.body.dataset.categoria === "decants";

        if (viendoDecants) {

            document.body.dataset.categoria = "perfumes-grandes";

            cambiarPresentacion.textContent =
                "Ver Decants 5 ml";

        } else {

            document.body.dataset.categoria = "decants";

            cambiarPresentacion.textContent =
                "← Volver a perfumes";

        }

        generarCatalogo();

    });

}
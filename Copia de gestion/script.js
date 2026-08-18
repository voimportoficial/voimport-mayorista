// ========================================
// VO IMPORT - SISTEMA DE GESTIÓN
// ========================================


// ========================================
// AUTENTICACIÓN
// ========================================

const pantallaLogin =
    document.getElementById("pantalla-login");

const pantallaNuevaPassword =
    document.getElementById("pantalla-nueva-password");

const aplicacionGestion =
    document.getElementById("aplicacion-gestion");

const formLogin =
    document.getElementById("form-login");

const loginEmail =
    document.getElementById("login-email");

const loginPassword =
    document.getElementById("login-password");

const mensajeLogin =
    document.getElementById("mensaje-login");

const botonRecuperarPassword =
    document.getElementById("recuperar-password");

const formNuevaPassword =
    document.getElementById("form-nueva-password");

const nuevaPassword =
    document.getElementById("nueva-password");

const repetirPassword =
    document.getElementById("repetir-password");

const mensajeNuevaPassword =
    document.getElementById("mensaje-nueva-password");

const botonCerrarSesion =
    document.getElementById("cerrar-sesion");


// ========================================
// RESUMEN
// ========================================

const capitalStock =
    document.getElementById("capital-stock");

const ventasMes =
    document.getElementById("ventas-mes");

const gananciaMes =
    document.getElementById("ganancia-mes");

const disponibleRetirar =
    document.getElementById("disponible-retirar");


// ========================================
// BOTONES PRINCIPALES
// ========================================

const botonRegistrarVenta =
    document.getElementById("registrar-venta");

const botonRegistrarReposicion =
    document.getElementById("registrar-reposicion");

const botonVerStock =
    document.getElementById("ver-stock");

const botonVerMovimientos =
    document.getElementById("ver-movimientos");

const botonVerClientes =
    document.getElementById("ver-clientes");


// ========================================
// VENTA
// ========================================

const seccionVenta =
    document.getElementById("seccion-venta");

const botonCerrarVenta =
    document.getElementById("cerrar-venta");

const ventaCategoria =
    document.getElementById("venta-categoria");

const ventaProducto =
    document.getElementById("venta-producto");

const ventaCantidad =
    document.getElementById("venta-cantidad");

const ventaTipoPrecio =
    document.getElementById("venta-tipo-precio");

const contenedorPrecioPersonalizado =
    document.getElementById(
        "contenedor-precio-personalizado"
    );

const ventaPrecioPersonalizado =
    document.getElementById(
        "venta-precio-personalizado"
    );

const ventaPrecioUnitario =
    document.getElementById(
        "venta-precio-unitario"
    );

const ventaStockDisponible =
    document.getElementById(
        "venta-stock-disponible"
    );

const botonAgregarItemVenta =
    document.getElementById(
        "agregar-item-venta"
    );

const mensajeItemVenta =
    document.getElementById(
        "mensaje-item-venta"
    );

const ventaItemsContenedor =
    document.getElementById(
        "venta-items"
    );

const ventaTotalElemento =
    document.getElementById(
        "venta-total"
    );

const ventaCliente =
    document.getElementById(
        "venta-cliente"
    );

const ventaClienteAyuda =
    document.getElementById(
        "venta-cliente-ayuda"
    );

const ventaEstadoCobro =
    document.getElementById(
        "venta-estado-cobro"
    );

const contenedorPagoInicial =
    document.getElementById(
        "contenedor-pago-inicial"
    );

const ventaPagoInicial =
    document.getElementById(
        "venta-pago-inicial"
    );

const contenedorMetodoPago =
    document.getElementById(
        "contenedor-metodo-pago"
    );

const ventaMetodoPago =
    document.getElementById(
        "venta-metodo-pago"
    );

const ventaTotalPagado =
    document.getElementById(
        "venta-total-pagado"
    );

const ventaSaldoPendiente =
    document.getElementById(
        "venta-saldo-pendiente"
    );

const ventaObservaciones =
    document.getElementById(
        "venta-observaciones"
    );

const botonConfirmarVenta =
    document.getElementById(
        "confirmar-venta"
    );

const mensajeConfirmarVenta =
    document.getElementById(
        "mensaje-confirmar-venta"
    );


// ========================================
// STOCK
// ========================================

const seccionStock =
    document.getElementById("seccion-stock");

const botonCerrarStock =
    document.getElementById("cerrar-stock");

const stockCategorias =
    document.getElementById("stock-categorias");


// ========================================
// MOVIMIENTOS
// ========================================

const seccionMovimientos =
    document.getElementById(
        "seccion-movimientos"
    );

const botonCerrarMovimientos =
    document.getElementById(
        "cerrar-movimientos"
    );

const movimientosLista =
    document.getElementById(
        "movimientos-lista"
    );

const mensajeMovimientos =
    document.getElementById(
        "mensaje-movimientos"
    );


// ========================================
// CLIENTES
// ========================================

const seccionClientes =
    document.getElementById(
        "seccion-clientes"
    );

const botonCerrarClientes =
    document.getElementById(
        "cerrar-clientes"
    );

const formCliente =
    document.getElementById(
        "form-cliente"
    );

const clienteNombre =
    document.getElementById(
        "cliente-nombre"
    );

const clienteTelefono =
    document.getElementById(
        "cliente-telefono"
    );

const clienteNotas =
    document.getElementById(
        "cliente-notas"
    );

const mensajeCliente =
    document.getElementById(
        "mensaje-cliente"
    );

const clientesLista =
    document.getElementById(
        "clientes-lista"
    );

const clientesContador =
    document.getElementById(
        "clientes-contador"
    );

const buscarCliente =
    document.getElementById(
        "buscar-cliente"
    );

const clientesFormTitulo =
    document.getElementById(
        "clientes-form-titulo"
    );

const botonGuardarCliente =
    document.getElementById(
        "guardar-cliente"
    );

const botonCancelarEdicionCliente =
    document.getElementById(
        "cancelar-edicion-cliente"
    );


// ========================================
// ESTADO GENERAL
// ========================================

let gestionIniciada = false;

let modoRecuperacionPassword = false;

let productosGestion = [];

let itemsVentaActual = [];

let movimientosGestion = [];

let clientesGestion = [];

let clienteEditandoId = null;


// ========================================
// FUNCIONES GENERALES
// ========================================

function formatearPrecio(valor) {

    return new Intl.NumberFormat(
        "es-AR",
        {
            style: "currency",
            currency: "ARS",
            maximumFractionDigits: 0
        }
    ).format(
        Number(valor) || 0
    );

}


function escaparHTML(texto) {

    return String(texto ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


function limpiarMensaje(elemento) {

    if (!elemento) {
        return;
    }


    elemento.textContent = "";


    elemento.classList.remove(
        "mensaje-error",
        "mensaje-exito"
    );

}


function mostrarMensaje(
    elemento,
    texto,
    tipo = "error"
) {

    if (!elemento) {
        return;
    }


    elemento.textContent =
        texto;


    elemento.classList.remove(
        "mensaje-error",
        "mensaje-exito"
    );


    elemento.classList.add(
        tipo === "exito"
            ? "mensaje-exito"
            : "mensaje-error"
    );

}


function formatearFechaHora(valor) {

    if (!valor) {
        return "";
    }


    return new Intl.DateTimeFormat(
        "es-AR",
        {
            dateStyle: "short",
            timeStyle: "short"
        }
    ).format(
        new Date(valor)
    );

}


// ========================================
// MOSTRAR PANTALLAS AUTH
// ========================================

function mostrarLogin() {

    modoRecuperacionPassword = false;


    pantallaLogin?.classList.remove(
        "oculto"
    );


    pantallaNuevaPassword?.classList.add(
        "oculto"
    );


    aplicacionGestion?.classList.add(
        "oculto"
    );

}


function mostrarNuevaPassword() {

    modoRecuperacionPassword = true;


    pantallaLogin?.classList.add(
        "oculto"
    );


    aplicacionGestion?.classList.add(
        "oculto"
    );


    pantallaNuevaPassword?.classList.remove(
        "oculto"
    );

}


async function mostrarAplicacion() {

    modoRecuperacionPassword = false;


    pantallaLogin?.classList.add(
        "oculto"
    );


    pantallaNuevaPassword?.classList.add(
        "oculto"
    );


    aplicacionGestion?.classList.remove(
        "oculto"
    );


    await iniciarGestion();

}


// ========================================
// LOGIN
// ========================================

formLogin?.addEventListener(
    "submit",
    async (evento) => {

        evento.preventDefault();


        limpiarMensaje(
            mensajeLogin
        );


        const email =
            loginEmail?.value.trim() || "";


        const password =
            loginPassword?.value || "";


        if (!email || !password) {

            mostrarMensaje(
                mensajeLogin,
                "Completá el email y la contraseña."
            );

            return;

        }


        const {
            data,
            error
        } =
            await supabaseClient.auth
                .signInWithPassword({
                    email,
                    password
                });


        if (
            error ||
            !data?.session
        ) {

            mostrarMensaje(
                mensajeLogin,
                "Email o contraseña incorrectos."
            );

            return;

        }


        loginPassword.value =
            "";


        await mostrarAplicacion();

    }
);


// ========================================
// RECUPERAR CONTRASEÑA
// ========================================

botonRecuperarPassword?.addEventListener(
    "click",
    async () => {

        limpiarMensaje(
            mensajeLogin
        );


        const email =
            loginEmail?.value.trim() || "";


        if (!email) {

            mostrarMensaje(
                mensajeLogin,
                "Primero escribí tu email."
            );

            return;

        }


        const redirectTo =
            `${window.location.origin}${window.location.pathname}`;


        const {
            error
        } =
            await supabaseClient.auth
                .resetPasswordForEmail(
                    email,
                    {
                        redirectTo
                    }
                );


        if (error) {

            mostrarMensaje(
                mensajeLogin,
                "No se pudo enviar el correo."
            );

            return;

        }


        mostrarMensaje(
            mensajeLogin,
            "Te enviamos un correo para crear o cambiar tu contraseña.",
            "exito"
        );

    }
);


// ========================================
// NUEVA CONTRASEÑA
// ========================================

formNuevaPassword?.addEventListener(
    "submit",
    async (evento) => {

        evento.preventDefault();


        const password1 =
            nuevaPassword?.value || "";


        const password2 =
            repetirPassword?.value || "";


        if (password1.length < 8) {

            mostrarMensaje(
                mensajeNuevaPassword,
                "La contraseña debe tener al menos 8 caracteres."
            );

            return;

        }


        if (
            password1 !==
            password2
        ) {

            mostrarMensaje(
                mensajeNuevaPassword,
                "Las contraseñas no coinciden."
            );

            return;

        }


        const {
            error
        } =
            await supabaseClient.auth
                .updateUser({
                    password: password1
                });


        if (error) {

            mostrarMensaje(
                mensajeNuevaPassword,
                "No se pudo guardar la contraseña."
            );

            return;

        }


        await supabaseClient.auth
            .signOut();


        mostrarLogin();

    }
);


// ========================================
// CERRAR SESIÓN
// ========================================

botonCerrarSesion?.addEventListener(
    "click",
    async () => {

        await supabaseClient.auth
            .signOut();


        gestionIniciada = false;

        productosGestion = [];

        itemsVentaActual = [];

        movimientosGestion = [];

        clientesGestion = [];

        clienteEditandoId = null;


        mostrarLogin();

    }
);


// ========================================
// CATEGORÍAS
// ========================================

const CATEGORIAS_STOCK = [

    {
        clave:
            "perfumes-grandes",

        nombre:
            "Perfumes árabes",

        minimoMayorista:
            3,

        tieneMayorista:
            true,

        coincide:
            (producto) =>
                producto.categoria_mostrar ===
                "perfumes-grandes"
    },

    {
        clave:
            "maison-30ml",

        nombre:
            "Maison Alhambra 30 ml",

        minimoMayorista:
            3,

        tieneMayorista:
            true,

        coincide:
            (producto) =>
                producto.categoria_mostrar ===
                "maison-30ml"
    },

    {
        clave:
            "inspiraciones-disenador",

        nombre:
            "Inspiraciones de diseñador 60 ml",

        minimoMayorista:
            3,

        tieneMayorista:
            true,

        coincide:
            (producto) =>
                producto.categoria_mostrar ===
                "inspiraciones-disenador"
    },

    {
        clave:
            "decants-arabes",

        nombre:
            "Decants árabes",

        minimoMayorista:
            0,

        tieneMayorista:
            false,

        coincide:
            (producto) =>
                producto.categoria_mostrar ===
                "decants" &&
                producto.linea_mostrar !==
                "inspiraciones"
    },

    {
        clave:
            "decants-disenador",

        nombre:
            "Decants de diseñador",

        minimoMayorista:
            0,

        tieneMayorista:
            false,

        coincide:
            (producto) =>
                producto.categoria_mostrar ===
                "decants" &&
                producto.linea_mostrar ===
                "inspiraciones"
    }

];


// ========================================
// PRODUCTOS LOCALES
// ========================================

const productosLocalesPorId =
    new Map();


if (
    typeof productos !== "undefined" &&
    Array.isArray(productos)
) {

    productos.forEach(
        (producto) => {

            if (!producto?.id) {
                return;
            }


            productosLocalesPorId.set(
                producto.id,
                producto
            );

        }
    );

}


// ========================================
// CARGAR PRODUCTOS
// ========================================

async function cargarProductosGestion() {

    const {
        data,
        error
    } =
        await supabaseClient
            .from("productos")
            .select("*");


    if (error) {

        console.error(
            "Error al cargar productos:",
            error
        );


        productosGestion =
            [];


        return [];

    }


    productosGestion =
        (
            Array.isArray(data)
                ? data
                : []
        )
            .map(
                (productoSupabase) => {

                    const productoLocal =
                        productosLocalesPorId.get(
                            productoSupabase.slug
                        );


                    return {

                        ...productoSupabase,

                        nombre_mostrar:
                            productoLocal?.nombre ||
                            "Producto sin vincular",

                        marca_mostrar:
                            productoLocal?.marca ||
                            "",

                        categoria_mostrar:
                            productoLocal?.categoria ||
                            "sin-categoria",

                        linea_mostrar:
                            productoLocal?.linea ||
                            ""

                    };

                }
            );


    return productosGestion;

}


// ========================================
// RESUMEN GENERAL
// ========================================

function actualizarResumenGeneral() {

    capitalStock.textContent =
        formatearPrecio(0);


    ventasMes.textContent =
        formatearPrecio(0);


    gananciaMes.textContent =
        formatearPrecio(0);


    disponibleRetirar.textContent =
        formatearPrecio(0);

}


// ========================================
// FUNCIONES CATEGORÍA
// ========================================

function obtenerCategoriaPorClave(
    clave
) {

    return CATEGORIAS_STOCK.find(
        (categoria) =>
            categoria.clave === clave
    ) || null;

}


function obtenerCategoriaProducto(
    producto
) {

    return CATEGORIAS_STOCK.find(
        (categoria) =>
            categoria.coincide(producto)
    ) || null;

}


function obtenerCantidadCategoriaVenta(
    claveCategoria
) {

    return itemsVentaActual
        .filter(
            (item) =>
                item.categoria_clave ===
                claveCategoria
        )
        .reduce(
            (total, item) =>
                total + item.cantidad,
            0
        );

}


// ========================================
// PRECIO AUTOMÁTICO
// ========================================

function obtenerPrecioAutomaticoProducto(
    producto,
    cantidadExtra = 0
) {

    const categoria =
        obtenerCategoriaProducto(
            producto
        );


    if (!categoria) {

        return Number(
            producto.precio_minorista
        ) || 0;

    }


    if (!categoria.tieneMayorista) {

        return Number(
            producto.precio_minorista
        ) || 0;

    }


    const cantidadActual =
        obtenerCantidadCategoriaVenta(
            categoria.clave
        );


    const cantidadFinal =
        cantidadActual +
        cantidadExtra;


    if (
        cantidadFinal >=
        categoria.minimoMayorista
    ) {

        return Number(
            producto.precio_mayorista
        ) || 0;

    }


    return Number(
        producto.precio_minorista
    ) || 0;

}


// ========================================
// RECALCULAR PRECIOS
// ========================================

function recalcularPreciosAutomaticos() {

    CATEGORIAS_STOCK.forEach(
        (categoria) => {

            if (
                !categoria.tieneMayorista
            ) {
                return;
            }


            const cantidadCategoria =
                obtenerCantidadCategoriaVenta(
                    categoria.clave
                );


            const usaMayorista =
                cantidadCategoria >=
                categoria.minimoMayorista;


            itemsVentaActual.forEach(
                (item) => {

                    if (
                        item.categoria_clave !==
                        categoria.clave
                    ) {
                        return;
                    }


                    if (
                        item.tipo_precio ===
                        "personalizado"
                    ) {
                        return;
                    }


                    const producto =
                        productosGestion.find(
                            (producto) =>
                                Number(producto.id) ===
                                Number(item.producto_id)
                        );


                    if (!producto) {
                        return;
                    }


                    item.precio_unitario =
                        usaMayorista
                            ? Number(
                                producto.precio_mayorista
                            ) || 0
                            : Number(
                                producto.precio_minorista
                            ) || 0;


                    item.precio_aplicado =
                        usaMayorista
                            ? "Mayorista"
                            : "Minorista";

                }
            );

        }
    );


    itemsVentaActual.forEach(
        (item) => {

            const categoria =
                obtenerCategoriaPorClave(
                    item.categoria_clave
                );


            if (
                categoria?.tieneMayorista ===
                false &&
                item.tipo_precio !==
                "personalizado"
            ) {

                const producto =
                    productosGestion.find(
                        (producto) =>
                            Number(producto.id) ===
                            Number(item.producto_id)
                    );


                if (!producto) {
                    return;
                }


                item.precio_unitario =
                    Number(
                        producto.precio_minorista
                    ) || 0;


                item.precio_aplicado =
                    "Precio único";

            }

        }
    );

}


// ========================================
// TOTAL DE VENTA
// ========================================

function obtenerTotalVentaActual() {

    return itemsVentaActual.reduce(
        (total, item) =>
            total +
            (
                Number(item.cantidad) *
                Number(item.precio_unitario)
            ),
        0
    );

}


// ========================================
// PRODUCTO SELECCIONADO
// ========================================

function obtenerProductoVentaSeleccionado() {

    const id =
        Number(
            ventaProducto?.value
        );


    if (!Number.isFinite(id)) {
        return null;
    }


    return productosGestion.find(
        (producto) =>
            Number(producto.id) === id
    ) || null;

}


function obtenerCantidadPendienteProducto(
    productoId
) {

    return itemsVentaActual
        .filter(
            (item) =>
                Number(item.producto_id) ===
                Number(productoId)
        )
        .reduce(
            (total, item) =>
                total + item.cantidad,
            0
        );

}


// ========================================
// PRODUCTOS POR CATEGORÍA
// ========================================

function cargarProductosCategoriaVenta() {

    limpiarMensaje(
        mensajeItemVenta
    );


    const categoria =
        obtenerCategoriaPorClave(
            ventaCategoria?.value || ""
        );


    if (!categoria) {

        ventaProducto.innerHTML = `
            <option value="">
                Primero elegí una categoría
            </option>
        `;


        ventaProducto.disabled =
            true;


        ventaStockDisponible.textContent =
            "";


        actualizarPrecioVentaPreview();

        return;

    }


    const productosCategoria =
        productosGestion
            .filter(
                (producto) =>
                    categoria.coincide(producto) &&
                    producto.activo !== false
            )
            .sort(
                (a, b) =>
                    a.nombre_mostrar.localeCompare(
                        b.nombre_mostrar,
                        "es",
                        {
                            numeric: true,
                            sensitivity: "base"
                        }
                    )
            );


    ventaProducto.innerHTML = `
        <option value="">
            Seleccionar producto
        </option>

        ${
            productosCategoria
                .map(
                    (producto) => `
                        <option value="${producto.id}">
                            ${escaparHTML(producto.nombre_mostrar)}
                            ${
                                producto.marca_mostrar
                                    ? ` - ${escaparHTML(producto.marca_mostrar)}`
                                    : ""
                            }
                        </option>
                    `
                )
                .join("")
        }
    `;


    ventaProducto.disabled =
        false;


    ventaStockDisponible.textContent =
        "";


    actualizarPrecioVentaPreview();

}


// ========================================
// STOCK DISPONIBLE
// ========================================

function actualizarDatosProductoVenta() {

    const producto =
        obtenerProductoVentaSeleccionado();


    if (!producto) {

        ventaStockDisponible.textContent =
            "";


        actualizarPrecioVentaPreview();

        return;

    }


    const pendiente =
        obtenerCantidadPendienteProducto(
            producto.id
        );


    const disponible =
        Math.max(
            0,
            Number(producto.stock || 0) -
            pendiente
        );


    ventaStockDisponible.textContent =
        `Stock disponible: ${disponible}`;


    actualizarPrecioVentaPreview();

}


// ========================================
// PREVIEW DEL PRECIO
// ========================================

function obtenerPrecioVentaActual() {

    const producto =
        obtenerProductoVentaSeleccionado();


    if (!producto) {
        return 0;
    }


    if (
        ventaTipoPrecio?.value ===
        "personalizado"
    ) {

        return Number(
            ventaPrecioPersonalizado?.value
        ) || 0;

    }


    const cantidad =
        Number(
            ventaCantidad?.value
        ) || 0;


    return obtenerPrecioAutomaticoProducto(
        producto,
        cantidad
    );

}


function actualizarPrecioVentaPreview() {

    if (
        ventaTipoPrecio?.value ===
        "personalizado"
    ) {

        contenedorPrecioPersonalizado
            ?.classList.remove(
                "oculto"
            );

    } else {

        contenedorPrecioPersonalizado
            ?.classList.add(
                "oculto"
            );

    }


    ventaPrecioUnitario.textContent =
        formatearPrecio(
            obtenerPrecioVentaActual()
        );

}


// ========================================
// RESUMEN DEL COBRO
// ========================================

function actualizarResumenCobro() {

    const total =
        obtenerTotalVentaActual();


    const estado =
        ventaEstadoCobro?.value ||
        "cobrado";


    let pagado = 0;


    if (
        estado ===
        "cobrado"
    ) {

        pagado =
            total;

    } else if (
        estado ===
        "parcial"
    ) {

        pagado =
            Number(
                ventaPagoInicial?.value
            ) || 0;

    } else {

        pagado =
            0;

    }


    const saldo =
        Math.max(
            0,
            total - pagado
        );


    ventaTotalPagado.textContent =
        formatearPrecio(
            pagado
        );


    ventaSaldoPendiente.textContent =
        formatearPrecio(
            saldo
        );

}


// ========================================
// ESTADO DEL COBRO
// ========================================

function actualizarEstadoCobroUI() {

    const estado =
        ventaEstadoCobro?.value ||
        "cobrado";


    if (
        estado ===
        "cobrado"
    ) {

        contenedorPagoInicial
            ?.classList.add(
                "oculto"
            );


        contenedorMetodoPago
            ?.classList.remove(
                "oculto"
            );


        ventaPagoInicial.value =
            "";


        ventaClienteAyuda.textContent =
            "Opcional si la venta queda totalmente cobrada.";

    }


    if (
        estado ===
        "parcial"
    ) {

        contenedorPagoInicial
            ?.classList.remove(
                "oculto"
            );


        contenedorMetodoPago
            ?.classList.remove(
                "oculto"
            );


        ventaClienteAyuda.textContent =
            "Obligatorio para ventas con saldo pendiente.";

    }


    if (
        estado ===
        "no-cobrado"
    ) {

        contenedorPagoInicial
            ?.classList.add(
                "oculto"
            );


        contenedorMetodoPago
            ?.classList.add(
                "oculto"
            );


        ventaPagoInicial.value =
            "";


        ventaMetodoPago.value =
            "";


        ventaClienteAyuda.textContent =
            "Obligatorio para saber quién tiene el saldo pendiente.";

    }


    actualizarResumenCobro();

}


// ========================================
// EVENTOS DEL FORMULARIO DE PRODUCTO
// ========================================

ventaCategoria?.addEventListener(
    "change",
    cargarProductosCategoriaVenta
);


ventaProducto?.addEventListener(
    "change",
    actualizarDatosProductoVenta
);


ventaCantidad?.addEventListener(
    "input",
    actualizarPrecioVentaPreview
);


ventaTipoPrecio?.addEventListener(
    "change",
    actualizarPrecioVentaPreview
);


ventaPrecioPersonalizado?.addEventListener(
    "input",
    actualizarPrecioVentaPreview
);


ventaEstadoCobro?.addEventListener(
    "change",
    actualizarEstadoCobroUI
);


ventaPagoInicial?.addEventListener(
    "input",
    actualizarResumenCobro
);


// ========================================
// RENDERIZAR ITEMS
// ========================================

function renderizarItemsVenta() {

    recalcularPreciosAutomaticos();


    if (
        itemsVentaActual.length === 0
    ) {

        ventaItemsContenedor.innerHTML = `
            <p class="venta-vacia">
                Todavía no agregaste productos.
            </p>
        `;


        ventaTotalElemento.textContent =
            formatearPrecio(0);


        actualizarResumenCobro();

        return;

    }


    ventaItemsContenedor.innerHTML =
        itemsVentaActual
            .map(
                (item, indice) => {

                    const subtotal =
                        item.cantidad *
                        item.precio_unitario;


                    return `
                        <div class="venta-item">

                            <div class="venta-item-info">

                                <strong>
                                    ${escaparHTML(item.nombre)}
                                </strong>

                                <span>
                                    ${item.cantidad}
                                    ×
                                    ${formatearPrecio(item.precio_unitario)}
                                    ·
                                    ${escaparHTML(item.precio_aplicado)}
                                </span>

                            </div>


                            <div class="venta-item-derecha">

                                <strong>
                                    ${formatearPrecio(subtotal)}
                                </strong>

                                <button
                                    type="button"
                                    class="eliminar-item-venta"
                                    data-indice="${indice}"
                                >
                                    Eliminar
                                </button>

                            </div>

                        </div>
                    `;

                }
            )
            .join("");


    ventaTotalElemento.textContent =
        formatearPrecio(
            obtenerTotalVentaActual()
        );


    actualizarResumenCobro();


    document
        .querySelectorAll(
            ".eliminar-item-venta"
        )
        .forEach(
            (boton) => {

                boton.addEventListener(
                    "click",
                    () => {

                        const indice =
                            Number(
                                boton.dataset.indice
                            );


                        itemsVentaActual.splice(
                            indice,
                            1
                        );


                        renderizarItemsVenta();

                        actualizarDatosProductoVenta();

                    }
                );

            }
        );

}


// ========================================
// AGREGAR PRODUCTO
// ========================================

botonAgregarItemVenta?.addEventListener(
    "click",
    () => {

        limpiarMensaje(
            mensajeItemVenta
        );


        const producto =
            obtenerProductoVentaSeleccionado();


        if (!producto) {

            mostrarMensaje(
                mensajeItemVenta,
                "Elegí un producto."
            );

            return;

        }


        const cantidad =
            Number(
                ventaCantidad?.value
            );


        if (
            !Number.isInteger(cantidad) ||
            cantidad <= 0
        ) {

            mostrarMensaje(
                mensajeItemVenta,
                "Ingresá una cantidad válida."
            );

            return;

        }


        if (
            producto.stock === null ||
            producto.stock === undefined
        ) {

            mostrarMensaje(
                mensajeItemVenta,
                "Este producto no tiene stock cargado."
            );

            return;

        }


        const cantidadPendiente =
            obtenerCantidadPendienteProducto(
                producto.id
            );


        const disponible =
            Number(producto.stock) -
            cantidadPendiente;


        if (
            cantidad >
            disponible
        ) {

            mostrarMensaje(
                mensajeItemVenta,
                `Stock insuficiente. Disponible: ${Math.max(0, disponible)}.`
            );

            return;

        }


        const categoria =
            obtenerCategoriaProducto(
                producto
            );


        if (!categoria) {

            mostrarMensaje(
                mensajeItemVenta,
                "No se pudo identificar la categoría del producto."
            );

            return;

        }


        const esPersonalizado =
            ventaTipoPrecio?.value ===
            "personalizado";


        let precio = 0;


        if (esPersonalizado) {

            precio =
                Number(
                    ventaPrecioPersonalizado?.value
                );


            if (
                !Number.isFinite(precio) ||
                precio < 0 ||
                ventaPrecioPersonalizado?.value ===
                ""
            ) {

                mostrarMensaje(
                    mensajeItemVenta,
                    "Ingresá un precio personalizado válido."
                );

                return;

            }

        } else {

            precio =
                obtenerPrecioAutomaticoProducto(
                    producto,
                    cantidad
                );

        }


        itemsVentaActual.push({

            producto_id:
                Number(producto.id),

            slug:
                producto.slug,

            nombre:
                producto.nombre_mostrar,

            cantidad,

            categoria_clave:
                categoria.clave,

            tipo_precio:
                esPersonalizado
                    ? "personalizado"
                    : "automatico",

            precio_unitario:
                precio,

            precio_aplicado:
                esPersonalizado
                    ? "Personalizado"
                    : "Automático"

        });


        renderizarItemsVenta();

        actualizarDatosProductoVenta();


        ventaCantidad.value =
            "1";


        ventaTipoPrecio.value =
            "automatico";


        ventaPrecioPersonalizado.value =
            "";


        actualizarPrecioVentaPreview();


        mostrarMensaje(
            mensajeItemVenta,
            "Producto agregado.",
            "exito"
        );

    }
);


// ========================================
// CLIENTES PARA SELECT DE VENTA
// ========================================

function cargarSelectClientesVenta() {

    if (!ventaCliente) {
        return;
    }


    const seleccionadoAnterior =
        ventaCliente.value;


    const clientesActivos =
        clientesGestion
            .filter(
                (cliente) =>
                    cliente.activo !== false
            )
            .sort(
                (a, b) =>
                    a.nombre.localeCompare(
                        b.nombre,
                        "es",
                        {
                            sensitivity: "base"
                        }
                    )
            );


    ventaCliente.innerHTML = `
        <option value="">
            Sin cliente
        </option>

        ${
            clientesActivos
                .map(
                    (cliente) => `
                        <option value="${cliente.id}">
                            ${escaparHTML(cliente.nombre)}
                        </option>
                    `
                )
                .join("")
        }
    `;


    const sigueExistiendo =
        clientesActivos.some(
            (cliente) =>
                String(cliente.id) ===
                String(seleccionadoAnterior)
        );


    if (sigueExistiendo) {

        ventaCliente.value =
            seleccionadoAnterior;

    }

}


// ========================================
// CONFIRMAR VENTA
// ========================================

botonConfirmarVenta?.addEventListener(
    "click",
    async () => {

        limpiarMensaje(
            mensajeConfirmarVenta
        );


        if (
            itemsVentaActual.length ===
            0
        ) {

            mostrarMensaje(
                mensajeConfirmarVenta,
                "Agregá al menos un producto."
            );

            return;

        }


        recalcularPreciosAutomaticos();

        renderizarItemsVenta();


        const total =
            obtenerTotalVentaActual();


        const estadoCobro =
            ventaEstadoCobro?.value ||
            "cobrado";


        const clienteId =
            ventaCliente?.value
                ? Number(
                    ventaCliente.value
                )
                : null;


        let pagoInicial =
            0;


        let metodoPago =
            null;


        // =============================
        // COBRADO
        // =============================

        if (
            estadoCobro ===
            "cobrado"
        ) {

            pagoInicial =
                total;


            metodoPago =
                ventaMetodoPago?.value ||
                null;


            if (!metodoPago) {

                mostrarMensaje(
                    mensajeConfirmarVenta,
                    "Elegí el medio de pago."
                );

                return;

            }

        }


        // =============================
        // PAGO PARCIAL
        // =============================

        if (
            estadoCobro ===
            "parcial"
        ) {

            if (!clienteId) {

                mostrarMensaje(
                    mensajeConfirmarVenta,
                    "Para dejar saldo pendiente tenés que seleccionar un cliente."
                );

                return;

            }


            pagoInicial =
                Number(
                    ventaPagoInicial?.value
                );


            if (
                !Number.isFinite(
                    pagoInicial
                ) ||
                pagoInicial <= 0
            ) {

                mostrarMensaje(
                    mensajeConfirmarVenta,
                    "Ingresá cuánto pagó el cliente."
                );

                return;

            }


            if (
                pagoInicial >=
                total
            ) {

                mostrarMensaje(
                    mensajeConfirmarVenta,
                    "Si pagó el total, elegí Estado del cobro: Cobrado."
                );

                return;

            }


            metodoPago =
                ventaMetodoPago?.value ||
                null;


            if (!metodoPago) {

                mostrarMensaje(
                    mensajeConfirmarVenta,
                    "Elegí el medio de pago."
                );

                return;

            }

        }


        // =============================
        // NO COBRADO
        // =============================

        if (
            estadoCobro ===
            "no-cobrado"
        ) {

            if (!clienteId) {

                mostrarMensaje(
                    mensajeConfirmarVenta,
                    "Para registrar una venta no cobrada tenés que seleccionar un cliente."
                );

                return;

            }


            pagoInicial =
                0;


            metodoPago =
                null;

        }


        botonConfirmarVenta.disabled =
            true;


        botonConfirmarVenta.textContent =
            "Registrando...";


        try {

            const itemsParaSupabase =
                itemsVentaActual.map(
                    (item) => ({

                        producto_id:
                            item.producto_id,

                        nombre:
                            item.nombre,

                        cantidad:
                            item.cantidad,

                        precio_unitario:
                            item.precio_unitario

                    })
                );


            const {
                data,
                error
            } =
                await supabaseClient.rpc(
                    "registrar_venta_v2",
                    {

                        p_items:
                            itemsParaSupabase,

                        p_cliente_id:
                            clienteId,

                        p_pago_inicial:
                            pagoInicial,

                        p_metodo_pago:
                            metodoPago,

                        p_observaciones:
                            ventaObservaciones
                                ?.value
                                ?.trim() || null

                    }
                );


            if (error) {

                console.error(
                    "Error al registrar venta:",
                    error
                );


                mostrarMensaje(
                    mensajeConfirmarVenta,
                    error.message ||
                    "No se pudo registrar la venta."
                );

                return;

            }


            const saldo =
                Math.max(
                    0,
                    total -
                    pagoInicial
                );


            itemsVentaActual =
                [];


            renderizarItemsVenta();


            ventaCategoria.value =
                "";


            cargarProductosCategoriaVenta();


            ventaCantidad.value =
                "1";


            ventaTipoPrecio.value =
                "automatico";


            ventaPrecioPersonalizado.value =
                "";


            ventaCliente.value =
                "";


            ventaEstadoCobro.value =
                "cobrado";


            ventaPagoInicial.value =
                "";


            ventaMetodoPago.value =
                "";


            ventaObservaciones.value =
                "";


            actualizarEstadoCobroUI();


            await cargarProductosGestion();


            renderizarStock();


            let textoResultado =
                `Venta #${data} registrada correctamente. Stock actualizado.`;


            if (
                estadoCobro ===
                "parcial"
            ) {

                textoResultado +=
                    ` Saldo pendiente: ${formatearPrecio(saldo)}.`;

            }


            if (
                estadoCobro ===
                "no-cobrado"
            ) {

                textoResultado +=
                    ` Quedó pendiente de cobro: ${formatearPrecio(saldo)}.`;

            }


            mostrarMensaje(
                mensajeConfirmarVenta,
                textoResultado,
                "exito"
            );

        } catch (error) {

            console.error(
                "Error al registrar venta:",
                error
            );


            mostrarMensaje(
                mensajeConfirmarVenta,
                "No se pudo registrar la venta."
            );

        } finally {

            botonConfirmarVenta.disabled =
                false;


            botonConfirmarVenta.textContent =
                "Confirmar venta";

        }

    }
);


// ========================================
// STOCK
// ========================================

function obtenerTextoStock(stock) {

    if (
        stock === null ||
        stock === undefined ||
        stock === ""
    ) {

        return "Sin cargar";

    }


    return Number(stock);

}


function obtenerClaseStock(stock) {

    if (
        stock === null ||
        stock === undefined ||
        stock === ""
    ) {

        return "stock-sin-cargar";

    }


    if (
        Number(stock) <= 0
    ) {

        return "stock-agotado";

    }


    return "stock-disponible";

}


function crearTablaCategoria(
    nombreCategoria,
    productosCategoria
) {

    productosCategoria.sort(
        (a, b) =>
            a.nombre_mostrar.localeCompare(
                b.nombre_mostrar,
                "es",
                {
                    numeric: true,
                    sensitivity: "base"
                }
            )
    );


    const filas =
        productosCategoria
            .map(
                (producto) => {

                    const stock =
                        obtenerTextoStock(
                            producto.stock
                        );


                    const claseStock =
                        obtenerClaseStock(
                            producto.stock
                        );


                    const activo =
                        producto.activo !== false;


                    return `
                        <tr>

                            <td data-label="Producto">

                                <strong class="stock-producto-nombre">
                                    ${escaparHTML(producto.nombre_mostrar)}
                                </strong>

                                ${
                                    producto.marca_mostrar
                                        ? `
                                            <span class="stock-producto-marca">
                                                ${escaparHTML(producto.marca_mostrar)}
                                            </span>
                                        `
                                        : ""
                                }

                            </td>


                            <td data-label="Stock">

                                <span class="${claseStock}">
                                    ${stock}
                                </span>

                            </td>


                            <td data-label="Minorista">
                                ${formatearPrecio(producto.precio_minorista)}
                            </td>


                            <td data-label="Mayorista">
                                ${formatearPrecio(producto.precio_mayorista)}
                            </td>


                            <td data-label="Estado">

                                <span class="${
                                    activo
                                        ? "estado-activo"
                                        : "estado-inactivo"
                                }">

                                    ${
                                        activo
                                            ? "Activo"
                                            : "Oculto"
                                    }

                                </span>

                            </td>

                        </tr>
                    `;

                }
            )
            .join("");


    return `
        <div class="stock-categoria">

            <div class="stock-categoria-titulo">

                <h3>
                    ${escaparHTML(nombreCategoria)}
                </h3>

                <span>
                    ${productosCategoria.length}
                    ${
                        productosCategoria.length === 1
                            ? "producto"
                            : "productos"
                    }
                </span>

            </div>


            <div class="stock-tabla-contenedor">

                <table class="stock-tabla">

                    <thead>

                        <tr>
                            <th>Producto</th>
                            <th>Stock</th>
                            <th>Minorista</th>
                            <th>Mayorista</th>
                            <th>Estado</th>
                        </tr>

                    </thead>

                    <tbody>
                        ${filas}
                    </tbody>

                </table>

            </div>

        </div>
    `;

}


function renderizarStock() {

    if (!stockCategorias) {
        return;
    }


    let contenido =
        "";


    CATEGORIAS_STOCK.forEach(
        (categoria) => {

            const productosCategoria =
                productosGestion.filter(
                    categoria.coincide
                );


            if (
                productosCategoria.length ===
                0
            ) {
                return;
            }


            contenido +=
                crearTablaCategoria(
                    categoria.nombre,
                    productosCategoria
                );

        }
    );


    stockCategorias.innerHTML =
        contenido;

}


// ========================================
// CLIENTES
// ========================================

function limpiarFormularioCliente() {

    clienteEditandoId =
        null;


    formCliente?.reset();


    clientesFormTitulo.textContent =
        "Nuevo cliente";


    botonGuardarCliente.textContent =
        "Guardar cliente";


    botonCancelarEdicionCliente
        ?.classList.add(
            "oculto"
        );


    limpiarMensaje(
        mensajeCliente
    );

}


// ========================================
// CARGAR CLIENTES
// ========================================

async function cargarClientesGestion() {

    const {
        data,
        error
    } =
        await supabaseClient
            .from("clientes")
            .select(`
                id,
                created_at,
                nombre,
                telefono,
                notas,
                activo
            `)
            .order(
                "nombre",
                {
                    ascending: true
                }
            );


    if (error) {

        console.error(
            "Error al cargar clientes:",
            error
        );


        clientesGestion =
            [];


        if (clientesLista) {

            clientesLista.innerHTML = `
                <p class="clientes-vacios">
                    No se pudieron cargar los clientes.
                </p>
            `;

        }


        cargarSelectClientesVenta();


        return [];

    }


    clientesGestion =
        Array.isArray(data)
            ? data
            : [];


    renderizarClientes();

    cargarSelectClientesVenta();


    return clientesGestion;

}


// ========================================
// FILTRAR CLIENTES
// ========================================

function obtenerClientesFiltrados() {

    const termino =
        buscarCliente
            ?.value
            ?.trim()
            ?.toLowerCase() || "";


    if (!termino) {

        return clientesGestion;

    }


    return clientesGestion.filter(
        (cliente) => {

            const nombre =
                String(
                    cliente.nombre || ""
                ).toLowerCase();


            const telefono =
                String(
                    cliente.telefono || ""
                ).toLowerCase();


            return (
                nombre.includes(termino) ||
                telefono.includes(termino)
            );

        }
    );

}


// ========================================
// RENDER CLIENTES
// ========================================

function renderizarClientes() {

    if (
        !clientesLista ||
        !clientesContador
    ) {
        return;
    }


    const clientesFiltrados =
        obtenerClientesFiltrados();


    clientesContador.textContent =
        `${clientesGestion.length} ${
            clientesGestion.length === 1
                ? "cliente"
                : "clientes"
        }`;


    if (
        clientesGestion.length ===
        0
    ) {

        clientesLista.innerHTML = `
            <p class="clientes-vacios">
                Todavía no cargaste clientes.
            </p>
        `;

        return;

    }


    if (
        clientesFiltrados.length ===
        0
    ) {

        clientesLista.innerHTML = `
            <p class="clientes-vacios">
                No encontramos clientes con esa búsqueda.
            </p>
        `;

        return;

    }


    clientesLista.innerHTML =
        clientesFiltrados
            .map(
                (cliente) => `

                    <article class="cliente-card">

                        <div class="cliente-info">

                            <strong>
                                ${escaparHTML(cliente.nombre)}
                            </strong>

                            ${
                                cliente.telefono
                                    ? `
                                        <span>
                                            ${escaparHTML(cliente.telefono)}
                                        </span>
                                    `
                                    : `
                                        <span>
                                            Sin teléfono
                                        </span>
                                    `
                            }

                            ${
                                cliente.notas
                                    ? `
                                        <small>
                                            ${escaparHTML(cliente.notas)}
                                        </small>
                                    `
                                    : ""
                            }

                        </div>


                        <button
                            type="button"
                            class="editar-cliente"
                            data-cliente-id="${cliente.id}"
                        >
                            Editar
                        </button>

                    </article>

                `
            )
            .join("");


    document
        .querySelectorAll(
            ".editar-cliente"
        )
        .forEach(
            (boton) => {

                boton.addEventListener(
                    "click",
                    () => {

                        editarClienteFormulario(
                            Number(
                                boton.dataset.clienteId
                            )
                        );

                    }
                );

            }
        );

}


// ========================================
// EDITAR CLIENTE
// ========================================

function editarClienteFormulario(
    clienteId
) {

    const cliente =
        clientesGestion.find(
            (cliente) =>
                Number(cliente.id) ===
                Number(clienteId)
        );


    if (!cliente) {
        return;
    }


    clienteEditandoId =
        Number(cliente.id);


    clienteNombre.value =
        cliente.nombre || "";


    clienteTelefono.value =
        cliente.telefono || "";


    clienteNotas.value =
        cliente.notas || "";


    clientesFormTitulo.textContent =
        "Editar cliente";


    botonGuardarCliente.textContent =
        "Guardar cambios";


    botonCancelarEdicionCliente
        ?.classList.remove(
            "oculto"
        );


    limpiarMensaje(
        mensajeCliente
    );


    seccionClientes?.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });


    setTimeout(
        () => {

            clienteNombre?.focus();

        },
        300
    );

}


// ========================================
// GUARDAR CLIENTE
// ========================================

formCliente?.addEventListener(
    "submit",
    async (evento) => {

        evento.preventDefault();


        limpiarMensaje(
            mensajeCliente
        );


        const nombre =
            clienteNombre
                ?.value
                ?.trim() || "";


        const telefono =
            clienteTelefono
                ?.value
                ?.trim() || null;


        const notas =
            clienteNotas
                ?.value
                ?.trim() || null;


        if (!nombre) {

            mostrarMensaje(
                mensajeCliente,
                "Ingresá el nombre del cliente."
            );

            return;

        }


        botonGuardarCliente.disabled =
            true;


        const estabaEditando =
            Boolean(
                clienteEditandoId
            );


        botonGuardarCliente.textContent =
            estabaEditando
                ? "Guardando..."
                : "Creando...";


        try {

            let resultado;


            if (
                clienteEditandoId
            ) {

                resultado =
                    await supabaseClient.rpc(
                        "editar_cliente",
                        {

                            p_cliente_id:
                                clienteEditandoId,

                            p_nombre:
                                nombre,

                            p_telefono:
                                telefono,

                            p_notas:
                                notas

                        }
                    );

            } else {

                resultado =
                    await supabaseClient.rpc(
                        "crear_cliente",
                        {

                            p_nombre:
                                nombre,

                            p_telefono:
                                telefono,

                            p_notas:
                                notas

                        }
                    );

            }


            const {
                data,
                error
            } =
                resultado;


            if (error) {

                console.error(
                    "Error al guardar cliente:",
                    error
                );


                mostrarMensaje(
                    mensajeCliente,
                    error.message ||
                    "No se pudo guardar el cliente."
                );

                return;

            }


            limpiarFormularioCliente();


            await cargarClientesGestion();


            mostrarMensaje(
                mensajeCliente,
                estabaEditando
                    ? "Cliente actualizado correctamente."
                    : `Cliente #${data} creado correctamente.`,
                "exito"
            );

        } catch (error) {

            console.error(
                "Error al guardar cliente:",
                error
            );


            mostrarMensaje(
                mensajeCliente,
                "No se pudo guardar el cliente."
            );

        } finally {

            botonGuardarCliente.disabled =
                false;


            botonGuardarCliente.textContent =
                "Guardar cliente";

        }

    }
);


// ========================================
// CANCELAR EDICIÓN
// ========================================

botonCancelarEdicionCliente
    ?.addEventListener(
        "click",
        () => {

            limpiarFormularioCliente();

        }
    );


// ========================================
// BUSCADOR CLIENTES
// ========================================

buscarCliente?.addEventListener(
    "input",
    renderizarClientes
);


// ========================================
// MOVIMIENTOS
// ========================================

async function cargarMovimientosGestion() {

    limpiarMensaje(
        mensajeMovimientos
    );


    const {
        data: ventasData,
        error: ventasError
    } =
        await supabaseClient
            .from("ventas")
            .select(`
                id,
                created_at,
                total,
                metodo_pago,
                observaciones,
                anulada,
                anulada_at,
                motivo_anulacion
            `)
            .order(
                "created_at",
                {
                    ascending: false
                }
            )
            .limit(100);


    if (ventasError) {

        console.error(
            "Error al cargar movimientos:",
            ventasError
        );


        movimientosGestion =
            [];


        mostrarMensaje(
            mensajeMovimientos,
            "No se pudieron cargar los movimientos."
        );


        renderizarMovimientos();

        return [];

    }


    const ventas =
        Array.isArray(ventasData)
            ? ventasData
            : [];


    if (
        ventas.length ===
        0
    ) {

        movimientosGestion =
            [];


        renderizarMovimientos();

        return [];

    }


    const idsVentas =
        ventas.map(
            (venta) =>
                venta.id
        );


    const {
        data: itemsData,
        error: itemsError
    } =
        await supabaseClient
            .from("venta_items")
            .select(`
                id,
                venta_id,
                producto_nombre,
                cantidad,
                precio_unitario,
                subtotal
            `)
            .in(
                "venta_id",
                idsVentas
            )
            .order(
                "id",
                {
                    ascending: true
                }
            );


    if (itemsError) {

        console.error(
            "Error al cargar productos de las ventas:",
            itemsError
        );

    }


    const itemsPorVenta =
        new Map();


    (
        Array.isArray(itemsData)
            ? itemsData
            : []
    ).forEach(
        (item) => {

            if (
                !itemsPorVenta.has(
                    item.venta_id
                )
            ) {

                itemsPorVenta.set(
                    item.venta_id,
                    []
                );

            }


            itemsPorVenta
                .get(item.venta_id)
                .push(item);

        }
    );


    movimientosGestion =
        ventas.map(
            (venta) => ({

                ...venta,

                items:
                    itemsPorVenta.get(
                        venta.id
                    ) || []

            })
        );


    renderizarMovimientos();


    return movimientosGestion;

}


// ========================================
// RENDER MOVIMIENTOS
// ========================================

function renderizarMovimientos() {

    if (!movimientosLista) {
        return;
    }


    if (
        movimientosGestion.length ===
        0
    ) {

        movimientosLista.innerHTML = `
            <p class="movimientos-vacios">
                Todavía no hay ventas registradas.
            </p>
        `;

        return;

    }


    movimientosLista.innerHTML =
        movimientosGestion
            .map(
                (venta) => {

                    const anulada =
                        venta.anulada === true;


                    const items =
                        venta.items || [];


                    return `
                        <article
                            class="
                                movimiento-card
                                ${
                                    anulada
                                        ? "movimiento-anulado"
                                        : ""
                                }
                            "
                        >

                            <div class="movimiento-cabecera">

                                <div>

                                    <div class="movimiento-titulo-linea">

                                        <h3>
                                            Venta #${venta.id}
                                        </h3>

                                        <span
                                            class="${
                                                anulada
                                                    ? "movimiento-estado-anulado"
                                                    : "movimiento-estado-activo"
                                            }"
                                        >
                                            ${
                                                anulada
                                                    ? "Anulada"
                                                    : "Confirmada"
                                            }
                                        </span>

                                    </div>

                                    <p>
                                        ${escaparHTML(
                                            formatearFechaHora(
                                                venta.created_at
                                            )
                                        )}
                                    </p>

                                </div>

                                <strong>
                                    ${formatearPrecio(
                                        venta.total
                                    )}
                                </strong>

                            </div>


                            <div class="movimiento-items">

                                ${
                                    items
                                        .map(
                                            (item) => `
                                                <div class="movimiento-item">

                                                    <span>
                                                        ${escaparHTML(
                                                            item.producto_nombre
                                                        )}
                                                    </span>

                                                    <span>
                                                        ${item.cantidad}
                                                        ×
                                                        ${formatearPrecio(
                                                            item.precio_unitario
                                                        )}
                                                    </span>

                                                    <strong>
                                                        ${formatearPrecio(
                                                            item.subtotal
                                                        )}
                                                    </strong>

                                                </div>
                                            `
                                        )
                                        .join("")
                                }

                            </div>


                            <div class="movimiento-datos">

                                <span>

                                    <b>
                                        Pago:
                                    </b>

                                    ${escaparHTML(
                                        venta.metodo_pago ||
                                        "Sin especificar"
                                    )}

                                </span>

                                ${
                                    venta.observaciones
                                        ? `
                                            <span>

                                                <b>
                                                    Observación:
                                                </b>

                                                ${escaparHTML(
                                                    venta.observaciones
                                                )}

                                            </span>
                                        `
                                        : ""
                                }

                                ${
                                    anulada &&
                                    venta.anulada_at
                                        ? `
                                            <span>

                                                <b>
                                                    Anulada:
                                                </b>

                                                ${escaparHTML(
                                                    formatearFechaHora(
                                                        venta.anulada_at
                                                    )
                                                )}

                                            </span>
                                        `
                                        : ""
                                }

                            </div>


                            ${
                                !anulada
                                    ? `
                                        <button
                                            type="button"
                                            class="anular-venta"
                                            data-venta-id="${venta.id}"
                                        >
                                            Anular venta
                                        </button>
                                    `
                                    : ""
                            }

                        </article>
                    `;

                }
            )
            .join("");


    document
        .querySelectorAll(
            ".anular-venta"
        )
        .forEach(
            (boton) => {

                boton.addEventListener(
                    "click",
                    async () => {

                        const ventaId =
                            Number(
                                boton.dataset.ventaId
                            );


                        if (
                            !Number.isFinite(
                                ventaId
                            )
                        ) {
                            return;
                        }


                        const confirmar =
                            window.confirm(
                                `¿Seguro que querés anular la venta #${ventaId}?\n\nEl stock de todos sus productos volverá automáticamente.`
                            );


                        if (!confirmar) {
                            return;
                        }


                        await anularVenta(
                            ventaId,
                            boton
                        );

                    }
                );

            }
        );

}


// ========================================
// ANULAR VENTA
// ========================================

async function anularVenta(
    ventaId,
    boton
) {

    limpiarMensaje(
        mensajeMovimientos
    );


    boton.disabled =
        true;


    boton.textContent =
        "Anulando...";


    try {

        const {
            data,
            error
        } =
            await supabaseClient.rpc(
                "anular_venta",
                {

                    p_venta_id:
                        ventaId,

                    p_motivo:
                        null

                }
            );


        if (error) {

            console.error(
                "Error al anular venta:",
                error
            );


            mostrarMensaje(
                mensajeMovimientos,
                error.message ||
                "No se pudo anular la venta."
            );

            return;

        }


        await cargarProductosGestion();


        renderizarStock();


        await cargarMovimientosGestion();


        mostrarMensaje(
            mensajeMovimientos,
            `Venta #${data} anulada correctamente. El stock fue devuelto.`,
            "exito"
        );

    } catch (error) {

        console.error(
            "Error al anular venta:",
            error
        );


        mostrarMensaje(
            mensajeMovimientos,
            "No se pudo anular la venta."
        );

    }

}


// ========================================
// CERRAR TODAS LAS SECCIONES
// ========================================

function cerrarSeccionesGestion() {

    seccionVenta?.classList.add(
        "oculto"
    );


    seccionStock?.classList.add(
        "oculto"
    );


    seccionMovimientos?.classList.add(
        "oculto"
    );


    seccionClientes?.classList.add(
        "oculto"
    );

}


// ========================================
// ABRIR VENTA
// ========================================

async function abrirRegistrarVenta() {

    cerrarSeccionesGestion();


    await cargarClientesGestion();


    seccionVenta?.classList.remove(
        "oculto"
    );


    actualizarEstadoCobroUI();


    setTimeout(
        () => {

            seccionVenta?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        },
        50
    );

}


// ========================================
// ABRIR STOCK
// ========================================

function abrirStock() {

    cerrarSeccionesGestion();


    renderizarStock();


    seccionStock?.classList.remove(
        "oculto"
    );


    setTimeout(
        () => {

            seccionStock?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        },
        50
    );

}


// ========================================
// ABRIR MOVIMIENTOS
// ========================================

async function abrirMovimientosGestion() {

    cerrarSeccionesGestion();


    seccionMovimientos?.classList.remove(
        "oculto"
    );


    movimientosLista.innerHTML = `
        <p class="movimientos-vacios">
            Cargando movimientos...
        </p>
    `;


    await cargarMovimientosGestion();


    setTimeout(
        () => {

            seccionMovimientos?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        },
        50
    );

}


// ========================================
// ABRIR CLIENTES
// ========================================

async function abrirClientesGestion() {

    cerrarSeccionesGestion();


    seccionClientes?.classList.remove(
        "oculto"
    );


    limpiarFormularioCliente();


    await cargarClientesGestion();


    setTimeout(
        () => {

            seccionClientes?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        },
        50
    );

}


// ========================================
// BOTONES
// ========================================

botonRegistrarVenta?.addEventListener(
    "click",
    abrirRegistrarVenta
);


botonCerrarVenta?.addEventListener(
    "click",
    () => {

        seccionVenta?.classList.add(
            "oculto"
        );

    }
);


botonVerStock?.addEventListener(
    "click",
    abrirStock
);


botonCerrarStock?.addEventListener(
    "click",
    () => {

        seccionStock?.classList.add(
            "oculto"
        );

    }
);


botonVerMovimientos?.addEventListener(
    "click",
    abrirMovimientosGestion
);


botonCerrarMovimientos?.addEventListener(
    "click",
    () => {

        seccionMovimientos?.classList.add(
            "oculto"
        );

    }
);


botonVerClientes?.addEventListener(
    "click",
    abrirClientesGestion
);


botonCerrarClientes?.addEventListener(
    "click",
    () => {

        seccionClientes?.classList.add(
            "oculto"
        );

    }
);


botonRegistrarReposicion?.addEventListener(
    "click",
    () => {

        cerrarSeccionesGestion();


        console.log(
            "Registrar reposición pendiente"
        );

    }
);


// ========================================
// INICIAR GESTIÓN
// ========================================

async function iniciarGestion() {

    if (
        gestionIniciada
    ) {
        return;
    }


    gestionIniciada =
        true;


    await cargarProductosGestion();

    await cargarClientesGestion();


    actualizarResumenGeneral();

    renderizarStock();

    renderizarItemsVenta();

    actualizarPrecioVentaPreview();

    actualizarEstadoCobroUI();

}


// ========================================
// CAMBIOS DE AUTH
// ========================================

supabaseClient.auth.onAuthStateChange(
    (evento, sesion) => {

        setTimeout(
            async () => {

                if (
                    evento ===
                    "PASSWORD_RECOVERY"
                ) {

                    mostrarNuevaPassword();

                    return;

                }


                if (
                    evento ===
                    "SIGNED_OUT"
                ) {

                    if (
                        !modoRecuperacionPassword
                    ) {

                        mostrarLogin();

                    }

                    return;

                }


                if (
                    evento ===
                    "SIGNED_IN" &&
                    sesion &&
                    !modoRecuperacionPassword
                ) {

                    await mostrarAplicacion();

                }

            },
            0
        );

    }
);


// ========================================
// SESIÓN INICIAL
// ========================================

async function comprobarSesionInicial() {

    const {
        data,
        error
    } =
        await supabaseClient.auth
            .getSession();


    if (error) {

        mostrarLogin();

        return;

    }


    if (
        data?.session &&
        !modoRecuperacionPassword
    ) {

        await mostrarAplicacion();

        return;

    }


    mostrarLogin();

}


comprobarSesionInicial();
// =========================================================
// EDITAR VENTAS
// =========================================================

let ventaEditandoIdGestion = null;

let ventaEditandoPagadoGestion = 0;


// =========================================================
// ELEMENTOS VISUALES DEL MODO EDICIÓN
// =========================================================

const tituloFormularioVentaGestion =
    seccionVenta?.querySelector(
        ".venta-encabezado h2"
    );

const descripcionFormularioVentaGestion =
    seccionVenta?.querySelector(
        ".venta-encabezado p"
    );

const campoEstadoCobroGestion =
    ventaEstadoCobro?.closest(
        ".campo"
    );

const resumenCobroVentaGestion =
    ventaTotalPagado?.closest(
        ".venta-cobro-resumen"
    );


// =========================================================
// CREAR AVISO DE EDICIÓN
// =========================================================

let avisoEdicionVentaGestion =
    document.getElementById(
        "aviso-edicion-venta"
    );


if (
    !avisoEdicionVentaGestion &&
    ventaCliente
) {

    avisoEdicionVentaGestion =
        document.createElement(
            "div"
        );


    avisoEdicionVentaGestion.id =
        "aviso-edicion-venta";


    avisoEdicionVentaGestion.className =
        "venta-edicion-aviso oculto";


    ventaCliente
        .closest(".campo")
        ?.insertAdjacentElement(
            "beforebegin",
            avisoEdicionVentaGestion
        );

}


// =========================================================
// ESTADO DE COBRO DE UNA VENTA
// =========================================================

function obtenerEstadoCobroMovimiento(
    venta
) {

    const total =
        Number(
            venta.total
        ) || 0;


    const pagado =
        Number(
            venta.pagado
        ) || 0;


    if (
        pagado <= 0
    ) {

        return "No cobrado";

    }


    if (
        pagado < total
    ) {

        return "Pago parcial";

    }


    return "Cobrado";

}


// =========================================================
// CARGAR MOVIMIENTOS
// REEMPLAZA LA FUNCIÓN ANTERIOR AUTOMÁTICAMENTE
// =========================================================

async function cargarMovimientosGestion() {

    limpiarMensaje(
        mensajeMovimientos
    );


    const {
        data: ventasData,
        error: ventasError
    } =
        await supabaseClient
            .from("ventas")
            .select(`
                id,
                created_at,
                total,
                cliente_id,
                metodo_pago,
                observaciones,
                anulada,
                anulada_at,
                motivo_anulacion,
                editada_at
            `)
            .order(
                "created_at",
                {
                    ascending: false
                }
            )
            .limit(100);


    if (ventasError) {

        console.error(
            "Error al cargar movimientos:",
            ventasError
        );


        movimientosGestion =
            [];


        mostrarMensaje(
            mensajeMovimientos,
            "No se pudieron cargar los movimientos."
        );


        renderizarMovimientos();

        return [];

    }


    const ventas =
        Array.isArray(
            ventasData
        )
            ? ventasData
            : [];


    if (
        ventas.length === 0
    ) {

        movimientosGestion =
            [];


        renderizarMovimientos();

        return [];

    }


    const idsVentas =
        ventas.map(
            (venta) =>
                venta.id
        );


    // =====================================================
    // PRODUCTOS DE LAS VENTAS
    // =====================================================

    const {
        data: itemsData,
        error: itemsError
    } =
        await supabaseClient
            .from("venta_items")
            .select(`
                id,
                venta_id,
                producto_id,
                producto_slug,
                producto_nombre,
                cantidad,
                precio_unitario,
                subtotal
            `)
            .in(
                "venta_id",
                idsVentas
            )
            .order(
                "id",
                {
                    ascending: true
                }
            );


    if (itemsError) {

        console.error(
            "Error al cargar productos de ventas:",
            itemsError
        );

    }


    // =====================================================
    // PAGOS
    // =====================================================

    const {
        data: pagosData,
        error: pagosError
    } =
        await supabaseClient
            .from("pagos")
            .select(`
                id,
                venta_id,
                monto,
                metodo_pago,
                created_at,
                anulado
            `)
            .in(
                "venta_id",
                idsVentas
            );


    if (pagosError) {

        console.error(
            "Error al cargar pagos:",
            pagosError
        );

    }


    // =====================================================
    // AGRUPAR ITEMS
    // =====================================================

    const itemsPorVenta =
        new Map();


    (
        Array.isArray(itemsData)
            ? itemsData
            : []
    ).forEach(
        (item) => {

            if (
                !itemsPorVenta.has(
                    item.venta_id
                )
            ) {

                itemsPorVenta.set(
                    item.venta_id,
                    []
                );

            }


            itemsPorVenta
                .get(
                    item.venta_id
                )
                .push(
                    item
                );

        }
    );


    // =====================================================
    // AGRUPAR PAGOS
    // =====================================================

    const pagosPorVenta =
        new Map();


    (
        Array.isArray(pagosData)
            ? pagosData
            : []
    ).forEach(
        (pago) => {

            if (
                pago.anulado === true
            ) {
                return;
            }


            if (
                !pagosPorVenta.has(
                    pago.venta_id
                )
            ) {

                pagosPorVenta.set(
                    pago.venta_id,
                    []
                );

            }


            pagosPorVenta
                .get(
                    pago.venta_id
                )
                .push(
                    pago
                );

        }
    );


    // =====================================================
    // ARMAR MOVIMIENTOS
    // =====================================================

    movimientosGestion =
        ventas.map(
            (venta) => {

                const pagos =
                    pagosPorVenta.get(
                        venta.id
                    ) || [];


                const pagado =
                    pagos.reduce(
                        (
                            total,
                            pago
                        ) =>
                            total +
                            Number(
                                pago.monto
                            ),
                        0
                    );


                const totalVenta =
                    Number(
                        venta.total
                    ) || 0;


                return {

                    ...venta,

                    items:
                        itemsPorVenta.get(
                            venta.id
                        ) || [],

                    pagos,

                    pagado,

                    pendiente:
                        Math.max(
                            0,
                            totalVenta -
                            pagado
                        ),

                    saldo_favor:
                        Math.max(
                            0,
                            pagado -
                            totalVenta
                        )

                };

            }
        );


    renderizarMovimientos();


    return movimientosGestion;

}


// =========================================================
// RENDERIZAR MOVIMIENTOS
// REEMPLAZA LA FUNCIÓN ANTERIOR AUTOMÁTICAMENTE
// =========================================================

function renderizarMovimientos() {

    if (!movimientosLista) {
        return;
    }


    if (
        movimientosGestion.length ===
        0
    ) {

        movimientosLista.innerHTML = `
            <p class="movimientos-vacios">
                Todavía no hay ventas registradas.
            </p>
        `;

        return;

    }


    movimientosLista.innerHTML =
        movimientosGestion
            .map(
                (venta) => {

                    const anulada =
                        venta.anulada === true;


                    const items =
                        venta.items || [];


                    const cliente =
                        clientesGestion.find(
                            (cliente) =>
                                Number(cliente.id) ===
                                Number(venta.cliente_id)
                        );


                    const estadoCobro =
                        obtenerEstadoCobroMovimiento(
                            venta
                        );


                    return `
                        <article
                            class="
                                movimiento-card
                                ${
                                    anulada
                                        ? "movimiento-anulado"
                                        : ""
                                }
                            "
                        >

                            <div class="movimiento-cabecera">

                                <div>

                                    <div class="movimiento-titulo-linea">

                                        <h3>
                                            Venta #${venta.id}
                                        </h3>


                                        <span
                                            class="${
                                                anulada
                                                    ? "movimiento-estado-anulado"
                                                    : "movimiento-estado-activo"
                                            }"
                                        >
                                            ${
                                                anulada
                                                    ? "Anulada"
                                                    : "Confirmada"
                                            }
                                        </span>

                                    </div>


                                    <p>
                                        ${escaparHTML(
                                            formatearFechaHora(
                                                venta.created_at
                                            )
                                        )}
                                    </p>

                                </div>


                                <strong>
                                    ${formatearPrecio(
                                        venta.total
                                    )}
                                </strong>

                            </div>


                            <div class="movimiento-items">

                                ${
                                    items
                                        .map(
                                            (item) => `
                                                <div class="movimiento-item">

                                                    <span>
                                                        ${escaparHTML(
                                                            item.producto_nombre
                                                        )}
                                                    </span>

                                                    <span>
                                                        ${item.cantidad}
                                                        ×
                                                        ${formatearPrecio(
                                                            item.precio_unitario
                                                        )}
                                                    </span>

                                                    <strong>
                                                        ${formatearPrecio(
                                                            item.subtotal
                                                        )}
                                                    </strong>

                                                </div>
                                            `
                                        )
                                        .join("")
                                }

                            </div>


                            <div class="movimiento-datos">

                                ${
                                    cliente
                                        ? `
                                            <span>
                                                <b>Cliente:</b>
                                                ${escaparHTML(
                                                    cliente.nombre
                                                )}
                                            </span>
                                        `
                                        : `
                                            <span>
                                                <b>Cliente:</b>
                                                Sin cliente
                                            </span>
                                        `
                                }


                                <span>
                                    <b>Cobro:</b>
                                    ${estadoCobro}
                                </span>


                                <span>
                                    <b>Pagado:</b>
                                    ${formatearPrecio(
                                        venta.pagado
                                    )}
                                </span>


                                ${
                                    venta.saldo_favor > 0
                                        ? `
                                            <span>
                                                <b>Saldo a favor:</b>
                                                ${formatearPrecio(
                                                    venta.saldo_favor
                                                )}
                                            </span>
                                        `
                                        : `
                                            <span>
                                                <b>Pendiente:</b>
                                                ${formatearPrecio(
                                                    venta.pendiente
                                                )}
                                            </span>
                                        `
                                }


                                ${
                                    venta.observaciones
                                        ? `
                                            <span>
                                                <b>Observación:</b>
                                                ${escaparHTML(
                                                    venta.observaciones
                                                )}
                                            </span>
                                        `
                                        : ""
                                }


                                ${
                                    venta.editada_at &&
                                    !anulada
                                        ? `
                                            <span>
                                                <b>Editada:</b>
                                                ${escaparHTML(
                                                    formatearFechaHora(
                                                        venta.editada_at
                                                    )
                                                )}
                                            </span>
                                        `
                                        : ""
                                }


                                ${
                                    anulada &&
                                    venta.anulada_at
                                        ? `
                                            <span>
                                                <b>Anulada:</b>
                                                ${escaparHTML(
                                                    formatearFechaHora(
                                                        venta.anulada_at
                                                    )
                                                )}
                                            </span>
                                        `
                                        : ""
                                }

                            </div>


                            ${
                                !anulada
                                    ? `
                                        <div class="movimiento-acciones">

                                            <button
                                                type="button"
                                                class="editar-venta-movimiento"
                                                data-venta-id="${venta.id}"
                                            >
                                                Editar venta
                                            </button>


                                            <button
                                                type="button"
                                                class="anular-venta"
                                                data-venta-id="${venta.id}"
                                            >
                                                Anular venta
                                            </button>

                                        </div>
                                    `
                                    : ""
                            }

                        </article>
                    `;

                }
            )
            .join("");


    // =====================================================
    // EDITAR
    // =====================================================

    document
        .querySelectorAll(
            ".editar-venta-movimiento"
        )
        .forEach(
            (boton) => {

                boton.addEventListener(
                    "click",
                    async () => {

                        const ventaId =
                            Number(
                                boton.dataset.ventaId
                            );


                        await abrirEdicionVentaGestion(
                            ventaId
                        );

                    }
                );

            }
        );


    // =====================================================
    // ANULAR
    // =====================================================

    document
        .querySelectorAll(
            ".anular-venta"
        )
        .forEach(
            (boton) => {

                boton.addEventListener(
                    "click",
                    async () => {

                        const ventaId =
                            Number(
                                boton.dataset.ventaId
                            );


                        if (
                            !Number.isFinite(
                                ventaId
                            )
                        ) {
                            return;
                        }


                        const confirmar =
                            window.confirm(
                                `¿Seguro que querés anular la venta #${ventaId}?\n\nEl stock de todos sus productos volverá automáticamente.`
                            );


                        if (!confirmar) {
                            return;
                        }


                        await anularVenta(
                            ventaId,
                            boton
                        );

                    }
                );

            }
        );

}


// =========================================================
// INFORMACIÓN DE EDICIÓN
// =========================================================

function actualizarInfoEdicionVentaGestion() {

    if (
        ventaEditandoIdGestion ===
        null
    ) {
        return;
    }


    const total =
        obtenerTotalVentaActual();


    const pagado =
        Number(
            ventaEditandoPagadoGestion
        ) || 0;


    const pendiente =
        Math.max(
            0,
            total -
            pagado
        );


    const saldoFavor =
        Math.max(
            0,
            pagado -
            total
        );


    if (
        saldoFavor > 0
    ) {

        avisoEdicionVentaGestion.innerHTML = `
            <strong>
                Venta #${ventaEditandoIdGestion}
            </strong>

            <span>
                Pagado hasta ahora:
                ${formatearPrecio(pagado)}
            </span>

            <span>
                Nuevo total:
                ${formatearPrecio(total)}
            </span>

            <span class="venta-edicion-saldo-favor">
                Saldo a favor del cliente:
                ${formatearPrecio(saldoFavor)}
            </span>
        `;

        return;

    }


    avisoEdicionVentaGestion.innerHTML = `
        <strong>
            Venta #${ventaEditandoIdGestion}
        </strong>

        <span>
            Pagado hasta ahora:
            ${formatearPrecio(pagado)}
        </span>

        <span>
            Nuevo total:
            ${formatearPrecio(total)}
        </span>

        <span>
            Saldo pendiente:
            ${formatearPrecio(pendiente)}
        </span>
    `;

}


// =========================================================
// DETECTAR CAMBIOS DE PRODUCTOS MIENTRAS EDITAMOS
// =========================================================

if (
    ventaItemsContenedor
) {

    const observadorEdicionVenta =
        new MutationObserver(
            () => {

                actualizarInfoEdicionVentaGestion();

            }
        );


    observadorEdicionVenta.observe(
        ventaItemsContenedor,
        {
            childList: true,
            subtree: true
        }
    );

}


// =========================================================
// ABRIR EDICIÓN
// =========================================================

async function abrirEdicionVentaGestion(
    ventaId
) {

    const venta =
        movimientosGestion.find(
            (venta) =>
                Number(venta.id) ===
                Number(ventaId)
        );


    if (!venta) {

        mostrarMensaje(
            mensajeMovimientos,
            "No se pudo abrir la venta."
        );

        return;

    }


    await cargarProductosGestion();

    await cargarClientesGestion();


    ventaEditandoIdGestion =
        Number(
            venta.id
        );


    ventaEditandoPagadoGestion =
        Number(
            venta.pagado
        ) || 0;


    itemsVentaActual =
        (
            venta.items || []
        )
            .map(
                (item) => {

                    const producto =
                        productosGestion.find(
                            (producto) =>
                                Number(producto.id) ===
                                Number(item.producto_id)
                        );


                    const categoria =
                        producto
                            ? obtenerCategoriaProducto(
                                producto
                            )
                            : null;


                    const precioActual =
                        Number(
                            item.precio_unitario
                        ) || 0;


                    const precioMinorista =
                        Number(
                            producto?.precio_minorista
                        ) || 0;


                    const precioMayorista =
                        Number(
                            producto?.precio_mayorista
                        ) || 0;


                    const esPrecioAutomatico =
                        precioActual ===
                        precioMinorista ||
                        precioActual ===
                        precioMayorista;


                    return {

                        producto_id:
                            Number(
                                item.producto_id
                            ),

                        slug:
                            item.producto_slug,

                        nombre:
                            item.producto_nombre,

                        cantidad:
                            Number(
                                item.cantidad
                            ),

                        categoria_clave:
                            categoria?.clave ||
                            "",

                        tipo_precio:
                            esPrecioAutomatico
                                ? "automatico"
                                : "personalizado",

                        precio_unitario:
                            precioActual,

                        precio_aplicado:
                            esPrecioAutomatico
                                ? "Automático"
                                : "Personalizado"

                    };

                }
            );


    // =====================================================
    // PREPARAR FORMULARIO
    // =====================================================

    cerrarSeccionesGestion();


    seccionVenta?.classList.remove(
        "oculto"
    );


    tituloFormularioVentaGestion.textContent =
        `Editar venta #${venta.id}`;


    descripcionFormularioVentaGestion.textContent =
        "Podés agregar, quitar o modificar productos. El stock se ajustará automáticamente al guardar.";


    botonConfirmarVenta.textContent =
        "Guardar cambios";


    ventaCategoria.value =
        "";


    cargarProductosCategoriaVenta();


    ventaCantidad.value =
        "1";


    ventaTipoPrecio.value =
        "automatico";


    ventaPrecioPersonalizado.value =
        "";


    ventaObservaciones.value =
        venta.observaciones || "";


    cargarSelectClientesVenta();


    ventaCliente.value =
        venta.cliente_id
            ? String(
                venta.cliente_id
            )
            : "";


    ventaClienteAyuda.textContent =
        "Podés cambiar el cliente. Los pagos ya registrados no se modifican.";


    // =====================================================
    // OCULTAR COBRO DURANTE LA EDICIÓN
    // =====================================================

    campoEstadoCobroGestion
        ?.classList.add(
            "oculto"
        );


    contenedorPagoInicial
        ?.classList.add(
            "oculto"
        );


    contenedorMetodoPago
        ?.classList.add(
            "oculto"
        );


    resumenCobroVentaGestion
        ?.classList.add(
            "oculto"
        );


    avisoEdicionVentaGestion
        ?.classList.remove(
            "oculto"
        );


    limpiarMensaje(
        mensajeItemVenta
    );


    limpiarMensaje(
        mensajeConfirmarVenta
    );


    renderizarItemsVenta();


    actualizarPrecioVentaPreview();

    actualizarInfoEdicionVentaGestion();


    setTimeout(
        () => {

            seccionVenta?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        },
        50
    );

}


// =========================================================
// SALIR DEL MODO EDICIÓN
// =========================================================

function salirModoEdicionVentaGestion(
    limpiarProductos = true
) {

    if (
        ventaEditandoIdGestion ===
        null
    ) {
        return;
    }


    ventaEditandoIdGestion =
        null;


    ventaEditandoPagadoGestion =
        0;


    tituloFormularioVentaGestion.textContent =
        "Registrar venta";


    descripcionFormularioVentaGestion.textContent =
        "Agregá todos los productos de la venta y confirmá al final.";


    botonConfirmarVenta.textContent =
        "Confirmar venta";


    campoEstadoCobroGestion
        ?.classList.remove(
            "oculto"
        );


    resumenCobroVentaGestion
        ?.classList.remove(
            "oculto"
        );


    avisoEdicionVentaGestion
        ?.classList.add(
            "oculto"
        );


    ventaClienteAyuda.textContent =
        "Opcional si la venta queda totalmente cobrada.";


    ventaEstadoCobro.value =
        "cobrado";


    ventaPagoInicial.value =
        "";


    ventaMetodoPago.value =
        "";


    actualizarEstadoCobroUI();


    if (
        limpiarProductos
    ) {

        itemsVentaActual =
            [];


        ventaCategoria.value =
            "";


        cargarProductosCategoriaVenta();


        ventaCantidad.value =
            "1";


        ventaTipoPrecio.value =
            "automatico";


        ventaPrecioPersonalizado.value =
            "";


        ventaCliente.value =
            "";


        ventaObservaciones.value =
            "";


        renderizarItemsVenta();

    }

}


// =========================================================
// GUARDAR EDICIÓN
// CAPTURA EL BOTÓN ANTES DEL REGISTRO DE VENTA NORMAL
// =========================================================

botonConfirmarVenta?.addEventListener(
    "click",
    async (evento) => {

        if (
            ventaEditandoIdGestion ===
            null
        ) {

            return;

        }


        evento.preventDefault();

        evento.stopImmediatePropagation();


        limpiarMensaje(
            mensajeConfirmarVenta
        );


        if (
            itemsVentaActual.length ===
            0
        ) {

            mostrarMensaje(
                mensajeConfirmarVenta,
                "La venta debe tener al menos un producto."
            );

            return;

        }


        recalcularPreciosAutomaticos();

        renderizarItemsVenta();


        const totalNuevo =
            obtenerTotalVentaActual();


        const clienteId =
            ventaCliente?.value
                ? Number(
                    ventaCliente.value
                )
                : null;


        if (
            totalNuevo >
            ventaEditandoPagadoGestion &&
            !clienteId
        ) {

            mostrarMensaje(
                mensajeConfirmarVenta,
                "La venta queda con saldo pendiente. Seleccioná un cliente."
            );

            return;

        }


        botonConfirmarVenta.disabled =
            true;


        botonConfirmarVenta.textContent =
            "Guardando...";


        const ventaIdGuardando =
            ventaEditandoIdGestion;


        try {

            const itemsParaSupabase =
                itemsVentaActual.map(
                    (item) => ({

                        producto_id:
                            item.producto_id,

                        nombre:
                            item.nombre,

                        cantidad:
                            item.cantidad,

                        precio_unitario:
                            item.precio_unitario

                    })
                );


            const {
                data,
                error
            } =
                await supabaseClient.rpc(
                    "editar_venta",
                    {

                        p_venta_id:
                            ventaIdGuardando,

                        p_items:
                            itemsParaSupabase,

                        p_cliente_id:
                            clienteId,

                        p_observaciones:
                            ventaObservaciones
                                ?.value
                                ?.trim() || null

                    }
                );


            if (error) {

                console.error(
                    "Error al editar venta:",
                    error
                );


                mostrarMensaje(
                    mensajeConfirmarVenta,
                    error.message ||
                    "No se pudo actualizar la venta."
                );

                return;

            }


            await cargarProductosGestion();


            renderizarStock();


            salirModoEdicionVentaGestion(
                true
            );


            seccionVenta?.classList.add(
                "oculto"
            );


            seccionMovimientos?.classList.remove(
                "oculto"
            );


            await cargarMovimientosGestion();


            mostrarMensaje(
                mensajeMovimientos,
                `Venta #${data} actualizada correctamente. El stock fue ajustado.`,
                "exito"
            );


            setTimeout(
                () => {

                    seccionMovimientos?.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                },
                50
            );

        } catch (error) {

            console.error(
                "Error al editar venta:",
                error
            );


            mostrarMensaje(
                mensajeConfirmarVenta,
                "No se pudo actualizar la venta."
            );

        } finally {

            botonConfirmarVenta.disabled =
                false;


            botonConfirmarVenta.textContent =
                ventaEditandoIdGestion !==
                null
                    ? "Guardar cambios"
                    : "Confirmar venta";

        }

    },
    true
);


// =========================================================
// SI CERRAMOS LA EDICIÓN, LIMPIAMOS EL FORMULARIO
// =========================================================

botonCerrarVenta?.addEventListener(
    "click",
    () => {

        if (
            ventaEditandoIdGestion !==
            null
        ) {

            salirModoEdicionVentaGestion(
                true
            );

        }

    }
);


// =========================================================
// SI TOCAMOS REGISTRAR VENTA NORMAL,
// SALIMOS DE CUALQUIER EDICIÓN ANTERIOR
// =========================================================

botonRegistrarVenta?.addEventListener(
    "click",
    () => {

        if (
            ventaEditandoIdGestion !==
            null
        ) {

            salirModoEdicionVentaGestion(
                true
            );

        }

    },
    true
);


// =========================================================
// CERRAR EDICIÓN SI VAMOS A OTRA SECCIÓN
// =========================================================

[
    botonVerStock,
    botonVerMovimientos,
    botonVerClientes,
    botonRegistrarReposicion
]
    .filter(Boolean)
    .forEach(
        (boton) => {

            boton.addEventListener(
                "click",
                () => {

                    if (
                        ventaEditandoIdGestion !==
                        null
                    ) {

                        salirModoEdicionVentaGestion(
                            true
                        );

                    }

                },
                true
            );

        }
    );
    // =========================================================
// BÚSQUEDA RÁPIDA + SCANNER + CÓDIGOS DE BARRAS
// =========================================================


// =========================================================
// CREAR BUSCADOR EN REGISTRAR / EDITAR VENTA
// =========================================================

const formularioVentaRapidaGestion =
    seccionVenta?.querySelector(
        ".venta-formulario"
    );


if (
    formularioVentaRapidaGestion &&
    !document.getElementById(
        "venta-buscador-producto"
    )
) {

    const bloqueBuscador =
        document.createElement(
            "div"
        );


    bloqueBuscador.className =
        "venta-buscador-rapido";


    bloqueBuscador.innerHTML = `

        <label for="venta-buscador-producto">
            Buscar o escanear producto
        </label>

        <div class="venta-buscador-input-contenedor">

            <input
                type="text"
                id="venta-buscador-producto"
                placeholder="Escribí nombre, marca o escaneá el código..."
                autocomplete="off"
            >

            <span class="venta-buscador-icono">
                🔎
            </span>

        </div>

        <small>
            Si queda un solo resultado se agrega automáticamente.
            También podés escanear directamente con la pistola.
        </small>

        <div
            class="venta-resultados-busqueda oculto"
            id="venta-resultados-busqueda"
        ></div>

    `;


    formularioVentaRapidaGestion.insertBefore(
        bloqueBuscador,
        formularioVentaRapidaGestion.firstElementChild
    );

}


const ventaBuscadorProducto =
    document.getElementById(
        "venta-buscador-producto"
    );


const ventaResultadosBusqueda =
    document.getElementById(
        "venta-resultados-busqueda"
    );


let temporizadorBusquedaProducto =
    null;


// =========================================================
// NORMALIZAR TEXTO
// =========================================================

function normalizarBusquedaProducto(
    texto
) {

    return String(
        texto || ""
    )
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .toLowerCase()
        .trim();

}


// =========================================================
// BUSCAR PRODUCTOS
// =========================================================

function obtenerResultadosBusquedaProducto(
    termino
) {

    const busqueda =
        normalizarBusquedaProducto(
            termino
        );


    if (
        busqueda.length <
        2
    ) {

        return [];

    }


    return productosGestion
        .filter(
            (producto) => {

                if (
                    producto.activo ===
                    false
                ) {

                    return false;

                }


                const contenido =
                    normalizarBusquedaProducto(
                        [
                            producto.nombre_mostrar,
                            producto.marca_mostrar,
                            producto.codigo_barras
                        ]
                            .filter(Boolean)
                            .join(" ")
                    );


                return contenido.includes(
                    busqueda
                );

            }
        )
        .sort(
            (a, b) =>
                a.nombre_mostrar.localeCompare(
                    b.nombre_mostrar,
                    "es",
                    {
                        sensitivity: "base"
                    }
                )
        )
        .slice(
            0,
            10
        );

}


// =========================================================
// MOSTRAR RESULTADOS
// =========================================================

function renderizarResultadosBusquedaProducto() {

    if (
        !ventaBuscadorProducto ||
        !ventaResultadosBusqueda
    ) {

        return [];

    }


    const termino =
        ventaBuscadorProducto.value;


    const resultados =
        obtenerResultadosBusquedaProducto(
            termino
        );


    if (
        normalizarBusquedaProducto(
            termino
        ).length < 2
    ) {

        ventaResultadosBusqueda
            .classList.add(
                "oculto"
            );


        ventaResultadosBusqueda.innerHTML =
            "";


        return [];

    }


    if (
        resultados.length ===
        0
    ) {

        ventaResultadosBusqueda
            .classList.remove(
                "oculto"
            );


        ventaResultadosBusqueda.innerHTML = `
            <div class="venta-resultado-vacio">
                No encontramos productos.
            </div>
        `;


        return [];

    }


    ventaResultadosBusqueda
        .classList.remove(
            "oculto"
        );


    ventaResultadosBusqueda.innerHTML =
        resultados
            .map(
                (producto) => {

                    const stock =
                        Number(
                            producto.stock
                        ) || 0;


                    return `

                        <button
                            type="button"
                            class="venta-resultado-producto"
                            data-producto-id="${producto.id}"
                        >

                            <div>

                                <strong>
                                    ${escaparHTML(
                                        producto.nombre_mostrar
                                    )}
                                </strong>

                                <span>
                                    ${escaparHTML(
                                        producto.marca_mostrar ||
                                        ""
                                    )}
                                </span>

                            </div>

                            <div class="venta-resultado-stock">

                                Stock:
                                ${stock}

                            </div>

                        </button>

                    `;

                }
            )
            .join("");


    return resultados;

}


// =========================================================
// SELECCIONAR PRODUCTO EN FORMULARIO
// =========================================================

function seleccionarProductoRapidoGestion(
    producto
) {

    const categoria =
        obtenerCategoriaProducto(
            producto
        );


    if (!categoria) {

        mostrarMensaje(
            mensajeItemVenta,
            "No se pudo identificar la categoría del producto."
        );

        return false;

    }


    ventaCategoria.value =
        categoria.clave;


    cargarProductosCategoriaVenta();


    ventaProducto.value =
        String(
            producto.id
        );


    actualizarDatosProductoVenta();


    return true;

}


// =========================================================
// AGREGAR PRODUCTO
// ESTA FUNCIÓN TAMBIÉN UNE PRODUCTOS REPETIDOS
// =========================================================

function agregarProductoVentaGestion(
    productoForzado = null,
    cantidadForzada = null,
    modoRapido = false
) {

    limpiarMensaje(
        mensajeItemVenta
    );


    const producto =
        productoForzado ||
        obtenerProductoVentaSeleccionado();


    if (!producto) {

        mostrarMensaje(
            mensajeItemVenta,
            "Elegí un producto."
        );

        return false;

    }


    const cantidad =
        cantidadForzada !== null
            ? Number(
                cantidadForzada
            )
            : Number(
                ventaCantidad?.value
            );


    if (
        !Number.isInteger(
            cantidad
        ) ||
        cantidad <= 0
    ) {

        mostrarMensaje(
            mensajeItemVenta,
            "Ingresá una cantidad válida."
        );

        return false;

    }


    if (
        producto.stock ===
        null ||
        producto.stock ===
        undefined
    ) {

        mostrarMensaje(
            mensajeItemVenta,
            "Este producto no tiene stock cargado."
        );

        return false;

    }


    const cantidadPendiente =
        obtenerCantidadPendienteProducto(
            producto.id
        );


    const disponible =
        Number(
            producto.stock
        ) -
        cantidadPendiente;


    if (
        cantidad >
        disponible
    ) {

        mostrarMensaje(
            mensajeItemVenta,
            `Stock insuficiente. Disponible: ${Math.max(
                0,
                disponible
            )}.`
        );

        return false;

    }


    const categoria =
        obtenerCategoriaProducto(
            producto
        );


    if (!categoria) {

        mostrarMensaje(
            mensajeItemVenta,
            "No se pudo identificar la categoría del producto."
        );

        return false;

    }


    const esPersonalizado =
        !modoRapido &&
        ventaTipoPrecio?.value ===
            "personalizado";


    let precio =
        0;


    if (
        esPersonalizado
    ) {

        precio =
            Number(
                ventaPrecioPersonalizado
                    ?.value
            );


        if (
            !Number.isFinite(
                precio
            ) ||
            precio < 0 ||
            ventaPrecioPersonalizado
                ?.value ===
                ""
        ) {

            mostrarMensaje(
                mensajeItemVenta,
                "Ingresá un precio personalizado válido."
            );

            return false;

        }

    } else {

        precio =
            obtenerPrecioAutomaticoProducto(
                producto,
                cantidad
            );

    }


    // =====================================================
    // SI YA ESTÁ EN LA VENTA, SUMAR CANTIDAD
    // =====================================================

    const itemExistente =
        itemsVentaActual.find(
            (item) => {

                if (
                    Number(
                        item.producto_id
                    ) !==
                    Number(
                        producto.id
                    )
                ) {

                    return false;

                }


                if (
                    esPersonalizado
                ) {

                    return (
                        item.tipo_precio ===
                            "personalizado" &&
                        Number(
                            item.precio_unitario
                        ) ===
                            Number(
                                precio
                            )
                    );

                }


                return (
                    item.tipo_precio ===
                    "automatico"
                );

            }
        );


    if (
        itemExistente
    ) {

        itemExistente.cantidad +=
            cantidad;

    } else {

        itemsVentaActual.push({

            producto_id:
                Number(
                    producto.id
                ),

            slug:
                producto.slug,

            nombre:
                producto.nombre_mostrar,

            cantidad,

            categoria_clave:
                categoria.clave,

            tipo_precio:
                esPersonalizado
                    ? "personalizado"
                    : "automatico",

            precio_unitario:
                precio,

            precio_aplicado:
                esPersonalizado
                    ? "Personalizado"
                    : "Automático"

        });

    }


    renderizarItemsVenta();


    actualizarDatosProductoVenta();


    ventaCantidad.value =
        "1";


    ventaTipoPrecio.value =
        "automatico";


    ventaPrecioPersonalizado.value =
        "";


    actualizarPrecioVentaPreview();


    mostrarMensaje(
        mensajeItemVenta,
        `${producto.nombre_mostrar} agregado.`,
        "exito"
    );


    if (
        modoRapido &&
        ventaBuscadorProducto
    ) {

        ventaBuscadorProducto.value =
            "";


        ventaResultadosBusqueda.innerHTML =
            "";


        ventaResultadosBusqueda
            .classList.add(
                "oculto"
            );


        setTimeout(
            () => {

                ventaBuscadorProducto.focus();

            },
            50
        );

    }


    return true;

}


// =========================================================
// REEMPLAZAR EL COMPORTAMIENTO DEL BOTÓN AGREGAR
// =========================================================

botonAgregarItemVenta?.addEventListener(
    "click",
    (evento) => {

        evento.preventDefault();

        evento.stopImmediatePropagation();


        agregarProductoVentaGestion(
            null,
            null,
            false
        );

    },
    true
);


// =========================================================
// AGREGAR DESDE EL BUSCADOR
// =========================================================

function agregarResultadoBusquedaGestion(
    producto
) {

    const seleccionado =
        seleccionarProductoRapidoGestion(
            producto
        );


    if (!seleccionado) {
        return;
    }


    agregarProductoVentaGestion(
        producto,
        1,
        true
    );

}


// =========================================================
// ESCRIBIR EN BUSCADOR
// =========================================================

ventaBuscadorProducto?.addEventListener(
    "input",
    () => {

        clearTimeout(
            temporizadorBusquedaProducto
        );


        const textoActual =
            ventaBuscadorProducto.value;


        const resultados =
            renderizarResultadosBusquedaProducto();


        const busquedaNormalizada =
            normalizarBusquedaProducto(
                textoActual
            );


        // Si queda solamente uno,
        // esperamos un instante y lo agregamos solo.

        if (
            resultados.length ===
                1 &&
            busquedaNormalizada.length >=
                3
        ) {

            temporizadorBusquedaProducto =
                setTimeout(
                    () => {

                        const textoAhora =
                            ventaBuscadorProducto.value;


                        if (
                            textoAhora !==
                            textoActual
                        ) {

                            return;

                        }


                        const resultadosAhora =
                            obtenerResultadosBusquedaProducto(
                                textoAhora
                            );


                        if (
                            resultadosAhora.length ===
                            1
                        ) {

                            agregarResultadoBusquedaGestion(
                                resultadosAhora[0]
                            );

                        }

                    },
                    450
                );

        }

    }
);


// =========================================================
// ENTER / SCANNER
// =========================================================

ventaBuscadorProducto?.addEventListener(
    "keydown",
    (evento) => {

        if (
            evento.key !==
            "Enter"
        ) {

            return;

        }


        evento.preventDefault();


        clearTimeout(
            temporizadorBusquedaProducto
        );


        const codigoOTexto =
            ventaBuscadorProducto.value
                .trim();


        if (!codigoOTexto) {
            return;
        }


        // Primero buscamos coincidencia exacta
        // de código de barras.

        const productoPorCodigo =
            productosGestion.find(
                (producto) =>
                    String(
                        producto.codigo_barras ||
                        ""
                    ).trim() ===
                    codigoOTexto
            );


        if (
            productoPorCodigo
        ) {

            agregarResultadoBusquedaGestion(
                productoPorCodigo
            );

            return;

        }


        // Si no era código, permitimos Enter
        // cuando la búsqueda dejó un solo resultado.

        const resultados =
            obtenerResultadosBusquedaProducto(
                codigoOTexto
            );


        if (
            resultados.length ===
            1
        ) {

            agregarResultadoBusquedaGestion(
                resultados[0]
            );

            return;

        }


        if (
            resultados.length ===
            0
        ) {

            mostrarMensaje(
                mensajeItemVenta,
                "No encontramos ningún producto con ese nombre o código."
            );

        }

    }
);


// =========================================================
// CLICK EN RESULTADOS
// =========================================================

ventaResultadosBusqueda?.addEventListener(
    "click",
    (evento) => {

        const boton =
            evento.target.closest(
                ".venta-resultado-producto"
            );


        if (!boton) {
            return;
        }


        const productoId =
            Number(
                boton.dataset.productoId
            );


        const producto =
            productosGestion.find(
                (producto) =>
                    Number(
                        producto.id
                    ) ===
                    productoId
            );


        if (!producto) {
            return;
        }


        clearTimeout(
            temporizadorBusquedaProducto
        );


        agregarResultadoBusquedaGestion(
            producto
        );

    }
);


// =========================================================
// CÓDIGOS DE BARRAS - MODAL
// =========================================================

if (
    !document.getElementById(
        "modal-codigo-barras"
    )
) {

    const modalCodigo =
        document.createElement(
            "div"
        );


    modalCodigo.id =
        "modal-codigo-barras";


    modalCodigo.className =
        "modal-codigo-barras oculto";


    modalCodigo.innerHTML = `

        <div class="modal-codigo-contenido">

            <div class="modal-codigo-encabezado">

                <div>

                    <h3>
                        Código de barras
                    </h3>

                    <p id="codigo-producto-nombre">
                    </p>

                </div>

                <button
                    type="button"
                    id="cerrar-modal-codigo"
                >
                    ×
                </button>

            </div>


            <form id="form-codigo-barras">

                <label for="codigo-barras-input">
                    Escaneá la caja con la pistola
                </label>

                <input
                    type="text"
                    id="codigo-barras-input"
                    placeholder="Escaneá o escribí el código..."
                    autocomplete="off"
                >

                <small>
                    La pistola escribe el código automáticamente.
                    También podés ingresarlo a mano.
                </small>


                <p
                    class="venta-mensaje"
                    id="mensaje-codigo-barras"
                ></p>


                <div class="modal-codigo-botones">

                    <button
                        type="submit"
                        id="guardar-codigo-barras"
                    >
                        Guardar código
                    </button>

                    <button
                        type="button"
                        id="cancelar-codigo-barras"
                    >
                        Cancelar
                    </button>

                </div>

            </form>

        </div>

    `;


    document.body.appendChild(
        modalCodigo
    );

}


const modalCodigoBarras =
    document.getElementById(
        "modal-codigo-barras"
    );


const codigoProductoNombre =
    document.getElementById(
        "codigo-producto-nombre"
    );


const formCodigoBarras =
    document.getElementById(
        "form-codigo-barras"
    );


const codigoBarrasInput =
    document.getElementById(
        "codigo-barras-input"
    );


const mensajeCodigoBarras =
    document.getElementById(
        "mensaje-codigo-barras"
    );


const botonGuardarCodigo =
    document.getElementById(
        "guardar-codigo-barras"
    );


const botonCerrarModalCodigo =
    document.getElementById(
        "cerrar-modal-codigo"
    );


const botonCancelarCodigo =
    document.getElementById(
        "cancelar-codigo-barras"
    );


let productoCodigoBarrasId =
    null;


// =========================================================
// ABRIR MODAL DE CÓDIGO
// =========================================================

function abrirCodigoBarrasGestion(
    productoId
) {

    const producto =
        productosGestion.find(
            (producto) =>
                Number(
                    producto.id
                ) ===
                Number(
                    productoId
                )
        );


    if (!producto) {
        return;
    }


    productoCodigoBarrasId =
        Number(
            producto.id
        );


    codigoProductoNombre.textContent =
        producto.nombre_mostrar;


    codigoBarrasInput.value =
        producto.codigo_barras ||
        "";


    limpiarMensaje(
        mensajeCodigoBarras
    );


    modalCodigoBarras
        ?.classList.remove(
            "oculto"
        );


    setTimeout(
        () => {

            codigoBarrasInput.focus();

            codigoBarrasInput.select();

        },
        100
    );

}


// =========================================================
// CERRAR MODAL
// =========================================================

function cerrarCodigoBarrasGestion() {

    productoCodigoBarrasId =
        null;


    codigoBarrasInput.value =
        "";


    limpiarMensaje(
        mensajeCodigoBarras
    );


    modalCodigoBarras
        ?.classList.add(
            "oculto"
        );

}


// =========================================================
// GUARDAR CÓDIGO
// =========================================================

formCodigoBarras?.addEventListener(
    "submit",
    async (evento) => {

        evento.preventDefault();


        limpiarMensaje(
            mensajeCodigoBarras
        );


        const codigo =
            codigoBarrasInput.value
                .trim();


        if (!codigo) {

            mostrarMensaje(
                mensajeCodigoBarras,
                "Escaneá o escribí un código."
            );

            return;

        }


        if (
            !productoCodigoBarrasId
        ) {

            mostrarMensaje(
                mensajeCodigoBarras,
                "No se pudo identificar el producto."
            );

            return;

        }


        botonGuardarCodigo.disabled =
            true;


        botonGuardarCodigo.textContent =
            "Guardando...";


        try {

            const {
                data,
                error
            } =
                await supabaseClient.rpc(
                    "asignar_codigo_barras",
                    {

                        p_producto_id:
                            productoCodigoBarrasId,

                        p_codigo_barras:
                            codigo

                    }
                );


            if (error) {

                console.error(
                    "Error al guardar código:",
                    error
                );


                mostrarMensaje(
                    mensajeCodigoBarras,
                    error.message ||
                    "No se pudo guardar el código."
                );

                return;

            }


            await cargarProductosGestion();


            renderizarStock();


            mostrarMensaje(
                mensajeCodigoBarras,
                "Código guardado correctamente.",
                "exito"
            );


            setTimeout(
                () => {

                    cerrarCodigoBarrasGestion();

                },
                700
            );

        } catch (error) {

            console.error(
                error
            );


            mostrarMensaje(
                mensajeCodigoBarras,
                "No se pudo guardar el código."
            );

        } finally {

            botonGuardarCodigo.disabled =
                false;


            botonGuardarCodigo.textContent =
                "Guardar código";

        }

    }
);


// =========================================================
// CERRAR MODAL
// =========================================================

botonCerrarModalCodigo?.addEventListener(
    "click",
    cerrarCodigoBarrasGestion
);


botonCancelarCodigo?.addEventListener(
    "click",
    cerrarCodigoBarrasGestion
);


modalCodigoBarras?.addEventListener(
    "click",
    (evento) => {

        if (
            evento.target ===
            modalCodigoBarras
        ) {

            cerrarCodigoBarrasGestion();

        }

    }
);


// =========================================================
// STOCK CON CÓDIGO DE BARRAS
// REEMPLAZA VISUALMENTE LA TABLA ANTERIOR
// =========================================================

function crearTablaCategoria(
    nombreCategoria,
    productosCategoria
) {

    productosCategoria.sort(
        (a, b) =>
            a.nombre_mostrar.localeCompare(
                b.nombre_mostrar,
                "es",
                {
                    numeric: true,
                    sensitivity: "base"
                }
            )
    );


    const filas =
        productosCategoria
            .map(
                (producto) => {

                    const stock =
                        obtenerTextoStock(
                            producto.stock
                        );


                    const claseStock =
                        obtenerClaseStock(
                            producto.stock
                        );


                    const activo =
                        producto.activo !==
                        false;


                    const codigo =
                        String(
                            producto.codigo_barras ||
                            ""
                        ).trim();


                    return `

                        <tr>

                            <td data-label="Producto">

                                <strong class="stock-producto-nombre">
                                    ${escaparHTML(
                                        producto.nombre_mostrar
                                    )}
                                </strong>

                                ${
                                    producto.marca_mostrar
                                        ? `
                                            <span class="stock-producto-marca">
                                                ${escaparHTML(
                                                    producto.marca_mostrar
                                                )}
                                            </span>
                                        `
                                        : ""
                                }

                            </td>


                            <td data-label="Stock">

                                <span class="${claseStock}">
                                    ${stock}
                                </span>

                            </td>


                            <td data-label="Minorista">
                                ${formatearPrecio(
                                    producto.precio_minorista
                                )}
                            </td>


                            <td data-label="Mayorista">
                                ${formatearPrecio(
                                    producto.precio_mayorista
                                )}
                            </td>


                            <td data-label="Código">

                                <div class="stock-codigo-barras">

                                    <span
                                        class="${
                                            codigo
                                                ? "codigo-asignado"
                                                : "codigo-sin-asignar"
                                        }"
                                    >
                                        ${
                                            codigo
                                                ? escaparHTML(
                                                    codigo
                                                )
                                                : "Sin código"
                                        }
                                    </span>

                                    <button
                                        type="button"
                                        class="asignar-codigo-producto"
                                        data-producto-id="${producto.id}"
                                    >
                                        ${
                                            codigo
                                                ? "Cambiar"
                                                : "Asignar"
                                        }
                                    </button>

                                </div>

                            </td>


                            <td data-label="Estado">

                                <span
                                    class="${
                                        activo
                                            ? "estado-activo"
                                            : "estado-inactivo"
                                    }"
                                >
                                    ${
                                        activo
                                            ? "Activo"
                                            : "Oculto"
                                    }
                                </span>

                            </td>

                        </tr>

                    `;

                }
            )
            .join("");


    return `

        <div class="stock-categoria">

            <div class="stock-categoria-titulo">

                <h3>
                    ${escaparHTML(
                        nombreCategoria
                    )}
                </h3>

                <span>
                    ${productosCategoria.length}
                    ${
                        productosCategoria.length ===
                        1
                            ? "producto"
                            : "productos"
                    }
                </span>

            </div>


            <div class="stock-tabla-contenedor">

                <table class="stock-tabla">

                    <thead>

                        <tr>
                            <th>Producto</th>
                            <th>Stock</th>
                            <th>Minorista</th>
                            <th>Mayorista</th>
                            <th>Código</th>
                            <th>Estado</th>
                        </tr>

                    </thead>


                    <tbody>
                        ${filas}
                    </tbody>

                </table>

            </div>

        </div>

    `;

}


// =========================================================
// CLICK EN ASIGNAR CÓDIGO DESDE STOCK
// =========================================================

stockCategorias?.addEventListener(
    "click",
    (evento) => {

        const boton =
            evento.target.closest(
                ".asignar-codigo-producto"
            );


        if (!boton) {
            return;
        }


        const productoId =
            Number(
                boton.dataset.productoId
            );


        abrirCodigoBarrasGestion(
            productoId
        );

    }
);
// =========================================================
// STOCK - CATEGORÍAS PLEGABLES
// =========================================================

const categoriasStockAbiertas =
    new Set();


// =========================================================
// CREAR CATEGORÍA PLEGABLE
// =========================================================

function crearTablaCategoria(
    nombreCategoria,
    productosCategoria
) {

    productosCategoria.sort(
        (a, b) =>
            a.nombre_mostrar.localeCompare(
                b.nombre_mostrar,
                "es",
                {
                    numeric: true,
                    sensitivity: "base"
                }
            )
    );


    const claveCategoria =
        normalizarBusquedaProducto(
            nombreCategoria
        )
            .replaceAll(" ", "-");


    const estaAbierta =
        categoriasStockAbiertas.has(
            claveCategoria
        );


    const filas =
        productosCategoria
            .map(
                (producto) => {

                    const stock =
                        obtenerTextoStock(
                            producto.stock
                        );


                    const claseStock =
                        obtenerClaseStock(
                            producto.stock
                        );


                    const activo =
                        producto.activo !== false;


                    const codigo =
                        String(
                            producto.codigo_barras || ""
                        ).trim();


                    return `
                        <tr>

                            <td data-label="Producto">

                                <strong class="stock-producto-nombre">
                                    ${escaparHTML(
                                        producto.nombre_mostrar
                                    )}
                                </strong>

                                ${
                                    producto.marca_mostrar
                                        ? `
                                            <span class="stock-producto-marca">
                                                ${escaparHTML(
                                                    producto.marca_mostrar
                                                )}
                                            </span>
                                        `
                                        : ""
                                }

                            </td>


                            <td data-label="Stock">

                                <span class="${claseStock}">
                                    ${stock}
                                </span>

                            </td>


                            <td data-label="Minorista">
                                ${formatearPrecio(
                                    producto.precio_minorista
                                )}
                            </td>


                            <td data-label="Mayorista">
                                ${formatearPrecio(
                                    producto.precio_mayorista
                                )}
                            </td>


                            <td data-label="Código">

                                <div class="stock-codigo-barras">

                                    <span
                                        class="${
                                            codigo
                                                ? "codigo-asignado"
                                                : "codigo-sin-asignar"
                                        }"
                                    >
                                        ${
                                            codigo
                                                ? escaparHTML(codigo)
                                                : "Sin código"
                                        }
                                    </span>

                                    <button
                                        type="button"
                                        class="asignar-codigo-producto"
                                        data-producto-id="${producto.id}"
                                    >
                                        ${
                                            codigo
                                                ? "Cambiar"
                                                : "Asignar"
                                        }
                                    </button>

                                </div>

                            </td>


                            <td data-label="Estado">

                                <span
                                    class="${
                                        activo
                                            ? "estado-activo"
                                            : "estado-inactivo"
                                    }"
                                >
                                    ${
                                        activo
                                            ? "Activo"
                                            : "Oculto"
                                    }
                                </span>

                            </td>

                        </tr>
                    `;

                }
            )
            .join("");


    return `
        <div
            class="stock-categoria stock-categoria-plegable"
            data-categoria-stock="${claveCategoria}"
        >

            <button
                type="button"
                class="stock-categoria-titulo stock-categoria-toggle"
                data-categoria-stock="${claveCategoria}"
            >

                <div>

                    <h3>
                        ${escaparHTML(
                            nombreCategoria
                        )}
                    </h3>

                    <span>
                        ${productosCategoria.length}
                        ${
                            productosCategoria.length === 1
                                ? "producto"
                                : "productos"
                        }
                    </span>

                </div>


                <span class="stock-categoria-flecha">
                    ${estaAbierta ? "−" : "+"}
                </span>

            </button>


            <div
                class="stock-categoria-contenido ${
                    estaAbierta
                        ? ""
                        : "oculto"
                }"
            >

                <div class="stock-tabla-contenedor">

                    <table class="stock-tabla">

                        <thead>

                            <tr>
                                <th>Producto</th>
                                <th>Stock</th>
                                <th>Minorista</th>
                                <th>Mayorista</th>
                                <th>Código</th>
                                <th>Estado</th>
                            </tr>

                        </thead>

                        <tbody>
                            ${filas}
                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    `;

}


// =========================================================
// ABRIR / CERRAR CATEGORÍA
// =========================================================

stockCategorias?.addEventListener(
    "click",
    (evento) => {

        const boton =
            evento.target.closest(
                ".stock-categoria-toggle"
            );


        if (!boton) {
            return;
        }


        const clave =
            boton.dataset.categoriaStock;


        const categoria =
            boton.closest(
                ".stock-categoria"
            );


        const contenido =
            categoria?.querySelector(
                ".stock-categoria-contenido"
            );


        const flecha =
            boton.querySelector(
                ".stock-categoria-flecha"
            );


        if (
            !clave ||
            !contenido
        ) {
            return;
        }


        const estabaCerrada =
            contenido.classList.contains(
                "oculto"
            );


        if (estabaCerrada) {

            contenido.classList.remove(
                "oculto"
            );


            categoriasStockAbiertas.add(
                clave
            );


            if (flecha) {
                flecha.textContent = "−";
            }

        } else {

            contenido.classList.add(
                "oculto"
            );


            categoriasStockAbiertas.delete(
                clave
            );


            if (flecha) {
                flecha.textContent = "+";
            }

        }

    }
);
// =========================================================
// CLIENTES A COBRAR
// =========================================================


// =========================================================
// CREAR BOTÓN EN ACCIONES RÁPIDAS
// =========================================================

const accionesGestion =
    document.querySelector(
        ".acciones"
    );


let botonClientesCobrar =
    document.getElementById(
        "clientes-a-cobrar"
    );


if (
    accionesGestion &&
    !botonClientesCobrar
) {

    botonClientesCobrar =
        document.createElement(
            "button"
        );


    botonClientesCobrar.type =
        "button";


    botonClientesCobrar.id =
        "clientes-a-cobrar";


    botonClientesCobrar.textContent =
        "Clientes a cobrar";


    botonVerClientes
        ?.insertAdjacentElement(
            "afterend",
            botonClientesCobrar
        );

}


// =========================================================
// CREAR SECCIÓN
// =========================================================

let seccionClientesCobrar =
    document.getElementById(
        "seccion-clientes-cobrar"
    );


if (
    !seccionClientesCobrar
) {

    seccionClientesCobrar =
        document.createElement(
            "section"
        );


    seccionClientesCobrar.id =
        "seccion-clientes-cobrar";


    seccionClientesCobrar.className =
        "seccion-clientes-cobrar oculto";


    seccionClientesCobrar.innerHTML = `

        <div class="cobros-encabezado">

            <div>

                <h2>
                    Clientes a cobrar
                </h2>

                <p>
                    Ventas con saldo pendiente
                </p>

            </div>


            <button
                type="button"
                id="cerrar-clientes-cobrar"
                class="cerrar-clientes-cobrar"
            >
                Cerrar
            </button>

        </div>


        <div class="cobros-resumen-general">

            <div>

                <span>
                    Total pendiente
                </span>

                <strong id="cobros-total-pendiente">
                    $ 0
                </strong>

            </div>


            <div>

                <span>
                    Clientes con deuda
                </span>

                <strong id="cobros-total-clientes">
                    0
                </strong>

            </div>

        </div>


        <p
            class="venta-mensaje"
            id="mensaje-clientes-cobrar"
        ></p>


        <div
            id="clientes-cobrar-lista"
            class="clientes-cobrar-lista"
        >

            <p class="cobros-vacios">
                Cargando...
            </p>

        </div>

    `;


    document
        .querySelector("main")
        ?.appendChild(
            seccionClientesCobrar
        );

}


// =========================================================
// ELEMENTOS
// =========================================================

const botonCerrarClientesCobrar =
    document.getElementById(
        "cerrar-clientes-cobrar"
    );


const clientesCobrarLista =
    document.getElementById(
        "clientes-cobrar-lista"
    );


const cobrosTotalPendiente =
    document.getElementById(
        "cobros-total-pendiente"
    );


const cobrosTotalClientes =
    document.getElementById(
        "cobros-total-clientes"
    );


const mensajeClientesCobrar =
    document.getElementById(
        "mensaje-clientes-cobrar"
    );


let cuentasCobrarGestion =
    [];


// =========================================================
// CREAR MODAL DE PAGO
// =========================================================

if (
    !document.getElementById(
        "modal-agregar-pago"
    )
) {

    const modalPago =
        document.createElement(
            "div"
        );


    modalPago.id =
        "modal-agregar-pago";


    modalPago.className =
        "modal-pago oculto";


    modalPago.innerHTML = `

        <div class="modal-pago-contenido">

            <div class="modal-pago-encabezado">

                <div>

                    <h3>
                        Agregar pago
                    </h3>

                    <p id="pago-venta-info">
                    </p>

                </div>


                <button
                    type="button"
                    id="cerrar-modal-pago"
                >
                    ×
                </button>

            </div>


            <div class="pago-saldo-actual">

                <span>
                    Saldo pendiente
                </span>

                <strong id="pago-saldo-actual">
                    $ 0
                </strong>

            </div>


            <form id="form-agregar-pago">


                <div class="campo">

                    <label for="pago-monto">
                        Monto que paga ahora
                    </label>

                    <input
                        type="number"
                        id="pago-monto"
                        min="1"
                        step="1"
                        required
                    >

                </div>


                <div class="campo">

                    <label for="pago-metodo">
                        Medio de pago
                    </label>

                    <select
                        id="pago-metodo"
                        required
                    >

                        <option value="">
                            Seleccionar
                        </option>

                        <option value="Efectivo">
                            Efectivo
                        </option>

                        <option value="Transferencia">
                            Transferencia
                        </option>

                        <option value="Mercado Pago">
                            Mercado Pago
                        </option>

                        <option value="Tarjeta">
                            Tarjeta
                        </option>

                        <option value="Dólares">
                            Dólares
                        </option>

                        <option value="USDT">
                            USDT
                        </option>

                        <option value="Otro">
                            Otro
                        </option>

                    </select>

                </div>


                <div class="campo">

                    <label for="pago-observaciones">
                        Observación
                    </label>

                    <textarea
                        id="pago-observaciones"
                        rows="3"
                        placeholder="Opcional. Ej: Pago semanal"
                    ></textarea>

                </div>


                <div class="modal-pago-botones">

                    <button
                        type="submit"
                        id="guardar-pago"
                    >
                        Registrar pago
                    </button>


                    <button
                        type="button"
                        id="cancelar-pago"
                    >
                        Cancelar
                    </button>

                </div>


                <p
                    class="venta-mensaje"
                    id="mensaje-agregar-pago"
                ></p>

            </form>

        </div>

    `;


    document.body.appendChild(
        modalPago
    );

}


// =========================================================
// ELEMENTOS MODAL
// =========================================================

const modalAgregarPago =
    document.getElementById(
        "modal-agregar-pago"
    );


const formAgregarPago =
    document.getElementById(
        "form-agregar-pago"
    );


const pagoVentaInfo =
    document.getElementById(
        "pago-venta-info"
    );


const pagoSaldoActual =
    document.getElementById(
        "pago-saldo-actual"
    );


const pagoMonto =
    document.getElementById(
        "pago-monto"
    );


const pagoMetodo =
    document.getElementById(
        "pago-metodo"
    );


const pagoObservaciones =
    document.getElementById(
        "pago-observaciones"
    );


const mensajeAgregarPago =
    document.getElementById(
        "mensaje-agregar-pago"
    );


const botonGuardarPago =
    document.getElementById(
        "guardar-pago"
    );


const botonCerrarModalPago =
    document.getElementById(
        "cerrar-modal-pago"
    );


const botonCancelarPago =
    document.getElementById(
        "cancelar-pago"
    );


let ventaPagoSeleccionadaGestion =
    null;


// =========================================================
// CARGAR CUENTAS A COBRAR
// =========================================================

async function cargarClientesACobrarGestion() {

    limpiarMensaje(
        mensajeClientesCobrar
    );


    if (
        clientesCobrarLista
    ) {

        clientesCobrarLista.innerHTML = `
            <p class="cobros-vacios">
                Cargando saldos...
            </p>
        `;

    }


    await cargarClientesGestion();


    const {
        data: ventasData,
        error: ventasError
    } =
        await supabaseClient
            .from("ventas")
            .select(`
                id,
                created_at,
                cliente_id,
                total,
                observaciones,
                anulada
            `)
            .eq(
                "anulada",
                false
            )
            .not(
                "cliente_id",
                "is",
                null
            )
            .order(
                "created_at",
                {
                    ascending: false
                }
            );


    if (
        ventasError
    ) {

        console.error(
            "Error al cargar ventas pendientes:",
            ventasError
        );


        mostrarMensaje(
            mensajeClientesCobrar,
            "No se pudieron cargar las cuentas a cobrar."
        );


        return;

    }


    const ventas =
        Array.isArray(
            ventasData
        )
            ? ventasData
            : [];


    if (
        ventas.length ===
        0
    ) {

        cuentasCobrarGestion =
            [];


        renderizarClientesACobrarGestion();

        return;

    }


    const idsVentas =
        ventas.map(
            (venta) =>
                venta.id
        );


    const {
        data: pagosData,
        error: pagosError
    } =
        await supabaseClient
            .from("pagos")
            .select(`
                id,
                venta_id,
                monto,
                metodo_pago,
                observaciones,
                created_at,
                anulado
            `)
            .in(
                "venta_id",
                idsVentas
            );


    if (
        pagosError
    ) {

        console.error(
            "Error al cargar pagos:",
            pagosError
        );


        mostrarMensaje(
            mensajeClientesCobrar,
            "No se pudieron cargar los pagos."
        );


        return;

    }


    const pagos =
        Array.isArray(
            pagosData
        )
            ? pagosData
            : [];


    cuentasCobrarGestion =
        ventas
            .map(
                (venta) => {

                    const pagosVenta =
                        pagos.filter(
                            (pago) =>
                                Number(
                                    pago.venta_id
                                ) ===
                                    Number(
                                        venta.id
                                    ) &&
                                pago.anulado !==
                                    true
                        );


                    const totalPagado =
                        pagosVenta.reduce(
                            (
                                acumulado,
                                pago
                            ) =>
                                acumulado +
                                Number(
                                    pago.monto
                                ),
                            0
                        );


                    const totalVenta =
                        Number(
                            venta.total
                        ) || 0;


                    const pendiente =
                        Math.max(
                            0,
                            totalVenta -
                            totalPagado
                        );


                    return {

                        ...venta,

                        pagos:
                            pagosVenta,

                        pagado:
                            totalPagado,

                        pendiente

                    };

                }
            )
            .filter(
                (venta) =>
                    venta.pendiente >
                    0
            );


    renderizarClientesACobrarGestion();

}


// =========================================================
// RENDERIZAR CUENTAS A COBRAR
// =========================================================

function renderizarClientesACobrarGestion() {

    if (
        !clientesCobrarLista
    ) {
        return;
    }


    const totalPendienteGeneral =
        cuentasCobrarGestion.reduce(
            (
                total,
                venta
            ) =>
                total +
                venta.pendiente,
            0
        );


    const clientesConDeuda =
        new Set(
            cuentasCobrarGestion.map(
                (venta) =>
                    Number(
                        venta.cliente_id
                    )
            )
        );


    cobrosTotalPendiente.textContent =
        formatearPrecio(
            totalPendienteGeneral
        );


    cobrosTotalClientes.textContent =
        clientesConDeuda.size;


    if (
        cuentasCobrarGestion.length ===
        0
    ) {

        clientesCobrarLista.innerHTML = `
            <div class="cobros-vacios">

                <strong>
                    No hay saldos pendientes
                </strong>

                <span>
                    Todas las ventas están cobradas.
                </span>

            </div>
        `;

        return;

    }


    const ventasPorCliente =
        new Map();


    cuentasCobrarGestion.forEach(
        (venta) => {

            const clienteId =
                Number(
                    venta.cliente_id
                );


            if (
                !ventasPorCliente.has(
                    clienteId
                )
            ) {

                ventasPorCliente.set(
                    clienteId,
                    []
                );

            }


            ventasPorCliente
                .get(
                    clienteId
                )
                .push(
                    venta
                );

        }
    );


    clientesCobrarLista.innerHTML =
        Array
            .from(
                ventasPorCliente.entries()
            )
            .map(
                (
                    [
                        clienteId,
                        ventas
                    ]
                ) => {

                    const cliente =
                        clientesGestion.find(
                            (cliente) =>
                                Number(
                                    cliente.id
                                ) ===
                                Number(
                                    clienteId
                                )
                        );


                    const deudaCliente =
                        ventas.reduce(
                            (
                                total,
                                venta
                            ) =>
                                total +
                                venta.pendiente,
                            0
                        );


                    return `

                        <article class="cliente-deuda-card">


                            <div class="cliente-deuda-encabezado">

                                <div>

                                    <h3>
                                        ${escaparHTML(
                                            cliente?.nombre ||
                                            "Cliente"
                                        )}
                                    </h3>

                                    ${
                                        cliente?.telefono
                                            ? `
                                                <span>
                                                    ${escaparHTML(
                                                        cliente.telefono
                                                    )}
                                                </span>
                                            `
                                            : ""
                                    }

                                </div>


                                <div class="cliente-deuda-total">

                                    <span>
                                        Debe
                                    </span>

                                    <strong>
                                        ${formatearPrecio(
                                            deudaCliente
                                        )}
                                    </strong>

                                </div>

                            </div>


                            <div class="cliente-deuda-ventas">

                                ${
                                    ventas
                                        .map(
                                            (venta) => `

                                                <div class="cliente-deuda-venta">


                                                    <div class="deuda-venta-superior">

                                                        <div>

                                                            <strong>
                                                                Venta #${venta.id}
                                                            </strong>

                                                            <span>
                                                                ${escaparHTML(
                                                                    formatearFechaHora(
                                                                        venta.created_at
                                                                    )
                                                                )}
                                                            </span>

                                                        </div>


                                                        <button
                                                            type="button"
                                                            class="agregar-pago-venta"
                                                            data-venta-id="${venta.id}"
                                                        >
                                                            Agregar pago
                                                        </button>

                                                    </div>


                                                    <div class="deuda-venta-numeros">


                                                        <div>

                                                            <span>
                                                                Total
                                                            </span>

                                                            <strong>
                                                                ${formatearPrecio(
                                                                    venta.total
                                                                )}
                                                            </strong>

                                                        </div>


                                                        <div>

                                                            <span>
                                                                Pagado
                                                            </span>

                                                            <strong>
                                                                ${formatearPrecio(
                                                                    venta.pagado
                                                                )}
                                                            </strong>

                                                        </div>


                                                        <div class="deuda-pendiente">

                                                            <span>
                                                                Pendiente
                                                            </span>

                                                            <strong>
                                                                ${formatearPrecio(
                                                                    venta.pendiente
                                                                )}
                                                            </strong>

                                                        </div>


                                                    </div>


                                                    ${
                                                        venta.pagos.length >
                                                        0
                                                            ? `

                                                                <div class="historial-pagos">

                                                                    <span class="historial-pagos-titulo">
                                                                        Pagos realizados
                                                                    </span>

                                                                    ${
                                                                        venta.pagos
                                                                            .map(
                                                                                (pago) => `

                                                                                    <div class="historial-pago-item">

                                                                                        <span>
                                                                                            ${escaparHTML(
                                                                                                formatearFechaHora(
                                                                                                    pago.created_at
                                                                                                )
                                                                                            )}
                                                                                        </span>

                                                                                        <span>
                                                                                            ${escaparHTML(
                                                                                                pago.metodo_pago
                                                                                            )}
                                                                                        </span>

                                                                                        <strong>
                                                                                            ${formatearPrecio(
                                                                                                pago.monto
                                                                                            )}
                                                                                        </strong>

                                                                                    </div>

                                                                                `
                                                                            )
                                                                            .join("")
                                                                    }

                                                                </div>

                                                            `
                                                            : ""
                                                    }


                                                </div>

                                            `
                                        )
                                        .join("")
                                }

                            </div>


                        </article>

                    `;

                }
            )
            .join("");

}


// =========================================================
// ABRIR MODAL DE PAGO
// =========================================================

function abrirAgregarPagoGestion(
    ventaId
) {

    const venta =
        cuentasCobrarGestion.find(
            (venta) =>
                Number(
                    venta.id
                ) ===
                Number(
                    ventaId
                )
        );


    if (!venta) {
        return;
    }


    const cliente =
        clientesGestion.find(
            (cliente) =>
                Number(
                    cliente.id
                ) ===
                Number(
                    venta.cliente_id
                )
        );


    ventaPagoSeleccionadaGestion =
        venta;


    pagoVentaInfo.textContent =
        `Venta #${venta.id} · ${
            cliente?.nombre ||
            "Cliente"
        }`;


    pagoSaldoActual.textContent =
        formatearPrecio(
            venta.pendiente
        );


    // Por defecto ponemos el saldo completo.
    // Si es pago parcial, solamente cambiás el monto.

    pagoMonto.value =
        Math.round(
            venta.pendiente
        );


    pagoMonto.max =
        venta.pendiente;


    pagoMetodo.value =
        "";


    pagoObservaciones.value =
        "";


    limpiarMensaje(
        mensajeAgregarPago
    );


    modalAgregarPago
        ?.classList.remove(
            "oculto"
        );


    setTimeout(
        () => {

            pagoMonto?.focus();

            pagoMonto?.select();

        },
        100
    );

}


// =========================================================
// CERRAR MODAL
// =========================================================

function cerrarAgregarPagoGestion() {

    ventaPagoSeleccionadaGestion =
        null;


    formAgregarPago?.reset();


    limpiarMensaje(
        mensajeAgregarPago
    );


    modalAgregarPago
        ?.classList.add(
            "oculto"
        );

}


// =========================================================
// CLICK AGREGAR PAGO
// =========================================================

clientesCobrarLista?.addEventListener(
    "click",
    (evento) => {

        const boton =
            evento.target.closest(
                ".agregar-pago-venta"
            );


        if (!boton) {
            return;
        }


        abrirAgregarPagoGestion(
            Number(
                boton.dataset.ventaId
            )
        );

    }
);


// =========================================================
// REGISTRAR PAGO
// =========================================================

formAgregarPago?.addEventListener(
    "submit",
    async (evento) => {

        evento.preventDefault();


        limpiarMensaje(
            mensajeAgregarPago
        );


        if (
            !ventaPagoSeleccionadaGestion
        ) {
            return;
        }


        const monto =
            Number(
                pagoMonto.value
            );


        const metodo =
            pagoMetodo.value;


        const observaciones =
            pagoObservaciones.value
                .trim() ||
            null;


        if (
            !Number.isFinite(
                monto
            ) ||
            monto <= 0
        ) {

            mostrarMensaje(
                mensajeAgregarPago,
                "Ingresá un monto válido."
            );

            return;

        }


        if (
            monto >
            ventaPagoSeleccionadaGestion.pendiente
        ) {

            mostrarMensaje(
                mensajeAgregarPago,
                "El pago no puede superar el saldo pendiente."
            );

            return;

        }


        if (!metodo) {

            mostrarMensaje(
                mensajeAgregarPago,
                "Elegí el medio de pago."
            );

            return;

        }


        botonGuardarPago.disabled =
            true;


        botonGuardarPago.textContent =
            "Registrando...";


        try {

            const ventaId =
                ventaPagoSeleccionadaGestion.id;


            const {
                data,
                error
            } =
                await supabaseClient.rpc(
                    "registrar_pago",
                    {

                        p_venta_id:
                            ventaId,

                        p_monto:
                            monto,

                        p_metodo_pago:
                            metodo,

                        p_observaciones:
                            observaciones

                    }
                );


            if (
                error
            ) {

                console.error(
                    "Error al registrar pago:",
                    error
                );


                mostrarMensaje(
                    mensajeAgregarPago,
                    error.message ||
                    "No se pudo registrar el pago."
                );

                return;

            }


            cerrarAgregarPagoGestion();


            await cargarClientesACobrarGestion();


            mostrarMensaje(
                mensajeClientesCobrar,
                `Pago #${data} registrado correctamente por ${formatearPrecio(monto)}.`,
                "exito"
            );

        } catch (
            error
        ) {

            console.error(
                "Error al registrar pago:",
                error
            );


            mostrarMensaje(
                mensajeAgregarPago,
                "No se pudo registrar el pago."
            );

        } finally {

            botonGuardarPago.disabled =
                false;


            botonGuardarPago.textContent =
                "Registrar pago";

        }

    }
);


// =========================================================
// CERRAR MODAL
// =========================================================

botonCerrarModalPago?.addEventListener(
    "click",
    cerrarAgregarPagoGestion
);


botonCancelarPago?.addEventListener(
    "click",
    cerrarAgregarPagoGestion
);


modalAgregarPago?.addEventListener(
    "click",
    (evento) => {

        if (
            evento.target ===
            modalAgregarPago
        ) {

            cerrarAgregarPagoGestion();

        }

    }
);


// =========================================================
// ACTUALIZAR CIERRE DE SECCIONES
// =========================================================

function cerrarSeccionesGestion() {

    seccionVenta?.classList.add(
        "oculto"
    );


    seccionStock?.classList.add(
        "oculto"
    );


    seccionMovimientos?.classList.add(
        "oculto"
    );


    seccionClientes?.classList.add(
        "oculto"
    );


    seccionClientesCobrar?.classList.add(
        "oculto"
    );

}


// =========================================================
// ABRIR CLIENTES A COBRAR
// =========================================================

async function abrirClientesACobrarGestion() {

    cerrarSeccionesGestion();


    seccionClientesCobrar
        ?.classList.remove(
            "oculto"
        );


    await cargarClientesACobrarGestion();


    setTimeout(
        () => {

            seccionClientesCobrar
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        },
        50
    );

}


// =========================================================
// BOTONES
// =========================================================

botonClientesCobrar?.addEventListener(
    "click",
    abrirClientesACobrarGestion
);


botonCerrarClientesCobrar
    ?.addEventListener(
        "click",
        () => {

            seccionClientesCobrar
                ?.classList.add(
                    "oculto"
                );

        }
    );
    // =========================================================
// DIFERENCIA DE STOCK ENTRE VENTA Y PRESUPUESTO
// =========================================================
//
// VENTA:
// - controla stock
// - no permite vender más de lo disponible
//
// PRESUPUESTO:
// - permite productos sin stock
// - permite presupuestar más unidades de las disponibles
//
// =========================================================


function obtenerCantidadOriginalVentaEditando(
    productoId
) {

    if (
        typeof ventaEditandoIdGestion ===
            "undefined" ||
        ventaEditandoIdGestion ===
            null
    ) {

        return 0;

    }


    const ventaOriginal =
        movimientosGestion.find(
            (venta) =>
                Number(venta.id) ===
                Number(ventaEditandoIdGestion)
        );


    if (!ventaOriginal) {
        return 0;
    }


    return (
        ventaOriginal.items || []
    )
        .filter(
            (item) =>
                Number(item.producto_id) ===
                Number(productoId)
        )
        .reduce(
            (total, item) =>
                total +
                Number(item.cantidad || 0),
            0
        );

}


// =========================================================
// STOCK DISPONIBLE REAL
// =========================================================

function obtenerStockDisponibleParaAgregarGestion(
    producto
) {

    const stockActual =
        Number(
            producto.stock
        ) || 0;


    const cantidadEnFormulario =
        obtenerCantidadPendienteProducto(
            producto.id
        );


    // Si estamos editando una venta,
    // las unidades originales ya habían sido
    // descontadas del stock.
    //
    // Por eso las volvemos a tener en cuenta
    // para calcular correctamente cuánto podemos dejar
    // finalmente en esa misma venta.

    const cantidadOriginal =
        obtenerCantidadOriginalVentaEditando(
            producto.id
        );


    return Math.max(
        0,
        stockActual +
        cantidadOriginal -
        cantidadEnFormulario
    );

}


// =========================================================
// AGREGAR PRODUCTO
// VENTA / EDICIÓN / PRESUPUESTO
// =========================================================

function agregarProductoVentaGestion(
    productoForzado = null,
    cantidadForzada = null,
    modoRapido = false
) {

    limpiarMensaje(
        mensajeItemVenta
    );


    const producto =
        productoForzado ||
        obtenerProductoVentaSeleccionado();


    if (!producto) {

        mostrarMensaje(
            mensajeItemVenta,
            "Elegí un producto."
        );

        return false;

    }


    const cantidad =
        cantidadForzada !== null
            ? Number(cantidadForzada)
            : Number(
                ventaCantidad?.value
            );


    if (
        !Number.isInteger(cantidad) ||
        cantidad <= 0
    ) {

        mostrarMensaje(
            mensajeItemVenta,
            "Ingresá una cantidad válida."
        );

        return false;

    }


    // =====================================================
    // ¿ESTAMOS HACIENDO UN PRESUPUESTO?
    // =====================================================

    const esPresupuesto =
        typeof modoPresupuestoGestion !==
            "undefined" &&
        modoPresupuestoGestion === true;


    // =====================================================
    // CONTROL DE STOCK
    //
    // SOLO PARA VENTAS.
    // LOS PRESUPUESTOS NO BLOQUEAN POR STOCK.
    // =====================================================

    if (!esPresupuesto) {

        if (
            producto.stock === null ||
            producto.stock === undefined
        ) {

            mostrarMensaje(
                mensajeItemVenta,
                "Este producto no tiene stock cargado."
            );

            return false;

        }


        const disponible =
            obtenerStockDisponibleParaAgregarGestion(
                producto
            );


        if (
            cantidad >
            disponible
        ) {

            mostrarMensaje(
                mensajeItemVenta,
                `Stock insuficiente. Disponible: ${disponible}.`
            );

            return false;

        }

    }


    // =====================================================
    // CATEGORÍA
    // =====================================================

    const categoria =
        obtenerCategoriaProducto(
            producto
        );


    if (!categoria) {

        mostrarMensaje(
            mensajeItemVenta,
            "No se pudo identificar la categoría del producto."
        );

        return false;

    }


    // =====================================================
    // PRECIO
    // =====================================================

    const esPersonalizado =
        !modoRapido &&
        ventaTipoPrecio?.value ===
            "personalizado";


    let precio =
        0;


    if (esPersonalizado) {

        precio =
            Number(
                ventaPrecioPersonalizado
                    ?.value
            );


        if (
            !Number.isFinite(precio) ||
            precio < 0 ||
            ventaPrecioPersonalizado
                ?.value === ""
        ) {

            mostrarMensaje(
                mensajeItemVenta,
                "Ingresá un precio personalizado válido."
            );

            return false;

        }

    } else {

        precio =
            obtenerPrecioAutomaticoProducto(
                producto,
                cantidad
            );

    }


    // =====================================================
    // SI YA ESTÁ AGREGADO, SUMAMOS CANTIDAD
    // =====================================================

    const itemExistente =
        itemsVentaActual.find(
            (item) => {

                if (
                    Number(
                        item.producto_id
                    ) !==
                    Number(
                        producto.id
                    )
                ) {

                    return false;

                }


                if (esPersonalizado) {

                    return (
                        item.tipo_precio ===
                            "personalizado" &&
                        Number(
                            item.precio_unitario
                        ) ===
                            Number(precio)
                    );

                }


                return (
                    item.tipo_precio ===
                    "automatico"
                );

            }
        );


    if (itemExistente) {

        itemExistente.cantidad +=
            cantidad;

    } else {

        itemsVentaActual.push({

            producto_id:
                Number(
                    producto.id
                ),

            slug:
                producto.slug,

            nombre:
                producto.nombre_mostrar,

            cantidad,

            categoria_clave:
                categoria.clave,

            tipo_precio:
                esPersonalizado
                    ? "personalizado"
                    : "automatico",

            precio_unitario:
                precio,

            precio_aplicado:
                esPersonalizado
                    ? "Personalizado"
                    : "Automático"

        });

    }


    // =====================================================
    // ACTUALIZAR PANTALLA
    // =====================================================

    renderizarItemsVenta();


    actualizarDatosProductoVenta();


    ventaCantidad.value =
        "1";


    ventaTipoPrecio.value =
        "automatico";


    ventaPrecioPersonalizado.value =
        "";


    actualizarPrecioVentaPreview();


    // =====================================================
    // MENSAJE
    // =====================================================

    if (esPresupuesto) {

        const stockActual =
            Number(
                producto.stock
            ) || 0;


        if (
            stockActual <= 0
        ) {

            mostrarMensaje(
                mensajeItemVenta,
                `${producto.nombre_mostrar} agregado al presupuesto. Actualmente está sin stock.`,
                "exito"
            );

        } else {

            mostrarMensaje(
                mensajeItemVenta,
                `${producto.nombre_mostrar} agregado al presupuesto.`,
                "exito"
            );

        }

    } else {

        mostrarMensaje(
            mensajeItemVenta,
            `${producto.nombre_mostrar} agregado.`,
            "exito"
        );

    }


    // =====================================================
    // VOLVER AL BUSCADOR
    // =====================================================

    if (
        modoRapido &&
        ventaBuscadorProducto
    ) {

        ventaBuscadorProducto.value =
            "";


        ventaResultadosBusqueda.innerHTML =
            "";


        ventaResultadosBusqueda
            .classList.add(
                "oculto"
            );


        setTimeout(
            () => {

                ventaBuscadorProducto.focus();

            },
            50
        );

    }


    return true;

}
// =========================================================
// PRESUPUESTOS
// =========================================================

let modoPresupuestoGestion = false;

let presupuestoEditandoIdGestion = null;

let presupuestosGestion = [];

let presupuestoConvirtiendoGestion = null;


// =========================================================
// BOTONES DEL PANEL
// =========================================================

const accionesPresupuestosGestion =
    document.querySelector(".acciones");


let botonCrearPresupuestoGestion =
    document.getElementById(
        "crear-presupuesto"
    );


if (
    accionesPresupuestosGestion &&
    !botonCrearPresupuestoGestion
) {

    botonCrearPresupuestoGestion =
        document.createElement(
            "button"
        );


    botonCrearPresupuestoGestion.type =
        "button";


    botonCrearPresupuestoGestion.id =
        "crear-presupuesto";


    botonCrearPresupuestoGestion.textContent =
        "Crear presupuesto";


    botonRegistrarVenta
        ?.insertAdjacentElement(
            "afterend",
            botonCrearPresupuestoGestion
        );

}



let botonVerPresupuestosGestion =
    document.getElementById(
        "ver-presupuestos"
    );


if (
    accionesPresupuestosGestion &&
    !botonVerPresupuestosGestion
) {

    botonVerPresupuestosGestion =
        document.createElement(
            "button"
        );


    botonVerPresupuestosGestion.type =
        "button";


    botonVerPresupuestosGestion.id =
        "ver-presupuestos";


    botonVerPresupuestosGestion.textContent =
        "Presupuestos";


    botonVerMovimientos
        ?.insertAdjacentElement(
            "afterend",
            botonVerPresupuestosGestion
        );

}


// =========================================================
// SECCIÓN PRESUPUESTOS
// =========================================================

let seccionPresupuestosGestion =
    document.getElementById(
        "seccion-presupuestos"
    );


if (
    !seccionPresupuestosGestion
) {

    seccionPresupuestosGestion =
        document.createElement(
            "section"
        );


    seccionPresupuestosGestion.id =
        "seccion-presupuestos";


    seccionPresupuestosGestion.className =
        "seccion-presupuestos oculto";


    seccionPresupuestosGestion.innerHTML = `

        <div class="presupuestos-encabezado">

            <div>

                <h2>
                    Presupuestos
                </h2>

                <p>
                    Presupuestos pendientes, convertidos y cancelados.
                </p>

            </div>


            <button
                type="button"
                id="cerrar-presupuestos"
                class="cerrar-presupuestos"
            >
                Cerrar
            </button>

        </div>


        <div class="presupuestos-barra">

            <button
                type="button"
                id="nuevo-presupuesto-desde-lista"
                class="nuevo-presupuesto"
            >
                + Nuevo presupuesto
            </button>

        </div>


        <p
            class="venta-mensaje"
            id="mensaje-presupuestos"
        ></p>


        <div
            id="presupuestos-lista"
            class="presupuestos-lista"
        >

            <p class="presupuestos-vacios">
                Cargando presupuestos...
            </p>

        </div>

    `;


    document
        .querySelector("main")
        ?.appendChild(
            seccionPresupuestosGestion
        );

}


const botonCerrarPresupuestosGestion =
    document.getElementById(
        "cerrar-presupuestos"
    );


const botonNuevoPresupuestoListaGestion =
    document.getElementById(
        "nuevo-presupuesto-desde-lista"
    );


const presupuestosListaGestion =
    document.getElementById(
        "presupuestos-lista"
    );


const mensajePresupuestosGestion =
    document.getElementById(
        "mensaje-presupuestos"
    );


// =========================================================
// AVISO EN EL FORMULARIO
// =========================================================

let avisoPresupuestoGestion =
    document.getElementById(
        "aviso-presupuesto"
    );


if (
    !avisoPresupuestoGestion &&
    ventaCliente
) {

    avisoPresupuestoGestion =
        document.createElement(
            "div"
        );


    avisoPresupuestoGestion.id =
        "aviso-presupuesto";


    avisoPresupuestoGestion.className =
        "presupuesto-aviso oculto";


    ventaCliente
        .closest(".campo")
        ?.insertAdjacentElement(
            "beforebegin",
            avisoPresupuestoGestion
        );

}


const tituloVentaPresupuestoGestion =
    seccionVenta?.querySelector(
        ".venta-encabezado h2"
    );


const descripcionVentaPresupuestoGestion =
    seccionVenta?.querySelector(
        ".venta-encabezado p"
    );


const campoEstadoCobroPresupuestoGestion =
    ventaEstadoCobro?.closest(
        ".campo"
    );


const resumenCobroPresupuestoGestion =
    ventaTotalPagado?.closest(
        ".venta-cobro-resumen"
    );


// =========================================================
// CARGAR PRESUPUESTOS
// =========================================================

async function cargarPresupuestosGestion() {

    if (
        !presupuestosListaGestion
    ) {
        return [];
    }


    presupuestosListaGestion.innerHTML = `
        <p class="presupuestos-vacios">
            Cargando presupuestos...
        </p>
    `;


    limpiarMensaje(
        mensajePresupuestosGestion
    );


    await cargarClientesGestion();


    const {
        data: presupuestosData,
        error: presupuestosError
    } =
        await supabaseClient
            .from("presupuestos")
            .select(`
                id,
                created_at,
                updated_at,
                cliente_id,
                total,
                observaciones,
                estado,
                convertido_venta_id,
                convertido_at,
                cancelado_at,
                motivo_cancelacion
            `)
            .order(
                "created_at",
                {
                    ascending: false
                }
            )
            .limit(100);


    if (
        presupuestosError
    ) {

        console.error(
            "Error al cargar presupuestos:",
            presupuestosError
        );


        presupuestosGestion =
            [];


        presupuestosListaGestion.innerHTML = `
            <p class="presupuestos-vacios">
                No se pudieron cargar los presupuestos.
            </p>
        `;


        return [];

    }


    const presupuestos =
        Array.isArray(
            presupuestosData
        )
            ? presupuestosData
            : [];


    if (
        presupuestos.length ===
        0
    ) {

        presupuestosGestion =
            [];


        renderizarPresupuestosGestion();

        return [];

    }


    const idsPresupuestos =
        presupuestos.map(
            (presupuesto) =>
                presupuesto.id
        );


    const {
        data: itemsData,
        error: itemsError
    } =
        await supabaseClient
            .from("presupuesto_items")
            .select(`
                id,
                presupuesto_id,
                producto_id,
                producto_slug,
                producto_nombre,
                cantidad,
                precio_unitario,
                subtotal
            `)
            .in(
                "presupuesto_id",
                idsPresupuestos
            )
            .order(
                "id",
                {
                    ascending: true
                }
            );


    if (
        itemsError
    ) {

        console.error(
            "Error al cargar productos de presupuestos:",
            itemsError
        );

    }


    const itemsPorPresupuesto =
        new Map();


    (
        Array.isArray(
            itemsData
        )
            ? itemsData
            : []
    ).forEach(
        (item) => {

            if (
                !itemsPorPresupuesto.has(
                    item.presupuesto_id
                )
            ) {

                itemsPorPresupuesto.set(
                    item.presupuesto_id,
                    []
                );

            }


            itemsPorPresupuesto
                .get(
                    item.presupuesto_id
                )
                .push(
                    item
                );

        }
    );


    presupuestosGestion =
        presupuestos.map(
            (presupuesto) => ({

                ...presupuesto,

                items:
                    itemsPorPresupuesto.get(
                        presupuesto.id
                    ) || []

            })
        );


    renderizarPresupuestosGestion();


    return presupuestosGestion;

}


// =========================================================
// RENDER PRESUPUESTOS
// =========================================================

function renderizarPresupuestosGestion() {

    if (
        !presupuestosListaGestion
    ) {
        return;
    }


    if (
        presupuestosGestion.length ===
        0
    ) {

        presupuestosListaGestion.innerHTML = `

            <div class="presupuestos-vacios">

                <strong>
                    Todavía no hay presupuestos
                </strong>

                <span>
                    Creá el primero desde “Nuevo presupuesto”.
                </span>

            </div>

        `;

        return;

    }


    presupuestosListaGestion.innerHTML =
        presupuestosGestion
            .map(
                (presupuesto) => {

                    const cliente =
                        clientesGestion.find(
                            (cliente) =>
                                Number(
                                    cliente.id
                                ) ===
                                Number(
                                    presupuesto.cliente_id
                                )
                        );


                    const estado =
                        presupuesto.estado ||
                        "pendiente";


                    let estadoTexto =
                        "Pendiente";


                    if (
                        estado ===
                        "convertido"
                    ) {

                        estadoTexto =
                            "Convertido";

                    }


                    if (
                        estado ===
                        "cancelado"
                    ) {

                        estadoTexto =
                            "Cancelado";

                    }


                    return `

                        <article
                            class="
                                presupuesto-card
                                presupuesto-${estado}
                            "
                        >

                            <div class="presupuesto-card-cabecera">

                                <div>

                                    <div class="presupuesto-titulo-linea">

                                        <h3>
                                            Presupuesto #${presupuesto.id}
                                        </h3>

                                        <span
                                            class="presupuesto-estado presupuesto-estado-${estado}"
                                        >
                                            ${estadoTexto}
                                        </span>

                                    </div>


                                    <span class="presupuesto-fecha">
                                        ${escaparHTML(
                                            formatearFechaHora(
                                                presupuesto.created_at
                                            )
                                        )}
                                    </span>

                                </div>


                                <strong>
                                    ${formatearPrecio(
                                        presupuesto.total
                                    )}
                                </strong>

                            </div>


                            <div class="presupuesto-datos">

                                <span>

                                    <b>
                                        Cliente:
                                    </b>

                                    ${
                                        cliente
                                            ? escaparHTML(
                                                cliente.nombre
                                            )
                                            : "Sin cliente"
                                    }

                                </span>


                                ${
                                    presupuesto.convertido_venta_id
                                        ? `
                                            <span>
                                                <b>
                                                    Venta:
                                                </b>

                                                #${presupuesto.convertido_venta_id}
                                            </span>
                                        `
                                        : ""
                                }


                                ${
                                    presupuesto.observaciones
                                        ? `
                                            <span>
                                                <b>
                                                    Observación:
                                                </b>

                                                ${escaparHTML(
                                                    presupuesto.observaciones
                                                )}
                                            </span>
                                        `
                                        : ""
                                }

                            </div>


                            <div class="presupuesto-items">

                                ${
                                    presupuesto.items
                                        .map(
                                            (item) => `

                                                <div class="presupuesto-item">

                                                    <span>
                                                        ${escaparHTML(
                                                            item.producto_nombre
                                                        )}
                                                    </span>


                                                    <span>
                                                        ${item.cantidad}
                                                        ×
                                                        ${formatearPrecio(
                                                            item.precio_unitario
                                                        )}
                                                    </span>


                                                    <strong>
                                                        ${formatearPrecio(
                                                            item.subtotal
                                                        )}
                                                    </strong>

                                                </div>

                                            `
                                        )
                                        .join("")
                                }

                            </div>


                            ${
                                estado ===
                                "pendiente"
                                    ? `

                                        <div class="presupuesto-acciones">

                                            <button
                                                type="button"
                                                class="editar-presupuesto"
                                                data-presupuesto-id="${presupuesto.id}"
                                            >
                                                Editar
                                            </button>


                                            <button
                                                type="button"
                                                class="convertir-presupuesto"
                                                data-presupuesto-id="${presupuesto.id}"
                                            >
                                                Transformar en venta
                                            </button>


                                            <button
                                                type="button"
                                                class="cancelar-presupuesto"
                                                data-presupuesto-id="${presupuesto.id}"
                                            >
                                                Cancelar
                                            </button>

                                        </div>

                                    `
                                    : ""
                            }

                        </article>

                    `;

                }
            )
            .join("");

}


// =========================================================
// PREPARAR PRODUCTOS DE UN PRESUPUESTO
// =========================================================

function cargarItemsPresupuestoEnFormulario(
    presupuesto
) {

    itemsVentaActual =
        (
            presupuesto?.items ||
            []
        )
            .map(
                (item) => {

                    const producto =
                        productosGestion.find(
                            (producto) =>
                                Number(
                                    producto.id
                                ) ===
                                Number(
                                    item.producto_id
                                )
                        );


                    const categoria =
                        producto
                            ? obtenerCategoriaProducto(
                                producto
                            )
                            : null;


                    return {

                        producto_id:
                            Number(
                                item.producto_id
                            ),

                        slug:
                            item.producto_slug,

                        nombre:
                            item.producto_nombre,

                        cantidad:
                            Number(
                                item.cantidad
                            ),

                        categoria_clave:
                            categoria?.clave ||
                            "",

                        // Conservamos el precio cotizado.
                        tipo_precio:
                            "personalizado",

                        precio_unitario:
                            Number(
                                item.precio_unitario
                            ),

                        precio_aplicado:
                            "Cotizado"

                    };

                }
            );

}


// =========================================================
// ABRIR FORMULARIO PRESUPUESTO
// =========================================================

async function abrirFormularioPresupuestoGestion(
    presupuestoId = null
) {

    if (
        typeof ventaEditandoIdGestion !==
            "undefined" &&
        ventaEditandoIdGestion !==
            null
    ) {

        salirModoEdicionVentaGestion(
            true
        );

    }


    await cargarProductosGestion();

    await cargarClientesGestion();


    modoPresupuestoGestion =
        true;


    presupuestoEditandoIdGestion =
        presupuestoId
            ? Number(
                presupuestoId
            )
            : null;


    const presupuesto =
        presupuestoEditandoIdGestion
            ? presupuestosGestion.find(
                (presupuesto) =>
                    Number(
                        presupuesto.id
                    ) ===
                    Number(
                        presupuestoEditandoIdGestion
                    )
            )
            : null;


    cerrarSeccionesGestion();


    seccionVenta
        ?.classList.remove(
            "oculto"
        );


    if (
        presupuesto
    ) {

        tituloVentaPresupuestoGestion.textContent =
            `Editar presupuesto #${presupuesto.id}`;


        descripcionVentaPresupuestoGestion.textContent =
            "Los cambios no afectan el stock hasta transformar el presupuesto en venta.";


        botonConfirmarVenta.textContent =
            "Guardar presupuesto";


        cargarItemsPresupuestoEnFormulario(
            presupuesto
        );


        ventaObservaciones.value =
            presupuesto.observaciones ||
            "";


        cargarSelectClientesVenta();


        ventaCliente.value =
            presupuesto.cliente_id
                ? String(
                    presupuesto.cliente_id
                )
                : "";

    } else {

        tituloVentaPresupuestoGestion.textContent =
            "Crear presupuesto";


        descripcionVentaPresupuestoGestion.textContent =
            "Armá el presupuesto sin descontar stock. El stock se descuenta recién al transformarlo en venta.";


        botonConfirmarVenta.textContent =
            "Guardar presupuesto";


        itemsVentaActual =
            [];


        ventaObservaciones.value =
            "";


        cargarSelectClientesVenta();


        ventaCliente.value =
            "";

    }


    ventaCategoria.value =
        "";


    cargarProductosCategoriaVenta();


    ventaCantidad.value =
        "1";


    ventaTipoPrecio.value =
        "automatico";


    ventaPrecioPersonalizado.value =
        "";


    actualizarPrecioVentaPreview();


    campoEstadoCobroPresupuestoGestion
        ?.classList.add(
            "oculto"
        );


    contenedorPagoInicial
        ?.classList.add(
            "oculto"
        );


    contenedorMetodoPago
        ?.classList.add(
            "oculto"
        );


    resumenCobroPresupuestoGestion
        ?.classList.add(
            "oculto"
        );


    ventaClienteAyuda.textContent =
        "El cliente es opcional mientras sea presupuesto.";


    avisoPresupuestoGestion
        ?.classList.remove(
            "oculto"
        );


    avisoPresupuestoGestion.innerHTML = `

        <strong>
            PRESUPUESTO
        </strong>

        <span>
            No modifica el stock.
        </span>

        <span>
            Los precios guardados se conservan al transformarlo en venta.
        </span>

    `;


    limpiarMensaje(
        mensajeItemVenta
    );


    limpiarMensaje(
        mensajeConfirmarVenta
    );


    renderizarItemsVenta();


    setTimeout(
        () => {

            seccionVenta
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });


            ventaBuscadorProducto
                ?.focus();

        },
        100
    );

}


// =========================================================
// SALIR DEL MODO PRESUPUESTO
// =========================================================

function salirModoPresupuestoGestion(
    limpiar = true
) {

    if (
        !modoPresupuestoGestion
    ) {
        return;
    }


    modoPresupuestoGestion =
        false;


    presupuestoEditandoIdGestion =
        null;


    tituloVentaPresupuestoGestion.textContent =
        "Registrar venta";


    descripcionVentaPresupuestoGestion.textContent =
        "Agregá todos los productos de la venta y confirmá al final.";


    botonConfirmarVenta.textContent =
        "Confirmar venta";


    avisoPresupuestoGestion
        ?.classList.add(
            "oculto"
        );


    campoEstadoCobroPresupuestoGestion
        ?.classList.remove(
            "oculto"
        );


    resumenCobroPresupuestoGestion
        ?.classList.remove(
            "oculto"
        );


    ventaClienteAyuda.textContent =
        "Opcional si la venta queda totalmente cobrada.";


    ventaEstadoCobro.value =
        "cobrado";


    ventaPagoInicial.value =
        "";


    ventaMetodoPago.value =
        "";


    actualizarEstadoCobroUI();


    if (
        limpiar
    ) {

        itemsVentaActual =
            [];


        ventaCategoria.value =
            "";


        cargarProductosCategoriaVenta();


        ventaCantidad.value =
            "1";


        ventaTipoPrecio.value =
            "automatico";


        ventaPrecioPersonalizado.value =
            "";


        ventaCliente.value =
            "";


        ventaObservaciones.value =
            "";


        if (
            ventaBuscadorProducto
        ) {

            ventaBuscadorProducto.value =
                "";

        }


        renderizarItemsVenta();

    }

}


// =========================================================
// GUARDAR PRESUPUESTO
// =========================================================

botonConfirmarVenta?.addEventListener(
    "click",
    async (evento) => {

        if (
            !modoPresupuestoGestion
        ) {

            return;

        }


        evento.preventDefault();

        evento.stopImmediatePropagation();


        limpiarMensaje(
            mensajeConfirmarVenta
        );


        if (
            itemsVentaActual.length ===
            0
        ) {

            mostrarMensaje(
                mensajeConfirmarVenta,
                "Agregá al menos un producto al presupuesto."
            );

            return;

        }


        const clienteId =
            ventaCliente?.value
                ? Number(
                    ventaCliente.value
                )
                : null;


        const itemsParaSupabase =
            itemsVentaActual.map(
                (item) => ({

                    producto_id:
                        item.producto_id,

                    nombre:
                        item.nombre,

                    cantidad:
                        item.cantidad,

                    precio_unitario:
                        item.precio_unitario

                })
            );


        botonConfirmarVenta.disabled =
            true;


        botonConfirmarVenta.textContent =
            "Guardando...";


        try {

            let resultado;


            if (
                presupuestoEditandoIdGestion
            ) {

                resultado =
                    await supabaseClient.rpc(
                        "editar_presupuesto",
                        {

                            p_presupuesto_id:
                                presupuestoEditandoIdGestion,

                            p_items:
                                itemsParaSupabase,

                            p_cliente_id:
                                clienteId,

                            p_observaciones:
                                ventaObservaciones
                                    ?.value
                                    ?.trim() ||
                                null

                        }
                    );

            } else {

                resultado =
                    await supabaseClient.rpc(
                        "crear_presupuesto",
                        {

                            p_items:
                                itemsParaSupabase,

                            p_cliente_id:
                                clienteId,

                            p_observaciones:
                                ventaObservaciones
                                    ?.value
                                    ?.trim() ||
                                null

                        }
                    );

            }


            const {
                data,
                error
            } =
                resultado;


            if (
                error
            ) {

                console.error(
                    "Error al guardar presupuesto:",
                    error
                );


                mostrarMensaje(
                    mensajeConfirmarVenta,
                    error.message ||
                    "No se pudo guardar el presupuesto."
                );

                return;

            }


            salirModoPresupuestoGestion(
                true
            );


            seccionVenta
                ?.classList.add(
                    "oculto"
                );


            seccionPresupuestosGestion
                ?.classList.remove(
                    "oculto"
                );


            await cargarPresupuestosGestion();


            mostrarMensaje(
                mensajePresupuestosGestion,
                `Presupuesto #${data} guardado correctamente. El stock no fue modificado.`,
                "exito"
            );

        } catch (
            error
        ) {

            console.error(
                error
            );


            mostrarMensaje(
                mensajeConfirmarVenta,
                "No se pudo guardar el presupuesto."
            );

        } finally {

            botonConfirmarVenta.disabled =
                false;


            botonConfirmarVenta.textContent =
                modoPresupuestoGestion
                    ? "Guardar presupuesto"
                    : "Confirmar venta";

        }

    },
    true
);


// =========================================================
// CANCELAR PRESUPUESTO
// =========================================================

async function cancelarPresupuestoGestion(
    presupuestoId
) {

    const confirmar =
        window.confirm(
            `¿Cancelar el presupuesto #${presupuestoId}?\n\nNo se modificará el stock.`
        );


    if (
        !confirmar
    ) {
        return;
    }


    const {
        data,
        error
    } =
        await supabaseClient.rpc(
            "cancelar_presupuesto",
            {

                p_presupuesto_id:
                    presupuestoId,

                p_motivo:
                    null

            }
        );


    if (
        error
    ) {

        console.error(
            error
        );


        mostrarMensaje(
            mensajePresupuestosGestion,
            error.message ||
            "No se pudo cancelar el presupuesto."
        );


        return;

    }


    await cargarPresupuestosGestion();


    mostrarMensaje(
        mensajePresupuestosGestion,
        `Presupuesto #${data} cancelado.`,
        "exito"
    );

}


// =========================================================
// MODAL TRANSFORMAR EN VENTA
// =========================================================

if (
    !document.getElementById(
        "modal-convertir-presupuesto"
    )
) {

    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "modal-convertir-presupuesto";


    modal.className =
        "modal-presupuesto oculto";


    modal.innerHTML = `

        <div class="modal-presupuesto-contenido">

            <div class="modal-presupuesto-encabezado">

                <div>

                    <h3>
                        Transformar en venta
                    </h3>

                    <p id="convertir-presupuesto-info">
                    </p>

                </div>


                <button
                    type="button"
                    id="cerrar-convertir-presupuesto"
                >
                    ×
                </button>

            </div>


            <div class="convertir-total">

                <span>
                    Total
                </span>

                <strong id="convertir-presupuesto-total">
                    $ 0
                </strong>

            </div>


            <form id="form-convertir-presupuesto">


                <div class="campo">

                    <label for="convertir-cliente">
                        Cliente
                    </label>

                    <select id="convertir-cliente">

                        <option value="">
                            Sin cliente
                        </option>

                    </select>

                </div>


                <div class="campo">

                    <label for="convertir-estado">
                        Estado del cobro
                    </label>

                    <select id="convertir-estado">

                        <option value="cobrado">
                            Cobrado
                        </option>

                        <option value="parcial">
                            Pago parcial
                        </option>

                        <option value="no-cobrado">
                            No cobrado
                        </option>

                    </select>

                </div>


                <div
                    class="campo oculto"
                    id="convertir-contenedor-pago"
                >

                    <label for="convertir-pago">
                        Pagó ahora
                    </label>

                    <input
                        type="number"
                        id="convertir-pago"
                        min="1"
                        step="1"
                    >

                </div>


                <div
                    class="campo"
                    id="convertir-contenedor-metodo"
                >

                    <label for="convertir-metodo">
                        Medio de pago
                    </label>

                    <select id="convertir-metodo">

                        <option value="">
                            Seleccionar
                        </option>

                        <option value="Efectivo">
                            Efectivo
                        </option>

                        <option value="Transferencia">
                            Transferencia
                        </option>

                        <option value="Mercado Pago">
                            Mercado Pago
                        </option>

                        <option value="Tarjeta">
                            Tarjeta
                        </option>

                        <option value="Dólares">
                            Dólares
                        </option>

                        <option value="USDT">
                            USDT
                        </option>

                        <option value="Otro">
                            Otro
                        </option>

                    </select>

                </div>


                <div class="convertir-resumen">

                    <div>

                        <span>
                            Pagado
                        </span>

                        <strong id="convertir-pagado">
                            $ 0
                        </strong>

                    </div>


                    <div>

                        <span>
                            Pendiente
                        </span>

                        <strong id="convertir-pendiente">
                            $ 0
                        </strong>

                    </div>

                </div>


                <button
                    type="submit"
                    id="confirmar-conversion-presupuesto"
                >
                    Transformar en venta
                </button>


                <p
                    class="venta-mensaje"
                    id="mensaje-convertir-presupuesto"
                ></p>

            </form>

        </div>

    `;


    document.body.appendChild(
        modal
    );

}


const modalConvertirPresupuestoGestion =
    document.getElementById(
        "modal-convertir-presupuesto"
    );


const convertirPresupuestoInfoGestion =
    document.getElementById(
        "convertir-presupuesto-info"
    );


const convertirPresupuestoTotalGestion =
    document.getElementById(
        "convertir-presupuesto-total"
    );


const convertirClienteGestion =
    document.getElementById(
        "convertir-cliente"
    );


const convertirEstadoGestion =
    document.getElementById(
        "convertir-estado"
    );


const convertirContenedorPagoGestion =
    document.getElementById(
        "convertir-contenedor-pago"
    );


const convertirPagoGestion =
    document.getElementById(
        "convertir-pago"
    );


const convertirContenedorMetodoGestion =
    document.getElementById(
        "convertir-contenedor-metodo"
    );


const convertirMetodoGestion =
    document.getElementById(
        "convertir-metodo"
    );


const convertirPagadoGestion =
    document.getElementById(
        "convertir-pagado"
    );


const convertirPendienteGestion =
    document.getElementById(
        "convertir-pendiente"
    );


const formConvertirPresupuestoGestion =
    document.getElementById(
        "form-convertir-presupuesto"
    );


const mensajeConvertirPresupuestoGestion =
    document.getElementById(
        "mensaje-convertir-presupuesto"
    );


const botonConfirmarConversionGestion =
    document.getElementById(
        "confirmar-conversion-presupuesto"
    );


const botonCerrarConversionGestion =
    document.getElementById(
        "cerrar-convertir-presupuesto"
    );


// =========================================================
// RESUMEN CONVERSIÓN
// =========================================================

function actualizarConversionPresupuestoGestion() {

    if (
        !presupuestoConvirtiendoGestion
    ) {
        return;
    }


    const total =
        Number(
            presupuestoConvirtiendoGestion.total
        ) || 0;


    const estado =
        convertirEstadoGestion.value;


    let pagado =
        0;


    if (
        estado ===
        "cobrado"
    ) {

        pagado =
            total;


        convertirContenedorPagoGestion
            .classList.add(
                "oculto"
            );


        convertirContenedorMetodoGestion
            .classList.remove(
                "oculto"
            );

    }


    if (
        estado ===
        "parcial"
    ) {

        pagado =
            Number(
                convertirPagoGestion.value
            ) || 0;


        convertirContenedorPagoGestion
            .classList.remove(
                "oculto"
            );


        convertirContenedorMetodoGestion
            .classList.remove(
                "oculto"
            );

    }


    if (
        estado ===
        "no-cobrado"
    ) {

        pagado =
            0;


        convertirPagoGestion.value =
            "";


        convertirMetodoGestion.value =
            "";


        convertirContenedorPagoGestion
            .classList.add(
                "oculto"
            );


        convertirContenedorMetodoGestion
            .classList.add(
                "oculto"
            );

    }


    convertirPagadoGestion.textContent =
        formatearPrecio(
            pagado
        );


    convertirPendienteGestion.textContent =
        formatearPrecio(
            Math.max(
                0,
                total - pagado
            )
        );

}


// =========================================================
// ABRIR CONVERSIÓN
// =========================================================

async function abrirConversionPresupuestoGestion(
    presupuestoId
) {

    await cargarClientesGestion();


    const presupuesto =
        presupuestosGestion.find(
            (presupuesto) =>
                Number(
                    presupuesto.id
                ) ===
                Number(
                    presupuestoId
                )
        );


    if (
        !presupuesto
    ) {
        return;
    }


    presupuestoConvirtiendoGestion =
        presupuesto;


    convertirPresupuestoInfoGestion.textContent =
        `Presupuesto #${presupuesto.id}`;


    convertirPresupuestoTotalGestion.textContent =
        formatearPrecio(
            presupuesto.total
        );


    convertirClienteGestion.innerHTML = `

        <option value="">
            Sin cliente
        </option>

        ${
            clientesGestion
                .filter(
                    (cliente) =>
                        cliente.activo !==
                        false
                )
                .map(
                    (cliente) => `

                        <option value="${cliente.id}">
                            ${escaparHTML(
                                cliente.nombre
                            )}
                        </option>

                    `
                )
                .join("")
        }

    `;


    convertirClienteGestion.value =
        presupuesto.cliente_id
            ? String(
                presupuesto.cliente_id
            )
            : "";


    convertirEstadoGestion.value =
        "cobrado";


    convertirPagoGestion.value =
        "";


    convertirMetodoGestion.value =
        "";


    limpiarMensaje(
        mensajeConvertirPresupuestoGestion
    );


    modalConvertirPresupuestoGestion
        .classList.remove(
            "oculto"
        );


    actualizarConversionPresupuestoGestion();

}


// =========================================================
// CERRAR CONVERSIÓN
// =========================================================

function cerrarConversionPresupuestoGestion() {

    presupuestoConvirtiendoGestion =
        null;


    modalConvertirPresupuestoGestion
        ?.classList.add(
            "oculto"
        );


    formConvertirPresupuestoGestion
        ?.reset();


    limpiarMensaje(
        mensajeConvertirPresupuestoGestion
    );

}


// =========================================================
// CONVERTIR PRESUPUESTO
// =========================================================

formConvertirPresupuestoGestion
    ?.addEventListener(
        "submit",
        async (evento) => {

            evento.preventDefault();


            if (
                !presupuestoConvirtiendoGestion
            ) {
                return;
            }


            limpiarMensaje(
                mensajeConvertirPresupuestoGestion
            );


            const presupuesto =
                presupuestoConvirtiendoGestion;


            const total =
                Number(
                    presupuesto.total
                ) || 0;


            const clienteId =
                convertirClienteGestion.value
                    ? Number(
                        convertirClienteGestion.value
                    )
                    : null;


            const estado =
                convertirEstadoGestion.value;


            let pagoInicial =
                0;


            let metodo =
                null;


            if (
                estado ===
                "cobrado"
            ) {

                pagoInicial =
                    total;


                metodo =
                    convertirMetodoGestion.value;


                if (
                    !metodo
                ) {

                    mostrarMensaje(
                        mensajeConvertirPresupuestoGestion,
                        "Elegí el medio de pago."
                    );

                    return;

                }

            }


            if (
                estado ===
                "parcial"
            ) {

                if (
                    !clienteId
                ) {

                    mostrarMensaje(
                        mensajeConvertirPresupuestoGestion,
                        "Para dejar saldo pendiente seleccioná un cliente."
                    );

                    return;

                }


                pagoInicial =
                    Number(
                        convertirPagoGestion.value
                    );


                if (
                    !Number.isFinite(
                        pagoInicial
                    ) ||
                    pagoInicial <= 0 ||
                    pagoInicial >= total
                ) {

                    mostrarMensaje(
                        mensajeConvertirPresupuestoGestion,
                        "Ingresá un pago parcial menor al total."
                    );

                    return;

                }


                metodo =
                    convertirMetodoGestion.value;


                if (
                    !metodo
                ) {

                    mostrarMensaje(
                        mensajeConvertirPresupuestoGestion,
                        "Elegí el medio de pago."
                    );

                    return;

                }

            }


            if (
                estado ===
                "no-cobrado"
            ) {

                if (
                    !clienteId
                ) {

                    mostrarMensaje(
                        mensajeConvertirPresupuestoGestion,
                        "Para dejar la venta no cobrada seleccioná un cliente."
                    );

                    return;

                }


                pagoInicial =
                    0;


                metodo =
                    null;

            }


            botonConfirmarConversionGestion.disabled =
                true;


            botonConfirmarConversionGestion.textContent =
                "Transformando...";


            try {

                // Si se eligió o cambió cliente,
                // actualizamos primero el presupuesto.

                if (
                    Number(
                        presupuesto.cliente_id ||
                        0
                    ) !==
                    Number(
                        clienteId ||
                        0
                    )
                ) {

                    const itemsPresupuesto =
                        presupuesto.items.map(
                            (item) => ({

                                producto_id:
                                    item.producto_id,

                                nombre:
                                    item.producto_nombre,

                                cantidad:
                                    item.cantidad,

                                precio_unitario:
                                    item.precio_unitario

                            })
                        );


                    const {
                        error: errorCliente
                    } =
                        await supabaseClient.rpc(
                            "editar_presupuesto",
                            {

                                p_presupuesto_id:
                                    presupuesto.id,

                                p_items:
                                    itemsPresupuesto,

                                p_cliente_id:
                                    clienteId,

                                p_observaciones:
                                    presupuesto.observaciones ||
                                    null

                            }
                        );


                    if (
                        errorCliente
                    ) {

                        throw errorCliente;

                    }

                }


                const {
                    data,
                    error
                } =
                    await supabaseClient.rpc(
                        "convertir_presupuesto_a_venta",
                        {

                            p_presupuesto_id:
                                presupuesto.id,

                            p_pago_inicial:
                                pagoInicial,

                            p_metodo_pago:
                                metodo,

                            p_observaciones:
                                null

                        }
                    );


                if (
                    error
                ) {

                    throw error;

                }


                cerrarConversionPresupuestoGestion();


                await cargarProductosGestion();

                renderizarStock();


                await cargarPresupuestosGestion();


                mostrarMensaje(
                    mensajePresupuestosGestion,
                    `Presupuesto #${presupuesto.id} transformado correctamente en Venta #${data}. Stock actualizado.`,
                    "exito"
                );

            } catch (
                error
            ) {

                console.error(
                    error
                );


                mostrarMensaje(
                    mensajeConvertirPresupuestoGestion,
                    error.message ||
                    "No se pudo transformar el presupuesto."
                );

            } finally {

                botonConfirmarConversionGestion.disabled =
                    false;


                botonConfirmarConversionGestion.textContent =
                    "Transformar en venta";

            }

        }
    );


// =========================================================
// EVENTOS MODAL CONVERSIÓN
// =========================================================

convertirEstadoGestion
    ?.addEventListener(
        "change",
        actualizarConversionPresupuestoGestion
    );


convertirPagoGestion
    ?.addEventListener(
        "input",
        actualizarConversionPresupuestoGestion
    );


botonCerrarConversionGestion
    ?.addEventListener(
        "click",
        cerrarConversionPresupuestoGestion
    );


modalConvertirPresupuestoGestion
    ?.addEventListener(
        "click",
        (evento) => {

            if (
                evento.target ===
                modalConvertirPresupuestoGestion
            ) {

                cerrarConversionPresupuestoGestion();

            }

        }
    );


// =========================================================
// CLICS EN LISTADO
// =========================================================

presupuestosListaGestion
    ?.addEventListener(
        "click",
        async (evento) => {

            const botonEditar =
                evento.target.closest(
                    ".editar-presupuesto"
                );


            if (
                botonEditar
            ) {

                await abrirFormularioPresupuestoGestion(
                    Number(
                        botonEditar.dataset.presupuestoId
                    )
                );


                return;

            }


            const botonConvertir =
                evento.target.closest(
                    ".convertir-presupuesto"
                );


            if (
                botonConvertir
            ) {

                await abrirConversionPresupuestoGestion(
                    Number(
                        botonConvertir.dataset.presupuestoId
                    )
                );


                return;

            }


            const botonCancelar =
                evento.target.closest(
                    ".cancelar-presupuesto"
                );


            if (
                botonCancelar
            ) {

                await cancelarPresupuestoGestion(
                    Number(
                        botonCancelar.dataset.presupuestoId
                    )
                );

            }

        }
    );


// =========================================================
// CERRAR SECCIONES
// =========================================================

function cerrarSeccionesGestion() {

    seccionVenta?.classList.add(
        "oculto"
    );


    seccionStock?.classList.add(
        "oculto"
    );


    seccionMovimientos?.classList.add(
        "oculto"
    );


    seccionClientes?.classList.add(
        "oculto"
    );


    seccionClientesCobrar?.classList.add(
        "oculto"
    );


    seccionPresupuestosGestion?.classList.add(
        "oculto"
    );

}


// =========================================================
// ABRIR LISTA DE PRESUPUESTOS
// =========================================================

async function abrirPresupuestosGestion() {

    if (
        modoPresupuestoGestion
    ) {

        salirModoPresupuestoGestion(
            true
        );

    }


    cerrarSeccionesGestion();


    seccionPresupuestosGestion
        ?.classList.remove(
            "oculto"
        );


    await cargarPresupuestosGestion();


    setTimeout(
        () => {

            seccionPresupuestosGestion
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        },
        50
    );

}


// =========================================================
// BOTONES
// =========================================================

botonCrearPresupuestoGestion
    ?.addEventListener(
        "click",
        async () => {

            await abrirFormularioPresupuestoGestion();

        }
    );


botonNuevoPresupuestoListaGestion
    ?.addEventListener(
        "click",
        async () => {

            await abrirFormularioPresupuestoGestion();

        }
    );


botonVerPresupuestosGestion
    ?.addEventListener(
        "click",
        abrirPresupuestosGestion
    );


botonCerrarPresupuestosGestion
    ?.addEventListener(
        "click",
        () => {

            seccionPresupuestosGestion
                ?.classList.add(
                    "oculto"
                );

        }
    );


// =========================================================
// CERRAR MODO PRESUPUESTO AL IR A OTRA SECCIÓN
// =========================================================

botonRegistrarVenta
    ?.addEventListener(
        "click",
        () => {

            if (
                modoPresupuestoGestion
            ) {

                salirModoPresupuestoGestion(
                    true
                );

            }

        },
        true
    );


[
    botonVerStock,
    botonVerMovimientos,
    botonVerClientes,
    botonClientesCobrar,
    botonRegistrarReposicion
]
    .filter(Boolean)
    .forEach(
        (boton) => {

            boton.addEventListener(
                "click",
                () => {

                    if (
                        modoPresupuestoGestion
                    ) {

                        salirModoPresupuestoGestion(
                            true
                        );

                    }

                },
                true
            );

        }
    );


botonCerrarVenta
    ?.addEventListener(
        "click",
        () => {

            if (
                modoPresupuestoGestion
            ) {

                salirModoPresupuestoGestion(
                    true
                );

            }

        },
        true
    );
    // =========================================================
// NOMBRES COMPLETOS PARA GESTIÓN
// =========================================================
//
// Esto NO modifica el nombre de los productos en la web.
// Solamente mejora cómo aparecen dentro del sistema:
//
// - Ventas
// - Presupuestos
// - Movimientos
// - Buscador
// - Stock
//
// =========================================================


// =========================================================
// EXTRAER ML DE UN TEXTO
// =========================================================

function extraerMlGestion(
    valor
) {

    const texto =
        String(
            valor || ""
        );


    const coincidencia =
        texto.match(
            /(\d+(?:[.,]\d+)?)\s*ml\b/i
        );


    if (
        !coincidencia
    ) {

        return "";

    }


    const numero =
        coincidencia[1]
            .replace(
                ",",
                "."
            );


    return `${numero} ml`;

}


// =========================================================
// OBTENER PRESENTACIÓN DEL PRODUCTO
// =========================================================

function obtenerPresentacionProductoGestion(
    productoSupabase,
    productoLocal
) {

    const categoria =
        productoLocal?.categoria ||
        "";


    const linea =
        productoLocal?.linea ||
        "";


    // =====================================================
    // DECANTS
    // =====================================================

    if (
        categoria ===
        "decants"
    ) {

        return "Decant 5 ml";

    }


    // =====================================================
    // MAISON ALHAMBRA 30 ML
    // =====================================================

    if (
        categoria ===
        "maison-30ml"
    ) {

        return "Perfume 30 ml";

    }


    // =====================================================
    // INSPIRACIONES 60 ML
    // =====================================================

    if (
        categoria ===
        "inspiraciones-disenador"
    ) {

        return "Perfume 60 ml";

    }


    // =====================================================
    // PERFUMES ÁRABES
    // =====================================================

    if (
        categoria ===
        "perfumes-grandes"
    ) {

        const posiblesTextos = [

            productoLocal?.presentacion,

            productoSupabase?.presentacion,

            productoLocal?.descripcion,

            productoSupabase?.descripcion,

            productoLocal?.nombre,

            productoSupabase?.nombre

        ];


        let mlEncontrados =
            "";


        for (
            const texto of
            posiblesTextos
        ) {

            mlEncontrados =
                extraerMlGestion(
                    texto
                );


            if (
                mlEncontrados
            ) {

                break;

            }

        }


        if (
            mlEncontrados
        ) {

            return `Perfume ${mlEncontrados}`;

        }


        return "Perfume";

    }


    // =====================================================
    // CUALQUIER OTRA CATEGORÍA
    // =====================================================

    const mlGenericos =
        extraerMlGestion(
            productoLocal?.presentacion ||
            productoSupabase?.presentacion ||
            ""
        );


    if (
        mlGenericos
    ) {

        return mlGenericos;

    }


    return "";

}


// =========================================================
// ARMAR NOMBRE COMPLETO
// =========================================================

function obtenerNombreCompletoGestion(
    productoSupabase,
    productoLocal
) {

    const nombreBase =
        productoLocal?.nombre ||
        productoSupabase?.slug ||
        "Producto";


    const presentacion =
        obtenerPresentacionProductoGestion(
            productoSupabase,
            productoLocal
        );


    if (
        !presentacion
    ) {

        return nombreBase;

    }


    // Evitamos duplicar si el nombre
    // ya trae la presentación.

    const nombreNormalizado =
        normalizarBusquedaProducto(
            nombreBase
        );


    const presentacionNormalizada =
        normalizarBusquedaProducto(
            presentacion
        );


    if (
        nombreNormalizado.includes(
            presentacionNormalizada
        )
    ) {

        return nombreBase;

    }


    return `${nombreBase} — ${presentacion}`;

}


// =========================================================
// RECARGAR PRODUCTOS DE GESTIÓN
// CON NOMBRE COMPLETO
// =========================================================

async function cargarProductosGestion() {

    const {
        data,
        error
    } =
        await supabaseClient
            .from("productos")
            .select("*");


    if (
        error
    ) {

        console.error(
            "Error al cargar productos:",
            error
        );


        productosGestion =
            [];


        return [];

    }


    productosGestion =
        (
            Array.isArray(data)
                ? data
                : []
        )
            .map(
                (
                    productoSupabase
                ) => {

                    const productoLocal =
                        productosLocalesPorId.get(
                            productoSupabase.slug
                        );


                    const nombreCompleto =
                        obtenerNombreCompletoGestion(
                            productoSupabase,
                            productoLocal
                        );


                    return {

                        ...productoSupabase,

                        nombre_mostrar:
                            nombreCompleto,

                        marca_mostrar:
                            productoLocal?.marca ||
                            "",

                        categoria_mostrar:
                            productoLocal?.categoria ||
                            "sin-categoria",

                        linea_mostrar:
                            productoLocal?.linea ||
                            "",

                        tipo_mostrar:
                            productoLocal?.tipo ||
                            "",

                        presentacion_mostrar:
                            obtenerPresentacionProductoGestion(
                                productoSupabase,
                                productoLocal
                            )

                    };

                }
            );


    return productosGestion;

}
// =========================================================
// NUMERACIÓN REAL + ELIMINAR CANCELADOS + SIN STOCK VISUAL
// =========================================================


// =========================================================
// NUMERACIÓN VISIBLE
// =========================================================

let numerosVentasVisiblesGestion =
    new Map();


let numerosPresupuestosVisiblesGestion =
    new Map();


// =========================================================
// ACTUALIZAR NUMERACIÓN DE VENTAS
// LAS ANULADAS NO CUENTAN
// =========================================================

async function actualizarNumeracionVentasGestion() {

    const {
        data,
        error
    } =
        await supabaseClient
            .from("ventas")
            .select(`
                id,
                created_at,
                anulada
            `)
            .order(
                "created_at",
                {
                    ascending: true
                }
            )
            .order(
                "id",
                {
                    ascending: true
                }
            );


    numerosVentasVisiblesGestion =
        new Map();


    if (error) {

        console.error(
            "Error al numerar ventas:",
            error
        );

        return;

    }


    let numero =
        0;


    (
        Array.isArray(data)
            ? data
            : []
    ).forEach(
        (venta) => {

            if (
                venta.anulada ===
                true
            ) {

                return;

            }


            numero++;


            numerosVentasVisiblesGestion.set(
                Number(venta.id),
                numero
            );

        }
    );

}


// =========================================================
// ACTUALIZAR NUMERACIÓN DE PRESUPUESTOS
// LOS CANCELADOS NO CUENTAN
// =========================================================

async function actualizarNumeracionPresupuestosGestion() {

    const {
        data,
        error
    } =
        await supabaseClient
            .from("presupuestos")
            .select(`
                id,
                created_at,
                estado
            `)
            .order(
                "created_at",
                {
                    ascending: true
                }
            )
            .order(
                "id",
                {
                    ascending: true
                }
            );


    numerosPresupuestosVisiblesGestion =
        new Map();


    if (error) {

        console.error(
            "Error al numerar presupuestos:",
            error
        );

        return;

    }


    let numero =
        0;


    (
        Array.isArray(data)
            ? data
            : []
    ).forEach(
        (presupuesto) => {

            if (
                presupuesto.estado ===
                "cancelado"
            ) {

                return;

            }


            numero++;


            numerosPresupuestosVisiblesGestion.set(
                Number(
                    presupuesto.id
                ),
                numero
            );

        }
    );

}


// =========================================================
// OBTENER NÚMEROS VISIBLES
// =========================================================

function obtenerNumeroVentaVisibleGestion(
    ventaId
) {

    return numerosVentasVisiblesGestion.get(
        Number(ventaId)
    ) || null;

}


function obtenerNumeroPresupuestoVisibleGestion(
    presupuestoId
) {

    return numerosPresupuestosVisiblesGestion.get(
        Number(presupuestoId)
    ) || null;

}


// =========================================================
// BUSCADOR DE PRODUCTOS
// MARCAR SIN STOCK
// =========================================================

function renderizarResultadosBusquedaProducto() {

    if (
        !ventaBuscadorProducto ||
        !ventaResultadosBusqueda
    ) {

        return [];

    }


    const termino =
        ventaBuscadorProducto.value;


    const resultados =
        obtenerResultadosBusquedaProducto(
            termino
        );


    if (
        normalizarBusquedaProducto(
            termino
        ).length < 2
    ) {

        ventaResultadosBusqueda
            .classList.add(
                "oculto"
            );


        ventaResultadosBusqueda.innerHTML =
            "";


        return [];

    }


    if (
        resultados.length ===
        0
    ) {

        ventaResultadosBusqueda
            .classList.remove(
                "oculto"
            );


        ventaResultadosBusqueda.innerHTML = `
            <div class="venta-resultado-vacio">
                No encontramos productos.
            </div>
        `;


        return [];

    }


    const esPresupuesto =
        typeof modoPresupuestoGestion !==
            "undefined" &&
        modoPresupuestoGestion === true;


    ventaResultadosBusqueda
        .classList.remove(
            "oculto"
        );


    ventaResultadosBusqueda.innerHTML =
        resultados
            .map(
                (producto) => {

                    const stock =
                        Number(
                            producto.stock
                        ) || 0;


                    const sinStock =
                        stock <= 0;


                    let claseProducto =
                        "";


                    let claseStock =
                        "";


                    let textoStock =
                        `Stock: ${stock}`;


                    if (
                        sinStock &&
                        !esPresupuesto
                    ) {

                        claseProducto =
                            "resultado-sin-stock-venta";


                        claseStock =
                            "resultado-stock-agotado";


                        textoStock =
                            "SIN STOCK";

                    }


                    if (
                        sinStock &&
                        esPresupuesto
                    ) {

                        claseProducto =
                            "resultado-sin-stock-presupuesto";


                        claseStock =
                            "resultado-stock-presupuesto";


                        textoStock =
                            "Stock: 0 · Presupuestable";

                    }


                    return `

                        <button
                            type="button"
                            class="
                                venta-resultado-producto
                                ${claseProducto}
                            "
                            data-producto-id="${producto.id}"
                        >

                            <div>

                                <strong>
                                    ${escaparHTML(
                                        producto.nombre_mostrar
                                    )}
                                </strong>

                                <span>
                                    ${escaparHTML(
                                        producto.marca_mostrar ||
                                        ""
                                    )}
                                </span>

                            </div>


                            <div
                                class="
                                    venta-resultado-stock
                                    ${claseStock}
                                "
                            >
                                ${textoStock}
                            </div>

                        </button>

                    `;

                }
            )
            .join("");


    return resultados;

}


// =========================================================
// CARGAR MOVIMIENTOS CON NUMERACIÓN REAL
// =========================================================

async function cargarMovimientosGestion() {

    limpiarMensaje(
        mensajeMovimientos
    );


    await actualizarNumeracionVentasGestion();

    await cargarClientesGestion();


    const {
        data: ventasData,
        error: ventasError
    } =
        await supabaseClient
            .from("ventas")
            .select(`
                id,
                created_at,
                total,
                cliente_id,
                metodo_pago,
                observaciones,
                anulada,
                anulada_at,
                motivo_anulacion,
                editada_at
            `)
            .order(
                "created_at",
                {
                    ascending: false
                }
            )
            .limit(100);


    if (ventasError) {

        console.error(
            "Error al cargar movimientos:",
            ventasError
        );


        movimientosGestion =
            [];


        mostrarMensaje(
            mensajeMovimientos,
            "No se pudieron cargar los movimientos."
        );


        renderizarMovimientos();

        return [];

    }


    const ventas =
        Array.isArray(
            ventasData
        )
            ? ventasData
            : [];


    if (
        ventas.length ===
        0
    ) {

        movimientosGestion =
            [];


        renderizarMovimientos();

        return [];

    }


    const idsVentas =
        ventas.map(
            (venta) =>
                venta.id
        );


    const {
        data: itemsData,
        error: itemsError
    } =
        await supabaseClient
            .from("venta_items")
            .select(`
                id,
                venta_id,
                producto_id,
                producto_slug,
                producto_nombre,
                cantidad,
                precio_unitario,
                subtotal
            `)
            .in(
                "venta_id",
                idsVentas
            )
            .order(
                "id",
                {
                    ascending: true
                }
            );


    if (itemsError) {

        console.error(
            "Error al cargar productos:",
            itemsError
        );

    }


    const {
        data: pagosData,
        error: pagosError
    } =
        await supabaseClient
            .from("pagos")
            .select(`
                id,
                venta_id,
                monto,
                metodo_pago,
                created_at,
                anulado
            `)
            .in(
                "venta_id",
                idsVentas
            );


    if (pagosError) {

        console.error(
            "Error al cargar pagos:",
            pagosError
        );

    }


    const itemsPorVenta =
        new Map();


    (
        Array.isArray(itemsData)
            ? itemsData
            : []
    ).forEach(
        (item) => {

            if (
                !itemsPorVenta.has(
                    item.venta_id
                )
            ) {

                itemsPorVenta.set(
                    item.venta_id,
                    []
                );

            }


            itemsPorVenta
                .get(
                    item.venta_id
                )
                .push(
                    item
                );

        }
    );


    const pagosPorVenta =
        new Map();


    (
        Array.isArray(pagosData)
            ? pagosData
            : []
    ).forEach(
        (pago) => {

            if (
                pago.anulado ===
                true
            ) {

                return;

            }


            if (
                !pagosPorVenta.has(
                    pago.venta_id
                )
            ) {

                pagosPorVenta.set(
                    pago.venta_id,
                    []
                );

            }


            pagosPorVenta
                .get(
                    pago.venta_id
                )
                .push(
                    pago
                );

        }
    );


    movimientosGestion =
        ventas.map(
            (venta) => {

                const pagos =
                    pagosPorVenta.get(
                        venta.id
                    ) || [];


                const pagado =
                    pagos.reduce(
                        (
                            total,
                            pago
                        ) =>
                            total +
                            Number(
                                pago.monto
                            ),
                        0
                    );


                const totalVenta =
                    Number(
                        venta.total
                    ) || 0;


                return {

                    ...venta,

                    numero_visible:
                        obtenerNumeroVentaVisibleGestion(
                            venta.id
                        ),

                    items:
                        itemsPorVenta.get(
                            venta.id
                        ) || [],

                    pagos,

                    pagado,

                    pendiente:
                        Math.max(
                            0,
                            totalVenta -
                            pagado
                        ),

                    saldo_favor:
                        Math.max(
                            0,
                            pagado -
                            totalVenta
                        )

                };

            }
        );


    renderizarMovimientos();


    return movimientosGestion;

}


// =========================================================
// MOSTRAR MOVIMIENTOS
// =========================================================

function renderizarMovimientos() {

    if (!movimientosLista) {
        return;
    }


    if (
        movimientosGestion.length ===
        0
    ) {

        movimientosLista.innerHTML = `
            <p class="movimientos-vacios">
                Todavía no hay ventas registradas.
            </p>
        `;

        return;

    }


    movimientosLista.innerHTML =
        movimientosGestion
            .map(
                (venta) => {

                    const anulada =
                        venta.anulada ===
                        true;


                    const items =
                        venta.items || [];


                    const cliente =
                        clientesGestion.find(
                            (cliente) =>
                                Number(
                                    cliente.id
                                ) ===
                                Number(
                                    venta.cliente_id
                                )
                        );


                    const estadoCobro =
                        obtenerEstadoCobroMovimiento(
                            venta
                        );


                    const tituloVenta =
                        anulada
                            ? "Venta anulada"
                            : `Venta #${venta.numero_visible}`;


                    return `

                        <article
                            class="
                                movimiento-card
                                ${
                                    anulada
                                        ? "movimiento-anulado"
                                        : ""
                                }
                            "
                        >

                            <div class="movimiento-cabecera">

                                <div>

                                    <div class="movimiento-titulo-linea">

                                        <h3>
                                            ${tituloVenta}
                                        </h3>


                                        <span
                                            class="${
                                                anulada
                                                    ? "movimiento-estado-anulado"
                                                    : "movimiento-estado-activo"
                                            }"
                                        >
                                            ${
                                                anulada
                                                    ? "Anulada"
                                                    : "Confirmada"
                                            }
                                        </span>

                                    </div>


                                    <p>
                                        ${escaparHTML(
                                            formatearFechaHora(
                                                venta.created_at
                                            )
                                        )}
                                    </p>

                                </div>


                                <strong>
                                    ${formatearPrecio(
                                        venta.total
                                    )}
                                </strong>

                            </div>


                            <div class="movimiento-items">

                                ${
                                    items
                                        .map(
                                            (item) => `

                                                <div class="movimiento-item">

                                                    <span>
                                                        ${escaparHTML(
                                                            item.producto_nombre
                                                        )}
                                                    </span>

                                                    <span>
                                                        ${item.cantidad}
                                                        ×
                                                        ${formatearPrecio(
                                                            item.precio_unitario
                                                        )}
                                                    </span>

                                                    <strong>
                                                        ${formatearPrecio(
                                                            item.subtotal
                                                        )}
                                                    </strong>

                                                </div>

                                            `
                                        )
                                        .join("")
                                }

                            </div>


                            <div class="movimiento-datos">

                                <span>

                                    <b>
                                        Cliente:
                                    </b>

                                    ${
                                        cliente
                                            ? escaparHTML(
                                                cliente.nombre
                                            )
                                            : "Sin cliente"
                                    }

                                </span>


                                ${
                                    !anulada
                                        ? `

                                            <span>
                                                <b>Cobro:</b>
                                                ${estadoCobro}
                                            </span>


                                            <span>
                                                <b>Pagado:</b>
                                                ${formatearPrecio(
                                                    venta.pagado
                                                )}
                                            </span>


                                            ${
                                                venta.saldo_favor >
                                                0
                                                    ? `

                                                        <span>
                                                            <b>
                                                                Saldo a favor:
                                                            </b>

                                                            ${formatearPrecio(
                                                                venta.saldo_favor
                                                            )}
                                                        </span>

                                                    `
                                                    : `

                                                        <span>
                                                            <b>
                                                                Pendiente:
                                                            </b>

                                                            ${formatearPrecio(
                                                                venta.pendiente
                                                            )}
                                                        </span>

                                                    `
                                            }

                                        `
                                        : ""
                                }


                                ${
                                    venta.observaciones
                                        ? `

                                            <span>

                                                <b>
                                                    Observación:
                                                </b>

                                                ${escaparHTML(
                                                    venta.observaciones
                                                )}

                                            </span>

                                        `
                                        : ""
                                }


                                ${
                                    anulada &&
                                    venta.anulada_at
                                        ? `

                                            <span>

                                                <b>
                                                    Anulada:
                                                </b>

                                                ${escaparHTML(
                                                    formatearFechaHora(
                                                        venta.anulada_at
                                                    )
                                                )}

                                            </span>

                                        `
                                        : ""
                                }

                            </div>


                            ${
                                !anulada
                                    ? `

                                        <div class="movimiento-acciones">

                                            <button
                                                type="button"
                                                class="editar-venta-movimiento"
                                                data-venta-id="${venta.id}"
                                            >
                                                Editar venta
                                            </button>


                                            <button
                                                type="button"
                                                class="anular-venta"
                                                data-venta-id="${venta.id}"
                                                data-numero-venta="${venta.numero_visible}"
                                            >
                                                Anular venta
                                            </button>

                                        </div>

                                    `
                                    : `

                                        <div class="movimiento-acciones">

                                            <button
                                                type="button"
                                                class="eliminar-venta-anulada"
                                                data-venta-id="${venta.id}"
                                            >
                                                Eliminar definitivamente
                                            </button>

                                        </div>

                                    `
                            }

                        </article>

                    `;

                }
            )
            .join("");


    // =====================================================
    // EDITAR
    // =====================================================

    document
        .querySelectorAll(
            ".editar-venta-movimiento"
        )
        .forEach(
            (boton) => {

                boton.addEventListener(
                    "click",
                    async () => {

                        await abrirEdicionVentaGestion(
                            Number(
                                boton.dataset.ventaId
                            )
                        );

                    }
                );

            }
        );


    // =====================================================
    // ANULAR
    // =====================================================

    document
        .querySelectorAll(
            ".anular-venta"
        )
        .forEach(
            (boton) => {

                boton.addEventListener(
                    "click",
                    async () => {

                        const ventaId =
                            Number(
                                boton.dataset.ventaId
                            );


                        const numeroVisible =
                            boton.dataset.numeroVenta;


                        const confirmar =
                            window.confirm(
                                `¿Seguro que querés anular la Venta #${numeroVisible}?\n\nEl stock de todos sus productos volverá automáticamente y dejará de contar en la numeración.`
                            );


                        if (!confirmar) {
                            return;
                        }


                        await anularVenta(
                            ventaId,
                            boton
                        );

                    }
                );

            }
        );


    // =====================================================
    // ELIMINAR ANULADA
    // =====================================================

    document
        .querySelectorAll(
            ".eliminar-venta-anulada"
        )
        .forEach(
            (boton) => {

                boton.addEventListener(
                    "click",
                    async () => {

                        await eliminarVentaAnuladaGestion(
                            Number(
                                boton.dataset.ventaId
                            ),
                            boton
                        );

                    }
                );

            }
        );

}


// =========================================================
// ELIMINAR VENTA ANULADA
// =========================================================

async function eliminarVentaAnuladaGestion(
    ventaId,
    boton
) {

    const confirmar =
        window.confirm(
            "¿Eliminar definitivamente esta venta anulada?\n\nYa no aparecerá en el historial. El stock no se modificará porque ya fue devuelto al anularla."
        );


    if (!confirmar) {
        return;
    }


    boton.disabled =
        true;


    boton.textContent =
        "Eliminando...";


    const {
        error
    } =
        await supabaseClient.rpc(
            "eliminar_venta_anulada",
            {
                p_venta_id:
                    ventaId
            }
        );


    if (error) {

        console.error(
            error
        );


        boton.disabled =
            false;


        boton.textContent =
            "Eliminar definitivamente";


        mostrarMensaje(
            mensajeMovimientos,
            error.message ||
            "No se pudo eliminar la venta."
        );


        return;

    }


    await cargarMovimientosGestion();


    mostrarMensaje(
        mensajeMovimientos,
        "Venta anulada eliminada definitivamente.",
        "exito"
    );

}


// =========================================================
// CARGAR PRESUPUESTOS CON NUMERACIÓN REAL
// =========================================================

async function cargarPresupuestosGestion() {

    if (
        !presupuestosListaGestion
    ) {

        return [];

    }


    presupuestosListaGestion.innerHTML = `
        <p class="presupuestos-vacios">
            Cargando presupuestos...
        </p>
    `;


    limpiarMensaje(
        mensajePresupuestosGestion
    );


    await actualizarNumeracionPresupuestosGestion();

    await actualizarNumeracionVentasGestion();

    await cargarClientesGestion();


    const {
        data: presupuestosData,
        error: presupuestosError
    } =
        await supabaseClient
            .from("presupuestos")
            .select(`
                id,
                created_at,
                updated_at,
                cliente_id,
                total,
                observaciones,
                estado,
                convertido_venta_id,
                convertido_at,
                cancelado_at,
                motivo_cancelacion
            `)
            .order(
                "created_at",
                {
                    ascending: false
                }
            )
            .limit(100);


    if (presupuestosError) {

        console.error(
            "Error al cargar presupuestos:",
            presupuestosError
        );


        presupuestosGestion =
            [];


        presupuestosListaGestion.innerHTML = `
            <p class="presupuestos-vacios">
                No se pudieron cargar los presupuestos.
            </p>
        `;


        return [];

    }


    const presupuestos =
        Array.isArray(
            presupuestosData
        )
            ? presupuestosData
            : [];


    if (
        presupuestos.length ===
        0
    ) {

        presupuestosGestion =
            [];


        renderizarPresupuestosGestion();

        return [];

    }


    const idsPresupuestos =
        presupuestos.map(
            (presupuesto) =>
                presupuesto.id
        );


    const {
        data: itemsData,
        error: itemsError
    } =
        await supabaseClient
            .from("presupuesto_items")
            .select(`
                id,
                presupuesto_id,
                producto_id,
                producto_slug,
                producto_nombre,
                cantidad,
                precio_unitario,
                subtotal
            `)
            .in(
                "presupuesto_id",
                idsPresupuestos
            )
            .order(
                "id",
                {
                    ascending: true
                }
            );


    if (itemsError) {

        console.error(
            "Error al cargar productos de presupuestos:",
            itemsError
        );

    }


    const itemsPorPresupuesto =
        new Map();


    (
        Array.isArray(itemsData)
            ? itemsData
            : []
    ).forEach(
        (item) => {

            if (
                !itemsPorPresupuesto.has(
                    item.presupuesto_id
                )
            ) {

                itemsPorPresupuesto.set(
                    item.presupuesto_id,
                    []
                );

            }


            itemsPorPresupuesto
                .get(
                    item.presupuesto_id
                )
                .push(
                    item
                );

        }
    );


    presupuestosGestion =
        presupuestos.map(
            (presupuesto) => ({

                ...presupuesto,

                numero_visible:
                    obtenerNumeroPresupuestoVisibleGestion(
                        presupuesto.id
                    ),

                items:
                    itemsPorPresupuesto.get(
                        presupuesto.id
                    ) || []

            })
        );


    renderizarPresupuestosGestion();


    return presupuestosGestion;

}


// =========================================================
// RENDER PRESUPUESTOS
// =========================================================

function renderizarPresupuestosGestion() {

    if (
        !presupuestosListaGestion
    ) {

        return;

    }


    if (
        presupuestosGestion.length ===
        0
    ) {

        presupuestosListaGestion.innerHTML = `

            <div class="presupuestos-vacios">

                <strong>
                    Todavía no hay presupuestos
                </strong>

                <span>
                    Creá el primero desde “Nuevo presupuesto”.
                </span>

            </div>

        `;

        return;

    }


    presupuestosListaGestion.innerHTML =
        presupuestosGestion
            .map(
                (presupuesto) => {

                    const cliente =
                        clientesGestion.find(
                            (cliente) =>
                                Number(
                                    cliente.id
                                ) ===
                                Number(
                                    presupuesto.cliente_id
                                )
                        );


                    const estado =
                        presupuesto.estado ||
                        "pendiente";


                    let estadoTexto =
                        "Pendiente";


                    if (
                        estado ===
                        "convertido"
                    ) {

                        estadoTexto =
                            "Convertido";

                    }


                    if (
                        estado ===
                        "cancelado"
                    ) {

                        estadoTexto =
                            "Cancelado";

                    }


                    const titulo =
                        estado ===
                        "cancelado"
                            ? "Presupuesto cancelado"
                            : `Presupuesto #${presupuesto.numero_visible}`;


                    const numeroVentaConvertida =
                        presupuesto.convertido_venta_id
                            ? obtenerNumeroVentaVisibleGestion(
                                presupuesto.convertido_venta_id
                            )
                            : null;


                    return `

                        <article
                            class="
                                presupuesto-card
                                presupuesto-${estado}
                            "
                        >

                            <div class="presupuesto-card-cabecera">

                                <div>

                                    <div class="presupuesto-titulo-linea">

                                        <h3>
                                            ${titulo}
                                        </h3>


                                        <span
                                            class="presupuesto-estado presupuesto-estado-${estado}"
                                        >
                                            ${estadoTexto}
                                        </span>

                                    </div>


                                    <span class="presupuesto-fecha">
                                        ${escaparHTML(
                                            formatearFechaHora(
                                                presupuesto.created_at
                                            )
                                        )}
                                    </span>

                                </div>


                                <strong>
                                    ${formatearPrecio(
                                        presupuesto.total
                                    )}
                                </strong>

                            </div>


                            <div class="presupuesto-datos">

                                <span>

                                    <b>
                                        Cliente:
                                    </b>

                                    ${
                                        cliente
                                            ? escaparHTML(
                                                cliente.nombre
                                            )
                                            : "Sin cliente"
                                    }

                                </span>


                                ${
                                    numeroVentaConvertida
                                        ? `

                                            <span>

                                                <b>
                                                    Venta:
                                                </b>

                                                #${numeroVentaConvertida}

                                            </span>

                                        `
                                        : ""
                                }


                                ${
                                    presupuesto.observaciones
                                        ? `

                                            <span>

                                                <b>
                                                    Observación:
                                                </b>

                                                ${escaparHTML(
                                                    presupuesto.observaciones
                                                )}

                                            </span>

                                        `
                                        : ""
                                }

                            </div>


                            <div class="presupuesto-items">

                                ${
                                    presupuesto.items
                                        .map(
                                            (item) => `

                                                <div class="presupuesto-item">

                                                    <span>
                                                        ${escaparHTML(
                                                            item.producto_nombre
                                                        )}
                                                    </span>

                                                    <span>
                                                        ${item.cantidad}
                                                        ×
                                                        ${formatearPrecio(
                                                            item.precio_unitario
                                                        )}
                                                    </span>

                                                    <strong>
                                                        ${formatearPrecio(
                                                            item.subtotal
                                                        )}
                                                    </strong>

                                                </div>

                                            `
                                        )
                                        .join("")
                                }

                            </div>


                            ${
                                estado ===
                                "pendiente"
                                    ? `

                                        <div class="presupuesto-acciones">

                                            <button
                                                type="button"
                                                class="editar-presupuesto"
                                                data-presupuesto-id="${presupuesto.id}"
                                            >
                                                Editar
                                            </button>


                                            <button
                                                type="button"
                                                class="convertir-presupuesto"
                                                data-presupuesto-id="${presupuesto.id}"
                                            >
                                                Transformar en venta
                                            </button>


                                            <button
                                                type="button"
                                                class="cancelar-presupuesto"
                                                data-presupuesto-id="${presupuesto.id}"
                                                data-numero-presupuesto="${presupuesto.numero_visible}"
                                            >
                                                Cancelar
                                            </button>

                                        </div>

                                    `
                                    : ""
                            }


                            ${
                                estado ===
                                "cancelado"
                                    ? `

                                        <div class="presupuesto-acciones">

                                            <button
                                                type="button"
                                                class="eliminar-presupuesto-cancelado"
                                                data-presupuesto-id="${presupuesto.id}"
                                            >
                                                Eliminar definitivamente
                                            </button>

                                        </div>

                                    `
                                    : ""
                            }

                        </article>

                    `;

                }
            )
            .join("");

}


// =========================================================
// CANCELAR PRESUPUESTO CON NÚMERO VISIBLE
// =========================================================

async function cancelarPresupuestoGestion(
    presupuestoId
) {

    const numeroVisible =
        obtenerNumeroPresupuestoVisibleGestion(
            presupuestoId
        );


    const confirmar =
        window.confirm(
            `¿Cancelar el Presupuesto #${numeroVisible}?\n\nNo se modificará el stock y dejará de contar en la numeración.`
        );


    if (!confirmar) {
        return;
    }


    const {
        error
    } =
        await supabaseClient.rpc(
            "cancelar_presupuesto",
            {

                p_presupuesto_id:
                    presupuestoId,

                p_motivo:
                    null

            }
        );


    if (error) {

        console.error(
            error
        );


        mostrarMensaje(
            mensajePresupuestosGestion,
            error.message ||
            "No se pudo cancelar el presupuesto."
        );


        return;

    }


    await cargarPresupuestosGestion();


    mostrarMensaje(
        mensajePresupuestosGestion,
        `Presupuesto #${numeroVisible} cancelado.`,
        "exito"
    );

}


// =========================================================
// ELIMINAR PRESUPUESTO CANCELADO
// =========================================================

async function eliminarPresupuestoCanceladoGestion(
    presupuestoId,
    boton
) {

    const confirmar =
        window.confirm(
            "¿Eliminar definitivamente este presupuesto cancelado?\n\nYa no aparecerá en el historial."
        );


    if (!confirmar) {
        return;
    }


    boton.disabled =
        true;


    boton.textContent =
        "Eliminando...";


    const {
        error
    } =
        await supabaseClient.rpc(
            "eliminar_presupuesto_cancelado",
            {

                p_presupuesto_id:
                    presupuestoId

            }
        );


    if (error) {

        console.error(
            error
        );


        boton.disabled =
            false;


        boton.textContent =
            "Eliminar definitivamente";


        mostrarMensaje(
            mensajePresupuestosGestion,
            error.message ||
            "No se pudo eliminar el presupuesto."
        );


        return;

    }


    await cargarPresupuestosGestion();


    mostrarMensaje(
        mensajePresupuestosGestion,
        "Presupuesto cancelado eliminado definitivamente.",
        "exito"
    );

}


// =========================================================
// CLICS EN PRESUPUESTOS
// =========================================================

presupuestosListaGestion
    ?.addEventListener(
        "click",
        async (evento) => {

            const botonEliminar =
                evento.target.closest(
                    ".eliminar-presupuesto-cancelado"
                );


            if (botonEliminar) {

                evento.preventDefault();

                evento.stopImmediatePropagation();


                await eliminarPresupuestoCanceladoGestion(
                    Number(
                        botonEliminar.dataset.presupuestoId
                    ),
                    botonEliminar
                );


                return;

            }

        },
        true
    );


// =========================================================
// NUMERACIÓN EN CLIENTES A COBRAR
// =========================================================

const cargarClientesACobrarBaseNumeracion =
    cargarClientesACobrarGestion;


cargarClientesACobrarGestion =
    async function () {

        await actualizarNumeracionVentasGestion();


        return await cargarClientesACobrarBaseNumeracion();

    };


const renderizarClientesACobrarBaseNumeracion =
    renderizarClientesACobrarGestion;


renderizarClientesACobrarGestion =
    function () {

        renderizarClientesACobrarBaseNumeracion();


        document
            .querySelectorAll(
                ".cliente-deuda-venta"
            )
            .forEach(
                (tarjeta) => {

                    const boton =
                        tarjeta.querySelector(
                            ".agregar-pago-venta"
                        );


                    const titulo =
                        tarjeta.querySelector(
                            ".deuda-venta-superior strong"
                        );


                    if (
                        !boton ||
                        !titulo
                    ) {

                        return;

                    }


                    const numero =
                        obtenerNumeroVentaVisibleGestion(
                            Number(
                                boton.dataset.ventaId
                            )
                        );


                    if (numero) {

                        titulo.textContent =
                            `Venta #${numero}`;

                    }

                }
            );

    };


// =========================================================
// NUMERACIÓN EN MODAL AGREGAR PAGO
// =========================================================

const abrirAgregarPagoBaseNumeracion =
    abrirAgregarPagoGestion;


abrirAgregarPagoGestion =
    function (
        ventaId
    ) {

        abrirAgregarPagoBaseNumeracion(
            ventaId
        );


        const numero =
            obtenerNumeroVentaVisibleGestion(
                ventaId
            );


        const venta =
            cuentasCobrarGestion.find(
                (venta) =>
                    Number(
                        venta.id
                    ) ===
                    Number(
                        ventaId
                    )
            );


        const cliente =
            clientesGestion.find(
                (cliente) =>
                    Number(
                        cliente.id
                    ) ===
                    Number(
                        venta?.cliente_id
                    )
            );


        if (
            numero &&
            pagoVentaInfo
        ) {

            pagoVentaInfo.textContent =
                `Venta #${numero} · ${
                    cliente?.nombre ||
                    "Cliente"
                }`;

        }

    };


// =========================================================
// NUMERACIÓN AL EDITAR VENTA
// =========================================================

function actualizarInfoEdicionVentaGestion() {

    if (
        ventaEditandoIdGestion ===
        null
    ) {

        return;

    }


    const numeroVisible =
        obtenerNumeroVentaVisibleGestion(
            ventaEditandoIdGestion
        );


    const total =
        obtenerTotalVentaActual();


    const pagado =
        Number(
            ventaEditandoPagadoGestion
        ) || 0;


    const pendiente =
        Math.max(
            0,
            total -
            pagado
        );


    const saldoFavor =
        Math.max(
            0,
            pagado -
            total
        );


    avisoEdicionVentaGestion.innerHTML = `

        <strong>
            Venta #${numeroVisible || ""}
        </strong>

        <span>
            Pagado hasta ahora:
            ${formatearPrecio(
                pagado
            )}
        </span>

        <span>
            Nuevo total:
            ${formatearPrecio(
                total
            )}
        </span>

        ${
            saldoFavor > 0
                ? `

                    <span class="venta-edicion-saldo-favor">
                        Saldo a favor del cliente:
                        ${formatearPrecio(
                            saldoFavor
                        )}
                    </span>

                `
                : `

                    <span>
                        Saldo pendiente:
                        ${formatearPrecio(
                            pendiente
                        )}
                    </span>

                `
        }

    `;

}


const abrirEdicionVentaBaseNumeracion =
    abrirEdicionVentaGestion;


abrirEdicionVentaGestion =
    async function (
        ventaId
    ) {

        await actualizarNumeracionVentasGestion();


        await abrirEdicionVentaBaseNumeracion(
            ventaId
        );


        const numero =
            obtenerNumeroVentaVisibleGestion(
                ventaId
            );


        if (
            numero &&
            tituloFormularioVentaGestion
        ) {

            tituloFormularioVentaGestion.textContent =
                `Editar venta #${numero}`;

        }


        actualizarInfoEdicionVentaGestion();

    };


// =========================================================
// NUMERACIÓN AL EDITAR PRESUPUESTO
// =========================================================

const abrirFormularioPresupuestoBaseNumeracion =
    abrirFormularioPresupuestoGestion;


abrirFormularioPresupuestoGestion =
    async function (
        presupuestoId = null
    ) {

        await actualizarNumeracionPresupuestosGestion();


        await abrirFormularioPresupuestoBaseNumeracion(
            presupuestoId
        );


        if (
            presupuestoId
        ) {

            const numero =
                obtenerNumeroPresupuestoVisibleGestion(
                    presupuestoId
                );


            if (
                numero &&
                tituloVentaPresupuestoGestion
            ) {

                tituloVentaPresupuestoGestion.textContent =
                    `Editar presupuesto #${numero}`;

            }

        }

    };


// =========================================================
// NUMERACIÓN EN TRANSFORMAR PRESUPUESTO
// =========================================================

const abrirConversionPresupuestoBaseNumeracion =
    abrirConversionPresupuestoGestion;


abrirConversionPresupuestoGestion =
    async function (
        presupuestoId
    ) {

        await actualizarNumeracionPresupuestosGestion();


        await abrirConversionPresupuestoBaseNumeracion(
            presupuestoId
        );


        const numero =
            obtenerNumeroPresupuestoVisibleGestion(
                presupuestoId
            );


        if (
            numero &&
            convertirPresupuestoInfoGestion
        ) {

            convertirPresupuestoInfoGestion.textContent =
                `Presupuesto #${numero}`;

        }

    };
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
    document.getElementById(
        "capital-stock"
    );

const capitalReinversionGestion =
    document.getElementById(
        "capital-reinversion"
    );

const ventasMes =
    document.getElementById(
        "ventas-mes"
    );

const gananciaMes =
    document.getElementById(
        "ganancia-mes"
    );

const disponibleRetirar =
    document.getElementById(
        "disponible-retirar"
    );


// ========================================
// NOTIFICACIONES PUSH / PWA
// ========================================

const botonActivarNotificacionesGestion =
    document.getElementById(
        "activar-notificaciones-gestion"
    );

const estadoNotificacionesGestion =
    document.getElementById(
        "notificaciones-gestion-estado"
    );

let registroServiceWorkerGestion = null;



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

const ventaDescuentoGeneralTipo =
    document.getElementById(
        "venta-descuento-general-tipo"
    );

const ventaDescuentoGeneralValor =
    document.getElementById(
        "venta-descuento-general-valor"
    );

const ventaSubtotalAntesDescuento =
    document.getElementById(
        "venta-subtotal-antes-descuento"
    );

const ventaDescuentoGeneralMonto =
    document.getElementById(
        "venta-descuento-general-monto"
    );

const ventaFechaEmision =
    document.getElementById(
        "venta-fecha-emision"
    );

const campoFechaEmisionGestion =
    document.getElementById(
        "campo-fecha-emision"
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
// FECHA DE EMISIÓN DE LA VENTA
// ========================================

function fechaLocalParaInputGestion(valor = new Date()) {

    const fecha =
        valor instanceof Date
            ? valor
            : new Date(valor);


    if (Number.isNaN(fecha.getTime())) {
        return "";
    }


    const fechaLocal =
        new Date(
            fecha.getTime() -
            fecha.getTimezoneOffset() * 60000
        );


    return fechaLocal
        .toISOString()
        .slice(0, 16);

}


function establecerFechaEmisionActualGestion() {

    if (!ventaFechaEmision) {
        return;
    }


    ventaFechaEmision.value =
        fechaLocalParaInputGestion(
            new Date()
        );

}


function obtenerFechaEmisionISOFormularioGestion() {

    const valor =
        ventaFechaEmision?.value;


    if (!valor) {
        return null;
    }


    const fecha =
        new Date(valor);


    if (Number.isNaN(fecha.getTime())) {
        return null;
    }


    return fecha.toISOString();

}


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

function calcularCapitalStockGestion() {

    return productosGestion.reduce(
        (capital, producto) => {

            // Los decants no se cuentan como unidades físicas
            // porque se preparan de a uno a medida que se venden.
            if (
                producto.categoria_mostrar ===
                "decants"
            ) {
                return capital;
            }


            const stock =
                Math.max(
                    0,
                    Number(producto.stock) || 0
                );


            const costoActual =
                producto.costo_actual === null ||
                producto.costo_actual === undefined ||
                producto.costo_actual === ""
                    ? null
                    : Number(producto.costo_actual);


            // Si todavía no hay costo cargado, no inventamos
            // ningún valor para ese producto.
            if (
                !Number.isFinite(costoActual) ||
                costoActual < 0
            ) {
                return capital;
            }


            return capital +
                stock * costoActual;

        },
        0
    );

}


function actualizarCapitalStockGestion() {

    if (!capitalStock) {
        return;
    }


    capitalStock.textContent =
        formatearPrecio(
            calcularCapitalStockGestion()
        );

}


async function calcularVentasMesGestion() {

    const ahora =
        new Date();


    const inicioMes =
        new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            1,
            0,
            0,
            0,
            0
        );


    const inicioMesSiguiente =
        new Date(
            ahora.getFullYear(),
            ahora.getMonth() + 1,
            1,
            0,
            0,
            0,
            0
        );


    const {
        data,
        error
    } =
        await supabaseClient
            .from("ventas")
            .select(`
                total,
                fecha_emision,
                anulada
            `)
            .gte(
                "fecha_emision",
                inicioMes.toISOString()
            )
            .lt(
                "fecha_emision",
                inicioMesSiguiente.toISOString()
            )
            .eq(
                "anulada",
                false
            );


    if (error) {

        console.error(
            "Error al calcular ventas del mes:",
            error
        );


        return 0;

    }


    return (
        Array.isArray(data)
            ? data
            : []
    ).reduce(
        (total, venta) =>
            total +
            (Number(venta.total) || 0),
        0
    );

}


async function calcularGananciaMesGestion() {

    const ahora =
        new Date();


    const inicioMes =
        new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            1,
            0,
            0,
            0,
            0
        );


    const inicioMesSiguiente =
        new Date(
            ahora.getFullYear(),
            ahora.getMonth() + 1,
            1,
            0,
            0,
            0,
            0
        );


    const {
        data: ventasData,
        error: ventasError
    } =
        await supabaseClient
            .from("ventas")
            .select(`
                id,
                total,
                fecha_emision,
                anulada
            `)
            .gte(
                "fecha_emision",
                inicioMes.toISOString()
            )
            .lt(
                "fecha_emision",
                inicioMesSiguiente.toISOString()
            )
            .eq(
                "anulada",
                false
            );


    if (ventasError) {

        console.error(
            "Error al calcular ganancia del mes:",
            ventasError
        );


        return {
            ganancia: 0,
            costoPendiente: true,
            hayVentas: false
        };

    }


    const ventas =
        Array.isArray(ventasData)
            ? ventasData
            : [];


    if (ventas.length === 0) {

        return {
            ganancia: 0,
            costoPendiente: false,
            hayVentas: false
        };

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
                venta_id,
                cantidad,
                costo_unitario
            `)
            .in(
                "venta_id",
                idsVentas
            );


    if (itemsError) {

        console.error(
            "Error al leer costos para la ganancia del mes:",
            itemsError
        );


        return {
            ganancia: 0,
            costoPendiente: true,
            hayVentas: true
        };

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


    let ganancia =
        0;

    let costoPendiente =
        false;


    ventas.forEach(
        (venta) => {

            const itemsVenta =
                itemsPorVenta.get(
                    venta.id
                ) || [];


            const costoCompleto =
                itemsVenta.length > 0 &&
                itemsVenta.every(
                    (item) =>
                        item.costo_unitario !== null &&
                        item.costo_unitario !== undefined &&
                        item.costo_unitario !== "" &&
                        Number.isFinite(
                            Number(
                                item.costo_unitario
                            )
                        )
                );


            if (!costoCompleto) {

                costoPendiente =
                    true;

                return;

            }


            const costoTotal =
                itemsVenta.reduce(
                    (total, item) =>
                        total +
                        (
                            (Number(item.cantidad) || 0) *
                            Number(item.costo_unitario)
                        ),
                    0
                );


            ganancia +=
                (Number(venta.total) || 0) -
                costoTotal;

        }
    );


    return {
        ganancia,
        costoPendiente,
        hayVentas: true
    };

}


async function calcularDisponibleRetirarGestion() {

    // =====================================================
    // DISPONIBLE PARA RETIRAR
    // =====================================================
    //
    // Regla conservadora:
    // dinero efectivamente cobrado
    // - costo ACTUAL de reposición de lo vendido
    // - gastos activos del negocio
    //
    // Si falta el costo actual de algún producto vendido,
    // no inventamos un disponible.
    // =====================================================

    const {
        data: ventasData,
        error: ventasError
    } =
        await supabaseClient
            .from("ventas")
            .select(`
                id,
                anulada
            `)
            .eq(
                "anulada",
                false
            );


    if (ventasError) {

        console.error(
            "Error al calcular el disponible para retirar (ventas):",
            ventasError
        );


        return {
            disponible: 0,
            costoPendiente: true
        };

    }


    const ventas =
        Array.isArray(ventasData)
            ? ventasData
            : [];


    const idsVentas =
        ventas.map(
            (venta) =>
                venta.id
        );


    let totalCobrado =
        0;

    let reservaReposicion =
        0;

    let costoPendiente =
        false;


    if (idsVentas.length > 0) {

        const [
            resultadoPagos,
            resultadoItems
        ] =
            await Promise.all([

                supabaseClient
                    .from("pagos")
                    .select(`
                        venta_id,
                        monto,
                        anulado
                    `)
                    .in(
                        "venta_id",
                        idsVentas
                    )
                    .eq(
                        "anulado",
                        false
                    ),

                supabaseClient
                    .from("venta_items")
                    .select(`
                        venta_id,
                        producto_id,
                        cantidad
                    `)
                    .in(
                        "venta_id",
                        idsVentas
                    )

            ]);


        if (resultadoPagos.error) {

            console.error(
                "Error al calcular el disponible para retirar (pagos):",
                resultadoPagos.error
            );


            return {
                disponible: 0,
                costoPendiente: true
            };

        }


        if (resultadoItems.error) {

            console.error(
                "Error al calcular el disponible para retirar (productos vendidos):",
                resultadoItems.error
            );


            return {
                disponible: 0,
                costoPendiente: true
            };

        }


        totalCobrado =
            (
                Array.isArray(
                    resultadoPagos.data
                )
                    ? resultadoPagos.data
                    : []
            ).reduce(
                (total, pago) =>
                    total +
                    (Number(pago.monto) || 0),
                0
            );


        const productosPorId =
            new Map(
                productosGestion.map(
                    (producto) => [
                        Number(producto.id),
                        producto
                    ]
                )
            );


        (
            Array.isArray(
                resultadoItems.data
            )
                ? resultadoItems.data
                : []
        ).forEach(
            (item) => {

                const cantidad =
                    Math.max(
                        0,
                        Number(item.cantidad) || 0
                    );


                if (
                    cantidad <= 0
                ) {
                    return;
                }


                const producto =
                    productosPorId.get(
                        Number(
                            item.producto_id
                        )
                    );


                const costoActual =
                    producto?.costo_actual === null ||
                    producto?.costo_actual === undefined ||
                    producto?.costo_actual === ""
                        ? null
                        : Number(
                            producto.costo_actual
                        );


                // Para reservar reposición necesitamos un costo real.
                // Cero o costo ausente se considera pendiente.
                if (
                    !Number.isFinite(
                        costoActual
                    ) ||
                    costoActual <= 0
                ) {

                    costoPendiente =
                        true;

                    return;

                }


                reservaReposicion +=
                    cantidad *
                    costoActual;

            }
        );

    }


    const {
        data: gastosData,
        error: gastosError
    } =
        await supabaseClient
            .from("gastos")
            .select(`
                monto,
                anulado
            `)
            .eq(
                "anulado",
                false
            );


    if (gastosError) {

        console.error(
            "Error al calcular el disponible para retirar (gastos):",
            gastosError
        );


        return {
            disponible: 0,
            costoPendiente: true
        };

    }


    const totalGastos =
        (
            Array.isArray(gastosData)
                ? gastosData
                : []
        ).reduce(
            (total, gasto) =>
                total +
                (Number(gasto.monto) || 0),
            0
        );


    const disponible =
        Math.max(
            0,
            totalCobrado -
            reservaReposicion -
            totalGastos
        );


    return {
        disponible,
        costoPendiente
    };

}


async function actualizarDisponibleRetirarGestion() {

    if (!disponibleRetirar) {
        return;
    }


    const resultado =
        await calcularDisponibleRetirarGestion();


    if (
        resultado.costoPendiente
    ) {

        disponibleRetirar.textContent =
            "Costo pendiente";

        disponibleRetirar.title =
            "Falta cargar el costo actual de uno o más productos vendidos. No se calcula un disponible falso.";

        return;

    }


    disponibleRetirar.textContent =
        formatearPrecio(
            resultado.disponible
        );

    disponibleRetirar.title =
        "Dinero cobrado menos reserva de reposición al costo actual y gastos del negocio.";

}


async function actualizarResumenGeneral() {

    actualizarCapitalStockGestion();


    if (ventasMes) {

        ventasMes.textContent =
            formatearPrecio(
                await calcularVentasMesGestion()
            );

    }


    if (gananciaMes) {

        const resultadoGananciaMes =
            await calcularGananciaMesGestion();


        if (
            resultadoGananciaMes.costoPendiente
        ) {

            gananciaMes.textContent =
                "Costo pendiente";

            gananciaMes.title =
                "Hay una o más ventas del mes sin costo histórico cargado.";

        } else {

            gananciaMes.textContent =
                formatearPrecio(
                    resultadoGananciaMes.ganancia
                );

            gananciaMes.title =
                "";

        }

    }


    await actualizarDisponibleRetirarGestion();

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
// DESCUENTOS
// ========================================

function obtenerPrecioOriginalItemGestion(
    item
) {

    const valor =
        item?.precio_unitario_original ??
        item?.precio_unitario ??
        0;

    const numero =
        Number(valor);

    return Number.isFinite(numero)
        ? Math.max(0, numero)
        : 0;

}


function aplicarDescuentoItemGestion(
    item
) {

    if (!item) {
        return item;
    }

    const precioOriginal =
        obtenerPrecioOriginalItemGestion(
            item
        );

    let tipo =
        item.descuento_tipo ||
        null;

    let valor =
        Number(
            item.descuento_valor
        ) || 0;

    valor =
        Math.max(
            0,
            valor
        );

    if (
        tipo !== "porcentaje" &&
        tipo !== "monto"
    ) {
        tipo = null;
        valor = 0;
    }

    if (
        tipo === "porcentaje"
    ) {
        valor =
            Math.min(
                100,
                valor
            );
    }

    if (
        tipo === "monto"
    ) {
        valor =
            Math.min(
                precioOriginal,
                valor
            );
    }

    const descuentoUnitario =
        tipo === "porcentaje"
            ? precioOriginal * valor / 100
            : tipo === "monto"
                ? valor
                : 0;

    item.precio_unitario_original =
        precioOriginal;

    item.descuento_tipo =
        tipo;

    item.descuento_valor =
        valor;

    item.descuento_unitario =
        descuentoUnitario;

    item.precio_unitario =
        Math.max(
            0,
            precioOriginal -
            descuentoUnitario
        );

    return item;

}


function normalizarDescuentosItemsGestion() {

    itemsVentaActual.forEach(
        (item) => {
            aplicarDescuentoItemGestion(
                item
            );
        }
    );

}


function obtenerSubtotalAntesDescuentoGeneralGestion() {

    normalizarDescuentosItemsGestion();

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


function obtenerDescuentoGeneralTipoGestion() {

    const tipo =
        ventaDescuentoGeneralTipo?.value ||
        "";

    return (
        tipo === "porcentaje" ||
        tipo === "monto"
    )
        ? tipo
        : null;

}


function obtenerDescuentoGeneralValorGestion() {

    const tipo =
        obtenerDescuentoGeneralTipoGestion();

    if (!tipo) {
        return 0;
    }

    const subtotal =
        obtenerSubtotalAntesDescuentoGeneralGestion();

    let valor =
        Number(
            ventaDescuentoGeneralValor?.value
        ) || 0;

    valor =
        Math.max(
            0,
            valor
        );

    if (
        tipo === "porcentaje"
    ) {
        valor =
            Math.min(
                100,
                valor
            );
    }

    if (
        tipo === "monto"
    ) {
        valor =
            Math.min(
                subtotal,
                valor
            );
    }

    return valor;

}


function obtenerDescuentoGeneralMontoGestion() {

    const subtotal =
        obtenerSubtotalAntesDescuentoGeneralGestion();

    const tipo =
        obtenerDescuentoGeneralTipoGestion();

    const valor =
        obtenerDescuentoGeneralValorGestion();

    if (
        tipo === "porcentaje"
    ) {
        return subtotal * valor / 100;
    }

    if (
        tipo === "monto"
    ) {
        return valor;
    }

    return 0;

}


function establecerDescuentoGeneralGestion(
    tipo = null,
    valor = 0
) {

    if (
        ventaDescuentoGeneralTipo
    ) {
        ventaDescuentoGeneralTipo.value =
            tipo === "porcentaje" ||
            tipo === "monto"
                ? tipo
                : "";
    }

    if (
        ventaDescuentoGeneralValor
    ) {
        ventaDescuentoGeneralValor.value =
            String(
                Math.max(
                    0,
                    Number(valor) || 0
                )
            );

        ventaDescuentoGeneralValor.disabled =
            !obtenerDescuentoGeneralTipoGestion();
    }

}


function resetearDescuentoGeneralGestion() {

    establecerDescuentoGeneralGestion(
        null,
        0
    );

}


function prepararItemsDescuentoSupabaseGestion(
    items = itemsVentaActual
) {

    return (
        Array.isArray(items)
            ? items
            : []
    ).map(
        (item) => {

            aplicarDescuentoItemGestion(
                item
            );

            return {
                producto_id:
                    item.producto_id,

                nombre:
                    item.nombre ||
                    item.producto_nombre,

                cantidad:
                    Number(item.cantidad) || 0,

                precio_unitario_original:
                    obtenerPrecioOriginalItemGestion(
                        item
                    ),

                descuento_tipo:
                    item.descuento_tipo ||
                    null,

                descuento_valor:
                    Number(
                        item.descuento_valor
                    ) || 0,

                precio_unitario:
                    Number(
                        item.precio_unitario
                    ) || 0
            };

        }
    );

}


function actualizarTotalesVentaGestion() {

    const subtotal =
        obtenerSubtotalAntesDescuentoGeneralGestion();

    const descuentoGeneral =
        obtenerDescuentoGeneralMontoGestion();

    const total =
        Math.max(
            0,
            subtotal -
            descuentoGeneral
        );

    if (
        ventaSubtotalAntesDescuento
    ) {
        ventaSubtotalAntesDescuento.textContent =
            formatearPrecio(
                subtotal
            );
    }

    if (
        ventaDescuentoGeneralMonto
    ) {
        ventaDescuentoGeneralMonto.textContent =
            descuentoGeneral > 0
                ? `- ${formatearPrecio(
                    descuentoGeneral
                )}`
                : formatearPrecio(0);
    }

    if (
        ventaTotalElemento
    ) {
        ventaTotalElemento.textContent =
            formatearPrecio(
                total
            );
    }

    actualizarResumenCobro();

    if (
        typeof actualizarInfoEdicionVentaGestion ===
        "function"
    ) {
        actualizarInfoEdicionVentaGestion();
    }

}


ventaDescuentoGeneralTipo?.addEventListener(
    "change",
    () => {

        const tipo =
            obtenerDescuentoGeneralTipoGestion();

        if (
            ventaDescuentoGeneralValor
        ) {
            ventaDescuentoGeneralValor.disabled =
                !tipo;

            if (!tipo) {
                ventaDescuentoGeneralValor.value =
                    "0";
            }

            if (
                tipo === "porcentaje"
            ) {
                ventaDescuentoGeneralValor.max =
                    "100";
            } else {
                ventaDescuentoGeneralValor.removeAttribute(
                    "max"
                );
            }
        }

        actualizarTotalesVentaGestion();

    }
);


ventaDescuentoGeneralValor?.addEventListener(
    "input",
    () => {

        let valor =
            Number(
                ventaDescuentoGeneralValor.value
            ) || 0;

        valor =
            Math.max(
                0,
                valor
            );

        const tipo =
            obtenerDescuentoGeneralTipoGestion();

        if (
            tipo === "porcentaje"
        ) {
            valor =
                Math.min(
                    100,
                    valor
                );
        }

        if (
            tipo === "monto"
        ) {
            valor =
                Math.min(
                    obtenerSubtotalAntesDescuentoGeneralGestion(),
                    valor
                );
        }

        if (
            Number(
                ventaDescuentoGeneralValor.value
            ) !== valor
        ) {
            ventaDescuentoGeneralValor.value =
                String(valor);
        }

        actualizarTotalesVentaGestion();

    }
);


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
                        aplicarDescuentoItemGestion(
                            item
                        );
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

                    item.precio_unitario_original =
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

                    aplicarDescuentoItemGestion(
                        item
                    );

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

                item.precio_unitario_original =
                    Number(
                        producto.precio_minorista
                    ) || 0;

                item.precio_aplicado =
                    "Precio único";

            }

            aplicarDescuentoItemGestion(
                item
            );

        }
    );

}


// ========================================
// TOTAL DE VENTA
// ========================================

function obtenerTotalVentaActual() {

    const subtotal =
        obtenerSubtotalAntesDescuentoGeneralGestion();

    const descuentoGeneral =
        obtenerDescuentoGeneralMontoGestion();

    return Math.max(
        0,
        subtotal -
        descuentoGeneral
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

    normalizarDescuentosItemsGestion();

    if (
        itemsVentaActual.length === 0
    ) {

        ventaItemsContenedor.innerHTML = `
            <p class="venta-vacia">
                Todavía no agregaste productos.
            </p>
        `;

        actualizarTotalesVentaGestion();

        return;

    }

    ventaItemsContenedor.innerHTML =
        itemsVentaActual
            .map(
                (item, indice) => {

                    aplicarDescuentoItemGestion(
                        item
                    );

                    const precioOriginal =
                        obtenerPrecioOriginalItemGestion(
                            item
                        );

                    const subtotalOriginal =
                        Number(item.cantidad) *
                        precioOriginal;

                    const subtotalFinal =
                        Number(item.cantidad) *
                        Number(item.precio_unitario);

                    const descuentoLinea =
                        Math.max(
                            0,
                            subtotalOriginal -
                            subtotalFinal
                        );

                    const detalleDescuento =
                        item.descuento_tipo === "porcentaje"
                            ? `${Number(item.descuento_valor) || 0}% por unidad`
                            : item.descuento_tipo === "monto"
                                ? `${formatearPrecio(item.descuento_valor)} por unidad`
                                : "Sin descuento";

                    return `
                        <div class="venta-item venta-item-con-descuento">

                            <div class="venta-item-info">

                                <strong>
                                    ${escaparHTML(item.nombre)}
                                </strong>

                                <span>
                                    ${item.cantidad}
                                    ×
                                    ${formatearPrecio(precioOriginal)}
                                    ·
                                    ${escaparHTML(item.precio_aplicado)}
                                </span>

                                <div class="venta-item-descuento">

                                    <label>
                                        Descuento por unidad
                                    </label>

                                    <div class="venta-item-descuento-controles">

                                        <select
                                            class="venta-item-descuento-tipo"
                                            data-indice="${indice}"
                                            aria-label="Tipo de descuento"
                                        >
                                            <option value="" ${!item.descuento_tipo ? "selected" : ""}>
                                                Sin descuento
                                            </option>
                                            <option value="porcentaje" ${item.descuento_tipo === "porcentaje" ? "selected" : ""}>
                                                %
                                            </option>
                                            <option value="monto" ${item.descuento_tipo === "monto" ? "selected" : ""}>
                                                $
                                            </option>
                                        </select>

                                        <input
                                            type="number"
                                            min="0"
                                            step="1"
                                            class="venta-item-descuento-valor"
                                            data-indice="${indice}"
                                            value="${Number(item.descuento_valor) || 0}"
                                            ${!item.descuento_tipo ? "disabled" : ""}
                                            ${item.descuento_tipo === "porcentaje" ? 'max="100"' : ''}
                                            aria-label="Valor del descuento por unidad"
                                        >

                                    </div>

                                    <small>
                                        ${detalleDescuento}
                                        ${descuentoLinea > 0 ? ` · Descuento en esta línea: ${formatearPrecio(descuentoLinea)}` : ""}
                                    </small>

                                </div>

                            </div>


                            <div class="venta-item-derecha">

                                ${
                                    descuentoLinea > 0
                                        ? `
                                            <span class="venta-item-subtotal-original">
                                                ${formatearPrecio(subtotalOriginal)}
                                            </span>
                                        `
                                        : ""
                                }

                                <strong>
                                    ${formatearPrecio(subtotalFinal)}
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

    actualizarTotalesVentaGestion();

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

    document
        .querySelectorAll(
            ".venta-item-descuento-tipo"
        )
        .forEach(
            (select) => {

                select.addEventListener(
                    "change",
                    () => {

                        const indice =
                            Number(
                                select.dataset.indice
                            );

                        const item =
                            itemsVentaActual[indice];

                        if (!item) {
                            return;
                        }

                        const tipo =
                            select.value ||
                            null;

                        item.descuento_tipo =
                            tipo;

                        if (!tipo) {
                            item.descuento_valor =
                                0;
                        }

                        aplicarDescuentoItemGestion(
                            item
                        );

                        renderizarItemsVenta();

                    }
                );

            }
        );

    document
        .querySelectorAll(
            ".venta-item-descuento-valor"
        )
        .forEach(
            (input) => {

                input.addEventListener(
                    "change",
                    () => {

                        const indice =
                            Number(
                                input.dataset.indice
                            );

                        const item =
                            itemsVentaActual[indice];

                        if (!item) {
                            return;
                        }

                        let valor =
                            Math.max(
                                0,
                                Number(
                                    input.value
                                ) || 0
                            );

                        if (
                            item.descuento_tipo ===
                            "porcentaje"
                        ) {
                            valor =
                                Math.min(
                                    100,
                                    valor
                                );
                        }

                        if (
                            item.descuento_tipo ===
                            "monto"
                        ) {
                            valor =
                                Math.min(
                                    obtenerPrecioOriginalItemGestion(
                                        item
                                    ),
                                    valor
                                );
                        }

                        item.descuento_valor =
                            valor;

                        aplicarDescuentoItemGestion(
                            item
                        );

                        renderizarItemsVenta();

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

            precio_unitario_original:
                precio,

            descuento_tipo:
                null,

            descuento_valor:
                0,

            descuento_unitario:
                0,

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


        const fechaEmisionISO =
            obtenerFechaEmisionISOFormularioGestion();


        if (!fechaEmisionISO) {

            mostrarMensaje(
                mensajeConfirmarVenta,
                "Elegí una fecha de emisión válida."
            );

            return;

        }


        const estadoCobro =
            ventaEstadoCobro?.value ||
            "no-cobrado";


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
                prepararItemsDescuentoSupabaseGestion();


            const {
                data,
                error
            } =
                await supabaseClient.rpc(
                    "registrar_venta_v3",
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
                                ?.trim() || null,

                        p_descuento_general_tipo:
                            obtenerDescuentoGeneralTipoGestion(),

                        p_descuento_general_valor:
                            obtenerDescuentoGeneralValorGestion()

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


            const { error: errorFechaEmision } =
                await supabaseClient.rpc(
                    "establecer_fecha_emision_venta",
                    {
                        p_venta_id: Number(data),
                        p_fecha_emision: fechaEmisionISO
                    }
                );


            if (errorFechaEmision) {

                console.error(
                    "La venta se registró, pero no se pudo guardar la fecha de emisión elegida:",
                    errorFechaEmision
                );

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
                "no-cobrado";


            ventaPagoInicial.value =
                "";


            ventaMetodoPago.value =
                "";


            ventaObservaciones.value =
                "";


            establecerFechaEmisionActualGestion();


            actualizarEstadoCobroUI();


            await cargarProductosGestion();


            renderizarStock();


            await actualizarResumenGeneral();


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


    const clientesActivos =
        clientesGestion.filter(
            (cliente) =>
                cliente.activo !== false
        );


    if (!termino) {

        return clientesActivos;

    }


    return clientesActivos.filter(
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


    const clientesActivos =
        clientesGestion.filter(
            (cliente) =>
                cliente.activo !== false
        );


    const clientesFiltrados =
        obtenerClientesFiltrados();


    clientesContador.textContent =
        `${clientesActivos.length} ${
            clientesActivos.length === 1
                ? "cliente"
                : "clientes"
        }`;


    if (
        clientesActivos.length ===
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


                        <div
                            style="
                                display: flex;
                                gap: 8px;
                                align-items: center;
                            "
                        >

                            <button
                                type="button"
                                class="editar-cliente"
                                data-cliente-id="${cliente.id}"
                            >
                                Editar
                            </button>


                            <button
                                type="button"
                                class="eliminar-cliente"
                                data-cliente-id="${cliente.id}"
                                style="
                                    border: 1px solid #ef4444;
                                    color: #dc2626;
                                    background: #ffffff;
                                    border-radius: 10px;
                                    padding: 10px 16px;
                                    font-weight: 700;
                                    cursor: pointer;
                                "
                            >
                                Eliminar
                            </button>

                        </div>

                    </article>

                `
            )
            .join("");


    // ========================================
    // EDITAR
    // ========================================

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


    // ========================================
    // ELIMINAR
    // ========================================

    document
        .querySelectorAll(
            ".eliminar-cliente"
        )
        .forEach(
            (boton) => {

                boton.addEventListener(
                    "click",
                    async () => {

                        await eliminarClienteGestion(
                            Number(
                                boton.dataset.clienteId
                            ),
                            boton
                        );

                    }
                );

            }
        );

}


// ========================================
// ELIMINAR CLIENTE
// ========================================

async function eliminarClienteGestion(
    clienteId,
    boton = null
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


    const confirmar =
        window.confirm(
            `¿Seguro que querés eliminar a ${cliente.nombre}?\n\n` +
            "El cliente dejará de aparecer en la lista y en nuevas ventas, " +
            "pero sus ventas anteriores se conservarán."
        );


    if (!confirmar) {
        return;
    }


    if (boton) {

        boton.disabled = true;

        boton.textContent =
            "Eliminando...";

    }


    try {

        const {
            error
        } =
            await supabaseClient.rpc(
                "eliminar_cliente",
                {
                    p_cliente_id:
                        Number(clienteId)
                }
            );


        if (error) {

            console.error(
                "Error al eliminar cliente:",
                error
            );

            mostrarMensaje(
                mensajeCliente,
                error.message ||
                "No se pudo eliminar el cliente."
            );

            return;

        }


        if (
            Number(clienteEditandoId) ===
            Number(clienteId)
        ) {

            limpiarFormularioCliente();

        }


        await cargarClientesGestion();


        mostrarMensaje(
            mensajeCliente,
            `${cliente.nombre} fue eliminado correctamente.`,
            "exito"
        );


    } catch (error) {

        console.error(
            "Error al eliminar cliente:",
            error
        );


        mostrarMensaje(
            mensajeCliente,
            "No se pudo eliminar el cliente."
        );


    } finally {

        if (boton) {

            boton.disabled = false;

            boton.textContent =
                "Eliminar";

        }

    }

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

    resetearDescuentoGeneralGestion();

    cerrarSeccionesGestion();


    await cargarClientesGestion();


    seccionVenta?.classList.remove(
        "oculto"
    );


    campoFechaEmisionGestion
        ?.classList.remove(
            "oculto"
        );


    establecerFechaEmisionActualGestion();


    if (ventaEstadoCobro) {
        ventaEstadoCobro.value =
            "no-cobrado";
    }


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




// =========================================================
// NOTIFICACIONES PUSH / PWA
// =========================================================

function mostrarEstadoNotificacionesGestion(
    texto,
    tipo = "normal"
) {
    if (!estadoNotificacionesGestion) {
        return;
    }

    estadoNotificacionesGestion.textContent = texto;

    estadoNotificacionesGestion.classList.remove(
        "notificaciones-ok",
        "notificaciones-error"
    );

    if (tipo === "ok") {
        estadoNotificacionesGestion.classList.add(
            "notificaciones-ok"
        );
    }

    if (tipo === "error") {
        estadoNotificacionesGestion.classList.add(
            "notificaciones-error"
        );
    }
}


function esIOSGestion() {
    return /iphone|ipad|ipod/i.test(
        navigator.userAgent
    );
}


function esModoAppGestion() {
    return (
        window.matchMedia(
            "(display-mode: standalone)"
        ).matches ||
        window.navigator.standalone === true
    );
}


function convertirClaveVapidGestion(
    claveBase64
) {
    const relleno =
        "=".repeat(
            (4 - (claveBase64.length % 4)) % 4
        );

    const base64 =
        (claveBase64 + relleno)
            .replace(/-/g, "+")
            .replace(/_/g, "/");

    const datosCrudos =
        window.atob(base64);

    const salida =
        new Uint8Array(
            datosCrudos.length
        );

    for (
        let indice = 0;
        indice < datosCrudos.length;
        indice += 1
    ) {
        salida[indice] =
            datosCrudos.charCodeAt(indice);
    }

    return salida;
}


async function registrarServiceWorkerGestion() {
    if (
        !("serviceWorker" in navigator)
    ) {
        return null;
    }

    if (registroServiceWorkerGestion) {
        return registroServiceWorkerGestion;
    }

    try {
        registroServiceWorkerGestion =
            await navigator.serviceWorker.register(
                "./sw.js",
                {
                    scope: "./"
                }
            );

        await navigator.serviceWorker.ready;

        return registroServiceWorkerGestion;

    } catch (error) {
        console.error(
            "Error al registrar service worker:",
            error
        );

        return null;
    }
}


async function obtenerClaveVapidPublicaGestion() {
    const {
        data,
        error
    } =
        await supabaseClient
            .from("push_config")
            .select("vapid_public_key")
            .eq("id", 1)
            .maybeSingle();

    if (error) {
        throw error;
    }

    return (
        data?.vapid_public_key || ""
    ).trim();
}


async function guardarSuscripcionPushGestion(
    suscripcion
) {
    const {
        data: datosUsuario,
        error: errorUsuario
    } =
        await supabaseClient.auth.getUser();

    if (
        errorUsuario ||
        !datosUsuario?.user?.id
    ) {
        throw (
            errorUsuario ||
            new Error(
                "No hay una sesión válida para guardar las notificaciones."
            )
        );
    }

    const datosSuscripcion =
        suscripcion.toJSON();

    const endpoint =
        datosSuscripcion.endpoint ||
        suscripcion.endpoint;

    const p256dh =
        datosSuscripcion.keys?.p256dh ||
        "";

    const auth =
        datosSuscripcion.keys?.auth ||
        "";

    if (
        !endpoint ||
        !p256dh ||
        !auth
    ) {
        throw new Error(
            "El navegador no devolvió todos los datos de la suscripción push."
        );
    }

    const {
        error
    } =
        await supabaseClient
            .from("push_subscriptions")
            .upsert(
                {
                    user_id:
                        datosUsuario.user.id,
                    endpoint,
                    p256dh,
                    auth,
                    user_agent:
                        navigator.userAgent,
                    updated_at:
                        new Date().toISOString()
                },
                {
                    onConflict: "endpoint"
                }
            );

    if (error) {
        throw error;
    }
}


async function actualizarEstadoNotificacionesGestion() {
    if (
        !botonActivarNotificacionesGestion
    ) {
        return;
    }

    if (
        !("Notification" in window) ||
        !("PushManager" in window) ||
        !("serviceWorker" in navigator)
    ) {
        botonActivarNotificacionesGestion.disabled =
            true;

        botonActivarNotificacionesGestion.textContent =
            "No disponible";

        mostrarEstadoNotificacionesGestion(
            "Este navegador no admite notificaciones push.",
            "error"
        );

        return;
    }

    if (
        esIOSGestion() &&
        !esModoAppGestion()
    ) {
        botonActivarNotificacionesGestion.disabled =
            false;

        botonActivarNotificacionesGestion.textContent =
            "Cómo activarlas en iPhone";

        mostrarEstadoNotificacionesGestion(
            "En iPhone primero agregá Gestión a la pantalla de inicio."
        );

        return;
    }

    const registro =
        await registrarServiceWorkerGestion();

    if (!registro) {
        botonActivarNotificacionesGestion.disabled =
            true;

        botonActivarNotificacionesGestion.textContent =
            "No disponible";

        mostrarEstadoNotificacionesGestion(
            "No se pudo preparar el servicio de notificaciones.",
            "error"
        );

        return;
    }

    const suscripcion =
        await registro.pushManager
            .getSubscription();

    if (
        Notification.permission ===
            "granted" &&
        suscripcion
    ) {
        try {
            await guardarSuscripcionPushGestion(
                suscripcion
            );
        } catch (error) {
            console.error(
                "No se pudo actualizar la suscripción push:",
                error
            );
        }

        botonActivarNotificacionesGestion.disabled =
            true;

        botonActivarNotificacionesGestion.textContent =
            "Notificaciones activadas";

        mostrarEstadoNotificacionesGestion(
            "Te vamos a avisar apenas entre un pedido web.",
            "ok"
        );

        return;
    }

    if (
        Notification.permission ===
        "denied"
    ) {
        botonActivarNotificacionesGestion.disabled =
            true;

        botonActivarNotificacionesGestion.textContent =
            "Permiso bloqueado";

        mostrarEstadoNotificacionesGestion(
            "Las notificaciones están bloqueadas en los ajustes del dispositivo.",
            "error"
        );

        return;
    }

    botonActivarNotificacionesGestion.disabled =
        false;

    botonActivarNotificacionesGestion.textContent =
        "Activar notificaciones";

    mostrarEstadoNotificacionesGestion(
        "Activá los avisos para enterarte apenas entre un pedido."
    );
}


async function activarNotificacionesGestion() {
    if (
        esIOSGestion() &&
        !esModoAppGestion()
    ) {
        window.alert(
            "En iPhone hacé esto:\n\n1. Abrí Gestión en Safari.\n2. Tocá Compartir.\n3. Elegí ‘Agregar a pantalla de inicio’.\n4. Abrí VO IMPORT desde el ícono nuevo.\n5. Volvé a tocar ‘Activar notificaciones’."
        );

        return;
    }

    botonActivarNotificacionesGestion.disabled =
        true;

    botonActivarNotificacionesGestion.textContent =
        "Activando...";

    mostrarEstadoNotificacionesGestion(
        "Preparando notificaciones..."
    );

    try {
        const registro =
            await registrarServiceWorkerGestion();

        if (!registro) {
            throw new Error(
                "No se pudo registrar el service worker."
            );
        }

        const permiso =
            await Notification.requestPermission();

        if (permiso !== "granted") {
            throw new Error(
                "No se otorgó permiso para mostrar notificaciones."
            );
        }

        let suscripcion =
            await registro.pushManager
                .getSubscription();

        if (!suscripcion) {
            const claveVapid =
                await obtenerClaveVapidPublicaGestion();

            if (!claveVapid) {
                throw new Error(
                    "Todavía falta configurar la clave de notificaciones en Supabase."
                );
            }

            suscripcion =
                await registro.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey:
                        convertirClaveVapidGestion(
                            claveVapid
                        )
                });
        }

        await guardarSuscripcionPushGestion(
            suscripcion
        );

        botonActivarNotificacionesGestion.textContent =
            "Notificaciones activadas";

        botonActivarNotificacionesGestion.disabled =
            true;

        mostrarEstadoNotificacionesGestion(
            "Listo. Te vamos a avisar apenas entre un pedido web.",
            "ok"
        );

    } catch (error) {
        console.error(
            "Error al activar notificaciones:",
            error
        );

        botonActivarNotificacionesGestion.disabled =
            false;

        botonActivarNotificacionesGestion.textContent =
            "Activar notificaciones";

        mostrarEstadoNotificacionesGestion(
            error?.message ||
                "No se pudieron activar las notificaciones.",
            "error"
        );
    }
}


async function procesarAccesoDesdeNotificacionGestion() {
    const parametros =
        new URLSearchParams(
            window.location.search
        );

    if (
        parametros.get("pedidos_web") !==
        "1"
    ) {
        return;
    }

    await abrirPedidosWebGestion();

    parametros.delete(
        "pedidos_web"
    );

    const consultaRestante =
        parametros.toString();

    const nuevaURL =
        `${window.location.pathname}${
            consultaRestante
                ? `?${consultaRestante}`
                : ""
        }${window.location.hash}`;

    window.history.replaceState(
        {},
        document.title,
        nuevaURL
    );
}


async function iniciarNotificacionesGestion() {
    await registrarServiceWorkerGestion();
    await actualizarEstadoNotificacionesGestion();
}


botonActivarNotificacionesGestion
    ?.addEventListener(
        "click",
        activarNotificacionesGestion
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


    await actualizarResumenGeneral();

    renderizarStock();

    renderizarItemsVenta();

    actualizarPrecioVentaPreview();

    actualizarEstadoCobroUI();

    await iniciarNotificacionesGestion();

    await procesarAccesoDesdeNotificacionGestion();

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

                        precio_unitario_original:
                            Number(
                                item.precio_unitario_original ??
                                item.precio_unitario
                            ) || 0,

                        descuento_tipo:
                            item.descuento_tipo ||
                            null,

                        descuento_valor:
                            Number(
                                item.descuento_valor
                            ) || 0,

                        descuento_unitario:
                            Number(
                                item.descuento_unitario
                            ) || 0,

                        precio_unitario:
                            precioActual,

                        precio_aplicado:
                            esPrecioAutomatico
                                ? "Automático"
                                : "Personalizado"

                    };

                }
            );


    establecerDescuentoGeneralGestion(
        venta.descuento_general_tipo ||
        null,
        Number(
            venta.descuento_general_valor
        ) || 0
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


    campoFechaEmisionGestion
        ?.classList.remove(
            "oculto"
        );


    if (ventaFechaEmision) {
        ventaFechaEmision.value =
            fechaLocalParaInputGestion(
                venta.fecha_emision ||
                venta.created_at
            );
    }


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


    campoFechaEmisionGestion
        ?.classList.remove(
            "oculto"
        );


    establecerFechaEmisionActualGestion();


    ventaEstadoCobro.value =
        "no-cobrado";


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


        resetearDescuentoGeneralGestion();


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


        const fechaEmisionISO =
            obtenerFechaEmisionISOFormularioGestion();


        if (!fechaEmisionISO) {

            mostrarMensaje(
                mensajeConfirmarVenta,
                "Elegí una fecha de emisión válida."
            );

            return;

        }


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
                prepararItemsDescuentoSupabaseGestion();


            const {
                data,
                error
            } =
                await supabaseClient.rpc(
                    "editar_venta_v2",
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
                                ?.trim() || null,

                        p_descuento_general_tipo:
                            obtenerDescuentoGeneralTipoGestion(),

                        p_descuento_general_valor:
                            obtenerDescuentoGeneralValorGestion()

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


            const { error: errorFechaEmision } =
                await supabaseClient.rpc(
                    "establecer_fecha_emision_venta",
                    {
                        p_venta_id: ventaIdGuardando,
                        p_fecha_emision: fechaEmisionISO
                    }
                );


            if (errorFechaEmision) {

                console.error(
                    "No se pudo actualizar la fecha de emisión:",
                    errorFechaEmision
                );


                mostrarMensaje(
                    mensajeConfirmarVenta,
                    "La venta se actualizó, pero no pudimos cambiar la fecha de emisión."
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

            await actualizarResumenGeneral();


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

                        precio_unitario_original:
                            Number(
                                item.precio_unitario_original ??
                                item.precio_unitario
                            ) || 0,

                        descuento_tipo:
                            item.descuento_tipo ||
                            null,

                        descuento_valor:
                            Number(
                                item.descuento_valor
                            ) || 0,

                        descuento_unitario:
                            Number(
                                item.descuento_unitario
                            ) || 0,

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


    campoFechaEmisionGestion
        ?.classList.add(
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


        establecerDescuentoGeneralGestion(
            presupuesto.descuento_general_tipo ||
            null,
            Number(
                presupuesto.descuento_general_valor
            ) || 0
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


        resetearDescuentoGeneralGestion();


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
        "no-cobrado";


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


        resetearDescuentoGeneralGestion();


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
                prepararItemsDescuentoSupabaseGestion();


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
                        "editar_presupuesto_v2",
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
                                null,

                            p_descuento_general_tipo:
                                obtenerDescuentoGeneralTipoGestion(),

                            p_descuento_general_valor:
                                obtenerDescuentoGeneralValorGestion()

                        }
                    );

            } else {

                resultado =
                    await supabaseClient.rpc(
                        "crear_presupuesto_v2",
                        {

                            p_items:
                                itemsParaSupabase,

                            p_cliente_id:
                                clienteId,

                            p_observaciones:
                                ventaObservaciones
                                    ?.value
                                    ?.trim() ||
                                null,

                            p_descuento_general_tipo:
                                obtenerDescuentoGeneralTipoGestion(),

                            p_descuento_general_valor:
                                obtenerDescuentoGeneralValorGestion()

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

                                precio_unitario_original:
                                    Number(
                                        item.precio_unitario_original ??
                                        item.precio_unitario
                                    ) || 0,

                                descuento_tipo:
                                    item.descuento_tipo ||
                                    null,

                                descuento_valor:
                                    Number(
                                        item.descuento_valor
                                    ) || 0,

                                precio_unitario:
                                    item.precio_unitario

                            })
                        );


                    const {
                        error: errorCliente
                    } =
                        await supabaseClient.rpc(
                            "editar_presupuesto_v2",
                            {

                                p_presupuesto_id:
                                    presupuesto.id,

                                p_items:
                                    itemsPresupuesto,

                                p_cliente_id:
                                    clienteId,

                                p_observaciones:
                                    presupuesto.observaciones ||
                                    null,

                                p_descuento_general_tipo:
                                    presupuesto.descuento_general_tipo ||
                                    null,

                                p_descuento_general_valor:
                                    Number(
                                        presupuesto.descuento_general_valor
                                    ) || 0

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
                        "convertir_presupuesto_a_venta_v2",
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
        productoSupabase?.nombre ||
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
// DISEÑADORES - INSPIRACIONES
// =========================================================

const nombresDisenadoresGestion = {
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


function obtenerDisenadorMostrarGestion(
    productoSupabase,
    productoLocal
) {
    const clave = String(
        productoLocal?.disenador ||
        productoSupabase?.disenador ||
        ""
    ).trim();

    if (!clave) {
        return "";
    }

    return nombresDisenadoresGestion[clave] ||
        clave
            .split("-")
            .filter(Boolean)
            .map(
                (parte) =>
                    parte.charAt(0).toUpperCase() +
                    parte.slice(1)
            )
            .join(" ");
}


function esInspiracionDisenadorGestion(producto) {
    return (
        producto?.categoria_mostrar ===
            "inspiraciones-disenador" ||
        (
            producto?.categoria_mostrar === "decants" &&
            producto?.linea_mostrar === "inspiraciones"
        )
    );
}


function obtenerReferenciaProductoGestion(producto) {
    // En inspiraciones el diseñador ya forma parte del nombre visible
    // (ej.: "Azzaro Wanted"), así evitamos repetirlo debajo.
    if (esInspiracionDisenadorGestion(producto)) {
        return "";
    }

    return producto?.marca_mostrar || "";
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


                    const disenadorMostrar =
                        obtenerDisenadorMostrarGestion(
                            productoSupabase,
                            productoLocal
                        );


                    const categoriaMostrar =
                        productoSupabase?.categoria ||
                        productoLocal?.categoria ||
                        "sin-categoria";


                    const lineaMostrar =
                        productoSupabase?.linea ||
                        productoLocal?.linea ||
                        "";


                    const esInspiracionDisenador =
                        categoriaMostrar === "inspiraciones-disenador" ||
                        (
                            categoriaMostrar === "decants" &&
                            lineaMostrar === "inspiraciones"
                        );


                    let nombreMostrar =
                        nombreCompleto;


                    if (
                        esInspiracionDisenador &&
                        disenadorMostrar
                    ) {
                        const nombreNormalizado =
                            normalizarBusquedaProducto(
                                nombreCompleto
                            );

                        const disenadorNormalizado =
                            normalizarBusquedaProducto(
                                disenadorMostrar
                            );

                        if (
                            !nombreNormalizado.startsWith(
                                disenadorNormalizado
                            )
                        ) {
                            nombreMostrar =
                                `${disenadorMostrar} ${nombreCompleto}`;
                        }
                    }


                    return {

                        ...productoSupabase,

                        // Inspiraciones: diseñador primero para que el orden
                        // alfabético quede igual que en la web.
                        // Ej.: "Azzaro Wanted — Perfume 60 ml".
                        nombre_mostrar:
                            nombreMostrar,

                        marca_mostrar:
                            productoSupabase?.marca ||
                            productoLocal?.marca ||
                            "",

                        disenador_mostrar:
                            disenadorMostrar,

                        categoria_mostrar:
                            categoriaMostrar,

                        linea_mostrar:
                            lineaMostrar,

                        tipo_mostrar:
                            productoSupabase?.tipo ||
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


    actualizarCapitalStockGestion();

    await actualizarDisponibleRetirarGestion();


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
                fecha_emision,
                total,
                subtotal_antes_descuento_general,
                descuento_general_tipo,
                descuento_general_valor,
                descuento_general_monto,
                cliente_id,
                metodo_pago,
                observaciones,
                anulada,
                anulada_at,
                motivo_anulacion,
                editada_at
            `)
            .order(
                "fecha_emision",
                {
                    ascending: false
                }
            )
            .order(
                "id",
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
                precio_unitario_original,
                descuento_tipo,
                descuento_valor,
                descuento_unitario,
                precio_unitario,
                costo_unitario,
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


                const itemsVenta =
                    itemsPorVenta.get(
                        venta.id
                    ) || [];


                const costoCompleto =
                    itemsVenta.length > 0 &&
                    itemsVenta.every(
                        (item) =>
                            item.costo_unitario !== null &&
                            item.costo_unitario !== undefined &&
                            item.costo_unitario !== "" &&
                            Number.isFinite(
                                Number(
                                    item.costo_unitario
                                )
                            )
                    );


                const costoTotal =
                    costoCompleto
                        ? itemsVenta.reduce(
                            (
                                total,
                                item
                            ) =>
                                total +
                                (
                                    Number(
                                        item.cantidad
                                    ) *
                                    Number(
                                        item.costo_unitario
                                    )
                                ),
                            0
                        )
                        : null;


                const gananciaVenta =
                    costoTotal === null
                        ? null
                        : totalVenta -
                            costoTotal;


                const margenVenta =
                    gananciaVenta === null ||
                    totalVenta <= 0
                        ? null
                        : (
                            gananciaVenta /
                            totalVenta
                        ) * 100;


                return {

                    ...venta,

                    numero_visible:
                        obtenerNumeroVentaVisibleGestion(
                            venta.id
                        ),

                    items:
                        itemsVenta,

                    pagos,

                    pagado,

                    costo_total:
                        costoTotal,

                    ganancia:
                        gananciaVenta,

                    margen:
                        margenVenta,

                    costo_pendiente:
                        !costoCompleto,

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
                                        Fecha de emisión: ${escaparHTML(
                                            formatearFechaHora(
                                                venta.fecha_emision ||
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
                subtotal_antes_descuento_general,
                descuento_general_tipo,
                descuento_general_valor,
                descuento_general_monto,
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
                precio_unitario_original,
                descuento_tipo,
                descuento_valor,
                descuento_unitario,
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
                                                            item.precio_unitario_original ??
                                                            item.precio_unitario
                                                        )}

                                                        ${
                                                            Number(item.descuento_unitario) > 0
                                                                ? ` · Desc. ${
                                                                    item.descuento_tipo === "porcentaje"
                                                                        ? `${Number(item.descuento_valor) || 0}%`
                                                                        : formatearPrecio(item.descuento_unitario)
                                                                } p/u`
                                                                : ""
                                                        }
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

    };// =========================================================
// ADMINISTRADOR DE PRODUCTOS DESDE STOCK
// =========================================================

let productoEditandoStockIdGestion = null;

let formulaUsdtEditadaProductoGestion = false;


// =========================================================
// MENSAJE DE STOCK
// =========================================================

let mensajeStockGestion =
    document.getElementById("mensaje-stock-gestion");


if (
    seccionStock &&
    !mensajeStockGestion
) {

    mensajeStockGestion =
        document.createElement("p");


    mensajeStockGestion.id =
        "mensaje-stock-gestion";


    mensajeStockGestion.className =
        "venta-mensaje mensaje-stock-gestion";


    stockCategorias?.insertAdjacentElement(
        "beforebegin",
        mensajeStockGestion
    );

}


// =========================================================
// CREAR MODAL EDITAR PRODUCTO
// =========================================================

let modalEditarProductoGestion =
    document.getElementById(
        "modal-editar-producto-gestion"
    );


if (!modalEditarProductoGestion) {

    modalEditarProductoGestion =
        document.createElement("div");


    modalEditarProductoGestion.id =
        "modal-editar-producto-gestion";


    modalEditarProductoGestion.className =
        "modal-editar-producto oculto";


    modalEditarProductoGestion.innerHTML = `
        <div class="modal-editar-producto-contenido">

            <div class="modal-editar-producto-encabezado">

                <div>
                    <h3>Editar producto</h3>
                    <p id="editar-producto-nombre"></p>
                </div>

                <button
                    type="button"
                    id="cerrar-editar-producto"
                    aria-label="Cerrar"
                >
                    ×
                </button>

            </div>

            <form id="form-editar-producto-gestion">

                <div class="editar-producto-seccion editar-producto-seccion-general">

                    <div class="editar-producto-seccion-titulo">
                        <strong>Stock</strong>
                        <span>Corrección manual</span>
                    </div>

                    <div class="campo">
                        <label for="editar-producto-stock">
                            Stock actual
                        </label>

                        <input
                            type="number"
                            id="editar-producto-stock"
                            min="0"
                            step="1"
                            required
                        >

                        <small>
                            Usalo para correcciones manuales. Las reposiciones se registrarán aparte.
                        </small>
                    </div>

                </div>

                <div class="editar-producto-seccion editar-producto-seccion-costo">

                    <div class="editar-producto-seccion-titulo">
                        <strong>Costo</strong>
                        <span>Base para calcular los precios</span>
                    </div>

                    <div
                        id="editar-producto-calculadora-usdt"
                        class="editar-producto-calculadora-usdt oculto"
                    >

                        <div class="editar-producto-usdt-grid">

                            <div class="campo">
                                <label for="editar-producto-precio-proveedor-usdt">
                                    Precio proveedor
                                </label>

                                <div class="editar-producto-input-unidad">
                                    <input
                                        type="number"
                                        id="editar-producto-precio-proveedor-usdt"
                                        min="0"
                                        step="0.01"
                                        placeholder="Ej: 30"
                                    >
                                    <span>USDT</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="editar-producto-recargo-usdt">
                                    Recargo
                                </label>

                                <div class="editar-producto-input-unidad">
                                    <input
                                        type="number"
                                        id="editar-producto-recargo-usdt"
                                        min="0"
                                        step="0.01"
                                        value="4"
                                    >
                                    <span>USDT</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="editar-producto-dolar-costo">
                                    Dólar de costo
                                </label>

                                <div class="editar-producto-input-unidad editar-producto-input-pesos">
                                    <span>$</span>
                                    <input
                                        type="number"
                                        id="editar-producto-dolar-costo"
                                        min="0.01"
                                        step="0.01"
                                        value="1600"
                                    >
                                </div>
                            </div>

                        </div>

                        <small class="editar-producto-formula-usdt">
                            Fórmula: (precio proveedor + recargo) × dólar de costo.
                        </small>

                    </div>

                    <div
                        id="editar-producto-calculadora-decant"
                        class="editar-producto-calculadora-decant oculto"
                    >

                        <div class="campo editar-producto-decant-base">
                            <label for="editar-producto-decant-base">
                                Perfume base
                            </label>

                            <select id="editar-producto-decant-base">
                                <option value="">Seleccionar perfume...</option>
                            </select>

                            <small id="editar-producto-decant-base-ayuda">
                                Elegí el perfume original del que sale este decant.
                            </small>
                        </div>

                        <div class="editar-producto-decant-grid">

                            <div class="campo">
                                <label for="editar-producto-decant-ml-base">
                                    Contenido del perfume
                                </label>

                                <div class="editar-producto-input-unidad">
                                    <input
                                        type="number"
                                        id="editar-producto-decant-ml-base"
                                        min="0.01"
                                        step="0.01"
                                        value="100"
                                    >
                                    <span>ml</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="editar-producto-decant-ml-tester">
                                    Reserva para tester
                                </label>

                                <div class="editar-producto-input-unidad">
                                    <input
                                        type="number"
                                        id="editar-producto-decant-ml-tester"
                                        min="0"
                                        step="0.01"
                                        value="5"
                                    >
                                    <span>ml</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="editar-producto-decant-ml">
                                    Tamaño del decant
                                </label>

                                <div class="editar-producto-input-unidad">
                                    <input
                                        type="number"
                                        id="editar-producto-decant-ml"
                                        min="0.01"
                                        step="0.01"
                                        value="5"
                                    >
                                    <span>ml</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="editar-producto-decant-insumos">
                                    Insumos por unidad
                                </label>

                                <div class="editar-producto-input-unidad editar-producto-input-pesos">
                                    <span>$</span>
                                    <input
                                        type="number"
                                        id="editar-producto-decant-insumos"
                                        min="0"
                                        step="1"
                                        value="1800"
                                    >
                                </div>
                            </div>

                            <div class="campo">
                                <label for="editar-producto-decant-redondeo">
                                    Redondear hacia arriba cada
                                </label>

                                <div class="editar-producto-input-unidad editar-producto-input-pesos">
                                    <span>$</span>
                                    <input
                                        type="number"
                                        id="editar-producto-decant-redondeo"
                                        min="1"
                                        step="1"
                                        value="500"
                                    >
                                </div>
                            </div>

                        </div>

                        <div class="editar-producto-decant-resumen">
                            <div>
                                <span>Decants vendibles</span>
                                <strong id="editar-producto-decant-vendibles">—</strong>
                            </div>

                            <div>
                                <span>Costo perfume base</span>
                                <strong id="editar-producto-decant-costo-base">—</strong>
                            </div>
                        </div>

                        <small class="editar-producto-formula-usdt">
                            El costo del tester queda repartido entre los decants vendibles. El resultado se redondea siempre hacia arriba.
                        </small>

                    </div>

                    <div class="campo editar-producto-costo-final">
                        <label
                            for="editar-producto-costo"
                            id="editar-producto-costo-label"
                        >
                            Costo actual
                        </label>

                        <input
                            type="number"
                            id="editar-producto-costo"
                            min="0"
                            step="0.01"
                            placeholder="Ej: 50000"
                        >

                        <small id="editar-producto-costo-ayuda">
                            Cargá el costo del producto. Si todavía no querés configurarlo, podés dejar costo y porcentajes vacíos.
                        </small>
                    </div>

                </div>

                <div class="editar-producto-precios-separados">

                    <div class="editar-producto-seccion editar-producto-seccion-precio">

                        <div class="editar-producto-seccion-titulo">
                            <strong>Mayorista</strong>
                            <span>Editá margen o precio</span>
                        </div>

                        <div class="campo">
                            <label for="editar-producto-markup-mayorista">
                                Porcentaje sobre costo (%)
                            </label>

                            <input
                                type="number"
                                id="editar-producto-markup-mayorista"
                                min="0"
                                step="0.000001"
                                placeholder="Ej: 40"
                            >
                        </div>

                        <div class="campo editar-producto-calculado">
                            <label for="editar-producto-mayorista">
                                Precio mayorista
                            </label>

                            <input
                                type="number"
                                id="editar-producto-mayorista"
                                min="0"
                                step="1"
                            >

                            <small>
                                Podés editar el precio. El margen se ajusta automáticamente.
                            </small>
                        </div>

                    </div>

                    <div class="editar-producto-seccion editar-producto-seccion-precio">

                        <div class="editar-producto-seccion-titulo">
                            <strong>Minorista</strong>
                            <span>Editá margen o precio</span>
                        </div>

                        <div class="campo">
                            <label for="editar-producto-markup-minorista">
                                Porcentaje sobre costo (%)
                            </label>

                            <input
                                type="number"
                                id="editar-producto-markup-minorista"
                                min="0"
                                step="0.000001"
                                placeholder="Ej: 90"
                            >
                        </div>

                        <div class="campo editar-producto-calculado">
                            <label for="editar-producto-minorista">
                                Precio minorista
                            </label>

                            <input
                                type="number"
                                id="editar-producto-minorista"
                                min="0"
                                step="1"
                            >

                            <small>
                                Podés editar el precio. El margen se ajusta automáticamente.
                            </small>
                        </div>

                    </div>

                </div>

                <label class="editar-producto-visible">
                    <input
                        type="checkbox"
                        id="editar-producto-activo"
                    >

                    <span>
                        Producto visible / activo
                    </span>
                </label>

                <div class="editar-producto-codigo">

                    <div>
                        <span>Código de barras</span>
                        <strong id="editar-producto-codigo-texto">
                            Sin código
                        </strong>
                    </div>

                    <button
                        type="button"
                        id="editar-producto-codigo-boton"
                    >
                        Asignar / cambiar
                    </button>

                </div>

                <p
                    class="venta-mensaje"
                    id="mensaje-editar-producto"
                ></p>

                <div class="editar-producto-acciones-principales">

                    <button
                        type="submit"
                        id="guardar-editar-producto"
                    >
                        Guardar cambios
                    </button>

                    <button
                        type="button"
                        id="cancelar-editar-producto"
                    >
                        Cancelar
                    </button>

                </div>

                <div class="editar-producto-zona-peligro">

                    <div>
                        <strong>¿Ya no vendés este producto?</strong>
                        <span>
                            Retirarlo no borra las ventas anteriores. Solo desaparece de la web y de nuevas operaciones.
                        </span>
                    </div>

                    <button
                        type="button"
                        id="retirar-producto-gestion"
                    >
                        Retirar producto
                    </button>

                </div>

            </form>

        </div>
    `;


    document.body.appendChild(
        modalEditarProductoGestion
    );

}


const editarProductoNombreGestion =
    document.getElementById(
        "editar-producto-nombre"
    );

const formEditarProductoGestion =
    document.getElementById(
        "form-editar-producto-gestion"
    );

const editarProductoStockGestion =
    document.getElementById(
        "editar-producto-stock"
    );

const editarProductoCostoGestion =
    document.getElementById(
        "editar-producto-costo"
    );

const editarProductoCalculadoraUsdtGestion =
    document.getElementById(
        "editar-producto-calculadora-usdt"
    );

const editarProductoPrecioProveedorUsdtGestion =
    document.getElementById(
        "editar-producto-precio-proveedor-usdt"
    );

const editarProductoRecargoUsdtGestion =
    document.getElementById(
        "editar-producto-recargo-usdt"
    );

const editarProductoDolarCostoGestion =
    document.getElementById(
        "editar-producto-dolar-costo"
    );

const editarProductoCalculadoraDecantGestion =
    document.getElementById(
        "editar-producto-calculadora-decant"
    );

const editarProductoDecantBaseGestion =
    document.getElementById(
        "editar-producto-decant-base"
    );

const editarProductoDecantMlBaseGestion =
    document.getElementById(
        "editar-producto-decant-ml-base"
    );

const editarProductoDecantMlTesterGestion =
    document.getElementById(
        "editar-producto-decant-ml-tester"
    );

const editarProductoDecantMlGestion =
    document.getElementById(
        "editar-producto-decant-ml"
    );

const editarProductoDecantInsumosGestion =
    document.getElementById(
        "editar-producto-decant-insumos"
    );

const editarProductoDecantRedondeoGestion =
    document.getElementById(
        "editar-producto-decant-redondeo"
    );

const editarProductoDecantVendiblesGestion =
    document.getElementById(
        "editar-producto-decant-vendibles"
    );

const editarProductoDecantCostoBaseGestion =
    document.getElementById(
        "editar-producto-decant-costo-base"
    );

const editarProductoDecantBaseAyudaGestion =
    document.getElementById(
        "editar-producto-decant-base-ayuda"
    );

const editarProductoCostoLabelGestion =
    document.getElementById(
        "editar-producto-costo-label"
    );

const editarProductoCostoAyudaGestion =
    document.getElementById(
        "editar-producto-costo-ayuda"
    );

const editarProductoMarkupMayoristaGestion =
    document.getElementById(
        "editar-producto-markup-mayorista"
    );

const editarProductoMarkupMinoristaGestion =
    document.getElementById(
        "editar-producto-markup-minorista"
    );

const editarProductoMinoristaGestion =
    document.getElementById(
        "editar-producto-minorista"
    );

const editarProductoMayoristaGestion =
    document.getElementById(
        "editar-producto-mayorista"
    );

const editarProductoActivoGestion =
    document.getElementById(
        "editar-producto-activo"
    );

const editarProductoCodigoTextoGestion =
    document.getElementById(
        "editar-producto-codigo-texto"
    );

const botonEditarProductoCodigoGestion =
    document.getElementById(
        "editar-producto-codigo-boton"
    );

const mensajeEditarProductoGestion =
    document.getElementById(
        "mensaje-editar-producto"
    );

const botonGuardarEditarProductoGestion =
    document.getElementById(
        "guardar-editar-producto"
    );

const botonRetirarProductoGestion =
    document.getElementById(
        "retirar-producto-gestion"
    );

const botonCerrarEditarProductoGestion =
    document.getElementById(
        "cerrar-editar-producto"
    );

const botonCancelarEditarProductoGestion =
    document.getElementById(
        "cancelar-editar-producto"
    );


// =========================================================
// COSTO EN USDT - SOLO PRODUCTOS IMPORTADOS
// =========================================================

function productoUsaCalculadoraUsdtGestion(
    producto
) {

    const categoria =
        String(
            producto?.categoria_mostrar ||
            ""
        );


    return (
        categoria === "perfumes-grandes" ||
        categoria === "maison-30ml"
    );

}


// =========================================================
// COSTO AUTOMÁTICO DE DECANTS
// =========================================================

function productoEsDecantGestion(
    producto
) {

    return String(
        producto?.categoria_mostrar ||
        ""
    ) === "decants";

}


function obtenerMlNumericosProductoGestion(
    producto
) {

    const textos = [
        producto?.presentacion_mostrar,
        producto?.nombre_mostrar,
        producto?.presentacion
    ];


    for (const texto of textos) {

        const coincidencia =
            String(texto || "")
                .match(/(\d+(?:[.,]\d+)?)\s*ml\b/i);


        if (coincidencia) {

            const valor =
                Number(
                    coincidencia[1]
                        .replace(",", ".")
                );


            if (
                Number.isFinite(valor) &&
                valor > 0
            ) {
                return valor;
            }

        }

    }


    return 100;

}


function cargarOpcionesPerfumeBaseDecantGestion(
    decant
) {

    if (!editarProductoDecantBaseGestion) {
        return;
    }


    const opciones =
        productosGestion
            .filter(
                (producto) =>
                    producto.retirado !== true &&
                    Number(producto.id) !== Number(decant?.id) &&
                    !productoEsDecantGestion(producto)
            )
            .sort(
                (a, b) =>
                    String(a.nombre_mostrar || "")
                        .localeCompare(
                            String(b.nombre_mostrar || ""),
                            "es",
                            {
                                numeric: true,
                                sensitivity: "base"
                            }
                        )
            );


    editarProductoDecantBaseGestion.innerHTML =
        `<option value="">Seleccionar perfume...</option>` +
        opciones
            .map(
                (producto) => `
                    <option value="${producto.id}">
                        ${escaparHTML(producto.nombre_mostrar)}
                    </option>
                `
            )
            .join("");

}


function calcularCostoDecantProductoGestion() {

    const producto =
        productosGestion.find(
            (producto) =>
                Number(producto.id) ===
                Number(productoEditandoStockIdGestion)
        );


    if (
        !producto ||
        !productoEsDecantGestion(producto)
    ) {
        return;
    }


    const productoBaseId =
        Number(
            editarProductoDecantBaseGestion?.value ||
            0
        );


    const productoBase =
        productosGestion.find(
            (item) =>
                Number(item.id) ===
                productoBaseId
        );


    const mlBase =
        Number(
            editarProductoDecantMlBaseGestion?.value ||
            0
        );

    const mlTester =
        Number(
            editarProductoDecantMlTesterGestion?.value ||
            0
        );

    const mlDecant =
        Number(
            editarProductoDecantMlGestion?.value ||
            0
        );

    const insumos =
        Number(
            editarProductoDecantInsumosGestion?.value ||
            0
        );

    const redondeo =
        Number(
            editarProductoDecantRedondeoGestion?.value ||
            0
        );


    const costoBase =
        Number(
            productoBase?.costo_actual
        );


    const vendibles =
        mlBase > 0 &&
        mlDecant > 0 &&
        mlTester >= 0 &&
        mlTester < mlBase
            ? Math.floor(
                (mlBase - mlTester) /
                mlDecant
            )
            : 0;


    if (editarProductoDecantVendiblesGestion) {
        editarProductoDecantVendiblesGestion.textContent =
            vendibles > 0
                ? String(vendibles)
                : "—";
    }


    if (editarProductoDecantCostoBaseGestion) {
        editarProductoDecantCostoBaseGestion.textContent =
            Number.isFinite(costoBase) &&
            costoBase >= 0
                ? formatearPrecio(costoBase)
                : "Sin costo";
    }


    if (editarProductoDecantBaseAyudaGestion) {
        editarProductoDecantBaseAyudaGestion.textContent =
            productoBase &&
            !(
                Number.isFinite(costoBase) &&
                costoBase >= 0
            )
                ? "Este perfume todavía no tiene costo cargado. Cargalo primero para calcular el decant."
                : "Elegí el perfume original del que sale este decant.";
    }


    if (
        !productoBase ||
        !Number.isFinite(costoBase) ||
        costoBase < 0 ||
        vendibles <= 0 ||
        !Number.isFinite(insumos) ||
        insumos < 0 ||
        !Number.isFinite(redondeo) ||
        redondeo <= 0
    ) {

        if (editarProductoCostoGestion) {
            editarProductoCostoGestion.value = "";
        }

        calcularPreciosProductoGestion();
        return;

    }


    const costoSinRedondear =
        costoBase / vendibles +
        insumos;


    const costoFinal =
        Math.ceil(
            costoSinRedondear /
            redondeo
        ) * redondeo;


    editarProductoCostoGestion.value =
        Math.round(costoFinal);


    calcularPreciosProductoGestion();

}


// =========================================================
// ABRIR / CERRAR EDITOR
// =========================================================

function abrirEditarProductoGestion(
    productoId
) {

    const producto =
        productosGestion.find(
            (producto) =>
                Number(producto.id) ===
                Number(productoId)
        );


    if (
        !producto ||
        producto.retirado === true
    ) {
        return;
    }


    productoEditandoStockIdGestion =
        Number(producto.id);


    formulaUsdtEditadaProductoGestion = false;


    editarProductoNombreGestion.textContent =
        producto.nombre_mostrar;


    editarProductoStockGestion.value =
        Number(producto.stock) || 0;


    const usaCalculadoraUsdt =
        productoUsaCalculadoraUsdtGestion(
            producto
        );


    const esDecant =
        productoEsDecantGestion(
            producto
        );


    editarProductoCalculadoraUsdtGestion?.classList.toggle(
        "oculto",
        !usaCalculadoraUsdt
    );


    editarProductoCalculadoraDecantGestion?.classList.toggle(
        "oculto",
        !esDecant
    );


    if (editarProductoCostoGestion) {
        editarProductoCostoGestion.readOnly =
            usaCalculadoraUsdt ||
            esDecant;
    }


    if (editarProductoCostoLabelGestion) {
        editarProductoCostoLabelGestion.textContent =
            usaCalculadoraUsdt ||
            esDecant
                ? "Costo calculado"
                : "Costo actual";
    }


    if (editarProductoCostoAyudaGestion) {
        editarProductoCostoAyudaGestion.textContent =
            usaCalculadoraUsdt
                ? "Se calcula automáticamente con el precio del proveedor, el recargo y el dólar de costo."
                : esDecant
                    ? "Se calcula automáticamente desde el costo del perfume base, el tester, los insumos y el redondeo."
                    : "Cargá el costo del producto manualmente.";
    }


    if (editarProductoPrecioProveedorUsdtGestion) {
        editarProductoPrecioProveedorUsdtGestion.value =
            producto.precio_proveedor_usdt === null ||
            producto.precio_proveedor_usdt === undefined
                ? ""
                : Number(
                    producto.precio_proveedor_usdt
                );
    }


    if (editarProductoRecargoUsdtGestion) {
        editarProductoRecargoUsdtGestion.value =
            producto.recargo_usdt === null ||
            producto.recargo_usdt === undefined
                ? 4
                : Number(producto.recargo_usdt);
    }


    if (editarProductoDolarCostoGestion) {
        editarProductoDolarCostoGestion.value =
            producto.dolar_costo === null ||
            producto.dolar_costo === undefined
                ? 1600
                : Number(producto.dolar_costo);
    }


    if (esDecant) {

        cargarOpcionesPerfumeBaseDecantGestion(
            producto
        );


        if (editarProductoDecantBaseGestion) {
            editarProductoDecantBaseGestion.value =
                producto.producto_base_id === null ||
                producto.producto_base_id === undefined
                    ? ""
                    : String(producto.producto_base_id);
        }


        const baseActual =
            productosGestion.find(
                (item) =>
                    Number(item.id) ===
                    Number(producto.producto_base_id)
            );


        if (editarProductoDecantMlBaseGestion) {
            editarProductoDecantMlBaseGestion.value =
                producto.ml_perfume_base === null ||
                producto.ml_perfume_base === undefined
                    ? obtenerMlNumericosProductoGestion(
                        baseActual
                    )
                    : Number(producto.ml_perfume_base);
        }


        if (editarProductoDecantMlTesterGestion) {
            editarProductoDecantMlTesterGestion.value =
                producto.ml_tester === null ||
                producto.ml_tester === undefined
                    ? 5
                    : Number(producto.ml_tester);
        }


        if (editarProductoDecantMlGestion) {
            editarProductoDecantMlGestion.value =
                producto.ml_decant === null ||
                producto.ml_decant === undefined
                    ? 5
                    : Number(producto.ml_decant);
        }


        if (editarProductoDecantInsumosGestion) {
            editarProductoDecantInsumosGestion.value =
                producto.costo_insumos_decant === null ||
                producto.costo_insumos_decant === undefined
                    ? 1800
                    : Number(producto.costo_insumos_decant);
        }


        if (editarProductoDecantRedondeoGestion) {
            editarProductoDecantRedondeoGestion.value =
                producto.redondeo_costo_decant === null ||
                producto.redondeo_costo_decant === undefined
                    ? 500
                    : Number(producto.redondeo_costo_decant);
        }

    }


    editarProductoCostoGestion.value =
        producto.costo_actual === null ||
        producto.costo_actual === undefined
            ? ""
            : Number(producto.costo_actual);


    editarProductoMarkupMayoristaGestion.value =
        producto.markup_mayorista === null ||
        producto.markup_mayorista === undefined
            ? ""
            : Number(producto.markup_mayorista);


    editarProductoMarkupMinoristaGestion.value =
        producto.markup_minorista === null ||
        producto.markup_minorista === undefined
            ? ""
            : Number(producto.markup_minorista);


    editarProductoMinoristaGestion.value =
        Number(producto.precio_minorista) || 0;


    editarProductoMayoristaGestion.value =
        Number(producto.precio_mayorista) || 0;


    if (
        esDecant &&
        editarProductoDecantBaseGestion?.value
    ) {

        calcularCostoDecantProductoGestion();

    } else if (
        editarProductoCostoGestion.value !== "" &&
        editarProductoMarkupMayoristaGestion.value !== "" &&
        editarProductoMarkupMinoristaGestion.value !== ""
    ) {

        calcularPreciosProductoGestion();

    }


    editarProductoActivoGestion.checked =
        producto.activo !== false;


    const codigo =
        String(
            producto.codigo_barras || ""
        ).trim();


    editarProductoCodigoTextoGestion.textContent =
        codigo || "Sin código";


    botonEditarProductoCodigoGestion.textContent =
        codigo
            ? "Cambiar código"
            : "Asignar código";


    limpiarMensaje(
        mensajeEditarProductoGestion
    );


    modalEditarProductoGestion.classList.remove(
        "oculto"
    );


    setTimeout(
        () => {
            editarProductoStockGestion.focus();
            editarProductoStockGestion.select();
        },
        100
    );

}


// =========================================================
// CALCULAR COSTO DESDE USDT
// =========================================================

function calcularCostoUsdtProductoGestion() {

    const producto =
        productosGestion.find(
            (producto) =>
                Number(producto.id) ===
                Number(
                    productoEditandoStockIdGestion
                )
        );


    if (
        !producto ||
        !productoUsaCalculadoraUsdtGestion(
            producto
        )
    ) {
        calcularPreciosProductoGestion();
        return;
    }


    const precioProveedorTexto =
        editarProductoPrecioProveedorUsdtGestion?.value.trim() ||
        "";

    const recargoTexto =
        editarProductoRecargoUsdtGestion?.value.trim() ||
        "";

    const dolarTexto =
        editarProductoDolarCostoGestion?.value.trim() ||
        "";


    const precioProveedor =
        Number(precioProveedorTexto);

    const recargo =
        Number(recargoTexto);

    const dolarCosto =
        Number(dolarTexto);


    if (
        precioProveedorTexto !== "" &&
        recargoTexto !== "" &&
        dolarTexto !== "" &&
        Number.isFinite(precioProveedor) &&
        Number.isFinite(recargo) &&
        Number.isFinite(dolarCosto) &&
        precioProveedor >= 0 &&
        recargo >= 0 &&
        dolarCosto > 0
    ) {

        editarProductoCostoGestion.value =
            Math.round(
                (
                    precioProveedor +
                    recargo
                ) *
                dolarCosto
            );

    }


    calcularPreciosProductoGestion();

}


// =========================================================
// CALCULAR MARGEN DESDE COSTO + PRECIO
// =========================================================

function calcularMarkupDesdePrecioProductoGestion(
    tipo
) {

    const costoTexto =
        editarProductoCostoGestion?.value.trim() || "";


    const esMayorista =
        tipo === "mayorista";


    const campoPrecio =
        esMayorista
            ? editarProductoMayoristaGestion
            : editarProductoMinoristaGestion;


    const campoMarkup =
        esMayorista
            ? editarProductoMarkupMayoristaGestion
            : editarProductoMarkupMinoristaGestion;


    const precioTexto =
        campoPrecio?.value.trim() || "";


    const costo = Number(costoTexto);
    const precio = Number(precioTexto);


    if (
        costoTexto === "" ||
        precioTexto === "" ||
        !Number.isFinite(costo) ||
        !Number.isFinite(precio) ||
        costo <= 0 ||
        precio < 0
    ) {
        return;
    }


    const markup =
        (
            (precio / costo) - 1
        ) * 100;


    campoMarkup.value =
        Number(
            markup.toFixed(6)
        );

}


// =========================================================
// CALCULAR PRECIOS DESDE COSTO + PORCENTAJE
// =========================================================

function calcularPreciosProductoGestion() {

    const costoTexto =
        editarProductoCostoGestion?.value.trim() || "";

    const markupMayoristaTexto =
        editarProductoMarkupMayoristaGestion?.value.trim() || "";

    const markupMinoristaTexto =
        editarProductoMarkupMinoristaGestion?.value.trim() || "";


    const costo =
        Number(costoTexto);

    const markupMayorista =
        Number(markupMayoristaTexto);

    const markupMinorista =
        Number(markupMinoristaTexto);


    const productoEditando =
        productosGestion.find(
            (producto) =>
                Number(producto.id) ===
                Number(productoEditandoStockIdGestion)
        );


    const esDecant =
        productoEditando &&
        productoEsDecantGestion(
            productoEditando
        );


    const redondeoDecant =
        Math.max(
            1,
            Number(
                editarProductoDecantRedondeoGestion?.value
            ) || 500
        );


    function calcularPrecioFinal(
        markup
    ) {

        const precioSinRedondear =
            costo *
            (1 + markup / 100);


        if (esDecant) {

            return (
                Math.ceil(
                    precioSinRedondear /
                    redondeoDecant
                ) *
                redondeoDecant
            );

        }


        return Math.round(
            precioSinRedondear
        );

    }


    if (
        costoTexto !== "" &&
        markupMayoristaTexto !== "" &&
        Number.isFinite(costo) &&
        Number.isFinite(markupMayorista) &&
        costo >= 0 &&
        markupMayorista >= 0
    ) {

        editarProductoMayoristaGestion.value =
            calcularPrecioFinal(
                markupMayorista
            );

    } else if (
        costoTexto !== "" ||
        markupMayoristaTexto !== ""
    ) {

        editarProductoMayoristaGestion.value =
            "";

    }


    if (
        costoTexto !== "" &&
        markupMinoristaTexto !== "" &&
        Number.isFinite(costo) &&
        Number.isFinite(markupMinorista) &&
        costo >= 0 &&
        markupMinorista >= 0
    ) {

        editarProductoMinoristaGestion.value =
            calcularPrecioFinal(
                markupMinorista
            );

    } else if (
        costoTexto !== "" ||
        markupMinoristaTexto !== ""
    ) {

        editarProductoMinoristaGestion.value =
            "";

    }

}


editarProductoCostoGestion?.addEventListener(
    "input",
    calcularPreciosProductoGestion
);


editarProductoMarkupMayoristaGestion?.addEventListener(
    "input",
    calcularPreciosProductoGestion
);


editarProductoMarkupMinoristaGestion?.addEventListener(
    "input",
    calcularPreciosProductoGestion
);


editarProductoMayoristaGestion?.addEventListener(
    "input",
    () => {
        calcularMarkupDesdePrecioProductoGestion(
            "mayorista"
        );
    }
);


editarProductoMinoristaGestion?.addEventListener(
    "input",
    () => {
        calcularMarkupDesdePrecioProductoGestion(
            "minorista"
        );
    }
);


[
    editarProductoPrecioProveedorUsdtGestion,
    editarProductoRecargoUsdtGestion,
    editarProductoDolarCostoGestion
].forEach(
    (campo) => {
        campo?.addEventListener(
            "input",
            () => {
                formulaUsdtEditadaProductoGestion = true;
                calcularCostoUsdtProductoGestion();
            }
        );
    }
);


[
    editarProductoDecantMlBaseGestion,
    editarProductoDecantMlTesterGestion,
    editarProductoDecantMlGestion,
    editarProductoDecantInsumosGestion,
    editarProductoDecantRedondeoGestion
].forEach(
    (campo) => {
        campo?.addEventListener(
            "input",
            calcularCostoDecantProductoGestion
        );
    }
);


editarProductoDecantBaseGestion?.addEventListener(
    "change",
    () => {

        const productoBase =
            productosGestion.find(
                (producto) =>
                    Number(producto.id) ===
                    Number(
                        editarProductoDecantBaseGestion.value
                    )
            );


        if (
            productoBase &&
            editarProductoDecantMlBaseGestion
        ) {
            editarProductoDecantMlBaseGestion.value =
                obtenerMlNumericosProductoGestion(
                    productoBase
                );
        }


        calcularCostoDecantProductoGestion();

    }
);


function cerrarEditarProductoGestion() {

    productoEditandoStockIdGestion =
        null;


    formulaUsdtEditadaProductoGestion = false;


    formEditarProductoGestion?.reset();


    limpiarMensaje(
        mensajeEditarProductoGestion
    );


    modalEditarProductoGestion?.classList.add(
        "oculto"
    );

}


// =========================================================
// GUARDAR PRODUCTO
// =========================================================

formEditarProductoGestion?.addEventListener(
    "submit",
    async (evento) => {

        evento.preventDefault();


        limpiarMensaje(
            mensajeEditarProductoGestion
        );


        const productoId =
            Number(
                productoEditandoStockIdGestion
            );


        const producto =
            productosGestion.find(
                (producto) =>
                    Number(producto.id) ===
                    productoId
            );


        const usaCalculadoraUsdt =
            productoUsaCalculadoraUsdtGestion(
                producto
            );


        const esDecant =
            productoEsDecantGestion(
                producto
            );


        const stock =
            Number(
                editarProductoStockGestion.value
            );


        const precioProveedorUsdtTexto =
            editarProductoPrecioProveedorUsdtGestion?.value.trim() ||
            "";


        const recargoUsdtTexto =
            editarProductoRecargoUsdtGestion?.value.trim() ||
            "";


        const dolarCostoTexto =
            editarProductoDolarCostoGestion?.value.trim() ||
            "";


        const hayFormulaUsdt =
            usaCalculadoraUsdt &&
            precioProveedorUsdtTexto !== "";


        const precioProveedorUsdt =
            hayFormulaUsdt
                ? Number(
                    precioProveedorUsdtTexto
                )
                : null;


        const recargoUsdt =
            hayFormulaUsdt
                ? Number(recargoUsdtTexto)
                : null;


        const dolarCosto =
            hayFormulaUsdt
                ? Number(dolarCostoTexto)
                : null;


        const decantProductoBaseId =
            esDecant
                ? Number(
                    editarProductoDecantBaseGestion?.value ||
                    0
                )
                : 0;


        const decantMlBase =
            esDecant
                ? Number(
                    editarProductoDecantMlBaseGestion?.value ||
                    0
                )
                : null;


        const decantMlTester =
            esDecant
                ? Number(
                    editarProductoDecantMlTesterGestion?.value ||
                    0
                )
                : null;


        const decantMl =
            esDecant
                ? Number(
                    editarProductoDecantMlGestion?.value ||
                    0
                )
                : null;


        const decantInsumos =
            esDecant
                ? Number(
                    editarProductoDecantInsumosGestion?.value ||
                    0
                )
                : null;


        const decantRedondeo =
            esDecant
                ? Number(
                    editarProductoDecantRedondeoGestion?.value ||
                    0
                )
                : null;


        const decantConfigurado =
            esDecant &&
            decantProductoBaseId > 0;


        const costoTexto =
            editarProductoCostoGestion.value.trim();


        const markupMayoristaTexto =
            editarProductoMarkupMayoristaGestion.value.trim();


        const markupMinoristaTexto =
            editarProductoMarkupMinoristaGestion.value.trim();


        const hayDatoDeCosto =
            esDecant
                ? decantConfigurado
                : (
                    costoTexto !== "" ||
                    markupMayoristaTexto !== "" ||
                    markupMinoristaTexto !== ""
                );


        const costoCompleto =
            esDecant
                ? (
                    decantConfigurado &&
                    costoTexto !== "" &&
                    markupMayoristaTexto !== "" &&
                    markupMinoristaTexto !== ""
                )
                : (
                    costoTexto !== "" &&
                    markupMayoristaTexto !== "" &&
                    markupMinoristaTexto !== ""
                );


        const costo =
            costoCompleto
                ? Number(costoTexto)
                : null;


        const markupMayorista =
            costoCompleto
                ? Number(markupMayoristaTexto)
                : null;


        const markupMinorista =
            costoCompleto
                ? Number(markupMinoristaTexto)
                : null;


        const precioMinorista =
            Number(
                editarProductoMinoristaGestion.value
            );


        const precioMayorista =
            Number(
                editarProductoMayoristaGestion.value
            );


        const activo =
            editarProductoActivoGestion.checked;


        if (!productoId) {

            mostrarMensaje(
                mensajeEditarProductoGestion,
                "No se pudo identificar el producto."
            );

            return;
        }


        if (
            !Number.isInteger(stock) ||
            stock < 0
        ) {

            mostrarMensaje(
                mensajeEditarProductoGestion,
                "El stock debe ser un número entero igual o mayor a 0."
            );

            return;
        }


        if (
            hayFormulaUsdt &&
            (
                recargoUsdtTexto === "" ||
                dolarCostoTexto === "" ||
                !Number.isFinite(
                    precioProveedorUsdt
                ) ||
                precioProveedorUsdt < 0 ||
                !Number.isFinite(
                    recargoUsdt
                ) ||
                recargoUsdt < 0 ||
                !Number.isFinite(
                    dolarCosto
                ) ||
                dolarCosto <= 0
            )
        ) {

            mostrarMensaje(
                mensajeEditarProductoGestion,
                "Revisá el precio del proveedor, el recargo y el dólar de costo."
            );

            return;
        }


        if (
            decantConfigurado
        ) {

            const perfumeBaseDecant =
                productosGestion.find(
                    (item) =>
                        Number(item.id) ===
                        decantProductoBaseId
                );


            const costoPerfumeBase =
                Number(
                    perfumeBaseDecant?.costo_actual
                );


            if (
                !perfumeBaseDecant ||
                !Number.isFinite(costoPerfumeBase) ||
                costoPerfumeBase < 0
            ) {

                mostrarMensaje(
                    mensajeEditarProductoGestion,
                    "El perfume base todavía no tiene costo cargado. Cargalo primero y después configurá el decant."
                );

                return;
            }


            if (
                !Number.isFinite(decantMlBase) ||
                decantMlBase <= 0 ||
                !Number.isFinite(decantMlTester) ||
                decantMlTester < 0 ||
                decantMlTester >= decantMlBase ||
                !Number.isFinite(decantMl) ||
                decantMl <= 0 ||
                !Number.isFinite(decantInsumos) ||
                decantInsumos < 0 ||
                !Number.isFinite(decantRedondeo) ||
                decantRedondeo <= 0
            ) {

                mostrarMensaje(
                    mensajeEditarProductoGestion,
                    "Revisá los ml, los insumos y el redondeo del decant."
                );

                return;
            }

        }


        if (
            hayDatoDeCosto &&
            !costoCompleto
        ) {

            mostrarMensaje(
                mensajeEditarProductoGestion,
                "Completá el costo y definí el margen o el precio de mayorista y minorista."
            );

            return;
        }


        if (
            costoCompleto &&
            (
                !Number.isFinite(costo) ||
                costo < 0 ||
                !Number.isFinite(markupMayorista) ||
                markupMayorista < 0 ||
                !Number.isFinite(markupMinorista) ||
                markupMinorista < 0
            )
        ) {

            mostrarMensaje(
                mensajeEditarProductoGestion,
                "Revisá el costo, los márgenes y los precios ingresados."
            );

            return;
        }


        if (
            !Number.isFinite(precioMinorista) ||
            precioMinorista < 0 ||
            !Number.isFinite(precioMayorista) ||
            precioMayorista < 0
        ) {

            mostrarMensaje(
                mensajeEditarProductoGestion,
                "No se pudieron calcular los precios. Revisá costo y porcentajes."
            );

            return;
        }


        botonGuardarEditarProductoGestion.disabled =
            true;


        botonGuardarEditarProductoGestion.textContent =
            "Guardando...";


        try {

            if (
                decantConfigurado &&
                costoCompleto
            ) {

                const {
                    error: errorCostos
                } =
                    await supabaseClient.rpc(
                        "configurar_decant",
                        {
                            p_decant_id:
                                productoId,

                            p_producto_base_id:
                                decantProductoBaseId,

                            p_ml_perfume_base:
                                decantMlBase,

                            p_ml_decant:
                                decantMl,

                            p_ml_tester:
                                decantMlTester,

                            p_costo_insumos:
                                decantInsumos,

                            p_redondeo:
                                decantRedondeo,

                            p_markup_mayorista:
                                markupMayorista,

                            p_markup_minorista:
                                markupMinorista
                        }
                    );


                if (errorCostos) {
                    throw errorCostos;
                }

            } else if (
                hayFormulaUsdt &&
                costoCompleto &&
                formulaUsdtEditadaProductoGestion
            ) {

                const {
                    error: errorCostos
                } =
                    await supabaseClient.rpc(
                        "actualizar_costos_producto_usdt",
                        {
                            p_producto_id:
                                productoId,

                            p_precio_proveedor_usdt:
                                precioProveedorUsdt,

                            p_recargo_usdt:
                                recargoUsdt,

                            p_dolar_costo:
                                dolarCosto,

                            p_markup_mayorista:
                                markupMayorista,

                            p_markup_minorista:
                                markupMinorista
                        }
                    );


                if (errorCostos) {
                    throw errorCostos;
                }

            } else if (
                costoCompleto &&
                !esDecant
            ) {

                const {
                    error: errorCostos
                } =
                    await supabaseClient.rpc(
                        "actualizar_costos_producto",
                        {
                            p_producto_id:
                                productoId,

                            p_costo:
                                costo,

                            p_markup_mayorista:
                                markupMayorista,

                            p_markup_minorista:
                                markupMinorista
                        }
                    );


                if (errorCostos) {
                    throw errorCostos;
                }

            }


            const {
                error
            } =
                await supabaseClient.rpc(
                    "editar_producto_gestion",
                    {
                        p_producto_id:
                            productoId,

                        p_stock:
                            stock,

                        p_precio_minorista:
                            precioMinorista,

                        p_precio_mayorista:
                            precioMayorista,

                        p_activo:
                            activo
                    }
                );


            if (error) {
                throw error;
            }


            await cargarProductosGestion();

            renderizarStock();


            cerrarEditarProductoGestion();


            mostrarMensaje(
                mensajeStockGestion,
                "Producto actualizado correctamente.",
                "exito"
            );

        } catch (error) {

            console.error(
                "Error al editar producto:",
                error
            );


            mostrarMensaje(
                mensajeEditarProductoGestion,
                error.message ||
                "No se pudieron guardar los cambios."
            );

        } finally {

            botonGuardarEditarProductoGestion.disabled =
                false;


            botonGuardarEditarProductoGestion.textContent =
                "Guardar cambios";

        }

    }
);


// =========================================================
// ABRIR CÓDIGO DESDE EL EDITOR
// =========================================================

botonEditarProductoCodigoGestion?.addEventListener(
    "click",
    () => {

        const productoId =
            productoEditandoStockIdGestion;


        if (!productoId) {
            return;
        }


        cerrarEditarProductoGestion();


        abrirCodigoBarrasGestion(
            productoId
        );

    }
);


// =========================================================
// RETIRAR PRODUCTO
// =========================================================

botonRetirarProductoGestion?.addEventListener(
    "click",
    async () => {

        const producto =
            productosGestion.find(
                (producto) =>
                    Number(producto.id) ===
                    Number(
                        productoEditandoStockIdGestion
                    )
            );


        if (!producto) {
            return;
        }


        const confirmar =
            window.confirm(
                `¿Retirar ${producto.nombre_mostrar}?\n\n` +
                "Dejará de aparecer en la web y en nuevas ventas/presupuestos. " +
                "Las ventas anteriores seguirán intactas."
            );


        if (!confirmar) {
            return;
        }


        botonRetirarProductoGestion.disabled =
            true;


        botonRetirarProductoGestion.textContent =
            "Retirando...";


        try {

            const {
                error
            } =
                await supabaseClient.rpc(
                    "retirar_producto",
                    {
                        p_producto_id:
                            Number(producto.id),

                        p_motivo:
                            null
                    }
                );


            if (error) {
                throw error;
            }


            await cargarProductosGestion();

            renderizarStock();


            cerrarEditarProductoGestion();


            mostrarMensaje(
                mensajeStockGestion,
                "Producto retirado. El historial de ventas se conserva.",
                "exito"
            );

        } catch (error) {

            console.error(
                "Error al retirar producto:",
                error
            );


            mostrarMensaje(
                mensajeEditarProductoGestion,
                error.message ||
                "No se pudo retirar el producto."
            );

        } finally {

            botonRetirarProductoGestion.disabled =
                false;


            botonRetirarProductoGestion.textContent =
                "Retirar producto";

        }

    }
);


// =========================================================
// RESTAURAR PRODUCTO
// =========================================================

async function restaurarProductoGestion(
    productoId,
    boton
) {

    const producto =
        productosGestion.find(
            (producto) =>
                Number(producto.id) ===
                Number(productoId)
        );


    if (!producto) {
        return;
    }


    const confirmar =
        window.confirm(
            `¿Restaurar ${producto.nombre_mostrar}?\n\n` +
            "Volverá a quedar activo y disponible en la web."
        );


    if (!confirmar) {
        return;
    }


    boton.disabled =
        true;


    boton.textContent =
        "Restaurando...";


    try {

        const {
            error
        } =
            await supabaseClient.rpc(
                "restaurar_producto",
                {
                    p_producto_id:
                        Number(productoId)
                }
            );


        if (error) {
            throw error;
        }


        await cargarProductosGestion();

        renderizarStock();


        mostrarMensaje(
            mensajeStockGestion,
            "Producto restaurado y activado correctamente.",
            "exito"
        );

    } catch (error) {

        console.error(
            "Error al restaurar producto:",
            error
        );


        mostrarMensaje(
            mensajeStockGestion,
            error.message ||
            "No se pudo restaurar el producto."
        );


        boton.disabled =
            false;


        boton.textContent =
            "Restaurar";

    }

}


// =========================================================
// TABLA DE STOCK - VERSIÓN ADMINISTRABLE
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


                    const referenciaProducto =
                        obtenerReferenciaProductoGestion(
                            producto
                        );


                    return `
                        <tr>

                            <td data-label="Producto">

                                <strong class="stock-producto-nombre">
                                    ${escaparHTML(
                                        producto.nombre_mostrar
                                    )}
                                </strong>

                                ${
                                    referenciaProducto
                                        ? `
                                            <span class="stock-producto-marca">
                                                ${escaparHTML(
                                                    referenciaProducto
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

                            <td data-label="Costo">
                                ${
                                    producto.costo_actual === null ||
                                    producto.costo_actual === undefined
                                        ? `<span class="costo-sin-cargar">Sin cargar</span>`
                                        : formatearPrecio(
                                            producto.costo_actual
                                        )
                                }
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

                            <td data-label="Acciones">
                                <button
                                    type="button"
                                    class="editar-producto-stock"
                                    data-producto-id="${producto.id}"
                                >
                                    Editar
                                </button>
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
                                <th>Costo</th>
                                <th>Minorista</th>
                                <th>Mayorista</th>
                                <th>Código</th>
                                <th>Estado</th>
                                <th>Acciones</th>
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
// PRODUCTOS RETIRADOS
// =========================================================

function crearProductosRetiradosGestion(
    productosRetirados
) {

    if (
        productosRetirados.length === 0
    ) {
        return "";
    }


    productosRetirados.sort(
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
        productosRetirados
            .map(
                (producto) => `
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
                            ${obtenerTextoStock(
                                producto.stock
                            )}
                        </td>

                        <td data-label="Costo">
                            ${
                                producto.costo_actual === null ||
                                producto.costo_actual === undefined
                                    ? `<span class="costo-sin-cargar">Sin cargar</span>`
                                    : formatearPrecio(
                                        producto.costo_actual
                                    )
                            }
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

                        <td data-label="Estado">
                            <span class="estado-retirado">
                                Retirado
                            </span>
                        </td>

                        <td data-label="Acciones">
                            <button
                                type="button"
                                class="restaurar-producto-stock"
                                data-producto-id="${producto.id}"
                            >
                                Restaurar
                            </button>
                        </td>

                    </tr>
                `
            )
            .join("");


    return `
        <div class="productos-retirados-gestion">

            <div class="productos-retirados-titulo">
                <div>
                    <h3>Productos retirados</h3>
                    <span>
                        ${productosRetirados.length}
                        ${
                            productosRetirados.length === 1
                                ? "producto"
                                : "productos"
                        }
                    </span>
                </div>

                <p>
                    No aparecen en la web ni en nuevas operaciones. El historial anterior se conserva.
                </p>
            </div>

            <div class="stock-tabla-contenedor">

                <table class="stock-tabla stock-tabla-retirados">

                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Stock</th>
                            <th>Costo</th>
                            <th>Minorista</th>
                            <th>Mayorista</th>
                            <th>Estado</th>
                            <th>Acciones</th>
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
// RENDER STOCK - ACTIVOS + RETIRADOS
// =========================================================

function renderizarStock() {

    if (!stockCategorias) {
        return;
    }


    let contenido =
        "";


    const productosNoRetirados =
        productosGestion.filter(
            (producto) =>
                producto.retirado !== true
        );


    const productosRetirados =
        productosGestion.filter(
            (producto) =>
                producto.retirado === true
        );


    CATEGORIAS_STOCK.forEach(
        (categoria) => {

            const productosCategoria =
                productosNoRetirados.filter(
                    categoria.coincide
                );


            if (
                productosCategoria.length === 0
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


    if (!contenido) {

        contenido = `
            <p class="stock-sin-productos">
                No hay productos activos para mostrar.
            </p>
        `;

    }


    contenido +=
        crearProductosRetiradosGestion(
            productosRetirados
        );


    stockCategorias.innerHTML =
        contenido;

}


// =========================================================
// ACCIONES EN TABLA DE STOCK
// =========================================================

stockCategorias?.addEventListener(
    "click",
    async (evento) => {

        const botonEditar =
            evento.target.closest(
                ".editar-producto-stock"
            );


        if (botonEditar) {

            abrirEditarProductoGestion(
                Number(
                    botonEditar.dataset.productoId
                )
            );

            return;
        }


        const botonRestaurar =
            evento.target.closest(
                ".restaurar-producto-stock"
            );


        if (botonRestaurar) {

            await restaurarProductoGestion(
                Number(
                    botonRestaurar.dataset.productoId
                ),
                botonRestaurar
            );

        }

    }
);


// =========================================================
// CERRAR MODAL EDITOR
// =========================================================

botonCerrarEditarProductoGestion?.addEventListener(
    "click",
    cerrarEditarProductoGestion
);


botonCancelarEditarProductoGestion?.addEventListener(
    "click",
    cerrarEditarProductoGestion
);


modalEditarProductoGestion?.addEventListener(
    "click",
    (evento) => {

        if (
            evento.target ===
            modalEditarProductoGestion
        ) {
            cerrarEditarProductoGestion();
        }

    }
);

// =========================================================
// REPOSICIONES - REGISTRO CON COSTO REAL
// =========================================================

if (!document.getElementById("seccion-reposicion")) {

    const mainGestion =
        document.querySelector("main");


    if (mainGestion) {

        const seccion =
            document.createElement("section");


        seccion.id =
            "seccion-reposicion";


        seccion.className =
            "seccion-reposicion oculto";


        seccion.innerHTML = `
            <div class="reposicion-encabezado">

                <div>
                    <h2>Registrar reposición</h2>
                    <p>
                        Cargá lo que compraste. En perfumes importados ingresás el precio pagado en USDT y Gestión calcula el costo automáticamente.
                        El stock y el costo promedio se actualizan automáticamente.
                    </p>
                </div>

                <button
                    type="button"
                    class="cerrar-reposicion"
                    id="cerrar-reposicion"
                >
                    Cerrar
                </button>

            </div>

            <div class="reposicion-panel">

                <div class="reposicion-formulario">

                    <div class="campo reposicion-buscador-campo">
                        <label for="reposicion-buscador-producto">
                            Buscar producto
                        </label>

                        <input
                            type="text"
                            id="reposicion-buscador-producto"
                            placeholder="Nombre, marca o código de barras..."
                            autocomplete="off"
                        >

                        <div
                            class="reposicion-resultados-busqueda oculto"
                            id="reposicion-resultados-busqueda"
                        ></div>
                    </div>

                    <div id="reposicion-items" class="reposicion-items">
                        <p class="reposicion-vacia">
                            Buscá un producto para empezar la reposición.
                        </p>
                    </div>

                    <div class="campo reposicion-observaciones-campo">
                        <label for="reposicion-observaciones">
                            Observaciones
                        </label>

                        <textarea
                            id="reposicion-observaciones"
                            placeholder="Opcional. Ej.: Compra proveedor, pedido agosto..."
                        ></textarea>
                    </div>

                    <p
                        class="venta-mensaje"
                        id="mensaje-reposicion"
                    ></p>

                    <button
                        type="button"
                        class="guardar-reposicion"
                        id="guardar-reposicion"
                    >
                        Registrar reposición
                    </button>

                </div>

                <aside class="reposicion-resumen">

                    <h3>Resumen</h3>

                    <div class="reposicion-resumen-fila">
                        <span>Productos</span>
                        <strong id="reposicion-total-productos">0</strong>
                    </div>

                    <div class="reposicion-resumen-fila">
                        <span>Unidades que ingresan</span>
                        <strong id="reposicion-total-unidades">0</strong>
                    </div>

                    <div class="reposicion-resumen-total">
                        <span>Total de la compra</span>
                        <strong id="reposicion-total-compra">$ 0</strong>
                    </div>

                    <div class="reposicion-ayuda">
                        <strong>¿Qué hace el sistema?</strong>
                        <p>
                            Suma el stock, guarda el costo real de esta compra y
                            recalcula el costo promedio del stock que ya tenías.
                        </p>
                    </div>

                </aside>

            </div>

            <div class="reposicion-historial-bloque">

                <div class="reposicion-historial-encabezado">
                    <div>
                        <h3>Historial de reposiciones</h3>
                        <p>Últimas compras registradas.</p>
                    </div>
                </div>

                <div id="reposicion-historial">
                    <p class="reposicion-vacia">
                        Todavía no hay reposiciones registradas.
                    </p>
                </div>

            </div>
        `;


        mainGestion.appendChild(
            seccion
        );

    }

}


const seccionReposicionGestion =
    document.getElementById(
        "seccion-reposicion"
    );


const botonCerrarReposicionGestion =
    document.getElementById(
        "cerrar-reposicion"
    );


const buscadorReposicionGestion =
    document.getElementById(
        "reposicion-buscador-producto"
    );


const resultadosReposicionGestion =
    document.getElementById(
        "reposicion-resultados-busqueda"
    );


const contenedorItemsReposicionGestion =
    document.getElementById(
        "reposicion-items"
    );


const observacionesReposicionGestion =
    document.getElementById(
        "reposicion-observaciones"
    );


const mensajeReposicionGestion =
    document.getElementById(
        "mensaje-reposicion"
    );


const botonGuardarReposicionGestion =
    document.getElementById(
        "guardar-reposicion"
    );


const totalProductosReposicionGestion =
    document.getElementById(
        "reposicion-total-productos"
    );


const totalUnidadesReposicionGestion =
    document.getElementById(
        "reposicion-total-unidades"
    );


const totalCompraReposicionGestion =
    document.getElementById(
        "reposicion-total-compra"
    );


const historialReposicionGestion =
    document.getElementById(
        "reposicion-historial"
    );


let itemsReposicionGestion = [];


// =========================================================
// CERRAR TAMBIÉN REPOSICIONES AL CAMBIAR DE SECCIÓN
// =========================================================

const cerrarSeccionesGestionAntesReposicion =
    cerrarSeccionesGestion;


cerrarSeccionesGestion = function () {

    cerrarSeccionesGestionAntesReposicion();


    seccionReposicionGestion
        ?.classList.add(
            "oculto"
        );

};


// =========================================================
// UTILIDADES REPOSICIÓN
// =========================================================

function obtenerNumeroReposicion(
    valor
) {

    const numero =
        Number(valor);


    return Number.isFinite(numero)
        ? numero
        : 0;

}


function normalizarTextoReposicion(
    valor
) {

    return String(
        valor || ""
    )
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


function obtenerProductosBusquedaReposicion(
    termino
) {

    const texto =
        normalizarTextoReposicion(
            termino
        );


    if (
        texto.length < 2
    ) {
        return [];
    }


    return productosGestion
        .filter(
            (producto) =>
                producto.retirado !== true
        )
        .filter(
            (producto) => {

                const contenido =
                    normalizarTextoReposicion(
                        [
                            producto.nombre_mostrar,
                            producto.marca_mostrar,
                            producto.codigo_barras,
                            producto.slug
                        ]
                            .filter(Boolean)
                            .join(" ")
                    );


                return contenido.includes(
                    texto
                );

            }
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
        )
        .slice(0, 8);

}


function calcularCostoPromedioPreviewReposicion(
    producto,
    cantidad,
    costoCompra
) {

    const stockActual =
        Math.max(
            0,
            obtenerNumeroReposicion(
                producto.stock
            )
        );


    const costoActual =
        producto.costo_actual === null ||
        producto.costo_actual === undefined ||
        producto.costo_actual === ""
            ? null
            : obtenerNumeroReposicion(
                producto.costo_actual
            );


    if (
        cantidad <= 0 ||
        costoCompra < 0
    ) {
        return null;
    }


    if (
        stockActual <= 0
    ) {
        return costoCompra;
    }


    if (
        costoActual === null
    ) {
        return null;
    }


    return (
        (
            stockActual * costoActual
        ) +
        (
            cantidad * costoCompra
        )
    ) /
    (
        stockActual + cantidad
    );

}


function calcularCostoUsdtReposicionGestion(
    precioProveedor,
    recargoUsdt,
    dolarCosto
) {

    const precio =
        Number(precioProveedor);

    const recargo =
        Number(recargoUsdt);

    const dolar =
        Number(dolarCosto);


    if (
        !Number.isFinite(precio) ||
        !Number.isFinite(recargo) ||
        !Number.isFinite(dolar) ||
        precio < 0 ||
        recargo < 0 ||
        dolar <= 0
    ) {
        return null;
    }


    return Math.round(
        (precio + recargo) * dolar
    );

}


function actualizarCostoItemReposicionGestion(
    item,
    producto
) {

    if (
        !item ||
        !producto ||
        !productoUsaCalculadoraUsdtGestion(producto)
    ) {
        return;
    }


    const precioTexto =
        String(
            item.precio_proveedor_usdt ?? ""
        ).trim();

    const recargoTexto =
        String(
            item.recargo_usdt ?? ""
        ).trim();

    const dolarTexto =
        String(
            item.dolar_costo ?? ""
        ).trim();


    if (
        precioTexto === "" ||
        recargoTexto === "" ||
        dolarTexto === ""
    ) {
        item.costo_unitario = "";
        return;
    }


    const costo =
        calcularCostoUsdtReposicionGestion(
            precioTexto,
            recargoTexto,
            dolarTexto
        );


    item.costo_unitario =
        costo === null
            ? ""
            : costo;

}


// =========================================================
// RESULTADOS DEL BUSCADOR
// =========================================================

function renderizarResultadosReposicionGestion() {

    if (
        !resultadosReposicionGestion ||
        !buscadorReposicionGestion
    ) {
        return;
    }


    const termino =
        buscadorReposicionGestion.value;


    if (
        normalizarTextoReposicion(
            termino
        ).length < 2
    ) {

        resultadosReposicionGestion.innerHTML =
            "";


        resultadosReposicionGestion.classList.add(
            "oculto"
        );


        return;
    }


    const resultados =
        obtenerProductosBusquedaReposicion(
            termino
        );


    if (
        resultados.length === 0
    ) {

        resultadosReposicionGestion.innerHTML = `
            <p class="reposicion-resultado-vacio">
                No encontramos productos.
            </p>
        `;


        resultadosReposicionGestion.classList.remove(
            "oculto"
        );


        return;
    }


    resultadosReposicionGestion.innerHTML =
        resultados
            .map(
                (producto) => {

                    const costoActual =
                        producto.costo_actual === null ||
                        producto.costo_actual === undefined
                            ? "Sin costo cargado"
                            : `Costo actual: ${formatearPrecio(
                                producto.costo_actual
                            )}`;


                    return `
                        <button
                            type="button"
                            class="reposicion-resultado-producto"
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
                                        producto.marca_mostrar || ""
                                    )}
                                </span>
                            </div>

                            <div class="reposicion-resultado-datos">
                                <span>
                                    Stock: ${obtenerTextoStock(
                                        producto.stock
                                    )}
                                </span>

                                <small>
                                    ${costoActual}
                                </small>
                            </div>
                        </button>
                    `;

                }
            )
            .join("");


    resultadosReposicionGestion.classList.remove(
        "oculto"
    );

}


// =========================================================
// AGREGAR PRODUCTO A REPOSICIÓN
// =========================================================

function agregarProductoReposicionGestion(
    productoId
) {

    const producto =
        productosGestion.find(
            (producto) =>
                Number(producto.id) ===
                Number(productoId)
        );


    if (
        !producto ||
        producto.retirado === true
    ) {
        return;
    }


    const existente =
        itemsReposicionGestion.find(
            (item) =>
                Number(item.producto_id) ===
                Number(producto.id)
        );


    if (
        existente
    ) {

        mostrarMensaje(
            mensajeReposicionGestion,
            "Ese producto ya está agregado a la reposición."
        );


        return;
    }


    const usaCalculadoraUsdt =
        productoUsaCalculadoraUsdtGestion(
            producto
        );


    const nuevoItem = {
        producto_id:
            Number(producto.id),
        cantidad: 1,
        costo_unitario:
            usaCalculadoraUsdt
                ? ""
                : (
                    producto.costo_actual === null ||
                    producto.costo_actual === undefined
                        ? ""
                        : Number(
                            producto.costo_actual
                        )
                ),
        precio_proveedor_usdt:
            usaCalculadoraUsdt
                ? (
                    producto.precio_proveedor_usdt === null ||
                    producto.precio_proveedor_usdt === undefined
                        ? ""
                        : Number(
                            producto.precio_proveedor_usdt
                        )
                )
                : null,
        recargo_usdt:
            usaCalculadoraUsdt
                ? (
                    producto.recargo_usdt === null ||
                    producto.recargo_usdt === undefined
                        ? 4
                        : Number(
                            producto.recargo_usdt
                        )
                )
                : null,
        dolar_costo:
            usaCalculadoraUsdt
                ? (
                    producto.dolar_costo === null ||
                    producto.dolar_costo === undefined
                        ? 1600
                        : Number(
                            producto.dolar_costo
                        )
                )
                : null
    };


    if (usaCalculadoraUsdt) {
        actualizarCostoItemReposicionGestion(
            nuevoItem,
            producto
        );
    }


    itemsReposicionGestion.push(
        nuevoItem
    );


    if (
        buscadorReposicionGestion
    ) {
        buscadorReposicionGestion.value =
            "";
    }


    resultadosReposicionGestion
        ?.classList.add(
            "oculto"
        );


    mostrarMensaje(
        mensajeReposicionGestion,
        ""
    );


    renderizarItemsReposicionGestion();

}


// =========================================================
// RENDER ITEMS
// =========================================================

function renderizarItemsReposicionGestion() {

    if (
        !contenedorItemsReposicionGestion
    ) {
        return;
    }


    if (
        itemsReposicionGestion.length === 0
    ) {

        contenedorItemsReposicionGestion.innerHTML = `
            <p class="reposicion-vacia">
                Buscá un producto para empezar la reposición.
            </p>
        `;


        actualizarResumenReposicionGestion();


        return;
    }


    contenedorItemsReposicionGestion.innerHTML =
        itemsReposicionGestion
            .map(
                (item) => {

                    const producto =
                        productosGestion.find(
                            (producto) =>
                                Number(producto.id) ===
                                Number(item.producto_id)
                        );


                    if (!producto) {
                        return "";
                    }


                    const usaCalculadoraUsdt =
                        productoUsaCalculadoraUsdtGestion(
                            producto
                        );


                    if (usaCalculadoraUsdt) {
                        actualizarCostoItemReposicionGestion(
                            item,
                            producto
                        );
                    }


                    const cantidad =
                        Math.max(
                            0,
                            obtenerNumeroReposicion(
                                item.cantidad
                            )
                        );


                    const costoCompra =
                        item.costo_unitario === ""
                            ? null
                            : Math.max(
                                0,
                                obtenerNumeroReposicion(
                                    item.costo_unitario
                                )
                            );


                    const subtotal =
                        costoCompra === null
                            ? 0
                            : cantidad * costoCompra;


                    const costoPromedio =
                        costoCompra === null
                            ? null
                            : calcularCostoPromedioPreviewReposicion(
                                producto,
                                cantidad,
                                costoCompra
                            );


                    const stockNuevo =
                        obtenerNumeroReposicion(
                            producto.stock
                        ) + cantidad;


                    const tieneStockSinCosto =
                        obtenerNumeroReposicion(
                            producto.stock
                        ) > 0 &&
                        (
                            producto.costo_actual === null ||
                            producto.costo_actual === undefined ||
                            producto.costo_actual === ""
                        );


                    return `
                        <article
                            class="reposicion-item"
                            data-producto-id="${producto.id}"
                        >

                            <div class="reposicion-item-cabecera">
                                <div>
                                    <strong>
                                        ${escaparHTML(
                                            producto.nombre_mostrar
                                        )}
                                    </strong>

                                    <span>
                                        Stock actual: ${obtenerTextoStock(
                                            producto.stock
                                        )}
                                        ·
                                        Costo actual:
                                        ${
                                            producto.costo_actual === null ||
                                            producto.costo_actual === undefined
                                                ? "Sin cargar"
                                                : formatearPrecio(
                                                    producto.costo_actual
                                                )
                                        }
                                    </span>
                                </div>

                                <button
                                    type="button"
                                    class="quitar-item-reposicion"
                                    data-producto-id="${producto.id}"
                                    aria-label="Quitar producto"
                                >
                                    ×
                                </button>
                            </div>

                            <div class="reposicion-item-campos ${
                                usaCalculadoraUsdt
                                    ? "reposicion-item-campos-usdt"
                                    : ""
                            }">

                                <label>
                                    <span>Cantidad</span>
                                    <input
                                        type="number"
                                        min="1"
                                        step="1"
                                        class="reposicion-item-cantidad"
                                        data-producto-id="${producto.id}"
                                        value="${cantidad || 1}"
                                    >
                                </label>

                                ${
                                    usaCalculadoraUsdt
                                        ? `
                                            <label>
                                                <span>Precio proveedor USDT</span>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    step="0.01"
                                                    inputmode="decimal"
                                                    class="reposicion-item-precio-usdt"
                                                    data-producto-id="${producto.id}"
                                                    value="${
                                                        item.precio_proveedor_usdt === "" ||
                                                        item.precio_proveedor_usdt === null ||
                                                        item.precio_proveedor_usdt === undefined
                                                            ? ""
                                                            : escaparHTML(
                                                                String(
                                                                    item.precio_proveedor_usdt
                                                                )
                                                            )
                                                    }"
                                                    placeholder="Ej.: 30"
                                                >
                                            </label>

                                            <label>
                                                <span>Recargo USDT</span>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    step="0.01"
                                                    inputmode="decimal"
                                                    class="reposicion-item-recargo-usdt"
                                                    data-producto-id="${producto.id}"
                                                    value="${escaparHTML(
                                                        String(
                                                            item.recargo_usdt ?? 4
                                                        )
                                                    )}"
                                                >
                                            </label>

                                            <label>
                                                <span>Dólar de costo</span>
                                                <input
                                                    type="number"
                                                    min="0.01"
                                                    step="0.01"
                                                    inputmode="decimal"
                                                    class="reposicion-item-dolar-costo"
                                                    data-producto-id="${producto.id}"
                                                    value="${escaparHTML(
                                                        String(
                                                            item.dolar_costo ?? 1600
                                                        )
                                                    )}"
                                                >
                                            </label>

                                            <label>
                                                <span>Costo de esta reposición</span>
                                                <input
                                                    type="text"
                                                    class="reposicion-item-costo-calculado"
                                                    value="${
                                                        costoCompra === null
                                                            ? ""
                                                            : escaparHTML(
                                                                formatearPrecio(
                                                                    costoCompra
                                                                )
                                                            )
                                                    }"
                                                    placeholder="Se calcula solo"
                                                    readonly
                                                >
                                            </label>
                                        `
                                        : `
                                            <label>
                                                <span>Costo real por unidad</span>
                                                <input
                                                    type="number"
                                                    min="0"
                                                    step="0.01"
                                                    inputmode="decimal"
                                                    class="reposicion-item-costo"
                                                    data-producto-id="${producto.id}"
                                                    value="${
                                                        item.costo_unitario === ""
                                                            ? ""
                                                            : escaparHTML(
                                                                String(
                                                                    item.costo_unitario
                                                                )
                                                            )
                                                    }"
                                                    placeholder="Ej.: 48500"
                                                >
                                            </label>
                                        `
                                }

                            </div>

                            ${
                                usaCalculadoraUsdt
                                    ? `
                                        <p class="reposicion-ayuda-usdt">
                                            Fórmula: (precio proveedor + recargo) × dólar de costo.
                                            El resultado se usa como costo de las unidades que ingresan.
                                        </p>
                                    `
                                    : ""
                            }

                            ${
                                tieneStockSinCosto
                                    ? `
                                        <p class="reposicion-alerta-costo">
                                            Este producto tiene stock pero todavía no tiene costo actual.
                                            Cargalo primero desde Editar producto para poder calcular correctamente el promedio.
                                        </p>
                                    `
                                    : ""
                            }

                            <div class="reposicion-item-preview">
                                <div>
                                    <span>Nuevo stock</span>
                                    <strong>${stockNuevo}</strong>
                                </div>

                                <div>
                                    <span>Nuevo costo promedio</span>
                                    <strong>
                                        ${
                                            costoPromedio === null
                                                ? "—"
                                                : formatearPrecio(
                                                    costoPromedio
                                                )
                                        }
                                    </strong>
                                </div>

                                <div>
                                    <span>Subtotal compra</span>
                                    <strong>
                                        ${formatearPrecio(
                                            subtotal
                                        )}
                                    </strong>
                                </div>
                            </div>

                        </article>
                    `;

                }
            )
            .join("");


    actualizarResumenReposicionGestion();

}


function actualizarResumenReposicionGestion() {

    const totalProductos =
        itemsReposicionGestion.length;


    const totalUnidades =
        itemsReposicionGestion.reduce(
            (total, item) =>
                total +
                Math.max(
                    0,
                    obtenerNumeroReposicion(
                        item.cantidad
                    )
                ),
            0
        );


    const totalCompra =
        itemsReposicionGestion.reduce(
            (total, item) => {

                const cantidad =
                    Math.max(
                        0,
                        obtenerNumeroReposicion(
                            item.cantidad
                        )
                    );


                const costo =
                    item.costo_unitario === ""
                        ? 0
                        : Math.max(
                            0,
                            obtenerNumeroReposicion(
                                item.costo_unitario
                            )
                        );


                return total +
                    cantidad * costo;

            },
            0
        );


    if (
        totalProductosReposicionGestion
    ) {
        totalProductosReposicionGestion.textContent =
            String(
                totalProductos
            );
    }


    if (
        totalUnidadesReposicionGestion
    ) {
        totalUnidadesReposicionGestion.textContent =
            String(
                totalUnidades
            );
    }


    if (
        totalCompraReposicionGestion
    ) {
        totalCompraReposicionGestion.textContent =
            formatearPrecio(
                totalCompra
            );
    }

}


// =========================================================
// HISTORIAL
// =========================================================

async function cargarHistorialReposicionesGestion() {

    if (
        !historialReposicionGestion
    ) {
        return;
    }


    historialReposicionGestion.innerHTML = `
        <p class="reposicion-vacia">
            Cargando reposiciones...
        </p>
    `;


    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from("reposiciones")
                .select(`
                    id,
                    created_at,
                    observaciones,
                    reposicion_items (
                        id,
                        producto_nombre,
                        cantidad,
                        costo_unitario,
                        precio_proveedor_usdt,
                        recargo_usdt,
                        dolar_costo,
                        subtotal
                    )
                `)
                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                )
                .limit(50);


        if (error) {
            throw error;
        }


        const reposiciones =
            Array.isArray(data)
                ? data
                : [];


        if (
            reposiciones.length === 0
        ) {

            historialReposicionGestion.innerHTML = `
                <p class="reposicion-vacia">
                    Todavía no hay reposiciones registradas.
                </p>
            `;


            return;
        }


        historialReposicionGestion.innerHTML =
            reposiciones
                .map(
                    (reposicion) => {

                        const items =
                            Array.isArray(
                                reposicion.reposicion_items
                            )
                                ? reposicion.reposicion_items
                                : [];


                        const total =
                            items.reduce(
                                (acumulado, item) =>
                                    acumulado +
                                    obtenerNumeroReposicion(
                                        item.subtotal
                                    ),
                                0
                            );


                        const unidades =
                            items.reduce(
                                (acumulado, item) =>
                                    acumulado +
                                    obtenerNumeroReposicion(
                                        item.cantidad
                                    ),
                                0
                            );


                        return `
                            <article class="reposicion-historial-card">

                                <div class="reposicion-historial-card-encabezado">
                                    <div>
                                        <strong>
                                            Reposición #${reposicion.id}
                                        </strong>

                                        <span>
                                            ${formatearFechaHora(
                                                reposicion.created_at
                                            )}
                                        </span>
                                    </div>

                                    <div class="reposicion-historial-totales">
                                        <span>
                                            ${unidades}
                                            ${
                                                unidades === 1
                                                    ? "unidad"
                                                    : "unidades"
                                            }
                                        </span>

                                        <strong>
                                            ${formatearPrecio(
                                                total
                                            )}
                                        </strong>
                                    </div>
                                </div>

                                <div class="reposicion-historial-items">
                                    ${
                                        items
                                            .map(
                                                (item) => `
                                                    <div class="reposicion-historial-item">
                                                        <span>
                                                            ${escaparHTML(
                                                                item.producto_nombre
                                                            )}
                                                        </span>

                                                        <span>
                                                            ${item.cantidad} u. ×
                                                            ${formatearPrecio(
                                                                item.costo_unitario
                                                            )}
                                                            ${
                                                                item.precio_proveedor_usdt !== null &&
                                                                item.precio_proveedor_usdt !== undefined
                                                                    ? `
                                                                        <small class="reposicion-historial-usdt">
                                                                            ${item.precio_proveedor_usdt} USDT
                                                                            + ${item.recargo_usdt ?? 0} USDT
                                                                            × $${Number(item.dolar_costo || 0).toLocaleString("es-AR")}
                                                                        </small>
                                                                    `
                                                                    : ""
                                                            }
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
                                    reposicion.observaciones
                                        ? `
                                            <p class="reposicion-historial-observaciones">
                                                ${escaparHTML(
                                                    reposicion.observaciones
                                                )}
                                            </p>
                                        `
                                        : ""
                                }

                            </article>
                        `;

                    }
                )
                .join("");

    } catch (error) {

        console.error(
            "Error al cargar reposiciones:",
            error
        );


        historialReposicionGestion.innerHTML = `
            <p class="reposicion-alerta-costo">
                No se pudo cargar el historial de reposiciones.
            </p>
        `;

    }

}


// =========================================================
// ABRIR REPOSICIONES
// =========================================================

async function abrirReposicionGestion() {

    cerrarSeccionesGestion();


    seccionReposicionGestion
        ?.classList.remove(
            "oculto"
        );


    renderizarItemsReposicionGestion();


    await cargarHistorialReposicionesGestion();


    setTimeout(
        () => {

            seccionReposicionGestion
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        },
        40
    );

}


// =========================================================
// EVENTOS REPOSICIÓN
// =========================================================

botonRegistrarReposicion
    ?.addEventListener(
        "click",
        abrirReposicionGestion
    );


botonCerrarReposicionGestion
    ?.addEventListener(
        "click",
        () => {

            seccionReposicionGestion
                ?.classList.add(
                    "oculto"
                );

        }
    );


buscadorReposicionGestion
    ?.addEventListener(
        "input",
        renderizarResultadosReposicionGestion
    );


buscadorReposicionGestion
    ?.addEventListener(
        "keydown",
        (evento) => {

            if (
                evento.key !== "Enter"
            ) {
                return;
            }


            evento.preventDefault();


            const resultados =
                obtenerProductosBusquedaReposicion(
                    buscadorReposicionGestion.value
                );


            if (
                resultados.length === 1
            ) {
                agregarProductoReposicionGestion(
                    resultados[0].id
                );
            }

        }
    );


resultadosReposicionGestion
    ?.addEventListener(
        "click",
        (evento) => {

            const boton =
                evento.target.closest(
                    ".reposicion-resultado-producto"
                );


            if (!boton) {
                return;
            }


            agregarProductoReposicionGestion(
                Number(
                    boton.dataset.productoId
                )
            );

        }
    );


contenedorItemsReposicionGestion
    ?.addEventListener(
        "input",
        (evento) => {

            const productoId =
                Number(
                    evento.target.dataset.productoId
                );


            if (!productoId) {
                return;
            }


            const item =
                itemsReposicionGestion.find(
                    (item) =>
                        Number(item.producto_id) ===
                        productoId
                );


            if (!item) {
                return;
            }


            if (
                evento.target.classList.contains(
                    "reposicion-item-cantidad"
                )
            ) {
                item.cantidad =
                    evento.target.value;
            }


            if (
                evento.target.classList.contains(
                    "reposicion-item-costo"
                )
            ) {
                item.costo_unitario =
                    evento.target.value;
            }


            if (
                evento.target.classList.contains(
                    "reposicion-item-precio-usdt"
                )
            ) {
                item.precio_proveedor_usdt =
                    evento.target.value;
            }


            if (
                evento.target.classList.contains(
                    "reposicion-item-recargo-usdt"
                )
            ) {
                item.recargo_usdt =
                    evento.target.value;
            }


            if (
                evento.target.classList.contains(
                    "reposicion-item-dolar-costo"
                )
            ) {
                item.dolar_costo =
                    evento.target.value;
            }


            const producto =
                productosGestion.find(
                    (producto) =>
                        Number(producto.id) ===
                        productoId
                );


            if (
                producto &&
                productoUsaCalculadoraUsdtGestion(
                    producto
                )
            ) {
                actualizarCostoItemReposicionGestion(
                    item,
                    producto
                );
            }


            renderizarItemsReposicionGestion();

        }
    );


contenedorItemsReposicionGestion
    ?.addEventListener(
        "click",
        (evento) => {

            const boton =
                evento.target.closest(
                    ".quitar-item-reposicion"
                );


            if (!boton) {
                return;
            }


            const productoId =
                Number(
                    boton.dataset.productoId
                );


            itemsReposicionGestion =
                itemsReposicionGestion.filter(
                    (item) =>
                        Number(item.producto_id) !==
                        productoId
                );


            renderizarItemsReposicionGestion();

        }
    );


botonGuardarReposicionGestion
    ?.addEventListener(
        "click",
        async () => {

            mostrarMensaje(
                mensajeReposicionGestion,
                ""
            );


            if (
                itemsReposicionGestion.length === 0
            ) {

                mostrarMensaje(
                    mensajeReposicionGestion,
                    "Agregá al menos un producto a la reposición."
                );


                return;
            }


            const itemsValidos = [];


            for (
                const item of itemsReposicionGestion
            ) {

                const producto =
                    productosGestion.find(
                        (producto) =>
                            Number(producto.id) ===
                            Number(item.producto_id)
                    );


                const cantidad =
                    Number(
                        item.cantidad
                    );


                const usaCalculadoraUsdt =
                    productoUsaCalculadoraUsdtGestion(
                        producto
                    );


                if (usaCalculadoraUsdt) {
                    actualizarCostoItemReposicionGestion(
                        item,
                        producto
                    );
                }


                const costo =
                    item.costo_unitario === ""
                        ? NaN
                        : Number(
                            item.costo_unitario
                        );


                if (
                    !Number.isInteger(cantidad) ||
                    cantidad <= 0
                ) {

                    mostrarMensaje(
                        mensajeReposicionGestion,
                        `Revisá la cantidad de ${
                            producto?.nombre_mostrar ||
                            "uno de los productos"
                        }.`
                    );


                    return;
                }


                if (usaCalculadoraUsdt) {

                    const precioProveedor =
                        Number(
                            item.precio_proveedor_usdt
                        );

                    const recargo =
                        Number(
                            item.recargo_usdt
                        );

                    const dolarCosto =
                        Number(
                            item.dolar_costo
                        );


                    if (
                        String(
                            item.precio_proveedor_usdt ?? ""
                        ).trim() === "" ||
                        !Number.isFinite(precioProveedor) ||
                        precioProveedor < 0 ||
                        !Number.isFinite(recargo) ||
                        recargo < 0 ||
                        !Number.isFinite(dolarCosto) ||
                        dolarCosto <= 0 ||
                        !Number.isFinite(costo) ||
                        costo < 0
                    ) {

                        mostrarMensaje(
                            mensajeReposicionGestion,
                            `Revisá el precio en USDT, el recargo y el dólar de costo de ${
                                producto?.nombre_mostrar ||
                                "uno de los productos"
                            }.`
                        );


                        return;
                    }

                } else if (
                    !Number.isFinite(costo) ||
                    costo < 0
                ) {

                    mostrarMensaje(
                        mensajeReposicionGestion,
                        `Cargá el costo real de ${
                            producto?.nombre_mostrar ||
                            "uno de los productos"
                        }.`
                    );


                    return;
                }


                if (
                    producto &&
                    obtenerNumeroReposicion(
                        producto.stock
                    ) > 0 &&
                    (
                        producto.costo_actual === null ||
                        producto.costo_actual === undefined ||
                        producto.costo_actual === ""
                    )
                ) {

                    mostrarMensaje(
                        mensajeReposicionGestion,
                        `Primero cargá el costo actual de ${producto.nombre_mostrar} desde Ver stock → Editar.`
                    );


                    return;
                }


                if (usaCalculadoraUsdt) {

                    itemsValidos.push({
                        producto_id:
                            Number(item.producto_id),
                        cantidad,
                        precio_proveedor_usdt:
                            Number(
                                item.precio_proveedor_usdt
                            ),
                        recargo_usdt:
                            Number(
                                item.recargo_usdt
                            ),
                        dolar_costo:
                            Number(
                                item.dolar_costo
                            ),
                        costo_unitario:
                            costo
                    });

                } else {

                    itemsValidos.push({
                        producto_id:
                            Number(item.producto_id),
                        cantidad,
                        costo_unitario:
                            costo
                    });

                }

            }


            const totalUnidades =
                itemsValidos.reduce(
                    (total, item) =>
                        total +
                        item.cantidad,
                    0
                );


            const totalCompra =
                itemsValidos.reduce(
                    (total, item) =>
                        total +
                        item.cantidad *
                        item.costo_unitario,
                    0
                );


            const confirmar =
                window.confirm(
                    `¿Registrar esta reposición?\n\n` +
                    `${totalUnidades} unidades\n` +
                    `Total de compra: ${formatearPrecio(totalCompra)}\n\n` +
                    "Se sumará el stock y se actualizarán los costos promedio y precios."
                );


            if (!confirmar) {
                return;
            }


            botonGuardarReposicionGestion.disabled =
                true;


            botonGuardarReposicionGestion.textContent =
                "Registrando...";


            try {

                const {
                    data,
                    error
                } =
                    await supabaseClient.rpc(
                        "registrar_reposicion",
                        {
                            p_items:
                                itemsValidos,
                            p_observaciones:
                                observacionesReposicionGestion
                                    ?.value
                                    ?.trim() ||
                                null
                        }
                    );


                if (error) {
                    throw error;
                }


                itemsReposicionGestion =
                    [];


                if (
                    observacionesReposicionGestion
                ) {
                    observacionesReposicionGestion.value =
                        "";
                }


                await cargarProductosGestion();

                renderizarStock();

                renderizarItemsReposicionGestion();

                await cargarHistorialReposicionesGestion();

                await actualizarResumenGeneral();


                mostrarMensaje(
                    mensajeReposicionGestion,
                    `Reposición #${data} registrada correctamente. Stock, costo promedio y precios actualizados.`,
                    "exito"
                );

            } catch (error) {

                console.error(
                    "Error al registrar reposición:",
                    error
                );


                mostrarMensaje(
                    mensajeReposicionGestion,
                    error.message ||
                    "No se pudo registrar la reposición."
                );

            } finally {

                botonGuardarReposicionGestion.disabled =
                    false;


                botonGuardarReposicionGestion.textContent =
                    "Registrar reposición";

            }

        }
    );


// =========================================================
// VINCULAR DECANTS AUTOMÁTICAMENTE CON SU PERFUME BASE
// SOLO COINCIDENCIAS EXACTAS DE NOMBRE + MARCA
// =========================================================

const botonVincularDecantsAutomaticamenteGestion =
    document.getElementById(
        "vincular-decants-automaticamente"
    );

const mensajeVincularDecantsGestion =
    document.getElementById(
        "mensaje-vincular-decants"
    );


function obtenerNombreBaseVinculoDecantGestion(
    producto
) {

    const productoLocal =
        productosLocalesPorId.get(
            producto?.slug
        );


    const nombre =
        productoLocal?.nombre ||
        producto?.nombre_base_mostrar ||
        producto?.nombre_mostrar ||
        producto?.slug ||
        "";


    return normalizarBusquedaProducto(
        nombre
    )
        .replace(/\bdecants?\b/g, " ")
        .replace(/\bperfumes?\b/g, " ")
        .replace(/\b\d+(?:[.,]\d+)?\s*ml\b/g, " ")
        .replace(/\s+/g, " ")
        .trim();

}


function obtenerClaveVinculoDecantGestion(
    producto
) {

    const marca =
        normalizarBusquedaProducto(
            producto?.marca_mostrar ||
            ""
        )
            .replace(/\s+/g, " ")
            .trim();


    const nombre =
        obtenerNombreBaseVinculoDecantGestion(
            producto
        );


    return `${marca}||${nombre}`;

}


function calcularDatosVinculoDecantGestion(
    decant,
    perfumeBase
) {

    const costoPerfumeBase =
        Number(
            perfumeBase?.costo_actual
        );


    if (
        !Number.isFinite(costoPerfumeBase) ||
        costoPerfumeBase < 0
    ) {
        return {
            valido: false,
            motivo: "sin-costo-base"
        };
    }


    const mlBaseGuardado =
        Number(decant?.ml_perfume_base);

    const mlBase =
        Number.isFinite(mlBaseGuardado) &&
        mlBaseGuardado > 0
            ? mlBaseGuardado
            : obtenerMlNumericosProductoGestion(
                perfumeBase
            );


    const mlDecantGuardado =
        Number(decant?.ml_decant);

    const mlDecant =
        Number.isFinite(mlDecantGuardado) &&
        mlDecantGuardado > 0
            ? mlDecantGuardado
            : 5;


    const mlTesterGuardado =
        Number(decant?.ml_tester);

    const mlTester =
        Number.isFinite(mlTesterGuardado) &&
        mlTesterGuardado >= 0
            ? mlTesterGuardado
            : 5;


    const insumosGuardados =
        Number(decant?.costo_insumos_decant);

    const insumos =
        Number.isFinite(insumosGuardados) &&
        insumosGuardados >= 0
            ? insumosGuardados
            : 1800;


    const redondeoGuardado =
        Number(decant?.redondeo_costo_decant);

    const redondeo =
        Number.isFinite(redondeoGuardado) &&
        redondeoGuardado > 0
            ? redondeoGuardado
            : 500;


    const vendibles =
        mlBase > 0 &&
        mlDecant > 0 &&
        mlTester >= 0 &&
        mlTester < mlBase
            ? Math.floor(
                (mlBase - mlTester) /
                mlDecant
            )
            : 0;


    if (vendibles <= 0) {
        return {
            valido: false,
            motivo: "medidas-invalidas"
        };
    }


    const costoSinRedondear =
        costoPerfumeBase /
        vendibles +
        insumos;


    const costoCalculado =
        Math.ceil(
            costoSinRedondear /
            redondeo
        ) * redondeo;


    const markupMinoristaGuardado =
        Number(decant?.markup_minorista);

    let markupMinorista =
        Number.isFinite(markupMinoristaGuardado) &&
        markupMinoristaGuardado >= 0
            ? markupMinoristaGuardado
            : null;


    if (markupMinorista === null) {

        const precioMinorista =
            Number(decant?.precio_minorista);


        if (
            Number.isFinite(precioMinorista) &&
            precioMinorista >= costoCalculado &&
            costoCalculado > 0
        ) {

            markupMinorista =
                (
                    precioMinorista /
                    costoCalculado -
                    1
                ) * 100;

        }

    }


    if (markupMinorista === null) {
        return {
            valido: false,
            motivo: "sin-precio-minorista"
        };
    }


    const markupMayoristaGuardado =
        Number(decant?.markup_mayorista);

    let markupMayorista =
        Number.isFinite(markupMayoristaGuardado) &&
        markupMayoristaGuardado >= 0
            ? markupMayoristaGuardado
            : null;


    if (markupMayorista === null) {

        const precioMayorista =
            Number(decant?.precio_mayorista);


        if (
            Number.isFinite(precioMayorista) &&
            precioMayorista >= costoCalculado &&
            costoCalculado > 0
        ) {

            markupMayorista =
                (
                    precioMayorista /
                    costoCalculado -
                    1
                ) * 100;

        }

    }


    if (markupMayorista === null) {
        markupMayorista =
            markupMinorista;
    }


    return {
        valido: true,
        mlBase,
        mlDecant,
        mlTester,
        insumos,
        redondeo,
        markupMayorista,
        markupMinorista
    };

}


function prepararVinculosAutomaticosDecantsGestion() {

    const basesPorClave =
        new Map();


    productosGestion
        .filter(
            (producto) =>
                producto.retirado !== true &&
                !productoEsDecantGestion(
                    producto
                )
        )
        .forEach(
            (producto) => {

                const clave =
                    obtenerClaveVinculoDecantGestion(
                        producto
                    );


                if (!clave.endsWith("||")) {

                    if (!basesPorClave.has(clave)) {
                        basesPorClave.set(
                            clave,
                            []
                        );
                    }


                    basesPorClave
                        .get(clave)
                        .push(producto);

                }

            }
        );


    const resultado = {
        listos: [],
        yaVinculados: 0,
        sinCoincidencia: 0,
        ambiguos: 0,
        sinCostoBase: 0,
        incompletos: 0
    };


    productosGestion
        .filter(
            (producto) =>
                producto.retirado !== true &&
                productoEsDecantGestion(
                    producto
                )
        )
        .forEach(
            (decant) => {

                if (
                    decant.producto_base_id !== null &&
                    decant.producto_base_id !== undefined
                ) {
                    resultado.yaVinculados += 1;
                    return;
                }


                const clave =
                    obtenerClaveVinculoDecantGestion(
                        decant
                    );


                const candidatos =
                    basesPorClave.get(clave) ||
                    [];


                if (candidatos.length === 0) {
                    resultado.sinCoincidencia += 1;
                    return;
                }


                if (candidatos.length !== 1) {
                    resultado.ambiguos += 1;
                    return;
                }


                const perfumeBase =
                    candidatos[0];


                const datos =
                    calcularDatosVinculoDecantGestion(
                        decant,
                        perfumeBase
                    );


                if (!datos.valido) {

                    if (
                        datos.motivo ===
                        "sin-costo-base"
                    ) {
                        resultado.sinCostoBase += 1;
                    } else {
                        resultado.incompletos += 1;
                    }

                    return;

                }


                resultado.listos.push({
                    decant,
                    perfumeBase,
                    datos
                });

            }
        );


    return resultado;

}


async function vincularDecantsAutomaticamenteGestion() {

    if (
        !botonVincularDecantsAutomaticamenteGestion
    ) {
        return;
    }


    const preparacion =
        prepararVinculosAutomaticosDecantsGestion();


    if (
        preparacion.listos.length === 0
    ) {

        mostrarMensaje(
            mensajeVincularDecantsGestion,
            `No hay decants nuevos para vincular automáticamente. Ya vinculados: ${preparacion.yaVinculados}. Sin coincidencia exacta: ${preparacion.sinCoincidencia}. Dudosos: ${preparacion.ambiguos}. Sin costo en el perfume base: ${preparacion.sinCostoBase}.`
        );

        return;

    }


    const confirmar =
        window.confirm(
            `Encontré ${preparacion.listos.length} decants con coincidencia exacta de nombre y marca.\n\n` +
            "Solo voy a vincular esos casos seguros. Los que no coincidan exactamente quedarán para revisar manualmente.\n\n" +
            "¿Continuar?"
        );


    if (!confirmar) {
        return;
    }


    botonVincularDecantsAutomaticamenteGestion.disabled =
        true;

    botonVincularDecantsAutomaticamenteGestion.textContent =
        "Vinculando...";


    let vinculados = 0;
    let errores = 0;


    try {

        for (
            const item of
            preparacion.listos
        ) {

            const {
                decant,
                perfumeBase,
                datos
            } = item;


            const {
                error
            } =
                await supabaseClient.rpc(
                    "configurar_decant",
                    {
                        p_decant_id:
                            Number(decant.id),

                        p_producto_base_id:
                            Number(perfumeBase.id),

                        p_ml_perfume_base:
                            datos.mlBase,

                        p_ml_decant:
                            datos.mlDecant,

                        p_ml_tester:
                            datos.mlTester,

                        p_costo_insumos:
                            datos.insumos,

                        p_redondeo:
                            datos.redondeo,

                        p_markup_mayorista:
                            datos.markupMayorista,

                        p_markup_minorista:
                            datos.markupMinorista
                    }
                );


            if (error) {

                errores += 1;

                console.error(
                    `No se pudo vincular ${decant.nombre_mostrar}:`,
                    error
                );

                continue;

            }


            vinculados += 1;

        }


        await cargarProductosGestion();

        renderizarStock();


        const despues =
            prepararVinculosAutomaticosDecantsGestion();


        const detalles = [
            `${vinculados} vinculados correctamente`,
            `${despues.yaVinculados} vinculados en total`
        ];


        if (despues.sinCoincidencia > 0) {
            detalles.push(
                `${despues.sinCoincidencia} sin coincidencia exacta`
            );
        }


        if (despues.ambiguos > 0) {
            detalles.push(
                `${despues.ambiguos} dudosos`
            );
        }


        if (despues.sinCostoBase > 0) {
            detalles.push(
                `${despues.sinCostoBase} pendientes por falta de costo base`
            );
        }


        if (despues.incompletos > 0) {
            detalles.push(
                `${despues.incompletos} pendientes para revisar`
            );
        }


        if (errores > 0) {
            detalles.push(
                `${errores} con error`
            );
        }


        mostrarMensaje(
            mensajeVincularDecantsGestion,
            detalles.join(" · "),
            errores === 0
                ? "exito"
                : undefined
        );

    } catch (error) {

        console.error(
            "Error al vincular decants automáticamente:",
            error
        );


        mostrarMensaje(
            mensajeVincularDecantsGestion,
            error.message ||
            "No se pudieron vincular los decants automáticamente."
        );

    } finally {

        botonVincularDecantsAutomaticamenteGestion.disabled =
            false;

        botonVincularDecantsAutomaticamenteGestion.textContent =
            "Vincular decants automáticamente";

    }

}


botonVincularDecantsAutomaticamenteGestion
    ?.addEventListener(
        "click",
        vincularDecantsAutomaticamenteGestion
    );

// =========================================================
// MOVIMIENTOS - MENÚ DE ACCIONES Y COBROS DESDE LA VENTA
// =========================================================

function obtenerClaseEstadoCobroGestion(venta) {

    if (venta?.anulada === true) {
        return "movimiento-cobro-anulado";
    }

    const total = Number(venta?.total) || 0;
    const pagado = Number(venta?.pagado) || 0;

    if (pagado <= 0) {
        return "movimiento-cobro-no";
    }

    if (pagado < total) {
        return "movimiento-cobro-parcial";
    }

    return "movimiento-cobro-cobrado";
}


function renderizarPagosMovimientoGestion(venta) {

    const pagos = Array.isArray(venta?.pagos)
        ? venta.pagos
        : [];

    if (pagos.length === 0) {
        return `
            <p class="movimiento-sin-pagos">
                Esta venta todavía no tiene pagos registrados.
            </p>
        `;
    }

    return `
        <div class="movimiento-pagos-lista">
            ${pagos
                .map(
                    (pago) => `
                        <div class="movimiento-pago-item">
                            <span>
                                ${escaparHTML(
                                    formatearFechaHora(
                                        pago.created_at
                                    )
                                )}
                            </span>

                            <span>
                                ${escaparHTML(
                                    pago.metodo_pago ||
                                    "Sin medio"
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
                .join("")}
        </div>
    `;
}


renderizarMovimientos = function () {

    if (!movimientosLista) {
        return;
    }

    if (movimientosGestion.length === 0) {

        movimientosLista.innerHTML = `
            <p class="movimientos-vacios">
                Todavía no hay ventas registradas.
            </p>
        `;

        return;
    }

    movimientosLista.innerHTML = `

        <div class="movimientos-tabla-cabecera">
            <span>Fecha</span>
            <span>Cliente</span>
            <span>Estado</span>
            <span>Total / Ganancia</span>
            <span>Pagado</span>
            <span>Pendiente</span>
            <span>Acciones</span>
        </div>

        <div class="movimientos-tabla-cuerpo">

            ${movimientosGestion
                .map(
                    (venta) => {

                        const anulada =
                            venta.anulada === true;

                        const cliente =
                            clientesGestion.find(
                                (cliente) =>
                                    Number(cliente.id) ===
                                    Number(venta.cliente_id)
                            );

                        const estadoCobro =
                            anulada
                                ? "Anulada"
                                : obtenerEstadoCobroMovimiento(
                                    venta
                                );

                        const claseEstado =
                            obtenerClaseEstadoCobroGestion(
                                venta
                            );

                        const tituloVenta =
                            anulada
                                ? "Venta anulada"
                                : `Venta #${venta.numero_visible}`;

                        const fecha =
                            venta.fecha_emision ||
                            venta.created_at;

                        const items =
                            Array.isArray(venta.items)
                                ? venta.items
                                : [];

                        return `

                            <article
                                class="movimiento-fila ${
                                    anulada
                                        ? "movimiento-anulado"
                                        : ""
                                }"
                                data-venta-id="${venta.id}"
                            >

                                <div class="movimiento-fila-resumen">

                                    <div class="movimiento-col movimiento-col-fecha" data-label="Fecha">
                                        <strong>
                                            ${escaparHTML(
                                                formatearFechaHora(
                                                    fecha
                                                )
                                            )}
                                        </strong>
                                        <small>${tituloVenta}</small>
                                    </div>

                                    <div class="movimiento-col" data-label="Cliente">
                                        <span>
                                            ${escaparHTML(
                                                cliente?.nombre ||
                                                "Sin cliente"
                                            )}
                                        </span>
                                    </div>

                                    <div class="movimiento-col" data-label="Estado">
                                        <span class="movimiento-cobro-estado ${claseEstado}">
                                            ${estadoCobro}
                                        </span>
                                    </div>

                                    <div class="movimiento-col movimiento-numero" data-label="Total">
                                        <strong>
                                            ${formatearPrecio(
                                                venta.total
                                            )}
                                        </strong>

                                        ${
                                            anulada
                                                ? `
                                                    <br>
                                                    <small>
                                                        No cuenta en ganancias
                                                    </small>
                                                `
                                                : venta.costo_pendiente
                                                    ? `
                                                        <br>
                                                        <small>
                                                            Costo pendiente
                                                        </small>
                                                    `
                                                    : `
                                                        <br>
                                                        <small>
                                                            Costo: ${formatearPrecio(
                                                                venta.costo_total
                                                            )}
                                                            <br>
                                                            Ganancia: ${formatearPrecio(
                                                                venta.ganancia
                                                            )}
                                                            · ${Number(
                                                                venta.margen
                                                            ).toFixed(1)}%
                                                        </small>
                                                    `
                                        }
                                    </div>

                                    <div class="movimiento-col movimiento-numero" data-label="Pagado">
                                        <span>
                                            ${anulada
                                                ? "—"
                                                : formatearPrecio(
                                                    venta.pagado
                                                )}
                                        </span>
                                    </div>

                                    <div class="movimiento-col movimiento-numero" data-label="Pendiente">
                                        <span class="${
                                            !anulada &&
                                            Number(venta.pendiente) > 0
                                                ? "movimiento-pendiente"
                                                : ""
                                        }">
                                            ${anulada
                                                ? "—"
                                                : formatearPrecio(
                                                    venta.pendiente
                                                )}
                                        </span>
                                    </div>

                                    <div class="movimiento-col movimiento-col-acciones" data-label="Acciones">

                                        <div class="movimiento-menu">

                                            <button
                                                type="button"
                                                class="movimiento-menu-boton"
                                                data-venta-id="${venta.id}"
                                                aria-expanded="false"
                                            >
                                                Acciones
                                                <span>⌄</span>
                                            </button>

                                            <div
                                                class="movimiento-menu-panel oculto"
                                                data-menu-venta="${venta.id}"
                                            >

                                                <button
                                                    type="button"
                                                    data-accion-movimiento="detalle"
                                                    data-venta-id="${venta.id}"
                                                >
                                                    Ver detalle
                                                </button>

                                                ${
                                                    !anulada
                                                        ? `
                                                            <button
                                                                type="button"
                                                                data-accion-movimiento="editar"
                                                                data-venta-id="${venta.id}"
                                                            >
                                                                Editar venta
                                                            </button>

                                                            ${
                                                                Number(venta.pendiente) > 0
                                                                    ? `
                                                                        <button
                                                                            type="button"
                                                                            data-accion-movimiento="pago"
                                                                            data-venta-id="${venta.id}"
                                                                        >
                                                                            Agregar pago
                                                                        </button>
                                                                    `
                                                                    : ""
                                                            }

                                                            <button
                                                                type="button"
                                                                data-accion-movimiento="pagos"
                                                                data-venta-id="${venta.id}"
                                                            >
                                                                Ver pagos
                                                            </button>

                                                            <button
                                                                type="button"
                                                                class="movimiento-accion-peligro"
                                                                data-accion-movimiento="anular"
                                                                data-venta-id="${venta.id}"
                                                                data-numero-venta="${venta.numero_visible}"
                                                            >
                                                                Anular venta
                                                            </button>
                                                        `
                                                        : `
                                                            <button
                                                                type="button"
                                                                class="movimiento-accion-peligro"
                                                                data-accion-movimiento="eliminar"
                                                                data-venta-id="${venta.id}"
                                                            >
                                                                Eliminar definitivamente
                                                            </button>
                                                        `
                                                }

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                <div
                                    class="movimiento-detalle-panel oculto"
                                    data-detalle-venta="${venta.id}"
                                >

                                    <div class="movimiento-detalle-titulo">
                                        <strong>Detalle de la venta</strong>
                                        <span>${tituloVenta}</span>
                                    </div>

                                    <div class="movimiento-datos">

                                        <span>
                                            <b>Total vendido:</b>
                                            ${formatearPrecio(
                                                venta.total
                                            )}
                                        </span>

                                        ${
                                            venta.costo_pendiente
                                                ? `
                                                    <span>
                                                        <b>Costo histórico:</b>
                                                        Costo pendiente
                                                    </span>

                                                    <span>
                                                        <b>Ganancia:</b>
                                                        —
                                                    </span>

                                                    <span>
                                                        <b>Margen:</b>
                                                        —
                                                    </span>
                                                `
                                                : `
                                                    <span>
                                                        <b>Costo histórico:</b>
                                                        ${formatearPrecio(
                                                            venta.costo_total
                                                        )}
                                                    </span>

                                                    <span>
                                                        <b>Ganancia:</b>
                                                        ${formatearPrecio(
                                                            venta.ganancia
                                                        )}
                                                    </span>

                                                    <span>
                                                        <b>Margen:</b>
                                                        ${Number(
                                                            venta.margen
                                                        ).toFixed(1)}%
                                                    </span>
                                                `
                                        }

                                        ${
                                            anulada
                                                ? `
                                                    <span>
                                                        <b>Estado:</b>
                                                        Venta anulada · no cuenta en las ganancias
                                                    </span>
                                                `
                                                : ""
                                        }

                                    </div>


                                    <div class="movimiento-items movimiento-items-compactos">
                                        ${items
                                            .map(
                                                (item) => `
                                                    <div class="movimiento-item">
                                                        <span>
                                                            ${escaparHTML(
                                                                item.producto_nombre
                                                            )}
                                                        </span>
                                                        <span>
                                                            ${item.cantidad} × ${formatearPrecio(
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
                                            .join("")}
                                    </div>

                                    ${
                                        venta.observaciones
                                            ? `
                                                <p class="movimiento-observacion">
                                                    <b>Observación:</b>
                                                    ${escaparHTML(
                                                        venta.observaciones
                                                    )}
                                                </p>
                                            `
                                            : ""
                                    }

                                </div>


                                <div
                                    class="movimiento-pagos-panel oculto"
                                    data-pagos-venta="${venta.id}"
                                >
                                    <div class="movimiento-detalle-titulo">
                                        <strong>Pagos registrados</strong>
                                        <span>${tituloVenta}</span>
                                    </div>

                                    ${renderizarPagosMovimientoGestion(
                                        venta
                                    )}
                                </div>

                            </article>

                        `;
                    }
                )
                .join("")}

        </div>

    `;
};


function cerrarMenusMovimientosGestion(
    exceptoVentaId = null
) {

    movimientosLista
        ?.querySelectorAll(
            ".movimiento-menu-panel"
        )
        .forEach(
            (menu) => {

                const id =
                    Number(
                        menu.dataset.menuVenta
                    );

                if (
                    exceptoVentaId !== null &&
                    id === Number(exceptoVentaId)
                ) {
                    return;
                }

                menu.classList.add(
                    "oculto"
                );
            }
        );

    movimientosLista
        ?.querySelectorAll(
            ".movimiento-menu-boton"
        )
        .forEach(
            (boton) => {

                if (
                    exceptoVentaId !== null &&
                    Number(
                        boton.dataset.ventaId
                    ) === Number(exceptoVentaId)
                ) {
                    return;
                }

                boton.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }
        );
}


movimientosLista?.addEventListener(
    "click",
    async (evento) => {

        const botonMenu =
            evento.target.closest(
                ".movimiento-menu-boton"
            );

        if (botonMenu) {

            evento.preventDefault();
            evento.stopPropagation();

            const ventaId =
                Number(
                    botonMenu.dataset.ventaId
                );

            const menu =
                movimientosLista.querySelector(
                    `[data-menu-venta="${ventaId}"]`
                );

            if (!menu) {
                return;
            }

            const estabaCerrado =
                menu.classList.contains(
                    "oculto"
                );

            cerrarMenusMovimientosGestion();

            if (estabaCerrado) {
                menu.classList.remove(
                    "oculto"
                );

                botonMenu.setAttribute(
                    "aria-expanded",
                    "true"
                );
            }

            return;
        }


        const botonAccion =
            evento.target.closest(
                "[data-accion-movimiento]"
            );

        if (!botonAccion) {
            return;
        }

        evento.preventDefault();
        evento.stopPropagation();

        const ventaId =
            Number(
                botonAccion.dataset.ventaId
            );

        const accion =
            botonAccion.dataset.accionMovimiento;

        const venta =
            movimientosGestion.find(
                (item) =>
                    Number(item.id) ===
                    ventaId
            );

        cerrarMenusMovimientosGestion();

        if (!venta) {
            return;
        }


        if (accion === "detalle") {

            const panel =
                movimientosLista.querySelector(
                    `[data-detalle-venta="${ventaId}"]`
                );

            panel?.classList.toggle(
                "oculto"
            );

            return;
        }


        if (accion === "editar") {

            await abrirEdicionVentaGestion(
                ventaId
            );

            return;
        }


        if (accion === "pago") {

            abrirAgregarPagoGestion(
                ventaId
            );

            return;
        }


        if (accion === "pagos") {

            const panel =
                movimientosLista.querySelector(
                    `[data-pagos-venta="${ventaId}"]`
                );

            panel?.classList.toggle(
                "oculto"
            );

            return;
        }


        if (accion === "anular") {

            const numeroVisible =
                botonAccion.dataset.numeroVenta ||
                venta.numero_visible ||
                "";

            const confirmar =
                window.confirm(
                    `¿Seguro que querés anular la Venta #${numeroVisible}?\n\nEl stock de todos sus productos volverá automáticamente y dejará de contar en la numeración.`
                );

            if (!confirmar) {
                return;
            }

            await anularVenta(
                ventaId,
                botonAccion
            );

            return;
        }


        if (accion === "eliminar") {

            await eliminarVentaAnuladaGestion(
                ventaId,
                botonAccion
            );
        }
    }
);


document.addEventListener(
    "click",
    (evento) => {

        if (
            !evento.target.closest(
                ".movimiento-menu"
            )
        ) {
            cerrarMenusMovimientosGestion();
        }
    }
);


// =========================================================
// AGREGAR PAGO TAMBIÉN DESDE MOVIMIENTOS
// =========================================================

const abrirAgregarPagoAntesDeMovimientosGestion =
    abrirAgregarPagoGestion;


abrirAgregarPagoGestion = function (
    ventaId
) {

    const ventaEnCobros =
        cuentasCobrarGestion.find(
            (venta) =>
                Number(venta.id) ===
                Number(ventaId)
        );

    if (ventaEnCobros) {

        abrirAgregarPagoAntesDeMovimientosGestion(
            ventaId
        );

        return;
    }


    const venta =
        movimientosGestion.find(
            (venta) =>
                Number(venta.id) ===
                Number(ventaId) &&
                venta.anulada !== true
        );

    if (!venta) {
        return;
    }

    if (
        Number(venta.pendiente) <= 0
    ) {

        mostrarMensaje(
            mensajeMovimientos,
            "Esta venta ya está totalmente cobrada."
        );

        return;
    }


    const cliente =
        clientesGestion.find(
            (cliente) =>
                Number(cliente.id) ===
                Number(venta.cliente_id)
        );


    ventaPagoSeleccionadaGestion =
        venta;


    const numero =
        obtenerNumeroVentaVisibleGestion(
            ventaId
        );


    if (pagoVentaInfo) {
        pagoVentaInfo.textContent =
            `Venta #${numero || ""} · ${
                cliente?.nombre ||
                "Cliente"
            }`;
    }


    if (pagoSaldoActual) {
        pagoSaldoActual.textContent =
            formatearPrecio(
                venta.pendiente
            );
    }


    if (pagoMonto) {
        pagoMonto.value =
            Math.round(
                venta.pendiente
            );

        pagoMonto.max =
            venta.pendiente;
    }


    if (pagoMetodo) {
        pagoMetodo.value = "";
    }


    if (pagoObservaciones) {
        pagoObservaciones.value = "";
    }


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
};


// Si se registra un pago mientras Movimientos está abierto,
// refrescar también esa tabla para actualizar estado, pagado y pendiente.
formAgregarPago?.addEventListener(
    "submit",
    () => {

        setTimeout(
            async () => {

                if (
                    seccionMovimientos &&
                    !seccionMovimientos.classList.contains(
                        "oculto"
                    ) &&
                    modalAgregarPago?.classList.contains(
                        "oculto"
                    )
                ) {
                    await cargarMovimientosGestion();
                }
            },
            500
        );
    }
);


// =========================================================
// NUEVO PRODUCTO DESDE GESTIÓN
// =========================================================

const botonNuevoProductoGestion =
    document.getElementById("nuevo-producto-stock");

let modalNuevoProductoGestion =
    document.getElementById("modal-nuevo-producto-gestion");


if (!modalNuevoProductoGestion) {

    modalNuevoProductoGestion =
        document.createElement("div");

    modalNuevoProductoGestion.id =
        "modal-nuevo-producto-gestion";

    modalNuevoProductoGestion.className =
        "modal-nuevo-producto oculto";

    modalNuevoProductoGestion.innerHTML = `
        <div class="modal-nuevo-producto-contenido">

            <div class="modal-nuevo-producto-encabezado">
                <div>
                    <h3>Nuevo producto</h3>
                    <p>Crealo una sola vez y después lo administrás desde Stock.</p>
                </div>

                <button
                    type="button"
                    id="cerrar-nuevo-producto"
                    aria-label="Cerrar"
                >×</button>
            </div>

            <form id="form-nuevo-producto-gestion">

                <div class="nuevo-producto-bloque">
                    <div class="nuevo-producto-bloque-titulo">
                        <strong>Producto</strong>
                        <span>Datos principales</span>
                    </div>

                    <div class="nuevo-producto-grid">
                        <div class="campo">
                            <label for="nuevo-producto-nombre">Nombre</label>
                            <input
                                type="text"
                                id="nuevo-producto-nombre"
                                placeholder="Ej: 9 PM Elixir"
                                required
                            >
                        </div>

                        <div class="campo">
                            <label for="nuevo-producto-marca">Marca</label>
                            <input
                                type="text"
                                id="nuevo-producto-marca"
                                placeholder="Ej: Afnan"
                                required
                            >
                        </div>

                        <div class="campo">
                            <label for="nuevo-producto-categoria">Categoría</label>
                            <select id="nuevo-producto-categoria" required>
                                <option value="perfumes-grandes">Perfume árabe</option>
                                <option value="maison-30ml">Maison Alhambra 30 ml</option>
                                <option value="inspiraciones-disenador">Inspiración de diseñador 60 ml</option>
                                <option value="decants">Decant 5 ml</option>
                            </select>
                        </div>

                        <div class="campo">
                            <label for="nuevo-producto-ml">Presentación</label>
                            <div class="nuevo-producto-input-unidad">
                                <input
                                    type="number"
                                    id="nuevo-producto-ml"
                                    min="0.01"
                                    step="0.01"
                                    value="100"
                                    required
                                >
                                <span>ml</span>
                            </div>
                        </div>

                        <div
                            class="campo oculto"
                            id="nuevo-producto-linea-decant-campo"
                        >
                            <label for="nuevo-producto-linea-decant">Tipo de decant</label>
                            <select id="nuevo-producto-linea-decant">
                                <option value="">Decant árabe</option>
                                <option value="inspiraciones">Decant de diseñador</option>
                            </select>
                        </div>

                        <div class="campo">
                            <label for="nuevo-producto-stock-inicial">Stock inicial</label>
                            <input
                                type="number"
                                id="nuevo-producto-stock-inicial"
                                min="0"
                                step="1"
                                value="0"
                                required
                            >
                            <small>
                                Si es una compra nueva, podés dejar 0 y cargar luego la entrada desde Reposición.
                            </small>
                        </div>
                    </div>
                </div>

                <div class="nuevo-producto-bloque">
                    <div class="nuevo-producto-bloque-titulo">
                        <strong>Costo</strong>
                        <span id="nuevo-producto-costo-subtitulo">Calculado desde USDT</span>
                    </div>

                    <div id="nuevo-producto-costo-usdt">
                        <div class="nuevo-producto-grid nuevo-producto-grid-costo">
                            <div class="campo">
                                <label for="nuevo-producto-proveedor-usdt">Precio proveedor</label>
                                <div class="nuevo-producto-input-unidad">
                                    <input
                                        type="number"
                                        id="nuevo-producto-proveedor-usdt"
                                        min="0"
                                        step="0.01"
                                        placeholder="Ej: 30"
                                    >
                                    <span>USDT</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="nuevo-producto-recargo-usdt">Recargo</label>
                                <div class="nuevo-producto-input-unidad">
                                    <input
                                        type="number"
                                        id="nuevo-producto-recargo-usdt"
                                        min="0"
                                        step="0.01"
                                        value="4"
                                    >
                                    <span>USDT</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="nuevo-producto-dolar-costo">Dólar de costo</label>
                                <div class="nuevo-producto-input-unidad nuevo-producto-input-pesos">
                                    <span>$</span>
                                    <input
                                        type="number"
                                        id="nuevo-producto-dolar-costo"
                                        min="0.01"
                                        step="0.01"
                                        value="1600"
                                    >
                                </div>
                            </div>
                        </div>

                        <small class="nuevo-producto-formula">
                            Fórmula: (precio proveedor + recargo) × dólar de costo.
                        </small>
                    </div>

                    <div id="nuevo-producto-costo-manual" class="oculto">
                        <div class="campo">
                            <label for="nuevo-producto-costo-manual-input">Costo actual</label>
                            <div class="nuevo-producto-input-unidad nuevo-producto-input-pesos">
                                <span>$</span>
                                <input
                                    type="number"
                                    id="nuevo-producto-costo-manual-input"
                                    min="0"
                                    step="1"
                                >
                            </div>
                        </div>
                    </div>

                    <div id="nuevo-producto-costo-decant" class="oculto">
                        <div class="campo">
                            <label for="nuevo-producto-decant-base">Perfume base</label>
                            <select id="nuevo-producto-decant-base">
                                <option value="">Seleccionar perfume...</option>
                            </select>
                        </div>

                        <div class="nuevo-producto-grid nuevo-producto-grid-decant">
                            <div class="campo">
                                <label for="nuevo-producto-decant-ml-base">Contenido perfume</label>
                                <div class="nuevo-producto-input-unidad">
                                    <input type="number" id="nuevo-producto-decant-ml-base" min="0.01" step="0.01" value="100">
                                    <span>ml</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="nuevo-producto-decant-tester">Tester</label>
                                <div class="nuevo-producto-input-unidad">
                                    <input type="number" id="nuevo-producto-decant-tester" min="0" step="0.01" value="5">
                                    <span>ml</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="nuevo-producto-decant-ml">Decant</label>
                                <div class="nuevo-producto-input-unidad">
                                    <input type="number" id="nuevo-producto-decant-ml" min="0.01" step="0.01" value="5">
                                    <span>ml</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="nuevo-producto-decant-insumos">Insumos</label>
                                <div class="nuevo-producto-input-unidad nuevo-producto-input-pesos">
                                    <span>$</span>
                                    <input type="number" id="nuevo-producto-decant-insumos" min="0" step="1" value="1800">
                                </div>
                            </div>

                            <div class="campo">
                                <label for="nuevo-producto-decant-redondeo">Redondeo</label>
                                <div class="nuevo-producto-input-unidad nuevo-producto-input-pesos">
                                    <span>$</span>
                                    <input type="number" id="nuevo-producto-decant-redondeo" min="1" step="1" value="500">
                                </div>
                            </div>
                        </div>

                        <div class="nuevo-producto-decant-resumen">
                            <span>Decants vendibles: <strong id="nuevo-producto-decant-vendibles">—</strong></span>
                            <span>Costo perfume base: <strong id="nuevo-producto-decant-costo-base">—</strong></span>
                        </div>
                    </div>

                    <div class="campo nuevo-producto-costo-final">
                        <label for="nuevo-producto-costo-final">Costo calculado</label>
                        <div class="nuevo-producto-input-unidad nuevo-producto-input-pesos">
                            <span>$</span>
                            <input
                                type="number"
                                id="nuevo-producto-costo-final"
                                min="0"
                                step="1"
                                readonly
                            >
                        </div>
                    </div>
                </div>

                <div class="nuevo-producto-precios">
                    <div class="nuevo-producto-bloque">
                        <div class="nuevo-producto-bloque-titulo">
                            <strong>Mayorista</strong>
                            <span>Margen o precio</span>
                        </div>

                        <div class="nuevo-producto-grid-precio">
                            <div class="campo">
                                <label for="nuevo-producto-markup-mayorista">Margen</label>
                                <div class="nuevo-producto-input-unidad">
                                    <input type="number" id="nuevo-producto-markup-mayorista" min="0" step="0.01">
                                    <span>%</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="nuevo-producto-precio-mayorista">Precio</label>
                                <div class="nuevo-producto-input-unidad nuevo-producto-input-pesos">
                                    <span>$</span>
                                    <input type="number" id="nuevo-producto-precio-mayorista" min="0" step="1">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="nuevo-producto-bloque">
                        <div class="nuevo-producto-bloque-titulo">
                            <strong>Minorista</strong>
                            <span>Margen o precio</span>
                        </div>

                        <div class="nuevo-producto-grid-precio">
                            <div class="campo">
                                <label for="nuevo-producto-markup-minorista">Margen</label>
                                <div class="nuevo-producto-input-unidad">
                                    <input type="number" id="nuevo-producto-markup-minorista" min="0" step="0.01">
                                    <span>%</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="nuevo-producto-precio-minorista">Precio</label>
                                <div class="nuevo-producto-input-unidad nuevo-producto-input-pesos">
                                    <span>$</span>
                                    <input type="number" id="nuevo-producto-precio-minorista" min="0" step="1">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="nuevo-producto-bloque">
                    <div class="nuevo-producto-bloque-titulo">
                        <strong>Otros datos</strong>
                        <span>Opcional</span>
                    </div>

                    <div class="nuevo-producto-grid">
                        <div class="campo">
                            <label for="nuevo-producto-codigo">Código de barras</label>
                            <input
                                type="text"
                                id="nuevo-producto-codigo"
                                placeholder="Escaneá o escribí el código"
                                autocomplete="off"
                            >
                        </div>

                        <label class="nuevo-producto-visible">
                            <input type="checkbox" id="nuevo-producto-activo" checked>
                            <span>Producto visible / activo</span>
                        </label>
                    </div>
                </div>

                <p class="venta-mensaje" id="mensaje-nuevo-producto"></p>

                <div class="nuevo-producto-botones">
                    <button type="submit" id="guardar-nuevo-producto">
                        Crear producto
                    </button>
                    <button type="button" id="cancelar-nuevo-producto">
                        Cancelar
                    </button>
                </div>

            </form>
        </div>
    `;

    document.body.appendChild(
        modalNuevoProductoGestion
    );
}


const formNuevoProductoGestion =
    document.getElementById("form-nuevo-producto-gestion");

const nuevoProductoNombreGestion =
    document.getElementById("nuevo-producto-nombre");

const nuevoProductoMarcaGestion =
    document.getElementById("nuevo-producto-marca");

const nuevoProductoCategoriaGestion =
    document.getElementById("nuevo-producto-categoria");

const nuevoProductoMlGestion =
    document.getElementById("nuevo-producto-ml");

const nuevoProductoLineaDecantCampoGestion =
    document.getElementById("nuevo-producto-linea-decant-campo");

const nuevoProductoLineaDecantGestion =
    document.getElementById("nuevo-producto-linea-decant");

const nuevoProductoStockInicialGestion =
    document.getElementById("nuevo-producto-stock-inicial");

const nuevoProductoCostoSubtituloGestion =
    document.getElementById("nuevo-producto-costo-subtitulo");

const nuevoProductoCostoUsdtGestion =
    document.getElementById("nuevo-producto-costo-usdt");

const nuevoProductoProveedorUsdtGestion =
    document.getElementById("nuevo-producto-proveedor-usdt");

const nuevoProductoRecargoUsdtGestion =
    document.getElementById("nuevo-producto-recargo-usdt");

const nuevoProductoDolarCostoGestion =
    document.getElementById("nuevo-producto-dolar-costo");

const nuevoProductoCostoManualBloqueGestion =
    document.getElementById("nuevo-producto-costo-manual");

const nuevoProductoCostoManualGestion =
    document.getElementById("nuevo-producto-costo-manual-input");

const nuevoProductoCostoDecantGestion =
    document.getElementById("nuevo-producto-costo-decant");

const nuevoProductoDecantBaseGestion =
    document.getElementById("nuevo-producto-decant-base");

const nuevoProductoDecantMlBaseGestion =
    document.getElementById("nuevo-producto-decant-ml-base");

const nuevoProductoDecantTesterGestion =
    document.getElementById("nuevo-producto-decant-tester");

const nuevoProductoDecantMlGestion =
    document.getElementById("nuevo-producto-decant-ml");

const nuevoProductoDecantInsumosGestion =
    document.getElementById("nuevo-producto-decant-insumos");

const nuevoProductoDecantRedondeoGestion =
    document.getElementById("nuevo-producto-decant-redondeo");

const nuevoProductoDecantVendiblesGestion =
    document.getElementById("nuevo-producto-decant-vendibles");

const nuevoProductoDecantCostoBaseGestion =
    document.getElementById("nuevo-producto-decant-costo-base");

const nuevoProductoCostoFinalGestion =
    document.getElementById("nuevo-producto-costo-final");

const nuevoProductoMarkupMayoristaGestion =
    document.getElementById("nuevo-producto-markup-mayorista");

const nuevoProductoPrecioMayoristaGestion =
    document.getElementById("nuevo-producto-precio-mayorista");

const nuevoProductoMarkupMinoristaGestion =
    document.getElementById("nuevo-producto-markup-minorista");

const nuevoProductoPrecioMinoristaGestion =
    document.getElementById("nuevo-producto-precio-minorista");

const nuevoProductoCodigoGestion =
    document.getElementById("nuevo-producto-codigo");

const nuevoProductoActivoGestion =
    document.getElementById("nuevo-producto-activo");

const mensajeNuevoProductoGestion =
    document.getElementById("mensaje-nuevo-producto");

const botonGuardarNuevoProductoGestion =
    document.getElementById("guardar-nuevo-producto");

const botonCerrarNuevoProductoGestion =
    document.getElementById("cerrar-nuevo-producto");

const botonCancelarNuevoProductoGestion =
    document.getElementById("cancelar-nuevo-producto");


function categoriaNuevoProductoUsaUsdtGestion() {
    const categoria =
        String(nuevoProductoCategoriaGestion?.value || "");

    return (
        categoria === "perfumes-grandes" ||
        categoria === "maison-30ml"
    );
}


function categoriaNuevoProductoEsDecantGestion() {
    return String(
        nuevoProductoCategoriaGestion?.value || ""
    ) === "decants";
}


function cargarPerfumesBaseNuevoDecantGestion() {

    if (!nuevoProductoDecantBaseGestion) {
        return;
    }

    const opciones =
        productosGestion
            .filter(
                (producto) =>
                    producto.retirado !== true &&
                    !productoEsDecantGestion(producto)
            )
            .sort(
                (a, b) =>
                    String(a.nombre_mostrar || "")
                        .localeCompare(
                            String(b.nombre_mostrar || ""),
                            "es",
                            {
                                numeric: true,
                                sensitivity: "base"
                            }
                        )
            );

    nuevoProductoDecantBaseGestion.innerHTML =
        `<option value="">Seleccionar perfume...</option>` +
        opciones
            .map(
                (producto) => `
                    <option value="${producto.id}">
                        ${escaparHTML(producto.nombre_mostrar)}
                    </option>
                `
            )
            .join("");
}


function ajustarCategoriaNuevoProductoGestion() {

    const categoria =
        String(nuevoProductoCategoriaGestion?.value || "");

    const usaUsdt =
        categoriaNuevoProductoUsaUsdtGestion();

    const esDecant =
        categoriaNuevoProductoEsDecantGestion();

    nuevoProductoCostoUsdtGestion?.classList.toggle(
        "oculto",
        !usaUsdt
    );

    nuevoProductoCostoManualBloqueGestion?.classList.toggle(
        "oculto",
        usaUsdt || esDecant
    );

    nuevoProductoCostoDecantGestion?.classList.toggle(
        "oculto",
        !esDecant
    );

    nuevoProductoLineaDecantCampoGestion?.classList.toggle(
        "oculto",
        !esDecant
    );

    if (nuevoProductoCostoSubtituloGestion) {
        nuevoProductoCostoSubtituloGestion.textContent =
            usaUsdt
                ? "Calculado desde USDT"
                : esDecant
                    ? "Calculado desde el perfume base"
                    : "Costo manual";
    }

    if (nuevoProductoMlGestion) {
        if (categoria === "perfumes-grandes") {
            nuevoProductoMlGestion.value = 100;
        } else if (categoria === "maison-30ml") {
            nuevoProductoMlGestion.value = 30;
        } else if (categoria === "inspiraciones-disenador") {
            nuevoProductoMlGestion.value = 60;
        } else if (categoria === "decants") {
            nuevoProductoMlGestion.value = 5;
        }
    }

    if (esDecant) {
        cargarPerfumesBaseNuevoDecantGestion();
    }

    calcularCostoNuevoProductoGestion();
}


function calcularCostoNuevoProductoGestion() {

    const usaUsdt =
        categoriaNuevoProductoUsaUsdtGestion();

    const esDecant =
        categoriaNuevoProductoEsDecantGestion();

    let costo = NaN;

    if (usaUsdt) {
        const proveedor =
            Number(nuevoProductoProveedorUsdtGestion?.value || NaN);

        const recargo =
            Number(nuevoProductoRecargoUsdtGestion?.value || NaN);

        const dolar =
            Number(nuevoProductoDolarCostoGestion?.value || NaN);

        if (
            Number.isFinite(proveedor) &&
            Number.isFinite(recargo) &&
            Number.isFinite(dolar) &&
            proveedor >= 0 &&
            recargo >= 0 &&
            dolar > 0
        ) {
            costo = Math.round(
                (proveedor + recargo) * dolar
            );
        }

    } else if (esDecant) {

        const baseId =
            Number(nuevoProductoDecantBaseGestion?.value || 0);

        const base =
            productosGestion.find(
                (producto) =>
                    Number(producto.id) === baseId
            );

        const mlBase =
            Number(nuevoProductoDecantMlBaseGestion?.value || 0);

        const tester =
            Number(nuevoProductoDecantTesterGestion?.value || 0);

        const mlDecant =
            Number(nuevoProductoDecantMlGestion?.value || 0);

        const insumos =
            Number(nuevoProductoDecantInsumosGestion?.value || 0);

        const redondeo =
            Number(nuevoProductoDecantRedondeoGestion?.value || 0);

        const costoBase =
            Number(base?.costo_actual);

        const vendibles =
            mlBase > 0 && mlDecant > 0
                ? Math.floor((mlBase - tester) / mlDecant)
                : 0;

        if (nuevoProductoDecantVendiblesGestion) {
            nuevoProductoDecantVendiblesGestion.textContent =
                vendibles > 0
                    ? String(vendibles)
                    : "—";
        }

        if (nuevoProductoDecantCostoBaseGestion) {
            nuevoProductoDecantCostoBaseGestion.textContent =
                Number.isFinite(costoBase)
                    ? formatearPrecio(costoBase)
                    : "—";
        }

        if (
            base &&
            Number.isFinite(costoBase) &&
            costoBase >= 0 &&
            vendibles > 0 &&
            tester >= 0 &&
            tester < mlBase &&
            Number.isFinite(insumos) &&
            insumos >= 0 &&
            Number.isFinite(redondeo) &&
            redondeo > 0
        ) {
            const sinRedondear =
                (costoBase / vendibles) + insumos;

            costo =
                Math.ceil(sinRedondear / redondeo) *
                redondeo;
        }

    } else {
        costo =
            Number(nuevoProductoCostoManualGestion?.value || NaN);
    }

    if (nuevoProductoCostoFinalGestion) {
        nuevoProductoCostoFinalGestion.value =
            Number.isFinite(costo) && costo >= 0
                ? Math.round(costo)
                : "";
    }

    calcularPreciosNuevoProductoGestion();
}


function calcularPreciosNuevoProductoGestion() {

    const costo =
        Number(nuevoProductoCostoFinalGestion?.value || NaN);

    if (!Number.isFinite(costo) || costo < 0) {
        return;
    }

    const markupMayoristaTexto =
        nuevoProductoMarkupMayoristaGestion?.value.trim() || "";

    const markupMinoristaTexto =
        nuevoProductoMarkupMinoristaGestion?.value.trim() || "";

    if (markupMayoristaTexto !== "") {
        const markup = Number(markupMayoristaTexto);
        if (Number.isFinite(markup) && markup >= 0) {
            nuevoProductoPrecioMayoristaGestion.value =
                Math.round(costo * (1 + markup / 100));
        }
    }

    if (markupMinoristaTexto !== "") {
        const markup = Number(markupMinoristaTexto);
        if (Number.isFinite(markup) && markup >= 0) {
            nuevoProductoPrecioMinoristaGestion.value =
                Math.round(costo * (1 + markup / 100));
        }
    }
}


function calcularMarkupNuevoProductoGestion(tipo) {

    const costo =
        Number(nuevoProductoCostoFinalGestion?.value || NaN);

    const campoPrecio =
        tipo === "mayorista"
            ? nuevoProductoPrecioMayoristaGestion
            : nuevoProductoPrecioMinoristaGestion;

    const campoMarkup =
        tipo === "mayorista"
            ? nuevoProductoMarkupMayoristaGestion
            : nuevoProductoMarkupMinoristaGestion;

    const precio =
        Number(campoPrecio?.value || NaN);

    if (
        !Number.isFinite(costo) ||
        costo <= 0 ||
        !Number.isFinite(precio) ||
        precio < 0
    ) {
        return;
    }

    campoMarkup.value =
        Number(
            (((precio / costo) - 1) * 100).toFixed(6)
        );
}


function abrirNuevoProductoGestion() {

    formNuevoProductoGestion?.reset();

    if (nuevoProductoCategoriaGestion) {
        nuevoProductoCategoriaGestion.value =
            "perfumes-grandes";
    }

    if (nuevoProductoStockInicialGestion) {
        nuevoProductoStockInicialGestion.value = 0;
    }

    if (nuevoProductoRecargoUsdtGestion) {
        nuevoProductoRecargoUsdtGestion.value = 4;
    }

    if (nuevoProductoDolarCostoGestion) {
        nuevoProductoDolarCostoGestion.value = 1600;
    }

    if (nuevoProductoDecantMlBaseGestion) {
        nuevoProductoDecantMlBaseGestion.value = 100;
    }

    if (nuevoProductoDecantTesterGestion) {
        nuevoProductoDecantTesterGestion.value = 5;
    }

    if (nuevoProductoDecantMlGestion) {
        nuevoProductoDecantMlGestion.value = 5;
    }

    if (nuevoProductoDecantInsumosGestion) {
        nuevoProductoDecantInsumosGestion.value = 1800;
    }

    if (nuevoProductoDecantRedondeoGestion) {
        nuevoProductoDecantRedondeoGestion.value = 500;
    }

    if (nuevoProductoActivoGestion) {
        nuevoProductoActivoGestion.checked = true;
    }

    limpiarMensaje(mensajeNuevoProductoGestion);

    ajustarCategoriaNuevoProductoGestion();

    modalNuevoProductoGestion?.classList.remove("oculto");

    setTimeout(
        () => nuevoProductoNombreGestion?.focus(),
        100
    );
}


function cerrarNuevoProductoGestion() {
    modalNuevoProductoGestion?.classList.add("oculto");
    limpiarMensaje(mensajeNuevoProductoGestion);
}


botonNuevoProductoGestion?.addEventListener(
    "click",
    abrirNuevoProductoGestion
);

botonCerrarNuevoProductoGestion?.addEventListener(
    "click",
    cerrarNuevoProductoGestion
);

botonCancelarNuevoProductoGestion?.addEventListener(
    "click",
    cerrarNuevoProductoGestion
);

modalNuevoProductoGestion?.addEventListener(
    "click",
    (evento) => {
        if (evento.target === modalNuevoProductoGestion) {
            cerrarNuevoProductoGestion();
        }
    }
);

nuevoProductoCategoriaGestion?.addEventListener(
    "change",
    ajustarCategoriaNuevoProductoGestion
);

[
    nuevoProductoProveedorUsdtGestion,
    nuevoProductoRecargoUsdtGestion,
    nuevoProductoDolarCostoGestion,
    nuevoProductoCostoManualGestion,
    nuevoProductoDecantBaseGestion,
    nuevoProductoDecantMlBaseGestion,
    nuevoProductoDecantTesterGestion,
    nuevoProductoDecantMlGestion,
    nuevoProductoDecantInsumosGestion,
    nuevoProductoDecantRedondeoGestion
].forEach(
    (campo) =>
        campo?.addEventListener(
            "input",
            calcularCostoNuevoProductoGestion
        )
);

nuevoProductoDecantBaseGestion?.addEventListener(
    "change",
    calcularCostoNuevoProductoGestion
);

nuevoProductoMarkupMayoristaGestion?.addEventListener(
    "input",
    calcularPreciosNuevoProductoGestion
);

nuevoProductoMarkupMinoristaGestion?.addEventListener(
    "input",
    calcularPreciosNuevoProductoGestion
);

nuevoProductoPrecioMayoristaGestion?.addEventListener(
    "input",
    () => calcularMarkupNuevoProductoGestion("mayorista")
);

nuevoProductoPrecioMinoristaGestion?.addEventListener(
    "input",
    () => calcularMarkupNuevoProductoGestion("minorista")
);


formNuevoProductoGestion?.addEventListener(
    "submit",
    async (evento) => {

        evento.preventDefault();

        const nombre =
            nuevoProductoNombreGestion?.value.trim() || "";

        const marca =
            nuevoProductoMarcaGestion?.value.trim() || "";

        const categoria =
            String(nuevoProductoCategoriaGestion?.value || "");

        const ml =
            Number(nuevoProductoMlGestion?.value || 0);

        const stock =
            Number(nuevoProductoStockInicialGestion?.value || 0);

        const costo =
            Number(nuevoProductoCostoFinalGestion?.value || NaN);

        const markupMayorista =
            Number(nuevoProductoMarkupMayoristaGestion?.value || NaN);

        const markupMinorista =
            Number(nuevoProductoMarkupMinoristaGestion?.value || NaN);

        const precioMayorista =
            Number(nuevoProductoPrecioMayoristaGestion?.value || NaN);

        const precioMinorista =
            Number(nuevoProductoPrecioMinoristaGestion?.value || NaN);

        const codigo =
            nuevoProductoCodigoGestion?.value.trim() || "";

        const activo =
            nuevoProductoActivoGestion?.checked !== false;

        const esDecant =
            categoria === "decants";

        const usaUsdt =
            categoria === "perfumes-grandes" ||
            categoria === "maison-30ml";

        if (!nombre || !marca || !categoria) {
            mostrarMensaje(
                mensajeNuevoProductoGestion,
                "Completá nombre, marca y categoría."
            );
            return;
        }

        if (!Number.isFinite(ml) || ml <= 0) {
            mostrarMensaje(
                mensajeNuevoProductoGestion,
                "Revisá la presentación del producto."
            );
            return;
        }

        if (!Number.isInteger(stock) || stock < 0) {
            mostrarMensaje(
                mensajeNuevoProductoGestion,
                "El stock inicial debe ser un número entero igual o mayor a 0."
            );
            return;
        }

        if (
            !Number.isFinite(costo) ||
            costo < 0 ||
            !Number.isFinite(markupMayorista) ||
            markupMayorista < 0 ||
            !Number.isFinite(markupMinorista) ||
            markupMinorista < 0 ||
            !Number.isFinite(precioMayorista) ||
            precioMayorista < 0 ||
            !Number.isFinite(precioMinorista) ||
            precioMinorista < 0
        ) {
            mostrarMensaje(
                mensajeNuevoProductoGestion,
                "Completá el costo y definí el margen o precio mayorista y minorista."
            );
            return;
        }

        let linea = "";
        let tipo = "perfume";

        if (categoria === "inspiraciones-disenador") {
            linea = "inspiraciones";
        }

        if (esDecant) {
            linea =
                String(nuevoProductoLineaDecantGestion?.value || "");
            tipo = "decant";
        }

        botonGuardarNuevoProductoGestion.disabled = true;
        botonGuardarNuevoProductoGestion.textContent =
            "Creando...";

        try {

            const {
                data: productoId,
                error: errorCrear
            } =
                await supabaseClient.rpc(
                    "crear_producto_gestion",
                    {
                        p_nombre: nombre,
                        p_marca: marca,
                        p_categoria: categoria,
                        p_linea: linea || null,
                        p_tipo: tipo,
                        p_presentacion: `${ml} ml`,
                        p_imagen: null,
                        p_stock: stock,
                        p_costo_actual: costo,
                        p_markup_mayorista: markupMayorista,
                        p_markup_minorista: markupMinorista,
                        p_precio_mayorista: precioMayorista,
                        p_precio_minorista: precioMinorista,
                        p_codigo_barras: codigo || null,
                        p_activo: activo
                    }
                );

            if (errorCrear) {
                throw errorCrear;
            }

            if (usaUsdt) {

                const proveedor =
                    Number(nuevoProductoProveedorUsdtGestion?.value || NaN);

                const recargo =
                    Number(nuevoProductoRecargoUsdtGestion?.value || NaN);

                const dolar =
                    Number(nuevoProductoDolarCostoGestion?.value || NaN);

                if (
                    !Number.isFinite(proveedor) ||
                    proveedor < 0 ||
                    !Number.isFinite(recargo) ||
                    recargo < 0 ||
                    !Number.isFinite(dolar) ||
                    dolar <= 0
                ) {
                    throw new Error(
                        "Revisá los datos de costo en USDT."
                    );
                }

                const { error } =
                    await supabaseClient.rpc(
                        "actualizar_costos_producto_usdt",
                        {
                            p_producto_id: Number(productoId),
                            p_precio_proveedor_usdt: proveedor,
                            p_recargo_usdt: recargo,
                            p_dolar_costo: dolar,
                            p_markup_mayorista: markupMayorista,
                            p_markup_minorista: markupMinorista
                        }
                    );

                if (error) {
                    throw error;
                }
            }

            if (esDecant) {

                const baseId =
                    Number(nuevoProductoDecantBaseGestion?.value || 0);

                const mlBase =
                    Number(nuevoProductoDecantMlBaseGestion?.value || 0);

                const tester =
                    Number(nuevoProductoDecantTesterGestion?.value || 0);

                const mlDecant =
                    Number(nuevoProductoDecantMlGestion?.value || 0);

                const insumos =
                    Number(nuevoProductoDecantInsumosGestion?.value || 0);

                const redondeo =
                    Number(nuevoProductoDecantRedondeoGestion?.value || 0);

                if (!baseId) {
                    throw new Error(
                        "Seleccioná el perfume base del decant."
                    );
                }

                const { error } =
                    await supabaseClient.rpc(
                        "configurar_decant",
                        {
                            p_decant_id: Number(productoId),
                            p_producto_base_id: baseId,
                            p_ml_perfume_base: mlBase,
                            p_ml_decant: mlDecant,
                            p_ml_tester: tester,
                            p_costo_insumos: insumos,
                            p_redondeo: redondeo,
                            p_markup_mayorista: markupMayorista,
                            p_markup_minorista: markupMinorista
                        }
                    );

                if (error) {
                    throw error;
                }
            }

            await cargarProductosGestion();
            renderizarStock();

            cerrarNuevoProductoGestion();

            mostrarMensaje(
                mensajeStockGestion,
                `Producto "${nombre}" creado correctamente.`
            );

        } catch (error) {

            console.error(
                "Error al crear producto:",
                error
            );

            const mensaje =
                error?.message ||
                "No se pudo crear el producto.";

            mostrarMensaje(
                mensajeNuevoProductoGestion,
                mensaje.includes("duplicate") &&
                mensaje.toLowerCase().includes("codigo")
                    ? "Ese código de barras ya está asignado a otro producto."
                    : mensaje
            );

        } finally {

            botonGuardarNuevoProductoGestion.disabled = false;
            botonGuardarNuevoProductoGestion.textContent =
                "Crear producto";
        }
    }
);

// =========================================================
// GASTOS - REGISTRO E HISTORIAL
// =========================================================

const botonVerGastosGestion =
    document.getElementById(
        "ver-gastos"
    );


const seccionGastosGestion =
    document.getElementById(
        "seccion-gastos"
    );


const botonCerrarGastosGestion =
    document.getElementById(
        "cerrar-gastos"
    );


const formGastoGestion =
    document.getElementById(
        "form-gasto"
    );


const gastoFechaGestion =
    document.getElementById(
        "gasto-fecha"
    );


const gastoCategoriaGestion =
    document.getElementById(
        "gasto-categoria"
    );


const gastoConceptoGestion =
    document.getElementById(
        "gasto-concepto"
    );


const gastoMontoGestion =
    document.getElementById(
        "gasto-monto"
    );


const gastoMetodoPagoGestion =
    document.getElementById(
        "gasto-metodo-pago"
    );


const gastoObservacionesGestion =
    document.getElementById(
        "gasto-observaciones"
    );


const gastosFormTituloGestion =
    document.getElementById(
        "gastos-form-titulo"
    );


const botonGuardarGastoGestion =
    document.getElementById(
        "guardar-gasto"
    );


const botonCancelarEdicionGastoGestion =
    document.getElementById(
        "cancelar-edicion-gasto"
    );


const mensajeGastoGestion =
    document.getElementById(
        "mensaje-gasto"
    );


const gastosListaGestion =
    document.getElementById(
        "gastos-lista"
    );


const gastosContadorGestion =
    document.getElementById(
        "gastos-contador"
    );


const buscarGastoGestion =
    document.getElementById(
        "buscar-gasto"
    );


const gastosTotalMesGestion =
    document.getElementById(
        "gastos-total-mes"
    );


const gastosCantidadActivosGestion =
    document.getElementById(
        "gastos-cantidad-activos"
    );


let gastosGestion = [];

let gastoEditandoIdGestion = null;


// =========================================================
// CERRAR GASTOS JUNTO AL RESTO DE LAS SECCIONES
// =========================================================

const cerrarSeccionesGestionAntesGastos =
    cerrarSeccionesGestion;


cerrarSeccionesGestion = function () {

    cerrarSeccionesGestionAntesGastos();


    seccionGastosGestion
        ?.classList.add(
            "oculto"
        );

};


// =========================================================
// UTILIDADES
// =========================================================

function establecerFechaGastoActualGestion() {

    if (!gastoFechaGestion) {
        return;
    }


    gastoFechaGestion.value =
        fechaLocalParaInputGestion(
            new Date()
        );

}


function obtenerFechaGastoISOFormularioGestion() {

    const valor =
        gastoFechaGestion?.value;


    if (!valor) {
        return null;
    }


    const fecha =
        new Date(valor);


    if (
        Number.isNaN(
            fecha.getTime()
        )
    ) {
        return null;
    }


    return fecha.toISOString();

}


function limpiarFormularioGastoGestion() {

    gastoEditandoIdGestion =
        null;


    formGastoGestion?.reset();


    establecerFechaGastoActualGestion();


    if (gastosFormTituloGestion) {
        gastosFormTituloGestion.textContent =
            "Registrar gasto";
    }


    if (botonGuardarGastoGestion) {
        botonGuardarGastoGestion.textContent =
            "Registrar gasto";
    }


    botonCancelarEdicionGastoGestion
        ?.classList.add(
            "oculto"
        );


    limpiarMensaje(
        mensajeGastoGestion
    );

}


function normalizarTextoGastoGestion(
    valor
) {

    return String(
        valor || ""
    )
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .toLowerCase();

}


function gastoPerteneceMesActualGestion(
    gasto
) {

    if (
        gasto?.anulado ===
        true
    ) {
        return false;
    }


    const fecha =
        new Date(
            gasto.fecha_gasto
        );


    if (
        Number.isNaN(
            fecha.getTime()
        )
    ) {
        return false;
    }


    const hoy =
        new Date();


    return (
        fecha.getFullYear() ===
            hoy.getFullYear() &&
        fecha.getMonth() ===
            hoy.getMonth()
    );

}


function actualizarResumenGastosGestion() {

    const gastosActivos =
        gastosGestion.filter(
            (gasto) =>
                gasto.anulado !==
                true
        );


    const totalMes =
        gastosGestion
            .filter(
                gastoPerteneceMesActualGestion
            )
            .reduce(
                (total, gasto) =>
                    total +
                    (
                        Number(
                            gasto.monto
                        ) || 0
                    ),
                0
            );


    if (gastosTotalMesGestion) {

        gastosTotalMesGestion.textContent =
            formatearPrecio(
                totalMes
            );

    }


    if (gastosCantidadActivosGestion) {

        gastosCantidadActivosGestion.textContent =
            String(
                gastosActivos.length
            );

    }

}


function obtenerGastosFiltradosGestion() {

    const termino =
        normalizarTextoGastoGestion(
            buscarGastoGestion
                ?.value
                ?.trim() || ""
        );


    if (!termino) {
        return gastosGestion;
    }


    return gastosGestion.filter(
        (gasto) => {

            const texto =
                normalizarTextoGastoGestion(
                    [
                        gasto.categoria,
                        gasto.concepto,
                        gasto.metodo_pago,
                        gasto.observaciones
                    ]
                        .filter(Boolean)
                        .join(" ")
                );


            return texto.includes(
                termino
            );

        }
    );

}


// =========================================================
// CARGAR GASTOS
// =========================================================

async function cargarGastosGestion() {

    if (!gastosListaGestion) {
        return [];
    }


    gastosListaGestion.innerHTML = `
        <p class="gastos-vacios">
            Cargando gastos...
        </p>
    `;


    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from("gastos")
                .select(`
                    id,
                    created_at,
                    fecha_gasto,
                    categoria,
                    concepto,
                    monto,
                    metodo_pago,
                    observaciones,
                    anulado,
                    anulado_at
                `)
                .order(
                    "fecha_gasto",
                    {
                        ascending: false
                    }
                )
                .limit(200);


        if (error) {
            throw error;
        }


        gastosGestion =
            Array.isArray(data)
                ? data
                : [];


        actualizarResumenGastosGestion();

        renderizarGastosGestion();


        return gastosGestion;

    } catch (error) {

        console.error(
            "Error al cargar gastos:",
            error
        );


        gastosGestion =
            [];


        actualizarResumenGastosGestion();


        gastosListaGestion.innerHTML = `
            <p class="gastos-vacios gastos-error">
                No se pudieron cargar los gastos.
            </p>
        `;


        return [];

    }

}


// =========================================================
// RENDER GASTOS
// =========================================================

function renderizarGastosGestion() {

    if (
        !gastosListaGestion ||
        !gastosContadorGestion
    ) {
        return;
    }


    const gastosFiltrados =
        obtenerGastosFiltradosGestion();


    gastosContadorGestion.textContent =
        `${gastosGestion.length} ${
            gastosGestion.length === 1
                ? "gasto"
                : "gastos"
        }`;


    actualizarResumenGastosGestion();


    if (
        gastosGestion.length ===
        0
    ) {

        gastosListaGestion.innerHTML = `
            <p class="gastos-vacios">
                Todavía no registraste gastos.
            </p>
        `;

        return;

    }


    if (
        gastosFiltrados.length ===
        0
    ) {

        gastosListaGestion.innerHTML = `
            <p class="gastos-vacios">
                No encontramos gastos con esa búsqueda.
            </p>
        `;

        return;

    }


    gastosListaGestion.innerHTML =
        gastosFiltrados
            .map(
                (gasto) => {

                    const anulado =
                        gasto.anulado ===
                        true;


                    return `
                        <article class="gasto-card ${
                            anulado
                                ? "gasto-anulado"
                                : ""
                        }">

                            <div class="gasto-card-superior">

                                <div class="gasto-card-info">

                                    <div class="gasto-card-titulo">

                                        <strong>
                                            ${escaparHTML(
                                                gasto.concepto
                                            )}
                                        </strong>

                                        ${
                                            anulado
                                                ? `
                                                    <span class="gasto-estado-anulado">
                                                        Anulado
                                                    </span>
                                                `
                                                : ""
                                        }

                                    </div>

                                    <span class="gasto-categoria">
                                        ${escaparHTML(
                                            gasto.categoria
                                        )}
                                    </span>

                                    <span class="gasto-fecha">
                                        ${formatearFechaHora(
                                            gasto.fecha_gasto
                                        )}
                                    </span>

                                </div>


                                <strong class="gasto-monto">
                                    ${formatearPrecio(
                                        gasto.monto
                                    )}
                                </strong>

                            </div>


                            <div class="gasto-card-detalles">

                                <span>
                                    Medio de pago:
                                    <b>
                                        ${
                                            escaparHTML(
                                                gasto.metodo_pago ||
                                                "Sin especificar"
                                            )
                                        }
                                    </b>
                                </span>

                                ${
                                    gasto.observaciones
                                        ? `
                                            <span>
                                                Observación:
                                                <b>
                                                    ${escaparHTML(
                                                        gasto.observaciones
                                                    )}
                                                </b>
                                            </span>
                                        `
                                        : ""
                                }

                            </div>


                            ${
                                !anulado
                                    ? `
                                        <div class="gasto-card-acciones">

                                            <button
                                                type="button"
                                                class="editar-gasto"
                                                data-gasto-id="${gasto.id}"
                                            >
                                                Editar
                                            </button>

                                            <button
                                                type="button"
                                                class="anular-gasto"
                                                data-gasto-id="${gasto.id}"
                                            >
                                                Anular
                                            </button>

                                        </div>
                                    `
                                    : `
                                        <div class="gasto-anulado-aviso">
                                            Este gasto no se suma a los totales.
                                        </div>
                                    `
                            }

                        </article>
                    `;

                }
            )
            .join("");


    gastosListaGestion
        .querySelectorAll(
            ".editar-gasto"
        )
        .forEach(
            (boton) => {

                boton.addEventListener(
                    "click",
                    () => {

                        cargarGastoEnFormularioGestion(
                            Number(
                                boton.dataset.gastoId
                            )
                        );

                    }
                );

            }
        );


    gastosListaGestion
        .querySelectorAll(
            ".anular-gasto"
        )
        .forEach(
            (boton) => {

                boton.addEventListener(
                    "click",
                    async () => {

                        await anularGastoGestion(
                            Number(
                                boton.dataset.gastoId
                            )
                        );

                    }
                );

            }
        );

}


// =========================================================
// EDITAR GASTO
// =========================================================

function cargarGastoEnFormularioGestion(
    gastoId
) {

    const gasto =
        gastosGestion.find(
            (gasto) =>
                Number(gasto.id) ===
                Number(gastoId)
        );


    if (
        !gasto ||
        gasto.anulado === true
    ) {
        return;
    }


    gastoEditandoIdGestion =
        Number(gasto.id);


    gastoFechaGestion.value =
        fechaLocalParaInputGestion(
            gasto.fecha_gasto
        );


    gastoCategoriaGestion.value =
        gasto.categoria || "";


    gastoConceptoGestion.value =
        gasto.concepto || "";


    gastoMontoGestion.value =
        Number(
            gasto.monto
        ) || "";


    gastoMetodoPagoGestion.value =
        gasto.metodo_pago || "";


    gastoObservacionesGestion.value =
        gasto.observaciones || "";


    gastosFormTituloGestion.textContent =
        `Editar gasto #${gasto.id}`;


    botonGuardarGastoGestion.textContent =
        "Guardar cambios";


    botonCancelarEdicionGastoGestion
        ?.classList.remove(
            "oculto"
        );


    limpiarMensaje(
        mensajeGastoGestion
    );


    seccionGastosGestion
        ?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });


    setTimeout(
        () => {

            gastoConceptoGestion
                ?.focus();

        },
        250
    );

}


// =========================================================
// GUARDAR GASTO
// =========================================================

formGastoGestion
    ?.addEventListener(
        "submit",
        async (evento) => {

            evento.preventDefault();


            limpiarMensaje(
                mensajeGastoGestion
            );


            const fechaISO =
                obtenerFechaGastoISOFormularioGestion();


            const categoria =
                gastoCategoriaGestion
                    ?.value
                    ?.trim() || "";


            const concepto =
                gastoConceptoGestion
                    ?.value
                    ?.trim() || "";


            const monto =
                Number(
                    gastoMontoGestion
                        ?.value
                );


            const metodoPago =
                gastoMetodoPagoGestion
                    ?.value
                    ?.trim() || null;


            const observaciones =
                gastoObservacionesGestion
                    ?.value
                    ?.trim() || null;


            if (!fechaISO) {

                mostrarMensaje(
                    mensajeGastoGestion,
                    "Elegí una fecha válida."
                );

                return;

            }


            if (
                !categoria ||
                !concepto
            ) {

                mostrarMensaje(
                    mensajeGastoGestion,
                    "Completá la categoría y el concepto."
                );

                return;

            }


            if (
                !Number.isFinite(
                    monto
                ) ||
                monto <= 0
            ) {

                mostrarMensaje(
                    mensajeGastoGestion,
                    "Ingresá un monto mayor a cero."
                );

                return;

            }


            const estabaEditando =
                gastoEditandoIdGestion !==
                null;


            botonGuardarGastoGestion.disabled =
                true;


            botonGuardarGastoGestion.textContent =
                estabaEditando
                    ? "Guardando..."
                    : "Registrando...";


            try {

                const resultado =
                    estabaEditando
                        ? await supabaseClient.rpc(
                            "editar_gasto",
                            {
                                p_gasto_id:
                                    gastoEditandoIdGestion,
                                p_fecha_gasto:
                                    fechaISO,
                                p_categoria:
                                    categoria,
                                p_concepto:
                                    concepto,
                                p_monto:
                                    monto,
                                p_metodo_pago:
                                    metodoPago,
                                p_observaciones:
                                    observaciones
                            }
                        )
                        : await supabaseClient.rpc(
                            "registrar_gasto",
                            {
                                p_fecha_gasto:
                                    fechaISO,
                                p_categoria:
                                    categoria,
                                p_concepto:
                                    concepto,
                                p_monto:
                                    monto,
                                p_metodo_pago:
                                    metodoPago,
                                p_observaciones:
                                    observaciones
                            }
                        );


                const {
                    data,
                    error
                } =
                    resultado;


                if (error) {
                    throw error;
                }


                limpiarFormularioGastoGestion();


                await cargarGastosGestion();

                await actualizarResumenGeneral();


                mostrarMensaje(
                    mensajeGastoGestion,
                    estabaEditando
                        ? `Gasto #${data} actualizado correctamente.`
                        : `Gasto #${data} registrado correctamente.`,
                    "exito"
                );

            } catch (error) {

                console.error(
                    "Error al guardar gasto:",
                    error
                );


                mostrarMensaje(
                    mensajeGastoGestion,
                    error?.message ||
                    "No se pudo guardar el gasto."
                );

            } finally {

                botonGuardarGastoGestion.disabled =
                    false;


                if (
                    gastoEditandoIdGestion ===
                    null
                ) {

                    botonGuardarGastoGestion.textContent =
                        "Registrar gasto";

                } else {

                    botonGuardarGastoGestion.textContent =
                        "Guardar cambios";

                }

            }

        }
    );


// =========================================================
// ANULAR GASTO
// =========================================================

async function anularGastoGestion(
    gastoId
) {

    const gasto =
        gastosGestion.find(
            (gasto) =>
                Number(gasto.id) ===
                Number(gastoId)
        );


    if (
        !gasto ||
        gasto.anulado === true
    ) {
        return;
    }


    const confirmar =
        window.confirm(
            `¿Anular el gasto "${gasto.concepto}" por ${formatearPrecio(gasto.monto)}?`
        );


    if (!confirmar) {
        return;
    }


    try {

        const {
            data,
            error
        } =
            await supabaseClient.rpc(
                "anular_gasto",
                {
                    p_gasto_id:
                        Number(gastoId)
                }
            );


        if (error) {
            throw error;
        }


        if (
            Number(
                gastoEditandoIdGestion
            ) ===
            Number(
                gastoId
            )
        ) {
            limpiarFormularioGastoGestion();
        }


        await cargarGastosGestion();

        await actualizarResumenGeneral();


        mostrarMensaje(
            mensajeGastoGestion,
            `Gasto #${data} anulado correctamente.`,
            "exito"
        );

    } catch (error) {

        console.error(
            "Error al anular gasto:",
            error
        );


        mostrarMensaje(
            mensajeGastoGestion,
            error?.message ||
            "No se pudo anular el gasto."
        );

    }

}


// =========================================================
// ABRIR / CERRAR GASTOS
// =========================================================

async function abrirGastosGestion() {

    if (
        typeof ventaEditandoIdGestion !==
            "undefined" &&
        ventaEditandoIdGestion !==
            null &&
        typeof salirModoEdicionVentaGestion ===
            "function"
    ) {

        salirModoEdicionVentaGestion(
            true
        );

    }


    if (
        typeof modoPresupuestoGestion !==
            "undefined" &&
        modoPresupuestoGestion ===
            true &&
        typeof salirModoPresupuestoGestion ===
            "function"
    ) {

        salirModoPresupuestoGestion(
            true
        );

    }


    cerrarSeccionesGestion();


    seccionGastosGestion
        ?.classList.remove(
            "oculto"
        );


    limpiarFormularioGastoGestion();


    await cargarGastosGestion();


    setTimeout(
        () => {

            seccionGastosGestion
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        },
        40
    );

}


botonVerGastosGestion
    ?.addEventListener(
        "click",
        abrirGastosGestion
    );


botonCerrarGastosGestion
    ?.addEventListener(
        "click",
        () => {

            seccionGastosGestion
                ?.classList.add(
                    "oculto"
                );

        }
    );


botonCancelarEdicionGastoGestion
    ?.addEventListener(
        "click",
        limpiarFormularioGastoGestion
    );


buscarGastoGestion
    ?.addEventListener(
        "input",
        renderizarGastosGestion
    );

// =========================================================
// RETIROS + INGRESOS EXTRA + APORTES
// =========================================================

const botonVerDineroGestion =
    document.getElementById(
        "ver-dinero"
    );

const seccionDineroGestion =
    document.getElementById(
        "seccion-dinero"
    );

const botonCerrarDineroGestion =
    document.getElementById(
        "cerrar-dinero"
    );

const formDineroGestion =
    document.getElementById(
        "form-dinero"
    );

const dineroTipoGestion =
    document.getElementById(
        "dinero-tipo"
    );

const dineroFechaGestion =
    document.getElementById(
        "dinero-fecha"
    );

const campoDineroConceptoGestion =
    document.getElementById(
        "campo-dinero-concepto"
    );

const dineroConceptoGestion =
    document.getElementById(
        "dinero-concepto"
    );

const dineroMontoGestion =
    document.getElementById(
        "dinero-monto"
    );

const campoDineroMetodoGestion =
    document.getElementById(
        "campo-dinero-metodo"
    );

const dineroMetodoPagoGestion =
    document.getElementById(
        "dinero-metodo-pago"
    );

const dineroObservacionesGestion =
    document.getElementById(
        "dinero-observaciones"
    );

const dineroFormTituloGestion =
    document.getElementById(
        "dinero-form-titulo"
    );

const botonGuardarDineroGestion =
    document.getElementById(
        "guardar-dinero"
    );

const botonCancelarEdicionDineroGestion =
    document.getElementById(
        "cancelar-edicion-dinero"
    );

const mensajeDineroGestion =
    document.getElementById(
        "mensaje-dinero"
    );

const dineroListaGestion =
    document.getElementById(
        "dinero-lista"
    );

const dineroContadorGestion =
    document.getElementById(
        "dinero-contador"
    );

const buscarDineroGestion =
    document.getElementById(
        "buscar-dinero"
    );

const dineroExtrasMesGestion =
    document.getElementById(
        "dinero-extras-mes"
    );

const dineroRetirosMesGestion =
    document.getElementById(
        "dinero-retiros-mes"
    );

const dineroAportesMesGestion =
    document.getElementById(
        "dinero-aportes-mes"
    );

const dineroCapitalReponerGestion =
    document.getElementById(
        "dinero-capital-reponer"
    );

const extrasMesResumenGestion =
    document.getElementById(
        "extras-mes"
    );

const gananciaTotalGeneradaGestion =
    document.getElementById(
        "ganancia-total-generada"
    );

const capitalReponerResumenGestion =
    document.getElementById(
        "capital-reponer-resumen"
    );

let movimientosDineroGestion = [];

let movimientoDineroEditandoGestion = null;


// =========================================================
// CERRAR ESTA SECCIÓN JUNTO AL RESTO
// =========================================================

const cerrarSeccionesGestionAntesDinero =
    cerrarSeccionesGestion;

cerrarSeccionesGestion = function () {

    cerrarSeccionesGestionAntesDinero();

    seccionDineroGestion
        ?.classList.add(
            "oculto"
        );

};


// =========================================================
// UTILIDADES
// =========================================================

function etiquetaTipoDineroGestion(
    tipo
) {

    if (tipo === "extra") {
        return "Ingreso extra";
    }

    if (tipo === "aporte") {
        return "Aporte al negocio";
    }

    return "Retiro personal";

}


function establecerFechaDineroActualGestion() {

    if (!dineroFechaGestion) {
        return;
    }

    dineroFechaGestion.value =
        fechaLocalParaInputGestion(
            new Date()
        );

}


function obtenerFechaDineroISOFormularioGestion() {

    const valor =
        dineroFechaGestion?.value;

    if (!valor) {
        return null;
    }

    const fecha =
        new Date(valor);

    if (
        Number.isNaN(
            fecha.getTime()
        )
    ) {
        return null;
    }

    return fecha.toISOString();

}


function movimientoDineroPerteneceMesActualGestion(
    movimiento
) {

    if (
        movimiento?.anulado ===
        true
    ) {
        return false;
    }

    const fecha =
        new Date(
            movimiento.fecha
        );

    if (
        Number.isNaN(
            fecha.getTime()
        )
    ) {
        return false;
    }

    const hoy =
        new Date();

    return (
        fecha.getFullYear() ===
            hoy.getFullYear() &&
        fecha.getMonth() ===
            hoy.getMonth()
    );

}


function actualizarCamposTipoDineroGestion() {

    const tipo =
        dineroTipoGestion?.value ||
        "retiro";

    const esRetiro =
        tipo === "retiro";

    campoDineroConceptoGestion
        ?.classList.toggle(
            "oculto",
            esRetiro
        );

    campoDineroMetodoGestion
        ?.classList.toggle(
            "oculto",
            !esRetiro
        );

    if (dineroConceptoGestion) {
        dineroConceptoGestion.required =
            !esRetiro;
    }

    if (
        !movimientoDineroEditandoGestion &&
        botonGuardarDineroGestion
    ) {

        botonGuardarDineroGestion.textContent =
            tipo === "extra"
                ? "Registrar ingreso extra"
                : tipo === "aporte"
                    ? "Registrar aporte"
                    : "Registrar retiro";

    }

}


function limpiarFormularioDineroGestion() {

    movimientoDineroEditandoGestion =
        null;

    formDineroGestion?.reset();

    if (dineroTipoGestion) {
        dineroTipoGestion.disabled =
            false;

        dineroTipoGestion.value =
            "retiro";
    }

    establecerFechaDineroActualGestion();

    if (dineroFormTituloGestion) {
        dineroFormTituloGestion.textContent =
            "Registrar movimiento";
    }

    botonCancelarEdicionDineroGestion
        ?.classList.add(
            "oculto"
        );

    limpiarMensaje(
        mensajeDineroGestion
    );

    actualizarCamposTipoDineroGestion();

}


function normalizarTextoDineroGestion(
    valor
) {

    return String(
        valor || ""
    )
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .toLowerCase();

}


// =========================================================
// CARGAR RETIROS + INGRESOS
// =========================================================

async function cargarMovimientosDineroGestion() {

    if (!dineroListaGestion) {
        return [];
    }

    dineroListaGestion.innerHTML = `
        <p class="dinero-vacios">
            Cargando movimientos...
        </p>
    `;

    const [
        resultadoRetiros,
        resultadoIngresos
    ] =
        await Promise.all([

            supabaseClient
                .from("retiros")
                .select(`
                    id,
                    created_at,
                    fecha_retiro,
                    monto,
                    metodo_pago,
                    observaciones,
                    anulado,
                    anulado_at
                `)
                .order(
                    "fecha_retiro",
                    {
                        ascending: false
                    }
                ),

            supabaseClient
                .from("ingresos_adicionales")
                .select(`
                    id,
                    created_at,
                    fecha_ingreso,
                    tipo,
                    concepto,
                    monto,
                    observaciones,
                    anulado,
                    anulado_at
                `)
                .order(
                    "fecha_ingreso",
                    {
                        ascending: false
                    }
                )

        ]);

    if (resultadoRetiros.error) {

        console.error(
            "Error al cargar retiros:",
            resultadoRetiros.error
        );

        mostrarMensaje(
            mensajeDineroGestion,
            "No se pudieron cargar los retiros."
        );

        return [];

    }

    if (resultadoIngresos.error) {

        console.error(
            "Error al cargar ingresos adicionales:",
            resultadoIngresos.error
        );

        mostrarMensaje(
            mensajeDineroGestion,
            "No se pudieron cargar los ingresos adicionales."
        );

        return [];

    }

    const retiros =
        (
            Array.isArray(
                resultadoRetiros.data
            )
                ? resultadoRetiros.data
                : []
        ).map(
            (retiro) => ({
                ...retiro,
                origen: "retiro",
                tipo: "retiro",
                fecha: retiro.fecha_retiro,
                concepto: "Retiro personal"
            })
        );

    const ingresos =
        (
            Array.isArray(
                resultadoIngresos.data
            )
                ? resultadoIngresos.data
                : []
        ).map(
            (ingreso) => ({
                ...ingreso,
                origen: "ingreso",
                fecha: ingreso.fecha_ingreso,
                metodo_pago: null
            })
        );

    movimientosDineroGestion =
        [
            ...retiros,
            ...ingresos
        ]
            .sort(
                (a, b) =>
                    new Date(b.fecha) -
                    new Date(a.fecha)
            );

    renderizarMovimientosDineroGestion();

    await actualizarResumenDineroGestion();

    return movimientosDineroGestion;

}


// =========================================================
// FILTRO / RENDER
// =========================================================

function obtenerMovimientosDineroFiltradosGestion() {

    const termino =
        normalizarTextoDineroGestion(
            buscarDineroGestion?.value
        ).trim();

    if (!termino) {
        return movimientosDineroGestion;
    }

    return movimientosDineroGestion.filter(
        (movimiento) => {

            const texto =
                normalizarTextoDineroGestion(
                    [
                        etiquetaTipoDineroGestion(
                            movimiento.tipo
                        ),
                        movimiento.concepto,
                        movimiento.metodo_pago,
                        movimiento.observaciones,
                        formatearFechaHora(
                            movimiento.fecha
                        ),
                        movimiento.monto
                    ].join(" ")
                );

            return texto.includes(
                termino
            );

        }
    );

}


function renderizarMovimientosDineroGestion() {

    if (!dineroListaGestion) {
        return;
    }

    if (dineroContadorGestion) {

        dineroContadorGestion.textContent =
            `${movimientosDineroGestion.length} ${
                movimientosDineroGestion.length === 1
                    ? "movimiento"
                    : "movimientos"
            }`;

    }

    const movimientos =
        obtenerMovimientosDineroFiltradosGestion();

    if (movimientos.length === 0) {

        dineroListaGestion.innerHTML = `
            <p class="dinero-vacios">
                No hay movimientos para mostrar.
            </p>
        `;

        return;

    }

    dineroListaGestion.innerHTML =
        movimientos
            .map(
                (movimiento) => {

                    const anulado =
                        movimiento.anulado ===
                        true;

                    const esRetiro =
                        movimiento.tipo ===
                        "retiro";

                    const signo =
                        esRetiro
                            ? "−"
                            : "+";

                    const claseMonto =
                        esRetiro
                            ? "dinero-monto-negativo"
                            : "dinero-monto-positivo";

                    const detalles = [];

                    if (
                        movimiento.tipo !== "retiro" &&
                        movimiento.concepto
                    ) {
                        detalles.push(
                            `<span><b>Concepto:</b> ${escaparHTML(movimiento.concepto)}</span>`
                        );
                    }

                    if (
                        movimiento.metodo_pago
                    ) {
                        detalles.push(
                            `<span><b>Medio:</b> ${escaparHTML(movimiento.metodo_pago)}</span>`
                        );
                    }

                    if (
                        movimiento.observaciones
                    ) {
                        detalles.push(
                            `<span><b>Observaciones:</b> ${escaparHTML(movimiento.observaciones)}</span>`
                        );
                    }

                    return `
                        <article
                            class="dinero-card ${
                                anulado
                                    ? "dinero-anulado"
                                    : ""
                            }"
                        >

                            <div class="dinero-card-superior">

                                <div class="dinero-card-info">

                                    <div class="dinero-card-titulo">

                                        <strong>
                                            ${escaparHTML(
                                                etiquetaTipoDineroGestion(
                                                    movimiento.tipo
                                                )
                                            )}
                                        </strong>

                                        <span class="dinero-tipo">
                                            ${
                                                movimiento.tipo === "extra"
                                                    ? "GANANCIA EXTRA"
                                                    : movimiento.tipo === "aporte"
                                                        ? "APORTE"
                                                        : "RETIRO"
                                            }
                                        </span>

                                        ${
                                            anulado
                                                ? `<span class="dinero-estado-anulado">Anulado</span>`
                                                : ""
                                        }

                                    </div>

                                    <span class="dinero-fecha">
                                        ${escaparHTML(
                                            formatearFechaHora(
                                                movimiento.fecha
                                            )
                                        )}
                                    </span>

                                </div>

                                <strong class="dinero-monto ${claseMonto}">
                                    ${signo}${formatearPrecio(
                                        movimiento.monto
                                    )}
                                </strong>

                            </div>

                            ${
                                detalles.length > 0
                                    ? `<div class="dinero-card-detalles">${detalles.join("")}</div>`
                                    : ""
                            }

                            ${
                                !anulado
                                    ? `
                                        <div class="dinero-card-acciones">

                                            <button
                                                type="button"
                                                class="editar-dinero"
                                                data-origen="${movimiento.origen}"
                                                data-id="${movimiento.id}"
                                            >
                                                Editar
                                            </button>

                                            <button
                                                type="button"
                                                class="anular-dinero"
                                                data-origen="${movimiento.origen}"
                                                data-id="${movimiento.id}"
                                            >
                                                Anular
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
// RESUMEN DE ESTA SECCIÓN
// =========================================================

async function actualizarResumenDineroGestion() {

    const activosMes =
        movimientosDineroGestion.filter(
            movimientoDineroPerteneceMesActualGestion
        );

    const extrasMes =
        activosMes
            .filter(
                (movimiento) =>
                    movimiento.tipo ===
                    "extra"
            )
            .reduce(
                (total, movimiento) =>
                    total +
                    (Number(movimiento.monto) || 0),
                0
            );

    const retirosMes =
        activosMes
            .filter(
                (movimiento) =>
                    movimiento.tipo ===
                    "retiro"
            )
            .reduce(
                (total, movimiento) =>
                    total +
                    (Number(movimiento.monto) || 0),
                0
            );

    const aportesMes =
        activosMes
            .filter(
                (movimiento) =>
                    movimiento.tipo ===
                    "aporte"
            )
            .reduce(
                (total, movimiento) =>
                    total +
                    (Number(movimiento.monto) || 0),
                0
            );

    if (dineroExtrasMesGestion) {
        dineroExtrasMesGestion.textContent =
            formatearPrecio(extrasMes);
    }

    if (dineroRetirosMesGestion) {
        dineroRetirosMesGestion.textContent =
            formatearPrecio(retirosMes);
    }

    if (dineroAportesMesGestion) {
        dineroAportesMesGestion.textContent =
            formatearPrecio(aportesMes);
    }

    const resultadoDisponible =
        await calcularDisponibleRetirarGestion();

    if (dineroCapitalReponerGestion) {

        dineroCapitalReponerGestion.textContent =
            resultadoDisponible.costoPendiente
                ? "Costo pendiente"
                : formatearPrecio(
                    resultadoDisponible.capitalReponer
                );

    }

}


// =========================================================
// EDITAR
// =========================================================

function editarMovimientoDineroGestion(
    origen,
    movimientoId
) {

    const movimiento =
        movimientosDineroGestion.find(
            (item) =>
                item.origen === origen &&
                Number(item.id) ===
                Number(movimientoId)
        );

    if (
        !movimiento ||
        movimiento.anulado === true
    ) {
        return;
    }

    movimientoDineroEditandoGestion = {
        origen,
        id: Number(movimiento.id)
    };

    if (dineroTipoGestion) {
        dineroTipoGestion.value =
            movimiento.tipo;

        dineroTipoGestion.disabled =
            true;
    }

    if (dineroFechaGestion) {
        dineroFechaGestion.value =
            fechaLocalParaInputGestion(
                movimiento.fecha
            );
    }

    if (dineroConceptoGestion) {
        dineroConceptoGestion.value =
            movimiento.tipo === "retiro"
                ? ""
                : movimiento.concepto || "";
    }

    if (dineroMontoGestion) {
        dineroMontoGestion.value =
            Number(movimiento.monto) || "";
    }

    if (dineroMetodoPagoGestion) {
        dineroMetodoPagoGestion.value =
            movimiento.metodo_pago || "";
    }

    if (dineroObservacionesGestion) {
        dineroObservacionesGestion.value =
            movimiento.observaciones || "";
    }

    if (dineroFormTituloGestion) {
        dineroFormTituloGestion.textContent =
            `Editar ${etiquetaTipoDineroGestion(movimiento.tipo).toLowerCase()}`;
    }

    if (botonGuardarDineroGestion) {
        botonGuardarDineroGestion.textContent =
            "Guardar cambios";
    }

    botonCancelarEdicionDineroGestion
        ?.classList.remove(
            "oculto"
        );

    actualizarCamposTipoDineroGestion();

    formDineroGestion
        ?.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

}


// =========================================================
// ANULAR
// =========================================================

async function anularMovimientoDineroGestion(
    origen,
    movimientoId
) {

    const movimiento =
        movimientosDineroGestion.find(
            (item) =>
                item.origen === origen &&
                Number(item.id) ===
                Number(movimientoId)
        );

    if (
        !movimiento ||
        movimiento.anulado === true
    ) {
        return;
    }

    const confirmar =
        window.confirm(
            `¿Anular ${etiquetaTipoDineroGestion(movimiento.tipo).toLowerCase()} por ${formatearPrecio(movimiento.monto)}?`
        );

    if (!confirmar) {
        return;
    }

    try {

        const resultado =
            origen === "retiro"
                ? await supabaseClient.rpc(
                    "anular_retiro",
                    {
                        p_retiro_id:
                            Number(movimientoId)
                    }
                )
                : await supabaseClient.rpc(
                    "anular_ingreso_adicional",
                    {
                        p_ingreso_id:
                            Number(movimientoId)
                    }
                );

        if (resultado.error) {
            throw resultado.error;
        }

        if (
            movimientoDineroEditandoGestion &&
            movimientoDineroEditandoGestion.origen === origen &&
            Number(
                movimientoDineroEditandoGestion.id
            ) === Number(movimientoId)
        ) {
            limpiarFormularioDineroGestion();
        }

        await cargarMovimientosDineroGestion();

        await actualizarResumenGeneral();

        mostrarMensaje(
            mensajeDineroGestion,
            "Movimiento anulado correctamente.",
            "exito"
        );

    } catch (error) {

        console.error(
            "Error al anular movimiento de dinero:",
            error
        );

        mostrarMensaje(
            mensajeDineroGestion,
            error?.message ||
            "No se pudo anular el movimiento."
        );

    }

}


// =========================================================
// GUARDAR / EDITAR
// =========================================================

formDineroGestion
    ?.addEventListener(
        "submit",
        async (evento) => {

            evento.preventDefault();

            limpiarMensaje(
                mensajeDineroGestion
            );

            const tipo =
                dineroTipoGestion?.value ||
                "retiro";

            const fecha =
                obtenerFechaDineroISOFormularioGestion();

            const concepto =
                dineroConceptoGestion?.value.trim() ||
                "";

            const monto =
                Number(
                    dineroMontoGestion?.value
                );

            const metodoPago =
                dineroMetodoPagoGestion?.value ||
                "";

            const observaciones =
                dineroObservacionesGestion?.value.trim() ||
                "";

            if (!fecha) {

                mostrarMensaje(
                    mensajeDineroGestion,
                    "Elegí una fecha válida."
                );

                return;

            }

            if (
                !Number.isFinite(monto) ||
                monto <= 0
            ) {

                mostrarMensaje(
                    mensajeDineroGestion,
                    "El monto debe ser mayor a cero."
                );

                return;

            }

            if (
                tipo !== "retiro" &&
                !concepto
            ) {

                mostrarMensaje(
                    mensajeDineroGestion,
                    "Escribí el concepto del ingreso."
                );

                return;

            }

            botonGuardarDineroGestion.disabled =
                true;

            const textoBoton =
                botonGuardarDineroGestion.textContent;

            botonGuardarDineroGestion.textContent =
                "Guardando...";

            try {

                let resultado;

                if (tipo === "retiro") {

                    if (
                        movimientoDineroEditandoGestion?.origen ===
                        "retiro"
                    ) {

                        resultado =
                            await supabaseClient.rpc(
                                "editar_retiro",
                                {
                                    p_retiro_id:
                                        Number(
                                            movimientoDineroEditandoGestion.id
                                        ),
                                    p_fecha_retiro:
                                        fecha,
                                    p_monto:
                                        monto,
                                    p_metodo_pago:
                                        metodoPago || null,
                                    p_observaciones:
                                        observaciones || null
                                }
                            );

                    } else {

                        resultado =
                            await supabaseClient.rpc(
                                "registrar_retiro",
                                {
                                    p_fecha_retiro:
                                        fecha,
                                    p_monto:
                                        monto,
                                    p_metodo_pago:
                                        metodoPago || null,
                                    p_observaciones:
                                        observaciones || null
                                }
                            );

                    }

                } else {

                    if (
                        movimientoDineroEditandoGestion?.origen ===
                        "ingreso"
                    ) {

                        resultado =
                            await supabaseClient.rpc(
                                "editar_ingreso_adicional",
                                {
                                    p_ingreso_id:
                                        Number(
                                            movimientoDineroEditandoGestion.id
                                        ),
                                    p_fecha_ingreso:
                                        fecha,
                                    p_tipo:
                                        tipo,
                                    p_concepto:
                                        concepto,
                                    p_monto:
                                        monto,
                                    p_observaciones:
                                        observaciones || null
                                }
                            );

                    } else {

                        resultado =
                            await supabaseClient.rpc(
                                "registrar_ingreso_adicional",
                                {
                                    p_fecha_ingreso:
                                        fecha,
                                    p_tipo:
                                        tipo,
                                    p_concepto:
                                        concepto,
                                    p_monto:
                                        monto,
                                    p_observaciones:
                                        observaciones || null
                                }
                            );

                    }

                }

                if (resultado.error) {
                    throw resultado.error;
                }

                const estabaEditando =
                    movimientoDineroEditandoGestion !==
                    null;

                limpiarFormularioDineroGestion();

                await cargarMovimientosDineroGestion();

                await actualizarResumenGeneral();

                mostrarMensaje(
                    mensajeDineroGestion,
                    estabaEditando
                        ? "Movimiento actualizado correctamente."
                        : "Movimiento registrado correctamente.",
                    "exito"
                );

            } catch (error) {

                console.error(
                    "Error al guardar movimiento de dinero:",
                    error
                );

                mostrarMensaje(
                    mensajeDineroGestion,
                    error?.message ||
                    "No se pudo guardar el movimiento."
                );

            } finally {

                botonGuardarDineroGestion.disabled =
                    false;

                if (
                    movimientoDineroEditandoGestion ===
                    null
                ) {
                    actualizarCamposTipoDineroGestion();
                } else {
                    botonGuardarDineroGestion.textContent =
                        textoBoton;
                }

            }

        }
    );


// =========================================================
// EVENTOS DEL HISTORIAL
// =========================================================

dineroListaGestion
    ?.addEventListener(
        "click",
        (evento) => {

            const botonEditar =
                evento.target.closest(
                    ".editar-dinero"
                );

            if (botonEditar) {

                editarMovimientoDineroGestion(
                    botonEditar.dataset.origen,
                    botonEditar.dataset.id
                );

                return;
            }

            const botonAnular =
                evento.target.closest(
                    ".anular-dinero"
                );

            if (botonAnular) {

                anularMovimientoDineroGestion(
                    botonAnular.dataset.origen,
                    botonAnular.dataset.id
                );

            }

        }
    );


dineroTipoGestion
    ?.addEventListener(
        "change",
        actualizarCamposTipoDineroGestion
    );


buscarDineroGestion
    ?.addEventListener(
        "input",
        renderizarMovimientosDineroGestion
    );


botonCancelarEdicionDineroGestion
    ?.addEventListener(
        "click",
        limpiarFormularioDineroGestion
    );


// =========================================================
// ABRIR / CERRAR
// =========================================================

async function abrirDineroGestion() {

    if (
        typeof ventaEditandoIdGestion !==
            "undefined" &&
        ventaEditandoIdGestion !==
            null &&
        typeof salirModoEdicionVentaGestion ===
            "function"
    ) {
        salirModoEdicionVentaGestion(
            true
        );
    }

    if (
        typeof modoPresupuestoGestion !==
            "undefined" &&
        modoPresupuestoGestion ===
            true &&
        typeof salirModoPresupuestoGestion ===
            "function"
    ) {
        salirModoPresupuestoGestion(
            true
        );
    }

    cerrarSeccionesGestion();

    seccionDineroGestion
        ?.classList.remove(
            "oculto"
        );

    limpiarFormularioDineroGestion();

    await cargarMovimientosDineroGestion();

    setTimeout(
        () => {

            seccionDineroGestion
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        },
        40
    );

}


botonVerDineroGestion
    ?.addEventListener(
        "click",
        abrirDineroGestion
    );


botonCerrarDineroGestion
    ?.addEventListener(
        "click",
        () => {

            seccionDineroGestion
                ?.classList.add(
                    "oculto"
                );

        }
    );


// =========================================================
// GANANCIA DEL MES NETA DE GASTOS
// =========================================================

const calcularGananciaMesGestionAntesGastos =
    calcularGananciaMesGestion;

calcularGananciaMesGestion =
    async function () {

        const resultadoBase =
            await calcularGananciaMesGestionAntesGastos();

        if (
            resultadoBase.costoPendiente
        ) {
            return resultadoBase;
        }

        const ahora =
            new Date();

        const inicioMes =
            new Date(
                ahora.getFullYear(),
                ahora.getMonth(),
                1,
                0,
                0,
                0,
                0
            );

        const inicioMesSiguiente =
            new Date(
                ahora.getFullYear(),
                ahora.getMonth() + 1,
                1,
                0,
                0,
                0,
                0
            );

        const {
            data,
            error
        } =
            await supabaseClient
                .from("gastos")
                .select(`
                    monto,
                    fecha_gasto,
                    anulado
                `)
                .gte(
                    "fecha_gasto",
                    inicioMes.toISOString()
                )
                .lt(
                    "fecha_gasto",
                    inicioMesSiguiente.toISOString()
                )
                .eq(
                    "anulado",
                    false
                );

        if (error) {

            console.error(
                "Error al descontar gastos de la ganancia del mes:",
                error
            );

            return {
                ...resultadoBase,
                costoPendiente: true
            };

        }

        const gastosMes =
            (
                Array.isArray(data)
                    ? data
                    : []
            ).reduce(
                (total, gasto) =>
                    total +
                    (Number(gasto.monto) || 0),
                0
            );

        return {
            ...resultadoBase,
            ganancia:
                (Number(resultadoBase.ganancia) || 0) -
                gastosMes,
            gastosMes
        };

    };


// =========================================================
// EXTRAS DEL MES
// =========================================================

async function calcularExtrasMesGestion() {

    const ahora =
        new Date();

    const inicioMes =
        new Date(
            ahora.getFullYear(),
            ahora.getMonth(),
            1,
            0,
            0,
            0,
            0
        );

    const inicioMesSiguiente =
        new Date(
            ahora.getFullYear(),
            ahora.getMonth() + 1,
            1,
            0,
            0,
            0,
            0
        );

    const {
        data,
        error
    } =
        await supabaseClient
            .from("ingresos_adicionales")
            .select(`
                monto,
                fecha_ingreso,
                tipo,
                anulado
            `)
            .gte(
                "fecha_ingreso",
                inicioMes.toISOString()
            )
            .lt(
                "fecha_ingreso",
                inicioMesSiguiente.toISOString()
            )
            .eq(
                "tipo",
                "extra"
            )
            .eq(
                "anulado",
                false
            );

    if (error) {

        console.error(
            "Error al calcular extras del mes:",
            error
        );

        return 0;
    }

    return (
        Array.isArray(data)
            ? data
            : []
    ).reduce(
        (total, ingreso) =>
            total +
            (Number(ingreso.monto) || 0),
        0
    );

}


// =========================================================
// DISPONIBLE PARA RETIRAR + CAPITAL PARA REINVERTIR
// =========================================================

calcularDisponibleRetirarGestion =
    async function () {

        const resultadoError = {
            disponible: 0,
            capitalReponer: 0,
            capitalParaReinvertir: 0,
            costoPendiente: true,
            totalCobrado: 0,
            reservaReposicion: 0,
            costoRecuperado: 0,
            gananciaCobrada: 0,
            perdidasVenta: 0,
            totalReposiciones: 0,
            totalGastos: 0,
            totalRetiros: 0,
            totalExtras: 0,
            totalAportes: 0,
            aportesAplicados: 0,
            gananciasAplicadasAReponer: 0
        };


        // =====================================================
        // PUNTO DE INICIO DEL NUEVO CONTROL DE CAPITAL
        // =====================================================

        const {
            data: configuracion,
            error: configuracionError
        } =
            await supabaseClient
                .from(
                    "capital_reinversion_config"
                )
                .select(`
                    fecha_inicio,
                    capital_inicial,
                    deficit_inicial
                `)
                .eq(
                    "id",
                    1
                )
                .maybeSingle();


        if (
            configuracionError ||
            !configuracion
        ) {

            console.error(
                "Error al cargar configuración de reinversión:",
                configuracionError
            );

            return resultadoError;

        }


        const fechaInicio =
            new Date(
                configuracion.fecha_inicio
            );


        if (
            Number.isNaN(
                fechaInicio.getTime()
            )
        ) {

            console.error(
                "Fecha de inicio de reinversión inválida."
            );

            return resultadoError;

        }


        const fechaInicioISO =
            fechaInicio.toISOString();

        const fechaInicioMs =
            fechaInicio.getTime();


        const capitalInicial =
            Math.max(
                0,
                Number(
                    configuracion.capital_inicial
                ) || 0
            );


        const deficitInicial =
            Math.max(
                0,
                Number(
                    configuracion.deficit_inicial
                ) || 0
            );


        // =====================================================
        // MOVIMIENTOS GENERALES DESDE EL PUNTO DE INICIO
        // =====================================================

        const [
            resultadoVentas,
            resultadoGastos,
            resultadoRetiros,
            resultadoIngresos,
            resultadoReposiciones
        ] =
            await Promise.all([

                supabaseClient
                    .from("ventas")
                    .select(`
                        id,
                        total,
                        anulada
                    `)
                    .eq(
                        "anulada",
                        false
                    ),

                supabaseClient
                    .from("gastos")
                    .select(`
                        monto,
                        fecha_gasto,
                        anulado
                    `)
                    .gte(
                        "fecha_gasto",
                        fechaInicioISO
                    )
                    .eq(
                        "anulado",
                        false
                    ),

                supabaseClient
                    .from("retiros")
                    .select(`
                        monto,
                        fecha_retiro,
                        anulado
                    `)
                    .gte(
                        "fecha_retiro",
                        fechaInicioISO
                    )
                    .eq(
                        "anulado",
                        false
                    ),

                supabaseClient
                    .from(
                        "ingresos_adicionales"
                    )
                    .select(`
                        tipo,
                        monto,
                        fecha_ingreso,
                        anulado
                    `)
                    .gte(
                        "fecha_ingreso",
                        fechaInicioISO
                    )
                    .eq(
                        "anulado",
                        false
                    ),

                supabaseClient
                    .from("reposiciones")
                    .select(`
                        id,
                        created_at,
                        reposicion_items (
                            subtotal
                        )
                    `)
                    .gte(
                        "created_at",
                        fechaInicioISO
                    )

            ]);


        const errorGeneral =
            resultadoVentas.error ||
            resultadoGastos.error ||
            resultadoRetiros.error ||
            resultadoIngresos.error ||
            resultadoReposiciones.error;


        if (errorGeneral) {

            console.error(
                "Error al calcular estado financiero:",
                errorGeneral
            );

            return resultadoError;

        }


        const ventas =
            Array.isArray(
                resultadoVentas.data
            )
                ? resultadoVentas.data
                : [];


        const eventos = [];


        function agregarEvento(
            fecha,
            tipo,
            datos = {}
        ) {

            const fechaMs =
                new Date(
                    fecha
                ).getTime();


            if (
                !Number.isFinite(fechaMs) ||
                fechaMs < fechaInicioMs
            ) {
                return;
            }


            eventos.push({
                fechaMs,
                tipo,
                ...datos
            });

        }


        // =====================================================
        // COBROS: PRIMERO RECUPERAMOS COSTO, DESPUÉS GANANCIA
        // =====================================================

        let totalCobrado = 0;
        let costoRecuperado = 0;
        let gananciaCobrada = 0;
        let perdidasVenta = 0;
        let costoPendiente = false;


        const idsVentas =
            ventas.map(
                (venta) =>
                    venta.id
            );


        if (
            idsVentas.length > 0
        ) {

            const [
                resultadoPagos,
                resultadoItems
            ] =
                await Promise.all([

                    supabaseClient
                        .from("pagos")
                        .select(`
                            venta_id,
                            monto,
                            created_at,
                            anulado
                        `)
                        .in(
                            "venta_id",
                            idsVentas
                        )
                        .eq(
                            "anulado",
                            false
                        ),

                    supabaseClient
                        .from("venta_items")
                        .select(`
                            venta_id,
                            cantidad,
                            costo_unitario
                        `)
                        .in(
                            "venta_id",
                            idsVentas
                        )

                ]);


            if (
                resultadoPagos.error ||
                resultadoItems.error
            ) {

                console.error(
                    "Error al calcular pagos y costos históricos:",
                    resultadoPagos.error ||
                    resultadoItems.error
                );

                return resultadoError;

            }


            const pagosPorVenta =
                new Map();

            const itemsPorVenta =
                new Map();


            (
                Array.isArray(
                    resultadoPagos.data
                )
                    ? resultadoPagos.data
                    : []
            ).forEach(
                (pago) => {

                    const ventaId =
                        Number(
                            pago.venta_id
                        );


                    if (
                        !pagosPorVenta.has(
                            ventaId
                        )
                    ) {

                        pagosPorVenta.set(
                            ventaId,
                            []
                        );

                    }


                    pagosPorVenta
                        .get(
                            ventaId
                        )
                        .push(
                            pago
                        );

                }
            );


            (
                Array.isArray(
                    resultadoItems.data
                )
                    ? resultadoItems.data
                    : []
            ).forEach(
                (item) => {

                    const ventaId =
                        Number(
                            item.venta_id
                        );


                    if (
                        !itemsPorVenta.has(
                            ventaId
                        )
                    ) {

                        itemsPorVenta.set(
                            ventaId,
                            []
                        );

                    }


                    itemsPorVenta
                        .get(
                            ventaId
                        )
                        .push(
                            item
                        );

                }
            );


            ventas.forEach(
                (venta) => {

                    const ventaId =
                        Number(
                            venta.id
                        );


                    const totalVenta =
                        Math.max(
                            0,
                            Number(
                                venta.total
                            ) || 0
                        );


                    if (
                        totalVenta <= 0
                    ) {
                        return;
                    }


                    const pagos =
                        (
                            pagosPorVenta.get(
                                ventaId
                            ) || []
                        )
                            .slice()
                            .sort(
                                (a, b) =>
                                    new Date(
                                        a.created_at
                                    ).getTime() -
                                    new Date(
                                        b.created_at
                                    ).getTime()
                            );


                    const tieneCobrosDesdeInicio =
                        pagos.some(
                            (pago) => {

                                const fechaPagoMs =
                                    new Date(
                                        pago.created_at
                                    ).getTime();

                                return (
                                    Number.isFinite(
                                        fechaPagoMs
                                    ) &&
                                    fechaPagoMs >=
                                        fechaInicioMs &&
                                    (
                                        Number(
                                            pago.monto
                                        ) || 0
                                    ) > 0
                                );

                            }
                        );


                    if (
                        !tieneCobrosDesdeInicio
                    ) {
                        return;
                    }


                    const items =
                        itemsPorVenta.get(
                            ventaId
                        ) || [];


                    const costoCompleto =
                        items.length > 0 &&
                        items.every(
                            (item) => {

                                if (
                                    item.costo_unitario === null ||
                                    item.costo_unitario === undefined ||
                                    item.costo_unitario === ""
                                ) {
                                    return false;
                                }


                                const costo =
                                    Number(
                                        item.costo_unitario
                                    );


                                return (
                                    Number.isFinite(
                                        costo
                                    ) &&
                                    costo >= 0
                                );

                            }
                        );


                    if (
                        !costoCompleto
                    ) {

                        costoPendiente =
                            true;

                        return;

                    }


                    const costoTotal =
                        items.reduce(
                            (
                                total,
                                item
                            ) =>
                                total +
                                (
                                    (
                                        Number(
                                            item.cantidad
                                        ) || 0
                                    ) *
                                    Number(
                                        item.costo_unitario
                                    )
                                ),
                            0
                        );


                    let pagadoAplicado =
                        0;

                    let perdidaRegistrada =
                        false;


                    pagos.forEach(
                        (pago) => {

                            const montoPago =
                                Math.max(
                                    0,
                                    Number(
                                        pago.monto
                                    ) || 0
                                );


                            if (
                                montoPago <= 0
                            ) {
                                return;
                            }


                            const restanteVenta =
                                Math.max(
                                    0,
                                    totalVenta -
                                    pagadoAplicado
                                );


                            const montoAplicado =
                                Math.min(
                                    montoPago,
                                    restanteVenta
                                );


                            if (
                                montoAplicado <= 0
                            ) {
                                return;
                            }


                            const fechaPagoMs =
                                new Date(
                                    pago.created_at
                                ).getTime();


                            if (
                                !Number.isFinite(
                                    fechaPagoMs
                                )
                            ) {

                                costoPendiente =
                                    true;

                                return;

                            }


                            const pagadoAntes =
                                pagadoAplicado;


                            pagadoAplicado +=
                                montoAplicado;


                            const costoReconocidoAntes =
                                Math.min(
                                    costoTotal,
                                    pagadoAntes
                                );


                            const costoReconocidoDespues =
                                Math.min(
                                    costoTotal,
                                    pagadoAplicado
                                );


                            const costoEstePago =
                                Math.max(
                                    0,
                                    costoReconocidoDespues -
                                    costoReconocidoAntes
                                );


                            const gananciaEstePago =
                                Math.max(
                                    0,
                                    montoAplicado -
                                    costoEstePago
                                );


                            const ventaQuedoCobrada =
                                pagadoAplicado >=
                                totalVenta - 0.01;


                            const perdidaEstePago =
                                ventaQuedoCobrada &&
                                !perdidaRegistrada &&
                                costoTotal > totalVenta
                                    ? costoTotal -
                                        totalVenta
                                    : 0;


                            if (
                                perdidaEstePago > 0
                            ) {
                                perdidaRegistrada =
                                    true;
                            }


                            if (
                                fechaPagoMs <
                                fechaInicioMs
                            ) {
                                return;
                            }


                            totalCobrado +=
                                montoAplicado;

                            costoRecuperado +=
                                costoEstePago;

                            gananciaCobrada +=
                                gananciaEstePago;

                            perdidasVenta +=
                                perdidaEstePago;


                            agregarEvento(
                                pago.created_at,
                                "pago",
                                {
                                    costo:
                                        costoEstePago,

                                    ganancia:
                                        gananciaEstePago,

                                    perdida:
                                        perdidaEstePago
                                }
                            );

                        }
                    );

                }
            );

        }


        if (
            costoPendiente
        ) {

            return {
                ...resultadoError,
                totalCobrado,
                costoPendiente: true
            };

        }


        // =====================================================
        // GASTOS
        // =====================================================

        const gastos =
            Array.isArray(
                resultadoGastos.data
            )
                ? resultadoGastos.data
                : [];


        const totalGastos =
            gastos.reduce(
                (total, gasto) =>
                    total +
                    (
                        Number(
                            gasto.monto
                        ) || 0
                    ),
                0
            );


        gastos.forEach(
            (gasto) => {

                agregarEvento(
                    gasto.fecha_gasto,
                    "gasto",
                    {
                        monto:
                            Math.max(
                                0,
                                Number(
                                    gasto.monto
                                ) || 0
                            )
                    }
                );

            }
        );


        // =====================================================
        // RETIROS
        // =====================================================

        const retiros =
            Array.isArray(
                resultadoRetiros.data
            )
                ? resultadoRetiros.data
                : [];


        const totalRetiros =
            retiros.reduce(
                (total, retiro) =>
                    total +
                    (
                        Number(
                            retiro.monto
                        ) || 0
                    ),
                0
            );


        retiros.forEach(
            (retiro) => {

                agregarEvento(
                    retiro.fecha_retiro,
                    "retiro",
                    {
                        monto:
                            Math.max(
                                0,
                                Number(
                                    retiro.monto
                                ) || 0
                            )
                    }
                );

            }
        );


        // =====================================================
        // INGRESOS EXTRA + APORTES
        // =====================================================

        const ingresos =
            Array.isArray(
                resultadoIngresos.data
            )
                ? resultadoIngresos.data
                : [];


        let totalExtras = 0;
        let totalAportes = 0;


        ingresos.forEach(
            (ingreso) => {

                const monto =
                    Math.max(
                        0,
                        Number(
                            ingreso.monto
                        ) || 0
                    );


                if (
                    monto <= 0
                ) {
                    return;
                }


                if (
                    ingreso.tipo ===
                    "extra"
                ) {

                    totalExtras +=
                        monto;


                    agregarEvento(
                        ingreso.fecha_ingreso,
                        "extra",
                        {
                            monto
                        }
                    );

                }


                if (
                    ingreso.tipo ===
                    "aporte"
                ) {

                    totalAportes +=
                        monto;


                    agregarEvento(
                        ingreso.fecha_ingreso,
                        "aporte",
                        {
                            monto
                        }
                    );

                }

            }
        );


        // =====================================================
        // REPOSICIONES
        // =====================================================

        const reposiciones =
            Array.isArray(
                resultadoReposiciones.data
            )
                ? resultadoReposiciones.data
                : [];


        let totalReposiciones = 0;


        reposiciones.forEach(
            (reposicion) => {

                const items =
                    Array.isArray(
                        reposicion.reposicion_items
                    )
                        ? reposicion.reposicion_items
                        : [];


                const totalReposicion =
                    items.reduce(
                        (
                            total,
                            item
                        ) =>
                            total +
                            (
                                Number(
                                    item.subtotal
                                ) || 0
                            ),
                        0
                    );


                if (
                    totalReposicion <= 0
                ) {
                    return;
                }


                totalReposiciones +=
                    totalReposicion;


                agregarEvento(
                    reposicion.created_at,
                    "reposicion",
                    {
                        monto:
                            totalReposicion
                    }
                );

            }
        );


        // =====================================================
        // ORDEN CRONOLÓGICO
        // =====================================================

        const prioridadEvento = {
            pago: 1,
            extra: 2,
            aporte: 3,
            reposicion: 4,
            gasto: 5,
            retiro: 6
        };


        eventos.sort(
            (a, b) => {

                if (
                    a.fechaMs !==
                    b.fechaMs
                ) {

                    return (
                        a.fechaMs -
                        b.fechaMs
                    );

                }


                return (
                    (
                        prioridadEvento[
                            a.tipo
                        ] || 99
                    ) -
                    (
                        prioridadEvento[
                            b.tipo
                        ] || 99
                    )
                );

            }
        );


        // =====================================================
        // ESTADO FINANCIERO
        // =====================================================

        let capitalParaReinvertir =
            capitalInicial;

        let disponiblePositivo =
            0;


        // Parte del faltante que corresponde a capital del negocio
        // que fue consumido y debe volver al fondo de reinversión.
        let deficitReinversion =
            deficitInicial;


        // Parte del faltante que quedó sin respaldo de caja/capital.
        // Primero se cancela y recién después se vuelve a formar fondo.
        let deficitCaja =
            0;


        let aportesAplicados =
            0;

        let gananciasAplicadasAReponer =
            0;


        function obtenerCapitalReponer() {

            return Math.max(
                0,
                deficitReinversion +
                deficitCaja
            );

        }


        function repararCapital(
            monto,
            origen
        ) {

            let restante =
                Math.max(
                    0,
                    Number(monto) || 0
                );


            if (
                restante <= 0
            ) {
                return 0;
            }


            let aplicado = 0;


            // Primero cancelamos cualquier faltante sin respaldo.
            if (
                deficitCaja > 0
            ) {

                const reparacionCaja =
                    Math.min(
                        restante,
                        deficitCaja
                    );


                deficitCaja -=
                    reparacionCaja;

                restante -=
                    reparacionCaja;

                aplicado +=
                    reparacionCaja;

            }


            // Después reconstruimos el capital del negocio consumido.
            if (
                restante > 0 &&
                deficitReinversion > 0
            ) {

                const reparacionCapital =
                    Math.min(
                        restante,
                        deficitReinversion
                    );


                deficitReinversion -=
                    reparacionCapital;

                capitalParaReinvertir +=
                    reparacionCapital;

                restante -=
                    reparacionCapital;

                aplicado +=
                    reparacionCapital;

            }


            if (
                origen === "ganancia"
            ) {

                gananciasAplicadasAReponer +=
                    aplicado;

            }


            if (
                origen === "aporte"
            ) {

                aportesAplicados +=
                    aplicado;

            }


            return restante;

        }


        function aplicarGanancia(
            monto
        ) {

            const restante =
                repararCapital(
                    monto,
                    "ganancia"
                );


            disponiblePositivo +=
                restante;

        }


        function aplicarAporte(
            monto
        ) {

            const valor =
                Math.max(
                    0,
                    Number(monto) || 0
                );


            if (
                valor <= 0
            ) {
                return;
            }


            const restante =
                repararCapital(
                    valor,
                    "aporte"
                );


            // Un aporte que supera el faltante sigue siendo capital
            // del negocio, nunca ganancia disponible para retirar.
            capitalParaReinvertir +=
                restante;

        }


        function aplicarSalidaGeneral(
            monto
        ) {

            let restante =
                Math.max(
                    0,
                    Number(monto) || 0
                );


            if (
                restante <= 0
            ) {
                return;
            }


            // Gastos y retiros consumen primero la ganancia libre.
            const desdeDisponible =
                Math.min(
                    disponiblePositivo,
                    restante
                );


            disponiblePositivo -=
                desdeDisponible;

            restante -=
                desdeDisponible;


            if (
                restante <= 0
            ) {
                return;
            }


            // Si no alcanzó la ganancia, se está usando capital.
            const desdeCapital =
                Math.min(
                    capitalParaReinvertir,
                    restante
                );


            capitalParaReinvertir -=
                desdeCapital;

            deficitReinversion +=
                desdeCapital;

            restante -=
                desdeCapital;


            // Si tampoco alcanzó el capital reservado, queda un
            // faltante adicional de caja que también debe cubrirse.
            if (
                restante > 0
            ) {

                deficitCaja +=
                    restante;

            }

        }


        function aplicarReposicion(
            monto
        ) {

            let restante =
                Math.max(
                    0,
                    Number(monto) || 0
                );


            if (
                restante <= 0
            ) {
                return;
            }


            // La reposición usa primero el fondo reservado para stock.
            const desdeCapital =
                Math.min(
                    capitalParaReinvertir,
                    restante
                );


            capitalParaReinvertir -=
                desdeCapital;

            restante -=
                desdeCapital;


            // Si se decide comprar más mercadería, puede usarse
            // ganancia libre para hacer crecer el capital del negocio.
            const desdeDisponible =
                Math.min(
                    disponiblePositivo,
                    restante
                );


            disponiblePositivo -=
                desdeDisponible;

            restante -=
                desdeDisponible;


            // Una reposición que supera ambos fondos deja una
            // obligación de caja, pero la mercadería ya quedó en stock.
            if (
                restante > 0
            ) {

                deficitCaja +=
                    restante;

            }

        }


        function aplicarPerdidaVenta(
            monto
        ) {

            const perdida =
                Math.max(
                    0,
                    Number(monto) || 0
                );


            if (
                perdida <= 0
            ) {
                return;
            }


            // Si una venta termina cobrándose por debajo de su costo,
            // esa parte del capital nunca volvió y queda para reponer.
            deficitReinversion +=
                perdida;

        }


        // =====================================================
        // PROCESAR TODOS LOS MOVIMIENTOS
        // =====================================================

        eventos.forEach(
            (evento) => {

                if (
                    evento.tipo ===
                    "pago"
                ) {

                    capitalParaReinvertir +=
                        Math.max(
                            0,
                            Number(
                                evento.costo
                            ) || 0
                        );


                    aplicarGanancia(
                        evento.ganancia
                    );


                    aplicarPerdidaVenta(
                        evento.perdida
                    );


                    return;

                }


                if (
                    evento.tipo ===
                    "extra"
                ) {

                    aplicarGanancia(
                        evento.monto
                    );

                    return;

                }


                if (
                    evento.tipo ===
                    "aporte"
                ) {

                    aplicarAporte(
                        evento.monto
                    );

                    return;

                }


                if (
                    evento.tipo ===
                    "reposicion"
                ) {

                    aplicarReposicion(
                        evento.monto
                    );

                    return;

                }


                if (
                    evento.tipo ===
                    "gasto" ||
                    evento.tipo ===
                    "retiro"
                ) {

                    aplicarSalidaGeneral(
                        evento.monto
                    );

                }

            }
        );


        capitalParaReinvertir =
            Math.max(
                0,
                capitalParaReinvertir
            );


        disponiblePositivo =
            Math.max(
                0,
                disponiblePositivo
            );


        deficitReinversion =
            Math.max(
                0,
                deficitReinversion
            );


        deficitCaja =
            Math.max(
                0,
                deficitCaja
            );


        const capitalReponer =
            obtenerCapitalReponer();


        // Mientras exista capital faltante, no hay dinero libre para
        // retirar. Lo mostramos negativo para que el faltante sea claro.
        const disponible =
            capitalReponer > 0
                ? -capitalReponer
                : disponiblePositivo;


        return {
            disponible,
            capitalReponer,
            capitalParaReinvertir,
            costoPendiente: false,

            totalCobrado,

            reservaReposicion:
                costoRecuperado,

            costoRecuperado,
            gananciaCobrada,
            perdidasVenta,

            totalReposiciones,
            totalGastos,
            totalRetiros,
            totalExtras,
            totalAportes,

            aportesAplicados,
            gananciasAplicadasAReponer,

            capitalInicial,
            deficitInicial,
            deficitReinversion,
            deficitCaja
        };

    };


// =========================================================
// CAPITAL PARA REINVERTIR
// =========================================================

async function calcularCapitalParaReinvertirGestion(
    resultadoDisponible
) {

    if (
        !resultadoDisponible ||
        resultadoDisponible.costoPendiente
    ) {

        return {
            capitalParaReinvertir: 0,
            totalReposiciones: 0,
            costoPendiente: true
        };

    }


    return {
        capitalParaReinvertir:
            Math.max(
                0,
                Number(
                    resultadoDisponible
                        .capitalParaReinvertir
                ) || 0
            ),

        totalReposiciones:
            Math.max(
                0,
                Number(
                    resultadoDisponible
                        .totalReposiciones
                ) || 0
            ),

        reservaReposicion:
            Math.max(
                0,
                Number(
                    resultadoDisponible
                        .reservaReposicion
                ) || 0
            ),

        capitalReponer:
            Math.max(
                0,
                Number(
                    resultadoDisponible
                        .capitalReponer
                ) || 0
            ),

        costoPendiente: false
    };

}

function mostrarDisponibleRetirarResultadoGestion(
    resultado
) {

    if (!disponibleRetirar) {
        return;
    }

    disponibleRetirar.classList.remove(
        "resumen-valor-negativo"
    );

    if (
        resultado.costoPendiente
    ) {

        disponibleRetirar.textContent =
            "Costo pendiente";

        disponibleRetirar.title =
            "Falta el costo histórico de uno o más productos que tuvieron cobros desde el inicio del nuevo control.";

        capitalReponerResumenGestion
            ?.classList.add(
                "oculto"
            );

        return;
    }

    disponibleRetirar.textContent =
        formatearPrecio(
            resultado.disponible
        );

    if (
        resultado.disponible < 0
    ) {

        disponibleRetirar.classList.add(
            "resumen-valor-negativo"
        );

        if (capitalReponerResumenGestion) {

            capitalReponerResumenGestion.textContent =
                `Capital a reponer: ${formatearPrecio(
                    resultado.capitalReponer
                )}`;

            capitalReponerResumenGestion.classList.remove(
                "oculto"
            );
        }

    } else {

        capitalReponerResumenGestion
            ?.classList.add(
                "oculto"
            );

    }

    disponibleRetirar.title =
        "Los cobros recuperan primero el costo histórico. La ganancia cubre cualquier capital faltante antes de quedar disponible para retirar.";

}


actualizarDisponibleRetirarGestion =
    async function () {

        const resultado =
            await calcularDisponibleRetirarGestion();

        mostrarDisponibleRetirarResultadoGestion(
            resultado
        );

        return resultado;

    };


// =========================================================
// RESUMEN GENERAL COMPLETO
// =========================================================

actualizarResumenGeneral =
    async function () {

        actualizarCapitalStockGestion();


        const [
            totalVentasMes,
            resultadoGananciaMes,
            totalExtrasMes,
            resultadoDisponible
        ] =
            await Promise.all([
                calcularVentasMesGestion(),
                calcularGananciaMesGestion(),
                calcularExtrasMesGestion(),
                calcularDisponibleRetirarGestion()
            ]);


        const resultadoCapitalReinversion =
            await calcularCapitalParaReinvertirGestion(
                resultadoDisponible
            );


        // ================================================
        // CAPITAL PARA REINVERTIR
        // ================================================

        if (capitalReinversionGestion) {

            if (
                resultadoCapitalReinversion.costoPendiente
            ) {

                capitalReinversionGestion.textContent =
                    "Costo pendiente";

                capitalReinversionGestion.title =
                    "Falta información para calcular correctamente el capital disponible para reinvertir.";

            } else {

                capitalReinversionGestion.textContent =
                    formatearPrecio(
                        resultadoCapitalReinversion
                            .capitalParaReinvertir
                    );

                capitalReinversionGestion.title =
                    "Capital recuperado de productos vendidos que todavía está disponible para volver a comprar mercadería.";

            }

        }


        // ================================================
        // VENTAS DEL MES
        // ================================================

        if (ventasMes) {

            ventasMes.textContent =
                formatearPrecio(
                    totalVentasMes
                );

        }


        // ================================================
        // EXTRAS DEL MES
        // ================================================

        if (extrasMesResumenGestion) {

            extrasMesResumenGestion.textContent =
                formatearPrecio(
                    totalExtrasMes
                );

        }


        // ================================================
        // GANANCIA DEL MES
        // ================================================

        if (gananciaMes) {

            if (
                resultadoGananciaMes.costoPendiente
            ) {

                gananciaMes.textContent =
                    "Costo pendiente";

                gananciaMes.title =
                    "Hay una o más ventas del mes sin costo histórico cargado.";

            } else {

                gananciaMes.textContent =
                    formatearPrecio(
                        resultadoGananciaMes.ganancia
                    );

                gananciaMes.title =
                    "Ganancia de las ventas del mes menos los gastos del negocio del mismo mes.";

            }

        }


        // ================================================
        // GANANCIA TOTAL GENERADA
        // ================================================

        if (gananciaTotalGeneradaGestion) {

            if (
                resultadoGananciaMes.costoPendiente
            ) {

                gananciaTotalGeneradaGestion.textContent =
                    "Costo pendiente";

                gananciaTotalGeneradaGestion.title =
                    "Para calcular el total falta completar costos históricos de ventas.";

            } else {

                gananciaTotalGeneradaGestion.textContent =
                    formatearPrecio(
                        resultadoGananciaMes.ganancia +
                        totalExtrasMes
                    );

                gananciaTotalGeneradaGestion.title =
                    "Ganancia neta de VO Import del mes + ganancias extra del mes. Los aportes personales no cuentan como ganancia.";

            }

        }


        // ================================================
        // DISPONIBLE PARA RETIRAR / CAPITAL A REPONER
        // ================================================

        mostrarDisponibleRetirarResultadoGestion(
            resultadoDisponible
        );

    };


// Estado inicial del formulario nuevo.
limpiarFormularioDineroGestion();



// =========================================================
// CIERRE MENSUAL / HISTORIAL MENSUAL
// =========================================================

const botonVerCierresMensualesGestion =
    document.getElementById(
        "ver-cierres-mensuales"
    );

const seccionCierresMensualesGestion =
    document.getElementById(
        "seccion-cierres-mensuales"
    );

const botonCerrarCierresMensualesGestion =
    document.getElementById(
        "cerrar-cierres-mensuales"
    );

const cierrePeriodoPendienteGestion =
    document.getElementById(
        "cierre-periodo-pendiente"
    );

const cierreEstadoPendienteGestion =
    document.getElementById(
        "cierre-estado-pendiente"
    );

const cierreExplicacionPendienteGestion =
    document.getElementById(
        "cierre-explicacion-pendiente"
    );

const cierrePreviewGestion =
    document.getElementById(
        "cierre-preview"
    );

const cierreObservacionesGestion =
    document.getElementById(
        "cierre-observaciones"
    );

const botonConfirmarCierreMensualGestion =
    document.getElementById(
        "confirmar-cierre-mensual"
    );

const mensajeCierreMensualGestion =
    document.getElementById(
        "mensaje-cierre-mensual"
    );

const cierresListaGestion =
    document.getElementById(
        "cierres-lista"
    );

const cierresContadorGestion =
    document.getElementById(
        "cierres-contador"
    );

let cierresMensualesGestion = [];
let periodoPendienteCierreGestion = null;
let metricasPendientesCierreGestion = null;


// =========================================================
// CERRAR ESTA SECCIÓN JUNTO AL RESTO
// =========================================================

const cerrarSeccionesGestionAntesCierres =
    cerrarSeccionesGestion;

cerrarSeccionesGestion = function () {

    cerrarSeccionesGestionAntesCierres();

    seccionCierresMensualesGestion
        ?.classList.add(
            "oculto"
        );

};


// =========================================================
// UTILIDADES DE PERÍODO
// =========================================================

function clavePeriodoCierreGestion(
    fecha
) {

    const valor =
        fecha instanceof Date
            ? fecha
            : new Date(fecha);

    if (
        Number.isNaN(
            valor.getTime()
        )
    ) {
        return "";
    }

    return [
        valor.getFullYear(),
        String(
            valor.getMonth() + 1
        ).padStart(2, "0")
    ].join("-");

}


function fechaDesdeClavePeriodoGestion(
    clave
) {

    const coincidencia =
        String(clave || "")
            .match(
                /^(\d{4})-(\d{2})$/
            );

    if (!coincidencia) {
        return null;
    }

    return new Date(
        Number(coincidencia[1]),
        Number(coincidencia[2]) - 1,
        1,
        0,
        0,
        0,
        0
    );

}


function nombrePeriodoCierreGestion(
    clave
) {

    const fecha =
        fechaDesdeClavePeriodoGestion(
            clave
        );

    if (!fecha) {
        return "Mes";
    }

    const texto =
        new Intl.DateTimeFormat(
            "es-AR",
            {
                month: "long",
                year: "numeric"
            }
        ).format(fecha);

    return texto.charAt(0).toUpperCase() +
        texto.slice(1);

}


function limitesPeriodoCierreGestion(
    clave
) {

    const inicio =
        fechaDesdeClavePeriodoGestion(
            clave
        );

    if (!inicio) {
        return null;
    }

    const fin =
        new Date(
            inicio.getFullYear(),
            inicio.getMonth() + 1,
            1,
            0,
            0,
            0,
            0
        );

    return {
        inicio,
        fin
    };

}


function periodoActualCierreGestion() {

    return clavePeriodoCierreGestion(
        new Date()
    );

}


function periodoAnteriorCierreGestion() {

    const hoy =
        new Date();

    return clavePeriodoCierreGestion(
        new Date(
            hoy.getFullYear(),
            hoy.getMonth() - 1,
            1
        )
    );

}


function periodoEsAnteriorAlActualGestion(
    clave
) {

    return String(clave || "") <
        periodoActualCierreGestion();

}


// =========================================================
// CARGAR CIERRES GUARDADOS
// =========================================================

async function cargarCierresMensualesGestion() {

    const {
        data,
        error
    } =
        await supabaseClient
            .from("cierres_mensuales")
            .select(`
                id,
                periodo,
                cerrado_at,
                ventas_mes,
                ganancia_voimport,
                gastos_mes,
                extras_mes,
                aportes_mes,
                ganancia_total_generada,
                retiros_mes,
                capital_stock,
                disponible_retirar,
                capital_reponer,
                cuentas_por_cobrar,
                costo_pendiente,
                observaciones
            `)
            .order(
                "periodo",
                {
                    ascending: false
                }
            );

    if (error) {

        console.error(
            "Error al cargar cierres mensuales:",
            error
        );

        cierresMensualesGestion = [];

        if (cierresListaGestion) {
            cierresListaGestion.innerHTML = `
                <p class="cierres-vacios cierres-error">
                    No se pudo cargar el historial mensual.
                </p>
            `;
        }

        return [];
    }

    cierresMensualesGestion =
        Array.isArray(data)
            ? data
            : [];

    renderizarCierresMensualesGestion();

    return cierresMensualesGestion;

}


function renderizarCierresMensualesGestion() {

    if (
        !cierresListaGestion ||
        !cierresContadorGestion
    ) {
        return;
    }

    cierresContadorGestion.textContent =
        `${cierresMensualesGestion.length} ${
            cierresMensualesGestion.length === 1
                ? "cierre"
                : "cierres"
        }`;

    if (
        cierresMensualesGestion.length ===
        0
    ) {

        cierresListaGestion.innerHTML = `
            <p class="cierres-vacios">
                Todavía no cerraste ningún mes. Cuando termine tu primer mes de uso, va a quedar guardado acá.
            </p>
        `;

        return;
    }

    cierresListaGestion.innerHTML =
        cierresMensualesGestion
            .map(
                (cierre) => {

                    const pendiente =
                        cierre.costo_pendiente ===
                        true;

                    const disponible =
                        cierre.disponible_retirar === null ||
                        cierre.disponible_retirar === undefined
                            ? null
                            : Number(
                                cierre.disponible_retirar
                            );

                    const capitalReponer =
                        cierre.capital_reponer === null ||
                        cierre.capital_reponer === undefined
                            ? null
                            : Number(
                                cierre.capital_reponer
                            );

                    const gananciaVo =
                        cierre.ganancia_voimport === null ||
                        cierre.ganancia_voimport === undefined
                            ? null
                            : Number(
                                cierre.ganancia_voimport
                            );

                    const gananciaTotal =
                        cierre.ganancia_total_generada === null ||
                        cierre.ganancia_total_generada === undefined
                            ? null
                            : Number(
                                cierre.ganancia_total_generada
                            );

                    return `
                        <article class="cierre-card">

                            <div class="cierre-card-superior">

                                <div>
                                    <h4>
                                        ${escaparHTML(
                                            nombrePeriodoCierreGestion(
                                                String(cierre.periodo).slice(0, 7)
                                            )
                                        )}
                                    </h4>
                                    <span>
                                        Cerrado ${escaparHTML(
                                            formatearFechaHora(
                                                cierre.cerrado_at
                                            )
                                        )}
                                    </span>
                                </div>

                                <span class="cierre-card-estado ${
                                    pendiente
                                        ? "cierre-card-pendiente"
                                        : "cierre-card-completo"
                                }">
                                    ${
                                        pendiente
                                            ? "COSTOS PENDIENTES"
                                            : "CERRADO"
                                    }
                                </span>

                            </div>

                            <div class="cierre-card-grid">

                                <div>
                                    <span>Ventas</span>
                                    <strong>${formatearPrecio(cierre.ventas_mes)}</strong>
                                </div>

                                <div>
                                    <span>Ganancia VO Import</span>
                                    <strong>${
                                        gananciaVo === null
                                            ? "Costo pendiente"
                                            : formatearPrecio(gananciaVo)
                                    }</strong>
                                </div>

                                <div>
                                    <span>Gastos</span>
                                    <strong>${formatearPrecio(cierre.gastos_mes)}</strong>
                                </div>

                                <div>
                                    <span>Extras</span>
                                    <strong>${formatearPrecio(cierre.extras_mes)}</strong>
                                </div>

                                <div>
                                    <span>Ganancia total</span>
                                    <strong>${
                                        gananciaTotal === null
                                            ? "Costo pendiente"
                                            : formatearPrecio(gananciaTotal)
                                    }</strong>
                                </div>

                                <div>
                                    <span>Retiros</span>
                                    <strong>${formatearPrecio(cierre.retiros_mes)}</strong>
                                </div>

                                <div>
                                    <span>Aportes</span>
                                    <strong>${formatearPrecio(cierre.aportes_mes)}</strong>
                                </div>

                                <div>
                                    <span>Capital en stock</span>
                                    <strong>${formatearPrecio(cierre.capital_stock)}</strong>
                                </div>

                                <div>
                                    <span>Disponible al cierre</span>
                                    <strong class="${
                                        disponible !== null &&
                                        disponible < 0
                                            ? "cierre-valor-negativo"
                                            : ""
                                    }">${
                                        disponible === null
                                            ? "Costo pendiente"
                                            : formatearPrecio(disponible)
                                    }</strong>
                                </div>

                                <div>
                                    <span>Capital a reponer</span>
                                    <strong class="cierre-valor-negativo">${
                                        capitalReponer === null
                                            ? "Costo pendiente"
                                            : formatearPrecio(capitalReponer)
                                    }</strong>
                                </div>

                                <div>
                                    <span>Clientes a cobrar</span>
                                    <strong>${formatearPrecio(cierre.cuentas_por_cobrar)}</strong>
                                </div>

                            </div>

                            ${
                                cierre.observaciones
                                    ? `
                                        <p class="cierre-card-observaciones">
                                            <b>Observaciones:</b>
                                            ${escaparHTML(cierre.observaciones)}
                                        </p>
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
// MESES CON ACTIVIDAD
// =========================================================

async function obtenerPeriodosConActividadGestion() {

    const [
        ventasResultado,
        gastosResultado,
        retirosResultado,
        ingresosResultado
    ] =
        await Promise.all([

            supabaseClient
                .from("ventas")
                .select(`
                    fecha_emision,
                    anulada
                `)
                .eq(
                    "anulada",
                    false
                ),

            supabaseClient
                .from("gastos")
                .select(`
                    fecha_gasto,
                    anulado
                `)
                .eq(
                    "anulado",
                    false
                ),

            supabaseClient
                .from("retiros")
                .select(`
                    fecha_retiro,
                    anulado
                `)
                .eq(
                    "anulado",
                    false
                ),

            supabaseClient
                .from("ingresos_adicionales")
                .select(`
                    fecha_ingreso,
                    anulado
                `)
                .eq(
                    "anulado",
                    false
                )

        ]);

    const error =
        ventasResultado.error ||
        gastosResultado.error ||
        retirosResultado.error ||
        ingresosResultado.error;

    if (error) {
        throw error;
    }

    const periodos =
        new Set();

    const agregar =
        (lista, campo) => {

            (
                Array.isArray(lista)
                    ? lista
                    : []
            ).forEach(
                (item) => {

                    const clave =
                        clavePeriodoCierreGestion(
                            item[campo]
                        );

                    if (clave) {
                        periodos.add(
                            clave
                        );
                    }

                }
            );

        };

    agregar(
        ventasResultado.data,
        "fecha_emision"
    );

    agregar(
        gastosResultado.data,
        "fecha_gasto"
    );

    agregar(
        retirosResultado.data,
        "fecha_retiro"
    );

    agregar(
        ingresosResultado.data,
        "fecha_ingreso"
    );

    return Array.from(periodos)
        .filter(
            periodoEsAnteriorAlActualGestion
        )
        .sort();

}


async function detectarPeriodoPendienteCierreGestion() {

    const periodosConActividad =
        await obtenerPeriodosConActividadGestion();

    const cerrados =
        new Set(
            cierresMensualesGestion.map(
                (cierre) =>
                    String(
                        cierre.periodo
                    ).slice(0, 7)
            )
        );

    return periodosConActividad.find(
        (periodo) =>
            !cerrados.has(
                periodo
            )
    ) || null;

}


// =========================================================
// CUENTAS A COBRAR ACTUALES PARA LA FOTO DEL CIERRE
// =========================================================

async function calcularCuentasPorCobrarCierreGestion() {

    const {
        data: ventasData,
        error: ventasError
    } =
        await supabaseClient
            .from("ventas")
            .select(`
                id,
                total,
                anulada
            `)
            .eq(
                "anulada",
                false
            );

    if (ventasError) {
        throw ventasError;
    }

    const ventas =
        Array.isArray(ventasData)
            ? ventasData
            : [];

    if (ventas.length === 0) {
        return 0;
    }

    const ids =
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
                venta_id,
                monto,
                anulado
            `)
            .in(
                "venta_id",
                ids
            )
            .eq(
                "anulado",
                false
            );

    if (pagosError) {
        throw pagosError;
    }

    const pagadoPorVenta =
        new Map();

    (
        Array.isArray(pagosData)
            ? pagosData
            : []
    ).forEach(
        (pago) => {

            const id =
                Number(
                    pago.venta_id
                );

            pagadoPorVenta.set(
                id,
                (
                    pagadoPorVenta.get(id) ||
                    0
                ) +
                (Number(pago.monto) || 0)
            );

        }
    );

    return ventas.reduce(
        (total, venta) => {

            const totalVenta =
                Number(venta.total) || 0;

            const pagado =
                pagadoPorVenta.get(
                    Number(venta.id)
                ) || 0;

            return total +
                Math.max(
                    0,
                    totalVenta - pagado
                );

        },
        0
    );

}


// =========================================================
// MÉTRICAS DEL MES A CERRAR
// =========================================================

async function calcularMetricasCierreGestion(
    periodo
) {

    const limites =
        limitesPeriodoCierreGestion(
            periodo
        );

    if (!limites) {
        throw new Error(
            "Período inválido."
        );
    }

    const inicioISO =
        limites.inicio.toISOString();

    const finISO =
        limites.fin.toISOString();

    const [
        ventasResultado,
        gastosResultado,
        ingresosResultado,
        retirosResultado,
        cuentasPorCobrar,
        disponibleActual
    ] =
        await Promise.all([

            supabaseClient
                .from("ventas")
                .select(`
                    id,
                    total,
                    fecha_emision,
                    anulada
                `)
                .gte(
                    "fecha_emision",
                    inicioISO
                )
                .lt(
                    "fecha_emision",
                    finISO
                )
                .eq(
                    "anulada",
                    false
                ),

            supabaseClient
                .from("gastos")
                .select(`
                    monto,
                    fecha_gasto,
                    anulado
                `)
                .gte(
                    "fecha_gasto",
                    inicioISO
                )
                .lt(
                    "fecha_gasto",
                    finISO
                )
                .eq(
                    "anulado",
                    false
                ),

            supabaseClient
                .from("ingresos_adicionales")
                .select(`
                    tipo,
                    monto,
                    fecha_ingreso,
                    anulado
                `)
                .gte(
                    "fecha_ingreso",
                    inicioISO
                )
                .lt(
                    "fecha_ingreso",
                    finISO
                )
                .eq(
                    "anulado",
                    false
                ),

            supabaseClient
                .from("retiros")
                .select(`
                    monto,
                    fecha_retiro,
                    anulado
                `)
                .gte(
                    "fecha_retiro",
                    inicioISO
                )
                .lt(
                    "fecha_retiro",
                    finISO
                )
                .eq(
                    "anulado",
                    false
                ),

            calcularCuentasPorCobrarCierreGestion(),
            calcularDisponibleRetirarGestion()

        ]);

    const error =
        ventasResultado.error ||
        gastosResultado.error ||
        ingresosResultado.error ||
        retirosResultado.error;

    if (error) {
        throw error;
    }

    const ventas =
        Array.isArray(
            ventasResultado.data
        )
            ? ventasResultado.data
            : [];

    const ventasMes =
        ventas.reduce(
            (total, venta) =>
                total +
                (Number(venta.total) || 0),
            0
        );

    const gastosMes =
        (
            Array.isArray(
                gastosResultado.data
            )
                ? gastosResultado.data
                : []
        ).reduce(
            (total, gasto) =>
                total +
                (Number(gasto.monto) || 0),
            0
        );

    let extrasMes = 0;
    let aportesMes = 0;

    (
        Array.isArray(
            ingresosResultado.data
        )
            ? ingresosResultado.data
            : []
    ).forEach(
        (ingreso) => {

            const monto =
                Number(
                    ingreso.monto
                ) || 0;

            if (
                ingreso.tipo ===
                "extra"
            ) {
                extrasMes += monto;
            }

            if (
                ingreso.tipo ===
                "aporte"
            ) {
                aportesMes += monto;
            }

        }
    );

    const retirosMes =
        (
            Array.isArray(
                retirosResultado.data
            )
                ? retirosResultado.data
                : []
        ).reduce(
            (total, retiro) =>
                total +
                (Number(retiro.monto) || 0),
            0
        );

    let gananciaVoImport = 0;
    let costoPendienteGanancia = false;

    if (
        ventas.length > 0
    ) {

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
                    venta_id,
                    cantidad,
                    costo_unitario
                `)
                .in(
                    "venta_id",
                    idsVentas
                );

        if (itemsError) {
            throw itemsError;
        }

        const items =
            Array.isArray(itemsData)
                ? itemsData
                : [];

        const itemsPorVenta =
            new Map();

        items.forEach(
            (item) => {

                const id =
                    Number(
                        item.venta_id
                    );

                if (
                    !itemsPorVenta.has(id)
                ) {
                    itemsPorVenta.set(
                        id,
                        []
                    );
                }

                itemsPorVenta
                    .get(id)
                    .push(item);

            }
        );

        let gananciaBruta = 0;

        ventas.forEach(
            (venta) => {

                const lista =
                    itemsPorVenta.get(
                        Number(venta.id)
                    ) || [];

                const completo =
                    lista.length > 0 &&
                    lista.every(
                        (item) =>
                            item.costo_unitario !== null &&
                            item.costo_unitario !== undefined &&
                            item.costo_unitario !== "" &&
                            Number.isFinite(
                                Number(
                                    item.costo_unitario
                                )
                            )
                    );

                if (!completo) {
                    costoPendienteGanancia =
                        true;
                    return;
                }

                const costo =
                    lista.reduce(
                        (total, item) =>
                            total +
                            (
                                (Number(item.cantidad) || 0) *
                                Number(item.costo_unitario)
                            ),
                        0
                    );

                gananciaBruta +=
                    (Number(venta.total) || 0) -
                    costo;

            }
        );

        if (
            !costoPendienteGanancia
        ) {
            gananciaVoImport =
                gananciaBruta -
                gastosMes;
        }

    } else {
        gananciaVoImport =
            -gastosMes;
    }

    const capitalStockActual =
        calcularCapitalStockGestion();

    const capitalIncompleto =
        productosGestion.some(
            (producto) => {

                if (
                    producto.categoria_mostrar ===
                    "decants"
                ) {
                    return false;
                }

                const stock =
                    Math.max(
                        0,
                        Number(producto.stock) || 0
                    );

                if (stock <= 0) {
                    return false;
                }

                const costo =
                    producto.costo_actual === null ||
                    producto.costo_actual === undefined ||
                    producto.costo_actual === ""
                        ? null
                        : Number(
                            producto.costo_actual
                        );

                return !Number.isFinite(costo) ||
                    costo < 0;

            }
        );

    const costoPendiente =
        costoPendienteGanancia ||
        disponibleActual.costoPendiente ||
        capitalIncompleto;

    return {
        periodo,
        ventasMes,
        gananciaVoImport:
            costoPendienteGanancia
                ? null
                : gananciaVoImport,
        gastosMes,
        extrasMes,
        aportesMes,
        gananciaTotalGenerada:
            costoPendienteGanancia
                ? null
                : gananciaVoImport +
                    extrasMes,
        retirosMes,
        capitalStock:
            capitalStockActual,
        disponibleRetirar:
            disponibleActual.costoPendiente
                ? null
                : disponibleActual.disponible,
        capitalReponer:
            disponibleActual.costoPendiente
                ? null
                : disponibleActual.capitalReponer,
        cuentasPorCobrar,
        costoPendiente,
        capitalIncompleto,
        costoPendienteGanancia,
        disponibleCostoPendiente:
            disponibleActual.costoPendiente
    };

}


function renderizarPreviewCierreGestion(
    metricas
) {

    if (!cierrePreviewGestion) {
        return;
    }

    const valorGanancia =
        metricas.gananciaVoImport === null
            ? "Costo pendiente"
            : formatearPrecio(
                metricas.gananciaVoImport
            );

    const valorGananciaTotal =
        metricas.gananciaTotalGenerada === null
            ? "Costo pendiente"
            : formatearPrecio(
                metricas.gananciaTotalGenerada
            );

    const valorDisponible =
        metricas.disponibleRetirar === null
            ? "Costo pendiente"
            : formatearPrecio(
                metricas.disponibleRetirar
            );

    const valorCapitalReponer =
        metricas.capitalReponer === null
            ? "Costo pendiente"
            : formatearPrecio(
                metricas.capitalReponer
            );

    cierrePreviewGestion.innerHTML = `

        <div>
            <span>Ventas</span>
            <strong>${formatearPrecio(metricas.ventasMes)}</strong>
        </div>

        <div>
            <span>Ganancia VO Import</span>
            <strong>${valorGanancia}</strong>
        </div>

        <div>
            <span>Gastos</span>
            <strong>${formatearPrecio(metricas.gastosMes)}</strong>
        </div>

        <div>
            <span>Extras</span>
            <strong>${formatearPrecio(metricas.extrasMes)}</strong>
        </div>

        <div>
            <span>Ganancia total</span>
            <strong>${valorGananciaTotal}</strong>
        </div>

        <div>
            <span>Retiros</span>
            <strong>${formatearPrecio(metricas.retirosMes)}</strong>
        </div>

        <div>
            <span>Aportes</span>
            <strong>${formatearPrecio(metricas.aportesMes)}</strong>
        </div>

        <div>
            <span>Capital en stock</span>
            <strong>${formatearPrecio(metricas.capitalStock)}</strong>
        </div>

        <div>
            <span>Disponible al cierre</span>
            <strong class="${
                metricas.disponibleRetirar !== null &&
                metricas.disponibleRetirar < 0
                    ? "cierre-valor-negativo"
                    : ""
            }">${valorDisponible}</strong>
        </div>

        <div>
            <span>Capital a reponer</span>
            <strong class="cierre-valor-negativo">${valorCapitalReponer}</strong>
        </div>

        <div>
            <span>Clientes a cobrar</span>
            <strong>${formatearPrecio(metricas.cuentasPorCobrar)}</strong>
        </div>

        ${
            metricas.costoPendiente
                ? `
                    <p class="cierre-preview-aviso">
                        Hay costos pendientes. El cierre puede guardarse igual, pero los valores que dependan de esos costos quedarán marcados como pendientes en el historial.
                    </p>
                `
                : ""
        }
    `;

    cierrePreviewGestion.classList.remove(
        "oculto"
    );

}


// =========================================================
// PREPARAR PRÓXIMO CIERRE
// =========================================================

async function prepararProximoCierreGestion() {

    limpiarMensaje(
        mensajeCierreMensualGestion
    );

    periodoPendienteCierreGestion =
        null;

    metricasPendientesCierreGestion =
        null;

    cierrePreviewGestion
        ?.classList.add(
            "oculto"
        );

    if (cierreObservacionesGestion) {
        cierreObservacionesGestion.value =
            "";
    }

    if (botonConfirmarCierreMensualGestion) {
        botonConfirmarCierreMensualGestion.disabled =
            true;
        botonConfirmarCierreMensualGestion.textContent =
            "Buscando mes pendiente...";
    }

    if (cierreEstadoPendienteGestion) {
        cierreEstadoPendienteGestion.textContent =
            "Revisando";
        cierreEstadoPendienteGestion.className =
            "cierre-estado";
    }

    try {

        const periodo =
            await detectarPeriodoPendienteCierreGestion();

        if (!periodo) {

            if (cierrePeriodoPendienteGestion) {
                cierrePeriodoPendienteGestion.textContent =
                    nombrePeriodoCierreGestion(
                        periodoActualCierreGestion()
                    );
            }

            if (cierreEstadoPendienteGestion) {
                cierreEstadoPendienteGestion.textContent =
                    "MES EN CURSO";
                cierreEstadoPendienteGestion.className =
                    "cierre-estado cierre-estado-curso";
            }

            if (cierreExplicacionPendienteGestion) {
                cierreExplicacionPendienteGestion.textContent =
                    `No hay meses anteriores pendientes. ${nombrePeriodoCierreGestion(periodoActualCierreGestion())} todavía está en curso y se podrá cerrar cuando empiece el mes siguiente.`;
            }

            if (botonConfirmarCierreMensualGestion) {
                botonConfirmarCierreMensualGestion.disabled =
                    true;
                botonConfirmarCierreMensualGestion.textContent =
                    "No hay un mes para cerrar";
            }

            return;
        }

        periodoPendienteCierreGestion =
            periodo;

        if (cierrePeriodoPendienteGestion) {
            cierrePeriodoPendienteGestion.textContent =
                nombrePeriodoCierreGestion(
                    periodo
                );
        }

        if (cierreEstadoPendienteGestion) {
            cierreEstadoPendienteGestion.textContent =
                "PENDIENTE";
            cierreEstadoPendienteGestion.className =
                "cierre-estado cierre-estado-pendiente";
        }

        const esMesAnteriorInmediato =
            periodo ===
            periodoAnteriorCierreGestion();

        if (cierreExplicacionPendienteGestion) {
            cierreExplicacionPendienteGestion.textContent =
                esMesAnteriorInmediato
                    ? `Ya podés cerrar ${nombrePeriodoCierreGestion(periodo)}. Hacelo antes de registrar movimientos del mes nuevo para congelar correctamente el capital y el disponible.`
                    : `${nombrePeriodoCierreGestion(periodo)} quedó pendiente de cierre. Los movimientos del mes se calculan por fecha, pero el capital y el disponible se guardarán con el estado actual porque no pueden reconstruirse exactamente hacia atrás.`;
        }

        metricasPendientesCierreGestion =
            await calcularMetricasCierreGestion(
                periodo
            );

        renderizarPreviewCierreGestion(
            metricasPendientesCierreGestion
        );

        if (botonConfirmarCierreMensualGestion) {
            botonConfirmarCierreMensualGestion.disabled =
                false;
            botonConfirmarCierreMensualGestion.textContent =
                `Cerrar ${nombrePeriodoCierreGestion(periodo)}`;
        }

    } catch (error) {

        console.error(
            "Error al preparar el cierre mensual:",
            error
        );

        mostrarMensaje(
            mensajeCierreMensualGestion,
            error?.message ||
            "No se pudo preparar el cierre mensual."
        );

        if (botonConfirmarCierreMensualGestion) {
            botonConfirmarCierreMensualGestion.disabled =
                true;
            botonConfirmarCierreMensualGestion.textContent =
                "No se pudo preparar el cierre";
        }

    }

}


// =========================================================
// GUARDAR CIERRE
// =========================================================

botonConfirmarCierreMensualGestion
    ?.addEventListener(
        "click",
        async () => {

            if (
                !periodoPendienteCierreGestion ||
                !metricasPendientesCierreGestion
            ) {
                return;
            }

            const periodo =
                periodoPendienteCierreGestion;

            const confirmar =
                window.confirm(
                    `¿Cerrar ${nombrePeriodoCierreGestion(periodo)}?\n\n` +
                    "El cierre quedará guardado en el historial y no cambiará con movimientos futuros."
                );

            if (!confirmar) {
                return;
            }

            botonConfirmarCierreMensualGestion.disabled =
                true;

            botonConfirmarCierreMensualGestion.textContent =
                "Cerrando mes...";

            limpiarMensaje(
                mensajeCierreMensualGestion
            );

            try {

                // Recalculamos justo antes de guardar para que la foto
                // use los datos más recientes disponibles.
                const metricas =
                    await calcularMetricasCierreGestion(
                        periodo
                    );

                const fechaPeriodo =
                    fechaDesdeClavePeriodoGestion(
                        periodo
                    );

                const fechaSQL =
                    `${fechaPeriodo.getFullYear()}-${String(fechaPeriodo.getMonth() + 1).padStart(2, "0")}-01`;

                const {
                    error
                } =
                    await supabaseClient.rpc(
                        "cerrar_mes",
                        {
                            p_periodo:
                                fechaSQL,
                            p_ventas_mes:
                                metricas.ventasMes,
                            p_ganancia_voimport:
                                metricas.gananciaVoImport,
                            p_gastos_mes:
                                metricas.gastosMes,
                            p_extras_mes:
                                metricas.extrasMes,
                            p_aportes_mes:
                                metricas.aportesMes,
                            p_ganancia_total_generada:
                                metricas.gananciaTotalGenerada,
                            p_retiros_mes:
                                metricas.retirosMes,
                            p_capital_stock:
                                metricas.capitalStock,
                            p_disponible_retirar:
                                metricas.disponibleRetirar,
                            p_capital_reponer:
                                metricas.capitalReponer,
                            p_cuentas_por_cobrar:
                                metricas.cuentasPorCobrar,
                            p_costo_pendiente:
                                metricas.costoPendiente,
                            p_observaciones:
                                cierreObservacionesGestion?.value.trim() ||
                                null
                        }
                    );

                if (error) {
                    throw error;
                }

                mostrarMensaje(
                    mensajeCierreMensualGestion,
                    `${nombrePeriodoCierreGestion(periodo)} quedó cerrado y guardado en el historial.`,
                    "exito"
                );

                await cargarCierresMensualesGestion();

                await prepararProximoCierreGestion();

            } catch (error) {

                console.error(
                    "Error al cerrar mes:",
                    error
                );

                mostrarMensaje(
                    mensajeCierreMensualGestion,
                    error?.message ||
                    "No se pudo cerrar el mes."
                );

                if (botonConfirmarCierreMensualGestion) {
                    botonConfirmarCierreMensualGestion.disabled =
                        false;
                    botonConfirmarCierreMensualGestion.textContent =
                        `Cerrar ${nombrePeriodoCierreGestion(periodo)}`;
                }

            }

        }
    );


// =========================================================
// ABRIR / CERRAR
// =========================================================

async function abrirCierresMensualesGestion() {

    if (
        typeof ventaEditandoIdGestion !==
            "undefined" &&
        ventaEditandoIdGestion !==
            null &&
        typeof salirModoEdicionVentaGestion ===
            "function"
    ) {
        salirModoEdicionVentaGestion(
            true
        );
    }

    if (
        typeof modoPresupuestoGestion !==
            "undefined" &&
        modoPresupuestoGestion ===
            true &&
        typeof salirModoPresupuestoGestion ===
            "function"
    ) {
        salirModoPresupuestoGestion(
            true
        );
    }

    cerrarSeccionesGestion();

    seccionCierresMensualesGestion
        ?.classList.remove(
            "oculto"
        );

    if (cierresListaGestion) {
        cierresListaGestion.innerHTML = `
            <p class="cierres-vacios">
                Cargando cierres...
            </p>
        `;
    }

    await cargarCierresMensualesGestion();

    await prepararProximoCierreGestion();

    setTimeout(
        () => {

            seccionCierresMensualesGestion
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

        },
        40
    );

}


botonVerCierresMensualesGestion
    ?.addEventListener(
        "click",
        abrirCierresMensualesGestion
    );


botonCerrarCierresMensualesGestion
    ?.addEventListener(
        "click",
        () => {

            seccionCierresMensualesGestion
                ?.classList.add(
                    "oculto"
                );

        }
    );

// =========================================================
// COMPROBANTES - IMPRIMIR / GUARDAR PDF
// VENTAS + PRESUPUESTOS
// =========================================================

function formatearNumeroComprobanteGestion(valor) {
    const numero = Number(valor);

    if (!Number.isFinite(numero) || numero <= 0) {
        return String(valor || "");
    }

    return String(Math.trunc(numero)).padStart(4, "0");
}


function formatearFechaComprobanteGestion(valor) {
    if (!valor) {
        return "—";
    }

    const fecha = new Date(valor);

    if (Number.isNaN(fecha.getTime())) {
        return "—";
    }

    return new Intl.DateTimeFormat(
        "es-AR",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    ).format(fecha);
}


function obtenerClienteComprobanteGestion(clienteId) {
    const cliente = clientesGestion.find(
        (item) =>
            Number(item.id) ===
            Number(clienteId)
    );

    return cliente?.nombre || "General";
}


function obtenerDescuentoItemComprobanteGestion(item) {
    const descuentoUnitario =
        Number(item?.descuento_unitario) || 0;

    if (descuentoUnitario <= 0) {
        return "—";
    }

    if (item?.descuento_tipo === "porcentaje") {
        return `${Number(item.descuento_valor) || 0}% · ${formatearPrecio(descuentoUnitario)}`;
    }

    return formatearPrecio(descuentoUnitario);
}


function obtenerSubtotalOriginalComprobanteGestion(items) {
    return (Array.isArray(items) ? items : [])
        .reduce(
            (total, item) => {
                const precioOriginal =
                    Number(
                        item?.precio_unitario_original ??
                        item?.precio_unitario
                    ) || 0;

                const cantidad =
                    Number(item?.cantidad) || 0;

                return total +
                    precioOriginal * cantidad;
            },
            0
        );
}


function obtenerSubtotalPostDescuentosItemGestion(documento) {
    const guardado =
        Number(
            documento?.subtotal_antes_descuento_general
        );

    if (
        Number.isFinite(guardado) &&
        guardado >= 0
    ) {
        return guardado;
    }

    return (Array.isArray(documento?.items)
        ? documento.items
        : []
    ).reduce(
        (total, item) =>
            total +
            (
                Number(item?.subtotal) ||
                (
                    (Number(item?.cantidad) || 0) *
                    (Number(item?.precio_unitario) || 0)
                )
            ),
        0
    );
}


function obtenerNombreProductoComprobanteGestion(item) {
    const nombreGuardado =
        item?.producto_nombre ||
        item?.nombre ||
        "Producto";

    const producto =
        productosGestion.find(
            (productoActual) =>
                Number(productoActual.id) ===
                Number(item?.producto_id)
        ) ||
        productosGestion.find(
            (productoActual) =>
                String(productoActual.slug || "") ===
                String(item?.producto_slug || "")
        );

    if (
        !producto ||
        !esInspiracionDisenadorGestion(producto) ||
        !producto.disenador_mostrar
    ) {
        return nombreGuardado;
    }

    const disenador =
        producto.disenador_mostrar;

    const nombreNormalizado =
        normalizarBusquedaProducto(
            nombreGuardado
        );

    const disenadorNormalizado =
        normalizarBusquedaProducto(
            disenador
        );

    if (
        nombreNormalizado.startsWith(
            disenadorNormalizado
        )
    ) {
        return nombreGuardado;
    }

    return `${disenador} ${nombreGuardado}`;
}


function abrirVentanaComprobanteGestion({
    tipo,
    numero,
    fecha,
    cliente,
    items,
    subtotalAntesGeneral,
    descuentoGeneralTipo,
    descuentoGeneralValor,
    descuentoGeneralMonto,
    total,
    pagos = [],
    pagado = 0,
    pendiente = 0,
    estadoPago = "",
    observaciones = "",
    anulado = false
}) {

    const ventana =
        window.open(
            "",
            "_blank",
            "width=1050,height=800"
        );

    if (!ventana) {
        window.alert(
            "El navegador bloqueó la ventana del comprobante. Permití las ventanas emergentes para Gestión e intentá de nuevo."
        );
        return;
    }

    const logoComprobanteUrl =
        new URL(
            "../images/742EDEF7-08B5-4219-BC81-C48021D60480.PNG",
            window.location.href
        ).href;


    const esVenta =
        tipo === "venta";

    const tituloDocumento =
        esVenta
            ? "DETALLE DE COMPRA"
            : "PRESUPUESTO";

    const numeroTexto =
        formatearNumeroComprobanteGestion(
            numero
        );

    const itemsDocumento =
        Array.isArray(items)
            ? items
            : [];

    const subtotalOriginal =
        obtenerSubtotalOriginalComprobanteGestion(
            itemsDocumento
        );

    const descuentoProductos =
        Math.max(
            0,
            subtotalOriginal -
            Number(subtotalAntesGeneral || 0)
        );

    const descuentoGeneral =
        Number(descuentoGeneralMonto) || 0;

    let textoDescuentoGeneral =
        formatearPrecio(
            descuentoGeneral
        );

    if (
        descuentoGeneral > 0 &&
        descuentoGeneralTipo === "porcentaje"
    ) {
        textoDescuentoGeneral =
            `${Number(descuentoGeneralValor) || 0}% · ${formatearPrecio(descuentoGeneral)}`;
    }

    const filasItems =
        itemsDocumento
            .map(
                (item) => {
                    const precioOriginal =
                        Number(
                            item?.precio_unitario_original ??
                            item?.precio_unitario
                        ) || 0;

                    const cantidad =
                        Number(item?.cantidad) || 0;

                    const subtotal =
                        Number(item?.subtotal) ||
                        (
                            cantidad *
                            (Number(item?.precio_unitario) || 0)
                        );

                    return `
                        <tr>
                            <td class="producto">
                                ${escaparHTML(
                                    obtenerNombreProductoComprobanteGestion(
                                        item
                                    )
                                )}
                            </td>
                            <td class="centrado">
                                ${cantidad}
                            </td>
                            <td class="derecha">
                                ${formatearPrecio(
                                    precioOriginal
                                )}
                            </td>
                            <td class="derecha">
                                ${escaparHTML(
                                    obtenerDescuentoItemComprobanteGestion(
                                        item
                                    )
                                )}
                            </td>
                            <td class="derecha">
                                ${formatearPrecio(
                                    subtotal
                                )}
                            </td>
                        </tr>
                    `;
                }
            )
            .join("");

    const pagosValidos =
        (Array.isArray(pagos) ? pagos : [])
            .filter(
                (pago) =>
                    pago?.anulado !== true
            );

    const bloquePagos =
        esVenta
            ? `
                <section class="pagos">
                    <h3>Estado del pago</h3>

                    <div class="estado-pago ${Number(pendiente) > 0 ? "pendiente" : "cobrado"}">
                        ${escaparHTML(
                            estadoPago ||
                            (
                                Number(pendiente) > 0
                                    ? "Pendiente"
                                    : "Cobrado"
                            )
                        )}
                    </div>

                    ${
                        pagosValidos.length > 0
                            ? `
                                <div class="pagos-lista">
                                    ${pagosValidos
                                        .map(
                                            (pago) => `
                                                <div class="pago-fila">
                                                    <span>
                                                        ${escaparHTML(
                                                            pago?.metodo_pago ||
                                                            "Sin medio"
                                                        )}
                                                    </span>
                                                    <span>
                                                        ${escaparHTML(
                                                            formatearFechaComprobanteGestion(
                                                                pago?.created_at
                                                            )
                                                        )}
                                                    </span>
                                                    <strong>
                                                        ${formatearPrecio(
                                                            pago?.monto
                                                        )}
                                                    </strong>
                                                </div>
                                            `
                                        )
                                        .join("")}
                                </div>
                            `
                            : `
                                <p class="sin-pagos">
                                    No hay pagos registrados.
                                </p>
                            `
                    }

                    <div class="pago-resumen">
                        <div>
                            <span>Total pagado</span>
                            <strong>${formatearPrecio(pagado)}</strong>
                        </div>
                        <div>
                            <span>Total adeudado</span>
                            <strong>${formatearPrecio(pendiente)}</strong>
                        </div>
                    </div>
                </section>
            `
            : "";

    const html = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${tituloDocumento} #${numeroTexto} · VO IMPORT</title>

            <style>
                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    padding: 26px;
                    background: #eeeeee;
                    color: #111111;
                    font-family: Arial, Helvetica, sans-serif;
                }

                .acciones-comprobante {
                    max-width: 1000px;
                    margin: 0 auto 14px;
                    display: flex;
                    justify-content: flex-end;
                    gap: 10px;
                }

                .acciones-comprobante button {
                    padding: 11px 17px;
                    border: 1px solid #b7962f;
                    border-radius: 8px;
                    background: #111111;
                    color: #d4af37;
                    font-weight: 700;
                    cursor: pointer;
                }

                .hoja {
                    width: 100%;
                    max-width: 1000px;
                    min-height: 500px;
                    margin: 0 auto;
                    padding: 24px;
                    background: #ffffff;
                    border: 1px solid #bdbdbd;
                }

                .original {
                    padding-bottom: 9px;
                    border-bottom: 2px solid #111111;
                    text-align: center;
                    font-size: 13px;
                    font-weight: 800;
                    letter-spacing: 2px;
                }

                .cabecera {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    border-left: 1px solid #111111;
                    border-right: 1px solid #111111;
                    border-bottom: 1px solid #111111;
                }

                .empresa,
.documento {
    padding: 8px 18px;
}

.empresa,
.documento {
    padding: 3px 14px;
}

.empresa {
    border-right: 1px solid #111111;
}

.logo-comprobante {
    display: block;
    width: auto;
    max-width: 360px;
    max-height: 140px;
    margin: -4px auto -2px;
    object-fit: contain;
    object-position: center;
}

.empresa p {
    margin: 1px 0;
    font-size: 13px;
    line-height: 1.2;
}

.documento {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.documento p {
    margin: 3px 0;
    font-size: 13px;
    line-height: 1.2;
}

.documento h1 {
    margin: 0 0 8px;
    font-size: 23px;
    text-align: center;
}

                .cliente {
                    margin-top: 9px;
                    padding: 9px 12px;
                    border: 1px solid #111111;
                    font-size: 13px;
                }

                table {
                    width: 100%;
                    margin-top: 10px;
                    border-collapse: collapse;
                    table-layout: fixed;
                }

                th,
                td {
                    padding: 8px 7px;
                    border: 1px solid #777777;
                    font-size: 12px;
                    vertical-align: top;
                }

                th {
                    background: #e3e3e3;
                    text-align: center;
                }

                th:nth-child(1) {
                    width: 44%;
                }

                th:nth-child(2) {
                    width: 9%;
                }

                th:nth-child(3),
                th:nth-child(4),
                th:nth-child(5) {
                    width: 15.66%;
                }

                .producto {
                    font-weight: 600;
                }

                .centrado {
                    text-align: center;
                }

                .derecha {
                    text-align: right;
                }

                .totales {
                    margin-top: 12px;
                    display: grid;
                    grid-template-columns: minmax(0, 1fr) 340px;
                    gap: 20px;
                    align-items: start;
                }

                .aviso {
                    padding: 12px;
                    border: 1px solid #111111;
                    font-size: 13px;
                    font-weight: 700;
                }

                .totales-cuadro {
                    border: 1px solid #111111;
                }

                .total-fila {
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                    padding: 8px 10px;
                    border-bottom: 1px solid #dddddd;
                    font-size: 13px;
                }

                .total-fila:last-child {
                    border-bottom: none;
                }

                .total-fila.final {
                    background: #eeeeee;
                    font-size: 16px;
                    font-weight: 800;
                }

                .pagos {
                    margin-top: 14px;
                    padding: 14px;
                    border: 1px solid #111111;
                }

                .pagos h3 {
                    margin: 0 0 10px;
                    font-size: 15px;
                }

                .estado-pago {
                    display: inline-block;
                    margin-bottom: 10px;
                    padding: 5px 9px;
                    border-radius: 999px;
                    background: #e8f4ea;
                    font-size: 12px;
                    font-weight: 800;
                }

                .estado-pago.pendiente {
                    background: #f7e8e8;
                }

                .pagos-lista {
                    border-top: 1px solid #dddddd;
                }

                .pago-fila {
                    display: grid;
                    grid-template-columns: 1fr 1fr auto;
                    gap: 15px;
                    padding: 8px 0;
                    border-bottom: 1px solid #eeeeee;
                    font-size: 12px;
                }

                .pago-resumen {
                    margin-top: 10px;
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }

                .pago-resumen div {
                    display: flex;
                    justify-content: space-between;
                    gap: 14px;
                    padding: 10px;
                    background: #f5f5f5;
                    font-size: 13px;
                }

                .sin-pagos {
                    margin: 8px 0;
                    color: #666666;
                    font-size: 12px;
                }

                .observaciones {
                    margin-top: 14px;
                    padding: 12px;
                    border: 1px solid #cccccc;
                    font-size: 12px;
                    line-height: 1.5;
                }

                .anulado {
                    margin-bottom: 10px;
                    padding: 8px;
                    border: 2px solid #b42318;
                    color: #b42318;
                    text-align: center;
                    font-size: 16px;
                    font-weight: 900;
                    letter-spacing: 1px;
                }

                @page {
                    size: A4;
                    margin: 12mm;
                }

                @media print {
    body {
        padding: 0;
        background: #ffffff;
    }

    .acciones-comprobante {
        display: none !important;
    }

    .hoja {
        width: calc(100% - 2px);
        max-width: none;
        min-height: 0;
        margin: 0;
        padding: 0;
        border: none;
    }
}

                @media (max-width: 700px) {
                    body {
                        padding: 10px;
                    }

                    .cabecera {
                        grid-template-columns: 1fr;
                    }

                    .empresa {
                        border-right: none;
                        border-bottom: 1px solid #111111;
                    }

                    .totales {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
        </head>

        <body>
            <div class="acciones-comprobante">
                <button type="button" onclick="window.print()">
                    Imprimir / Guardar PDF
                </button>

                <button type="button" onclick="window.close()">
                    Cerrar
                </button>
            </div>

            <main class="hoja">
                ${anulado ? `<div class="anulado">DOCUMENTO ANULADO</div>` : ""}

                <div class="original">ORIGINAL</div>

                <section class="cabecera">
                    <div class="empresa">
                        <img
                            class="logo-comprobante"
                            src="${logoComprobanteUrl}"
                            alt="VO Import"
                        >
                        <p><b>Razón social:</b> Vo Import</p>
                        <p><b>Domicilio comercial:</b> América 3249, Villa Luzuriaga, Buenos Aires, Argentina</p>
                    </div>

                    <div class="documento">
                        <h1>${tituloDocumento} #${numeroTexto}</h1>
                        <p>
                            <b>Fecha de emisión:</b>
                            ${escaparHTML(
                                formatearFechaComprobanteGestion(
                                    fecha
                                )
                            )}
                        </p>
                    </div>
                </section>

                <div class="cliente">
                    <b>Apellido y nombre / Razón social:</b>
                    ${escaparHTML(cliente || "General")}
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio unitario</th>
                            <th>Desc. unitario</th>
                            <th>Subtotal final</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${filasItems}
                    </tbody>
                </table>

                <section class="totales">
                    <div class="aviso">
                        Documento no válido como factura.
                    </div>

                    <div class="totales-cuadro">
                        <div class="total-fila">
                            <span>Importe bruto</span>
                            <strong>${formatearPrecio(subtotalOriginal)}</strong>
                        </div>

                        <div class="total-fila">
                            <span>Descuentos por producto</span>
                            <strong>-${formatearPrecio(descuentoProductos)}</strong>
                        </div>

                        <div class="total-fila">
                            <span>Subtotal</span>
                            <strong>${formatearPrecio(subtotalAntesGeneral)}</strong>
                        </div>

                        <div class="total-fila">
                            <span>Descuento general</span>
                            <strong>${escaparHTML(textoDescuentoGeneral)}</strong>
                        </div>

                        <div class="total-fila final">
                            <span>Total</span>
                            <strong>${formatearPrecio(total)}</strong>
                        </div>
                    </div>
                </section>

                ${bloquePagos}

                ${
                    observaciones
                        ? `
                            <div class="observaciones">
                                <b>Observaciones:</b>
                                ${escaparHTML(observaciones)}
                            </div>
                        `
                        : ""
                }
            </main>
        </body>
        </html>
    `;

    ventana.document.open();
    ventana.document.write(html);
    ventana.document.close();
    ventana.focus();
}


function imprimirVentaGestion(ventaId) {
    const venta =
        movimientosGestion.find(
            (item) =>
                Number(item.id) ===
                Number(ventaId)
        );

    if (!venta) {
        window.alert(
            "No se encontró la venta."
        );
        return;
    }

    const estadoPago =
        venta.anulada === true
            ? "Anulada"
            : obtenerEstadoCobroMovimiento(
                venta
            );

    abrirVentanaComprobanteGestion({
        tipo: "venta",
        numero:
            venta.numero_visible ||
            venta.id,
        fecha:
            venta.fecha_emision ||
            venta.created_at,
        cliente:
            obtenerClienteComprobanteGestion(
                venta.cliente_id
            ),
        items:
            venta.items || [],
        subtotalAntesGeneral:
            obtenerSubtotalPostDescuentosItemGestion(
                venta
            ),
        descuentoGeneralTipo:
            venta.descuento_general_tipo,
        descuentoGeneralValor:
            venta.descuento_general_valor,
        descuentoGeneralMonto:
            venta.descuento_general_monto,
        total:
            Number(venta.total) || 0,
        pagos:
            venta.pagos || [],
        pagado:
            Number(venta.pagado) || 0,
        pendiente:
            Number(venta.pendiente) || 0,
        estadoPago,
        observaciones:
            venta.observaciones || "",
        anulado:
            venta.anulada === true
    });
}


function imprimirPresupuestoGestion(presupuestoId) {
    const presupuesto =
        presupuestosGestion.find(
            (item) =>
                Number(item.id) ===
                Number(presupuestoId)
        );

    if (!presupuesto) {
        window.alert(
            "No se encontró el presupuesto."
        );
        return;
    }

    abrirVentanaComprobanteGestion({
        tipo: "presupuesto",
        numero:
            presupuesto.numero_visible ||
            presupuesto.id,
        fecha:
            presupuesto.created_at,
        cliente:
            obtenerClienteComprobanteGestion(
                presupuesto.cliente_id
            ),
        items:
            presupuesto.items || [],
        subtotalAntesGeneral:
            obtenerSubtotalPostDescuentosItemGestion(
                presupuesto
            ),
        descuentoGeneralTipo:
            presupuesto.descuento_general_tipo,
        descuentoGeneralValor:
            presupuesto.descuento_general_valor,
        descuentoGeneralMonto:
            presupuesto.descuento_general_monto,
        total:
            Number(presupuesto.total) || 0,
        observaciones:
            presupuesto.observaciones || "",
        anulado:
            presupuesto.estado === "cancelado"
    });
}


function agregarBotonesComprobanteMovimientosGestion() {
    movimientosLista
        ?.querySelectorAll(
            ".movimiento-menu-panel"
        )
        .forEach(
            (menu) => {
                if (
                    menu.querySelector(
                        ".imprimir-comprobante-venta"
                    )
                ) {
                    return;
                }

                const ventaId =
                    Number(
                        menu.dataset.menuVenta
                    );

                const venta =
                    movimientosGestion.find(
                        (item) =>
                            Number(item.id) ===
                            ventaId
                    );

                if (
                    !venta ||
                    venta.anulada === true
                ) {
                    return;
                }

                const boton =
                    document.createElement(
                        "button"
                    );

                boton.type = "button";
                boton.className =
                    "imprimir-comprobante-venta";
                boton.dataset.ventaId =
                    String(ventaId);
                boton.textContent =
                    "Imprimir / PDF";

                const botonEditar =
                    menu.querySelector(
                        '[data-accion-movimiento="editar"]'
                    );

                if (botonEditar) {
                    menu.insertBefore(
                        boton,
                        botonEditar
                    );
                } else {
                    menu.appendChild(
                        boton
                    );
                }
            }
        );
}


function agregarBotonesComprobantePresupuestosGestion() {
    presupuestosListaGestion
        ?.querySelectorAll(
            ".presupuesto-card"
        )
        .forEach(
            (card) => {
                if (
                    card.querySelector(
                        ".imprimir-comprobante-presupuesto"
                    )
                ) {
                    return;
                }

                const botonReferencia =
                    card.querySelector(
                        "[data-presupuesto-id]"
                    );

                if (!botonReferencia) {
                    return;
                }

                const presupuestoId =
                    Number(
                        botonReferencia.dataset.presupuestoId
                    );

                const presupuesto =
                    presupuestosGestion.find(
                        (item) =>
                            Number(item.id) ===
                            presupuestoId
                    );

                if (
                    !presupuesto ||
                    presupuesto.estado === "cancelado"
                ) {
                    return;
                }

                let acciones =
                    card.querySelector(
                        ".presupuesto-acciones"
                    );

                if (!acciones) {
                    acciones =
                        document.createElement(
                            "div"
                        );

                    acciones.className =
                        "presupuesto-acciones";

                    card.appendChild(
                        acciones
                    );
                }

                const boton =
                    document.createElement(
                        "button"
                    );

                boton.type = "button";
                boton.className =
                    "imprimir-comprobante-presupuesto";
                boton.dataset.presupuestoId =
                    String(presupuestoId);
                boton.textContent =
                    "Imprimir / PDF";

                acciones.insertBefore(
                    boton,
                    acciones.firstChild
                );
            }
        );
}


const renderizarMovimientosAntesComprobantesGestion =
    renderizarMovimientos;

renderizarMovimientos = function () {
    renderizarMovimientosAntesComprobantesGestion();
    agregarBotonesComprobanteMovimientosGestion();
};


const renderizarPresupuestosAntesComprobantesGestion =
    renderizarPresupuestosGestion;

renderizarPresupuestosGestion = function () {
    renderizarPresupuestosAntesComprobantesGestion();
    agregarBotonesComprobantePresupuestosGestion();
};


movimientosLista?.addEventListener(
    "click",
    (evento) => {
        const boton =
            evento.target.closest(
                ".imprimir-comprobante-venta"
            );

        if (!boton) {
            return;
        }

        evento.preventDefault();
        evento.stopPropagation();

        cerrarMenusMovimientosGestion();

        imprimirVentaGestion(
            Number(
                boton.dataset.ventaId
            )
        );
    }
);


presupuestosListaGestion?.addEventListener(
    "click",
    (evento) => {
        const boton =
            evento.target.closest(
                ".imprimir-comprobante-presupuesto"
            );

        if (!boton) {
            return;
        }

        evento.preventDefault();
        evento.stopPropagation();

        imprimirPresupuestoGestion(
            Number(
                boton.dataset.presupuestoId
            )
        );
    }
);



// =========================================================
// PEDIDOS WEB - GESTIÓN
// =========================================================

let pedidosWebGestion = [];
let pedidoWebConfirmandoIdGestion = null;


// =========================================================
// BOTÓN EN ACCIONES RÁPIDAS
// =========================================================

const accionesPedidosWebGestion =
    document.querySelector(".acciones");

let botonPedidosWebGestion =
    document.getElementById("ver-pedidos-web");

if (
    accionesPedidosWebGestion &&
    !botonPedidosWebGestion
) {
    botonPedidosWebGestion =
        document.createElement("button");

    botonPedidosWebGestion.type = "button";
    botonPedidosWebGestion.id = "ver-pedidos-web";
    botonPedidosWebGestion.textContent = "Pedidos web";

    if (
        typeof botonVerPresupuestosGestion !== "undefined" &&
        botonVerPresupuestosGestion
    ) {
        botonVerPresupuestosGestion.insertAdjacentElement(
            "afterend",
            botonPedidosWebGestion
        );
    } else {
        accionesPedidosWebGestion.appendChild(
            botonPedidosWebGestion
        );
    }
}


// =========================================================
// SECCIÓN PEDIDOS WEB
// =========================================================

let seccionPedidosWebGestion =
    document.getElementById("seccion-pedidos-web");

if (!seccionPedidosWebGestion) {
    seccionPedidosWebGestion =
        document.createElement("section");

    seccionPedidosWebGestion.id =
        "seccion-pedidos-web";

    seccionPedidosWebGestion.className =
        "seccion-pedidos-web oculto";

    seccionPedidosWebGestion.innerHTML = `
        <div class="pedidos-web-encabezado">
            <div>
                <h2>Pedidos web</h2>
                <p>
                    Pedidos pendientes de pago recibidos desde la tienda online.
                </p>
            </div>

            <button
                type="button"
                id="cerrar-pedidos-web"
                class="cerrar-pedidos-web"
            >
                Cerrar
            </button>
        </div>

        <p
            class="venta-mensaje"
            id="mensaje-pedidos-web"
        ></p>

        <div
            id="pedidos-web-lista"
            class="pedidos-web-lista"
        >
            <p class="pedidos-web-vacios">
                Cargando pedidos...
            </p>
        </div>
    `;

    document
        .querySelector("main")
        ?.appendChild(seccionPedidosWebGestion);
}

const botonCerrarPedidosWebGestion =
    document.getElementById("cerrar-pedidos-web");

const pedidosWebListaGestion =
    document.getElementById("pedidos-web-lista");

const mensajePedidosWebGestion =
    document.getElementById("mensaje-pedidos-web");


// =========================================================
// MODAL CONFIRMAR PEDIDO
// =========================================================

let modalConfirmarPedidoWebGestion =
    document.getElementById("modal-confirmar-pedido-web");

if (!modalConfirmarPedidoWebGestion) {
    modalConfirmarPedidoWebGestion =
        document.createElement("div");

    modalConfirmarPedidoWebGestion.id =
        "modal-confirmar-pedido-web";

    modalConfirmarPedidoWebGestion.className =
        "modal-pedido-web oculto";

    modalConfirmarPedidoWebGestion.innerHTML = `
        <div class="modal-pedido-web-contenido">

            <div class="modal-pedido-web-encabezado">
                <div>
                    <h3>Confirmar pedido</h3>
                    <p id="confirmar-pedido-web-info"></p>
                </div>

                <button
                    type="button"
                    id="cerrar-confirmar-pedido-web"
                    aria-label="Cerrar"
                >
                    ×
                </button>
            </div>

            <div class="campo">
                <label for="confirmar-pedido-web-metodo">
                    Medio de pago
                </label>

                <select id="confirmar-pedido-web-metodo">
                    <option value="">Seleccionar</option>
                    <option value="Efectivo">Efectivo</option>
                    <option value="Transferencia">Transferencia</option>
                    <option value="Mercado Pago">Mercado Pago</option>
                    <option value="Tarjeta">Tarjeta</option>
                    <option value="Dólares">Dólares</option>
                    <option value="USDT">USDT</option>
                    <option value="Otro">Otro</option>
                </select>
            </div>

            <div class="campo">
                <label for="confirmar-pedido-web-observaciones">
                    Observaciones
                </label>

                <textarea
                    id="confirmar-pedido-web-observaciones"
                    rows="3"
                    placeholder="Opcional"
                ></textarea>
            </div>

            <p
                class="venta-mensaje"
                id="mensaje-confirmar-pedido-web"
            ></p>

            <div class="modal-pedido-web-acciones">
                <button
                    type="button"
                    id="cancelar-confirmacion-pedido-web"
                    class="pedido-web-boton-secundario"
                >
                    Volver
                </button>

                <button
                    type="button"
                    id="confirmar-pedido-web-final"
                    class="pedido-web-boton-confirmar"
                >
                    Confirmar pago y venta
                </button>
            </div>

        </div>
    `;

    document.body.appendChild(
        modalConfirmarPedidoWebGestion
    );
}

const confirmarPedidoWebInfoGestion =
    document.getElementById(
        "confirmar-pedido-web-info"
    );

const confirmarPedidoWebMetodoGestion =
    document.getElementById(
        "confirmar-pedido-web-metodo"
    );

const confirmarPedidoWebObservacionesGestion =
    document.getElementById(
        "confirmar-pedido-web-observaciones"
    );

const mensajeConfirmarPedidoWebGestion =
    document.getElementById(
        "mensaje-confirmar-pedido-web"
    );

const botonCerrarConfirmarPedidoWebGestion =
    document.getElementById(
        "cerrar-confirmar-pedido-web"
    );

const botonCancelarConfirmacionPedidoWebGestion =
    document.getElementById(
        "cancelar-confirmacion-pedido-web"
    );

const botonConfirmarPedidoWebFinalGestion =
    document.getElementById(
        "confirmar-pedido-web-final"
    );


// =========================================================
// FECHA PEDIDO
// =========================================================

function formatearFechaPedidoWebGestion(fecha) {
    if (!fecha) {
        return "";
    }

    const valor = new Date(fecha);

    if (Number.isNaN(valor.getTime())) {
        return "";
    }

    return valor.toLocaleString(
        "es-AR",
        {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit"
        }
    );
}


// =========================================================
// WHATSAPP CLIENTE - PEDIDO WEB
// =========================================================

function normalizarWhatsappPedidoWebGestion(
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


    if (
        numero.length === 11 &&
        numero.startsWith("9")
    ) {
        numero =
            numero.slice(1);
    }


    if (
        numero.startsWith("0")
    ) {
        numero =
            numero.slice(1);
    }


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


    if (
        numero.length === 11 &&
        numero.startsWith("9")
    ) {
        numero =
            numero.slice(1);
    }


    if (
        numero.length === 10 &&
        numero.startsWith("15")
    ) {
        return "";
    }


    return numero;

}


function obtenerEnlaceWhatsappPedidoWebGestion(
    pedido
) {

    const telefono =
        normalizarWhatsappPedidoWebGestion(
            pedido?.cliente_telefono
        );


    if (
        telefono.length !==
        10
    ) {
        return "";
    }


    const nombre =
        String(
            pedido?.cliente_nombre || ""
        )
            .trim();


    const codigo =
        String(
            pedido?.codigo ||
            `Pedido #${pedido?.pedido_id || ""}`
        )
            .trim();


    const saludo =
        nombre
            ? `Hola ${nombre}, te escribo de VO IMPORT por tu pedido ${codigo}.`
            : `Hola, te escribo de VO IMPORT por tu pedido ${codigo}.`;


    return (
        `https://wa.me/549${telefono}` +
        `?text=${encodeURIComponent(saludo)}`
    );

}


// =========================================================
// RENDER PEDIDOS
// =========================================================

function renderizarPedidosWebGestion() {
    if (!pedidosWebListaGestion) {
        return;
    }

    if (pedidosWebGestion.length === 0) {
        pedidosWebListaGestion.innerHTML = `
            <div class="pedidos-web-vacios">
                <strong>No hay pedidos pendientes.</strong>
                <span>Cuando entre un pedido nuevo desde la web va a aparecer acá.</span>
            </div>
        `;

        return;
    }

    pedidosWebListaGestion.innerHTML =
        pedidosWebGestion
            .map(
                (pedido) => {
                    const items =
                        Array.isArray(pedido.items)
                            ? pedido.items
                            : [];

                    const cantidadTotal =
                        items.reduce(
                            (total, item) =>
                                total +
                                (Number(item.cantidad) || 0),
                            0
                        );

                    const itemsHTML =
                        items
                            .map(
                                (item) => `
                                    <div class="pedido-web-item">
                                        <div>
                                            <strong>
                                                ${escaparHTML(item.nombre || item.slug || "Producto")}
                                            </strong>
                                            <span>
                                                ${Number(item.cantidad) || 0} u ·
                                                ${escaparHTML(item.tipo_precio || "")}
                                            </span>
                                        </div>

                                        <span>
                                            ${formatearPrecio(Number(item.subtotal) || 0)}
                                        </span>
                                    </div>
                                `
                            )
                            .join("");

                    const reservado =
                        pedido.reservado === true;

                    const clienteNombre =
                        [
                            pedido.cliente_nombre,
                            pedido.cliente_apellido
                        ]
                            .filter(Boolean)
                            .join(" ")
                            .trim();

                    const clienteTelefono =
                        String(
                            pedido.cliente_telefono || ""
                        )
                            .trim();

                    const clienteTelefonoNormalizado =
                        normalizarWhatsappPedidoWebGestion(
                            clienteTelefono
                        );

                    const clienteTelefonoMostrar =
                        clienteTelefonoNormalizado.length === 10
                            ? `+54 ${clienteTelefonoNormalizado}`
                            : clienteTelefono;

                    const enlaceWhatsappCliente =
                        obtenerEnlaceWhatsappPedidoWebGestion(
                            pedido
                        );

                    const clienteHTML =
                        clienteNombre ||
                        clienteTelefono
                            ? `
                                <div class="pedido-web-cliente">
                                    <div class="pedido-web-cliente-datos">
                                        <span>Cliente</span>

                                        <strong>
                                            ${escaparHTML(
                                                clienteNombre ||
                                                "Sin nombre"
                                            )}
                                        </strong>

                                        ${
                                            clienteTelefono
                                                ? `
                                                    <small>
                                                        WhatsApp:
                                                        ${escaparHTML(
                                                            clienteTelefonoMostrar
                                                        )}
                                                    </small>
                                                `
                                                : ""
                                        }
                                    </div>

                                    ${
                                        enlaceWhatsappCliente
                                            ? `
                                                <a
                                                    href="${escaparHTML(
                                                        enlaceWhatsappCliente
                                                    )}"
                                                    class="contactar-pedido-web-whatsapp"
                                                    target="_blank"
                                                    rel="noopener"
                                                >
                                                    Contactar por WhatsApp
                                                </a>
                                            `
                                            : ""
                                    }
                                </div>
                            `
                            : `
                                <div class="pedido-web-cliente pedido-web-cliente-sin-datos">
                                    <div class="pedido-web-cliente-datos">
                                        <span>Cliente</span>

                                        <strong>
                                            Sin identificar
                                        </strong>

                                        <small>
                                            Pedido creado antes de solicitar datos del cliente.
                                        </small>
                                    </div>
                                </div>
                            `;

                    return `
                        <article
                            class="pedido-web-card"
                            data-pedido-id="${pedido.pedido_id}"
                        >
                            <div class="pedido-web-card-cabecera">
                                <div>
                                    <div class="pedido-web-titulo-linea">
                                        <h3>
                                            ${escaparHTML(pedido.codigo || `Pedido #${pedido.pedido_id}`)}
                                        </h3>

                                        <span class="pedido-web-estado">
                                            Pendiente
                                        </span>
                                    </div>

                                    <span class="pedido-web-fecha">
                                        ${formatearFechaPedidoWebGestion(pedido.created_at)}
                                    </span>
                                </div>

                                <strong>
                                    ${formatearPrecio(Number(pedido.total) || 0)}
                                </strong>
                            </div>

                            <div class="pedido-web-reserva ${reservado ? "pedido-web-reservado" : "pedido-web-sin-reserva"}">
                                ${
                                    reservado
                                        ? "✓ Stock reservado"
                                        : "Pedido anterior: el stock se descontará al confirmar"
                                }
                            </div>

                            ${clienteHTML}

                            <div class="pedido-web-items">
                                ${itemsHTML}
                            </div>

                            <div class="pedido-web-resumen">
                                <span>
                                    ${cantidadTotal} ${cantidadTotal === 1 ? "unidad" : "unidades"}
                                </span>

                                <strong>
                                    Total: ${formatearPrecio(Number(pedido.total) || 0)}
                                </strong>
                            </div>

                            ${
                                pedido.observaciones
                                    ? `
                                        <p class="pedido-web-observaciones">
                                            <b>Observaciones:</b>
                                            ${escaparHTML(pedido.observaciones)}
                                        </p>
                                    `
                                    : ""
                            }

                            <div class="pedido-web-acciones">
                                <button
                                    type="button"
                                    class="confirmar-pedido-web"
                                    data-pedido-id="${pedido.pedido_id}"
                                >
                                    Confirmar pedido
                                </button>

                                <button
                                    type="button"
                                    class="cancelar-pedido-web"
                                    data-pedido-id="${pedido.pedido_id}"
                                >
                                    Cancelar pedido
                                </button>
                            </div>
                        </article>
                    `;
                }
            )
            .join("");
}


// =========================================================
// CARGAR PEDIDOS
// =========================================================

async function cargarPedidosWebGestion() {
    if (!pedidosWebListaGestion) {
        return [];
    }

    pedidosWebListaGestion.innerHTML = `
        <p class="pedidos-web-vacios">
            Cargando pedidos...
        </p>
    `;

    limpiarMensaje(
        mensajePedidosWebGestion
    );

    const {
        data,
        error
    } =
        await supabaseClient.rpc(
            "obtener_pedidos_web_gestion"
        );

    if (error) {
        console.error(
            "Error al cargar pedidos web:",
            error
        );

        pedidosWebGestion = [];

        pedidosWebListaGestion.innerHTML = `
            <p class="pedidos-web-vacios">
                No se pudieron cargar los pedidos web.
            </p>
        `;

        mostrarMensaje(
            mensajePedidosWebGestion,
            error.message ||
                "No se pudieron cargar los pedidos web."
        );

        return [];
    }

    pedidosWebGestion =
        Array.isArray(data)
            ? data
            : [];

    if (botonPedidosWebGestion) {
        botonPedidosWebGestion.textContent =
            pedidosWebGestion.length > 0
                ? `Pedidos web (${pedidosWebGestion.length})`
                : "Pedidos web";
    }

    renderizarPedidosWebGestion();

    try {
        if (
            "setAppBadge" in navigator
        ) {
            if (pedidosWebGestion.length > 0) {
                await navigator.setAppBadge(
                    pedidosWebGestion.length
                );
            } else if (
                "clearAppBadge" in navigator
            ) {
                await navigator.clearAppBadge();
            }
        }
    } catch (error) {
        console.warn(
            "No se pudo actualizar el indicador de pedidos:",
            error
        );
    }

    return pedidosWebGestion;
}


// =========================================================
// ABRIR / CERRAR SECCIÓN
// =========================================================

async function abrirPedidosWebGestion() {
    cerrarSeccionesGestion();

    seccionPedidosWebGestion
        ?.classList.remove("oculto");

    await cargarPedidosWebGestion();

    setTimeout(
        () => {
            seccionPedidosWebGestion
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
        },
        50
    );
}

const cerrarSeccionesGestionAntesPedidosWeb =
    cerrarSeccionesGestion;

cerrarSeccionesGestion = function () {
    cerrarSeccionesGestionAntesPedidosWeb();

    seccionPedidosWebGestion
        ?.classList.add("oculto");
};


// =========================================================
// MODAL CONFIRMACIÓN
// =========================================================

function cerrarConfirmarPedidoWebGestion() {
    pedidoWebConfirmandoIdGestion = null;

    modalConfirmarPedidoWebGestion
        ?.classList.add("oculto");

    if (confirmarPedidoWebMetodoGestion) {
        confirmarPedidoWebMetodoGestion.value = "";
    }

    if (confirmarPedidoWebObservacionesGestion) {
        confirmarPedidoWebObservacionesGestion.value = "";
    }

    limpiarMensaje(
        mensajeConfirmarPedidoWebGestion
    );
}

function abrirConfirmarPedidoWebGestion(
    pedidoId
) {
    const pedido =
        pedidosWebGestion.find(
            (item) =>
                Number(item.pedido_id) ===
                Number(pedidoId)
        );

    if (!pedido) {
        return;
    }

    pedidoWebConfirmandoIdGestion =
        Number(pedidoId);

    if (confirmarPedidoWebInfoGestion) {

        const clienteNombre =
            [
                pedido.cliente_nombre,
                pedido.cliente_apellido
            ]
                .filter(Boolean)
                .join(" ")
                .trim();

        confirmarPedidoWebInfoGestion.textContent =
            `${pedido.codigo} · ${formatearPrecio(Number(pedido.total) || 0)}` +
            (
                clienteNombre
                    ? ` · ${clienteNombre}`
                    : ""
            );
    }

    if (confirmarPedidoWebMetodoGestion) {
        confirmarPedidoWebMetodoGestion.value = "";
    }

    if (confirmarPedidoWebObservacionesGestion) {
        confirmarPedidoWebObservacionesGestion.value = "";
    }

    limpiarMensaje(
        mensajeConfirmarPedidoWebGestion
    );

    modalConfirmarPedidoWebGestion
        ?.classList.remove("oculto");
}


// =========================================================
// CONFIRMAR PEDIDO
// =========================================================

async function confirmarPedidoWebGestion() {
    if (!pedidoWebConfirmandoIdGestion) {
        return;
    }

    const metodoPago =
        confirmarPedidoWebMetodoGestion
            ?.value
            ?.trim() || "";

    if (!metodoPago) {
        mostrarMensaje(
            mensajeConfirmarPedidoWebGestion,
            "Elegí el medio de pago."
        );

        return;
    }

    botonConfirmarPedidoWebFinalGestion.disabled =
        true;

    botonConfirmarPedidoWebFinalGestion.textContent =
        "Confirmando...";

    try {
        const {
            data,
            error
        } =
            await supabaseClient.rpc(
                "confirmar_pedido_web",
                {
                    p_pedido_id:
                        pedidoWebConfirmandoIdGestion,

                    p_metodo_pago:
                        metodoPago,

                    p_observaciones:
                        confirmarPedidoWebObservacionesGestion
                            ?.value
                            ?.trim() || null
                }
            );

        if (error) {
            console.error(
                "Error al confirmar pedido web:",
                error
            );

            mostrarMensaje(
                mensajeConfirmarPedidoWebGestion,
                error.message ||
                    "No se pudo confirmar el pedido."
            );

            return;
        }

        cerrarConfirmarPedidoWebGestion();

        await cargarProductosGestion();
        renderizarStock();
        await actualizarResumenGeneral();
        await cargarPedidosWebGestion();

        mostrarMensaje(
            mensajePedidosWebGestion,
            `Pedido confirmado. Venta #${data} registrada y cobrada.`,
            "exito"
        );

    } catch (error) {
        console.error(error);

        mostrarMensaje(
            mensajeConfirmarPedidoWebGestion,
            "No se pudo confirmar el pedido."
        );

    } finally {
        botonConfirmarPedidoWebFinalGestion.disabled =
            false;

        botonConfirmarPedidoWebFinalGestion.textContent =
            "Confirmar pago y venta";
    }
}


// =========================================================
// CANCELAR PEDIDO
// =========================================================

async function cancelarPedidoWebGestion(
    pedidoId,
    boton
) {
    const pedido =
        pedidosWebGestion.find(
            (item) =>
                Number(item.pedido_id) ===
                Number(pedidoId)
        );

    if (!pedido) {
        return;
    }

    const aceptar =
        window.confirm(
            `¿Seguro que querés cancelar ${pedido.codigo}?\n\nSi tiene stock reservado, las unidades volverán automáticamente al stock.`
        );

    if (!aceptar) {
        return;
    }

    const motivo =
        window.prompt(
            "Motivo de cancelación (opcional):",
            ""
        );

    if (motivo === null) {
        return;
    }

    if (boton) {
        boton.disabled = true;
        boton.textContent = "Cancelando...";
    }

    try {
        const {
            error
        } =
            await supabaseClient.rpc(
                "cancelar_pedido_web",
                {
                    p_pedido_id:
                        Number(pedidoId),

                    p_motivo:
                        motivo.trim() || null
                }
            );

        if (error) {
            console.error(
                "Error al cancelar pedido web:",
                error
            );

            mostrarMensaje(
                mensajePedidosWebGestion,
                error.message ||
                    "No se pudo cancelar el pedido."
            );

            return;
        }

        await cargarProductosGestion();
        renderizarStock();
        await actualizarResumenGeneral();
        await cargarPedidosWebGestion();

        mostrarMensaje(
            mensajePedidosWebGestion,
            `${pedido.codigo} cancelado correctamente.`,
            "exito"
        );

    } catch (error) {
        console.error(error);

        mostrarMensaje(
            mensajePedidosWebGestion,
            "No se pudo cancelar el pedido."
        );

    } finally {
        if (boton) {
            boton.disabled = false;
            boton.textContent = "Cancelar pedido";
        }
    }
}


// =========================================================
// EVENTOS
// =========================================================

botonPedidosWebGestion
    ?.addEventListener(
        "click",
        abrirPedidosWebGestion
    );

botonCerrarPedidosWebGestion
    ?.addEventListener(
        "click",
        () => {
            seccionPedidosWebGestion
                ?.classList.add("oculto");
        }
    );

pedidosWebListaGestion
    ?.addEventListener(
        "click",
        (evento) => {
            const botonConfirmar =
                evento.target.closest(
                    ".confirmar-pedido-web"
                );

            if (botonConfirmar) {
                abrirConfirmarPedidoWebGestion(
                    Number(
                        botonConfirmar.dataset.pedidoId
                    )
                );

                return;
            }

            const botonCancelar =
                evento.target.closest(
                    ".cancelar-pedido-web"
                );

            if (botonCancelar) {
                cancelarPedidoWebGestion(
                    Number(
                        botonCancelar.dataset.pedidoId
                    ),
                    botonCancelar
                );
            }
        }
    );

botonCerrarConfirmarPedidoWebGestion
    ?.addEventListener(
        "click",
        cerrarConfirmarPedidoWebGestion
    );

botonCancelarConfirmacionPedidoWebGestion
    ?.addEventListener(
        "click",
        cerrarConfirmarPedidoWebGestion
    );

botonConfirmarPedidoWebFinalGestion
    ?.addEventListener(
        "click",
        confirmarPedidoWebGestion
    );

modalConfirmarPedidoWebGestion
    ?.addEventListener(
        "click",
        (evento) => {
            if (
                evento.target ===
                modalConfirmarPedidoWebGestion
            ) {
                cerrarConfirmarPedidoWebGestion();
            }
        }
    );


// =========================================================
// CONTADOR INICIAL
// =========================================================

setTimeout(
    async () => {
        const {
            data: sesionPedidosWebGestion
        } =
            await supabaseClient.auth.getSession();

        if (
            sesionPedidosWebGestion
                ?.session
        ) {
            await cargarPedidosWebGestion();
        }
    },
    600
);


// =========================================================
// MENÚ PRINCIPAL + NAVEGACIÓN POR PANTALLAS
// =========================================================

const menuPrincipalGestion =
    document.querySelector(
        ".gestion-menu-principal"
    );


const botonMenuInicioGestion =
    document.getElementById(
        "menu-inicio"
    );


const idsPantallasGestion = [
    "seccion-venta",
    "seccion-stock",
    "seccion-movimientos",
    "seccion-clientes",
    "seccion-clientes-cobrar",
    "seccion-presupuestos",
    "seccion-pedidos-web",
    "seccion-reposicion",
    "seccion-gastos",
    "seccion-dinero",
    "seccion-cierres-mensuales"
];


let temporizadorSincronizarPantallaGestion = null;


function cerrarDesplegablesMenuGestion() {

    document
        .querySelectorAll(
            ".gestion-menu-item[open]"
        )
        .forEach(
            (item) =>
                item.removeAttribute(
                    "open"
                )
        );

}


function obtenerPantallasGestion() {

    return idsPantallasGestion
        .map(
            (id) =>
                document.getElementById(id)
        )
        .filter(Boolean);

}


function ocultarSeccionesMenuGestion() {

    obtenerPantallasGestion()
        .forEach(
            (seccion) => {

                seccion.classList.add(
                    "oculto"
                );

                seccion.classList.remove(
                    "gestion-pantalla-activa"
                );

            }
        );

}


function irArribaGestion() {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
    });

}


function activarPantallaGestion(
    idSeccion,
    subir = true,
    cerrarMenu = true
) {

    const seccionActiva =
        document.getElementById(
            idSeccion
        );

    if (!seccionActiva) {
        return;
    }


    document.body.classList.add(
        "gestion-vista-interna"
    );


    obtenerPantallasGestion()
        .forEach(
            (seccion) => {

                seccion.classList.toggle(
                    "gestion-pantalla-activa",
                    seccion === seccionActiva
                );

            }
        );


    if (cerrarMenu) {
        cerrarDesplegablesMenuGestion();
    }


    if (subir) {
        requestAnimationFrame(
            irArribaGestion
        );
    }

}


function mostrarInicioGestion(
    subir = true,
    cerrarMenu = true
) {

    document.body.classList.remove(
        "gestion-vista-interna"
    );


    obtenerPantallasGestion()
        .forEach(
            (seccion) =>
                seccion.classList.remove(
                    "gestion-pantalla-activa"
                )
        );


    if (cerrarMenu) {
        cerrarDesplegablesMenuGestion();
    }


    if (subir) {
        requestAnimationFrame(
            irArribaGestion
        );
    }

}


function sincronizarPantallaGestion() {

    clearTimeout(
        temporizadorSincronizarPantallaGestion
    );


    temporizadorSincronizarPantallaGestion =
        setTimeout(
            () => {

                const pantallasVisibles =
                    obtenerPantallasGestion()
                        .filter(
                            (seccion) =>
                                !seccion.classList.contains(
                                    "oculto"
                                )
                        );


                const ultimaPantallaVisible =
                    pantallasVisibles[
                        pantallasVisibles.length - 1
                    ];


                if (ultimaPantallaVisible) {

                    activarPantallaGestion(
                        ultimaPantallaVisible.id,
                        false,
                        false
                    );

                } else {

                    mostrarInicioGestion(
                        false,
                        false
                    );

                }

            },
            0
        );

}


// Observamos solamente las secciones principales.
// Así también funcionan las navegaciones internas, por ejemplo
// pasar de Presupuestos al formulario de Crear presupuesto.
const observadorPantallasGestion =
    new MutationObserver(
        sincronizarPantallaGestion
    );


obtenerPantallasGestion()
    .forEach(
        (seccion) => {

            observadorPantallasGestion.observe(
                seccion,
                {
                    attributes: true,
                    attributeFilter: [
                        "class"
                    ]
                }
            );

        }
    );


botonMenuInicioGestion
    ?.addEventListener(
        "click",
        () => {

            // Usamos el cierre general existente porque ya conoce
            // todas las secciones del sistema.
            if (
                typeof cerrarSeccionesGestion ===
                "function"
            ) {
                cerrarSeccionesGestion();
            }


            ocultarSeccionesMenuGestion();

            mostrarInicioGestion();

        }
    );


menuPrincipalGestion
    ?.querySelectorAll(
        ".gestion-menu-accion"
    )
    .forEach(
        (boton) => {

            boton.addEventListener(
                "click",
                () => {

                    cerrarDesplegablesMenuGestion();

                }
            );

        }
    );


// Las acciones rápidas llaman al mismo botón del menú.
document
    .querySelectorAll(
        ".accion-rapida[data-gestion-target]"
    )
    .forEach(
        (boton) => {

            boton.addEventListener(
                "click",
                () => {

                    const idDestino =
                        boton.dataset.gestionTarget;

                    const botonDestino =
                        document.getElementById(
                            idDestino
                        );

                    botonDestino?.click();

                }
            );

        }
    );


// Si una sección se cierra con su propio botón "Cerrar",
// el observador vuelve automáticamente al Inicio.


document.addEventListener(
    "click",
    (evento) => {

        if (
            menuPrincipalGestion &&
            !menuPrincipalGestion.contains(
                evento.target
            )
        ) {

            cerrarDesplegablesMenuGestion();

        }

    }
);


// Estado inicial.
mostrarInicioGestion(false);


// =========================================================
// EDICIÓN MASIVA DE PRODUCTOS
// =========================================================

const botonEdicionMasivaStockGestion =
    document.getElementById("edicion-masiva-stock");

let productosSeleccionadosMasivoGestion =
    new Set();

let modoMayoristaMasivoGestion = null;
let modoMinoristaMasivoGestion = null;


// =========================================================
// CREAR MODAL
// =========================================================

let modalEdicionMasivaGestion =
    document.getElementById("modal-edicion-masiva-gestion");

if (!modalEdicionMasivaGestion) {

    modalEdicionMasivaGestion =
        document.createElement("div");

    modalEdicionMasivaGestion.id =
        "modal-edicion-masiva-gestion";

    modalEdicionMasivaGestion.className =
        "modal-edicion-masiva oculto";

    modalEdicionMasivaGestion.innerHTML = `
        <div class="modal-edicion-masiva-contenido">

            <div class="modal-edicion-masiva-encabezado">
                <div>
                    <h3>Edición masiva</h3>
                    <p>
                        Elegí una categoría y marcá solamente los productos que querés modificar.
                    </p>
                </div>

                <button
                    type="button"
                    id="cerrar-edicion-masiva"
                    aria-label="Cerrar"
                >
                    ×
                </button>
            </div>

            <form id="form-edicion-masiva-gestion">

                <div class="edicion-masiva-bloque">
                    <div class="edicion-masiva-bloque-titulo">
                        <strong>1. Elegí la categoría</strong>
                        <span>Ningún producto se marca automáticamente</span>
                    </div>

                    <div class="campo">
                        <label for="edicion-masiva-categoria">
                            Categoría
                        </label>

                        <select id="edicion-masiva-categoria">
                            <option value="">Seleccionar categoría...</option>
                        </select>
                    </div>
                </div>

                <div
                    class="edicion-masiva-bloque oculto"
                    id="edicion-masiva-seleccion-bloque"
                >
                    <div class="edicion-masiva-bloque-titulo">
                        <strong>2. Seleccioná los productos</strong>
                        <span id="edicion-masiva-contador">0 seleccionados</span>
                    </div>

                    <div class="edicion-masiva-filtros">
                        <input
                            type="search"
                            id="edicion-masiva-buscar"
                            placeholder="Buscar dentro de la categoría..."
                            autocomplete="off"
                        >

                        <div class="edicion-masiva-seleccion-acciones">
                            <button
                                type="button"
                                id="edicion-masiva-marcar-todos"
                            >
                                Marcar todos
                            </button>

                            <button
                                type="button"
                                id="edicion-masiva-desmarcar-todos"
                            >
                                Desmarcar todos
                            </button>
                        </div>
                    </div>

                    <div
                        class="edicion-masiva-productos"
                        id="edicion-masiva-productos"
                    ></div>
                </div>

                <div
                    class="edicion-masiva-bloque oculto"
                    id="edicion-masiva-datos-bloque"
                >
                    <div class="edicion-masiva-bloque-titulo">
                        <strong>3. Datos a aplicar</strong>
                        <span>Los campos vacíos no se modifican</span>
                    </div>

                    <div class="edicion-masiva-aviso">
                        <strong>Importante</strong>
                        <span>
                            Esto sirve para correcciones masivas. Las compras nuevas se siguen cargando desde Registrar reposición.
                        </span>
                    </div>

                    <div class="edicion-masiva-seccion edicion-masiva-seccion-stock">
                        <div class="edicion-masiva-seccion-titulo">
                            <strong>Stock</strong>
                            <span>Opcional</span>
                        </div>

                        <div class="campo">
                            <label for="edicion-masiva-stock-valor">
                                Stock actual
                            </label>

                            <input
                                type="number"
                                id="edicion-masiva-stock-valor"
                                min="0"
                                step="1"
                                placeholder="Dejar vacío para no modificar"
                            >

                            <small>
                                Si ponés 5, todos los productos seleccionados quedarán con stock 5.
                            </small>
                        </div>
                    </div>

                    <div
                        class="edicion-masiva-seccion edicion-masiva-seccion-costo oculto"
                        id="edicion-masiva-costo-manual-bloque"
                    >
                        <div class="edicion-masiva-seccion-titulo">
                            <strong>Costo</strong>
                            <span>Opcional</span>
                        </div>

                        <div class="campo">
                            <label for="edicion-masiva-costo-manual">
                                Costo actual
                            </label>

                            <input
                                type="number"
                                id="edicion-masiva-costo-manual"
                                min="0"
                                step="0.01"
                                placeholder="Dejar vacío para conservar el costo actual"
                            >

                            <small>
                                Si lo completás, el mismo costo se aplicará a todos los productos seleccionados.
                            </small>
                        </div>
                    </div>

                    <div
                        class="edicion-masiva-seccion edicion-masiva-seccion-costo oculto"
                        id="edicion-masiva-costo-usdt-bloque"
                    >
                        <div class="edicion-masiva-seccion-titulo">
                            <strong>Costo en USDT</strong>
                            <span>Opcional · misma lógica que la edición individual</span>
                        </div>

                        <div class="edicion-masiva-usdt-grid">
                            <div class="campo">
                                <label for="edicion-masiva-proveedor-usdt">
                                    Precio proveedor
                                </label>
                                <div class="edicion-masiva-input-unidad">
                                    <input
                                        type="number"
                                        id="edicion-masiva-proveedor-usdt"
                                        min="0"
                                        step="0.01"
                                        placeholder="Ej: 30"
                                    >
                                    <span>USDT</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="edicion-masiva-recargo-usdt">
                                    Recargo
                                </label>
                                <div class="edicion-masiva-input-unidad">
                                    <input
                                        type="number"
                                        id="edicion-masiva-recargo-usdt"
                                        min="0"
                                        step="0.01"
                                        placeholder="Ej: 4"
                                    >
                                    <span>USDT</span>
                                </div>
                            </div>

                            <div class="campo">
                                <label for="edicion-masiva-dolar-costo">
                                    Dólar de costo
                                </label>
                                <div class="edicion-masiva-input-unidad edicion-masiva-input-pesos">
                                    <span>$</span>
                                    <input
                                        type="number"
                                        id="edicion-masiva-dolar-costo"
                                        min="0.01"
                                        step="0.01"
                                        placeholder="Ej: 1600"
                                    >
                                </div>
                            </div>
                        </div>

                        <small class="edicion-masiva-formula">
                            Fórmula: (precio proveedor + recargo) × dólar de costo. Si dejás estos campos vacíos, el costo no cambia.
                        </small>

                        <div class="edicion-masiva-costo-preview">
                            <span>Costo resultante</span>
                            <strong id="edicion-masiva-costo-usdt-preview">—</strong>
                        </div>
                    </div>

                    <div
                        class="edicion-masiva-seccion edicion-masiva-seccion-costo oculto"
                        id="edicion-masiva-costo-decant-bloque"
                    >
                        <div class="edicion-masiva-seccion-titulo">
                            <strong>Costo</strong>
                            <span>Protegido</span>
                        </div>

                        <div class="edicion-masiva-decant-aviso">
                            El costo de cada decant <b>no se modifica masivamente</b>.
                            Sigue calculándose desde su perfume base, tester, ml, insumos y redondeo.
                        </div>
                    </div>

                    <div class="edicion-masiva-precios-separados">

                        <div class="edicion-masiva-seccion edicion-masiva-seccion-precio">
                            <div class="edicion-masiva-seccion-titulo">
                                <strong>Mayorista</strong>
                                <span>Editá margen o precio</span>
                            </div>

                            <div class="campo">
                                <label for="edicion-masiva-markup-mayorista">
                                    Porcentaje sobre costo (%)
                                </label>
                                <input
                                    type="number"
                                    id="edicion-masiva-markup-mayorista"
                                    min="0"
                                    step="0.000001"
                                    placeholder="Ej: 40"
                                >
                            </div>

                            <div class="campo">
                                <label for="edicion-masiva-precio-mayorista">
                                    Precio mayorista
                                </label>
                                <input
                                    type="number"
                                    id="edicion-masiva-precio-mayorista"
                                    min="0"
                                    step="1"
                                    placeholder="Dejar vacío para no modificar"
                                >
                                <small id="edicion-masiva-ayuda-mayorista">
                                    Podés editar margen o precio.
                                </small>
                            </div>
                        </div>

                        <div class="edicion-masiva-seccion edicion-masiva-seccion-precio">
                            <div class="edicion-masiva-seccion-titulo">
                                <strong>Minorista</strong>
                                <span>Editá margen o precio</span>
                            </div>

                            <div class="campo">
                                <label for="edicion-masiva-markup-minorista">
                                    Porcentaje sobre costo (%)
                                </label>
                                <input
                                    type="number"
                                    id="edicion-masiva-markup-minorista"
                                    min="0"
                                    step="0.000001"
                                    placeholder="Ej: 90"
                                >
                            </div>

                            <div class="campo">
                                <label for="edicion-masiva-precio-minorista">
                                    Precio minorista
                                </label>
                                <input
                                    type="number"
                                    id="edicion-masiva-precio-minorista"
                                    min="0"
                                    step="1"
                                    placeholder="Dejar vacío para no modificar"
                                >
                                <small id="edicion-masiva-ayuda-minorista">
                                    Podés editar margen o precio.
                                </small>
                            </div>
                        </div>

                    </div>

                    <p
                        class="venta-mensaje"
                        id="mensaje-edicion-masiva"
                    ></p>

                    <div class="edicion-masiva-botones">
                        <button
                            type="submit"
                            id="guardar-edicion-masiva"
                        >
                            Aplicar a seleccionados
                        </button>

                        <button
                            type="button"
                            id="cancelar-edicion-masiva"
                        >
                            Cancelar
                        </button>
                    </div>
                </div>

            </form>
        </div>
    `;

    document.body.appendChild(
        modalEdicionMasivaGestion
    );
}


// =========================================================
// ELEMENTOS
// =========================================================

const formEdicionMasivaGestion =
    document.getElementById("form-edicion-masiva-gestion");

const categoriaEdicionMasivaGestion =
    document.getElementById("edicion-masiva-categoria");

const seleccionBloqueEdicionMasivaGestion =
    document.getElementById("edicion-masiva-seleccion-bloque");

const datosBloqueEdicionMasivaGestion =
    document.getElementById("edicion-masiva-datos-bloque");

const buscarEdicionMasivaGestion =
    document.getElementById("edicion-masiva-buscar");

const productosEdicionMasivaGestion =
    document.getElementById("edicion-masiva-productos");

const contadorEdicionMasivaGestion =
    document.getElementById("edicion-masiva-contador");

const botonMarcarTodosEdicionMasivaGestion =
    document.getElementById("edicion-masiva-marcar-todos");

const botonDesmarcarTodosEdicionMasivaGestion =
    document.getElementById("edicion-masiva-desmarcar-todos");

const stockEdicionMasivaGestion =
    document.getElementById("edicion-masiva-stock-valor");

const costoManualBloqueEdicionMasivaGestion =
    document.getElementById("edicion-masiva-costo-manual-bloque");

const costoUsdtBloqueEdicionMasivaGestion =
    document.getElementById("edicion-masiva-costo-usdt-bloque");

const costoDecantBloqueEdicionMasivaGestion =
    document.getElementById("edicion-masiva-costo-decant-bloque");

const costoManualEdicionMasivaGestion =
    document.getElementById("edicion-masiva-costo-manual");

const proveedorUsdtEdicionMasivaGestion =
    document.getElementById("edicion-masiva-proveedor-usdt");

const recargoUsdtEdicionMasivaGestion =
    document.getElementById("edicion-masiva-recargo-usdt");

const dolarCostoEdicionMasivaGestion =
    document.getElementById("edicion-masiva-dolar-costo");

const costoUsdtPreviewEdicionMasivaGestion =
    document.getElementById("edicion-masiva-costo-usdt-preview");

const markupMayoristaEdicionMasivaGestion =
    document.getElementById("edicion-masiva-markup-mayorista");

const precioMayoristaEdicionMasivaGestion =
    document.getElementById("edicion-masiva-precio-mayorista");

const markupMinoristaEdicionMasivaGestion =
    document.getElementById("edicion-masiva-markup-minorista");

const precioMinoristaEdicionMasivaGestion =
    document.getElementById("edicion-masiva-precio-minorista");

const ayudaMayoristaEdicionMasivaGestion =
    document.getElementById("edicion-masiva-ayuda-mayorista");

const ayudaMinoristaEdicionMasivaGestion =
    document.getElementById("edicion-masiva-ayuda-minorista");

const mensajeEdicionMasivaGestion =
    document.getElementById("mensaje-edicion-masiva");

const botonGuardarEdicionMasivaGestion =
    document.getElementById("guardar-edicion-masiva");

const botonCerrarEdicionMasivaGestion =
    document.getElementById("cerrar-edicion-masiva");

const botonCancelarEdicionMasivaGestion =
    document.getElementById("cancelar-edicion-masiva");


// =========================================================
// CATEGORÍAS
// =========================================================

if (categoriaEdicionMasivaGestion) {

    categoriaEdicionMasivaGestion.innerHTML =
        `<option value="">Seleccionar categoría...</option>` +
        CATEGORIAS_STOCK
            .map(
                (categoria) => `
                    <option value="${categoria.clave}">
                        ${escaparHTML(categoria.nombre)}
                    </option>
                `
            )
            .join("");
}


function obtenerCategoriaEdicionMasivaGestion() {

    const clave =
        categoriaEdicionMasivaGestion?.value || "";

    return CATEGORIAS_STOCK.find(
        (categoria) =>
            categoria.clave === clave
    ) || null;
}


function categoriaMasivaEsDecantGestion() {

    const clave =
        categoriaEdicionMasivaGestion?.value || "";

    return (
        clave === "decants-arabes" ||
        clave === "decants-disenador"
    );
}


function categoriaMasivaUsaUsdtGestion() {

    const clave =
        categoriaEdicionMasivaGestion?.value || "";

    return (
        clave === "perfumes-grandes" ||
        clave === "maison-30ml"
    );
}


function categoriaMasivaUsaCostoManualGestion() {

    return (
        categoriaEdicionMasivaGestion?.value ===
        "inspiraciones-disenador"
    );
}


// =========================================================
// PRODUCTOS DE LA CATEGORÍA
// =========================================================

function obtenerProductosCategoriaMasivaGestion() {

    const categoria =
        obtenerCategoriaEdicionMasivaGestion();

    if (!categoria) {
        return [];
    }

    return productosGestion
        .filter(
            (producto) =>
                producto.retirado !== true &&
                categoria.coincide(producto)
        )
        .sort(
            (a, b) =>
                String(a.nombre_mostrar || "")
                    .localeCompare(
                        String(b.nombre_mostrar || ""),
                        "es",
                        {
                            numeric: true,
                            sensitivity: "base"
                        }
                    )
        );
}


function normalizarTextoEdicionMasivaGestion(valor) {

    return String(valor || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();
}


function obtenerProductosVisiblesEdicionMasivaGestion() {

    const termino =
        normalizarTextoEdicionMasivaGestion(
            buscarEdicionMasivaGestion?.value || ""
        );

    const productosCategoria =
        obtenerProductosCategoriaMasivaGestion();

    if (!termino) {
        return productosCategoria;
    }

    return productosCategoria.filter(
        (producto) => {

            const contenido =
                normalizarTextoEdicionMasivaGestion(
                    [
                        producto.nombre_mostrar,
                        producto.marca_mostrar,
                        producto.slug,
                        producto.codigo_barras
                    ]
                        .filter(Boolean)
                        .join(" ")
                );

            return contenido.includes(termino);
        }
    );
}


function actualizarContadorEdicionMasivaGestion() {

    const cantidad =
        productosSeleccionadosMasivoGestion.size;

    if (contadorEdicionMasivaGestion) {
        contadorEdicionMasivaGestion.textContent =
            `${cantidad} ${cantidad === 1 ? "seleccionado" : "seleccionados"}`;
    }
}


function renderizarProductosEdicionMasivaGestion() {

    if (!productosEdicionMasivaGestion) {
        return;
    }

    const productosVisibles =
        obtenerProductosVisiblesEdicionMasivaGestion();

    if (productosVisibles.length === 0) {

        productosEdicionMasivaGestion.innerHTML = `
            <p class="edicion-masiva-sin-productos">
                No hay productos para mostrar.
            </p>
        `;

        actualizarContadorEdicionMasivaGestion();
        return;
    }

    productosEdicionMasivaGestion.innerHTML =
        productosVisibles
            .map(
                (producto) => {

                    const seleccionado =
                        productosSeleccionadosMasivoGestion.has(
                            Number(producto.id)
                        );

                    const costoTexto =
                        producto.costo_actual === null ||
                        producto.costo_actual === undefined ||
                        producto.costo_actual === ""
                            ? "Sin costo"
                            : formatearPrecio(
                                producto.costo_actual
                            );

                    return `
                        <label class="edicion-masiva-producto">
                            <input
                                type="checkbox"
                                class="edicion-masiva-producto-check"
                                data-producto-id="${producto.id}"
                                ${seleccionado ? "checked" : ""}
                            >

                            <span class="edicion-masiva-producto-info">
                                <strong>
                                    ${escaparHTML(
                                        producto.nombre_mostrar || "Producto"
                                    )}
                                </strong>

                                <small>
                                    Stock ${Number(producto.stock) || 0}
                                    · Costo ${costoTexto}
                                    · May. ${formatearPrecio(producto.precio_mayorista)}
                                    · Min. ${formatearPrecio(producto.precio_minorista)}
                                </small>
                            </span>
                        </label>
                    `;
                }
            )
            .join("");

    actualizarContadorEdicionMasivaGestion();
}


// =========================================================
// COSTO / PRECIOS DE REFERENCIA
// =========================================================

function obtenerCostoUsdtMasivoGestion() {

    const proveedorTexto =
        proveedorUsdtEdicionMasivaGestion?.value.trim() || "";

    const recargoTexto =
        recargoUsdtEdicionMasivaGestion?.value.trim() || "";

    const dolarTexto =
        dolarCostoEdicionMasivaGestion?.value.trim() || "";

    if (
        proveedorTexto === "" ||
        recargoTexto === "" ||
        dolarTexto === ""
    ) {
        return null;
    }

    const proveedor = Number(proveedorTexto);
    const recargo = Number(recargoTexto);
    const dolar = Number(dolarTexto);

    if (
        !Number.isFinite(proveedor) ||
        !Number.isFinite(recargo) ||
        !Number.isFinite(dolar) ||
        proveedor < 0 ||
        recargo < 0 ||
        dolar <= 0
    ) {
        return null;
    }

    return Math.round(
        (proveedor + recargo) * dolar
    );
}


function obtenerCostoReferenciaMasivoGestion() {

    if (categoriaMasivaUsaCostoManualGestion()) {

        const texto =
            costoManualEdicionMasivaGestion?.value.trim() || "";

        if (texto === "") {
            return null;
        }

        const costo = Number(texto);

        return (
            Number.isFinite(costo) &&
            costo >= 0
        )
            ? costo
            : null;
    }

    if (categoriaMasivaUsaUsdtGestion()) {
        return obtenerCostoUsdtMasivoGestion();
    }

    return null;
}


function actualizarPreviewCostoUsdtMasivoGestion() {

    if (!costoUsdtPreviewEdicionMasivaGestion) {
        return;
    }

    const costo =
        obtenerCostoUsdtMasivoGestion();

    costoUsdtPreviewEdicionMasivaGestion.textContent =
        costo === null
            ? "—"
            : formatearPrecio(costo);
}


function sincronizarParPrecioMasivoGestion(
    tipo,
    origen
) {

    const esMayorista =
        tipo === "mayorista";

    const campoMarkup =
        esMayorista
            ? markupMayoristaEdicionMasivaGestion
            : markupMinoristaEdicionMasivaGestion;

    const campoPrecio =
        esMayorista
            ? precioMayoristaEdicionMasivaGestion
            : precioMinoristaEdicionMasivaGestion;

    const campoAyuda =
        esMayorista
            ? ayudaMayoristaEdicionMasivaGestion
            : ayudaMinoristaEdicionMasivaGestion;

    if (!campoMarkup || !campoPrecio) {
        return;
    }

    const costoReferencia =
        obtenerCostoReferenciaMasivoGestion();

    if (origen === "markup") {

        const texto =
            campoMarkup.value.trim();

        if (esMayorista) {
            modoMayoristaMasivoGestion =
                texto === "" ? null : "markup";
        } else {
            modoMinoristaMasivoGestion =
                texto === "" ? null : "markup";
        }

        if (texto === "") {
            campoPrecio.value = "";
            return;
        }

        const markup = Number(texto);

        if (
            costoReferencia !== null &&
            Number.isFinite(markup) &&
            markup >= 0
        ) {

            campoPrecio.value =
                Math.round(
                    costoReferencia *
                    (1 + markup / 100)
                );

            if (campoAyuda) {
                campoAyuda.textContent =
                    "Precio calculado con el costo masivo ingresado.";
            }

        } else {

            campoPrecio.value = "";

            if (campoAyuda) {
                campoAyuda.textContent =
                    "Se aplicará el mismo margen y cada producto calculará su precio según su propio costo.";
            }
        }

        return;
    }

    const texto =
        campoPrecio.value.trim();

    if (esMayorista) {
        modoMayoristaMasivoGestion =
            texto === "" ? null : "precio";
    } else {
        modoMinoristaMasivoGestion =
            texto === "" ? null : "precio";
    }

    if (texto === "") {
        campoMarkup.value = "";
        return;
    }

    const precio = Number(texto);

    if (
        costoReferencia !== null &&
        costoReferencia > 0 &&
        Number.isFinite(precio) &&
        precio >= 0
    ) {

        campoMarkup.value =
            Number(
                (
                    (
                        precio /
                        costoReferencia -
                        1
                    ) * 100
                ).toFixed(6)
            );

        if (campoAyuda) {
            campoAyuda.textContent =
                "Margen ajustado automáticamente con el costo masivo ingresado.";
        }

    } else {

        campoMarkup.value = "";

        if (campoAyuda) {
            campoAyuda.textContent =
                "Se aplicará el mismo precio y el margen se calculará por producto según su propio costo.";
        }
    }
}


function resincronizarPreciosMasivosGestion() {

    actualizarPreviewCostoUsdtMasivoGestion();

    if (modoMayoristaMasivoGestion === "markup") {
        sincronizarParPrecioMasivoGestion(
            "mayorista",
            "markup"
        );
    } else if (modoMayoristaMasivoGestion === "precio") {
        sincronizarParPrecioMasivoGestion(
            "mayorista",
            "precio"
        );
    }

    if (modoMinoristaMasivoGestion === "markup") {
        sincronizarParPrecioMasivoGestion(
            "minorista",
            "markup"
        );
    } else if (modoMinoristaMasivoGestion === "precio") {
        sincronizarParPrecioMasivoGestion(
            "minorista",
            "precio"
        );
    }
}


// =========================================================
// COSTO DECANT CALCULADO DESDE SU PERFUME BASE
// =========================================================

function obtenerCostoCalculadoDecantMasivoGestion(
    decant
) {

    const productoBaseId =
        Number(decant?.producto_base_id || 0);

    const productoBase =
        productosGestion.find(
            (producto) =>
                Number(producto.id) ===
                productoBaseId
        );

    const costoBase =
        Number(productoBase?.costo_actual);

    const mlBase =
        Number(decant?.ml_perfume_base);

    const mlTester =
        Number(decant?.ml_tester);

    const mlDecant =
        Number(decant?.ml_decant);

    const insumos =
        Number(decant?.costo_insumos_decant);

    const redondeo =
        Number(decant?.redondeo_costo_decant);

    const vendibles =
        Number.isFinite(mlBase) &&
        Number.isFinite(mlTester) &&
        Number.isFinite(mlDecant) &&
        mlBase > 0 &&
        mlTester >= 0 &&
        mlTester < mlBase &&
        mlDecant > 0
            ? Math.floor(
                (mlBase - mlTester) /
                mlDecant
            )
            : 0;

    if (
        !productoBase ||
        !Number.isFinite(costoBase) ||
        costoBase < 0 ||
        vendibles <= 0 ||
        !Number.isFinite(insumos) ||
        insumos < 0 ||
        !Number.isFinite(redondeo) ||
        redondeo <= 0
    ) {
        return null;
    }

    const costoSinRedondear =
        costoBase / vendibles +
        insumos;

    return Math.ceil(
        costoSinRedondear /
        redondeo
    ) * redondeo;
}


function obtenerMarkupActualMasivoGestion(
    producto,
    tipo,
    costo
) {

    const valorGuardado =
        tipo === "mayorista"
            ? Number(producto?.markup_mayorista)
            : Number(producto?.markup_minorista);

    if (
        Number.isFinite(valorGuardado) &&
        valorGuardado >= 0
    ) {
        return valorGuardado;
    }

    const precio =
        tipo === "mayorista"
            ? Number(producto?.precio_mayorista)
            : Number(producto?.precio_minorista);

    if (
        Number.isFinite(costo) &&
        costo > 0 &&
        Number.isFinite(precio) &&
        precio >= 0
    ) {

        return (
            (precio / costo) - 1
        ) * 100;
    }

    return null;
}


// =========================================================
// MOSTRAR / OCULTAR COSTO SEGÚN CATEGORÍA
// =========================================================

function actualizarTipoCostoEdicionMasivaGestion() {

    const esDecant =
        categoriaMasivaEsDecantGestion();

    const usaUsdt =
        categoriaMasivaUsaUsdtGestion();

    const usaManual =
        categoriaMasivaUsaCostoManualGestion();

    costoManualBloqueEdicionMasivaGestion
        ?.classList.toggle(
            "oculto",
            !usaManual
        );

    costoUsdtBloqueEdicionMasivaGestion
        ?.classList.toggle(
            "oculto",
            !usaUsdt
        );

    costoDecantBloqueEdicionMasivaGestion
        ?.classList.toggle(
            "oculto",
            !esDecant
        );
}


// =========================================================
// ABRIR / CERRAR
// =========================================================

function limpiarCamposEdicionMasivaGestion() {

    productosSeleccionadosMasivoGestion =
        new Set();

    modoMayoristaMasivoGestion = null;
    modoMinoristaMasivoGestion = null;

    if (buscarEdicionMasivaGestion) {
        buscarEdicionMasivaGestion.value = "";
    }

    [
        stockEdicionMasivaGestion,
        costoManualEdicionMasivaGestion,
        proveedorUsdtEdicionMasivaGestion,
        recargoUsdtEdicionMasivaGestion,
        dolarCostoEdicionMasivaGestion,
        markupMayoristaEdicionMasivaGestion,
        precioMayoristaEdicionMasivaGestion,
        markupMinoristaEdicionMasivaGestion,
        precioMinoristaEdicionMasivaGestion
    ].forEach(
        (campo) => {
            if (campo) {
                campo.value = "";
            }
        }
    );

    if (costoUsdtPreviewEdicionMasivaGestion) {
        costoUsdtPreviewEdicionMasivaGestion.textContent = "—";
    }

    if (ayudaMayoristaEdicionMasivaGestion) {
        ayudaMayoristaEdicionMasivaGestion.textContent =
            "Podés editar margen o precio.";
    }

    if (ayudaMinoristaEdicionMasivaGestion) {
        ayudaMinoristaEdicionMasivaGestion.textContent =
            "Podés editar margen o precio.";
    }

    limpiarMensaje(
        mensajeEdicionMasivaGestion
    );

    actualizarContadorEdicionMasivaGestion();
}


function abrirEdicionMasivaGestion() {

    if (categoriaEdicionMasivaGestion) {
        categoriaEdicionMasivaGestion.value = "";
    }

    limpiarCamposEdicionMasivaGestion();

    seleccionBloqueEdicionMasivaGestion
        ?.classList.add("oculto");

    datosBloqueEdicionMasivaGestion
        ?.classList.add("oculto");

    costoManualBloqueEdicionMasivaGestion
        ?.classList.add("oculto");

    costoUsdtBloqueEdicionMasivaGestion
        ?.classList.add("oculto");

    costoDecantBloqueEdicionMasivaGestion
        ?.classList.add("oculto");

    modalEdicionMasivaGestion
        ?.classList.remove("oculto");
}


function cerrarEdicionMasivaGestion() {

    modalEdicionMasivaGestion
        ?.classList.add("oculto");

    limpiarCamposEdicionMasivaGestion();
}


// =========================================================
// EVENTOS DE SELECCIÓN
// =========================================================

botonEdicionMasivaStockGestion?.addEventListener(
    "click",
    abrirEdicionMasivaGestion
);

botonCerrarEdicionMasivaGestion?.addEventListener(
    "click",
    cerrarEdicionMasivaGestion
);

botonCancelarEdicionMasivaGestion?.addEventListener(
    "click",
    cerrarEdicionMasivaGestion
);

modalEdicionMasivaGestion?.addEventListener(
    "click",
    (evento) => {
        if (
            evento.target ===
            modalEdicionMasivaGestion
        ) {
            cerrarEdicionMasivaGestion();
        }
    }
);

categoriaEdicionMasivaGestion?.addEventListener(
    "change",
    () => {

        limpiarCamposEdicionMasivaGestion();

        const categoria =
            obtenerCategoriaEdicionMasivaGestion();

        if (!categoria) {

            seleccionBloqueEdicionMasivaGestion
                ?.classList.add("oculto");

            datosBloqueEdicionMasivaGestion
                ?.classList.add("oculto");

            return;
        }

        seleccionBloqueEdicionMasivaGestion
            ?.classList.remove("oculto");

        datosBloqueEdicionMasivaGestion
            ?.classList.remove("oculto");

        actualizarTipoCostoEdicionMasivaGestion();
        renderizarProductosEdicionMasivaGestion();
    }
);

buscarEdicionMasivaGestion?.addEventListener(
    "input",
    renderizarProductosEdicionMasivaGestion
);

productosEdicionMasivaGestion?.addEventListener(
    "change",
    (evento) => {

        const checkbox =
            evento.target.closest(
                ".edicion-masiva-producto-check"
            );

        if (!checkbox) {
            return;
        }

        const productoId =
            Number(checkbox.dataset.productoId);

        if (!productoId) {
            return;
        }

        if (checkbox.checked) {
            productosSeleccionadosMasivoGestion.add(
                productoId
            );
        } else {
            productosSeleccionadosMasivoGestion.delete(
                productoId
            );
        }

        actualizarContadorEdicionMasivaGestion();
    }
);

botonMarcarTodosEdicionMasivaGestion?.addEventListener(
    "click",
    () => {

        obtenerProductosVisiblesEdicionMasivaGestion()
            .forEach(
                (producto) => {
                    productosSeleccionadosMasivoGestion.add(
                        Number(producto.id)
                    );
                }
            );

        renderizarProductosEdicionMasivaGestion();
    }
);

botonDesmarcarTodosEdicionMasivaGestion?.addEventListener(
    "click",
    () => {

        productosSeleccionadosMasivoGestion =
            new Set();

        renderizarProductosEdicionMasivaGestion();
    }
);


// =========================================================
// EVENTOS COSTO / MARGEN / PRECIO
// =========================================================

costoManualEdicionMasivaGestion?.addEventListener(
    "input",
    resincronizarPreciosMasivosGestion
);

[
    proveedorUsdtEdicionMasivaGestion,
    recargoUsdtEdicionMasivaGestion,
    dolarCostoEdicionMasivaGestion
].forEach(
    (campo) => {
        campo?.addEventListener(
            "input",
            resincronizarPreciosMasivosGestion
        );
    }
);

markupMayoristaEdicionMasivaGestion?.addEventListener(
    "input",
    () => {
        sincronizarParPrecioMasivoGestion(
            "mayorista",
            "markup"
        );
    }
);

precioMayoristaEdicionMasivaGestion?.addEventListener(
    "input",
    () => {
        sincronizarParPrecioMasivoGestion(
            "mayorista",
            "precio"
        );
    }
);

markupMinoristaEdicionMasivaGestion?.addEventListener(
    "input",
    () => {
        sincronizarParPrecioMasivoGestion(
            "minorista",
            "markup"
        );
    }
);

precioMinoristaEdicionMasivaGestion?.addEventListener(
    "input",
    () => {
        sincronizarParPrecioMasivoGestion(
            "minorista",
            "precio"
        );
    }
);


// =========================================================
// PREPARAR CAMBIOS
// =========================================================

function obtenerNumeroOpcionalMasivoGestion(
    campo
) {

    const texto =
        campo?.value.trim() || "";

    if (texto === "") {
        return {
            presente: false,
            valor: null
        };
    }

    return {
        presente: true,
        valor: Number(texto)
    };
}


function prepararPlanEdicionMasivaGestion() {

    const categoria =
        obtenerCategoriaEdicionMasivaGestion();

    if (!categoria) {
        throw new Error(
            "Elegí una categoría."
        );
    }

    const idsSeleccionados =
        Array.from(
            productosSeleccionadosMasivoGestion
        );

    if (idsSeleccionados.length === 0) {
        throw new Error(
            "Marcá al menos un producto."
        );
    }

    const stockDato =
        obtenerNumeroOpcionalMasivoGestion(
            stockEdicionMasivaGestion
        );

    if (
        stockDato.presente &&
        (
            !Number.isInteger(stockDato.valor) ||
            stockDato.valor < 0
        )
    ) {
        throw new Error(
            "El stock debe ser un número entero igual o mayor a 0."
        );
    }

    const usaCostoManual =
        categoriaMasivaUsaCostoManualGestion();

    const usaUsdt =
        categoriaMasivaUsaUsdtGestion();

    const esDecant =
        categoriaMasivaEsDecantGestion();

    const costoManualDato =
        obtenerNumeroOpcionalMasivoGestion(
            costoManualEdicionMasivaGestion
        );

    if (
        usaCostoManual &&
        costoManualDato.presente &&
        (
            !Number.isFinite(costoManualDato.valor) ||
            costoManualDato.valor < 0
        )
    ) {
        throw new Error(
            "Revisá el costo ingresado."
        );
    }

    const proveedorTexto =
        proveedorUsdtEdicionMasivaGestion?.value.trim() || "";

    const recargoTexto =
        recargoUsdtEdicionMasivaGestion?.value.trim() || "";

    const dolarTexto =
        dolarCostoEdicionMasivaGestion?.value.trim() || "";

    const hayFormulaUsdt =
        usaUsdt &&
        (
            proveedorTexto !== "" ||
            recargoTexto !== "" ||
            dolarTexto !== ""
        );

    let proveedorUsdt = null;
    let recargoUsdt = null;
    let dolarCosto = null;
    let costoUsdt = null;

    if (hayFormulaUsdt) {

        if (
            proveedorTexto === "" ||
            recargoTexto === "" ||
            dolarTexto === ""
        ) {
            throw new Error(
                "Para modificar el costo en USDT completá precio proveedor, recargo y dólar de costo."
            );
        }

        proveedorUsdt = Number(proveedorTexto);
        recargoUsdt = Number(recargoTexto);
        dolarCosto = Number(dolarTexto);

        if (
            !Number.isFinite(proveedorUsdt) ||
            proveedorUsdt < 0 ||
            !Number.isFinite(recargoUsdt) ||
            recargoUsdt < 0 ||
            !Number.isFinite(dolarCosto) ||
            dolarCosto <= 0
        ) {
            throw new Error(
                "Revisá el precio proveedor, recargo y dólar de costo."
            );
        }

        costoUsdt = Math.round(
            (proveedorUsdt + recargoUsdt) *
            dolarCosto
        );
    }

    const markupMayoristaDato =
        obtenerNumeroOpcionalMasivoGestion(
            markupMayoristaEdicionMasivaGestion
        );

    const precioMayoristaDato =
        obtenerNumeroOpcionalMasivoGestion(
            precioMayoristaEdicionMasivaGestion
        );

    const markupMinoristaDato =
        obtenerNumeroOpcionalMasivoGestion(
            markupMinoristaEdicionMasivaGestion
        );

    const precioMinoristaDato =
        obtenerNumeroOpcionalMasivoGestion(
            precioMinoristaEdicionMasivaGestion
        );

    if (
        modoMayoristaMasivoGestion === "markup" &&
        (
            !markupMayoristaDato.presente ||
            !Number.isFinite(markupMayoristaDato.valor) ||
            markupMayoristaDato.valor < 0
        )
    ) {
        throw new Error(
            "Revisá el margen mayorista."
        );
    }

    if (
        modoMayoristaMasivoGestion === "precio" &&
        (
            !precioMayoristaDato.presente ||
            !Number.isFinite(precioMayoristaDato.valor) ||
            precioMayoristaDato.valor < 0
        )
    ) {
        throw new Error(
            "Revisá el precio mayorista."
        );
    }

    if (
        modoMinoristaMasivoGestion === "markup" &&
        (
            !markupMinoristaDato.presente ||
            !Number.isFinite(markupMinoristaDato.valor) ||
            markupMinoristaDato.valor < 0
        )
    ) {
        throw new Error(
            "Revisá el margen minorista."
        );
    }

    if (
        modoMinoristaMasivoGestion === "precio" &&
        (
            !precioMinoristaDato.presente ||
            !Number.isFinite(precioMinoristaDato.valor) ||
            precioMinoristaDato.valor < 0
        )
    ) {
        throw new Error(
            "Revisá el precio minorista."
        );
    }

    const cambiaCosto =
        (
            usaCostoManual &&
            costoManualDato.presente
        ) ||
        hayFormulaUsdt;

    const cambiaMayorista =
        modoMayoristaMasivoGestion !== null;

    const cambiaMinorista =
        modoMinoristaMasivoGestion !== null;

    const hayCambios =
        stockDato.presente ||
        cambiaCosto ||
        cambiaMayorista ||
        cambiaMinorista;

    if (!hayCambios) {
        throw new Error(
            "Completá al menos un dato para modificar."
        );
    }

    const productosSeleccionados =
        idsSeleccionados
            .map(
                (id) =>
                    productosGestion.find(
                        (producto) =>
                            Number(producto.id) ===
                            Number(id)
                    )
            )
            .filter(Boolean);

    if (
        productosSeleccionados.length !==
        idsSeleccionados.length
    ) {
        throw new Error(
            "No se pudieron identificar todos los productos seleccionados."
        );
    }

    const planes =
        productosSeleccionados.map(
            (producto) => {

                const costoActual =
                    Number(producto.costo_actual);

                let costoFinal =
                    Number.isFinite(costoActual) &&
                    costoActual >= 0
                        ? costoActual
                        : null;

                if (esDecant) {

                    costoFinal =
                        obtenerCostoCalculadoDecantMasivoGestion(
                            producto
                        );

                    if (
                        (
                            cambiaMayorista ||
                            cambiaMinorista
                        ) &&
                        costoFinal === null
                    ) {
                        throw new Error(
                            `${producto.nombre_mostrar}: el decant no tiene una configuración de costo válida. Configuralo primero desde Editar producto.`
                        );
                    }

                } else if (
                    usaCostoManual &&
                    costoManualDato.presente
                ) {

                    costoFinal =
                        costoManualDato.valor;

                } else if (hayFormulaUsdt) {

                    costoFinal =
                        costoUsdt;
                }

                const necesitaPrecios =
                    cambiaCosto ||
                    cambiaMayorista ||
                    cambiaMinorista;

                if (
                    necesitaPrecios &&
                    (
                        costoFinal === null ||
                        !Number.isFinite(costoFinal) ||
                        costoFinal < 0
                    )
                ) {
                    throw new Error(
                        `${producto.nombre_mostrar}: no tiene costo cargado. Cargalo primero o incluí el costo en esta edición masiva.`
                    );
                }

                let markupMayorista =
                    obtenerMarkupActualMasivoGestion(
                        producto,
                        "mayorista",
                        costoActual
                    );

                let markupMinorista =
                    obtenerMarkupActualMasivoGestion(
                        producto,
                        "minorista",
                        costoActual
                    );

                                let precioMayorista =
                    Number(producto.precio_mayorista) || 0;

                let precioMinorista =
                    Number(producto.precio_minorista) || 0;


                const redondeoPrecioDecant =
                    esDecant
                        ? Number(
                            producto.redondeo_costo_decant
                        ) || 500
                        : null;


                function calcularPrecioMasivoDesdeMarkup(
                    markup
                ) {

                    const precioSinRedondear =
                        costoFinal *
                        (1 + markup / 100);


                    if (
                        esDecant &&
                        Number.isFinite(
                            redondeoPrecioDecant
                        ) &&
                        redondeoPrecioDecant > 0
                    ) {

                        return (
                            Math.ceil(
                                precioSinRedondear /
                                redondeoPrecioDecant
                            ) *
                            redondeoPrecioDecant
                        );

                    }


                    return Math.round(
                        precioSinRedondear
                    );

                }


                if (
                    modoMayoristaMasivoGestion ===
                    "markup"
                ) {

                    markupMayorista =
                        markupMayoristaDato.valor;

                    precioMayorista =
                        calcularPrecioMasivoDesdeMarkup(
                            markupMayorista
                        );

                } else if (
                    modoMayoristaMasivoGestion ===
                    "precio"
                ) {

                    if (!(costoFinal > 0)) {
                        throw new Error(
                            `${producto.nombre_mostrar}: el costo debe ser mayor a 0 para calcular el margen desde el precio mayorista.`
                        );
                    }

                    precioMayorista =
                        precioMayoristaDato.valor;

                    markupMayorista =
                        (
                            precioMayorista /
                            costoFinal -
                            1
                        ) * 100;

                } else if (cambiaCosto) {

                    if (
                        !Number.isFinite(markupMayorista) ||
                        markupMayorista < 0
                    ) {
                        throw new Error(
                            `${producto.nombre_mostrar}: no tiene margen mayorista válido para recalcular el precio con el nuevo costo.`
                        );
                    }

                    precioMayorista =
                        calcularPrecioMasivoDesdeMarkup(
                            markupMayorista
                        );

                }


                if (
                    modoMinoristaMasivoGestion ===
                    "markup"
                ) {

                    markupMinorista =
                        markupMinoristaDato.valor;

                    precioMinorista =
                        calcularPrecioMasivoDesdeMarkup(
                            markupMinorista
                        );

                } else if (
                    modoMinoristaMasivoGestion ===
                    "precio"
                ) {

                    if (!(costoFinal > 0)) {
                        throw new Error(
                            `${producto.nombre_mostrar}: el costo debe ser mayor a 0 para calcular el margen desde el precio minorista.`
                        );
                    }

                    precioMinorista =
                        precioMinoristaDato.valor;

                    markupMinorista =
                        (
                            precioMinorista /
                            costoFinal -
                            1
                        ) * 100;

                } else if (cambiaCosto) {

                    if (
                        !Number.isFinite(markupMinorista) ||
                        markupMinorista < 0
                    ) {
                        throw new Error(
                            `${producto.nombre_mostrar}: no tiene margen minorista válido para recalcular el precio con el nuevo costo.`
                        );
                    }

                    precioMinorista =
                        calcularPrecioMasivoDesdeMarkup(
                            markupMinorista
                        );

                }

                if (
                    necesitaPrecios &&
                    (
                        !Number.isFinite(markupMayorista) ||
                        markupMayorista < 0 ||
                        !Number.isFinite(markupMinorista) ||
                        markupMinorista < 0 ||
                        !Number.isFinite(precioMayorista) ||
                        precioMayorista < 0 ||
                        !Number.isFinite(precioMinorista) ||
                        precioMinorista < 0
                    )
                ) {
                    throw new Error(
                        `${producto.nombre_mostrar}: no se pudieron calcular los márgenes y precios.`
                    );
                }

                if (
                    esDecant &&
                    necesitaPrecios
                ) {

                    const baseId =
                        Number(producto.producto_base_id || 0);

                    const mlBase =
                        Number(producto.ml_perfume_base);

                    const mlTester =
                        Number(producto.ml_tester);

                    const mlDecant =
                        Number(producto.ml_decant);

                    const insumos =
                        Number(producto.costo_insumos_decant);

                    const redondeo =
                        Number(producto.redondeo_costo_decant);

                    if (
                        baseId <= 0 ||
                        !Number.isFinite(mlBase) ||
                        mlBase <= 0 ||
                        !Number.isFinite(mlTester) ||
                        mlTester < 0 ||
                        mlTester >= mlBase ||
                        !Number.isFinite(mlDecant) ||
                        mlDecant <= 0 ||
                        !Number.isFinite(insumos) ||
                        insumos < 0 ||
                        !Number.isFinite(redondeo) ||
                        redondeo <= 0
                    ) {
                        throw new Error(
                            `${producto.nombre_mostrar}: revisá la configuración del decant antes de editarlo masivamente.`
                        );
                    }
                }

                return {
                    producto,
                    stockFinal:
                        stockDato.presente
                            ? stockDato.valor
                            : Number(producto.stock) || 0,
                    activoFinal:
                        producto.activo !== false,
                    costoFinal,
                    markupMayorista,
                    markupMinorista,
                    precioMayorista,
                    precioMinorista,
                    cambiaStock:
                        stockDato.presente,
                    cambiaCosto,
                    cambiaMayorista,
                    cambiaMinorista,
                    necesitaPrecios,
                    esDecant,
                    hayFormulaUsdt,
                    proveedorUsdt,
                    recargoUsdt,
                    dolarCosto
                };
            }
        );

    return {
        categoria,
        planes,
        stockDato,
        cambiaCosto,
        cambiaMayorista,
        cambiaMinorista
    };
}


// =========================================================
// GUARDAR
// =========================================================

async function guardarPlanProductoMasivoGestion(
    plan
) {

    const producto =
        plan.producto;

    if (plan.necesitaPrecios) {

        if (plan.esDecant) {

            const {
                error: errorCostos
            } =
                await supabaseClient.rpc(
                    "configurar_decant",
                    {
                        p_decant_id:
                            Number(producto.id),
                        p_producto_base_id:
                            Number(producto.producto_base_id),
                        p_ml_perfume_base:
                            Number(producto.ml_perfume_base),
                        p_ml_decant:
                            Number(producto.ml_decant),
                        p_ml_tester:
                            Number(producto.ml_tester),
                        p_costo_insumos:
                            Number(producto.costo_insumos_decant),
                        p_redondeo:
                            Number(producto.redondeo_costo_decant),
                        p_markup_mayorista:
                            plan.markupMayorista,
                        p_markup_minorista:
                            plan.markupMinorista
                    }
                );

            if (errorCostos) {
                throw errorCostos;
            }

        } else if (
            plan.hayFormulaUsdt
        ) {

            const {
                error: errorCostos
            } =
                await supabaseClient.rpc(
                    "actualizar_costos_producto_usdt",
                    {
                        p_producto_id:
                            Number(producto.id),
                        p_precio_proveedor_usdt:
                            plan.proveedorUsdt,
                        p_recargo_usdt:
                            plan.recargoUsdt,
                        p_dolar_costo:
                            plan.dolarCosto,
                        p_markup_mayorista:
                            plan.markupMayorista,
                        p_markup_minorista:
                            plan.markupMinorista
                    }
                );

            if (errorCostos) {
                throw errorCostos;
            }

        } else {

            const {
                error: errorCostos
            } =
                await supabaseClient.rpc(
                    "actualizar_costos_producto",
                    {
                        p_producto_id:
                            Number(producto.id),
                        p_costo:
                            plan.costoFinal,
                        p_markup_mayorista:
                            plan.markupMayorista,
                        p_markup_minorista:
                            plan.markupMinorista
                    }
                );

            if (errorCostos) {
                throw errorCostos;
            }
        }
    }

    const {
        error
    } =
        await supabaseClient.rpc(
            "editar_producto_gestion",
            {
                p_producto_id:
                    Number(producto.id),
                p_stock:
                    plan.stockFinal,
                p_precio_minorista:
                    plan.precioMinorista,
                p_precio_mayorista:
                    plan.precioMayorista,
                p_activo:
                    plan.activoFinal
            }
        );

    if (error) {
        throw error;
    }

    // El stock masivo se fija en un único paso al terminar el lote.
    // Así evitamos que una edición individual intermedia vuelva a dejar
    // el valor anterior cuando el stock elegido es 0.
}


formEdicionMasivaGestion?.addEventListener(
    "submit",
    async (evento) => {

        evento.preventDefault();

        limpiarMensaje(
            mensajeEdicionMasivaGestion
        );

        let planGeneral;

        try {
            planGeneral =
                prepararPlanEdicionMasivaGestion();
        } catch (error) {

            mostrarMensaje(
                mensajeEdicionMasivaGestion,
                error.message ||
                "Revisá los datos ingresados."
            );

            return;
        }

        const cantidad =
            planGeneral.planes.length;

        const cambios = [];

        if (planGeneral.stockDato.presente) {
            cambios.push(
                `stock ${planGeneral.stockDato.valor}`
            );
        }

        if (planGeneral.cambiaCosto) {
            cambios.push("costo");
        }

        if (planGeneral.cambiaMayorista) {
            cambios.push("mayorista");
        }

        if (planGeneral.cambiaMinorista) {
            cambios.push("minorista");
        }

        const confirmar =
            window.confirm(
                `Vas a modificar ${cantidad} ${cantidad === 1 ? "producto" : "productos"}.\n\n` +
                `Cambios: ${cambios.join(", ")}.\n\n` +
                "Solo se modificarán los productos que marcaste. ¿Confirmar?"
            );

        if (!confirmar) {
            return;
        }

        botonGuardarEdicionMasivaGestion.disabled =
            true;

        let guardados = 0;

        try {

            for (
                let indice = 0;
                indice < planGeneral.planes.length;
                indice++
            ) {

                const plan =
                    planGeneral.planes[indice];

                botonGuardarEdicionMasivaGestion.textContent =
                    `Guardando ${indice + 1}/${cantidad}...`;

                await guardarPlanProductoMasivoGestion(
                    plan
                );

                guardados++;
            }

            // Si se indicó stock, se aplica UNA SOLA VEZ a todos los IDs
            // seleccionados directamente en la base. Esto acepta 0
            // expresamente y deja el lote completo con el mismo stock.
            if (planGeneral.stockDato.presente) {

                const idsStockMasivo =
                    planGeneral.planes.map(
                        (plan) => Number(plan.producto.id)
                    );

                const {
                    error: errorStockMasivo
                } =
                    await supabaseClient.rpc(
                        "actualizar_stock_productos_masivo",
                        {
                            p_producto_ids:
                                idsStockMasivo,
                            p_stock:
                                Number(planGeneral.stockDato.valor)
                        }
                    );

                if (errorStockMasivo) {
                    throw errorStockMasivo;
                }
            }

            await cargarProductosGestion();
            renderizarStock();

            cerrarEdicionMasivaGestion();

            mostrarMensaje(
                mensajeStockGestion,
                `${cantidad} ${cantidad === 1 ? "producto actualizado" : "productos actualizados"} correctamente.`,
                "exito"
            );

        } catch (error) {

            console.error(
                "Error en edición masiva:",
                error
            );

            try {
                await cargarProductosGestion();
                renderizarStock();
            } catch (errorRecarga) {
                console.error(
                    "No se pudo recargar stock después del error:",
                    errorRecarga
                );
            }

            mostrarMensaje(
                mensajeEdicionMasivaGestion,
                guardados > 0
                    ? `Se actualizaron ${guardados} de ${cantidad} productos. Se detuvo por un error: ${error.message || "revisá la conexión y volvé a intentar con los restantes."}`
                    : error.message ||
                        "No se pudieron guardar los cambios."
            );

        } finally {

            botonGuardarEdicionMasivaGestion.disabled =
                false;

            botonGuardarEdicionMasivaGestion.textContent =
                "Aplicar a seleccionados";
        }
    }
);

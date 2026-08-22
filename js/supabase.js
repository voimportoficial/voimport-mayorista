const SUPABASE_URL =
    "https://odcnfxgcrpuwrjirwgdx.supabase.co";

const SUPABASE_PUBLIC_KEY =
    "sb_publishable_DCVRufHVQ5e_65FMKw9MaA_SGXJEO85";

const supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLIC_KEY
);
async function obtenerDatosProductos() {
    const { data, error } = await supabaseClient
        .from("productos")
        .select(`
            slug,
            nombre,
            marca,
            categoria,
            linea,
            tipo,
            presentacion,
            imagen,
            precio_minorista,
            precio_mayorista,
            stock,
            activo,
            retirado
        `);

    if (error) {
        console.error(
            "Error al obtener productos de Supabase:",
            error
        );

        return [];
    }

    return data;
}

// =============================
// MERCADO PAGO - EDGE FUNCTION
// =============================

async function crearPreferenciaMercadoPago({
    items = [],
    pedidoId = null,
    codigoPedido = "",
    cliente = null
} = {}) {

    if (
        !supabaseClient?.functions ||
        typeof supabaseClient.functions.invoke !== "function"
    ) {
        throw new Error(
            "Mercado Pago no está disponible en este momento."
        );
    }

    const { data, error } =
        await supabaseClient.functions.invoke(
            "mp-crear-preferencia",
            {
                body: {
                    items,
                    pedido_id: pedidoId,
                    codigo_pedido: codigoPedido,
                    cliente
                }
            }
        );

    if (error) {

        let mensaje =
            error.message ||
            "No se pudo iniciar Mercado Pago.";

        try {
            const detalle =
                await error.context?.json();

            if (detalle?.error) {
                mensaje = detalle.error;
            }
        } catch (_) {
            // Si la respuesta no trae JSON, usamos el mensaje original.
        }

        throw new Error(mensaje);
    }

    if (!data?.ok) {
        throw new Error(
            data?.error ||
            "No se pudo iniciar Mercado Pago."
        );
    }

    return data;
}


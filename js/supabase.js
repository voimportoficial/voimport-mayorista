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
            precio_minorista,
            precio_mayorista,
            stock,
            activo
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
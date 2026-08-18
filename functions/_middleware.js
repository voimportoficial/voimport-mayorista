// =========================================================
// VO IMPORT - ENLACES COMPARTIDOS Y VISTAS PREVIAS
// Cloudflare Pages Middleware
// =========================================================


function limpiarRuta(pathname) {

    let ruta =
        pathname.replace(/\/+$/, "") || "/";


    if (ruta.endsWith(".html")) {

        ruta =
            ruta.slice(0, -5);

    }


    return ruta || "/";
}


// =========================================================
// CONVERTIR SLUG A NOMBRE LEGIBLE
// =========================================================

function nombreDesdeSlug(slug) {

    if (!slug) {
        return "Producto";
    }


    const palabrasEspeciales = {

        "9pm": "9 PM",
        "9am": "9 AM",

        "5ml": "5 ml",
        "30ml": "30 ml",
        "60ml": "60 ml",
        "80ml": "80 ml",
        "85ml": "85 ml",
        "90ml": "90 ml",
        "100ml": "100 ml",
        "105ml": "105 ml",
        "120ml": "120 ml",
        "150ml": "150 ml",

        "afnan": "Afnan",
        "armaf": "Armaf",
        "asdaaf": "Asdaaf",
        "bharara": "Bharara",
        "lattafa": "Lattafa",
        "rasasi": "Rasasi",
        "oud": "Oud",

        "edp": "EDP",
        "edt": "EDT"
    };


    return slug

        .split("-")

        .filter(Boolean)

        .map((palabra) => {

            const minuscula =
                palabra.toLowerCase();


            if (
                palabrasEspeciales[
                    minuscula
                ]
            ) {

                return (
                    palabrasEspeciales[
                        minuscula
                    ]
                );

            }


            return (
                palabra
                    .charAt(0)
                    .toUpperCase() +
                palabra.slice(1)
            );

        })

        .join(" ");
}


// =========================================================
// DATOS DE LAS MARCAS
// =========================================================

const marcas = {

    "/afnan": "Afnan",

    "/al-haramain":
        "Al Haramain",

    "/al-wataniah":
        "Al Wataniah",

    "/armaf": "Armaf",

    "/asdaaf": "Asdaaf",

    "/bharara": "Bharara",

    "/french-avenue":
        "French Avenue",

    "/lattafa": "Lattafa",

    "/maison-alhambra":
        "Maison Alhambra",

    "/rasasi": "Rasasi"

};


// =========================================================
// OBTENER METADATOS SEGÚN LA URL
// =========================================================

function obtenerMetadata(url) {

    const ruta =
        limpiarRuta(
            url.pathname
        );


    // =====================================================
    // INICIO
    // =====================================================

    if (
        ruta === "/" ||
        ruta === "/index"
    ) {

        return {

            title:
                "Vo Import | Perfumes árabes originales",

            description:
                "Perfumes árabes 100% originales. Venta minorista y mayorista. Envíos a todo el país."

        };

    }


    // =====================================================
    // CATEGORÍA GENERAL
    // =====================================================

    if (ruta === "/categoria") {

        const categoria =
            url.searchParams.get(
                "categoria"
            );


        const categorias = {

            "perfumes-grandes": {

                title:
                    "Perfumes árabes | Vo Import",

                description:
                    "Explorá nuestros perfumes árabes 100% originales. Compra minorista y mayorista."

            },


            "decants": {

                title:
                    "Decants 5 ml | Vo Import",

                description:
                    "Explorá nuestros Decants 5 ml de perfumes árabes originales."

            },


            "maison-30ml": {

                title:
                    "Maison Alhambra 30 ml | Vo Import",

                description:
                    "Explorá nuestros perfumes Maison Alhambra en presentación de 30 ml."

            },


            "inspiraciones": {

                title:
                    "Inspiraciones de diseñador | Vo Import",

                description:
                    "Explorá nuestras inspiraciones de diseñador."

            },


            "inspiraciones-disenador": {

                title:
                    "Inspiraciones de diseñador | Vo Import",

                description:
                    "Explorá nuestras inspiraciones de diseñador."

            }

        };


        return (
            categorias[categoria] ||
            {

                title:
                    "Categorías | Vo Import",

                description:
                    "Explorá las categorías disponibles en Vo Import."

            }
        );

    }


    // =====================================================
    // CATÁLOGO
    // =====================================================

    if (ruta === "/catalogo") {

        const categoria =
            url.searchParams.get(
                "categoria"
            );


        if (
            categoria ===
            "decants"
        ) {

            return {

                title:
                    "Decants 5 ml | Catálogo Vo Import",

                description:
                    "Explorá todos nuestros Decants 5 ml disponibles."

            };

        }


        if (
            categoria ===
            "maison-30ml"
        ) {

            return {

                title:
                    "Maison Alhambra 30 ml | Catálogo Vo Import",

                description:
                    "Explorá Maison Alhambra 30 ml en nuestro catálogo."

            };

        }


        return {

            title:
                "Catálogo | Vo Import",

            description:
                "Explorá el catálogo completo de Vo Import."

        };

    }


    // =====================================================
    // MARCAS
    // =====================================================

    if (marcas[ruta]) {

        const marca =
            marcas[ruta];


        const vista =
            url.searchParams.get(
                "vista"
            );


        if (
            vista ===
            "decants"
        ) {

            return {

                title:
                    `Decants ${marca} 5 ml | Vo Import`,

                description:
                    `Explorá nuestros Decants 5 ml de perfumes ${marca}.`

            };

        }


        return {

            title:
                `${marca} | Vo Import`,

            description:
                `Explorá nuestros perfumes ${marca} originales.`

        };

    }


    // =====================================================
    // MAISON ALHAMBRA 30 ML
    // =====================================================

    if (
        ruta ===
        "/maison-30ml"
    ) {

        return {

            title:
                "Maison Alhambra 30 ml | Vo Import",

            description:
                "Explorá Maison Alhambra en presentación de 30 ml."

        };

    }


    // =====================================================
    // MAYORISTA
    // =====================================================

    if (
        ruta ===
        "/mayorista"
    ) {

        return {

            title:
                "Mayorista | Vo Import",

            description:
                "Comprá perfumes originales a precio mayorista en Vo Import."

        };

    }


    // =====================================================
    // INSPIRACIONES - PORTADA
    // =====================================================

    if (
        ruta ===
        "/inspiraciones"
    ) {

        return {

            title:
                "Inspiraciones de diseñador | Vo Import",

            description:
                "Explorá nuestras inspiraciones de perfumes de diseñador."

        };

    }


    // =====================================================
    // INSPIRACIONES 60 ML / DISEÑADOR
    // =====================================================

    if (
        ruta ===
        "/inspiraciones-perfumes"
    ) {

        const disenador =
            url.searchParams.get(
                "disenador"
            );


        const vista =
            url.searchParams.get(
                "vista"
            );


        if (disenador) {

            const nombreDisenador =
                nombreDesdeSlug(
                    disenador
                );


            if (
                vista ===
                "decants"
            ) {

                return {

                    title:
                        `Decants ${nombreDisenador} 5 ml | Vo Import`,

                    description:
                        `Explorá nuestros Decants 5 ml inspirados en perfumes de ${nombreDisenador}.`

                };

            }


            return {

                title:
                    `${nombreDisenador} | Inspiraciones 60 ml | Vo Import`,

                description:
                    `Explorá nuestras inspiraciones de ${nombreDisenador} en presentación de 60 ml.`

            };

        }


        if (
            vista ===
            "decants"
        ) {

            return {

                title:
                    "Decants de inspiraciones 5 ml | Vo Import",

                description:
                    "Explorá nuestros Decants 5 ml inspirados en perfumes de diseñador."

            };

        }


        return {

            title:
                "Inspiraciones 60 ml | Vo Import",

            description:
                "Explorá nuestros perfumes inspirados en diseñador en presentación de 60 ml."

        };

    }


    // =====================================================
    // DECANTS DE INSPIRACIONES
    // =====================================================

    if (
        ruta ===
        "/inspiraciones-decants"
    ) {

        return {

            title:
                "Decants de inspiraciones 5 ml | Vo Import",

            description:
                "Explorá nuestros Decants 5 ml inspirados en perfumes de diseñador."

        };

    }


    // =====================================================
    // PRODUCTO INDIVIDUAL
    // =====================================================

    if (
        ruta ===
        "/producto"
    ) {

        const slug =
            url.searchParams.get(
                "slug"
            );


        const nombre =
            nombreDesdeSlug(
                slug
            );


        return {

            title:
                `${nombre} | Vo Import`,

            description:
                `Conocé ${nombre} en Vo Import. Perfumes originales, compra minorista y mayorista.`

        };

    }


    return null;
}


// =========================================================
// ESCAPAR TEXTO PARA METADATOS
// =========================================================

function escaparHTML(texto) {

    return String(
        texto || ""
    )

        .replaceAll(
            "&",
            "&amp;"
        )

        .replaceAll(
            "<",
            "&lt;"
        )

        .replaceAll(
            ">",
            "&gt;"
        )

        .replaceAll(
            '"',
            "&quot;"
        )

        .replaceAll(
            "'",
            "&#039;"
        );
}


// =========================================================
// MIDDLEWARE
// =========================================================

export async function onRequest(
    context
) {

    const url =
        new URL(
            context.request.url
        );


    // =====================================================
    // NO TOCAMOS GESTIÓN
    // =====================================================

    if (
        url.pathname.startsWith(
            "/gestion"
        )
    ) {

        return context.next();

    }


    const metadata =
        obtenerMetadata(url);


    if (!metadata) {

        return context.next();

    }


    const response =
        await context.next();


    const contentType =
        response.headers.get(
            "content-type"
        ) || "";


    if (
        !contentType.includes(
            "text/html"
        )
    ) {

        return response;

    }


    const imagen =
        `${url.origin}/images/favicon.PNG`;


    const titulo =
        escaparHTML(
            metadata.title
        );


    const descripcion =
        escaparHTML(
            metadata.description
        );


    const urlCompartida =
        escaparHTML(
            url.href
        );


    const imagenCompartida =
        escaparHTML(
            imagen
        );


    return new HTMLRewriter()

        .on(
            "title",
            {

                element(element) {

                    element.setInnerContent(
                        metadata.title
                    );

                }

            }
        )


        .on(
            "head",
            {

                element(element) {

                    element.append(
                        `
<meta name="description" content="${descripcion}">

<meta property="og:site_name" content="Vo Import">
<meta property="og:type" content="website">
<meta property="og:title" content="${titulo}">
<meta property="og:description" content="${descripcion}">
<meta property="og:url" content="${urlCompartida}">
<meta property="og:image" content="${imagenCompartida}">

<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${titulo}">
<meta name="twitter:description" content="${descripcion}">
<meta name="twitter:image" content="${imagenCompartida}">
                        `,
                        {
                            html: true
                        }
                    );

                }

            }
        )


        .transform(
            response
        );
}
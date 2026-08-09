const productos = [
    {
        id: "afnan-9pm",
        nombre: "Afnan 9 PM",
        marca: "Afnan",
        categoria: "perfumes-grandes",

        imagen: "images/afnan-9pm.PNG",

        precioMinorista: 72576,
        precioMayorista: 53760,

        presentacion: "Eau de Parfum · 100 ml · Hombre",

        descripcion:
            "Fragancia masculina dulce, intensa y envolvente, ideal para la noche y los climas frescos. Su apertura afrutada y especiada genera una primera impresión llamativa, seguida de un corazón cálido y gourmand. Su fondo avainillado y amaderado aporta profundidad, sensualidad y excelente duración.",

        notasSalida:
            "Manzana, canela, lavanda y bergamota.",

        notasCorazon:
            "Flor de azahar y lirio de los valles.",

        notasFondo:
            "Vainilla, haba tonka, ámbar y pachulí.",

        inspiracion:
            "Inspirado en el estilo de Jean Paul Gaultier Ultra Male.",

           recomendacion:
        "Ideal para salidas nocturnas, citas o eventos donde buscás destacar con una fragancia intensa, juvenil y muy atractiva."
    }
    ,
{
    id: "afnan-9am-dive",
    nombre: "Afnan 9 AM Dive",
    marca: "Afnan",
    categoria: "perfumes-grandes",

    imagen: "images/afnan-9am-dive.PNG",

    precioMinorista: 81648,
    precioMayorista: 60480,
    stock: 0,

    presentacion: "Eau de Parfum · 100 ml · Unisex",

    descripcion:
        "Fragancia fresca, cítrica y aromática, con un perfil moderno y versátil.",

    notasSalida:
        "Limón, menta, grosella negra y pimienta rosa.",

    notasCorazon:
        "Manzana, incienso y cedro.",

    notasFondo:
        "Jengibre, sándalo, pachulí y jazmín.",

    inspiracion:
        "Una fragancia fresca y moderna de estilo masculino y versátil.",

    recomendacion:
        "Ideal para uso diario, días cálidos, salidas informales y ocasiones donde buscás una fragancia fresca y llamativa."
}
,
{
    id: "afnan-9pm-elixir",
    nombre: "Afnan 9 PM Elixir",
    marca: "Afnan",
    categoria: "perfumes-grandes",

    imagen: "images/afnan-9pm-elixir.PNG",

    precioMinorista: 101304,
    precioMayorista: 75040,
    stock: 0,

    presentacion: "Parfum · 100 ml · Unisex",

    descripcion:
        "Fragancia unisex intensa, dulce y sofisticada, pensada para quienes buscan un aroma más profundo y envolvente. Su salida especiada y ligeramente frutada da paso a un corazón cálido y gourmand, mientras que el fondo avainillado y ambarado aporta una estela elegante, seductora y de gran duración. Ideal para la noche y climas frescos.",

    notasSalida:
        "Canela, nuez moscada y manzana.",

    notasCorazon:
        "Lavanda y flor de azahar.",

    notasFondo:
        "Vainilla, ámbar, haba tonka y maderas.",

    inspiracion:
        "Versión más intensa y concentrada del clásico 9 PM, manteniendo el estilo dulce y seductor inspirado en la línea de Jean Paul Gaultier Ultra Male, con mayor profundidad y fijación.",

    recomendacion:
        "Perfecto para noches, salidas y ocasiones especiales donde buscás una fragancia potente, dulce y con mucha presencia."
},
{
    id: "afnan-9pm-night-out",
    nombre: "Afnan 9 PM Night Out",
    marca: "Afnan",
    categoria: "perfumes-grandes",

    imagen: "images/afnan-9pm-nightout.PNG",

    precioMinorista: 131976,
    precioMayorista: 97760,
    stock: 1,

    presentacion: "Extrait de Parfum · 100 ml · Unisex",

    descripcion:
        "Fragancia unisex intensa, moderna y sofisticada, creada especialmente para destacar durante la noche. Comienza con una salida frutal y vibrante acompañada por un toque licoroso, para luego evolucionar hacia un corazón especiado, dulce y elegante. Su fondo cálido y amaderado aporta profundidad, sensualidad y una estela con mucha presencia.",

    notasSalida:
        "Fruta del dragón, bergamota, coñac, lavanda y manzana.",

    notasCorazon:
        "Cardamomo, mahonial, gamuza, toffee y cedro.",

    notasFondo:
        "Haba tonka, Akigalawood, Ambrofix y pachulí.",

    inspiracion:
        "Una propuesta nocturna de la línea 9 PM con un perfil más intenso, frutal, especiado y sofisticado.",

    recomendacion:
        "Perfecto para noches, fiestas, citas y ocasiones especiales donde buscás una fragancia intensa, elegante y llamativa."
},
{
    id: "afnan-9pm-rebel",
    nombre: "Afnan 9 PM Rebel",
    marca: "Afnan",
    categoria: "perfumes-grandes",

    imagen: "images/afnan-9pm-rebel.PNG",

    precioMinorista: 107352,
    precioMayorista: 79520,
    stock: 1,

    presentacion: "Eau de Parfum · 100 ml · Unisex",

    descripcion:
        "Fragancia unisex moderna, fresca y con un giro dulce que la hace adictiva. Su apertura combina notas frutales y especiadas que generan una salida vibrante, seguida de un corazón aromático con toques elegantes, mientras que el fondo avainillado y ambarado le aporta calidez, sensualidad y muy buena duración. Ideal para quienes buscan algo versátil pero con personalidad.",

    notasSalida:
        "Frutas rojas, manzana y especias.",

    notasCorazon:
        "Lavanda y notas aromáticas.",

    notasFondo:
        "Vainilla, ámbar, haba tonka y maderas.",

    inspiracion:
        "Mantiene la esencia dulce y seductora de la línea 9 PM, con un perfil moderno inspirado en fragancias tipo night-out al estilo de Jean Paul Gaultier Ultra Male, pero con un enfoque más fresco y juvenil.",

    recomendacion:
        "Perfecto para uso nocturno, salidas o citas, ideal si buscás una fragancia atractiva, moderna y fácil de llevar."
}
,
{
    id: "al-haramain-amber-oud-aqua-dubai",
    nombre: "Al Haramain Amber Oud Aqua Dubai",
    marca: "Al Haramain",
    categoria: "perfumes-grandes",

    imagen: "images/al-haramain-amber-oud-aqua-dubai.PNG",

    precioMinorista: 130572,
    precioMayorista: 96720,
    stock: 0,

    presentacion: "Extrait de Parfum · 100 ml · Unisex",

    descripcion:
        "Fragancia unisex fresca, luminosa y elegante, con un perfil limpio y ligeramente frutal que transmite sensación de frescura y sofisticación. Su apertura cítrica y vibrante da paso a un corazón jugoso y moderno, mientras que el fondo almizclado y ambarado aporta suavidad, duración y un acabado tipo piel limpia muy agradable. Ideal para quienes buscan un perfume versátil, refinado y fácil de usar.",

    notasSalida:
        "Bergamota, mandarina y notas verdes.",

    notasCorazon:
        "Melón, piña, grosellas negras y ámbar.",

    notasFondo:
        "Almizcle, vainilla, petit grain y notas verdes.",

    inspiracion:
        "Comparte el estilo fresco, limpio y elegante de fragancias como Louis Vuitton Imagination, con un enfoque moderno y veraniego ideal para el día a día.",

    recomendacion:
        "Perfecto para uso diario, climas cálidos o después de la ducha, ideal si buscás una fragancia fresca, elegante y de alta rotación."
},
{
    id: "al-haramain-amber-oud-carbon-edition",
    nombre: "Al Haramain Amber Oud Carbon Edition",
    marca: "Al Haramain",
    categoria: "perfumes-grandes",

    imagen: "images/al-haramain-amber-oud-carbon-edition.PNG",

    precioMinorista: 116532,
    precioMayorista: 86320,
    stock: 0,

    presentacion: "Eau de Parfum · 100 ml · Unisex",

    descripcion:
        "Fragancia unisex intensa, moderna y elegante, con un perfil fresco-especiado y un fondo amaderado profundo que transmite carácter y sofisticación. La salida es vibrante y ligeramente picante, dando paso a un corazón aromático limpio y refinado. En el secado, las notas amaderadas y ambaradas aportan calidez, duración y una estela firme, muy masculina. Un perfume versátil pero con presencia, ideal para destacar sin ser invasivo.",

    notasSalida:
        "Bergamota, pimienta negra y lavanda.",

    notasCorazon:
        "Notas aromáticas, geranio y elemi.",

    notasFondo:
        "Ámbar, madera de cedro, vetiver y almizcle.",

    inspiracion:
        "Comparte el estilo de Creed Green Irish Tweed, con ese carácter fresco, verde y elegante, aunque con un giro más moderno y especiado.",

    recomendacion:
        "Ideal para uso diario, oficina o salidas informales. Funciona muy bien en climas templados a frescos y es perfecto si buscás una fragancia elegante con personalidad."
},
{
    id: "al-haramain-amber-oud-dubai-night",
    nombre: "Al Haramain Amber Oud Dubai Night",
    marca: "Al Haramain",
    categoria: "perfumes-grandes",

    imagen: "images/al-haramain-amber-oud-dubai-night.PNG",

    precioMinorista: 117936,
    precioMayorista: 87360,
    stock: 2,

    presentacion: "Extrait de Parfum · 100 ml · Men",

    descripcion:
        "Fragancia intensa, opulenta y envolvente, con un perfil dulce-amaderado y oriental que destaca por su presencia y sofisticación. La apertura es rica y especiada, dando paso a un corazón cálido y ligeramente gourmand. En el fondo, las notas ambaradas, avainilladas y amaderadas crean una estela profunda, duradera y muy sensual. Un perfume con carácter, ideal para quienes buscan destacar y dejar huella.",

    notasSalida:
        "Azafrán, notas especiadas y cítricos.",

    notasCorazon:
        "Ámbar, caramelo y notas florales.",

    notasFondo:
        "Madera de oud, vainilla, almizcle y resinas.",

    inspiracion:
        "Comparte el estilo opulento y dulce-amaderado de Initio Side Effect, con una vibra nocturna, intensa y altamente adictiva.",

    recomendacion:
        "Ideal para la noche, salidas, ocasiones especiales o climas frescos. Una fragancia potente, de gran proyección y excelente duración, perfecta si buscás algo llamativo y sofisticado."
},
{
    id: "al-haramain-amber-oud-gold-edition",
    nombre: "Al Haramain Amber Oud Gold Edition",
    marca: "Al Haramain",
    categoria: "perfumes-grandes",

    imagen: "images/al-haramain-amber-oud-gold-edition.PNG",

    precioMinorista: 126360,
    precioMayorista: 93600,
    stock: 0,

    presentacion: "Eau de Parfum · 120 ml · Unisex",

    descripcion:
        "Fragancia unisex dulce, frutal y envolvente, con un perfil exótico y muy llamativo que destaca desde el primer momento. La apertura es intensa y jugosa, con frutas vibrantes que captan la atención, mientras que el corazón mantiene esa dulzura tropical con un toque cálido. En el fondo, las notas avainilladas, almizcladas y ambaradas aportan profundidad, fijación y una estela potente y adictiva. Un perfume ideal para quienes buscan algo dulce, divertido y con mucha presencia.",

    notasSalida:
        "Bergamota y notas verdes.",

    notasCorazon:
        "Melón, piña, notas dulces y ámbar.",

    notasFondo:
        "Vainilla, almizcle y notas amaderadas.",

    inspiracion:
        "Comparte el estilo tropical, dulce y ultra llamativo de Xerjoff Erba Pura, con ese perfil frutal intenso y adictivo que no pasa desapercibido.",

    recomendacion:
        "Ideal para salidas, noches, ocasiones especiales o cuando querés destacar. Una fragancia de gran proyección y duración, perfecta si te gustan los perfumes dulces y protagonistas."
}
,
{
    id: "al-wataniah-durrat-al-aroos",
    nombre: "Al Wataniah Durrat Al Aroos",
    marca: "Al Wataniah",
    categoria: "perfumes-grandes",
    imagen: "images/al-wataniah-durrat-al-aroos.PNG",
    precioMinorista: 51840,
    precioMayorista: 38400,
    stock: 0,
    presentacion: "Eau de Parfum · 85 ml · Woman",
    descripcion:
        "Fragancia femenina cálida, especiada y envolvente, con un perfil elegante y sofisticado que transmite sensualidad desde el primer momento. Su apertura es suave y limpia, donde el almizcle blanco se mezcla con un toque terroso que aporta carácter y distinción. El corazón revela una combinación dulce y especiada, con vainilla cremosa, azafrán y cardamomo, logrando un equilibrio perfecto entre dulzura y calidez. En el fondo, las maderas y notas ambaradas se fusionan con matices avainillados, dejando una estela intensa, refinada y muy duradera. Una fragancia ideal para quienes buscan un perfume elegante, profundo y con presencia.",
    notasSalida:
        "Almizcle blanco y cipriol (nagarmota).",
    notasCorazon:
        "Vainilla, azafrán y cardamomo.",
    notasFondo:
        "Madera de guayaco y cumarina (haba tonka).",
    inspiracion:
        "Baccarat Rouge 540 / estilo árabe ambarado especiado. Comparte ese aire cálido, dulce y envolvente, con una vibra elegante y sensual que recuerda a fragancias nicho intensas y sofisticadas.",
    recomendacion:
        "Ideal para noches, salidas y ocasiones especiales. Destaca por su excelente duración y una proyección marcada, perfecta para quienes buscan un perfume femenino protagonista."
},
{
    id: "al-wataniah-oud-mystery-intense",
    nombre: "Al Wataniah Oud Mystery Intense",
    marca: "Al Wataniah",
    categoria: "perfumes-grandes",
    imagen: "images/al-wataniah-oud-mystery-intense.PNG",
    precioMinorista: 55080,
    precioMayorista: 40800,
    stock: 0,
    presentacion: "Eau de Parfum · 100 ml · Men",
    descripcion:
        "Fragancia masculina intensa, especiada y amaderada, con un perfil oscuro y sofisticado que transmite misterio y elegancia. Desde la apertura se percibe una combinación especiada y aromática que genera un impacto fuerte y distintivo. El corazón gira en torno al oud (madera de agar), protagonista absoluto de la composición, aportando profundidad, carácter y un aire lujoso. En el fondo, el almizcle y el pachulí refuerzan la calidez y dejan una estela envolvente, persistente y muy elegante. Una fragancia ideal para quienes buscan algo potente, diferente y con personalidad marcada.",
    notasSalida:
        "Nuez moscada, azafrán y lavanda.",
    notasCorazon:
        "Oud (madera de agar).",
    notasFondo:
        "Almizcle y pachulí.",
    inspiracion:
        "Initio Oud for Greatness. Comparte ese perfil intenso, especiado y lujoso dominado por el oud, con una vibra oscura, elegante y muy llamativa.",
    recomendacion:
        "Ideal para noches, ocasiones especiales y climas frescos. Destaca por su gran presencia, excelente duración y una proyección fuerte, perfecta para quienes buscan perfumes con carácter y mucha personalidad."
},
{
    id: "al-wataniah-rose-mystery-intense",
    nombre: "Al Wataniah Rose Mystery Intense",
    marca: "Al Wataniah",
    categoria: "perfumes-grandes",
    imagen: "images/al-wataniah-rose-mystery-intense.PNG",
    precioMinorista: 59940,
    precioMayorista: 44400,
    stock: 0,
    presentacion: "Eau de Parfum · 100 ml · Woman",
    descripcion:
        "Fragancia femenina delicada, luminosa y romántica, con un perfil floral suave y elegante que transmite frescura y feminidad. La apertura es fresca y ligeramente dulce, con matices florales que se sienten ligeros y agradables desde el primer momento. En el corazón, las flores toman protagonismo con una sensación limpia y envolvente, mientras que el fondo aporta una calidez sutil con notas suaves y cremosas que dejan una estela delicada y armoniosa. Un perfume versátil y encantador, ideal para quienes buscan una fragancia floral clásica con un toque moderno.",
    notasSalida:
        "Notas frescas, cítricos suaves y acordes florales.",
    notasCorazon:
        "Rosa y flores blancas.",
    notasFondo:
        "Almizcle, vainilla suave y maderas ligeras.",
    inspiracion:
        "Recuerda al estilo floral limpio y elegante de perfumes como Delina La Rosée, con una vibra fresca, femenina y muy llevadera.",
    recomendacion:
        "Ideal para uso diario, oficina o días cálidos. Una fragancia sutil, con buena duración y estela moderada, perfecta para quienes prefieren aromas suaves pero sofisticados."
},
{
    id: "al-wataniah-sabah-al-ward",
    nombre: "Al Wataniah Sabah Al Ward",
    marca: "Al Wataniah",
    categoria: "perfumes-grandes",
    imagen: "images/al-wataniah-sabah-al-ward.PNG",
    precioMinorista: 55080,
    precioMayorista: 40800,
    stock: 0,
    presentacion: "Eau de Parfum · 100 ml · Woman",
    descripcion:
        "Fragancia femenina delicada, luminosa y romántica, con un perfil floral suave y elegante que transmite frescura y feminidad. La apertura es fresca y ligeramente dulce, con matices florales que se sienten ligeros y agradables desde el primer momento. En el corazón, las flores toman protagonismo con una sensación limpia y envolvente, mientras que el fondo aporta una calidez sutil con notas suaves y cremosas que dejan una estela delicada y armoniosa. Un perfume versátil y encantador, ideal para quienes buscan una fragancia floral clásica con un toque moderno.",
    notasSalida:
        "Notas frescas, cítricos suaves y acordes florales.",
    notasCorazon:
        "Rosa y flores blancas.",
    notasFondo:
        "Almizcle, vainilla suave y maderas ligeras.",
    inspiracion:
        "Recuerda al estilo floral limpio y elegante de perfumes como Delina La Rosée, con una vibra fresca, femenina y muy llevadera.",
    recomendacion:
        "Ideal para uso diario, oficina o días cálidos. Una fragancia sutil, con buena duración y estela moderada, perfecta para quienes prefieren aromas suaves pero sofisticados."
}
,
{
    id: "armaf-club-de-nuit-iconic",
    nombre: "Armaf Club De Nuit Ico|nic",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-club-de-nuit-iconic.PNG",
    precioMinorista: 96768,
    precioMayorista: 71680,
    stock: 0,
    presentacion: "Eau de Parfum · 105 ml · Men",
    descripcion:
        "Fragancia masculina fresca, elegante y moderna, con un perfil cítrico-aromático y amaderado que transmite limpieza y sofisticación. La apertura es vibrante y refrescante, con notas cítricas que aportan energía y luminosidad desde el primer momento. En el corazón, aparecen matices aromáticos y ligeramente especiados que le dan carácter y profundidad. El fondo amaderado y almizclado cierra la fragancia con una estela limpia, masculina y muy versátil. Un perfume equilibrado y refinado, ideal para quienes buscan un aroma fresco pero con presencia.",
    notasSalida:
        "Cítricos, pomelo, limón y menta.",
    notasCorazon:
        "Jengibre, notas aromáticas y especias suaves.",
    notasFondo:
        "Sándalo, incienso, vetiver y almizcle.",
    inspiracion:
        "Inspirado en el estilo fresco y elegante de Bleu de Chanel, con un perfil moderno, limpio y muy versátil.",
    recomendacion:
        "Ideal para uso diario, oficina o cualquier ocasión. Funciona muy bien en climas cálidos o templados. Una fragancia con buena proyección y duración, perfecta para un uso constante con un toque sofisticado."
},
{
    id: "armaf-club-de-nuit-imperiale",
    nombre: "Armaf Club De Nuit Impériale",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-club-de-nuit-imperiale.PNG",
    precioMinorista: 95256,
    precioMayorista: 70560,
    stock: 0,
    presentacion: "Eau de Parfum · 105 ml · Woman",
    descripcion:
        "Fragancia femenina elegante, sofisticada y envolvente, con un perfil floral-afrutado y cremoso que transmite lujo y delicadeza. La apertura es luminosa y dulce, con notas frutales jugosas que aportan frescura y feminidad desde el primer instante. En el corazón, se despliega un bouquet floral refinado, donde la rosa toma protagonismo con un carácter suave y aterciopelado. El fondo es cálido y adictivo, con acordes cremosos y almizclados que dejan una estela duradera y seductora. Un perfume distinguido y moderno, ideal para quienes buscan un aroma femenino con presencia y elegancia.",
    notasSalida:
        "Lichi, pera y bergamota.",
    notasCorazon:
        "Rosa turca, peonía y notas florales.",
    notasFondo:
        "Vainilla, almizcle, madera de cachemira e incienso.",
    inspiracion:
        "Inspirado en el estilo lujoso y femenino de Delina Exclusif, con un perfil dulce, floral y cremoso de alta elegancia.",
    recomendacion:
        "Ideal para uso diario elegante o salidas especiales. Funciona muy bien en climas templados o frescos. Destaca por su excelente proyección y duración, dejando una estela femenina, sofisticada y muy atractiva."
},
{
    id: "armaf-club-de-nuit-intense-man",
    nombre: "Armaf Club De Nuit Intense Man",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-club-de-nuit-intense-man.PNG",
    precioMinorista: 86184,
    precioMayorista: 63840,
    stock: 2,
    presentacion: "Eau de Toilette · 105 ml · Men",
    descripcion:
        "Fragancia masculina intensa, elegante y muy atractiva, con un perfil cítrico-frutal y amaderado que combina frescura con profundidad. La apertura es vibrante y llamativa, con notas cítricas brillantes acompañadas de un toque frutal que aporta carácter desde el inicio. En el corazón, aparecen acordes ahumados y amaderados que le dan cuerpo y sofisticación. El fondo es profundo y duradero, con maderas, almizcle y un toque dulce que deja una estela potente y seductora. Un perfume icónico y versátil, ideal para quienes buscan destacar con un aroma masculino, moderno y con gran presencia.",
    notasSalida:
        "Limón, piña, manzana, bergamota y grosella negra.",
    notasCorazon:
        "Abedul, jazmín y rosa.",
    notasFondo:
        "Almizcle, ámbar gris, vainilla y pachulí.",
    inspiracion:
        "Inspirado en el reconocido Creed Aventus, con un perfil frutal-ahumado elegante, masculino y altamente adictivo.",
    recomendacion:
        "Ideal para salidas, eventos o uso nocturno, aunque también se adapta al día si buscás destacar. Funciona excelente en climas templados o frescos. Muy buena proyección y duración, con una estela que no pasa desapercibida."
},
{
    id: "armaf-club-de-nuit-maleka",
    nombre: "Armaf Club De Nuit Maleka",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-club-de-nuit-maleka.PNG",
    precioMinorista: 93744,
    precioMayorista: 69440,
    stock: 1,
    presentacion: "Eau de Parfum · 105 ml · Woman",
    descripcion:
        "Fragancia femenina dulce, elegante y envolvente, con un perfil floral-frutal cremoso que transmite delicadeza y sensualidad. La apertura es luminosa y atractiva, con notas frutales jugosas que aportan frescura y un toque juvenil. En el corazón, las flores toman protagonismo con un carácter suave y sofisticado, aportando feminidad y equilibrio. El fondo es cálido y adictivo, con acordes dulces, cremosos y almizclados que dejan una estela duradera y muy seductora. Un perfume moderno y encantador, ideal para quienes buscan un aroma femenino con presencia y dulzura equilibrada.",
    notasSalida:
        "Frutos rojos y cítricos suaves.",
    notasCorazon:
        "Rosa, jazmín y notas florales.",
    notasFondo:
        "Vainilla, almizcle y maderas suaves.",
    inspiracion:
        "Perfil dulce, floral y cremoso, con una vibra elegante y femenina, pensado para quienes disfrutan fragancias modernas y envolventes.",
    recomendacion:
        "Ideal para uso diario, citas o salidas especiales. Funciona muy bien en climas templados o frescos. Buena proyección y duración, dejando una estela femenina, delicada y muy atractiva."
}
,
{
    id: "armaf-club-de-nuit-milestone",
    nombre: "Armaf Club De Nuit Milestone",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-club-de-nuit-milestone.PNG",
    precioMinorista: 81648,
    precioMayorista: 60480,
    stock: 1,
    presentacion: "Eau de Parfum · 105 ml · Unisex",
    descripcion:
        "Fragancia unisex fresca, acuática y elegante, con un perfil cítrico-salino y amaderado que transmite lujo y sofisticación. La apertura es brillante y refrescante, con notas cítricas combinadas con un acorde marino salado que le da un carácter único y distintivo. En el corazón, aparecen matices suaves y ligeramente afrutados que aportan equilibrio y modernidad. El fondo es cálido y refinado, con maderas y almizcle que dejan una estela limpia, envolvente y muy duradera. Un perfume moderno y diferente, ideal para quienes buscan frescura con personalidad.",
    notasSalida:
        "Bergamota, frutas rojas y notas marinas.",
    notasCorazon:
        "Violeta y maderas blancas.",
    notasFondo:
        "Almizcle, vetiver y ámbar.",
    inspiracion:
        "Inspirado en el exclusivo Creed Millésime Impérial, con su característico perfil fresco, salino y elegante.",
    recomendacion:
        "Ideal para uso diario, especialmente en climas cálidos. Perfecto para oficina, salidas diurnas o verano. Muy buena proyección y duración, con una estela fresca, limpia y sofisticada."
},
{
    id: "armaf-club-de-nuit-sillage",
    nombre: "Armaf Club De Nuit Sillage",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-club-de-nuit-sillage.PNG",
    precioMinorista: 84672,
    precioMayorista: 62720,
    stock: 1,
    presentacion: "Eau de Parfum · 105 ml · Unisex",
    descripcion:
        "Fragancia fresca, elegante y sofisticada, con un perfil cítrico, almizclado y ligeramente metálico que transmite limpieza y distinción. La apertura es brillante e intensa, con una mezcla de cítricos vibrantes y notas verdes que generan un impacto inmediato y muy característico. En el corazón, aparecen acordes florales refinados que aportan suavidad y equilibrio, manteniendo ese aire limpio y moderno. El fondo es profundo y envolvente, con almizcle, maderas y ambroxan que dejan una estela duradera, fresca y elegante. Un perfume distintivo y con mucha personalidad, ideal para quienes buscan destacar con un aroma diferente.",
    notasSalida:
        "Bergamota, limón, lima, grosellas negras, hojas de violeta y jengibre.",
    notasCorazon:
        "Iris, rosa y jazmín.",
    notasFondo:
        "Almizcle, ambroxan, sándalo y cedro.",
    inspiracion:
        "Inspirado en Creed Silver Mountain Water, con su característico perfil fresco, limpio y sofisticado.",
    recomendacion:
        "Ideal para uso diario, oficina o salidas elegantes. Funciona excelente en climas templados a cálidos. Muy buena proyección y duración, con una estela fresca, limpia y llamativa."
},
{
    id: "armaf-club-de-nuit-untold",
    nombre: "Armaf Club De Nuit Uńtōld",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-club-de-nuit-untold.PNG",
    precioMinorista: 96768,
    precioMayorista: 71680,
    stock: 0,
    presentacion: "Eau de Parfum · 105 ml · Unisex",
    descripcion:
        "Fragancia intensa, dulce y sofisticada, con un perfil ámbar, especiado y amaderado que transmite lujo y sensualidad. La apertura es envolvente y llamativa, donde el azafrán se mezcla con el jazmín generando un acorde cálido, elegante y ligeramente dulce. En el corazón, el ámbar gris y las notas amaderadas aportan profundidad y un carácter adictivo, creando una sensación envolvente y moderna. El fondo es oscuro y duradero, con resinas y cedro que dejan una estela potente, cálida y extremadamente persistente. Un perfume impactante y elegante, ideal para quienes buscan destacar y dejar huella.",
    notasSalida:
        "Azafrán y jazmín.",
    notasCorazon:
        "Ámbar gris y amberwood.",
    notasFondo:
        "Resina de abeto y cedro.",
    inspiracion:
        "Inspirado en Maison Francis Kurkdjian Baccarat Rouge 540, con su característico perfil dulce, ambarado y envolvente.",
    recomendacion:
        "Ideal para noches, eventos y climas frescos o fríos. Destaca por su enorme proyección y duración, dejando una estela intensa, sofisticada y muy llamativa."
},
{
    id: "armaf-club-de-nuit-urban-man-elixir",
    nombre: "Armaf Club De Nuit Urban Man Elixir",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-club-de-nuit-urban-man-elixir.PNG",
    precioMinorista: 95256,
    precioMayorista: 70560,
    stock: 2,
    presentacion: "Eau de Parfum · 105 ml · Men",
    descripcion:
        "Fragancia masculina intensa, moderna y versátil, con un perfil cítrico, especiado y amaderado que transmite carácter y elegancia urbana. La apertura es fresca y vibrante, combinando notas cítricas con un toque especiado que genera un impacto inmediato y atractivo. En el corazón, aparecen acordes aromáticos y ligeramente florales que aportan profundidad y equilibrio, manteniendo un estilo limpio pero con personalidad. El fondo es cálido y envolvente, con maderas, ámbar y ambroxan que dejan una estela duradera, masculina y sofisticada. Un perfume potente y versátil, ideal para quienes buscan un aroma moderno con presencia.",
    notasSalida:
        "Bergamota, pimienta rosa, jazmín y flor de azahar.",
    notasCorazon:
        "Lavanda, geranio, elemí, vetiver y azafrán.",
    notasFondo:
        "Ambroxan, ámbar, pachulí, cedro y ládano.",
    inspiracion:
        "Inspirado en el estilo de Dior Sauvage, con un giro más intenso y moderno, manteniendo ese ADN fresco-especiado tan reconocido.",
    recomendacion:
        "Ideal para uso diario y nocturno. Funciona muy bien en climas templados a frescos. Excelente rendimiento, con muy buena proyección y duración, dejando una estela llamativa y elegante."
}
,
{
    id: "armaf-club-de-nuit-woman",
    nombre: "Armaf Club De Nuit Woman",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-club-de-nuit-woman.PNG",
    precioMinorista: 87696,
    precioMayorista: 64960,
    stock: 1,
    presentacion: "Eau de Parfum · 105 ml · Woman",
    descripcion:
        "Fragancia femenina elegante, fresca y sofisticada, con un perfil floral frutal que combina dulzura, frescura y sensualidad en perfecto equilibrio. La apertura es vibrante y jugosa, con notas cítricas y frutales que aportan luminosidad y un inicio muy atractivo. En el corazón, se desarrolla un bouquet floral delicado y femenino, donde las flores blancas y la rosa aportan romanticismo y suavidad. El fondo es cálido y envolvente, con almizcle, vainilla y maderas que dejan una estela duradera, elegante y ligeramente dulce. Un perfume versátil y muy femenino, ideal para quienes buscan un aroma sofisticado pero fácil de usar.",
    notasSalida:
        "Bergamota, naranja, pomelo y durazno.",
    notasCorazon:
        "Rosa, jazmín, lichi y geranio.",
    notasFondo:
        "Pachulí, almizcle, vainilla y vetiver.",
    inspiracion:
        "Inspirado en Chanel Coco Mademoiselle, con su característico perfil elegante, fresco y femenino.",
    recomendacion:
        "Ideal para uso diario, oficina o salidas. Funciona excelente en climas templados a cálidos. Muy buena duración y proyección moderada, con una estela limpia, femenina y sofisticada."
},
{
    id: "armaf-odyssey-aqua",
    nombre: "Armaf Odyssey Aqua",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-odyssey-aqua.PNG",
    precioMinorista: 86184,
    precioMayorista: 63840,
    stock: 1,
    presentacion: "Eau de Parfum · 100 ml · Men",
    descripcion:
        "Fragancia masculina fresca, acuática y moderna, con un perfil cítrico-aromático y amaderado que transmite limpieza, energía y sofisticación. La apertura es chispeante y revitalizante, con notas cítricas que aportan una frescura inmediata y muy agradable. En el corazón, la menta y la lavanda toman protagonismo, brindando un carácter aromático limpio, ligeramente mentolado y muy elegante. El fondo se vuelve más profundo y masculino, con ambroxan, pachulí y maderas que aportan una estela moderna, fresca y duradera. Un perfume versátil, ideal para quienes buscan una fragancia fresca pero con personalidad.",
    notasSalida:
        "Naranja, pomelo y notas verdes.",
    notasCorazon:
        "Menta y lavanda.",
    notasFondo:
        "Ambroxan, pachulí y ciprés.",
    inspiracion:
        "Inspirado en Invictus Platinum, con su estilo fresco, aromático y moderno.",
    recomendacion:
        "Ideal para uso diario, gimnasio o días calurosos. Excelente para primavera y verano, con buena duración y proyección moderada, dejando una estela fresca, limpia y masculina."
},
{
    id: "armaf-odyssey-candee",
    nombre: "Armaf Odyssey Candee",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-odyssey-candee.PNG",
    precioMinorista: 61992,
    precioMayorista: 45920,
    stock: 0,
    presentacion: "Eau de Parfum · 100 ml · Woman",
    descripcion:
        "Fragancia femenina dulce, frutal y adictiva, con un perfil gourmand moderno que combina frutas jugosas con acordes cremosos y cálidos. La apertura es vibrante y deliciosa, con frutos rojos y notas cítricas que aportan un inicio brillante, juvenil y muy llamativo. En el corazón, el caramelo se mezcla con jazmín y maracuyá, creando una sensación dulce, exótica y envolvente que le da personalidad y un toque irresistible. El fondo es cálido y seductor, con almizcle, pachulí y ámbar que aportan profundidad y una estela duradera, suave y femenina. Un perfume ideal para quienes aman los aromas dulces con presencia, modernos y con un toque divertido pero sofisticado.",
    notasSalida:
        "Fresa, frambuesa, durazno, bergamota y geranio.",
    notasCorazon:
        "Caramelo, jazmín y maracuyá.",
    notasFondo:
        "Pachulí, almizcle y ámbar.",
    inspiracion:
        "Inspirado en el estilo de Burberry Her Elixir, con su ADN dulce, frutal y cremoso.",
    recomendacion:
        "Ideal para salidas, citas o uso diario si te gustan los perfumes dulces. Funciona muy bien en climas templados a frescos. Buena duración (6–8 hs) y proyección moderada, con una estela gourmand, femenina y envolvente."
},
{
    id: "armaf-odyssey-homme",
    nombre: "Armaf Odyssey Homme",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-odyssey-homme.PNG",
    precioMinorista: 63504,
    precioMayorista: 47040,
    stock: 1,
    presentacion: "Eau de Parfum · 100 ml · Men",
    descripcion:
        "Fragancia masculina cálida, intensa y sofisticada, con un perfil oriental dulce y especiado que transmite elegancia, profundidad y carácter. La apertura es envolvente y atractiva, con notas de vainilla y ámbar que generan un inicio cremoso, dulce y muy seductor. En el corazón, las especias y el iris aportan un toque refinado, ligeramente polvoso y elegante, que le da personalidad y un aire distinguido. El fondo es profundo y masculino, con cuero, jazmín y más vainilla, creando una estela cálida, sensual y duradera. Un perfume ideal para quienes buscan algo dulce pero masculino, con presencia y un estilo sofisticado.",
    notasSalida:
        "Vainilla y ámbar.",
    notasCorazon:
        "Iris, especias y notas orientales.",
    notasFondo:
        "Vainilla, cuero y jazmín.",
    inspiracion:
        "Inspirado en Tom Ford Noir Extreme, con su característico perfil cálido, dulce y especiado.",
    recomendacion:
        "Ideal para noches, citas o eventos especiales. Funciona mejor en climas frescos o fríos."
}
,
{
    id: "armaf-odyssey-homme-white-edition",
    nombre: "Armaf Odyssey Homme White Edition",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-odyssey-homme-white-edition.PNG",
    precioMinorista: 80136,
    precioMayorista: 59360,
    stock: 0,
    presentacion: "Eau de Parfum · 100 ml · Men",
    descripcion:
        "Fragancia masculina fresca, moderna y elegante, con un perfil cítrico-acuático y ambarado que transmite limpieza, energía y sofisticación. La apertura es vibrante y chispeante, con notas cítricas y especiadas que aportan un inicio refrescante, juvenil y muy atractivo. En el corazón, las notas marinas y hojas de violeta crean una sensación limpia, fresca y ligeramente verde, evocando una brisa acuática elegante y moderna. El fondo se vuelve cálido y envolvente, con ámbar, maderas y amberwood que aportan profundidad, dejando una estela masculina, suave y muy agradable. Un perfume versátil y fácil de usar, ideal para quienes buscan frescura con un toque cálido y sofisticado.",
    notasSalida:
        "Pimienta rosa, yuzu y pomelo.",
    notasCorazon:
        "Hojas de violeta y notas marinas.",
    notasFondo:
        "Ámbar, amberwood y madera de gaiac.",
    inspiracion:
        "Inspirado en Emporio Armani Stronger With You, pero con un enfoque más fresco, limpio y menos dulce.",
    recomendacion:
        "Ideal para uso diario, oficina o salidas casuales. Funciona excelente en climas templados a cálidos."
},
{
    id: "armaf-odyssey-limoni",
    nombre: "Armaf Odyssey Limoni",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-odyssey-limoni.PNG",
    precioMinorista: 60480,
    precioMayorista: 44800,
    stock: 1,
    presentacion: "Eau de Parfum · 100 ml · Unisex",
    descripcion:
        "Fragancia unisex fresca, cítrica y vibrante, con un perfil luminoso y energizante que transmite limpieza, dinamismo y sensación de verano constante. La apertura es explosiva y chispeante, con una combinación intensa de limón, mandarina y bergamota que genera un inicio jugoso, refrescante y muy adictivo. En el corazón, aparecen notas marinas, jengibre y flor de azahar, aportando un toque acuático, ligeramente especiado y elegante que equilibra la frescura cítrica con un aire moderno. El fondo se vuelve suave y limpio, con té, almizcle y ámbar, dejando una estela ligera, fresca y muy agradable. Un perfume ideal para quienes buscan una fragancia súper fresca, fácil de usar y perfecta para el calor.",
    notasSalida:
        "Limón, bergamota, mandarina y naranja.",
    notasCorazon:
        "Jengibre, notas marinas y flor de azahar.",
    notasFondo:
        "Té, almizcle y ámbar.",
    inspiracion:
        "Inspirado en el estilo de Louis Vuitton Afternoon Swim, con su ADN cítrico brillante, limpio y veraniego.",
    recomendacion:
        "Ideal para uso diario, gimnasio o días de mucho calor. Funciona excelente en primavera y verano."
},
{
    id: "armaf-odyssey-mandarin-sky",
    nombre: "Armaf Odyssey Mandarin Sky",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-odyssey-mandarin-sky.PNG",
    precioMinorista: 72576,
    precioMayorista: 53760,
    stock: 2,
    presentacion: "Eau de Parfum · 100 ml · Men",
    descripcion:
        "Fragancia masculina fresca, dulce y vibrante, con un perfil cítrico gourmand que combina jugosidad frutal con un fondo cálido y adictivo. La apertura es brillante y chispeante, con mandarina y naranja que aportan un inicio dulce, jugoso y muy llamativo. En el corazón, aparecen notas frutales y un toque acaramelado que le dan cuerpo y un giro más envolvente, manteniendo siempre esa sensación fresca pero con mayor profundidad. El fondo se vuelve cálido y seductor, con vainilla, ámbar y almizcle, dejando una estela dulce, moderna y muy atractiva.",
    notasSalida:
        "Mandarina y naranja.",
    notasCorazon:
        "Notas frutales y caramelo.",
    notasFondo:
        "Vainilla, ámbar y almizcle.",
    inspiracion:
        "Inspirado en el estilo de Jean Paul Gaultier Scandal, con su ADN dulce, jugoso y adictivo.",
    recomendacion:
        "Ideal para quienes buscan una fragancia fresca con un toque dulce. Funciona muy bien en uso diario o salidas informales. Versátil para todo el año, con mejor rendimiento en clima templado a fresco."
},
{
    id: "armaf-odyssey-mandarin-sky-elixir",
    nombre: "Armaf Odyssey Mandarin Sky Elixir",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-odyssey-mandarin-sky-elixir.PNG",
    precioMinorista: 104328,
    precioMayorista: 77280,
    stock: 0,
    presentacion: "Eau de Parfum · 100 ml · Men",
    descripcion:
        "Fragancia masculina dulce, vibrante y adictiva, con un perfil cítrico gourmand moderno que mezcla frescura frutal con un fondo cálido y envolvente. La apertura es intensa y llamativa, con mandarina jugosa y notas dulces que generan un inicio brillante, energético y muy atractivo. En el corazón, aparecen acordes gourmand con un toque cremoso y ligeramente especiado, aportando profundidad y una sensación más envolvente sin perder frescura. El fondo se vuelve cálido y seductor, con vainilla, ámbar y almizcle, dejando una estela dulce, moderna y de gran presencia.",
    notasSalida:
        "Mandarina y notas dulces.",
    notasCorazon:
        "Acordes gourmand y especias suaves.",
    notasFondo:
        "Vainilla, ámbar y almizcle.",
    inspiracion:
        "Inspirado en el estilo de Jean Paul Gaultier Scandal, con su ADN dulce, intenso y adictivo.",
    recomendacion:
        "Ideal para quienes buscan destacar con una fragancia dulce pero fresca. Perfecto para salidas, noches o climas más frescos."
},
{
    id: "armaf-yum-yum",
    nombre: "Armaf Yum Yum",
    marca: "Armaf",
    categoria: "perfumes-grandes",
    imagen: "images/armaf-yum-yum.PNG",
    precioMinorista: 101304,
    precioMayorista: 75040,
    stock: 0,
    presentacion: "Eau de Parfum · 100 ml · Woman",
    descripcion:
        "Fragancia femenina dulce, frutal y ultra adictiva, con un perfil gourmand moderno que combina notas jugosas con un fondo cremoso y envolvente. La apertura es deliciosa y llamativa, con frutas rojas y acordes azucarados que generan un inicio dulce, juvenil y muy atractivo. En el corazón, aparecen notas florales suaves y matices golosos que le dan feminidad y un toque elegante sin perder su esencia divertida. El fondo se vuelve cálido y cremoso, con vainilla, almizcle y ámbar, dejando una estela dulce, envolvente y muy duradera.",
    notasSalida:
        "Frutas rojas y notas dulces.",
    notasCorazon:
        "Flores suaves y acordes gourmand.",
    notasFondo:
        "Vainilla, almizcle y ámbar.",
    inspiracion:
        "Inspirado en el estilo de Kayali Yum Pistachio Gelato 33, con su ADN dulce, cremoso y adictivo.",
    recomendacion:
        "Ideal para quienes aman las fragancias dulces y llamativas. Perfecto para salidas, citas o climas frescos."
}
,
{
    id: "asdaaf-ameerat-al-arab",
    nombre: "Asdaaf Ameerat Al Arab",
    marca: "Asdaaf",
    categoria: "perfumes-grandes",
    imagen: "images/asdaaf-ameerat-al-arab.PNG",
    precioMinorista: 53460,
    precioMayorista: 39600,
    stock: 1,
    presentacion: "Eau de Parfum · 100 ml · Woman",
    descripcion:
        "Fragancia femenina intensa, dulce y exótica, con una personalidad elegante y envolvente. Tiene un perfil oriental moderno que combina notas frutales y florales con un fondo cálido y seductor. La apertura es vibrante y llamativa, con frutas dulces y toques frescos que generan una primera impresión femenina y sofisticada. En el corazón, las flores toman protagonismo con un carácter delicado pero presente, aportando elegancia y profundidad a la fragancia. El fondo es cálido, cremoso y duradero, con vainilla, almizcle y maderas suaves que dejan una estela envolvente, sensual y muy adictiva.",
    notasSalida:
        "Frutas dulces y notas frescas.",
    notasCorazon:
        "Flores blancas y acordes florales.",
    notasFondo:
        "Vainilla, almizcle y maderas suaves.",
    inspiracion:
        "Inspirado en el estilo de fragancias árabes dulces, elegantes y seductoras.",
    recomendacion:
        "Ideal para quienes buscan una fragancia femenina intensa y sofisticada. Perfecta para la noche, salidas o eventos."
},
{
    id: "asdaaf-ameerat-al-arab-prive-rose",
    nombre: "Asdaaf Ameerat Al Arab Prive Rose",
    marca: "Asdaaf",
    categoria: "perfumes-grandes",
    imagen: "images/asdaaf-ameerat-al-arab-prive-rose.PNG",
    precioMinorista: 66420,
    precioMayorista: 49200,
    stock: 0,
    presentacion: "Eau de Parfum · 100 ml · Woman",
    descripcion:
        "Fragancia femenina dulce, elegante y profundamente romántica, con un perfil floral gourmand que combina la delicadeza de la rosa con un fondo cremoso y seductor. La apertura es suave y envolvente, con notas dulces que se mezclan con un toque floral, generando una primera impresión femenina, fina y muy atractiva. En el corazón, la rosa toma protagonismo con un carácter aterciopelado y sofisticado, acompañada por acordes dulces que aportan calidez y un aire romántico. El fondo es cremoso y duradero, con vainilla, almizcle y maderas suaves que dejan una estela elegante, envolvente y muy adictiva.",
    notasSalida:
        "Notas dulces y acordes florales.",
    notasCorazon:
        "Rosa y flores suaves.",
    notasFondo:
        "Vainilla, almizcle y maderas.",
    inspiracion:
        "Inspirado en el estilo de fragancias de rosa dulce modernas, con un perfil elegante y envolvente.",
    recomendacion:
        "Ideal para quienes aman las fragancias florales dulces con presencia. Perfecta para citas, salidas o climas frescos."
}
,
{
    id: "bharara-king",
    nombre: "Bharara King",
    marca: "Bharara",
    categoria: "perfumes-grandes",
    imagen: "images/bharara-king.PNG",
    precioMinorista: 134784,
    precioMayorista: 99840,
    stock: 0,
    presentacion: "Eau de Parfum · 100 ml · Men",
    descripcion:
        "Fragancia fresca, dulce y vibrante, con un perfil cítrico frutal moderno que combina notas jugosas con un fondo cálido y adictivo. Es un perfume llamativo, limpio y con mucha presencia desde la primera aplicación. La apertura es brillante y chispeante, con naranja, bergamota y limón que aportan un inicio fresco, jugoso y muy atractivo. En el corazón, aparecen notas frutales dulces que le dan cuerpo y un carácter más envolvente, manteniendo ese equilibrio entre frescura y dulzura. El fondo es cremoso y seductor, con vainilla, ámbar y almizcle blanco que dejan una estela moderna, dulce y muy adictiva.",
    notasSalida:
        "Naranja, bergamota y limón.",
    notasCorazon:
        "Notas frutales.",
    notasFondo:
        "Vainilla, ámbar y almizcle blanco.",
    inspiracion:
        "Inspirado en Xerjoff Erba Pura, con su ADN frutal, dulce, limpio y altamente adictivo.",
    recomendacion:
        "Ideal para quienes buscan una fragancia fresca pero dulce, que llame la atención. Perfecta para uso diario, salidas o climas templados a frescos."
},
{
    id: "bharara-king-parfum",
    nombre: "Bharara King Parfum",
    marca: "Bharara",
    categoria: "perfumes-grandes",
    imagen: "images/bharara-king-parfum.PNG",
    precioMinorista: 136188,
    precioMayorista: 100880,
    stock: 0,
    presentacion: "Parfum · 100 ml · Men",
    descripcion:
        "Fragancia intensa, dulce y vibrante, con un perfil cítrico frutal moderno llevado a una versión más profunda, cremosa y potente. Es una evolución del clásico Bharara King, con mayor concentración y una presencia aún más marcada. La apertura es explosiva y llamativa, con cítricos brillantes como naranja, limón y bergamota, que aportan un inicio fresco, jugoso y muy atractivo. En el corazón, las notas frutales toman protagonismo, generando un carácter dulce y envolvente que mantiene el equilibrio entre frescura y sensualidad. El fondo es cremoso y adictivo, con vainilla, ámbar y almizcle blanco que dejan una estela intensa, moderna y muy seductora.",
    notasSalida:
        "Naranja, limón y bergamota.",
    notasCorazon:
        "Notas frutales.",
    notasFondo:
        "Vainilla, ámbar y almizcle blanco.",
    inspiracion:
        "Inspirado en Xerjoff Erba Pura, con su ADN frutal, dulce, limpio y altamente adictivo.",
    recomendacion:
        "Ideal para quienes buscan una fragancia dulce, potente y que se haga notar. Perfecta para salidas, noche o climas frescos."
},
{
    id: "bharara-king-gold-edition",
    nombre: "Bharara King Gold Edition",
    marca: "Bharara",
    categoria: "perfumes-grandes",
    imagen: "images/bharara-king-gold-edition.PNG",
    precioMinorista: 155844,
    precioMayorista: 115440,
    stock: 0,
    presentacion: "Eau de Parfum · 100 ml · Men",
    descripcion:
        "Fragancia dulce, tropical y ultra adictiva, con un perfil frutal cremoso que combina notas cítricas jugosas con un fondo cálido y envolvente. Es una versión más exótica y llamativa dentro de la línea King. La apertura es brillante y chispeante, con naranja, bergamota y limón que aportan un inicio fresco, jugoso y muy atractivo. En el corazón, aparecen frutas dulces y coco, generando un carácter tropical, cremoso y envolvente que lo hace destacar y volverse más seductor. El fondo es cálido y adictivo, con vainilla, ámbar y almizcle blanco, dejando una estela dulce, moderna y muy llamativa.",
    notasSalida:
        "Naranja, bergamota y limón.",
    notasCorazon:
        "Frutas dulces y coco.",
    notasFondo:
        "Vainilla, ámbar y almizcle blanco.",
    inspiracion:
        "Inspirado en Xerjoff Erba Pura, con un giro más tropical, cremoso y dulce.",
    recomendacion:
        "Ideal para quienes buscan una fragancia dulce, exótica y que destaque. Perfecta para salidas, noche o climas frescos."
}
,
{
    id: "french-avenue-liquid-brun",
    nombre: "French Avenue Liquid Brun",
    marca: "French Avenue",
    categoria: "perfumes-grandes",
    imagen: "images/french-avenue-liquid-brun.PNG",
    precioMinorista: 111888,
    precioMayorista: 82880,
    stock: 0,
    presentacion: "Eau de Parfum · 100 ml · Men",
    descripcion:
        "Fragancia intensa, dulce y especiada, con un perfil gourmand moderno que combina vainilla cremosa con notas cálidas y envolventes. Es un perfume elegante, seductor y con mucha personalidad. La apertura es especiada y llamativa, con canela, cardamomo y un toque cítrico de bergamota que generan un inicio cálido, dulce y muy atractivo. En el corazón, la vainilla bourbon toma protagonismo junto a matices resinosos, aportando una dulzura sofisticada, cremosa y profundamente envolvente. El fondo es adictivo y sensual, con praliné, ambroxan, maderas y almizcle, dejando una estela cálida, dulce y muy seductora.",
    notasSalida:
        "Canela, cardamomo, bergamota y flor de azahar.",
    notasCorazon:
        "Vainilla bourbon y elemí.",
    notasFondo:
        "Praliné, ambroxan, maderas y almizcle.",
    inspiracion:
        "Inspirado en Parfums de Marly Althaïr, con su ADN vainilla especiada, cremosa y de lujo.",
    recomendacion:
        "Ideal para quienes buscan una fragancia dulce, elegante y seductora. Perfecta para citas, salidas o climas frescos."
}
,
{
    id: "lattafa-afeef",
    nombre: "Lattafa Afeef",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-afeef.PNG",
    precioMinorista: 161460,
    precioMayorista: 119600,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia fresca, elegante y equilibrada, con un perfil cítrico aromático moderno que combina luminosidad con un fondo suave y sofisticado. Es un perfume limpio, versátil y muy agradable. La apertura es brillante y refrescante, con notas cítricas que aportan un inicio limpio, chispeante y energizante. En el corazón, aparecen acordes aromáticos y ligeramente especiados que le dan carácter y un toque refinado sin perder frescura. El fondo es suave y envolvente, con almizcle, maderas y matices ambarados que dejan una estela limpia, elegante y muy versátil.",

    notasSalida: "Cítricos, notas frescas",
    notasCorazon: "Notas aromáticas, especias suaves",
    notasFondo: "Almizcle, maderas, ámbar",

    inspiracion:
        "Inspirado en Chanel Allure Homme Sport, con un perfil fresco, limpio y elegante.",

    recomendacion:
        "Ideal para quienes buscan una fragancia versátil y sofisticada. Perfecta para uso diario, oficina o climas cálidos."
},
{
    id: "lattafa-ajwad",
    nombre: "Lattafa Ajwad",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-ajwad.PNG",
    precioMinorista: 50220,
    precioMayorista: 37200,
    stock: 0,
    presentacion: "EAU DE PARFUM – 60 ML – UNISEX",

    descripcion:
        "Fragancia dulce, suave y envolvente, con un perfil floral frutal moderno que combina delicadeza con un fondo cálido y cremoso. Es un perfume elegante, agradable y muy fácil de usar. La apertura es frutal y levemente dulce, con notas jugosas que generan un inicio suave, femenino y atractivo. En el corazón, aparecen flores delicadas que aportan elegancia y un aire limpio, equilibrando la dulzura con un toque sofisticado. El fondo es cremoso y reconfortante, con vainilla, almizcle y maderas suaves que dejan una estela cálida, dulce y muy agradable.",

    notasSalida: "Notas frutales",
    notasCorazon: "Flores suaves",
    notasFondo: "Vainilla, almizcle, maderas",

    inspiracion:
        "Inspirado en Maison Francis Kurkdjian Baccarat Rouge 540, con un perfil dulce, limpio y envolvente.",

    recomendacion:
        "Ideal para quienes buscan una fragancia dulce y elegante, fácil de usar en cualquier ocasión. Perfecta para uso diario o salidas."
},
{
    id: "lattafa-ajwad-pink-to-pink",
    nombre: "Lattafa Ajwad Pink to Pink",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-ajwad-pink-to-pink.PNG",
    precioMinorista: 48600,
    precioMayorista: 36000,
    stock: 0,
    presentacion: "EAU DE PARFUM – 60 ML – UNISEX",

    descripcion:
        "Fragancia dulce, frutal y moderna, con un perfil juvenil y vibrante que combina notas jugosas con un fondo cremoso y adictivo. Es un perfume llamativo, femenino y muy fácil de amar. La apertura es fresca y chispeante, con frutas dulces que generan un inicio jugoso, divertido y muy atractivo. En el corazón, aparecen acordes florales suaves combinados con matices dulces, aportando feminidad y un toque delicado sin perder su carácter juvenil. El fondo es cálido y envolvente, con vainilla, almizcle y maderas suaves que dejan una estela dulce, cremosa y muy agradable.",

    notasSalida: "Frutas dulces",
    notasCorazon: "Flores suaves, acordes dulces",
    notasFondo: "Vainilla, almizcle, maderas",

    inspiracion:
        "Inspirado en Burberry Her, con un perfil frutal dulce, moderno y adictivo.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina, dulce y llamativa. Perfecta para uso diario, salidas o climas templados."
},
{
    id: "lattafa-al-noble-ameer",
    nombre: "Lattafa Al Noble Ameer",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-al-noble-ameer.PNG",
    precioMinorista: 63180,
    precioMayorista: 46800,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia intensa, cálida y sofisticada, con un perfil oriental amaderado que combina especias, maderas y un fondo dulce envolvente. Es un perfume con carácter, elegante y muy llamativo. La apertura es especiada y profunda, con notas cálidas que generan un inicio potente, exótico y muy atractivo. En el corazón, aparecen acordes amaderados y resinosos que aportan cuerpo y una sensación elegante, manteniendo un aire misterioso y refinado. El fondo es denso y seductor, con vainilla, ámbar y almizcle que dejan una estela cálida, envolvente y de gran presencia.",

    notasSalida: "Especias, notas cálidas",
    notasCorazon: "Maderas, resinas",
    notasFondo: "Vainilla, ámbar, almizcle",

    inspiracion:
        "Inspirado en Initio Oud for Greatness, con un perfil oscuro, especiado y altamente seductor.",

    recomendacion:
        "Ideal para quienes buscan una fragancia intensa y con personalidad. Perfecta para la noche, eventos o climas fríos."
}
,
{
    id: "lattafa-angham",
    nombre: "Lattafa Angham",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-angham.PNG",
    precioMinorista: 68040,
    precioMayorista: 50400,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia elegante, dulce y envolvente, con un perfil oriental gourmand que combina cremosidad y calidez en perfecta armonía. Es un perfume moderno, atractivo y muy versátil, ideal para destacar con sutileza. La apertura es suave y ligeramente dulce, con notas que generan una primera impresión delicada pero cautivante. En el corazón, se desarrollan acordes más cremosos y gourmand, aportando una sensación reconfortante, elegante y muy adictiva. El fondo es cálido y seductor, con vainilla, ámbar y almizcle que dejan una estela envolvente, duradera y muy agradable.",

    notasSalida: "Notas dulces, acordes suaves",
    notasCorazon: "Notas cremosas, gourmand",
    notasFondo: "Vainilla, ámbar, almizcle",

    inspiracion:
        "Inspirado en Burberry Goddess, con un perfil más dulce, gourmand y envolvente, ideal para quienes buscan una versión más intensa y seductora.",

    recomendacion:
        "Ideal para quienes buscan una fragancia dulce, elegante y versátil. Perfecta para uso diario, salidas o climas frescos."
},
{
    id: "lattafa-asad",
    nombre: "Lattafa Asad",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-asad.PNG",
    precioMinorista: 69552,
    precioMayorista: 51520,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – MEN",

    descripcion:
        "Fragancia intensa, especiada y elegante, con un perfil oriental ambarado que transmite fuerza y carácter. Es un perfume moderno, seductor y con mucha presencia, ideal para quienes buscan destacar. La apertura es potente y especiada, con un toque picante que genera una primera impresión fuerte, masculina y muy llamativa. En el corazón, aparecen acordes cálidos y ligeramente dulces que equilibran la intensidad inicial, aportando profundidad y sofisticación. El fondo es denso y envolvente, con vainilla, ámbar y maderas que dejan una estela duradera, sensual y muy adictiva.",

    notasSalida: "Pimienta negra, especias",
    notasCorazon: "Café, vainilla, notas cálidas",
    notasFondo: "Ámbar, maderas, vainilla",

    inspiracion:
        "Inspirado en Dior Sauvage Elixir, con un perfil especiado, oscuro y altamente seductor.",

    recomendacion:
        "Ideal para quienes buscan una fragancia intensa y con personalidad. Perfecta para la noche, salidas o climas fríos."
},
{
    id: "lattafa-asad-bourbon",
    nombre: "Lattafa Asad Bourbon",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-asad-bourbon.PNG",
    precioMinorista: 83160,
    precioMayorista: 61600,
    stock: 2,
    presentacion: "EAU DE PARFUM – 100 ML – MEN",

    descripcion:
        "Fragancia cálida, dulce y especiada, con un perfil oriental gourmand que mezcla intensidad y elegancia en un estilo moderno y adictivo. Es un perfume con mucha presencia, ideal para quienes buscan algo envolvente y distinto. La apertura es intensa y especiada, con un toque dulce que recuerda al licor, generando un inicio potente y muy atractivo. En el corazón, se desarrollan acordes cálidos y gourmand que aportan cremosidad y profundidad, manteniendo un perfil seductor y elegante. El fondo es denso y envolvente, con vainilla, ámbar y maderas que dejan una estela dulce, cálida y duradera, con un aire sofisticado.",

    notasSalida: "Especias, notas dulces, acorde licoroso",
    notasCorazon: "Notas gourmand, vainilla, acordes cálidos",
    notasFondo: "Ámbar, maderas, vainilla",

    inspiracion:
        "Inspirado en fragancias gourmand licorosas de alta gama, con un perfil dulce, cálido y especiado.",

    recomendacion:
        "Ideal para quienes buscan una fragancia intensa, dulce y seductora. Perfecta para la noche, salidas o climas fríos."
},
{
    id: "lattafa-asad-elixir",
    nombre: "Lattafa Asad Elixir",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-asad-elixir.PNG",
    precioMinorista: 87696,
    precioMayorista: 64960,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – MEN",

    descripcion:
        "Fragancia intensa, especiada y sofisticada, con un perfil oriental ambarado que combina frescura aromática con un fondo cálido y envolvente. Es un perfume elegante, moderno y con mucha presencia. La apertura es fresca y especiada, con un contraste atractivo que genera una salida potente pero refinada. En el corazón, se desarrollan acordes aromáticos y ligeramente dulces que aportan equilibrio, elegancia y profundidad. El fondo es cálido y seductor, con vainilla, ámbar y maderas que dejan una estela duradera, envolvente y muy masculina.",

    notasSalida: "Especias, notas aromáticas",
    notasCorazon: "Lavanda, acordes dulces, notas cálidas",
    notasFondo: "Vainilla, ámbar, maderas",

    inspiracion:
        "Inspirado en Dior Sauvage Elixir, con un perfil especiado, aromático y profundamente seductor.",

    recomendacion:
        "Ideal para quienes buscan una fragancia elegante, intensa y versátil. Perfecta para la noche, salidas o climas frescos."
}
,
{
    id: "lattafa-asad-zanzibar",
    nombre: "Lattafa Asad Zanzibar",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-asad-zanzibar.PNG",
    precioMinorista: 61992,
    precioMayorista: 45920,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – MEN",

    descripcion:
        "Fragancia fresca, exótica y envolvente, con un perfil oriental aromático que combina notas marinas, dulzura cremosa y un fondo cálido. Es un perfume moderno, distinto y muy llamativo, ideal para quienes buscan salir de lo común. La apertura es fresca y especiada, con un contraste entre lo aromático y lo picante que genera un inicio vibrante y atractivo. En el corazón, aparece un acorde tropical y salado con coco e iris, aportando una sensación exótica, cremosa y ligeramente dulce que lo hace único. El fondo es cálido y envolvente, con vainilla e incienso que le dan profundidad, sensualidad y una estela duradera.",

    notasSalida: "Pimienta negra, lavanda",
    notasCorazon: "Coco salado, iris",
    notasFondo: "Vainilla, incienso",

    inspiracion:
        "Inspirado en Jean Paul Gaultier Le Beau Le Parfum, con un perfil tropical, dulce y seductor, ideal para quienes buscan una fragancia fresca pero con personalidad.",

    recomendacion:
        "Ideal para quienes buscan una fragancia fresca pero intensa, con un toque dulce y exótico. Perfecta para verano, salidas o uso diario."
},
{
    id: "lattafa-badee-al-oud-amethyst",
    nombre: "Lattafa Bade'e Al Oud Amethyst",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-badee-al-oud-amethyst.PNG",
    precioMinorista: 58968,
    precioMayorista: 43680,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia intensa, elegante y envolvente, con un perfil oriental floral ambarado que combina rosas profundas, especias y un fondo dulce con oud. Es un perfume sofisticado, llamativo y con mucha personalidad. La apertura es especiada y vibrante, con pimienta rosa y bergamota que generan un inicio fresco pero potente, captando la atención desde el primer momento. En el corazón, la rosa toma protagonismo con un carácter intenso y elegante, acompañada por jazmín, aportando un perfil floral profundo, seductor y refinado. El fondo es cálido y denso, con oud, ámbar y vainilla que dejan una estela dulce, envolvente y muy duradera, con un aire oscuro y lujoso.",

    notasSalida: "Pimienta rosa, bergamota",
    notasCorazon: "Rosa turca, rosa búlgara, jazmín",
    notasFondo: "Oud, ámbar, vainilla",

    inspiracion:
        "Inspirado en Initio Atomic Rose, con un perfil rosado, intenso y seductor, combinado con un fondo más oscuro y oriental.",

    recomendacion:
        "Ideal para quienes buscan una fragancia potente, elegante y con mucha presencia. Perfecta para la noche, ocasiones especiales o climas frescos."
},
{
    id: "lattafa-badee-al-oud-for-glory",
    nombre: "Lattafa Bade'e Al Oud For Glory",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-badee-al-oud-for-glory.PNG",
    precioMinorista: 58968,
    precioMayorista: 43680,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – MEN",

    descripcion:
        "Fragancia intensa, oscura y sofisticada, con un perfil oriental amaderado que combina especias, oud y un fondo dulce envolvente. Es un perfume con mucha presencia, elegante y altamente seductor. La apertura es potente y especiada, con un carácter cálido que genera un inicio profundo, exótico y muy llamativo. En el corazón, el oud toma protagonismo junto a acordes amaderados, aportando cuerpo, misterio y una sensación lujosa. El fondo es denso y envolvente, con vainilla, ámbar y notas dulces que equilibran la intensidad, dejando una estela duradera y adictiva.",

    notasSalida: "Azafrán, nuez moscada, lavanda",
    notasCorazon: "Oud, notas amaderadas",
    notasFondo: "Pachulí, ámbar, vainilla",

    inspiracion:
        "Inspirado en Initio Oud for Greatness, con un perfil oscuro, especiado y altamente seductor.",

    recomendacion:
        "Ideal para quienes buscan una fragancia intensa y con carácter. Perfecta para la noche, eventos o climas fríos."
},
{
    id: "lattafa-badee-al-oud-honor-and-glory",
    nombre: "Lattafa Bade'e Al Oud Honor & Glory",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-badee-al-oud-honor-and-glory.PNG",
    precioMinorista: 58968,
    precioMayorista: 43680,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia dulce, exótica y envolvente, con un perfil oriental gourmand que mezcla notas frutales cremosas, especias y un fondo cálido irresistible. Es un perfume moderno, llamativo y muy adictivo. La apertura es intensa y gourmand, con una combinación de piña y crème brûlée que genera un inicio dulce, jugoso y totalmente diferente. En el corazón, aparecen especias cálidas como canela y pimienta, junto a resinas que aportan profundidad, cuerpo y un toque sofisticado. El fondo es cremoso y envolvente, con vainilla, sándalo y notas amaderadas que dejan una estela dulce, cálida y duradera.",

    notasSalida: "Piña, crème brûlée",
    notasCorazon: "Canela, benjuí, cúrcuma, pimienta negra",
    notasFondo: "Vainilla, sándalo, cachemira, musgo",

    inspiracion:
        "Inspirado en fragancias niche gourmand modernas, con un perfil dulce, cremoso y especiado, destacándose por su ADN único y adictivo.",

    recomendacion:
        "Ideal para quienes buscan una fragancia dulce, intensa y diferente. Perfecta para la noche, salidas o climas frescos."
}
,
{
    id: "lattafa-badee-al-oud-noble-blush",
    nombre: "Lattafa Bade'e Al Oud Noble Blush",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-badee-al-oud-noble-blush.PNG",
    precioMinorista: 61992,
    precioMayorista: 45920,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia dulce, cremosa y elegante, con un perfil floral gourmand que combina delicadeza y calidez en una composición moderna y adictiva. Es un perfume suave pero con presencia, ideal para quienes buscan algo femenino y diferente. La apertura es delicada y aterciopelada, con un acorde de rosa lechosa que genera una sensación suave, romántica y envolvente desde el primer momento. En el corazón, aparecen notas gourmand de merengue y almendra, aportando una dulzura cremosa, ligera y muy elegante, sin volverse pesada. El fondo es cálido y seductor, con vainilla, sándalo y almizcle que dejan una estela suave, limpia y duradera, con un aire sofisticado.",

    notasSalida: "Rose milk",
    notasCorazon: "Merengue, almendra",
    notasFondo: "Vainilla, sándalo, almizcle",

    inspiracion:
        "No tiene un clon directo confirmado, pero se acerca a fragancias niche tipo Amouage Guidance por su perfil cremoso, floral y sofisticado con un toque gourmand.",

    recomendacion:
        "Ideal para quienes buscan una fragancia dulce, femenina y elegante. Perfecta para uso diario, citas o climas frescos."
},
{
    id: "lattafa-badee-al-oud-sublime",
    nombre: "Lattafa Bade'e Al Oud Sublime",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-badee-al-oud-sublime.PNG",
    precioMinorista: 60480,
    precioMayorista: 44800,
    stock: 2,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia fresca, frutal y elegante, con un perfil amaderado aromático que combina notas jugosas con un fondo cálido y sofisticado. Es un perfume moderno, llamativo y muy versátil, ideal para destacar con un estilo diferente. La apertura es vibrante y afrutada, con manzana verde, lichi y rosa que generan un inicio dulce, fresco y muy atractivo. En el corazón, aparecen notas de ciruela y jazmín, aportando un toque más profundo, elegante y ligeramente floral que equilibra la frescura inicial. El fondo es cálido y envolvente, con vainilla, musgo y pachulí que dejan una estela dulce, limpia y duradera, con un aire sofisticado.",

    notasSalida: "Manzana verde, lichi, rosa",
    notasCorazon: "Ciruela, jazmín",
    notasFondo: "Vainilla, musgo, pachulí",

    inspiracion:
        "Inspirado en Kayali Eden Juicy Apple, con un perfil más fresco, frutal y ligeramente más amaderado.",

    recomendacion:
        "Ideal para quienes buscan una fragancia fresca, dulce y elegante. Perfecta para uso diario, primavera/verano o climas cálidos."
},
{
    id: "lattafa-confidential-private-gold",
    nombre: "Lattafa Confidential Private Gold",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-confidential-private-gold.PNG",
    precioMinorista: 48600,
    precioMayorista: 36000,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia intensa, dulce y exótica, con un perfil oriental frutal que mezcla notas tropicales, acordes cálidos y un fondo envolvente. Es un perfume llamativo, moderno y con mucha presencia, ideal para quienes buscan destacar con un aroma diferente y adictivo. La apertura es explosiva y jugosa, con notas frutales tropicales, maracuyá, durazno y pera que aportan un inicio dulce, vibrante y muy atractivo. En el corazón aparecen notas florales y cálidas que suavizan la salida frutal y le dan un aire elegante, sensual y sofisticado. El fondo es cremoso y envolvente, con vainilla, almizcle, sándalo y heliotropo que dejan una estela dulce, intensa y duradera, con un toque oriental muy marcado.",

    notasSalida: "Maracuyá, durazno, pera, frambuesa, casis",
    notasCorazon: "Lirio de los valles, notas florales",
    notasFondo: "Vainilla, almizcle, sándalo, heliotropo",

    inspiracion:
        "Inspirado en Erba Pura Eau de Parfum de Xerjoff, con un perfil tropical, dulce y ligeramente más intenso.",

    recomendacion:
        "Ideal para quienes buscan una fragancia frutal, dulce y con mucha proyección. Perfecta para salidas, noches, clima fresco o para dejar una estela que destaque."
},
{
    id: "lattafa-eclaire",
    nombre: "Lattafa Eclaire",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-eclaire.PNG",
    precioMinorista: 89208,
    precioMayorista: 66080,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia dulce, cremosa y ultra gourmand, con un perfil avainillado y caramelizado que transmite calidez, feminidad y mucha elegancia. Es un perfume envolvente y adictivo, ideal para quienes aman los aromas dulces con presencia y una sensación reconfortante. La apertura es deliciosa y suave, con notas de caramelo, leche y azúcar que generan un inicio cremoso, cálido y muy tentador. En el corazón aparecen flores blancas y miel, aportando un toque elegante y femenino que equilibra perfectamente la dulzura gourmand. El fondo es intenso y aterciopelado, con vainilla, praliné y almizcle que dejan una estela dulce, sofisticada y duradera, con un aire elegante y moderno.",

    notasSalida: "Caramelo, leche, azúcar",
    notasCorazon: "Flores blancas, miel",
    notasFondo: "Vainilla, praliné, almizcle",

    inspiracion:
        "Inspirado en Bianco Latte Eau de Parfum de Giardini di Toscana, con un perfil dulce, cremoso y gourmand muy similar.",

    recomendacion:
        "Ideal para quienes buscan una fragancia cálida, dulce y femenina. Perfecta para otoño/invierno, salidas, noches o para amantes de los perfumes gourmand intensos."
}
,
{
    id: "lattafa-eclaire-pistache",
    nombre: "Lattafa Eclaire Pistache",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-eclaire-pistache.PNG",
    precioMinorista: 61992,
    precioMayorista: 45920,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia cremosa, dulce y sofisticada, con un perfil gourmand avainillado donde el pistacho toma protagonismo junto a acordes lactónicos y un fondo cálido irresistible. Es un perfume moderno, elegante y muy adictivo, ideal para quienes aman los aromas dulces con un toque diferente y refinado. La apertura es suave y deliciosa, con pistacho cremoso, notas dulces y un toque gourmand que generan un inicio cálido, envolvente y muy atractivo. En el corazón aparecen acordes florales y cremosos que equilibran la dulzura y aportan un aire elegante y femenino, sin perder la sensación gourmand. El fondo es intenso y aterciopelado, con vainilla, almizcle y maderas suaves que dejan una estela cálida, dulce y duradera, con mucha presencia.",

    notasSalida: "Pistacho, notas gourmand, acordes dulces",
    notasCorazon: "Flores blancas, notas cremosas",
    notasFondo: "Vainilla, almizcle, maderas suaves",

    inspiracion:
        "Inspirado en Yum Pistachio Gelato | 33 Eau de Parfum de Kayali, con un perfil más cremoso, cálido y envolvente.",

    recomendacion:
        "Ideal para quienes buscan una fragancia dulce, cremosa y elegante. Perfecta para clima fresco, salidas, noches o para amantes de los perfumes gourmand con pistacho y vainilla."
},
{
    id: "lattafa-emaan",
    nombre: "Lattafa Emaan",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-emaan.PNG",
    precioMinorista: 63180,
    precioMayorista: 46800,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia elegante, fresca y sofisticada, con un perfil floral almizclado que combina flores blancas, notas cítricas y un fondo limpio y cremoso. Es un perfume refinado, femenino y muy versátil, ideal para quienes buscan un aroma delicado pero con presencia. La apertura es luminosa y fresca, con bergamota, grosellas negras y flor de azahar que aportan un inicio limpio, femenino y muy agradable. En el corazón aparecen jazmín, nardos y caléndula, creando un acorde floral elegante y envolvente que transmite sofisticación y suavidad. El fondo es cálido y delicado, con vainilla, almizcle, pachulí y cedro que dejan una estela cremosa, limpia y duradera, con un aire moderno y refinado.",

    notasSalida: "Bergamota, grosellas negras, flor de azahar",
    notasCorazon: "Jazmín, nardos, caléndula",
    notasFondo: "Vainilla, almizcle, pachulí, cedro",

    inspiracion:
        "Inspirado en My Way Eau de Parfum de Giorgio Armani, con un perfil más suave, limpio y ligeramente más dulce.",

    recomendacion:
        "Ideal para quienes buscan una fragancia floral elegante y fácil de usar todos los días. Perfecta para oficina, salidas, primavera/verano o climas templados."
},
{
    id: "lattafa-emeer",
    nombre: "Lattafa Emeer",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-emeer.PNG",
    precioMinorista: 89856,
    precioMayorista: 66560,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia fresca, elegante y sofisticada, con un perfil amaderado aromático que combina notas cítricas, especiadas y un fondo limpio y moderno. Es un perfume refinado, versátil y con mucha presencia, ideal para quienes buscan un aroma distinguido y fácil de usar en cualquier ocasión. La apertura es vibrante y fresca, con limón, bergamota y enebro que aportan un inicio cítrico, limpio y energizante. En el corazón aparecen notas aromáticas y especiadas que le dan profundidad y elegancia, manteniendo una sensación fresca y sofisticada durante toda la evolución. El fondo es cálido y refinado, con ámbar, cedro, sándalo y almizcle que dejan una estela amaderada, limpia y duradera, con un aire moderno y masculino.",

    notasSalida: "Limón, bergamota, enebro",
    notasCorazon: "Notas aromáticas, especias suaves",
    notasFondo: "Ámbar, cedro, sándalo, almizcle",

    inspiracion:
        "Inspirado en L’Immensité Eau de Parfum de Louis Vuitton, con un perfil fresco, amaderado y ligeramente más cálido.",

    recomendacion:
        "Ideal para quienes buscan una fragancia elegante, fresca y versátil. Perfecta para uso diario, oficina, salidas o clima templado/cálido."
},
{
    id: "lattafa-haya",
    nombre: "Lattafa Haya",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-haya.PNG",
    precioMinorista: 74088,
    precioMayorista: 54880,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia femenina, chispeante y elegante, con un perfil floral frutal dulce que combina notas frescas, acordes suaves y un fondo cremoso y sofisticado. Es un perfume moderno, delicado y muy versátil, ideal para quienes buscan un aroma juvenil pero refinado. La apertura es fresca y luminosa, con champagne rosado, frutas rojas y mandarina que generan un inicio dulce, frutal y muy atractivo. En el corazón aparecen gardenia, jazmín y vainilla, aportando un toque floral elegante y femenino que equilibra perfectamente la frescura inicial. El fondo es suave y envolvente, con ámbar, sándalo y castañas que dejan una estela cremosa, cálida y duradera, con un aire sofisticado y moderno.",

    notasSalida: "Champagne rosado, frutas rojas, mandarina",
    notasCorazon: "Gardenia, jazmín, vainilla",
    notasFondo: "Ámbar, sándalo, castañas",

    inspiracion:
        "Inspirado en Viva La Juicy Rosé Eau de Parfum de Juicy Couture, con un perfil más cremoso, elegante y ligeramente más cálido.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina, dulce y sofisticada. Perfecta para uso diario, salidas, primavera/verano o para quienes aman los perfumes frutales elegantes."
}
,
{
    id: "lattafa-hayaati",
    nombre: "Lattafa Hayaati",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-hayaati.PNG",
    precioMinorista: 46980,
    precioMayorista: 34800,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia moderna, fresca y especiada, con un perfil amaderado aromático que combina notas frutales, cítricas y cálidas sobre un fondo sensual y masculino. Un perfume versátil, elegante y con excelente presencia, ideal para el uso diario o para quienes buscan un aroma limpio pero seductor. La apertura es fresca y vibrante, donde la manzana y la bergamota aportan una salida frutal, cítrica y energizante, con un toque moderno y atractivo. En el corazón aparecen notas especiadas y amaderadas que le dan profundidad y carácter, manteniendo un equilibrio entre frescura y calidez masculina. El fondo es envolvente y duradero, con almizcle, vainilla y maderas que dejan una estela limpia, sensual y muy agradable, con un estilo moderno y elegante.",

    notasSalida: "Manzana, bergamota",
    notasCorazon: "Canela, notas amaderadas",
    notasFondo: "Vainilla, almizcle",

    inspiracion:
        "Inspirado en Invictus, con un perfil fresco, frutal y especiado, acompañado de un fondo cálido y masculino.",

    recomendacion:
        "Ideal para quienes buscan una fragancia masculina fresca, moderna y versátil. Perfecta para uso diario, oficina, salidas o para quienes disfrutan perfumes equilibrados con buena duración y proyección."
},
{
    id: "lattafa-hayaati-al-maleky",
    nombre: "Lattafa Hayaati Al Maleky",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-hayaati-al-maleky.PNG",
    precioMinorista: 46980,
    precioMayorista: 34800,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia intensa, moderna y seductora, con un perfil amaderado especiado que mezcla notas frescas, acordes cálidos y un fondo dulce y envolvente. Es un perfume masculino, elegante y con mucha personalidad, ideal para quienes buscan destacar con un aroma fuerte y sofisticado. La apertura es fresca y vibrante, con cítricos, pimienta rosa y notas aromáticas que aportan un inicio energético, limpio y muy atractivo. En el corazón aparecen acordes especiados y amaderados que le dan profundidad y una sensación elegante y masculina, manteniendo un perfil moderno y versátil. El fondo es cálido y seductor, con ámbar, almizcle, cedro y notas dulces que dejan una estela intensa, sofisticada y duradera.",

    notasSalida: "Cítricos, pimienta rosa, notas aromáticas",
    notasCorazon: "Especias, notas amaderadas",
    notasFondo: "Ámbar, almizcle, cedro, acordes dulces",

    inspiracion:
        "Inspirado en 1 Million Lucky Eau de Toilette de Paco Rabanne, con un perfil más especiado, amaderado y menos empalagoso.",

    recomendacion:
        "Ideal para quienes buscan una fragancia masculina, intensa y moderna. Perfecta para noches, salidas, clima fresco o para dejar una estela elegante y llamativa."
},
{
    id: "lattafa-her-confession",
    nombre: "Lattafa Her Confession",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-her-confession.PNG",
    precioMinorista: 81648,
    precioMayorista: 60480,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia envolvente, cremosa y sofisticada, con un perfil floral gourmand que mezcla acordes dulces, especiados y un fondo cálido muy elegante. Es un perfume femenino, moderno y seductor, ideal para quienes buscan un aroma intenso y con mucha personalidad. La apertura es suave y adictiva, con notas especiadas y cremosas que generan un inicio cálido, elegante y muy atractivo. En el corazón aparecen flores blancas y acordes dulces que aportan feminidad y profundidad, logrando un equilibrio perfecto entre sensualidad y sofisticación. El fondo es intenso y aterciopelado, con vainilla, ámbar, almizcle y maderas suaves que dejan una estela dulce, envolvente y duradera, con un aire lujoso y moderno.",

    notasSalida: "Acordes especiados, notas cremosas",
    notasCorazon: "Flores blancas, acordes gourmand",
    notasFondo: "Vainilla, ámbar, almizcle, maderas suaves",

    inspiracion:
        "Inspirado en Blanche Bête Eau de Parfum de Liquides Imaginaires, con un perfil más dulce, cremoso y cálido.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina, elegante y gourmand. Perfecta para noches, clima fresco, salidas o para amantes de los perfumes cremosos y sofisticados."
},
{
    id: "lattafa-his-confession",
    nombre: "Lattafa His Confession",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-his-confession.PNG",
    precioMinorista: 83160,
    precioMayorista: 61600,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – MEN",

    descripcion:
        "Fragancia intensa, elegante y misteriosa, con un perfil amaderado especiado que combina notas cálidas, aromáticas y un fondo dulce y sofisticado. Es un perfume moderno, seductor y con mucha presencia, ideal para quienes buscan un aroma masculino que destaque y deje huella. La apertura es vibrante y especiada, con acordes aromáticos y notas frescas que generan un inicio elegante, moderno y muy atractivo. En el corazón aparecen maderas y especias cálidas que aportan profundidad y carácter, logrando una sensación masculina, refinada y envolvente. El fondo es cálido y seductor, con vainilla, ámbar, almizcle y notas amaderadas que dejan una estela intensa, sofisticada y duradera.",

    notasSalida: "Notas aromáticas, especias frescas",
    notasCorazon: "Maderas, especias cálidas",
    notasFondo: "Vainilla, ámbar, almizcle, notas amaderadas",

    inspiracion:
        "Inspirado en Ani Eau de Parfum de Nishane, con un perfil más especiado, oscuro y masculino.",

    recomendacion:
        "Ideal para quienes buscan una fragancia intensa, elegante y seductora. Perfecta para noches, clima fresco, salidas o para quienes disfrutan perfumes cálidos y con mucha personalidad."
}
,
{
    id: "lattafa-khamrah",
    nombre: "Lattafa Khamrah",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-khamrah.PNG",
    precioMinorista: 69552,
    precioMayorista: 51520,
    stock: 3,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia cálida, especiada y extremadamente adictiva, con un perfil oriental gourmand que mezcla canela, vainilla y acordes dulces con un fondo amaderado y sofisticado. Es un perfume intenso, elegante y con muchísima presencia, ideal para quienes buscan destacar con una estela envolvente y lujosa. La apertura es dulce y especiada, con canela, nuez moscada y bergamota que generan un inicio cálido, llamativo y muy atractivo. En el corazón aparecen dátiles, praliné y notas florales que aportan profundidad, cremosidad y una sensación gourmand sofisticada y elegante. El fondo es intenso y envolvente, con vainilla, benjuí, ámbar, haba tonka y maderas que dejan una estela dulce, cálida y duradera, con un aire oriental moderno y lujoso.",

    notasSalida: "Canela, nuez moscada, bergamota",
    notasCorazon: "Dátiles, praliné, nardos, mahonial",
    notasFondo: "Vainilla, benjuí, ámbar, haba tonka, mirra, akigalawood",

    inspiracion:
        "Inspirado en Angels’ Share Eau de Parfum de By Kilian, con un perfil más dulce, especiado y gourmand.",

    recomendacion:
        "Ideal para quienes buscan una fragancia intensa, cálida y seductora. Perfecta para noches, otoño/invierno, salidas o para amantes de los perfumes dulces con gran duración y proyección."
},
{
    id: "lattafa-khamrah-qahwa",
    nombre: "Lattafa Khamrah Qahwa",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-khamrah-qahwa.PNG",
    precioMinorista: 66528,
    precioMayorista: 49280,
    stock: 4,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia cálida, intensa y extremadamente adictiva, con un perfil oriental gourmand donde el café, las especias y la vainilla se combinan de manera sofisticada y envolvente. Un perfume elegante, dulce y con muchísima presencia, ideal para quienes buscan aromas profundos, cálidos y seductores. La apertura es especiada y vibrante, con canela, jengibre y cardamomo que crean un inicio cálido, exótico y muy atractivo. En el corazón aparece el café acompañado de notas dulces y gourmand, aportando profundidad, cremosidad y una sensación intensa y reconfortante. El fondo es dulce, amaderado y duradero, con vainilla, haba tonka, benjuí y maderas que dejan una estela cálida, sofisticada y lujosa, con un aire oriental moderno irresistible.",

    notasSalida: "Canela, jengibre, cardamomo",
    notasCorazon: "Café, praliné, notas dulces",
    notasFondo: "Vainilla, haba tonka, benjuí, maderas",

    inspiracion:
        "Inspirado en Angels’ Share Eau de Parfum de By Kilian, con un perfil más intenso, gourmand y especiado, donde el café aporta un carácter cálido y adictivo.",

    recomendacion:
        "Ideal para quienes buscan una fragancia intensa, cálida y seductora. Perfecta para noches, otoño/invierno, salidas o para amantes de los perfumes dulces, especiados y con gran duración y proyección."
},
{
    id: "lattafa-khamrah-waha",
    nombre: "Lattafa Khamrah Waha",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-khamrah-waha.PNG",
    precioMinorista: 137592,
    precioMayorista: 101920,
    stock: 3,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia fresca, aromática y sofisticada, con un perfil cítrico amaderado que reinterpreta el ADN Khamrah desde un lado mucho más luminoso y energizante. La apertura combina bergamota, yuzu, enebro y jengibre, creando una salida cítrica, vibrante y especiada. En el corazón aparecen iris, pepino, salvia y un acorde de sal marina que aportan una sensación mineral, fresca y elegante. El fondo combina haba tonka, vainilla, almizcle, Akigalawood y Ambrofix, dejando una estela cálida, amaderada y sensual que contrasta con la frescura inicial.",

    notasSalida: "Bergamota, enebro, yuzu, jengibre",
    notasCorazon: "Iris, pepino, salvia, acorde de sal marina",
    notasFondo: "Akigalawood, haba tonka, vainilla, almizcle, Ambrofix",

    inspiracion:
        "Inspirado en Jean Paul Gaultier Le Beau EDT, con un perfil fresco, aromático y dulce, acompañado por un fondo cremoso y amaderado.",

    recomendacion:
        "Ideal para quienes buscan una fragancia fresca pero con profundidad y personalidad. Perfecta para uso diario, salidas, primavera/verano o climas templados."
},
{
    id: "lattafa-maahir",
    nombre: "Lattafa Maahir",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-maahir.PNG",
    precioMinorista: 66528,
    precioMayorista: 49280,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia fresca, tropical y sofisticada, con un perfil afrutado aromático que combina cítricos, frutas exóticas y notas cremosas sobre un fondo cálido y elegante. Un perfume moderno, llamativo y versátil, ideal para quienes buscan un aroma diferente, fresco y con mucha personalidad. La apertura es vibrante y tropical, donde la piña, los cítricos y las notas afrutadas crean un inicio jugoso, refrescante y muy atractivo. En el corazón aparecen acordes florales y especiados que aportan profundidad y equilibrio, manteniendo una sensación elegante y moderna. El fondo es cálido y envolvente, con vainilla, almizcle y maderas que dejan una estela cremosa, sofisticada y duradera, con un aire tropical elegante.",

    notasSalida: "Piña, bergamota, frutas tropicales",
    notasCorazon: "Jazmín, notas florales, especias suaves",
    notasFondo: "Vainilla, almizcle, sándalo, maderas",

    inspiracion:
        "Inspirado en Bond No. 9 Greenwich Village, con un perfil más tropical, dulce y fresco.",

    recomendacion:
        "Ideal para quienes buscan una fragancia fresca, tropical y sofisticada. Perfecta para primavera/verano, uso diario, salidas o para quienes disfrutan perfumes frutales modernos con excelente duración y proyección."
}
,
{
    id: "lattafa-maahir-black-edition",
    nombre: "Lattafa Maahir Black Edition",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-maahir-black-edition.PNG",
    precioMinorista: 66528,
    precioMayorista: 49280,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia oscura, intensa y sofisticada, con un perfil amaderado especiado que combina humo, cuero y notas orientales sobre un fondo cálido y profundo. Un perfume elegante, misterioso y con muchísima presencia, ideal para quienes buscan aromas fuertes, masculinos y diferentes. La apertura es especiada y ahumada, donde la pimienta negra, las especias y las notas oscuras crean un inicio potente, elegante y muy llamativo. En el corazón aparecen acordes de cuero, incienso y maderas que aportan profundidad, carácter y una sensación cálida y envolvente. El fondo es intenso y duradero, con ámbar, oud y notas amaderadas que dejan una estela sofisticada, masculina y con un aire oriental moderno.",

    notasSalida: "Pimienta negra, especias, notas ahumadas",
    notasCorazon: "Cuero, incienso, maderas",
    notasFondo: "Oud, ámbar, almizcle, notas amaderadas",

    inspiracion:
        "Inspirado en Terroni, con un perfil más oriental, ahumado y especiado.",

    recomendacion:
        "Ideal para quienes buscan una fragancia intensa, oscura y sofisticada. Perfecta para noches, clima frío, salidas o para amantes de perfumes fuertes con gran duración y proyección."
},
{
    id: "lattafa-mayar",
    nombre: "Lattafa Mayar",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-mayar.PNG",
    precioMinorista: 60480,
    precioMayorista: 44800,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia femenina, fresca y delicadamente dulce, con un perfil floral afrutado que combina frutas jugosas, flores suaves y un fondo cremoso y elegante. Un perfume moderno, romántico y versátil, ideal para quienes buscan un aroma femenino, limpio y encantador. La apertura es fresca y vibrante, donde las frutas rojas y los acordes cítricos crean un inicio jugoso, dulce y muy atractivo. En el corazón aparecen notas florales delicadas que aportan feminidad, suavidad y una sensación elegante y luminosa. El fondo es cremoso y envolvente, con vainilla, almizcle y maderas suaves que dejan una estela dulce, limpia y sofisticada, con un aire moderno y romántico.",

    notasSalida: "Frutas rojas, lichi, cítricos",
    notasCorazon: "Rosa, jazmín, flores blancas",
    notasFondo: "Vainilla, almizcle, maderas suaves",

    inspiracion:
        "Inspirado en Angel Nova, con un perfil más suave, fresco y floral afrutado.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina fresca, dulce y elegante. Perfecta para uso diario, primavera/verano, salidas o para amantes de perfumes florales modernos con buena duración y proyección."
},
{
    id: "lattafa-mayar-cherry-intense",
    nombre: "Lattafa Mayar Cherry Intense",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-mayar-cherry-intense.PNG",
    precioMinorista: 58968,
    precioMayorista: 43680,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia intensa, dulce y seductora, con un perfil gourmand afrutado donde la cereza, las notas licorosas y la vainilla se combinan de manera sofisticada y envolvente. Un perfume moderno, llamativo y con muchísima personalidad, ideal para quienes aman los aromas dulces, intensos y adictivos. La apertura es vibrante y provocativa, donde la cereza y los acordes frutales crean un inicio jugoso, oscuro y extremadamente atractivo. En el corazón aparecen notas florales y gourmand que aportan profundidad, cremosidad y una sensación elegante y sensual. El fondo es cálido y envolvente, con vainilla, ámbar y maderas que dejan una estela dulce, intensa y duradera, con un aire lujoso y moderno.",

    notasSalida: "Cereza, frutas rojas, acordes licorosos",
    notasCorazon: "Jazmín, rosa, notas gourmand",
    notasFondo: "Vainilla, ámbar, almizcle, maderas",

    inspiracion:
        "Inspirado en Lost Cherry, con un perfil más dulce, intenso y gourmand.",

    recomendacion:
        "Ideal para quienes buscan una fragancia intensa, dulce y seductora. Perfecta para noches, clima fresco, salidas o para amantes de perfumes gourmand con gran duración y proyección."
},
{
    id: "lattafa-mayar-natural-intense",
    nombre: "Lattafa Mayar Natural Intense",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-mayar-natural-intense.PNG",
    precioMinorista: 57456,
    precioMayorista: 42560,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia fresca, tropical y luminosa, con un perfil floral afrutado que combina frutas exóticas, flores suaves y un fondo cremoso y limpio. Un perfume femenino, moderno y versátil, ideal para quienes buscan un aroma refrescante, elegante y con un toque tropical sofisticado. La apertura es jugosa y vibrante, donde las frutas tropicales y los acordes cítricos crean un inicio fresco, dulce y muy atractivo. En el corazón aparecen notas florales delicadas que aportan feminidad, suavidad y una sensación luminosa y elegante. El fondo es cremoso y envolvente, con vainilla, almizcle y maderas suaves que dejan una estela fresca, dulce y duradera, con un aire tropical moderno.",

    notasSalida: "Frutas tropicales, mandarina, coco",
    notasCorazon: "Jazmín, flor de loto, flores blancas",
    notasFondo: "Vainilla, almizcle, sándalo",

    inspiracion:
        "Inspirado en Alien Goddess, con un perfil más fresco, tropical y suave.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina fresca, tropical y elegante. Perfecta para primavera/verano, uso diario, vacaciones o para amantes de perfumes luminosos con buena duración y proyección."
}
,
{
    id: "lattafa-musamam",
    nombre: "Lattafa Musamam",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-musamam.PNG",
    precioMinorista: 66528,
    precioMayorista: 49280,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia cálida, especiada y sofisticada, con un perfil oriental amaderado que combina especias intensas, notas ahumadas y maderas profundas sobre un fondo elegante y envolvente. Un perfume moderno, lujoso y con muchísima presencia, ideal para quienes buscan aromas refinados, intensos y diferentes. La apertura es especiada y vibrante, donde el azafrán, las especias cálidas y los acordes cítricos crean un inicio elegante, llamativo y muy atractivo. En el corazón aparecen notas amaderadas y aromáticas que aportan profundidad, carácter y una sensación cálida y sofisticada. El fondo es intenso y duradero, con oud, ámbar, almizcle y maderas que dejan una estela envolvente, lujosa y moderna, con un aire oriental refinado.",

    notasSalida: "Azafrán, mandarina, especias",
    notasCorazon: "Cedro, lavanda, notas amaderadas",
    notasFondo: "Oud, ámbar, almizcle, incienso",

    inspiracion:
        "Inspirado en Oud Wood, con un perfil más especiado, cálido y oriental.",

    recomendacion:
        "Ideal para quienes buscan una fragancia intensa, elegante y sofisticada. Perfecta para noches, clima fresco, eventos o para amantes de perfumes orientales con gran duración y proyección."
},
{
    id: "lattafa-musamam-white-intense",
    nombre: "Lattafa Musamam White Intense",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-musamam-white-intense.PNG",
    precioMinorista: 101304,
    precioMayorista: 75040,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia fresca, cremosa y sofisticada, con un perfil amaderado aromático que combina especias suaves, cítricos y notas limpias sobre un fondo cálido y elegante. Un perfume moderno, refinado y versátil, ideal para quienes buscan un aroma distintivo, fresco y con excelente presencia. La apertura es luminosa y especiada, donde los cítricos y las notas aromáticas crean un inicio fresco, elegante y muy atractivo. En el corazón aparecen acordes cremosos y amaderados que aportan profundidad, suavidad y una sensación sofisticada y envolvente. El fondo es cálido y duradero, con sándalo, almizcle y ámbar que dejan una estela limpia, cremosa y moderna, con un aire lujoso y refinado.",

    notasSalida: "Bergamota, especias suaves, cítricos",
    notasCorazon: "Coco, ylang-ylang, notas aromáticas",
    notasFondo: "Sándalo, almizcle, ámbar, maderas suaves",

    inspiracion:
        "Inspirado en Le Beau Le Parfum, con un perfil más cremoso, limpio y sofisticado.",

    recomendacion:
        "Ideal para quienes buscan una fragancia fresca, elegante y moderna. Perfecta para uso diario, primavera/verano, salidas o para amantes de perfumes cremosos y sofisticados con buena duración y proyección."
},
{
    id: "lattafa-niche-emarati-khanjar",
    nombre: "Lattafa Niche Emarati Khanjar",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-niche-emarati-khanjar.PNG",
    precioMinorista: 110916,
    precioMayorista: 82160,
    stock: 0,
    presentacion: "EAU DE PARFUM – 85 ML – UNISEX",

    descripcion:
        "Fragancia intensa, elegante y profundamente oriental, con un perfil especiado amaderado que combina cuero, incienso y maderas oscuras sobre un fondo cálido y sofisticado. Un perfume lujoso, refinado y con muchísima presencia, ideal para quienes buscan aromas árabes tradicionales con un estilo moderno y exclusivo. La apertura es especiada y poderosa, donde las especias cálidas y los acordes aromáticos crean un inicio intenso, elegante y muy llamativo. En el corazón aparecen notas de cuero, incienso y maderas que aportan profundidad, carácter y una sensación oscura y sofisticada. El fondo es cálido y envolvente, con oud, ámbar y almizcle que dejan una estela intensa, refinada y duradera, con un aire oriental lujoso y masculino.",

    notasSalida: "Nuez moscada, jengibre, especias",
    notasCorazon: "Cuero, incienso, cachemira",
    notasFondo: "Oud, ámbar, almizcle, vetiver",

    inspiracion:
        "Inspirado en Halfeti, con un perfil más oriental, cuero-especiado y oscuro.",

    recomendacion:
        "Ideal para quienes buscan una fragancia intensa, elegante y sofisticada. Perfecta para noches, clima frío, eventos o para amantes de perfumes árabes con gran duración y proyección."
},
{
    id: "lattafa-pride-fakhar-black",
    nombre: "Lattafa Pride Fakhar Black",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-pride-fakhar-black.PNG",
    precioMinorista: 69552,
    precioMayorista: 51520,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – MEN",

    descripcion:
        "Fragancia fresca, elegante y seductora, con un perfil aromático amaderado que combina cítricos, especias suaves y notas dulces sobre un fondo moderno y masculino. Un perfume versátil, sofisticado y con excelente presencia, ideal para quienes buscan un aroma limpio, atractivo y fácil de usar en cualquier ocasión. La apertura es fresca y vibrante, donde la bergamota, la manzana y las notas especiadas crean un inicio moderno, energizante y muy atractivo. En el corazón aparecen acordes aromáticos y florales que aportan profundidad, elegancia y una sensación masculina refinada. El fondo es cálido y envolvente, con haba tonka, ámbar y maderas que dejan una estela sensual, limpia y duradera, con un estilo moderno y sofisticado.",

    notasSalida: "Bergamota, manzana, jengibre",
    notasCorazon: "Lavanda, salvia, enebro",
    notasFondo: "Haba tonka, cedro, ámbar, vetiver",

    inspiracion:
        "Inspirado en Y Eau de Parfum de Yves Saint Laurent, con un perfil fresco, aromático, dulce y moderno muy similar.",

    recomendacion:
        "Ideal para quienes buscan una fragancia masculina moderna, fresca y seductora. Perfecta para uso diario, oficina, salidas o para quienes disfrutan perfumes versátiles con excelente duración y proyección."
},
{
    id: "lattafa-pride-fakhar-gold-extrait",
    nombre: "Lattafa Pride Fakhar Gold Extrait",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-pride-fakhar-gold-extrait.PNG",
    precioMinorista: 58968,
    precioMayorista: 43680,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia cálida, intensa y sofisticada, con un perfil ambarado especiado que combina notas dulces, cuero y acordes aromáticos sobre un fondo moderno y elegante. Un perfume con mucha presencia, seductor y envolvente, ideal para quienes buscan un aroma masculino lujoso y llamativo. La apertura es vibrante y especiada, donde el pomelo, el cardamomo y la pimienta rosa crean un inicio moderno, fresco y adictivo. En el corazón aparecen notas florales y solares que aportan profundidad, elegancia y un toque refinado muy distintivo. El fondo es cálido y sensual, con ámbar, cuero y cashmeran que dejan una estela intensa, sofisticada y duradera, con un estilo moderno y masculino.",

    notasSalida: "Pomelo, pimienta rosa, cardamomo",
    notasCorazon: "Nardos, notas solares, artemisia",
    notasFondo: "Ámbar, cuero, cashmeran, ládano",

    inspiracion:
        "Inspirado en Paco Rabanne 1 Million Parfum, con un perfil dulce, especiado, ambarado y moderno muy similar.",

    recomendacion:
        "Ideal para quienes buscan una fragancia masculina intensa, elegante y seductora. Perfecta para noches, eventos, salidas o para quienes disfrutan perfumes con excelente duración y gran proyección."
},
{
    id: "lattafa-pride-fakhar-rose",
    nombre: "Lattafa Pride Fakhar Rose",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-pride-fakhar-rose.PNG",
    precioMinorista: 92232,
    precioMayorista: 68320,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia floral frutal, elegante y seductora, con un perfil moderno que combina frutas jugosas, flores blancas y un fondo dulce y cremoso. Un perfume femenino, sofisticado y versátil, ideal para quienes buscan un aroma delicado pero con mucha presencia. La apertura es fresca y vibrante, donde las frutas y notas cítricas crean un inicio luminoso, dulce y muy atractivo. En el corazón aparecen flores blancas y acordes florales elegantes que aportan feminidad, suavidad y una sensación refinada y moderna. El fondo es cálido y envolvente, con vainilla, almizcle y maderas suaves que dejan una estela sensual, limpia y duradera, con un estilo sofisticado y femenino.",

    notasSalida: "Frutas, granada, lirio, aldehídos",
    notasCorazon: "Jazmín, nardos, gardenia, ylang-ylang, madreselva, rosa, peonía",
    notasFondo: "Vainilla, almizcle blanco, sándalo, ambroxan",

    inspiracion:
        "Inspirado en Givenchy L’Interdit, con un perfil floral blanco, dulce, elegante y moderno muy similar.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina sofisticada, floral y seductora. Perfecta para uso diario, salidas, eventos o para quienes disfrutan perfumes elegantes con excelente duración y proyección."
},
{
    id: "lattafa-pride-nebras",
    nombre: "Lattafa Pride Nebras",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-pride-nebras.PNG",
    precioMinorista: 86184,
    precioMayorista: 63840,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia dulce, cremosa y adictiva, con un perfil avainillado gourmand que combina notas frutales, cacao y ámbar sobre un fondo cálido y envolvente. Un perfume moderno, elegante y con muchísima presencia, ideal para quienes aman los aromas dulces intensos y sofisticados. La apertura es deliciosa y vibrante, donde las frutas rojas y la mandarina crean un inicio dulce, jugoso y muy atractivo. En el corazón aparecen notas gourmand y cremosas que aportan profundidad, calidez y una sensación reconfortante y elegante. El fondo es intenso y sensual, con vainilla, haba tonka, ámbar y almizcle que dejan una estela dulce, cálida y duradera, con un estilo moderno y adictivo.",

    notasSalida: "Frutas rojas, mandarina",
    notasCorazon: "Vainilla, cacao, rosa",
    notasFondo: "Haba tonka, ámbar, almizcle, azúcar",

    inspiracion:
        "Inspirado en Eilish by Billie Eilish, con un perfil dulce, avainillado, gourmand y cremoso muy similar.",

    recomendacion:
        "Ideal para quienes buscan una fragancia dulce, cálida y envolvente. Perfecta para noches, clima fresco, salidas o para quienes disfrutan perfumes gourmand con excelente duración y gran proyección."
},
{
    id: "lattafa-pride-pisa",
    nombre: "Lattafa Pride Pisa",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-pride-pisa.PNG",
    precioMinorista: 98280,
    precioMayorista: 72800,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – MEN",

    descripcion:
        "Fragancia fresca, elegante y moderna, con un perfil cítrico aromático que combina notas acuáticas, especias suaves y maderas sobre un fondo limpio y sofisticado. Un perfume masculino versátil, refinado y muy atractivo, ideal para quienes buscan un aroma fresco con excelente presencia. La apertura es cítrica y vibrante, donde la bergamota, el limón y las notas frescas crean un inicio energizante, limpio y moderno. En el corazón aparecen acordes aromáticos y especiados que aportan profundidad, masculinidad y una sensación elegante y refinada. El fondo es amaderado y envolvente, con ámbar, almizcle y maderas suaves que dejan una estela fresca, sensual y duradera, con un estilo moderno y sofisticado.",

    notasSalida: "Bergamota, limón, pomelo",
    notasCorazon: "Lavanda, notas marinas, especias suaves",
    notasFondo: "Cedro, ámbar, almizcle, vetiver",

    inspiracion:
        "Inspirado en Giorgio Armani Acqua di Giò, con un perfil fresco, acuático, cítrico y elegante muy similar.",

    recomendacion:
        "Ideal para quienes buscan una fragancia masculina fresca, limpia y versátil. Perfecta para uso diario, oficina, verano o para quienes disfrutan perfumes modernos con excelente duración y proyección."
}
,
{
    id: "lattafa-pride-shaheen-gold",
    nombre: "Lattafa Pride Shaheen Gold",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-pride-shaheen-gold.PNG",
    precioMinorista: 65016,
    precioMayorista: 48160,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia frutal, fresca y moderna, con un perfil dulce aromático que combina notas tropicales, acordes cremosos y un fondo cálido y elegante. Un perfume versátil, llamativo y muy adictivo, ideal para quienes buscan un aroma diferente, moderno y con excelente presencia. La apertura es vibrante y tropical, donde la piña y el pomelo crean una salida fresca, jugosa y ligeramente cítrica, con una sensación luminosa y energética. En el corazón aparecen notas aromáticas y suaves que aportan equilibrio y sofisticación. La lavanda se mezcla con el dulzor cremoso del higo, logrando un aroma elegante, moderno y con un toque ligeramente gourmand. El fondo es cálido y envolvente, con vainilla, haba tonka y patchouli que dejan una estela dulce, sensual y refinada, manteniendo una sensación fresca y limpia durante toda la evolución.",

    notasSalida: "Piña, pomelo",
    notasCorazon: "Higo, lavanda",
    notasFondo: "Vainilla, haba tonka, patchouli",

    inspiracion:
        "Inspirado en Paco Rabanne Phantom, con un perfil tropical, dulce, cremoso y moderno, aunque mantiene una identidad propia.",

    recomendacion:
        "Ideal para quienes buscan una fragancia unisex fresca, dulce y sofisticada. Perfecta para primavera, verano, salidas, uso diario o para quienes disfrutan perfumes frutales modernos con excelente impacto y estilo elegante."
},
{
    id: "lattafa-pride-tharwah-gold",
    nombre: "Lattafa Pride Tharwah Gold",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-pride-tharwah-gold.PNG",
    precioMinorista: 116532,
    precioMayorista: 86320,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia floral oriental elegante y envolvente, con un perfil sofisticado que combina cítricos frescos, flores blancas y un fondo avainillado cálido y sensual. Un perfume femenino refinado, intenso y moderno, ideal para quienes buscan una fragancia con mucha presencia y excelente duración. La apertura es luminosa y aromática, donde la bergamota y la lavanda crean una salida fresca, elegante y ligeramente cítrica, aportando una sensación limpia y sofisticada desde el primer spray. En el corazón aparecen las flores blancas, con jazmín egipcio y flor de azahar que le dan feminidad, sensualidad y un estilo elegante muy moderno, logrando un equilibrio perfecto entre dulzura y sofisticación. El fondo es cálido, cremoso y envolvente, con vainilla, ámbar y vetiver que dejan una estela intensa, sensual y duradera, manteniendo un aroma elegante y adictivo durante horas.",

    notasSalida: "Lavanda, bergamota",
    notasCorazon: "Flor de azahar, jazmín egipcio",
    notasFondo: "Vainilla, ámbar, vetiver",

    inspiracion:
        "Inspirado en Yves Saint Laurent Libre Intense, con un perfil floral avainillado elegante, intenso y muy similar al ADN sofisticado de la línea Libre.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina elegante, intensa y moderna. Perfecta para noches, salidas, clima fresco o para quienes disfrutan perfumes sofisticados con excelente proyección y duración."
},
{
    id: "lattafa-qaed-al-fursan",
    nombre: "Lattafa Qaed Al Fursan",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-qaed-al-fursan.PNG",
    precioMinorista: 53460,
    precioMayorista: 39600,
    stock: 1,
    presentacion: "EAU DE PARFUM – 90 ML – UNISEX",

    descripcion:
        "Fragancia frutal, intensa y moderna, con un perfil dulce amaderado que combina una explosión de piña tropical, acordes ahumados y un fondo cálido y sofisticado. Un perfume llamativo, adictivo y con mucha personalidad, ideal para quienes buscan un aroma diferente, potente y con excelente relación calidad-precio. La apertura es vibrante y extremadamente frutal, donde la piña jugosa se mezcla con el azafrán creando una salida dulce, tropical y ligeramente especiada, con una sensación fresca pero intensa desde el primer spray. En el corazón aparecen notas amaderadas y aromáticas que aportan profundidad y elegancia. El bálsamo de abeto junto al jazmín equilibran el dulzor inicial, logrando un aroma moderno, masculino y muy atractivo. El fondo es cálido, ahumado y envolvente, con oud, cedro y ámbar que dejan una estela sensual, amaderada y duradera, manteniendo el ADN tropical característico durante toda la evolución.",

    notasSalida: "Piña, azafrán",
    notasCorazon: "Bálsamo de abeto, jazmín",
    notasFondo: "Oud, cedro, ámbar",

    inspiracion:
        "Inspirado en Creed Aventus, con un perfil más dulce, tropical y juvenil, y matices que también recuerdan a Black XS L’Exces de Paco Rabanne.",

    recomendacion:
        "Ideal para quienes buscan una fragancia unisex dulce, tropical y potente. Perfecta para salidas, noches, clima templado o para amantes de los perfumes con mucha piña, excelente presencia y estilo moderno."
},
{
    id: "lattafa-qaed-al-fursan-unlimited",
    nombre: "Lattafa Qaed Al Fursan Unlimited",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-qaed-al-fursan-unlimited.PNG",
    precioMinorista: 48600,
    precioMayorista: 36000,
    stock: 1,
    presentacion: "EAU DE PARFUM – 90 ML – UNISEX",

    descripcion:
        "Fragancia tropical, cremosa y adictiva, con un perfil dulce floral que combina coco, frutas exóticas y un fondo avainillado suave y envolvente. Un perfume moderno, veraniego y muy llamativo, ideal para quienes buscan un aroma diferente, dulce y con una vibra tropical elegante. La apertura es fresca y tropical, donde el coco y la piña crean una salida cremosa, frutal y luminosa, acompañada por notas cítricas que aportan frescura y una sensación energética desde el primer spray. En el corazón aparecen flores blancas exóticas que le dan un toque elegante, suave y sensual. El ylang-ylang, el jazmín y la frangipani aportan una sensación cremosa y floral muy veraniega, logrando un aroma cálido y sofisticado. El fondo es dulce, limpio y envolvente, con vainilla, almizcle y sándalo que dejan una estela cremosa, tropical y duradera, manteniendo un perfil suave pero muy atractivo durante toda la evolución.",

    notasSalida: "Coco, piña, cítricos",
    notasCorazon: "Ylang-ylang, jazmín, frangipani",
    notasFondo: "Vainilla, almizcle, sándalo, notas dulces",

    inspiracion:
        "Inspirado en Mancera Coco Vanille, con un perfil tropical, cremoso y avainillado, aunque con una salida más fresca y frutal.",

    recomendacion:
        "Ideal para quienes buscan una fragancia unisex tropical, dulce y cremosa. Perfecta para primavera, verano, vacaciones, salidas o para amantes de los perfumes con vibra playera, excelente duración y estilo moderno."
},
{
    id: "lattafa-qimmah-for-men",
    nombre: "Lattafa Qimmah For Men",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-qimmah-for-men.PNG",
    precioMinorista: 48600,
    precioMayorista: 36000,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – MEN",

    descripcion:
        "Fragancia aromática, elegante y moderna, con un perfil amaderado fresco que combina notas herbales, maderas refinadas y un fondo masculino limpio y sofisticado. Un perfume versátil, masculino y con mucha presencia, ideal para quienes buscan un aroma distinguido para uso diario o ambientes formales. La apertura es intensa y elegante, donde el oud y el cedro crean una salida amaderada, limpia y sofisticada, aportando una sensación masculina moderna desde el primer spray. En el corazón aparecen notas aromáticas y herbales que le dan frescura y profundidad. La lavanda, la salvia y el romero aportan un carácter refinado, fresco y ligeramente especiado, logrando un aroma muy equilibrado y atractivo. El fondo es cálido, terroso y envolvente, con patchouli y vetiver que dejan una estela elegante, masculina y duradera, manteniendo un perfil limpio y sofisticado durante toda la evolución.",

    notasSalida: "Oud, cedro",
    notasCorazon: "Lavanda, salvia, romero",
    notasFondo: "Patchouli, vetiver",

    inspiracion:
        "Inspirado en Prada L’Homme, con un perfil limpio, elegante y refinado, aunque con un toque más amaderado y aromático.",

    recomendacion:
        "Ideal para quienes buscan una fragancia masculina elegante, limpia y versátil. Perfecta para oficina, reuniones, salidas o para quienes disfrutan perfumes modernos con excelente presencia y estilo sofisticado."
},
{
    id: "lattafa-qimmah-for-women",
    nombre: "Lattafa Qimmah For Women",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-qimmah-for-women.PNG",
    precioMinorista: 55080,
    precioMayorista: 40800,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia dulce, elegante y seductora, con un perfil floral gourmand que combina café, almendra y flores blancas sobre un fondo cremoso y avainillado. Un perfume femenino sofisticado, intenso y muy atractivo, ideal para quienes buscan un aroma moderno con mucha personalidad y excelente presencia. La apertura es cálida y adictiva, donde la almendra y el café crean una salida dulce, cremosa y ligeramente tostada, aportando una sensación elegante y sensual desde el primer spray. En el corazón aparecen flores blancas y acordes suaves que le dan feminidad y sofisticación. El jazmín y la tuberosa se mezclan con la haba tonka logrando un aroma floral cremoso, moderno y muy envolvente. El fondo es cálido, avainillado y seductor, con cacao y sándalo que aportan profundidad y una estela dulce, elegante y duradera, manteniendo un perfil sofisticado y muy femenino durante toda la evolución.",

    notasSalida: "Almendra, café",
    notasCorazon: "Jazmín, tuberosa, haba tonka",
    notasFondo: "Vainilla, cacao, sándalo",

    inspiracion:
        "Inspirado en Carolina Herrera Good Girl, con un perfil dulce, floral gourmand, elegante y sensual muy similar.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina dulce, sofisticada y seductora. Perfecta para noches, salidas, citas o para amantes de los perfumes intensos con excelente duración, proyección y estilo elegante."
},
{
    id: "lattafa-sakeena",
    nombre: "Lattafa Sakeena",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-sakeena.PNG",
    precioMinorista: 61560,
    precioMayorista: 45600,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia frutal, tropical y adictiva, con un perfil floral gourmand que combina frutas exóticas, notas dulces y un fondo cremoso y sensual. Un perfume moderno, femenino y muy llamativo, ideal para quienes buscan un aroma dulce pero fresco, con excelente presencia y una vibra elegante y divertida. La apertura es vibrante y tropical, donde el maracuyá y la mandarina se mezclan con notas ozónicas creando una salida jugosa, fresca y luminosa, con una sensación juvenil y muy atractiva desde el primer spray. En el corazón aparecen acordes florales y frutales que aportan feminidad y sofisticación. La frambuesa, la rosa y la flor de azahar se combinan con un toque salado que le da profundidad y un estilo moderno, logrando un aroma dulce pero equilibrado. El fondo es cálido, cremoso y envolvente, con vainilla, praliné, almizcle y toffee que dejan una estela gourmand suave, sensual y duradera, manteniendo un perfil tropical elegante durante toda la evolución.",

    notasSalida: "Maracuyá, mandarina, notas ozónicas",
    notasCorazon: "Frambuesa, rosa, flor de azahar, sal marina",
    notasFondo: "Vainilla, praliné, almizcle, toffee",

    inspiracion:
        "Inspirado en Stricnina de V Canto, con un perfil frutal exótico, dulce y sofisticado, aunque Sakeena mantiene un estilo más fresco y tropical.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina dulce, tropical y moderna. Perfecta para primavera, verano, salidas, uso diario o para amantes de los perfumes frutales gourmand con excelente duración y un estilo elegante y divertido."
},
{
    id: "lattafa-the-kingdom",
    nombre: "Lattafa The Kingdom",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-the-kingdom.PNG",
    precioMinorista: 69552,
    precioMayorista: 51520,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – MEN",

    descripcion:
        "Fragancia dulce, intensa y extremadamente seductora, con un perfil aromático avainillado que combina notas frescas, tabaco y un fondo cálido oriental muy moderno. Un perfume masculino elegante, llamativo y adictivo, ideal para quienes buscan un aroma con mucha presencia, excelente duración y estilo nocturno sofisticado. La apertura es fresca y aromática, donde la lavanda, la menta y la salvia crean una salida limpia, moderna y ligeramente especiada, aportando una sensación masculina elegante desde el primer spray. En el corazón aparecen notas dulces y envolventes que le dan profundidad y sensualidad. La vainilla se mezcla con el tabaco y la flor de azahar logrando un equilibrio perfecto entre dulzura, calidez y sofisticación, con un perfil moderno y muy atractivo. El fondo es cálido, cremoso y oriental, con haba tonka, benjuí y ládano que dejan una estela intensa, sensual y duradera, manteniendo un aroma elegante y adictivo durante toda la evolución.",

    notasSalida: "Lavanda, menta, salvia",
    notasCorazon: "Vainilla, tabaco, flor de azahar",
    notasFondo: "Haba tonka, benjuí, ládano",

    inspiracion:
        "Inspirado en Jean Paul Gaultier Le Male Elixir, con un perfil dulce, avainillado y aromático extremadamente similar.",

    recomendacion:
        "Ideal para quienes buscan una fragancia masculina intensa, elegante y seductora. Perfecta para noches, salidas, clima fresco o para amantes de los perfumes dulces modernos con excelente proyección, duración y un estilo sofisticado muy atractivo."
}
,
{
    id: "lattafa-the-kingdom-femenino",
    nombre: "Lattafa The Kingdom Femenino",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-the-kingdom-femenino.PNG",
    precioMinorista: 65016,
    precioMayorista: 48160,
    stock: 0,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia dulce, femenina y sofisticada, con un perfil floral frutal gourmand que combina frutas jugosas, flores suaves y un fondo avainillado cremoso extremadamente elegante. Un perfume moderno, delicado y seductor, ideal para quienes buscan un aroma femenino con excelente duración, mucha presencia y una estela envolvente. La apertura es fresca, luminosa y afrutada, donde la pera, la peonía y el cassis crean una salida dulce y elegante con un toque floral moderno que se siente delicado y femenino desde el primer spray. En el corazón aparecen notas cálidas y gourmand que aportan sensualidad y profundidad. El praliné se mezcla con el jazmín y el haba tonka logrando un equilibrio perfecto entre dulzura cremosa, flores elegantes y un toque sofisticado muy adictivo. El fondo es suave, cálido y envolvente, con vainilla, almizcle, sándalo y ámbar que dejan una estela cremosa, femenina y duradera, manteniendo un aroma elegante y seductor durante toda la evolución.",

    notasSalida: "Pera, peonía, cassis",
    notasCorazon: "Praliné, jazmín, haba tonka",
    notasFondo: "Vainilla, almizcle, sándalo, ámbar",

    inspiracion:
        "Inspirado en Lancôme La Vie Est Belle, con un perfil dulce, floral y gourmand muy similar, con matices que también recuerdan a Kayali Wedding Silk Santal.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina dulce, elegante y moderna. Perfecta para salidas, citas, clima fresco o para amantes de los perfumes gourmand florales con excelente proyección y duración."
},
{
    id: "lattafa-victoria",
    nombre: "Lattafa Victoria",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-victoria.PNG",
    precioMinorista: 72576,
    precioMayorista: 53760,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – UNISEX",

    descripcion:
        "Fragancia cítrica, dulce y cremosa, con un perfil gourmand moderno que combina limón acaramelado, flores suaves y una vainilla envolvente extremadamente adictiva. Un perfume elegante, delicado y llamativo, ideal para quienes buscan un aroma dulce diferente, sofisticado y con excelente duración. La apertura es luminosa, golosa y refrescante, donde la tarta de limón con merengue crea una salida cítrica dulce muy realista y cremosa. En el corazón aparece el neroli, que suma un toque floral limpio, elegante y ligeramente jabonoso, equilibrando perfectamente la dulzura gourmand. El fondo es suave, cálido y avainillado, con una vainilla cremosa que deja una estela envolvente y muy adictiva.",

    notasSalida: "Tarta de limón con merengue",
    notasCorazon: "Neroli",
    notasFondo: "Vainilla",

    inspiracion:
        "Inspirado en Dolce & Gabbana Devotion, con un perfil cítrico gourmand, cremoso y avainillado muy similar.",

    recomendacion:
        "Ideal para quienes buscan una fragancia dulce, cremosa y diferente. Perfecta para salidas, citas, clima fresco o para amantes de los perfumes gourmand avainillados con un toque cítrico elegante."
},
{
    id: "lattafa-yara",
    nombre: "Lattafa Yara",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-yara.PNG",
    precioMinorista: 74088,
    precioMayorista: 54880,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia dulce, cremosa y femenina, con un perfil tropical avainillado que combina frutas suaves, flores delicadas y un fondo cálido extremadamente adictivo. Un perfume moderno, elegante y muy versátil, ideal para quienes buscan un aroma gourmand femenino con excelente duración y una vibra delicada pero seductora. La apertura es suave, afrutada y ligeramente floral, donde la mandarina, la orquídea y el heliotropo crean una salida cremosa y femenina con un toque tropical dulce muy moderno. En el corazón aparecen notas gourmand y frutales que le aportan profundidad y sensualidad. Los acordes dulces se mezclan con frutas tropicales logrando un aroma cálido, envolvente y muy adictivo. El fondo es cremoso, avainillado y almizclado, con vainilla, sándalo y almizcle que dejan una estela suave, femenina y duradera.",

    notasSalida: "Mandarina, heliotropo, orquídea",
    notasCorazon: "Notas tropicales, acordes gourmand",
    notasFondo: "Vainilla, sándalo, almizcle",

    inspiracion:
        "Inspirado en el estilo cremoso y femenino de Montblanc Signature, con un perfil tropical, dulce y avainillado.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina dulce, suave y elegante. Perfecta para uso diario, salidas, citas o para amantes de los perfumes gourmand cremosos."
},
{
    id: "lattafa-yara-candy",
    nombre: "Lattafa Yara Candy",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-yara-candy.PNG",
    precioMinorista: 61992,
    precioMayorista: 45920,
    stock: 2,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia dulce, divertida y extremadamente femenina, con un perfil gourmand frutal que combina caramelos, frutas rojas y una vainilla cremosa muy adictiva. Un perfume moderno, juvenil y llamativo, ideal para quienes buscan un aroma dulce intenso con excelente duración y una vibra coqueta y seductora. La apertura es frutal y chispeante, donde las frutas rojas y los acordes cítricos crean una salida dulce, jugosa y divertida. En el corazón aparecen notas gourmand y suaves que le dan profundidad y cremosidad. Los caramelos y flores delicadas se mezclan perfectamente logrando un aroma dulce envolvente. El fondo es cálido, avainillado y almizclado, con vainilla cremosa, almizcle y sándalo que dejan una estela suave, dulce y duradera.",

    notasSalida: "Frutas rojas, mandarina verde",
    notasCorazon: "Caramelo, flores suaves, notas gourmand",
    notasFondo: "Vainilla, almizcle, sándalo",

    inspiracion:
        "Inspirado en el estilo dulce y gourmand de Prada Candy, con un perfil más frutal, juvenil y cremoso.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina dulce, divertida y moderna. Perfecta para salidas, uso diario, citas o para amantes de los perfumes gourmand frutales."
},
{
    id: "lattafa-yara-moi",
    nombre: "Lattafa Yara Moi",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-yara-moi.PNG",
    precioMinorista: 57456,
    precioMayorista: 42560,
    stock: 1,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia cremosa, dulce y elegante, con un perfil gourmand floral que combina frutas suaves, flores delicadas y un fondo avainillado extremadamente femenino. Un perfume moderno, sofisticado y envolvente, ideal para quienes buscan un aroma delicado pero con mucha presencia, excelente duración y una vibra limpia y seductora. La apertura es suave y luminosa, donde las notas frutales y florales crean una salida femenina, cremosa y moderna. En el corazón aparecen acordes gourmand y flores blancas que le dan profundidad y sensualidad. La vainilla cremosa se mezcla con notas dulces y empolvadas logrando un equilibrio perfecto entre calidez, feminidad y sofisticación. El fondo es cálido, almizclado y envolvente, con vainilla, almizcle y maderas suaves que dejan una estela cremosa, elegante y duradera.",

    notasSalida: "Frutas suaves, notas florales",
    notasCorazon: "Flores blancas, acordes gourmand, vainilla",
    notasFondo: "Almizcle, vainilla, maderas suaves",

    inspiracion:
        "Inspirado en el estilo cremoso y avainillado de Burberry Her Elixir, con un perfil dulce, suave y femenino.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina cremosa, dulce y sofisticada. Perfecta para uso diario, salidas, citas o para amantes de los perfumes gourmand suaves."
},
{
    id: "lattafa-yara-tous",
    nombre: "Lattafa Yara Tous",
    marca: "Lattafa",
    categoria: "perfumes-grandes",
    imagen: "images/lattafa-yara-tous.PNG",
    precioMinorista: 58968,
    precioMayorista: 43680,
    stock: 2,
    presentacion: "EAU DE PARFUM – 100 ML – WOMAN",

    descripcion:
        "Fragancia tropical, dulce y luminosa, con un perfil frutal floral cremoso que combina mango jugoso, coco suave y una vainilla cálida extremadamente femenina. Un perfume moderno, alegre y seductor, ideal para quienes buscan un aroma tropical elegante con excelente duración y una vibra veraniega muy adictiva. La apertura es fresca, exótica y frutal, donde el mango, el coco y la maracuyá crean una salida tropical dulce y cremosa. En el corazón aparecen flores delicadas y notas suaves que le dan equilibrio y sofisticación. El jazmín y el heliotropo se mezclan perfectamente con los acordes cremosos logrando un aroma tropical elegante, envolvente y muy atractivo. El fondo es cálido, avainillado y almizclado, con vainilla, almizcle y cachemira que dejan una estela cremosa, femenina y duradera.",

    notasSalida: "Mango, coco, maracuyá",
    notasCorazon: "Jazmín, heliotropo, flores suaves",
    notasFondo: "Vainilla, almizcle, cachemira",

    inspiracion:
        "Inspirado en el estilo tropical gourmand de Sol de Janeiro Cheirosa, con un perfil de mango cremoso, dulce y avainillado.",

    recomendacion:
        "Ideal para quienes buscan una fragancia femenina tropical, dulce y moderna. Perfecta para verano, salidas, vacaciones o para amantes de los perfumes frutales gourmand."
}
];
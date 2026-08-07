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
];
import type { BlogPost, BlogPostSummary } from "@/features/blog/types";

// Posts migrados por completo desde WordPress (mismo slug, mismo contenido).
const POSTS: BlogPost[] = [
  {
    slug: "le-regalo-un-celular-a-mi-hijo",
    title: "¿Le regalo un celular a mi hijo?",
    excerpt:
      "La decisión de si un padre debe o no regalarle a su hijo un celular es una que requiere una consideración cuidadosa. Aquí algunos factores a considerar.",
    category: "Recomendaciones para papás",
    publishedAt: "2022-12-22",
    content: [
      "La decisión de si un padre debe o no regalarle a su hijo un celular en Navidad es una que requiere una consideración cuidadosa. Aquí hay algunos factores a considerar al tomar esta decisión:",
      "Edad y madurez: ¿Tu hijo es lo suficientemente mayor y maduro para manejar un celular de manera responsable? ¿Está listo para asumir la responsabilidad de cuidar y proteger su dispositivo? Si tu hijo es demasiado joven o no está listo para manejar un celular de manera responsable, es posible que sea mejor esperar a que esté listo.",
      "Necesidad: ¿Tu hijo realmente necesita un celular? ¿Es necesario para su vida diaria, o es simplemente un capricho? Si tu hijo no necesita realmente un celular, es posible que sea mejor esperar y ver si sigue siendo necesario en el futuro.",
      "Costo: ¿Puedes permitirte el costo de un celular y todos los cargos adicionales, como la tarifa mensual y la protección de daños? Si no puedes permitirte el costo adicional, es posible que sea mejor esperar hasta que puedas permitirte el lujo de un celular.",
      "Uso: ¿Cómo planeas que tu hijo use el celular? ¿Es para emergencias y llamadas de seguridad, o es principalmente para juegos y redes sociales? Si el uso principal del celular es para diversión y entretenimiento, es posible que sea mejor esperar hasta que tu hijo tenga una edad y madurez más adecuadas para manejar ese tipo de responsabilidad.",
      "En resumen, si tu hijo es lo suficientemente mayor y maduro, realmente necesita un celular, puedes permitirte el costo y tienes un plan para su uso adecuado, entonces regalarle un celular en Navidad podría ser una buena opción. Sin embargo, si cualquiera de estos factores no se aplica a tu situación, es posible que sea mejor esperar y ver cómo evoluciona la necesidad de un celular para tu hijo.",
    ],
  },
  {
    slug: "como-empezar-a-usar-tiktok-con-mi-nino",
    title: "¿Cómo empezar a usar TikTok con mi niño?",
    excerpt:
      "Si ya tomaste la decisión de permitir a tu niñ@ usar TikTok, es importante considerar algunas recomendaciones antes de empezar.",
    category: "Recomendaciones para papás",
    publishedAt: "2023-01-04",
    content: [
      "Después de conocer las ventajas y desventajas de TikTok para los niños, si ya tomaste la decisión de permitir a tu niñ@ usarla, es importante considerar algunas de las siguientes recomendaciones:",
      "Configura una cuenta de TikTok para tu hijo: primero, necesitarás crear una cuenta de TikTok para tu hijo. Contempla establecer la configuración de privacidad en «privado» para evitar que los extraños vean sus vídeos.",
      "Supervisa el contenido que ven: TikTok tiene mucho contenido divertido y creativo, pero también puede haber contenido inapropiado o inadecuado para niños. Asegúrate de revisar los vídeos que tu hijo ve y de conversar con él acerca de cualquier cosa que pueda ser inapropiada.",
      "Establece límites de tiempo: es fácil pasar horas viendo vídeos de TikTok, pero es importante limitar el tiempo que tu hijo pasa en la plataforma. Establece límites de tiempo y asegúrate de que tu hijo cumpla con ellos.",
      "Enseña a tu hijo a usar TikTok de manera segura: habla con tu hijo sobre la importancia de no compartir información personal en TikTok y de no interactuar con extraños en la plataforma.",
      "Encuentra vídeos adecuados para la edad de tu hijo: TikTok tiene mucho contenido divertido y educativo que es adecuado para niños. Ayuda a tu hijo a encontrar estos vídeos y a seguir a creadores de contenido que tengan en cuenta la edad de su audiencia.",
      "Anima a tu hijo a ser creativo: TikTok es una plataforma muy divertida y creativa, y es una gran oportunidad para que tu hijo exprese su creatividad.",
      "Con estas recomendaciones, TikTok puede ser una plataforma divertida y segura para que tu hijo comparta sus vídeos y descubra nuevos contenidos. Recuerda siempre supervisar su uso y establecer límites adecuados.",
    ],
  },
  {
    slug: "por-que-es-importante-establecer-metas-con-nuestros-hijos-cuando-son-ninos",
    title: "¿Por qué es importante establecer metas con nuestros hijos cuando son niños?",
    excerpt:
      "Establecer metas con nuestros hijos les ayuda a ser responsables, a desarrollar su autoconfianza y a fortalecer la relación con sus padres.",
    category: "Emprendimiento",
    publishedAt: "2023-01-02",
    content: [
      "Es importante establecer metas con nuestros hijos cuando son niños por varias razones.",
      "Primero, establecer metas les ayuda a aprender a ser responsables y a planificar sus tareas y actividades. Esto les enseña a ser organizados y a ser capaces de alcanzar objetivos a largo plazo, lo que es esencial para el éxito a lo largo de su vida.",
      "Además, establecer metas con nuestros hijos les da un sentido de propósito y les ayuda a desarrollar su autoconfianza. Al tener metas claras y específicas, los niños pueden trabajar en ellas y ver cómo van progresando y logrando cosas. Esto puede aumentar su confianza en sí mismos y en su capacidad para lograr cosas.",
      "También es importante tener en cuenta que no todas las metas deben ser grandes y ambiciosas. De hecho, es posible que a veces sea más beneficioso establecer metas más pequeñas y alcanzables para que nuestros hijos puedan experimentar el éxito y la satisfacción de lograr algo.",
      "Finalmente, establecer metas con nuestros hijos también puede ayudar a fortalecer la relación entre padres e hijos. Al trabajar juntos para alcanzar metas específicas, los padres pueden brindar apoyo y aliento a sus hijos y ayudarles a sentirse valorados y queridos.",
      "En resumen, establecer metas con nuestros hijos es importante porque les ayuda a ser responsables, a desarrollar su autoconfianza y a fortalecer la relación con sus padres.",
    ],
  },
];

// Slugs que ya rankean en el sitio actual y se conservarán (ver SITE.md),
// pendientes de migrar su contenido completo desde WordPress.
const PENDING_SLUGS: { slug: string; title: string; category: string }[] = [
  { slug: "las-ventajas-y-desventajas-de-tiktok-para-los-ninos", title: "Las ventajas y desventajas de TikTok para los niños", category: "Recomendaciones para papás" },
  { slug: "videojuegos-herramientas-o-solo-entretenimiento", title: "Videojuegos: herramientas o solo entretenimiento", category: "Uncategorized" },
  { slug: "los-profesionistas-no-van-a-cambiar-al-mundo-los-emprendedores-si", title: "Los profesionistas no van a cambiar al mundo, los emprendedores sí", category: "Emprendimiento" },
  { slug: "mujeres-y-ninas-en-el-mundo-de-la-programacion", title: "Mujeres y niñas en el mundo de la programación", category: "Programación" },
  { slug: "como-romper-la-brecha-digital-entre-padres-e-hijos", title: "Cómo romper la brecha digital entre padres e hijos", category: "Recomendaciones para papás" },
  { slug: "aprender-a-programar-para-aprender-a-pensar", title: "Aprender a programar para aprender a pensar", category: "Programación" },
  { slug: "invertir-el-siguiente-nivel-del-juego-de-las-finanzas", title: "Invertir: el siguiente nivel del juego de las finanzas", category: "Emprendimiento" },
  { slug: "los-ninos-son-emprendedores-por-naturaleza", title: "¿Los niños son emprendedores por naturaleza?", category: "Emprendimiento" },
  { slug: "filosofos-vs-emprendedores", title: "Filósofos vs. emprendedores", category: "Emprendimiento" },
  { slug: "dekids-la-transicion-educativa-de-los-nativos-digitales", title: "Dekids: la transición educativa de los nativos digitales", category: "Uncategorized" },
  { slug: "como-preparar-a-mis-ninos-para-un-futuro-incierto", title: "¿Cómo preparar a mis niños para un futuro incierto?", category: "Recomendaciones para papás" },
  { slug: "los-concursos-y-competencias-de-la-infancia-impulsan-a-los-adultos-del-futuro", title: "Los concursos y competencias de la infancia impulsan a los adultos del futuro", category: "Emprendimiento" },
  { slug: "por-que-establecer-habitos-para-tu-ninao", title: "¿Por qué establecer hábitos para tu niñ@?", category: "Recomendaciones para papás" },
  { slug: "cual-es-la-edad-ideal-para-emprender", title: "¿Cuál es la edad ideal para emprender?", category: "Emprendimiento" },
  { slug: "el-tamano-de-la-amenaza-es-del-mismo-tamano-al-de-la-oportunidad", title: "El tamaño de la amenaza es del mismo tamaño al de la oportunidad", category: "Emprendimiento" },
  { slug: "descubre-como-ser-un-buen-lider", title: "Descubre cómo ser un buen líder", category: "Emprendimiento" },
  { slug: "7-sitios-para-que-tu-hijo-aprenda-a-programar-jugando", title: "7 sitios para que tu hijo aprenda a programar jugando", category: "Programación" },
  { slug: "como-orientar-a-tus-ninos-para-que-emprendan-un-futuro-exitoso", title: "Cómo orientar a tus niños para que emprendan un futuro exitoso", category: "Emprendimiento" },
  { slug: "pensar-fuera-de-la-caja", title: "Pensar fuera de la caja", category: "Emprendimiento" },
  { slug: "3-aplicaciones-educativas-que-debes-conocer", title: "3 aplicaciones educativas que debes conocer", category: "Uncategorized" },
  { slug: "3-grandes-lecciones-que-nos-dejo-steve-jobs-sobre-emprendimiento", title: "3 grandes lecciones que nos dejó Steve Jobs sobre emprendimiento", category: "Emprendimiento" },
];

export function getAllPostSummaries(): BlogPostSummary[] {
  const migrated: BlogPostSummary[] = POSTS.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    publishedAt: post.publishedAt,
    available: true,
  }));

  const pending: BlogPostSummary[] = PENDING_SLUGS.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: "Estamos migrando este artículo desde el sitio anterior. Vuelve pronto.",
    category: post.category,
    publishedAt: "",
    available: false,
  }));

  return [...migrated, ...pending];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getAllAvailableSlugs(): string[] {
  return POSTS.map((post) => post.slug);
}

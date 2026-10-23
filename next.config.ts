import type { NextConfig } from "next";

type Redirect = { source: string; destination: string };

const TIKTOK_POST = "/las-ventajas-y-desventajas-de-tiktok-para-los-ninos/";

// Redirects 301/308 de URLs del WordPress anterior. Criterio: toda URL que Google
// mostró en los últimos 16 meses (Search Console) o que tenía contenido propio
// redirige a la página viva más cercana. Las páginas de prueba/confirmación sin
// actividad se dejan en 404 a propósito.
const legacyRedirects: Redirect[] = [
  // Blog
  { source: "/blog-nuevo", destination: "/blog/" },
  { source: "/las-ventajas-y-desventajas-de-tik-tok-para-los-ninos", destination: TIKTOK_POST },
  { source: "/como-empezar-y-usar-tiktok-con-mi-nino", destination: "/como-empezar-a-usar-tiktok-con-mi-nino/" },
  {
    source: "/los-concursos-y-competencias-de-la-infancia-impulsan-aanos-del-futuro",
    destination: "/los-concursos-y-competencias-de-la-infancia-impulsan-a-los-adultos-del-futuro/",
  },
  // Permalinks antiguos con fecha: /2015/10/el-comienzo/ -> /el-comienzo/
  { source: "/:year(\\d{4})/:month(\\d{2})/:slug", destination: "/:slug/" },

  // Tienda WooCommerce (ya no vende). Se redirige solo cuando el tema coincide con una
  // página viva; el resto (videojuegos, apps, seguridad informática...) queda en 404,
  // porque un redirect a una página que no responde a esa búsqueda cuenta como soft 404.
  {
    source:
      "/producto/:slug(.*(?:emprend|hacker|universo-dekids|negocios|ideas-para-generar|herramientas-ia).*)",
    destination: "/master/",
  },
  { source: "/producto/:slug(dekids-start.*)", destination: "/programas/" },
  // Variantes históricas de videojuegos y programación. Todas corresponden al
  // hub vigente de programas, no a páginas de compra ya descontinuadas.
  { source: "/producto/universo-gamer-plan-basic-inscripcion", destination: "/programas/" },
  { source: "/producto/universo-gamer-plan-epic-inscripcion", destination: "/programas/" },
  { source: "/producto/universogamer-basiccontado", destination: "/programas/" },
  { source: "/producto/universogamer-epiccontado", destination: "/programas/" },
  { source: "/producto/universogamer-master-contado", destination: "/programas/" },
  { source: "/producto/taller-de-videojuegos-entre-amigos", destination: "/programas/" },
  { source: "/producto/taller-de-creacion-de-videojuegos", destination: "/programas/" },
  { source: "/producto/mi-primer-personaje", destination: "/programas/" },
  { source: "/producto/mi-primer-videojuego", destination: "/programas/" },
  { source: "/producto/app-tipo-discord", destination: "/programas/" },
  { source: "/producto/codeforkids", destination: "/programas/" },
  { source: "/producto/lugares-spd", destination: "/programas/" },
  { source: "/producto/elementos-seguridad-informatica", destination: "/programas/" },
  { source: "/tienda", destination: "/programas/" },
  { source: "/categoria-producto/:path*", destination: "/programas/" },
  { source: "/dekids-start", destination: "/programas/" },
  { source: "/aprender", destination: "/programas/" },

  // Talleres, Universo Gamer y campañas de videojuegos -> programas
  { source: "/taller-de-programacion", destination: "/programas/" },
  { source: "/taller-programacion-pilotos", destination: "/programas/" },
  { source: "/pilotos", destination: "/programas/" },
  { source: "/universo-gamer", destination: "/programas/" },
  { source: "/game-session", destination: "/programas/" },
  { source: "/registro-exitoso-sesion-prueba-universo-dekids", destination: "/programas/" },
  { source: "/la-competencia", destination: "/programas/" },
  { source: "/inversionistas-de-la-ninez", destination: "/programas/" },
  { source: "/opsfc", destination: "/programas/" },
  { source: "/turn-yourself-on", destination: "/programas/" },
  { source: "/votamisiondek", destination: "/programas/" },
  { source: "/proyectos-de-dekidsers", destination: "/programas/" },

  // Veranos y campamentos -> programa vigente para niñ@s
  { source: "/verano-hacker-emprendedor", destination: "/master/" },
  { source: "/veranoenisdi", destination: "/master/" },
  { source: "/verano23", destination: "/master/" },
  { source: "/curso-de-verano-ismx", destination: "/master/" },
  { source: "/misionverano22", destination: "/master/" },

  // Demos de alumnos con impresiones en Google
  { source: "/app-ludable", destination: "/programas/" },
  { source: "/freddy", destination: "/programas/" },
  { source: "/yoloklik", destination: "/programas/" },
  { source: "/neko-friend", destination: "/programas/" },
  { source: "/mundo-canino", destination: "/programas/" },

  // Confirmación de registro
  { source: "/registro-exitoso-sesion-prueba-dekids", destination: "/proposito/" },
];

const nextConfig: NextConfig = {
  // WordPress servía todas las URLs con barra final; se conservan idénticas.
  trailingSlash: true,
  async redirects() {
    return legacyRedirects.map((redirect) => ({ ...redirect, permanent: true }));
  },
};

export default nextConfig;

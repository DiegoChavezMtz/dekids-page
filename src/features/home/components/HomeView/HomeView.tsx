"use client";

import Image from "next/image";
import { useEffect } from "react";
import { LandingNavigation } from "../LandingNavigation/LandingNavigation";

const WHATSAPP = "https://wa.me/525573731655";
const WHATSAPP_MESSAGES = {
  general: `${WHATSAPP}?text=Hola%20equipo%20Dekids%2C%20quiero%20conocer%20qu%C3%A9%20experiencia%20es%20adecuada%20para%20m%C3%AD.`,
  family: `${WHATSAPP}?text=Hola%20equipo%20Dekids%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20experiencias%20disponibles%20para%20mi%20hij%40.`,
  school: `${WHATSAPP}?text=Hola%20equipo%20Dekids%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20experiencias%20para%20colegios.`,
  organization: `${WHATSAPP}?text=Hola%20equipo%20Dekids%2C%20quiero%20explorar%20un%20programa%20para%20nuestra%20empresa%20o%20fundaci%C3%B3n.`,
  contact: `${WHATSAPP}?text=Hola%20equipo%20Dekids%2C%20quiero%20platicar%20sobre%20una%20experiencia.`,
};

function Asset({ src, alt, className, priority = false, original = false }: { src: string; alt: string; className?: string; priority?: boolean; original?: boolean }) {
  return <Image src={`/landing/${src}`} alt={alt} className={className} width={1672} height={941} priority={priority} unoptimized={original} sizes="(max-width: 680px) 100vw, 50vw" />;
}

const Skills = [
  ["01", "criteria", "CONTRASTA · DECIDE", "Pensar con criterio", "Cuestionar, contrastar y tomar decisiones cuando generar información nunca había sido tan fácil."],
  ["02", "create", "IMAGINA · CONSTRUYE", "Crear algo propio", "Usar la tecnología para investigar una idea, probar decisiones y convertirlas en un proyecto propio."],
  ["03", "confidence", "PRUEBA · MEJORA", "Actuar con confianza", "Probar, equivocarse, mejorar y comunicar una idea hasta convertirla en algo que otros pueden ver."],
] as const;

function SkillIcon({ variant }: { variant: (typeof Skills)[number][1] }) {
  if (variant === "criteria") return <svg viewBox="0 0 240 150"><path className="icon-track" d="M22 36h48l34 39M22 75h82M22 114h48l34-39" /><circle className="icon-node icon-node--a" cx="22" cy="36" r="8" /><circle className="icon-node icon-node--b" cx="22" cy="75" r="8" /><circle className="icon-node icon-node--c" cx="22" cy="114" r="8" /><path className="icon-core" d="m104 54 21 21-21 21-21-21 21-21Z" /><path className="icon-track icon-flow" d="M126 75h72" /><path className="icon-arrow" d="m185 61 14 14-14 14" /><circle className="icon-spark" cx="217" cy="34" r="5" /></svg>;
  if (variant === "create") return <svg viewBox="0 0 240 150"><path className="icon-layer icon-layer--back" d="m48 61 63-36 64 36-64 37-63-37Z" /><path className="icon-layer icon-layer--front" d="m48 79 63-36 64 36-64 37-63-37Z" /><path className="icon-track" d="M111 116v22M175 79h38" /><path className="icon-arrow" d="m201 67 13 12-13 13" /><circle className="icon-spark" cx="42" cy="31" r="6" /><path className="icon-float" d="M188 24h25v25h-25z" /></svg>;
  return <svg viewBox="0 0 240 150"><path className="icon-axis" d="M26 123h188" /><path className="icon-track icon-flow" d="M30 112c32 0 40-30 68-30s38-39 68-39h42" /><circle className="icon-node" cx="31" cy="112" r="9" /><circle className="icon-node" cx="98" cy="82" r="9" /><circle className="icon-node" cx="166" cy="43" r="9" /><path className="icon-arrow" d="m194 29 14 14-14 14" /><path className="icon-bars" d="M48 112V98M116 82V60M184 43V18" /></svg>;
}

const Journey = [
  ["01", "question", "El reto", "Una pregunta que vale la pena."],
  ["02", "explore", "La exploración", "Ideas, decisiones y tecnología."],
  ["03", "build", "La construcción", "Un prototipo que puede probarse."],
  ["04", "voice", "La voz", "Una historia que pueden defender."],
] as const;

function JourneyIcon({ variant }: { variant: (typeof Journey)[number][1] }) {
  if (variant === "question") return <svg viewBox="0 0 180 130"><path className="journey-orbit" d="M25 71c9-39 44-60 84-51 27 6 46 25 49 49" /><path className="journey-route" d="M57 53c0-18 14-29 34-29 21 0 34 12 34 29 0 15-9 23-23 30-10 5-13 10-13 20" /><circle className="journey-core" cx="89" cy="116" r="7" /><circle className="journey-node journey-node--a" cx="25" cy="71" r="5" /><circle className="journey-node journey-node--b" cx="158" cy="69" r="5" /></svg>;
  if (variant === "explore") return <svg viewBox="0 0 180 130"><ellipse className="journey-orbit" cx="90" cy="66" rx="68" ry="42" /><path className="journey-route" d="m42 79 38-30 32 18 29-29M80 49l10 52m22-34 27 28" /><circle className="journey-core" cx="80" cy="49" r="10" /><circle className="journey-node journey-node--a" cx="42" cy="79" r="7" /><circle className="journey-node journey-node--b" cx="112" cy="67" r="7" /><circle className="journey-node journey-node--c" cx="141" cy="38" r="7" /><circle className="journey-node journey-node--d" cx="139" cy="95" r="5" /><circle className="journey-node journey-node--e" cx="90" cy="101" r="5" /></svg>;
  if (variant === "build") return <svg viewBox="0 0 180 130"><path className="journey-orbit" d="M29 96h122M40 106h101" /><path className="journey-plane journey-plane--back" d="m90 20 48 27-48 28-48-28 48-27Z" /><path className="journey-plane journey-plane--front" d="m90 54 48 27-48 28-48-28 48-27Z" /><path className="journey-route" d="M42 47v34l48 28 48-28V47M90 75v34" /><circle className="journey-node journey-node--a" cx="145" cy="28" r="6" /></svg>;
  return <svg viewBox="0 0 180 130"><path className="journey-frame" d="M34 25h92a12 12 0 0 1 12 12v52a12 12 0 0 1-12 12H82l-25 17v-17H34a12 12 0 0 1-12-12V37a12 12 0 0 1 12-12Z" /><path className="journey-route" d="M38 67h18l9-20 15 39 12-29 10 20 9-10h12" /><path className="journey-signal" d="M146 42c8 8 8 34 0 42M155 33c13 14 13 47 0 61" /><circle className="journey-node journey-node--a" cx="138" cy="25" r="6" /></svg>;
}

export function HomeView() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    document.querySelectorAll(".landing .reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <div className="landing">
    <a className="skip" href="#contenido">Saltar al contenido</a>
    <LandingNavigation />

    <main id="contenido">
      <section className="hero hero--speaker" id="inicio">
        <div className="hero-copy reveal"><h1>Descubre de lo que es capaz<br /><em>y dale confianza que le abrirá más oportunidades.</em></h1><div className="hero-actions hero-actions--routes"><a className="hero-route hero-route--family" href={WHATSAPP_MESSAGES.family} target="_blank" rel="noopener noreferrer"><small>PARA FAMILIAS</small><strong>Quiero esto para mi hija o hijo</strong><span>↗</span></a><a className="hero-route hero-route--business" href={WHATSAPP_MESSAGES.organization} target="_blank" rel="noopener noreferrer"><small>PARA ORGANIZACIONES</small><strong>Quiero explorar esto para mi equipo</strong><span>↗</span></a></div></div>
        <div className="hero-collage reveal" aria-label="Dos dekidsers ficticios y la mascota de Dekids representan distintas etapas de aprendizaje"><div className="hero-system"><Asset src="dekids-hero-fictitious-dekidser-brand-exact-v3.png" alt="Dos dekidsers ficticios y la mascota azul de Dekids en un escenario de luces neón" className="hero-portrait" priority original /><div className="hero-portrait-shade" aria-hidden="true" /><aside className="speaker-proof" aria-label="Habilidades que destacan en la era de la inteligencia artificial"><strong>Habilidades que destacan en la era de la IA</strong></aside></div></div>
      </section>

      <section className="routes" id="rutas" aria-labelledby="routes-title"><header className="routes-head reveal"><p className="eyebrow"><span />Elige tu punto de partida</p><h2 id="routes-title">¿Qué quieres hacer <em>posible?</em></h2><p>No todas las personas llegan con la misma necesidad. Elige la ruta que más se parece a la tuya y descubre qué podemos construir juntos.</p></header><div className="route-grid"><a className="route-card route-card--school reveal" href={WHATSAPP_MESSAGES.school} target="_blank" rel="noopener noreferrer"><span className="route-index">01 · PARA COLEGIOS</span><h3>Que cada estudiante descubra de qué es capaz.</h3><p>Experiencias con estudiantes y acompañamiento para que el equipo docente pueda continuar.</p><strong>Explorar la ruta <i>↘</i></strong></a><a className="route-card route-card--family reveal" href={WHATSAPP_MESSAGES.family} target="_blank" rel="noopener noreferrer"><span className="route-index">02 · PARA FAMILIAS</span><h3>Que una idea propia encuentre dónde crecer.</h3><p>Espacios para investigar intereses, tomar decisiones y presentar un proyecto propio.</p><strong>Explorar la ruta <i>↘</i></strong></a><a className="route-card route-card--restart reveal" href="https://empiezadiferente.com/" target="_blank" rel="noopener noreferrer"><span className="route-index">03 · JÓVENES Y ADULTOS</span><h3>Que volver a empezar tenga un siguiente paso.</h3><p>RESTART ayuda a convertir lo que sabes hacer en algo concreto para avanzar con más dirección.</p><strong>Conocer RESTART <i>↘</i></strong></a><a className="route-card route-card--company reveal" href={WHATSAPP_MESSAGES.organization} target="_blank" rel="noopener noreferrer"><span className="route-index">04 · EMPRESAS Y FUNDACIONES</span><h3>Elige a quién quieres beneficiar. Nosotros hacemos que suceda.</h3><p>Programas para hijas e hijos de colaboradores o para niñas, niños y adolescentes de una fundación aliada.</p><strong>Platicar con Dekids <i>↘</i></strong></a></div></section>

      <section className="skills" id="habilidades"><header className="section-intro reveal"><p className="eyebrow eyebrow--light"><span />Capacidades para un mundo con IA</p><h2>La IA puede darles respuestas.<br />Lo valioso es saber <em>qué hacer con ellas.</em></h2></header><div className="skill-grid">{Skills.map(([number, variant, label, title, copy]) => <article className="skill-card reveal" key={title}><span>{number}</span><div className={`skill-icon skill-icon--${variant}`} aria-hidden="true"><SkillIcon variant={variant} /><small>{label}</small></div><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="method" id="metodo"><div className="method-head reveal"><div><p className="eyebrow"><span />De una pregunta a un proyecto</p><h2>Así se construye <em>una idea propia.</em></h2></div><p>Cada grupo parte de una pregunta que le importa. Investiga, compara opciones, crea una primera versión y aprende a explicar sus decisiones. La tecnología y la IA se usan para avanzar en ese trabajo.</p></div><div className="journey reveal">{Journey.map(([number, variant, label, title]) => <article key={number}><b>{number}</b><div className={`journey-icon journey-icon--${variant}`} aria-hidden="true"><JourneyIcon variant={variant} /></div><span>{label}</span><h3>{title}</h3></article>)}</div></section>

      <section className="proof" id="evidencia" aria-label="Organizaciones y medios relacionados con la historia de Dekids"><p className="eyebrow reveal"><span />Han confiado en Dekids</p><div className="logo-rail reveal">{[["logo-bbva-official.svg", "BBVA"], ["logo-banamex-official.svg", "Banamex"], ["logo-forbes.png", "Forbes"], ["logo-el-economista.png", "El Economista"], ["logo-cnn-expansion.png", "Expansión"], ["logo-tv-azteca.png", "TV Azteca"]].map(([src, alt]) => <div key={src}><Asset src={src} alt={alt} /></div>)}</div></section>

      <section className="history" id="historia"><div className="history-stat reveal"><strong>10<sup>+</sup></strong><span>años aprendiendo<br />cómo aprenden<br />las nuevas generaciones.</span></div><div className="history-story reveal"><p>DE LA INFANCIA AL TRABAJO</p><h2>Nacimos creando con niños. Ahí aprendimos cómo se construye <em>la confianza.</em></h2><div><p>Todo empezó con una idea simple: poner tecnología en sus manos y dejar que construyeran.</p><p>Desde entonces hemos creado experiencias de emprendimiento, programación, innovación e inteligencia artificial con una misma obsesión: que una idea propia se convierta en algo real.</p></div></div></section>

      <section className="testimonials" id="testimonios" aria-labelledby="testimonials-title"><header className="testimonials-head reveal"><p className="eyebrow eyebrow--light"><span />Lo que familias y organizaciones observan</p><h2 id="testimonials-title">La confianza se nota cuando pueden <em>mostrar lo que hicieron.</em></h2></header><figure className="institutional-testimonial reveal"><figcaption><Asset src="logo-banamex-official.svg" alt="Banamex" /><div><strong>Carmen Villaseñor</strong><span>Subdirectora de Educación Financiera de Banamex</span></div></figcaption><blockquote>“Las iniciativas de DeKids en Banamex han sido un éxito, con niñas, niños y jóvenes desarrollando habilidades inesperadas, mientras los padres se sorprenden con sus logros. Han logrado adaptar su programa a diversos públicos, incluyendo participantes sin habilidades tecnológicas previas, en entornos urbanos y rurales, con cursos largos y cortos, entre muchos otros retos. Juntos hemos logrado marcar la diferencia.”</blockquote></figure><div className="testimonial-grid">{[["testimonial-alexandra-monroy.png", "Alexandra Monroy", "Familiar dekidser", "Exponer ante tantas personas, la verdad que no es su fuerte, entonces verlo desarrollar estas habilidades la verdad que es muy bonito."], ["testimonial-sandra-veloz.png", "Sandra Veloz", "Mamá dekidser", "Soy muy escéptica, me fijo en cada detalle. Estoy muy contenta de mi inversión. No es un simple curso de sentarse a programar."], ["testimonial-erik-torbellin.png", "Erik Torbellin", "Papá dekidser", "Es una experiencia fuera de la caja en la cual es necesario que nosotros entendamos que esto es el presente y el futuro."]].map(([src, name, role, quote], index) => <figure className={`testimonial-card testimonial-card--${index === 0 ? "lime" : index === 1 ? "blue" : "pink"} reveal`} key={name}><blockquote>“{quote}”</blockquote><figcaption><Asset src={src} alt={name} /><span><strong>{name}</strong><small>{role}</small></span></figcaption></figure>)}</div></section>
      <section className="contact" id="contacto"><p className="eyebrow reveal"><span />Hablemos de lo que quieres hacer posible</p><h2 className="reveal">Cuéntanos qué quieres que puedan <em>pensar, construir y demostrar.</em></h2><a className="button button--ink reveal" href={WHATSAPP_MESSAGES.contact} target="_blank" rel="noopener noreferrer">Hablar con el equipo <span>↗</span></a></section>
    </main>
    <footer><div className="footer-brand"><Asset src="logo-dekids.png" alt="" /><strong>DEKIDS</strong></div><p>Ideas propias que se vuelven visibles.</p><div><a href="tel:+525573731655">55 7373 1655</a><a href="https://www.linkedin.com/company/dekidsmx" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><span>Ciudad de México · {new Date().getFullYear()}</span></div></footer>
  </div>;
}

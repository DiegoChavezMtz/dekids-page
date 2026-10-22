import { PageHero } from "@/components/organisms/PageHero";
import { Button } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import { Faq } from "@/components/organisms/Faq";
import { Testimonials } from "@/components/organisms/Testimonials";
import styles from "./MasterProgramView.module.css";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=525573731655&text=Hola,+quiero+informaci%C3%B3n+de+Master+in+Future+Design";

const BENEFITS = [
  "Desarrollan una mentalidad emprendedora",
  "Aumentan su autoestima al desarrollar sus habilidades en un ambiente de confianza",
  "Aprenden a programar y a utilizar las nuevas herramientas de IA",
];

const INCLUDES = [
  { number: "40", label: "horas de aprendizaje" },
  { number: "100%", label: "sesiones en tiempo real" },
  { number: "✓", label: "contenido grabado" },
];

const PILLARS = [
  { title: "Ciudadanos globales activos" },
  { title: "Aprendizaje a través de desafíos del mundo real" },
  { title: "Desde cualquier parte del mundo", text: "Conéctate desde tu lugar favorito · Sesiones 1 a 1 en línea" } as { title: string; text?: string },
];

const FAQ_ITEMS = [
  {
    question: "¿Qué conocimientos previos requiere mi hij@?",
    answer: "Se requiere saber leer, hacer operaciones matemáticas básicas y escribir.",
  },
  { question: "¿Los pagos incluyen IVA?", answer: "Así es, los precios ya incluyen el IVA del 16%." },
  {
    question: "¿Tienen descuentos por inscribir a más de 1 niño?",
    answer: "Sí, 10% de descuento adicional por cada dekidser (válido hasta 3 participantes).",
  },
  {
    question: "¿Puedo facturar?",
    answer: "Así es. Una vez realizado tu pago, te indicaremos cómo puedes facturar.",
  },
];

export function MasterProgramView() {
  return (
    <main>
      <PageHero
        eyebrow="Para la era de la IA"
        title="Master in Future Design"
        sub="La experiencia más emocionante para niñ@s y adolescentes donde desarrollan su confianza a través del emprendimiento y la tecnología, utilizando herramientas de inteligencia artificial."
      >
        <Button href={WHATSAPP_URL} variant="primary" target="_blank" rel="noopener noreferrer">
          Contáctanos
        </Button>
        <Button href="#pricing" variant="secondary">
          Conocer el programa
        </Button>
      </PageHero>

      <section className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionTitle}>Te damos la bienvenida a la Educación 4.0</h2>
        </Reveal>
        <div className={styles.grid}>
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.title} delayMs={i * 120}>
              <div className={styles.card}>
                <p className={styles.cardTitle}>{pillar.title}</p>
                {pillar.text && <p className={styles.cardText}>{pillar.text}</p>}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionTitle}>3 beneficios clave para tu hij@</h2>
        </Reveal>
        <div className={styles.grid}>
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit} delayMs={i * 120}>
              <div className={styles.card}>
                <p className={styles.cardTitle}>{benefit}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionTitle}>Todas las sesiones incluyen</h2>
        </Reveal>
        <div className={styles.includes}>
          {INCLUDES.map((item, i) => (
            <Reveal key={item.label} delayMs={i * 100}>
              <div className={styles.includeItem}>
                <p className={styles.includeNumber}>{item.number}</p>
                <p className={styles.includeLabel}>{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.section} id="pricing">
        <Reveal>
          <div className={styles.pricing}>
            <h2 className={styles.priceHeading}>Entre más aprende hoy tu hij@, inviertes menos en el futuro</h2>
            <p className={styles.priceUnit}>Inversión total</p>
            <p className={styles.price}>
              10 pagos de $2,799<span className={styles.priceUnit}>/mes</span>
            </p>
            <p className={styles.priceDetails}>
              Sesiones 1 a 1 en línea · Tú eliges el horario (se considera 1
              sesión a la semana)
            </p>
            <div className={styles.priceActions}>
              <Button href={WHATSAPP_URL} variant="primary" target="_blank" rel="noopener noreferrer">
                Quiero hablar por WhatsApp
              </Button>
              <Button href="/proposito" variant="secondary">
                Participar por una beca
              </Button>
            </div>
          </div>
        </Reveal>
      </section>

      <Testimonials />
      <Faq items={FAQ_ITEMS} />
    </main>
  );
}

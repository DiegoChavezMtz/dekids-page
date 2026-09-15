import { PageHero } from "@/components/organisms/PageHero";
import { Button } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import styles from "./FutureEnterpriseView.module.css";

const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=525573731655&text=Hola,+quiero+informaci%C3%B3n+de+Future+Enterprise";

const BENEFITS = [
  "Te posicionas como una empresa con impacto positivo",
  "Creas un sentido de agradecimiento especial con tus colaboradores",
  "Comunicación positiva y cobertura mediática",
];

const WAYS_TO_PARTICIPATE = [
  "Acerca estos programas a tus colaboradores",
  "Beca a niñ@s a través de alguna dinámica de activación con tu producto o servicio",
  "Patrocina competencias de emprendimiento y/o tecnología",
];

export function FutureEnterpriseView() {
  return (
    <main>
      <PageHero
        eyebrow="Deja huella en la humanidad"
        title="Future Enterprise"
        sub="Para las empresas que apuestan por el futuro."
        glowColor="rgba(125, 224, 255, 0.16)"
      >
        <Button href={WHATSAPP_URL} variant="primary" target="_blank" rel="noopener noreferrer">
          Contáctanos
        </Button>
        <Button href="#participar" variant="secondary">
          Agendar videollamada
        </Button>
      </PageHero>

      <section className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionTitle}>¿Cómo tu empresa se beneficia?</h2>
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

      <section className={styles.section} id="participar">
        <Reveal>
          <h2 className={styles.sectionTitle}>¿Cómo tu empresa puede involucrarse?</h2>
        </Reveal>
        <div className={styles.grid}>
          {WAYS_TO_PARTICIPATE.map((way, i) => (
            <Reveal key={way} delayMs={i * 120}>
              <div className={styles.card}>
                <p className={styles.cardTitle}>{way}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className={styles.closing}>
        <Reveal>
          <h2 className={styles.closingTitle}>
            Acerca una experiencia inolvidable a las personas más importantes
            para tus colaboradores
          </h2>
        </Reveal>
        <Reveal delayMs={100}>
          <div className={styles.actions}>
            <Button href={WHATSAPP_URL} variant="primary" target="_blank" rel="noopener noreferrer">
              Contáctanos
            </Button>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

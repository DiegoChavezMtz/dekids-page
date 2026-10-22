import { PageHero } from "@/components/organisms/PageHero";
import { Button } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import { PressLogos } from "@/components/organisms/PressLogos";
import { Testimonials } from "@/components/organisms/Testimonials";
import { LeadForm } from "@/features/proposito/components/LeadForm";
import { TeamTeaser } from "@/features/proposito/components/TeamTeaser";
import styles from "./PropositoView.module.css";

const REASONS = [
  "Sumas habilidades para la era digital",
  "Desarrollas tu confianza para resolver problemas",
  "Entiendes la oportunidad de crear impacto",
];

export function PropositoView() {
  return (
    <main>
      <PageHero
        eyebrow="Propósito"
        title="El futuro de tus hij@s ha comenzado"
        sub="Es el mejor momento de experimentar, de desarrollar nuevas habilidades y una nueva mentalidad. ¿Cómo hacerlo? A través del emprendimiento y la programación."
      >
        <Button href="#registro" variant="primary">
          Me interesa
        </Button>
      </PageHero>

      <div className={styles.statBlock}>
        <Reveal>
          <p className={styles.statNumber}>85%</p>
          <p className={styles.statLabel}>de las personas no les gusta su trabajo</p>
          <p className={styles.statCallout}>Que tu hij@ no forme parte de esta estadística</p>
        </Reveal>
      </div>

      <p className={styles.why}>¿Por qué?</p>
      <div className={styles.reasons}>
        {REASONS.map((reason, i) => (
          <Reveal key={reason} delayMs={i * 120}>
            <div className={styles.reasonCard}>{reason}</div>
          </Reveal>
        ))}
      </div>

      <div className={styles.promise}>
        <Reveal>
          <p className={styles.promiseLead}>Aquí te facilitaremos este proceso</p>
          <p className={styles.promiseText}>
            Y tu hij@ sumará una experiencia <strong>memorable</strong>
          </p>
        </Reveal>
      </div>

      <TeamTeaser />

      <LeadForm />

      <PressLogos title="Dekids en los medios" />

      <Testimonials />
    </main>
  );
}

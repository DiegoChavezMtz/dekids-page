import { PageHero } from "@/components/organisms/PageHero";
import { Button } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import { Testimonials } from "@/components/organisms/Testimonials";
import { LeadForm } from "@/features/proposito/components/LeadForm";
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
        eyebrow="El futuro de tus hij@s"
        title="Ha comenzado"
        sub="Es el mejor momento de experimentar, de desarrollar nuevas habilidades y una nueva mentalidad — a través del emprendimiento y la programación."
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

      <div className={styles.reasons}>
        {REASONS.map((reason, i) => (
          <Reveal key={reason} delayMs={i * 120}>
            <div className={styles.reasonCard}>{reason}</div>
          </Reveal>
        ))}
      </div>

      <LeadForm />

      <Testimonials />
    </main>
  );
}

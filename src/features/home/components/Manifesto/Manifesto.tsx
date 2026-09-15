import { Reveal } from "@/components/atoms/Reveal";
import styles from "./Manifesto.module.css";

const REASONS = [
  "Sumas habilidades para la era digital",
  "Desarrollas confianza para resolver problemas",
  "Entiendes la oportunidad de crear impacto",
];

export function Manifesto() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <p className={styles.statement}>
            El aprendizaje en la niñez es <span className={styles.accent}>invaluable</span>.
            Ante una nueva era de cambios constantes, creamos experiencias{" "}
            <span className={styles.accent}>no tradicionales</span> para toda
            la vida.
          </p>
        </Reveal>

        <div className={styles.reasons}>
          {REASONS.map((reason, i) => (
            <Reveal key={reason} delayMs={i * 120}>
              <div className={styles.reason}>
                <p className={styles.reasonNumber}>0{i + 1}</p>
                <p className={styles.reasonTitle}>{reason}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

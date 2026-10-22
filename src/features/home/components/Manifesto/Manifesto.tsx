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
          <h2 className={styles.statement}>
            Nos enfocamos en el aprendizaje{" "}
            <span className={styles.accent}>para toda la vida</span>
          </h2>
          <p className={styles.lead}>
            El aprendizaje en la niñez es invaluable, y ante una nueva era de
            cambios constantes, creamos cursos y talleres NO tradicionales
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

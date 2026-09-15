import { Reveal } from "@/components/atoms/Reveal";
import styles from "./Stats.module.css";

const STATS = [
  { number: "40", suffix: "hrs", label: "de aprendizaje en vivo por programa" },
  { number: "1", suffix: "a 1", label: "sesiones personalizadas, sin grupos genéricos" },
  { number: "100", suffix: "%", label: "en línea, desde cualquier parte del mundo" },
];

export function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delayMs={i * 120}>
            <p className={styles.number}>
              {stat.number}
              <span>{stat.suffix}</span>
            </p>
            <p className={styles.label}>{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { Reveal } from "@/components/atoms/Reveal";
import type { Testimonial } from "@/types/testimonial";
import styles from "./Testimonials.module.css";

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Exponer ante tantas personas la verdad que no es su fuerte, entonces verlo desarrollar estas habilidades la verdad que es muy bonito.",
    name: "Alexandra Monroy",
    role: "Familiar dekidser",
  },
  {
    quote:
      "Soy muy escéptica, me fijo en cada detalle. Estoy muy contenta de mi inversión. No es un simple curso de sentarse a programar.",
    name: "Sandra Veloz",
    role: "Mamá dekidser",
  },
  {
    quote:
      "Es una experiencia fuera de la caja en la cual es necesario que nosotros entendamos que esto es el presente y el futuro.",
    name: "Erik Torbellin",
    role: "Papá dekidser",
  },
];

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.header}>
            <p className={styles.kicker}>Familias dekidsers</p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delayMs={i * 120}>
              <div className={styles.card}>
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.person}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>{t.role}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

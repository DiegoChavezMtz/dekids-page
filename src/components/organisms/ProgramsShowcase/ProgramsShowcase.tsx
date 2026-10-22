import Link from "next/link";
import clsx from "clsx";
import { Reveal } from "@/components/atoms/Reveal";
import type { ProgramHighlight } from "@/types/program-highlight";
import styles from "./ProgramsShowcase.module.css";

const PROGRAMS: (ProgramHighlight & { cardClass: string })[] = [
  {
    eyebrow: "Para niñ@s y adolescentes",
    title: "Master in Future Design",
    description:
      "La experiencia más emocionante para niñ@s y adolescentes donde desarrollan su confianza a través del emprendimiento y la tecnología utilizando herramientas de inteligencia artificial",
    bullets: [
      "40 horas de aprendizaje en vivo",
      "Sesiones 1 a 1, tú eliges el horario",
      "100% en línea, desde cualquier parte del mundo",
    ],
    href: "/master",
    cta: "Conocer el programa",
    cardClass: styles.cardMaster,
  },
  {
    eyebrow: "Para empresas",
    title: "Future Enterprise",
    description:
      "Crea impacto positivo y relevante en las personas más importantes para tus colaboradores o clientes a través de sorprendentes competencias y posiciónate como una empresa con responsabilidad social y visión futurista",
    bullets: [
      "Activaciones y competencias de marca",
      "Cobertura mediática y comunicación positiva",
      "Becas para hij@s de colaboradores",
    ],
    href: "/futureenterprise",
    cta: "Ver más",
    cardClass: styles.cardEnterprise,
  },
];

export function ProgramsShowcase() {
  return (
    <section className={styles.section} id="programas">
      <div className={styles.inner}>
        <Reveal>
          <div className={styles.header}>
            <p className={styles.kicker}>Educación 4.0</p>
            <h2 className={styles.title}>Dos caminos, un mismo futuro</h2>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {PROGRAMS.map((program, i) => (
            <Reveal key={program.href} delayMs={i * 150}>
              <Link
                href={program.href}
                className={clsx(styles.card, program.cardClass)}
              >
                <p className={styles.cardEyebrow}>{program.eyebrow}</p>
                <h3 className={styles.cardTitle}>{program.title}</h3>
                <p className={styles.cardDescription}>{program.description}</p>
                <ul className={styles.bullets}>
                  {program.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <span className={styles.cardFooter}>
                  {program.cta}
                  <span className={styles.arrow}>→</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

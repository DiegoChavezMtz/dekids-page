import { Reveal } from "@/components/atoms/Reveal";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  sub: string;
  glowColor?: string;
  children?: React.ReactNode;
};

export function PageHero({ eyebrow, title, sub, glowColor, children }: PageHeroProps) {
  return (
    <section
      className={styles.hero}
      style={glowColor ? ({ "--glow-color": glowColor } as React.CSSProperties) : undefined}
    >
      <div className={styles.glow} aria-hidden />

      <Reveal>
        <p className={styles.eyebrow}>{eyebrow}</p>
      </Reveal>
      <Reveal delayMs={80}>
        <h1 className={styles.title}>{title}</h1>
      </Reveal>
      <Reveal delayMs={160}>
        <p className={styles.sub}>{sub}</p>
      </Reveal>
      {children && (
        <Reveal delayMs={240}>
          <div className={styles.actions}>{children}</div>
        </Reveal>
      )}
    </section>
  );
}

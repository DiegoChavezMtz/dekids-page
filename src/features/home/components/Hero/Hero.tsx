import { Button } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.grain} aria-hidden />

      <Reveal>
        <p className={styles.eyebrow}>Ante un futuro incierto</p>
      </Reveal>

      <Reveal delayMs={100}>
        <h1 className={styles.headline}>
          Prepara mentes para un mundo que <em>aún no existe</em>
        </h1>
      </Reveal>

      <Reveal delayMs={200}>
        <p className={styles.sub}>
          Emprendimiento, tecnología e inteligencia artificial para que niñ@s
          y adolescentes construyan confianza real — no solo conocimientos.
        </p>
      </Reveal>

      <Reveal delayMs={300}>
        <div className={styles.actions}>
          <Button href="/programas" variant="primary">
            Ver programas de aprendizaje
          </Button>
          <Button
            href="https://api.whatsapp.com/send?phone=525573731655&text=Hola,+vi+su+p%C3%A1gina+y..."
            variant="secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar con el equipo
          </Button>
        </div>
      </Reveal>

      <div className={styles.scrollCue}>
        <span>Descubre más</span>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}

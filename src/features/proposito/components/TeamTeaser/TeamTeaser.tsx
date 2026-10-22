import { Button } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import styles from "./TeamTeaser.module.css";

export function TeamTeaser() {
  return (
    <section className={styles.section}>
      <Reveal>
        <div className={styles.card}>
          <div>
            <p className={styles.eyebrow}>Las personas detrás de Dekids</p>
            <h2 className={styles.title}>Conoce a nuestro equipo</h2>
            <p className={styles.text}>
              Un propósito así se construye con personas. Descubre quiénes
              somos y por qué hacemos esto.
            </p>
          </div>
          <Button href="/nosotros" variant="primary">
            Conoce a nuestro equipo
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

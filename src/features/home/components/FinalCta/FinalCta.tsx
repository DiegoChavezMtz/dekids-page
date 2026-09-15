import { Button } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import styles from "./FinalCta.module.css";

export function FinalCta() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <h2 className={styles.title}>Empezar temprano recompensa muy bien</h2>
        </Reveal>
        <Reveal delayMs={100}>
          <p className={styles.sub}>
            Hoy es la oportunidad para que tu hij@ sume una experiencia
            memorable. Regístrate y obtén 50% en tu primer taller.
          </p>
        </Reveal>
        <Reveal delayMs={200}>
          <div className={styles.actions}>
            <Button href="/proposito" variant="primary">
              Quiero mi 50% de descuento
            </Button>
            <Button
              href="https://api.whatsapp.com/send?phone=525573731655&text=Hola,+vi+su+p%C3%A1gina+principal+y..."
              variant="secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hablar por WhatsApp
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

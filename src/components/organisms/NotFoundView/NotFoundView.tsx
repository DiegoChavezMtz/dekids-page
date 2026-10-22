import { Button } from "@/components/atoms/Button";
import styles from "./NotFoundView.module.css";

export function NotFoundView() {
  return (
    <main className={styles.root}>
      <p className={styles.code}>404</p>
      <h1 className={styles.title}>Esta página ya no existe</h1>
      <p className={styles.text}>
        Es posible que el enlace sea antiguo. Te dejamos algunos lugares para
        seguir explorando Dekids.
      </p>
      <div className={styles.actions}>
        <Button href="/programas" variant="primary">
          Ver programas
        </Button>
        <Button href="/blog" variant="secondary">
          Ir al blog
        </Button>
      </div>
    </main>
  );
}

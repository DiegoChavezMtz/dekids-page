import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: "Cómo Dekids utiliza cookies en dekids.com.mx.",
  alternates: { canonical: "/politica-de-cookies" },
};

export default function PoliticaDeCookiesPage() {
  return (
    <main>
      <article className={styles.article}>
        <h1 className={styles.title}>Política de cookies</h1>
        <p className={styles.paragraph}>
          Usamos cookies para asegurar que te damos la mejor experiencia en
          nuestra web. Si continúas usando este sitio, asumimos que estás de
          acuerdo con ello.
        </p>
        <p className={styles.paragraph}>
          Las cookies nos permiten recordar tus preferencias, entender cómo
          usas el sitio y mejorar continuamente la experiencia de Dekids.
          Puedes desactivar las cookies desde la configuración de tu
          navegador; ten en cuenta que esto puede afectar el funcionamiento de
          algunas secciones del sitio.
        </p>
      </article>
    </main>
  );
}

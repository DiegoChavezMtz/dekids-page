import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.logo}>
            de<span>kids</span>
          </span>
          <p className={styles.tagline}>
            Preparando a las nuevas generaciones de talento para un contexto
            global desafiante.
          </p>
        </div>

        <div>
          <p className={styles.columnTitle}>Programas</p>
          <ul className={styles.linkList}>
            <li>
              <Link href="/programas">Ver programas</Link>
            </li>
            <li>
              <Link href="/master">Master in Future Design</Link>
            </li>
            <li>
              <Link href="/futureenterprise">Future Enterprise</Link>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.columnTitle}>Dekids</p>
          <ul className={styles.linkList}>
            <li>
              <Link href="/proposito">Propósito</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <a
                href="https://api.whatsapp.com/send?phone=525573731655&text=Hola,+vi+su+p%C3%A1gina+y..."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.columnTitle}>Legal</p>
          <ul className={styles.linkList}>
            <li>
              <Link href="/politica-de-cookies">Política de cookies</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} Dekids. Todos los derechos reservados.</span>
        <span>Ciudad de México, México</span>
      </div>
    </footer>
  );
}

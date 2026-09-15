import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import styles from "./SiteHeader.module.css";

const NAV_LINKS = [
  { href: "/programas", label: "Programas" },
  { href: "/master", label: "Master in Future Design" },
  { href: "/futureenterprise", label: "Empresas" },
  { href: "/proposito", label: "Propósito" },
  { href: "/blog", label: "Blog" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          de<span>kids</span>
        </Link>

        <nav className={styles.nav} aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button
            href="https://api.whatsapp.com/send?phone=525573731655&text=Hola,+vi+su+p%C3%A1gina+y..."
            variant="primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablar con el equipo
          </Button>
        </div>
      </div>
    </header>
  );
}

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@/components/atoms/Button";
import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  links: { href: string; label: string }[];
  ctaHref: string;
  ctaLabel: string;
};

export function MobileMenu({ links, ctaHref, ctaLabel }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const menuLinks = [{ href: "/", label: "Inicio" }, ...links];

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={clsx(styles.toggle, open && styles.open)}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={styles.bar} />
        <span className={styles.bar} />
      </button>

      <div
        id="mobile-menu"
        className={clsx(styles.overlay, open && styles.overlayOpen)}
        aria-hidden={!open}
      >
        <nav className={styles.links} aria-label="Menú móvil">
          {menuLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              style={{ "--i": i } as React.CSSProperties}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.cta}>
          <Button href={ctaHref} variant="primary" target="_blank" rel="noopener noreferrer">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </>
  );
}

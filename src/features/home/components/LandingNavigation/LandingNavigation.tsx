"use client";

import Image from "next/image";
import { useState } from "react";

const WHATSAPP = "https://wa.me/525573731655";
const CONTACT_URL = `${WHATSAPP}?text=Hola%20equipo%20Dekids%2C%20quiero%20platicar%20sobre%20una%20experiencia.`;
const FAMILY_URL = `${WHATSAPP}?text=Hola%20equipo%20Dekids%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20experiencias%20disponibles%20para%20mi%20hij%40.`;
const SCHOOL_URL = `${WHATSAPP}?text=Hola%20equipo%20Dekids%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20las%20experiencias%20para%20colegios.`;

type LandingNavigationProps = {
  internal?: boolean;
};

export function LandingNavigation({ internal = false }: LandingNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const href = (anchor: string) => (internal ? `/${anchor}` : anchor);

  return (
    <header className={`nav-shell${menuOpen ? " is-open" : ""}`}>
      <a className="brand" href={href("#inicio")} aria-label="Dekids, inicio">
        <Image src="/landing/logo-dekids.png" alt="" width={1672} height={941} priority />
      </a>
      <nav aria-label="Navegación principal">
        <a href={href("#rutas")} onClick={() => setMenuOpen(false)}>Para quién</a>
        <a href={href("#metodo")} onClick={() => setMenuOpen(false)}>Cómo funciona</a>
        <a href={href("#testimonios")} onClick={() => setMenuOpen(false)}>Testimoniales</a>
        <details className="audience-switcher">
          <summary>Otras páginas <span>⌄</span></summary>
          <div>
            <a href={FAMILY_URL} target="_blank" rel="noopener noreferrer"><strong>Familias</strong><small>Experiencias de 9 a 17 años</small></a>
            <a href={SCHOOL_URL} target="_blank" rel="noopener noreferrer"><strong>Colegios</strong><small>Proyectos para estudiantes y docentes</small></a>
            <a href="https://empiezadiferente.com/" target="_blank" rel="noopener noreferrer"><strong>Jóvenes y adultos</strong><small>Experiencia RESTART</small></a>
            <a href={href("#contacto")}><strong>Organizaciones</strong><small>Programas para familias y comunidades</small></a>
          </div>
        </details>
      </nav>
      <a className="nav-cta" href={CONTACT_URL} target="_blank" rel="noopener noreferrer">Conversemos <span>↗</span></a>
      <button className="menu" type="button" aria-expanded={menuOpen} aria-label="Abrir menú" onClick={() => setMenuOpen((value) => !value)}>Menú</button>
    </header>
  );
}

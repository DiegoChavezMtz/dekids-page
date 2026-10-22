import type { Metadata } from "next";
import { HomeView } from "@/features/home";

const OG_TITLE = "Descubre de lo que es capaz";
const OG_DESCRIPTION =
  "Dekids convierte preguntas e ideas propias en proyectos que niñas, niños, jóvenes y adultos pueden presentar con confianza, usando IA, finanzas y emprendimiento como herramientas.";

export const metadata: Metadata = {
  title: { absolute: "Dekids — Descubre de lo que es capaz" },
  description: OG_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: OG_TITLE,
    description: OG_DESCRIPTION,
    images: [
      {
        url: "/landing/dekids-social-card.png",
        width: 1200,
        height: 630,
        alt: "Dekids: ideas propias que se vuelven capacidad",
      },
    ],
  },
};

export default function Home() {
  return <HomeView />;
}

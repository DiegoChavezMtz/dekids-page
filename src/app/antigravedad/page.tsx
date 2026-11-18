import type { Metadata } from "next";
import { AntiGravityView } from "@/features/antigravedad";

export const metadata: Metadata = {
  title: { absolute: "Antigravedad · Dekids" },
  description:
    "Entrenamiento creativo para la era de la IA, para niñas, niños y adolescentes de 10 a 15 años.",
  alternates: { canonical: "/antigravedad" },
  openGraph: {
    title: "Antigravedad · Dekids",
    description: "Entrenamiento creativo para la era de la IA.",
    images: [
      {
        url: "/antigravedad/antigravedad-open-graph-84.jpg",
        width: 1200,
        height: 630,
        alt: "Antigravedad de Dekids: de ideas absurdas a ideas poderosas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/antigravedad/antigravedad-open-graph-84.jpg"],
  },
};

export default function AntiGravedadPage() {
  return <AntiGravityView />;
}

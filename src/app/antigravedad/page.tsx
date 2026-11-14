import type { Metadata } from "next";
import { AntiGravityView } from "@/features/antigravedad";

export const metadata: Metadata = {
  title: { absolute: "Anti Gravedad · Dekids" },
  description:
    "Entrenamiento creativo para la era de la IA, para niñas, niños y adolescentes de 10 a 15 años.",
  alternates: { canonical: "/antigravedad" },
  openGraph: {
    title: "Anti Gravedad · Dekids",
    description: "Entrenamiento creativo para la era de la IA.",
    images: [{ url: "/antigravedad/antigravedad-video-poster-v1.jpg" }],
  },
};

export default function AntiGravedadPage() {
  return <AntiGravityView />;
}

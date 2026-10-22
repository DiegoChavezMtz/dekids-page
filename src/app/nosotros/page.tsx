import type { Metadata } from "next";
import { AboutView } from "@/features/about";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "El sueño de Dekids comenzó en la sala de un hogar mexicano. Hoy, personas apasionadas por transformar el mundo hacen de este sueño, una realidad.",
  alternates: { canonical: "/nosotros/" },
  openGraph: {
    title: "Nosotros | Dekids",
    description: "El sueño de Dekids comenzó en la sala de un hogar mexicano. Hoy, personas apasionadas por transformar el mundo hacen de este sueño, una realidad.",
    images: [{ url: "/wp-content/uploads/2020/10/EQUIPO-DEKIDS.png" }],
  },
};

export default function NosotrosPage() {
  return <AboutView />;
}

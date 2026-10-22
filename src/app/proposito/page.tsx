import type { Metadata } from "next";
import { PropositoView } from "@/features/proposito";

export const metadata: Metadata = {
  title: "Propósito",
  description:
    "El futuro de tus hij@s ha comenzado. Es el mejor momento de experimentar, desarrollar nuevas habilidades y una nueva mentalidad a través del emprendimiento y la programación.",
  alternates: { canonical: "/proposito/" },
};

export default function PropositoPage() {
  return <PropositoView />;
}

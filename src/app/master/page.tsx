import type { Metadata } from "next";
import { MasterProgramView } from "@/features/masterProgram";

export const metadata: Metadata = {
  title: "Master in Future Design",
  description:
    "La experiencia más emocionante para niñ@s y adolescentes donde desarrollan su confianza a través del emprendimiento y la tecnología, utilizando herramientas de inteligencia artificial.",
  alternates: { canonical: "/master" },
};

export default function MasterPage() {
  return <MasterProgramView />;
}

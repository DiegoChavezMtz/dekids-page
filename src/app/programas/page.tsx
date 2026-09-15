import type { Metadata } from "next";
import { ProgramsHubView } from "@/features/programsHub";

export const metadata: Metadata = {
  title: "Programas",
  description:
    "Conoce los programas de Dekids: Master in Future Design para niñ@s y adolescentes, y Future Enterprise para empresas con visión de futuro.",
  alternates: { canonical: "/programas" },
};

export default function ProgramasPage() {
  return <ProgramsHubView />;
}

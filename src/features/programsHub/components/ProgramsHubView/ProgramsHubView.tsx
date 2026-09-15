import { PageHero } from "@/components/organisms/PageHero";
import { ProgramsShowcase } from "@/components/organisms/ProgramsShowcase";

export function ProgramsHubView() {
  return (
    <main>
      <PageHero
        eyebrow="Educación 4.0"
        title="Aprende más allá de lo tradicional"
        sub="Dos caminos para preparar mentes ante un futuro incierto: uno para niñ@s y adolescentes, otro para empresas con visión de futuro."
      />
      <ProgramsShowcase />
    </main>
  );
}

import { Testimonials } from "@/components/organisms/Testimonials";
import { ProgramsShowcase } from "@/components/organisms/ProgramsShowcase";
import { Hero } from "@/features/home/components/Hero";
import { Manifesto } from "@/features/home/components/Manifesto";
import { Stats } from "@/features/home/components/Stats";
import { FinalCta } from "@/features/home/components/FinalCta";

export function HomeView() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <ProgramsShowcase />
      <Stats />
      <Testimonials />
      <FinalCta />
    </main>
  );
}

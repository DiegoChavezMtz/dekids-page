import type { Metadata } from "next";
import { MasterProgramView } from "@/features/masterProgram";

export const metadata: Metadata = {
  title: { absolute: "Master in Future Design" },
  description:
    "La experiencia más emocionante para niñas y niños donde se preparan a través del emprendimiento y la tecnología para la era de la inteligencia artificial",
  alternates: { canonical: "/master/" },
  openGraph: {
    title: "Master in Future Design",
    description: "La experiencia más emocionante para niñas y niños donde se preparan a través del emprendimiento y la tecnología para la era de la inteligencia artificial",
    images: [{ url: "/wp-content/uploads/2021/03/Udk2-1.png" }],
  },
};

export default function MasterPage() {
  return <MasterProgramView />;
}

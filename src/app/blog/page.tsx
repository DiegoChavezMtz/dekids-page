import type { Metadata } from "next";
import { BlogIndexView } from "@/features/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos relacionados a las habilidades del futuro para las niñas y niños",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  return <BlogIndexView />;
}

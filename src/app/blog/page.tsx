import type { Metadata } from "next";
import { BlogIndexView } from "@/features/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos sobre crianza, tecnología y emprendimiento para acompañar a niñ@s y adolescentes en un mundo que cambia cada día.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogIndexView />;
}

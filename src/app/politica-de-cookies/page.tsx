import type { Metadata } from "next";
import { LegalView, getLegalDocument } from "@/features/legal";

const doc = getLegalDocument("politica-de-cookies");

export const metadata: Metadata = {
  title: doc.title,
  description: doc.description,
  alternates: { canonical: "/politica-de-cookies/" },
};

export default function Page() {
  return <LegalView slug="politica-de-cookies" />;
}

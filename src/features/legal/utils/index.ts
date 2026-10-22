import type { LegalDocument } from "@/features/legal/types";
import { LEGAL_DOCUMENTS } from "./documents";

export function getLegalDocument(slug: string): LegalDocument {
  const doc = LEGAL_DOCUMENTS.find((item) => item.slug === slug);
  if (!doc) throw new Error(`Documento legal no encontrado: ${slug}`);
  return doc;
}

export type LegalBlock = { type: "p" | "h2"; text: string };

export type LegalDocument = {
  slug: string;
  title: string;
  description: string;
  content: LegalBlock[];
};

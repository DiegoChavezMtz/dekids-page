export type PostImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// El texto viene como HTML inline sanitizado al migrar (solo <a>, <strong>, <em>, <br>).
export type PostBlock =
  | { type: "p" | "h2" | "h3" | "quote"; html: string }
  | { type: "ul"; items: string[] }
  | ({ type: "img" } & PostImage);

export type BlogPost = {
  slug: string;
  /** H1 visible del post */
  title: string;
  /** <title> exacto que tenía en WordPress */
  seoTitle: string;
  /** meta description exacta que tenía en WordPress */
  metaDescription: string;
  category: string;
  publishedAt: string;
  modifiedAt: string;
  image?: PostImage;
  content: PostBlock[];
};

export type BlogPostSummary = Pick<BlogPost, "slug" | "title" | "category" | "publishedAt"> & {
  excerpt: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  content: string[];
};

export type BlogPostSummary = Pick<
  BlogPost,
  "slug" | "title" | "excerpt" | "category" | "publishedAt"
> & { available: boolean };

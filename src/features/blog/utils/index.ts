import type { BlogPost, BlogPostSummary } from "@/features/blog/types";
import { POSTS } from "./posts";

function toSummary({ slug, title, metaDescription, category, publishedAt }: BlogPost): BlogPostSummary {
  return { slug, title, excerpt: metaDescription, category, publishedAt };
}

export function getAllPostSummaries(): BlogPostSummary[] {
  return POSTS.map(toSummary);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS.find((post) => post.slug === slug);
}

export function getPostPath(slug: string): string {
  return `/${slug}/`;
}

export function getAllSlugs(): string[] {
  return POSTS.map((post) => post.slug);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPostSummary[] {
  const current = getPostBySlug(slug);
  const others = POSTS.filter((post) => post.slug !== slug);
  const sameCategory =
    current && current.category !== "General"
      ? others.filter((post) => post.category === current.category)
      : [];
  const rest = others.filter((post) => !sameCategory.includes(post));

  return [...sameCategory, ...rest].slice(0, limit).map(toSummary);
}

export function formatPostDate(isoDate: string): string {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(isoDate));
}

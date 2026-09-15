import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView, getPostBySlug, getAllAvailableSlugs } from "@/features/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllAvailableSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostView post={post} />;
}

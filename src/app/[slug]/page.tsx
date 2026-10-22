import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostView, getAllSlugs, getPostBySlug, getPostPath } from "@/features/blog";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: { absolute: post.seoTitle },
    description: post.metaDescription,
    alternates: { canonical: getPostPath(post.slug) },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt,
      ...(post.image && { images: [{ url: post.image.src, width: post.image.width, height: post.image.height }] }),
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostView post={post} />;
}

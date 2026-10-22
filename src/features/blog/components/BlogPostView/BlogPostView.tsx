import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/atoms/Reveal";
import type { BlogPost } from "@/features/blog/types";
import { formatPostDate, getPostPath, getRelatedPosts } from "@/features/blog/utils";
import styles from "./BlogPostView.module.css";

const SITE_URL = "https://dekids.com.mx";

export function BlogPostView({ post }: { post: BlogPost }) {
  const related = getRelatedPosts(post.slug);
  const postUrl = `${SITE_URL}${getPostPath(post.slug)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        datePublished: post.publishedAt,
        dateModified: post.modifiedAt,
        mainEntityOfPage: postUrl,
        ...(post.image && { image: `${SITE_URL}${post.image.src}` }),
        author: { "@type": "Organization", name: "Dekids" },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog/` },
          { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className={styles.article}>
        <Link href="/blog" className={styles.back}>
          ← Volver al blog
        </Link>

        <Reveal>
          <p className={styles.category}>{post.category}</p>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.date}>
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
          </p>
        </Reveal>

        {post.image && (
          <Reveal>
            <figure className={styles.featured}>
              <Image
                src={post.image.src}
                alt={post.image.alt}
                width={post.image.width}
                height={post.image.height}
                sizes="(max-width: 760px) 100vw, 720px"
                priority
              />
            </figure>
          </Reveal>
        )}

        {post.content.map((block, i) => {
          const delay = Math.min(i, 3) * 60;

          switch (block.type) {
            case "h2":
              return (
                <Reveal key={i} delayMs={delay}>
                  <h2 className={styles.h2} dangerouslySetInnerHTML={{ __html: block.html }} />
                </Reveal>
              );
            case "h3":
              return (
                <Reveal key={i} delayMs={delay}>
                  <h3 className={styles.h3} dangerouslySetInnerHTML={{ __html: block.html }} />
                </Reveal>
              );
            case "quote":
              return (
                <Reveal key={i} delayMs={delay}>
                  <blockquote className={styles.quote} dangerouslySetInnerHTML={{ __html: block.html }} />
                </Reveal>
              );
            case "ul":
              return (
                <Reveal key={i} delayMs={delay}>
                  <ul className={styles.list}>
                    {block.items.map((item, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                  </ul>
                </Reveal>
              );
            case "img":
              return (
                <Reveal key={i} delayMs={delay}>
                  <figure className={styles.figure}>
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={block.width}
                      height={block.height}
                      sizes="(max-width: 760px) 100vw, 720px"
                    />
                  </figure>
                </Reveal>
              );
            default:
              return (
                <Reveal key={i} delayMs={delay}>
                  <p className={styles.paragraph} dangerouslySetInnerHTML={{ __html: block.html }} />
                </Reveal>
              );
          }
        })}
      </article>

      {related.length > 0 && (
        <aside className={styles.related} aria-label="Sigue leyendo">
          <h2 className={styles.relatedTitle}>Sigue leyendo</h2>
          <div className={styles.relatedGrid}>
            {related.map((item) => (
              <Link key={item.slug} href={getPostPath(item.slug)} className={styles.relatedCard}>
                <span className={styles.relatedCategory}>{item.category}</span>
                <span className={styles.relatedName}>{item.title}</span>
              </Link>
            ))}
          </div>
        </aside>
      )}
    </main>
  );
}

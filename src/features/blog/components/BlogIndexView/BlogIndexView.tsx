import Link from "next/link";
import { PageHero } from "@/components/organisms/PageHero";
import { Reveal } from "@/components/atoms/Reveal";
import { formatPostDate, getAllPostSummaries, getPostPath } from "@/features/blog/utils";
import styles from "./BlogIndexView.module.css";

export function BlogIndexView() {
  const posts = getAllPostSummaries();

  return (
    <main>
      <PageHero
        eyebrow="Dekids Blog"
        title="Crianza, tecnología y emprendimiento"
        sub="Ideas prácticas para acompañar a niñ@s y adolescentes en un mundo que cambia cada día."
      />

      <section className={styles.section}>
        <div className={styles.grid}>
          {posts.map((post, i) => (
            <Reveal key={post.slug} delayMs={Math.min(i, 6) * 60}>
              <Link href={getPostPath(post.slug)} className={styles.card}>
                <p className={styles.meta}>
                  <span className={styles.category}>{post.category}</span>
                  <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                </p>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.excerpt}>{post.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

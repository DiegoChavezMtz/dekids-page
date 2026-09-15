import Link from "next/link";
import clsx from "clsx";
import { PageHero } from "@/components/organisms/PageHero";
import { Reveal } from "@/components/atoms/Reveal";
import { getAllPostSummaries } from "@/features/blog/utils";
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
          {posts.map((post, i) =>
            post.available ? (
              <Reveal key={post.slug} delayMs={Math.min(i, 6) * 60}>
                <Link href={`/blog/${post.slug}`} className={styles.card}>
                  <p className={styles.category}>{post.category}</p>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                </Link>
              </Reveal>
            ) : (
              <Reveal key={post.slug} delayMs={Math.min(i, 6) * 60}>
                <div className={clsx(styles.card, styles.cardPending)}>
                  <p className={styles.category}>{post.category}</p>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.excerpt}>{post.excerpt}</p>
                  <span className={styles.badge}>Próximamente</span>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </section>
    </main>
  );
}

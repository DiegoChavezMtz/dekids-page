import Link from "next/link";
import { Reveal } from "@/components/atoms/Reveal";
import type { BlogPost } from "@/features/blog/types";
import styles from "./BlogPostView.module.css";

export function BlogPostView({ post }: { post: BlogPost }) {
  return (
    <main>
      <article className={styles.article}>
        <Link href="/blog" className={styles.back}>
          ← Volver al blog
        </Link>

        <Reveal>
          <p className={styles.category}>{post.category}</p>
          <h1 className={styles.title}>{post.title}</h1>
        </Reveal>

        {post.content.map((paragraph, i) => (
          <Reveal key={i} delayMs={Math.min(i, 4) * 80}>
            <p className={styles.paragraph}>{paragraph}</p>
          </Reveal>
        ))}
      </article>
    </main>
  );
}

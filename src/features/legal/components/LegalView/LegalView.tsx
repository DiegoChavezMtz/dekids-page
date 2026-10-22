import { getLegalDocument } from "@/features/legal/utils";
import styles from "./LegalView.module.css";

export function LegalView({ slug }: { slug: string }) {
  const doc = getLegalDocument(slug);

  return (
    <main>
      <article className={styles.article}>
        <h1 className={styles.title}>{doc.title}</h1>
        {doc.content.map((block, i) =>
          block.type === "h2" ? (
            <h2 key={i} className={styles.heading}>
              {block.text}
            </h2>
          ) : (
            <p key={i} className={styles.paragraph}>
              {block.text}
            </p>
          ),
        )}
      </article>
    </main>
  );
}

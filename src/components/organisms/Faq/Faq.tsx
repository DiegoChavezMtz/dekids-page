import { Reveal } from "@/components/atoms/Reveal";
import styles from "./Faq.module.css";

export type FaqItem = { question: string; answer: string };

export function Faq({ title = "Nos suelen preguntar lo siguiente", items }: { title?: string; items: FaqItem[] }) {
  return (
    <section className={styles.section}>
      <Reveal>
        <h2 className={styles.title}>{title}</h2>
        {items.map((item) => (
          <details key={item.question} className={styles.item}>
            <summary className={styles.question}>{item.question}</summary>
            <p className={styles.answer}>{item.answer}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}

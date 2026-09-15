"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "section" | "span" | "li";
};

export function Reveal({ children, className, delayMs = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={clsx(styles.root, visible && styles.visible, className)}
      style={{ "--reveal-delay": `${delayMs}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}

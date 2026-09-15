import Link from "next/link";
import clsx from "clsx";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={clsx(styles.button, styles[variant], className)}
    >
      {children}
    </Link>
  );
}

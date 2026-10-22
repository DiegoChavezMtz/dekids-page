import Image from "next/image";
import { Reveal } from "@/components/atoms/Reveal";
import styles from "./PressLogos.module.css";

const LOGOS = [
  { name: "Forbes", src: "/wp-content/uploads/2020/09/Forbes-150x150.png", width: 150, height: 150 },
  { name: "El Economista", src: "/wp-content/uploads/2020/09/ElEconomist2.png", width: 2826, height: 517 },
  { name: "TV Azteca", src: "/wp-content/uploads/2020/09/TvAzteca-150x150.png", width: 150, height: 150 },
  { name: "CNN", src: "/wp-content/uploads/2020/09/CNN-1024x195.png", width: 1024, height: 195 },
  { name: "Excélsior", src: "/wp-content/uploads/2020/09/Excelsior.png", width: 2085, height: 2084 },
];

export function PressLogos({ title = "Como lo viste en..." }: { title?: string }) {
  return (
    <section className={styles.section} aria-label={title}>
      <Reveal>
        <h2 className={styles.title}>{title}</h2>
        <ul className={styles.logos}>
          {LOGOS.map((logo) => (
            <li key={logo.name}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className={styles.logo}
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

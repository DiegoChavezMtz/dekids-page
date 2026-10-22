import { PageHero } from "@/components/organisms/PageHero";
import { Button } from "@/components/atoms/Button";
import { Reveal } from "@/components/atoms/Reveal";
import { TeamMemberCard } from "@/features/about/components/TeamMemberCard";
import {
  MISSION,
  STORY,
  TEAM_MEMBERS,
  VALUES,
  VALUES_INTRO,
  VISION,
} from "@/features/about/utils";
import styles from "./AboutView.module.css";

const SITE_URL = "https://dekids.com.mx";
const WHATSAPP_URL =
  "https://api.whatsapp.com/send?phone=525573731655&text=Hola,+vi+su+p%C3%A1gina+y...";

export function AboutView() {
  const featured = TEAM_MEMBERS.filter((member) => member.featured);
  const others = TEAM_MEMBERS.filter((member) => !member.featured);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": TEAM_MEMBERS.map((member) => ({
      "@type": "Person",
      name: member.name,
      ...(member.role && { jobTitle: member.role }),
      ...(member.bio && { description: member.bio }),
      ...(member.photo && { image: `${SITE_URL}${member.photo}` }),
      worksFor: { "@type": "Organization", name: "Dekids", url: SITE_URL },
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow="Nosotros"
        title="El sueño de Dekids comenzó en la sala de un hogar mexicano"
        sub="Un equipo comprometido con preparar a niñ@s y adolescentes para un futuro que aún se está escribiendo."
      />

      <section className={styles.section}>
        <Reveal>
          <div className={styles.story}>
            <p className={styles.storyEyebrow}>{STORY.eyebrow}</p>
            <p className={styles.storyText}>{STORY.text}</p>
            <Button href={STORY.href} variant="secondary">
              Conoce la historia completa
            </Button>
          </div>
        </Reveal>
      </section>

      <section className={styles.section} aria-labelledby="equipo">
        <Reveal>
          <h2 id="equipo" className={styles.sectionTitle}>
            Dekids es increíble porque lo conforman personas maravillosas
          </h2>
        </Reveal>

        {featured.map((member) => (
          <Reveal key={member.id}>
            <div className={styles.featuredRow}>
              <TeamMemberCard member={member} />
            </div>
          </Reveal>
        ))}

        <div className={styles.grid}>
          {others.map((member, i) => (
            <Reveal key={member.id} delayMs={i * 100}>
              <TeamMemberCard member={member} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.pair}>
          <Reveal>
            <div className={styles.pairCard}>
              <p className={styles.pairLabel}>Misión</p>
              <p className={styles.pairText}>{MISSION}</p>
            </div>
          </Reveal>
          <Reveal delayMs={120}>
            <div className={styles.pairCard}>
              <p className={styles.pairLabel}>Visión</p>
              <p className={styles.pairText}>{VISION}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className={styles.section}>
        <Reveal>
          <h2 className={styles.sectionTitle}>Nuestros valores</h2>
          <p className={styles.valuesIntro}>{VALUES_INTRO}</p>
        </Reveal>
        <ul className={styles.values}>
          {VALUES.map((value, i) => (
            <Reveal key={value} as="li" delayMs={i * 80}>
              <div className={styles.value}>{value}</div>
            </Reveal>
          ))}
        </ul>
      </section>

      <div className={styles.closing}>
        <Reveal>
          <h2 className={styles.closingTitle}>¿Quieres conocernos mejor?</h2>
        </Reveal>
        <Reveal delayMs={100}>
          <div className={styles.actions}>
            <Button href={WHATSAPP_URL} variant="primary" target="_blank" rel="noopener noreferrer">
              Hablar con el equipo
            </Button>
            <Button href="/programas" variant="secondary">
              Ver programas
            </Button>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

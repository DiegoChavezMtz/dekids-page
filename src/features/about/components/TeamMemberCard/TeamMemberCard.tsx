import Image from "next/image";
import clsx from "clsx";
import type { TeamMember } from "@/features/about/types";
import { getInitials } from "@/features/about/utils";
import styles from "./TeamMemberCard.module.css";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <article className={clsx(styles.card, member.featured && styles.featured)}>
      <div className={styles.portrait}>
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.role ? `${member.name}, ${member.role} de Dekids` : `${member.name}, equipo Dekids`}
            fill
            sizes="(max-width: 760px) 100vw, 40vw"
            className={styles.photo}
          />
        ) : (
          <span className={styles.initials} aria-hidden>
            {getInitials(member.name)}
          </span>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.name}>{member.name}</h3>
        {member.role && <p className={styles.role}>{member.role}</p>}
        {member.bio && <p className={styles.bio}>{member.bio}</p>}
      </div>
    </article>
  );
}

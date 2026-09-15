"use client";

import { useLeadForm } from "@/features/proposito/hooks";
import styles from "./LeadForm.module.css";

const WORKSHOPS = [
  "Tendencias globales",
  "El valor del dinero",
  "Código para mis ideas",
  "Negocios digitales",
];

const AGES = ["Menos de 8", "8", "9", "10", "11", "12", "13", "14", "Más de 14"];

export function LeadForm() {
  const { values, setField, buildWhatsAppUrl } = useLeadForm();

  return (
    <section className={styles.section} id="registro">
      <div className={styles.card}>
        <h2 className={styles.title}>Regístrate y obtén 50% en tu primer taller</h2>
        <p className={styles.sub}>Empezar temprano, recompensa muy bien.</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            window.open(buildWhatsAppUrl(), "_blank", "noopener,noreferrer");
          }}
        >
          <div className={styles.field}>
            <label htmlFor="tutorName">Nombre del tutor</label>
            <input
              id="tutorName"
              value={values.tutorName}
              onChange={(e) => setField("tutorName", e.target.value)}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="whatsapp">WhatsApp</label>
            <input
              id="whatsapp"
              type="tel"
              value={values.whatsapp}
              onChange={(e) => setField("whatsapp", e.target.value)}
              required
            />
          </div>

          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="workshop">Taller de interés</label>
              <select
                id="workshop"
                value={values.workshop}
                onChange={(e) => setField("workshop", e.target.value)}
              >
                {WORKSHOPS.map((w) => (
                  <option key={w} value={w}>
                    {w}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="childAge">Edad de tu niña(o)</label>
              <select
                id="childAge"
                value={values.childAge}
                onChange={(e) => setField("childAge", e.target.value)}
              >
                {AGES.map((age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button type="submit" className={styles.submit}>
            Regístrarme
          </button>
        </form>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

const WHATSAPP_PHONE = "525573731655";

export type LeadFormValues = {
  tutorName: string;
  workshop: string;
  childAge: string;
  whatsapp: string;
};

const INITIAL_VALUES: LeadFormValues = {
  tutorName: "",
  workshop: "Tendencias globales",
  childAge: "8",
  whatsapp: "",
};

export function useLeadForm() {
  const [values, setValues] = useState<LeadFormValues>(INITIAL_VALUES);

  function setField<K extends keyof LeadFormValues>(field: K, value: LeadFormValues[K]) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  function buildWhatsAppUrl() {
    const message = [
      `Hola, soy ${values.tutorName || "un tutor"} y me interesa el 50% de descuento en mi primer taller.`,
      `Taller de interés: ${values.workshop}.`,
      `Edad de mi niñ@: ${values.childAge}.`,
    ].join(" ");

    return `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(message)}`;
  }

  return { values, setField, buildWhatsAppUrl };
}

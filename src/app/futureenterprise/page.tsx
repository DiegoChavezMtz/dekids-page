import type { Metadata } from "next";
import { FutureEnterpriseView } from "@/features/futureEnterprise";

export const metadata: Metadata = {
  title: "Future Enterprise",
  description:
    "Crea impacto positivo y relevante en las personas más importantes para tus colaboradores o clientes, y posiciónate como una empresa con responsabilidad social y visión futurista.",
  alternates: { canonical: "/futureenterprise" },
};

export default function FutureEnterprisePage() {
  return <FutureEnterpriseView />;
}

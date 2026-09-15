import type { Metadata } from "next";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { SiteFooter } from "@/components/organisms/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL("https://dekids.com.mx"),
  title: {
    default: "Dekids — La siguiente generación de líderes emprendedores y tecnológicos",
    template: "%s | Dekids",
  },
  description:
    "Prepara a tu hija/o para la era de la inteligencia artificial a través del emprendimiento, la creación de tecnología y la confianza.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Dekids",
    title: "La siguiente generación de líderes emprendedores y tecnológicos",
    description:
      "Preparando a las nuevas generaciones de talento para un contexto global desafiante.",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

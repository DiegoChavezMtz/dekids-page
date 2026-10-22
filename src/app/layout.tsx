import type { Metadata } from "next";
import "@/styles/globals.css";
import { SiteHeader } from "@/components/organisms/SiteHeader";
import { SiteFooter } from "@/components/organisms/SiteFooter";

const SITE_URL = "https://dekids.com.mx";
const DEFAULT_DESCRIPTION =
  "Prepara a tu hija/o para la era de la inteligencia artificial a través del emprendimiento, la creación de tecnología y la confianza";
const DEFAULT_OG_IMAGE = "/wp-content/uploads/2020/08/LOGO-Dekids-2.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dekids",
    template: "%s | Dekids",
  },
  description: DEFAULT_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Dekids",
    title: "Dekids",
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Dekids",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/wp-content/uploads/2021/03/logoUniverso.png`,
        width: 1459,
        height: 1459,
      },
      sameAs: ["https://www.instagram.com/dekidsmx/"],
      contactPoint: { "@type": "ContactPoint", telephone: "+525573731655", contactType: "customer service" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Dekids",
      description: "Educación para la era digital desde la niñez",
      inLanguage: "es",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}

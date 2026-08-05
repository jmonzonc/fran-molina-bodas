import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Script from "next/script"

import { Navbar } from "@/components/navbar"
import { CookieBanner } from "@/components/cookie-banner"
import {
  SITE_URL,
  BODA_COMPLETA,
  BUSINESS_INFO,
  PHONE_DISPLAY,
  EMAIL,
  SOCIAL_LINKS,
  PRICE_LIST,
  DELIVERABLES,
  PACK_COMPLETO,
} from "@/lib/config"
import { faqPageSchema } from "@/lib/faqs"
import { schemaPrice } from "@/lib/format"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

const GA_ID = process.env.NEXT_PUBLIC_GA_ID

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Fotógrafo y Videógrafo de Bodas en Tarragona y Costa Daurada | Fran Molina",
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description:
    "Fotógrafo y videógrafo de bodas premium en Tarragona y Costa Daurada. " +
    "Reportajes de preboda, boda completa y postboda con estilo natural y elegante mediterráneo desde 2015. " +
    `Pack completo desde ${PACK_COMPLETO.price}.`,
  authors: [{ name: "Fran Molina March", url: SITE_URL }],
  creator: "Fran Molina March",
  publisher: BUSINESS_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE_URL,
    siteName: BUSINESS_INFO.name,
    title:
      "Fotógrafo y Videógrafo de Bodas en Tarragona y Costa Daurada | Fran Molina",
    description:
      "Fotógrafo y videógrafo de bodas premium en Tarragona y Costa Daurada. " +
      `Preboda, boda completa, postboda y same day edit. Pack completo desde ${PACK_COMPLETO.price}.`,
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Fran Molina March — Fotógrafo de bodas en Tarragona",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_INFO.name} | Fotógrafo y Videógrafo de Bodas en Tarragona`,
    description:
      "Fotografía y vídeo de bodas premium en Tarragona y Costa Daurada. " +
      "Estilo natural y elegante mediterráneo.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
  alternates: {
    canonical: SITE_URL,
  },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

/**
 * Helper de Offer. Evita repetir el bloque priceSpecification siete veces y
 * garantiza que el precio del schema y el de la UI salen del mismo número.
 */
function offer(name: string, description: string, amount: number) {
  return {
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name,
      description,
    },
    price: schemaPrice(amount),
    priceCurrency: "EUR",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: schemaPrice(amount),
      priceCurrency: "EUR",
      valueAddedTaxIncluded: false,
    },
  }
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Fran Molina March",
  givenName: "Fran",
  familyName: "Molina March",
  jobTitle: "Fotógrafo y Videógrafo de Bodas",
  description:
    "Fotógrafo y videógrafo de bodas premium en Tarragona y la Costa Daurada. " +
    "Especializado en reportajes de estilo natural y cinematográfico desde 2015.",
  url: SITE_URL,
  email: EMAIL,
  telephone: PHONE_DISPLAY,
  image: `${SITE_URL}/images/fran-molina-march-fotografo-bodas-tarragona.jpg`,
  sameAs: [
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.youtube,
  ].filter(Boolean),
  knowsAbout: [
    "Fotografía de bodas",
    "Videografía de bodas",
    "Fotografía nupcial",
    "Same Day Edit",
    "Preboda",
    "Postboda",
  ],
  worksFor: { "@id": `${SITE_URL}/#business` },
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS_INFO.location.city,
    addressRegion: "Cataluña",
    addressCountry: BUSINESS_INFO.location.country,
  },
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#business`,
  name: BUSINESS_INFO.name,
  legalName: BUSINESS_INFO.legalName,
  description: BUSINESS_INFO.description,
  url: SITE_URL,
  telephone: PHONE_DISPLAY,
  email: EMAIL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/og-image.jpg`,
  priceRange: BUSINESS_INFO.priceRange,
  currenciesAccepted: "EUR",
  paymentAccepted: "Transferencia bancaria, tarjeta de crédito",
  areaServed: [
    "Tarragona",
    "Reus",
    "Salou",
    "Cambrils",
    "Valls",
    "Tortosa",
    "Barcelona",
    "Girona",
    "Cataluña",
    "Costa Daurada",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS_INFO.location.city,
    addressRegion: "Cataluña",
    postalCode: "43000",
    addressCountry: BUSINESS_INFO.location.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS_INFO.coordinates.lat,
    longitude: BUSINESS_INFO.coordinates.lng,
  },
  sameAs: [
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.youtube,
  ].filter(Boolean),
  founder: { "@id": `${SITE_URL}/#person` },
  employee: { "@id": `${SITE_URL}/#person` },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Paquetes de Fotografía de Bodas — Tarragona y Costa Daurada",
    itemListElement: [
      offer(
        "Preboda",
        `Sesión de preboda de 2-3 horas en ubicación elegida. Incluye ${DELIVERABLES.photosSession}+ fotos editadas profesionalmente y galería online privada descargable.`,
        PRICE_LIST.preboda,
      ),
      offer(
        "Boda — Solo foto",
        `Reportaje fotográfico del día completo (${DELIVERABLES.coverageHours}h+). Más de ${DELIVERABLES.photosWedding} fotos editadas y galería online privada descargable.`,
        PRICE_LIST.bodaFoto,
      ),
      offer(
        "Boda — Solo vídeo",
        `Vídeo cinematográfico del día completo (${DELIVERABLES.coverageHours}h+) con highlight reel y galería online privada descargable.`,
        PRICE_LIST.bodaVideo,
      ),
      offer(
        "Boda Completa",
        `Cobertura completa del día de la boda (${DELIVERABLES.coverageHours}h+) con fotografía y vídeo cinematográfico. Más de ${DELIVERABLES.photosWedding} fotos editadas y highlight reel. Ahorro de ${BODA_COMPLETA.savingsLabel} frente a contratar la cobertura de foto y la de vídeo por separado.`,
        BODA_COMPLETA.priceNumeric,
      ),
      offer(
        "Same Day Edit",
        "Vídeo cinematográfico editado y listo para proyectar el mismo día de la boda durante el banquete.",
        PRICE_LIST.sameDayEdit,
      ),
      offer(
        "Postboda",
        "Sesión artística post-ceremonia en ubicación especial de la Costa Daurada.",
        PRICE_LIST.postboda,
      ),
      offer(
        PACK_COMPLETO.name,
        `Preboda + Boda Completa (foto y vídeo, ${DELIVERABLES.coverageHours}h+) + Same Day Edit + Postboda. ${DELIVERABLES.photosWedding}+ fotos editadas, highlight reel y galería online privada descargable. Ahorro de ${PACK_COMPLETO.savingsLabel} frente a la contratación por separado.`,
        PACK_COMPLETO.priceNumeric,
      ),
    ],
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${BUSINESS_INFO.name} — Fotógrafo de Bodas Tarragona`,
  description:
    "Web oficial de Fran Molina March, fotógrafo y videógrafo de bodas premium " +
    "en Tarragona y la Costa Daurada.",
  inLanguage: "es-ES",
  publisher: { "@id": `${SITE_URL}/#business` },
}

/**
 * ⚠️  contentUrl apunta a una URL firmada de Supabase con token embebido.
 * Cuando el bucket pase a público, sustituir por la URL limpia: Google
 * descarta VideoObject cuyo contentUrl devuelve 403 tras la expiración.
 */
const videoObjectSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Vídeo de bodas en Tarragona — Fran Molina Fotografía",
  description:
    "Showreel de fotografía y vídeo de bodas premium en Tarragona y la Costa Daurada. Estilo cinematográfico natural.",
  thumbnailUrl: `${SITE_URL}/images/hero-poster.jpg`,
  uploadDate: "2026-03-23",
  contentUrl:
    "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/loop%20video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzL2xvb3AgdmlkZW8ubXA0IiwiaWF0IjoxNzc1MjI4NTAzLCJleHAiOjIwOTA1ODg1MDN9.su-8GN2oqVOuv92gQCXwINxy2cClzQQKI6-FsAOUePs",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
  ],
}

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preconnect al origen de las imágenes y el vídeo: ahorra ~150 ms de
            handshake TLS antes de la primera petición del hero. */}
        <link
          rel="preconnect"
          href="https://clmmicwprzdhnkbeczoi.supabase.co"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personSchema,
              localBusinessSchema,
              websiteSchema,
              videoObjectSchema,
              breadcrumbSchema,
              faqPageSchema,
            ]),
          }}
        />

        {/* Consent Mode v2 — DEBE ir antes de gtag.js */}
        {GA_ID && (
          <Script id="ga-consent-default" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                functionality_storage: 'granted',
                security_storage: 'granted',
                wait_for_update: 500
              });
              gtag('set', 'ads_data_redaction', true);
            `}
          </Script>
        )}
      </head>
      <body className="font-sans antialiased">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  anonymize_ip: true,
                  send_page_view: true
                });
              `}
            </Script>
          </>
        )}
        <Navbar />
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}

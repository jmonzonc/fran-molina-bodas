import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import {
  SITE_URL,
  BUSINESS_INFO,
  PHONE_DISPLAY,
  PHONE_LINK,
  EMAIL,
  SOCIAL_LINKS,
  SEO_KEYWORDS,
} from "@/lib/config"

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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a1a",
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
  default: "Fotógrafo de Bodas en Tarragona y Costa Daurada | Fran Momarch — Foto y Vídeo",
  template: `%s | ${BUSINESS_INFO.name}`,
},
  description:
    "Fotógrafo y videógrafo de bodas premium en Tarragona y Costa Daurada. " +
    "Reportajes de preboda, boda completa y postboda con estilo natural y elegante mediterráneo desde 2015. " +
    "Pack completo desde 3.000 €.",
  keywords: SEO_KEYWORDS,
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
    title: "Fotógrafo de Bodas en Tarragona y Costa Daurada | Fran Molina — Foto y Vídeo",
    description:
      "Fotógrafo y videógrafo de bodas premium en Tarragona y Costa Daurada. " +
      "Preboda, boda completa, postboda y same day edit. Pack completo desde 3.000 €.",
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
    title: `${BUSINESS_INFO.name} | Fotógrafo de Bodas en Tarragona`,
    description:
      "Fotografía y vídeo de bodas premium en Tarragona y Costa Daurada. " +
      "Estilo natural y elegante mediterráneo.",
    images: [`${SITE_URL}/images/og-image.jpg`],
  },
  alternates: {
    canonical: SITE_URL,
  },
  // Descomenta tras verificar en GSC:
  // verification: { google: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────

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
    "Álbumes de boda de lujo",
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
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Preboda",
          description:
            "Sesión de preboda de 2-3 horas en ubicación elegida. Incluye 50+ fotos editadas profesionalmente y galería online privada descargable.",
        },
        price: "400",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "400",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Boda — Solo foto",
          description:
            "Reportaje fotográfico del día completo (10h+). Más de 400 fotos editadas y galería online privada descargable.",
        },
        price: "1200",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "1200",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Boda — Solo vídeo",
          description:
            "Vídeo cinematográfico del día completo (10h+) con highlight reel y galería online privada descargable.",
        },
        price: "1400",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "1400",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Boda Completa",
          description:
            "Cobertura completa del día de la boda (10h+) con fotografía y vídeo cinematográfico. Más de 400 fotos editadas y highlight reel.",
        },
        price: "2200",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "2200",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Same Day Edit",
          description:
            "Vídeo cinematográfico editado y listo para proyectar el mismo día de la boda durante el banquete.",
        },
        price: "400",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "400",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Postboda",
          description:
            "Sesión artística post-ceremonia en ubicación especial de la Costa Daurada. Incluye álbum de lujo.",
        },
        price: "400",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "400",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pack Completo",
          description:
            "Preboda + Boda Completa (foto y vídeo, 10h+) + Same Day Edit + Postboda con álbum de lujo. 500+ fotos editadas, highlight reel y galería privada.",
        },
        price: "3000",
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "3000",
          priceCurrency: "EUR",
          valueAddedTaxIncluded: false,
        },
      },
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

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personSchema,
              localBusinessSchema,
              websiteSchema,
            ]),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

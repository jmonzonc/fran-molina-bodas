import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Navbar } from "@/components/navbar"
import "./globals.css"
import {
  SITE_URL,
  BUSINESS_INFO,
  PHONE_DISPLAY,
  PHONE_LINK,
  EMAIL,
  SOCIAL_LINKS,
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
    default:
      "Fotógrafo de Bodas en Tarragona | Fran Molina — Foto y Vídeo",
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description:
    "Fotógrafo y videógrafo de bodas premium en Tarragona y Costa Daurada. " +
    "Reportajes de preboda, boda completa y postboda con estilo natural y elegante mediterráneo desde 2015. " +
    "Pack completo desde 3.000 €.",
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
      "Fotógrafo de Bodas en Tarragona | Fran Molina — Foto y Vídeo",
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

const videoObjectSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Vídeo de bodas en Tarragona — Fran Molina Fotografía",
  description:
    "Showreel de fotografía y vídeo de bodas premium en Tarragona y la Costa Daurada. Estilo cinematográfico natural.",
  thumbnailUrl: `${SITE_URL}/images/hero-poster.jpg`,
  uploadDate: "2025-06-01",
  contentUrl:
    "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/loop%20video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzL2xvb3AgdmlkZW8ubXA0IiwiaWF0IjoxNzc1MjI4NTAzLCJleHAiOjIwOTA1ODg1MDN9.su-8GN2oqVOuv92gQCXwINxy2cClzQQKI6-FsAOUePs",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: SITE_URL,
    },
  ],
}

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuesta un fotógrafo de bodas en Tarragona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En Fran Molina Fotografía ofrecemos diferentes opciones según tus necesidades. La sesión de preboda o postboda comienza desde 400 €. El reportaje fotográfico de boda parte desde 1.200 € y el vídeo cinematográfico desde 1.400 €. La Boda Completa con fotografía y vídeo tiene un precio desde 2.200 €. Y el Pack Completo (preboda + boda completa + same day edit + postboda) desde 3.000 €. Todos los precios son orientativos y personalizamos cada propuesta según la ubicación y los detalles de tu boda en Tarragona, Reus, Salou, Cambrils o cualquier punto de la Costa Daurada.",
      },
    },
    {
      "@type": "Question",
      name: "¿Con cuánta antelación debo reservar mi fotógrafo de bodas?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Recomendamos reservar con un mínimo de 9 a 12 meses de antelación, especialmente para bodas en primavera (abril–junio) y otoño (septiembre–octubre), las temporadas más demandadas en Tarragona y la Costa Daurada. Para bodas en 2026 y 2027 la disponibilidad es muy limitada. La reserva se confirma con la firma del contrato y un depósito del 20 %.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cubres bodas fuera de Tarragona y la Costa Daurada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Cubrimos bodas en toda Cataluña: Tarragona, Reus, Salou, Cambrils, Valls, Tortosa, Barcelona, Girona, Sitges, Lleida y alrededores. También viajamos a otras comunidades autónomas y al extranjero para bodas destino. Consúltanos disponibilidad y condiciones de desplazamiento sin compromiso.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluye el paquete de boda completa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La Boda Completa cubre el día entero desde los preparativos hasta el baile (10 horas o más). Incluye fotografía y vídeo cinematográfico en alta resolución, más de 400 fotos editadas profesionalmente entregadas en galería online privada, y un highlight reel de 3–5 minutos. Puedes añadir el Same Day Edit para proyectar un vídeo durante el banquete, y combinarlo con preboda y postboda en el Pack Completo con un ahorro de 400 €.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuánto tardáis en entregar las fotos de la boda?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El plazo habitual de entrega es de 4 a 6 semanas después de la boda. Recibiréis un avance de 30-50 fotos en las primeras 48 horas. El reportaje completo se entrega en galería online privada con descarga en alta resolución. Para álbumes físicos de lujo el plazo es de 8 a 12 semanas adicionales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es el Same Day Edit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El Same Day Edit es un vídeo cinematográfico que editamos el mismo día de tu boda para proyectarlo durante el banquete. Recoge los mejores momentos de los preparativos y la ceremonia en un montaje de 3–5 minutos que sorprende a todos los invitados. Está disponible como servicio individual por 400 € o incluido en el Pack Completo.",
      },
    },
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
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { 
  SITE_URL, 
  EMAIL, 
  PHONE_LINK, 
  SOCIAL_LINKS, 
  SEO_KEYWORDS,
  BUSINESS_INFO 
} from '@/lib/config'
import './globals.css'

// ============================================================
// CONFIGURACIÓN DE FUENTES
// ============================================================

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

// ============================================================
// METADATA SEO
// ============================================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BUSINESS_INFO.name} | Fotógrafo de Bodas Premium en Tarragona`,
    template: `%s | ${BUSINESS_INFO.name}`
  },
  description: BUSINESS_INFO.description,
  keywords: SEO_KEYWORDS,
  authors: [{ name: BUSINESS_INFO.shortName, url: SITE_URL }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/',
      'ca-ES': '/ca',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: ['ca_ES', 'en_US'],
    url: SITE_URL,
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.shortName} | Fotógrafo de Bodas Premium en Tarragona`,
    description: `${BUSINESS_INFO.tagline}. ${BUSINESS_INFO.description}`,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fran Molina Fotografía - Bodas Premium Tarragona',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fran Molina | Fotógrafo de Bodas Premium Tarragona',
    description: 'Tu historia en frames eternos. Fotografía de bodas premium en Tarragona y Costa Daurada.',
    images: ['/og-image.jpg'],
    creator: '@franmolinafoto',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'tu-codigo-verificacion-google',
  },
  category: 'photography',
  classification: 'Wedding Photography Services',
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9fafb' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// ============================================================
// JSON-LD SCHEMA PARA SEO
// ============================================================

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#business`,
      name: BUSINESS_INFO.name,
      description: BUSINESS_INFO.description,
      url: SITE_URL,
      telephone: PHONE_LINK,
      email: EMAIL,
      image: `${SITE_URL}/og-image.jpg`,
      priceRange: BUSINESS_INFO.priceRange,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS_INFO.location.city,
        addressRegion: BUSINESS_INFO.location.region,
        addressCountry: BUSINESS_INFO.location.country,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS_INFO.location.coordinates.latitude,
        longitude: BUSINESS_INFO.location.coordinates.longitude,
      },
      areaServed: [
        { '@type': 'City', name: 'Tarragona' },
        { '@type': 'City', name: 'Reus' },
        { '@type': 'City', name: 'Salou' },
        { '@type': 'City', name: 'Cambrils' },
        { '@type': 'Place', name: 'Costa Daurada' },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '20:00',
      },
      sameAs: [
        SOCIAL_LINKS.instagram,
        SOCIAL_LINKS.facebook,
        SOCIAL_LINKS.youtube,
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '87',
        bestRating: '5',
        worstRating: '1',
      },
    },
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#service`,
      serviceType: 'Wedding Photography',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: { '@type': 'Place', name: `${BUSINESS_INFO.location.city}, ${BUSINESS_INFO.location.region}` },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Fotografía de Bodas',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Preboda Foto',
              description: 'Sesión de 2-3 horas con 50+ fotos editadas profesionalmente',
            },
            price: '1200',
            priceCurrency: 'EUR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Boda Completa',
              description: 'Cobertura del día completo con fotografía y vídeo cinematográfico',
            },
            price: '3500',
            priceCurrency: 'EUR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Postboda Premium',
              description: 'Sesión artística post-ceremonia con álbum de lujo incluido',
            },
            price: '900',
            priceCurrency: 'EUR',
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BUSINESS_INFO.name,
      description: `Fotógrafo de bodas premium en ${BUSINESS_INFO.location.city}`,
      publisher: { '@id': `${SITE_URL}/#business` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/buscar?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'es-ES',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Inicio',
          item: SITE_URL,
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${cormorantGaramond.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
        
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Geo targeting for SEM */}
        <meta name="geo.region" content="ES-CT" />
        <meta name="geo.placename" content="Tarragona" />
        <meta name="geo.position" content="41.1189;1.2445" />
        <meta name="ICBM" content="41.1189, 1.2445" />
        
        {/* Business contact for Google */}
        <meta name="contact" content={EMAIL} />
        <meta name="reply-to" content={EMAIL} />
        
        {/* Mobile app banner prevention */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Fran Molina Foto" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

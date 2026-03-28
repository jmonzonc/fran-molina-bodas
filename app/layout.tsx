import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { 
  SITE_URL, 
  EMAIL, 
  PHONE_DISPLAY as PHONE,       // ← debe ser "+34 638 475 783" (sin "tel:"). Verifica en lib/config.ts
  PHONE_LINK,  // ← esta sí lleva "tel:" y se usa solo en <a href>
  SOCIAL_LINKS, 
  SEO_KEYWORDS,
  BUSINESS_INFO 
} from '@/lib/config'
import './globals.css'

// ============================================================
// FUENTES
// Cargamos solo los pesos que realmente se usan en el diseño.
// Cada peso extra son ~20-30 KB adicionales de bloqueo de render.
// Revisa globals.css y componentes antes de añadir más pesos.
// ============================================================

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  // NOTA: 300 y 600 raramente se usan juntos con 400/500/700.
  // Elimina los que no uses tras auditar tu CSS → menos KB, mejor LCP.
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

// ============================================================
// METADATA
// ============================================================

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Fran Molina Fotografía',
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
  // Solo canonical en español. Añadir hreflang /ca y /en solo cuando
  // esas rutas existan realmente en el proyecto.
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_URL,
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.shortName} | Fotógrafo de Bodas Premium en Tarragona`,
    description: `${BUSINESS_INFO.tagline}. ${BUSINESS_INFO.description}`,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fran Molina Fotografía - Fotógrafo de bodas premium en Tarragona y Costa Daurada',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fran Molina | Fotógrafo de Bodas Premium Tarragona',
    description: 'Tu historia en frames eternos. Fotografía de bodas premium en Tarragona y Costa Daurada.',
    images: ['/og-image.jpg'],
    // Actualiza con el handle real de X/Instagram cuando lo confirmes
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
  // Descomenta y pega tu código real tras verificar en Google Search Console:
  // verification: {
  //   google: 'PEGA_AQUI_TU_CODIGO_REAL',
  // },
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
// SCHEMA.ORG — FAQ
// Las respuestas deben coincidir EXACTAMENTE con el texto
// visible en el componente <FAQ> de la página.
// Respuestas ricas en keywords geográficas y de servicio
// para maximizar la superficie de citación por motores de IA.
// ============================================================

const faqItems = [
  {
    question: '¿Cuánto cuesta un fotógrafo de bodas en Tarragona?',
    answer:
      'El precio de un fotógrafo de bodas en Tarragona depende del tipo de cobertura y los servicios incluidos. En Fran Molina Fotografía los paquetes empiezan desde 900 € para sesiones de postboda, 1.200 € para prebodas y 3.500 € para la cobertura completa del día de la boda con fotografía y vídeo cinematográfico. Los precios son orientativos: personalizamos cada propuesta según tus necesidades y la ubicación de la boda en Tarragona, Reus, Salou, Cambrils, la Costa Daurada o cualquier otro punto de Cataluña.',
  },
  {
    question: '¿Con cuánta antelación debo reservar mi fotógrafo de bodas?',
    answer:
      'Recomendamos reservar el fotógrafo de bodas con un mínimo de 9 a 12 meses de antelación, especialmente para bodas en primavera (abril–junio) y otoño (septiembre–octubre), las temporadas más demandadas en Tarragona y la Costa Daurada. Para bodas en 2025 y 2026 la disponibilidad es muy limitada. La reserva se confirma con la firma del contrato y un depósito del 20 %.',
  },
  {
    question: '¿Cubres bodas fuera de Tarragona y la Costa Daurada?',
    answer:
      'Sí. Cubrimos bodas en toda Cataluña: Tarragona, Reus, Salou, Cambrils, Valls, Tortosa, Barcelona, Girona, Sitges, Lleida y alrededores. También viajamos a otras comunidades autónomas y al extranjero para bodas destino. Consúltanos disponibilidad y condiciones de desplazamiento sin compromiso.',
  },
  {
    question: '¿Qué incluye el paquete de boda completa?',
    answer:
      'El paquete Boda Completa cubre el día completo desde los preparativos hasta el baile (10 horas o más). Incluye cobertura fotográfica y videográfica en alta resolución, más de 400 fotos editadas profesionalmente entregadas en galería online privada descargable, y un highlight reel cinematográfico de 3–5 minutos. También puedes añadir álbum de lujo, same day edit y sesión de preboda a precio especial.',
  },
  {
    question: '¿Cuánto tardáis en entregar las fotos de la boda?',
    answer:
      'El plazo habitual de entrega es de 4 a 6 semanas después de la boda. Recibirás todas las fotografías editadas en color y blanco y negro en una galería online privada de alta resolución, lista para descargar y compartir con familia y amigos sin coste adicional. Para álbumes físicos de lujo el plazo es de 8 a 12 semanas adicionales.',
  },
  {
    question: '¿Hacéis sesión de preboda incluida?',
    answer:
      'Las sesiones de preboda están disponibles como servicio independiente desde 1.200 € y también se pueden añadir a precio especial en el paquete Boda Completa. La preboda es perfecta para conocernos antes del gran día, para que la pareja se sienta cómoda delante de la cámara y para obtener imágenes únicas en localizaciones especiales de Tarragona, la Costa Daurada, Girona, Barcelona o donde prefiráis.',
  },
]

// ============================================================
// SCHEMA.ORG — JSON-LD COMPLETO
// ============================================================

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [

    // ----------------------------------------------------------
    // 1. NEGOCIO LOCAL + TIPO ESPECÍFICO PHOTOGRAPHER
    // El tipo dual ['LocalBusiness', 'Photographer'] es el que
    // Google y los motores de IA priorizan para este sector.
    // ----------------------------------------------------------
    {
      '@type': ['LocalBusiness', 'Photographer'],
      '@id': `${SITE_URL}/#business`,
      name: BUSINESS_INFO.name,
      alternateName: BUSINESS_INFO.shortName,
      description: BUSINESS_INFO.description,
      slogan: BUSINESS_INFO.tagline,
      url: SITE_URL,
      // IMPORTANTE: PHONE debe ser "+34 638 475 783", sin "tel:".
      // Verifica que la variable en lib/config.ts es la versión limpia.
      telephone: PHONE,
      email: EMAIL,
      image: `${SITE_URL}/og-image.jpg`,
      logo: `${SITE_URL}/logo.png`,
      priceRange: BUSINESS_INFO.priceRange,
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Cash, Credit Card, Bank Transfer',
      foundingDate: '2015',
      // Sustituye con la URL real de tu ficha de Google My Business.
      hasMap: 'https://maps.google.com/?q=Fran+Molina+Fotografia+Tarragona',
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
      // ContactPoint ayuda a Google a correlacionar el schema con GMB.
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: PHONE,
        email: EMAIL,
        contactType: 'customer service',
        availableLanguage: ['Spanish', 'Catalan'],
        areaServed: 'ES',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday', 'Tuesday', 'Wednesday', 'Thursday',
            'Friday', 'Saturday', 'Sunday',
          ],
          opens: '09:00',
          closes: '20:00',
        },
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday', 'Tuesday', 'Wednesday', 'Thursday',
          'Friday', 'Saturday', 'Sunday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
      areaServed: [
        { '@type': 'City', name: 'Tarragona' },
        { '@type': 'City', name: 'Reus' },
        { '@type': 'City', name: 'Salou' },
        { '@type': 'City', name: 'Cambrils' },
        { '@type': 'City', name: 'Valls' },
        { '@type': 'City', name: 'Tortosa' },
        { '@type': 'City', name: 'Girona' },
        { '@type': 'City', name: 'Barcelona' },
        { '@type': 'City', name: 'Sitges' },
        { '@type': 'Place', name: 'Costa Daurada' },
        { '@type': 'Place', name: 'Cataluña' },
      ],
      sameAs: [
        SOCIAL_LINKS.instagram,
        SOCIAL_LINKS.facebook,
        SOCIAL_LINKS.youtube,
      ],
      // aggregateRating: desactivado hasta tener reseñas verificables en GMB.
      // Google penaliza ratings sintéticos. Actívalo con datos reales.
      // aggregateRating: {
      //   '@type': 'AggregateRating',
      //   ratingValue: '5.0',
      //   reviewCount: '12',   // ← número real de reseñas verificables
      //   bestRating: '5',
      //   worstRating: '1',
      // },
    },

    // ----------------------------------------------------------
    // 2. PERSONA — Fran Molina March
    // Entidad crítica para GEO/AI SEO. Los LLMs (ChatGPT, Gemini,
    // Perplexity) construyen grafos de conocimiento sobre personas.
    // Sin esta entidad, Fran no existe en la web semántica más allá
    // del negocio. Con ella puede aparecer como respuesta directa a
    // "¿quién es el mejor fotógrafo de bodas en Tarragona?".
    // ----------------------------------------------------------
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Fran Molina March',
      givenName: 'Fran',
      familyName: 'Molina March',
      jobTitle: 'Fotógrafo de Bodas',
      description:
        'Fotógrafo de bodas premium con sede en Tarragona, especializado en fotografía y vídeo cinematográfico de bodas, prebodas y postbodas en la Costa Daurada y Cataluña desde 2015.',
      url: SITE_URL,
      image: `${SITE_URL}/og-image.jpg`,
      email: EMAIL,
      telephone: PHONE,
      worksFor: { '@id': `${SITE_URL}/#business` },
      knowsAbout: [
        'Fotografía de bodas',
        'Vídeo cinematográfico de bodas',
        'Fotografía de preboda',
        'Fotografía de postboda',
        'Fotografía de retrato de pareja',
        'Edición fotográfica profesional',
        'Costa Daurada',
        'Tarragona',
      ],
      sameAs: [
        SOCIAL_LINKS.instagram,
        SOCIAL_LINKS.facebook,
        SOCIAL_LINKS.youtube,
      ],
    },

    // ----------------------------------------------------------
    // 3. SERVICIO + CATÁLOGO DE OFERTAS
    // ----------------------------------------------------------
    {
      '@type': 'Service',
      '@id': `${SITE_URL}/#service`,
      name: 'Fotografía y Vídeo de Bodas en Tarragona',
      serviceType: 'Wedding Photography',
      provider: { '@id': `${SITE_URL}/#business` },
      areaServed: {
        '@type': 'Place',
        name: `${BUSINESS_INFO.location.city}, ${BUSINESS_INFO.location.region}`,
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Paquetes de Fotografía de Bodas — Tarragona y Costa Daurada',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Preboda Foto',
              description:
                'Sesión de preboda de 2-3 horas en ubicación elegida. Incluye 50+ fotos editadas profesionalmente y galería online privada descargable.',
            },
            price: '1200',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '1200',
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Boda Completa',
              description:
                'Cobertura completa del día de la boda (10h+) con fotografía y vídeo cinematográfico. Más de 400 fotos editadas y highlight reel.',
            },
            price: '3500',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '3500',
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Same Day Edit',
              description:
                'Vídeo cinematográfico editado y listo para proyectar el mismo día de la boda durante el banquete.',
            },
            price: '800',
            priceCurrency: 'EUR',
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Postboda Premium',
              description:
                'Sesión artística post-ceremonia en ubicación especial de la Costa Daurada. Incluye álbum de lujo.',
            },
            price: '900',
            priceCurrency: 'EUR',
            priceSpecification: {
              '@type': 'PriceSpecification',
              price: '900',
              priceCurrency: 'EUR',
              valueAddedTaxIncluded: false,
            },
          },
        ],
      },
    },

    // ----------------------------------------------------------
    // 4. FAQ PAGE
    // Activa el acordeón expandible en los resultados de Google.
    // Es también la fuente principal de citación para motores de IA.
    // ----------------------------------------------------------
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: faqItems.map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: answer,
        },
      })),
    },

    // ----------------------------------------------------------
    // 5. WEBSITE
    // ----------------------------------------------------------
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: BUSINESS_INFO.name,
      description: `Fotógrafo de bodas premium en ${BUSINESS_INFO.location.city} y Costa Daurada. Fotografía y vídeo cinematográfico de bodas desde 2015.`,
      publisher: { '@id': `${SITE_URL}/#business` },
      author: { '@id': `${SITE_URL}/#person` },
      inLanguage: 'es-ES',
    },

    // ----------------------------------------------------------
    // 6. WEBPAGE — HomePage
    // ----------------------------------------------------------
    {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: `${BUSINESS_INFO.name} | Fotógrafo de Bodas Premium en Tarragona`,
      description: BUSINESS_INFO.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#business` },
      primaryImageOfPage: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
      },
      inLanguage: 'es-ES',
      breadcrumb: { '@id': `${SITE_URL}/#breadcrumb` },
    },

    // ----------------------------------------------------------
    // 7. BREADCRUMB
    // ----------------------------------------------------------
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

// ============================================================
// ROOT LAYOUT
// ============================================================

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

        {/* PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192.png" />

        {/* Preconnect a Supabase (assets reales) y Google Fonts */}
        <link rel="preconnect" href="https://clmmicwprzdhnkbeczoi.supabase.co" />
        <link rel="dns-prefetch" href="https://clmmicwprzdhnkbeczoi.supabase.co" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Geo targeting — ES-T es el código ISO correcto para la provincia de Tarragona */}
        <meta name="geo.region" content="ES-T" />
        <meta name="geo.placename" content="Tarragona, Cataluña, España" />
        <meta name="geo.position" content="41.1189;1.2445" />
        <meta name="ICBM" content="41.1189, 1.2445" />

        {/* Contacto para Google */}
        <meta name="contact" content={EMAIL} />
        <meta name="reply-to" content={EMAIL} />

        {/* PWA iOS */}
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

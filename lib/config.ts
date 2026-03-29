/**
 * Configuración centralizada del sitio web de Fran Molina Fotografía
 *
 * ⚠️  REESTRUCTURACIÓN COMPLETA respecto al original:
 *  1. SITE_URL corregida → franmomarchbodas.es
 *  2. Precios reales según briefing del cliente
 *  3. Servicios reorganizados: individuales + Pack Completo destacado
 *  4. Tagline SEO en español (sin "frames")
 *  5. Keywords refinadas para mercado local
 */

// ============================================================
// DATOS DE CONTACTO
// ============================================================

export const WHATSAPP_NUMBER = "34638475783"
export const PHONE_DISPLAY = "+34 638 475 783"
export const PHONE_LINK = "+34638475783"
export const EMAIL = "francescmolinamarch@gmail.com"

// ============================================================
// REDES SOCIALES
// ============================================================

export const SOCIAL_LINKS = {
  instagram:
    "https://www.instagram.com/fran_momarch_wedding?igsh=MWNmbHh5YzV3bWIzMg==",
  facebook: "https://facebook.com/franmolinafotografia",
  youtube: "https://youtube.com/@franmolinafoto",
} as const

// ============================================================
// DATOS DEL NEGOCIO
// ============================================================

export const BUSINESS_INFO = {
  name: "Fran Molina Fotografía",
  shortName: "Fran Molina",
  tagline: "Fotógrafo de Bodas en Tarragona y Costa Daurada",
  description:
    "Fotografía y vídeo de bodas premium en Tarragona, Reus, Salou, Cambrils y toda la Costa Daurada. Reportajes de preboda, boda completa y postboda con estilo natural y elegante mediterráneo desde 2015.",
  location: {
    city: "Tarragona",
    region: "Costa Daurada",
    country: "ES",
    coordinates: {
      latitude: 41.1189,
      longitude: 1.2445,
    },
  },
  priceRange: "€€-€€€",
  foundedYear: 2015,
} as const

// ============================================================
// URL DEL SITIO
// ============================================================

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.franmomarchbodas.es"

// ============================================================
// WHATSAPP
// ============================================================

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_MESSAGES = {
  general:
    "Hola Fran! Me gustaría más información sobre tus servicios de fotografía de bodas.",
  preboda: "Hola Fran, me interesa la sesión de Preboda",
  bodaFoto: "Hola Fran, me interesa el reportaje fotográfico de Boda",
  bodaVideo: "Hola Fran, me interesa el vídeo cinematográfico de Boda",
  bodaCompleta:
    "Hola Fran, me interesa la Boda Completa con fotografía y vídeo",
  sameDayEdit: "Hola Fran, me interesa el Same Day Edit",
  postboda: "Hola Fran, me interesa la sesión de Postboda",
  packCompleto:
    "Hola Fran, me interesa el Pack Completo (Preboda + Boda + Same Day Edit + Postboda)",
} as const

// ============================================================
// SERVICIOS INDIVIDUALES
// ============================================================

export interface ServiceItem {
  id: string
  title: string
  subtitle?: string
  features: string[]
  price: string
  priceNumeric: number
  whatsappMessage: string
}

export const SERVICES: ServiceItem[] = [
  {
    id: "preboda",
    title: "Preboda",
    subtitle: "Sesión de pareja",
    features: [
      "Sesión de 2-3 horas en ubicación elegida",
      "50+ fotos editadas profesionalmente",
      "Galería online privada",
    ],
    price: "€400",
    priceNumeric: 400,
    whatsappMessage: WHATSAPP_MESSAGES.preboda,
  },
  {
    id: "boda-completa",
    title: "Boda Completa",
    subtitle: "Foto + Vídeo",
    features: [
      "Cobertura del día completo (10h+)",
      "Fotografía y vídeo cinematográfico",
      "400+ fotos editadas + highlight reel",
      "Galería online privada descargable",
    ],
    price: "€2.200",
    priceNumeric: 2200,
    whatsappMessage: WHATSAPP_MESSAGES.bodaCompleta,
  },
  {
    id: "postboda",
    title: "Postboda",
    subtitle: "Sesión artística",
    features: [
      "Sesión artística post-ceremonia",
      "Ubicación especial Costa Daurada",
      "Álbum de lujo incluido",
    ],
    price: "€400",
    priceNumeric: 400,
    whatsappMessage: WHATSAPP_MESSAGES.postboda,
  },
]

// ============================================================
// PACK COMPLETO (valor diferencial)
// ============================================================

export const PACK_COMPLETO = {
  id: "pack-completo",
  title: "Pack Completo",
  subtitle: "Tu boda de principio a fin",
  description:
    "La experiencia completa: desde la sesión de preboda hasta la postboda, con cobertura total del día de la boda y tu Same Day Edit para sorprender a los invitados.",
  includes: [
    "Sesión de Preboda",
    "Boda Completa — fotografía + vídeo (10h+)",
    "Same Day Edit para proyectar en el banquete",
    "Sesión de Postboda con álbum de lujo",
    "500+ fotos editadas + highlight reel",
    "Galería online privada descargable",
  ],
  price: "€3.000",
  priceNumeric: 3000,
  // Precio si compras todo por separado: 400 + 2200 + 400 + 400 = 3.400
  individualTotal: 3400,
  savings: 400,
  whatsappMessage: WHATSAPP_MESSAGES.packCompleto,
} as const

// ============================================================
// TABLA DE PRECIOS (detalle completo)
// ============================================================

export interface PricingRow {
  service: string
  description: string
  photography: boolean
  video: boolean
  price: string
  priceNumeric: number
}

export const PRICING_DATA: PricingRow[] = [
  {
    service: "Preboda",
    description: "Sesión de pareja, 2-3 horas",
    photography: true,
    video: false,
    price: "€400",
    priceNumeric: 400,
  },
  {
    service: "Boda — Solo foto",
    description: "Reportaje fotográfico del día completo",
    photography: true,
    video: false,
    price: "€1.200",
    priceNumeric: 1200,
  },
  {
    service: "Boda — Solo vídeo",
    description: "Vídeo cinematográfico del día completo",
    photography: false,
    video: true,
    price: "€1.400",
    priceNumeric: 1400,
  },
  {
    service: "Boda Completa",
    description: "Fotografía + vídeo del día completo",
    photography: true,
    video: true,
    price: "€2.200",
    priceNumeric: 2200,
  },
  {
    service: "Same Day Edit",
    description: "Vídeo editado para proyectar en el banquete",
    photography: false,
    video: true,
    price: "€400",
    priceNumeric: 400,
  },
  {
    service: "Postboda",
    description: "Sesión artística + álbum de lujo",
    photography: true,
    video: false,
    price: "€400",
    priceNumeric: 400,
  },
]

// ============================================================
// KEYWORDS SEO
// ============================================================

export const SEO_KEYWORDS = [
  "fotógrafo bodas tarragona",
  "fotógrafo de bodas en tarragona",
  "fotografo bodas tarragona",
  "fotografo bodas costa daurada",
  "reportaje boda tarragona",
  "preboda tarragona",
  "postboda tarragona",
  "postboda costa daurada",
  "fotógrafo bodas reus",
  "fotógrafo bodas salou",
  "fotógrafo bodas cambrils",
  "videógrafo bodas tarragona",
  "fotógrafo bodas barcelona",
  "mejor fotógrafo bodas tarragona",
  "precio fotógrafo bodas tarragona",
  "boda costa daurada",
] as const

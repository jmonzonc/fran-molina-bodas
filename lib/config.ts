// ============================================================
// CONTACTO
// ============================================================

export const WHATSAPP_NUMBER = "34638475783"
export const PHONE_DISPLAY = "+34 638 475 783"
export const PHONE_LINK = "tel:+34638475783"           // fix: prefijo tel:
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
  legalName: "Fran Molina March",
  shortName: "Fran Molina",
  tagline: "Fotógrafo de Bodas en Tarragona y Costa Daurada",
  description:
    "Fotografía y vídeo de bodas premium en Tarragona, Reus, Salou, Cambrils y toda la Costa Daurada. Reportajes de preboda, boda completa y postboda con estilo natural y elegante mediterráneo desde 2015.",
  location: {
    city: "Tarragona",
    region: "Costa Daurada",
    country: "ES",
  },
  coordinates: {
    lat: 41.1189,                                      // alineado con layout.tsx
    lng: 1.2445,
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
// SERVICIOS
// ============================================================

export interface ServiceItem {
  id: string
  name: string                // canónico Schema.org — componentes leen .name
  subtitle?: string
  description: string         // JSON-LD + futuras páginas /servicios/[slug]
  price: string
  priceNumeric: number
  features: string[]          // lista UI + fuente JSON-LD
  whatsappMessage: string
}

export const SERVICES: ServiceItem[] = [
  {
    id: "preboda",
    name: "Preboda",
    subtitle: "Sesión de pareja",
    description:
      "Sesión de pareja de 2-3 horas en ubicación elegida. 50+ fotos editadas profesionalmente y galería online privada descargable.",
    price: "€400",
    priceNumeric: 400,
    features: [
      "Sesión de 2-3 horas en ubicación elegida",
      "50+ fotos editadas profesionalmente",
      "Galería online privada",
    ],
    whatsappMessage: WHATSAPP_MESSAGES.preboda,
  },
  {
    id: "boda-completa",
    name: "Boda Completa",
    subtitle: "Foto + Vídeo",
    description:
      "Cobertura completa del día de la boda (10h+) con fotografía y vídeo cinematográfico. Más de 400 fotos editadas, highlight reel y galería online privada descargable.",
    price: "€2.200",
    priceNumeric: 2200,
    features: [
      "Cobertura del día completo (10h+)",
      "Fotografía y vídeo cinematográfico",
      "400+ fotos editadas + highlight reel",
      "Galería online privada descargable",
    ],
    whatsappMessage: WHATSAPP_MESSAGES.bodaCompleta,
  },
  {
    id: "postboda",
    name: "Postboda",
    subtitle: "Sesión artística",
    description:
      "Sesión artística post-ceremonia en ubicación especial de la Costa Daurada. Incluye álbum de lujo.",
    price: "€400",
    priceNumeric: 400,
    features: [
      "Sesión artística post-ceremonia",
      "Ubicación especial Costa Daurada",
      "Álbum de lujo incluido",
    ],
    whatsappMessage: WHATSAPP_MESSAGES.postboda,
  },
]

// ============================================================
// PACK COMPLETO
// ============================================================

export const PACK_COMPLETO = {
  id: "pack-completo",
  name: "Pack Completo",
  subtitle: "Tu boda de principio a fin",
  description:
    "La experiencia completa: desde la sesión de preboda hasta la postboda, con cobertura total del día de la boda y tu Same Day Edit para sorprender a los invitados.",
  features: [
    "Sesión de Preboda",
    "Boda Completa — fotografía + vídeo (10h+)",
    "Same Day Edit para proyectar en el banquete",
    "Sesión de Postboda con álbum de lujo",
    "500+ fotos editadas + highlight reel",
    "Galería online privada descargable",
  ],
  price: "€3.000",
  priceNumeric: 3000,
  individualTotal: 3800,
  savings: 800,
  whatsappMessage: WHATSAPP_MESSAGES.packCompleto,
} as const

// ============================================================
// TABLA DE PRECIOS
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

export const SEO_KEYWORDS: string[] = [
  // ── FOTOGRAFÍA · CORE ──────────────────────────────────────
  "fotógrafo bodas tarragona",
  "fotógrafo de bodas en tarragona",
  "fotografo bodas tarragona",
  "fotografo bodas costa daurada",
  "mejor fotógrafo bodas tarragona",
  "fotógrafo bodas reus",
  "fotógrafo bodas salou",
  "fotógrafo bodas cambrils",
  "fotógrafo bodas valls",
  "fotógrafo bodas tortosa",
  "fotógrafo bodas barcelona",
  "fotógrafo bodas cataluña",
  "reportaje boda tarragona",
  "reportaje fotografico boda tarragona",

  // ── VÍDEO · CORE ───────────────────────────────────────────
  "videografo bodas tarragona",
  "videógrafo bodas tarragona",
  "video boda tarragona",
  "video cinematografico boda tarragona",
  "video boda costa daurada",
  "videografo bodas reus",
  "videografo bodas cataluña",
  "video boda cataluña",

  // ── FOTO + VÍDEO ──────────────────────────────────────────
  "foto y video boda tarragona",
  "fotografo y videografo bodas tarragona",
  "paquete foto video boda tarragona",
  "foto video boda costa daurada",

  // ── SESIONES ──────────────────────────────────────────────
  "preboda tarragona",
  "preboda costa daurada",
  "postboda tarragona",
  "postboda costa daurada",
  "sesion preboda tarragona",
  "same day edit boda tarragona",

  // ── PRECIO · FOTOGRAFÍA ───────────────────────────────────
  "precio fotógrafo bodas tarragona",
  "cuanto cuesta fotografo bodas tarragona",
  "cuánto cuesta un fotógrafo de bodas en tarragona",
  "precio reportaje boda tarragona",
  "presupuesto fotografo boda tarragona",
  "precio fotógrafo boda costa daurada",
  "tarifas fotografo bodas tarragona",

  // ── PRECIO · VÍDEO ────────────────────────────────────────
  "precio video boda tarragona",
  "cuanto cuesta video boda tarragona",
  "precio videografo bodas tarragona",
  "presupuesto video boda tarragona",
  "precio video cinematografico boda cataluña",

  // ── PRECIO · PAQUETE ──────────────────────────────────────
  "precio foto y video boda tarragona",
  "cuanto cuesta foto y video boda tarragona",
  "precio paquete bodas tarragona",

  // ── LONG TAIL · ALTA INTENCIÓN ────────────────────────────
  "fotógrafo bodas tarragona opiniones",
  "mejor videografo bodas tarragona",
  "fotografo boda costa dorada",
  "fotografia nupcial tarragona",
  "boda costa daurada fotografia",
  "boda tarragona fotografia video",
]

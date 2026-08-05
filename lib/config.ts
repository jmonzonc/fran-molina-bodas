import { formatEUR } from "@/lib/format"

// ============================================================
// CONTACTO
// ============================================================

export const WHATSAPP_NUMBER = "34638475783"
export const PHONE_DISPLAY = "+34 638 475 783"
export const PHONE_LINK = "tel:+34638475783"
export const EMAIL = "francescmolinamarch@gmail.com"

// ============================================================
// REDES SOCIALES
//
// sameAs de Schema.org exige URLs de PERFIL, no de contenido.
// youtube apuntaba a /watch?v=... — Google y los motores generativos
// no resuelven la entidad desde la URL de un vídeo suelto.
// ============================================================

export const SOCIAL_LINKS = {
  instagram:
    "https://www.instagram.com/fran_momarch_wedding?igsh=MWNmbHh5YzV3bWIzMg==",
  facebook: "https://www.facebook.com/people/Fran-Momarch/61582643398027/",
  youtube: "https://www.youtube.com/@franmomarch",
} as const

// ============================================================
// DATOS DEL NEGOCIO
// ============================================================

export const BUSINESS_INFO = {
  name: "Fran Momarch Fotografía",
  legalName: "Fran Molina March",
  shortName: "Fran Momarch",
  tagline: "Fotógrafo y Videógrafo de Bodas en Tarragona y Costa Daurada",
  description:
    "Fotografía y vídeo de bodas premium en Tarragona, Reus, Salou, Cambrils y toda la Costa Daurada. Reportajes de preboda, boda completa y postboda con estilo natural y elegante mediterráneo desde 2015.",
  location: {
    city: "Tarragona",
    region: "Costa Daurada",
    country: "ES",
  },
  coordinates: {
    lat: 41.1189,
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
    "Hola Fran, me interesa el Pack Completo (Preboda + Boda Completa + Same Day Edit + Postboda)",
} as const

// ============================================================
// PRECIOS
//
// Dos niveles, deliberadamente separados:
//
//   ATOMIC_PRICES  servicios indivisibles. Son la única fuente numérica
//                  real y la base de todo cálculo de ahorro.
//   BUNDLES        paquetes con precio propio + la cesta de átomos que
//                  sustituyen. El valor de referencia y el ahorro se
//                  derivan, nunca se escriben a mano.
//
// Así el descuento anunciado siempre es comprobable sumando los precios
// que figuran en la tabla pública (art. 20.3 LGDCU, RDL 24/2021).
// ============================================================

export const ATOMIC_PRICES = {
  preboda: 400,
  bodaFoto: 1200,
  bodaVideo: 1400,
  sameDayEdit: 400,
  postboda: 400,
} as const

export type AtomicPriceKey = keyof typeof ATOMIC_PRICES

export interface Bundle {
  price: string
  priceNumeric: number
  individualTotal: number
  individualTotalLabel: string
  savings: number
  savingsLabel: string
  basket: AtomicPriceKey[]
}

function createBundle(price: number, basket: AtomicPriceKey[]): Bundle {
  const individualTotal = basket.reduce(
    (total, key) => total + ATOMIC_PRICES[key],
    0,
  )
  const savings = individualTotal - price

  return {
    price: formatEUR(price),
    priceNumeric: price,
    individualTotal,
    individualTotalLabel: formatEUR(individualTotal),
    savings,
    savingsLabel: formatEUR(savings),
    basket,
  }
}

/**
 * Boda Completa — 2.200 €
 * Cesta: foto 1.200 + vídeo 1.400 = 2.600 €  →  ahorro 400 €
 */
export const BODA_COMPLETA = createBundle(2200, ["bodaFoto", "bodaVideo"])

/**
 * Pack Completo — 3.000 €
 * Cesta: 400 + 1.200 + 1.400 + 400 + 400 = 3.800 €  →  ahorro 800 €
 */
export const PACK_BUNDLE = createBundle(3000, [
  "preboda",
  "bodaFoto",
  "bodaVideo",
  "sameDayEdit",
  "postboda",
])

/**
 * Vista plana para consumidores que solo necesitan el importe de venta
 * (PRICING_DATA, FAQ, JSON-LD). bodaCompleta es un bundle, no un átomo:
 * su valor sale de BODA_COMPLETA para que no pueda desincronizarse.
 */
export const PRICE_LIST = {
  ...ATOMIC_PRICES,
  bodaCompleta: BODA_COMPLETA.priceNumeric,
} as const

export type PriceKey = keyof typeof PRICE_LIST

// ============================================================
// ENTREGABLES — cifras únicas citadas en UI, FAQ y JSON-LD
// ============================================================

export const DELIVERABLES = {
  photosWedding: 900,
  photosSession: 50,
  coverageHours: 10,
  previewHours: 48,
  galleryWeeksMin: 4,
  galleryWeeksMax: 6,
  highlightMinutesMin: 3,
  highlightMinutesMax: 5,
  bookingMonthsMin: 9,
  bookingMonthsMax: 12,
  depositPercent: 20,
} as const

// ============================================================
// SERVICIOS
// ============================================================

export interface ServiceItem {
  id: string
  name: string
  subtitle?: string
  description: string
  price: string
  priceNumeric: number
  /** Presente solo en paquetes: valor de la cesta equivalente. */
  individualTotalLabel?: string
  /** Presente solo en paquetes: descuento frente a esa cesta. */
  savingsLabel?: string
  features: string[]
  whatsappMessage: string
}

export const SERVICES: ServiceItem[] = [
  {
    id: "preboda",
    name: "Preboda",
    subtitle: "Sesión de pareja",
    description: `Sesión de pareja de 2-3 horas en ubicación elegida. ${DELIVERABLES.photosSession}+ fotos editadas profesionalmente y galería online privada descargable.`,
    price: formatEUR(PRICE_LIST.preboda),
    priceNumeric: PRICE_LIST.preboda,
    features: [
      "Sesión de 2-3 horas en ubicación elegida",
      `${DELIVERABLES.photosSession}+ fotos editadas profesionalmente`,
      "Galería online privada",
    ],
    whatsappMessage: WHATSAPP_MESSAGES.preboda,
  },
  {
    id: "boda-completa",
    name: "Boda Completa",
    subtitle: "Foto + Vídeo",
    description: `Cobertura completa del día de la boda (${DELIVERABLES.coverageHours}h+) con fotografía y vídeo cinematográfico. Más de ${DELIVERABLES.photosWedding} fotos editadas, highlight reel y galería online privada descargable.`,
    price: BODA_COMPLETA.price,
    priceNumeric: BODA_COMPLETA.priceNumeric,
    individualTotalLabel: BODA_COMPLETA.individualTotalLabel,
    savingsLabel: BODA_COMPLETA.savingsLabel,
    features: [
      `Cobertura del día completo (${DELIVERABLES.coverageHours}h+)`,
      "Fotografía y vídeo cinematográfico",
      `${DELIVERABLES.photosWedding}+ fotos editadas + highlight reel`,
      "Galería online privada descargable",
      `Ahorro de ${BODA_COMPLETA.savingsLabel} frente a contratar foto y vídeo por separado`,
    ],
    whatsappMessage: WHATSAPP_MESSAGES.bodaCompleta,
  },
  {
    id: "postboda",
    name: "Postboda",
    subtitle: "Sesión artística",
    description:
      "Sesión artística post-ceremonia en ubicación especial de la Costa Daurada. Las últimas fotos con el vestido, sin prisas y con la pareja en su momento más auténtico.",
    price: formatEUR(PRICE_LIST.postboda),
    priceNumeric: PRICE_LIST.postboda,
    features: [
      "Sesión artística post-ceremonia",
      "Ubicación especial Costa Daurada",
      "Fotos editadas en galería privada",
    ],
    whatsappMessage: WHATSAPP_MESSAGES.postboda,
  },
]

// ============================================================
// PACK COMPLETO
// ============================================================

export interface PackCompleto extends Bundle {
  id: string
  name: string
  subtitle: string
  description: string
  features: string[]
  whatsappMessage: string
}

export const PACK_COMPLETO: PackCompleto = {
  ...PACK_BUNDLE,
  id: "pack-completo",
  name: "Pack Completo",
  subtitle: "Vuestra boda de principio a fin",
  description:
    "La experiencia completa: desde la sesión de preboda hasta la postboda, con cobertura total del día de la boda y Same Day Edit para sorprender a los invitados durante el banquete.",
  features: [
    "Sesión de Preboda",
    `Boda Completa — fotografía + vídeo (${DELIVERABLES.coverageHours}h o más)`,
    "Same Day Edit para proyectar en el banquete",
    "Sesión de Postboda",
    `${DELIVERABLES.photosWedding}+ fotos editadas + highlight reel`,
    "Galería online privada descargable",
  ],
  whatsappMessage: WHATSAPP_MESSAGES.packCompleto,
}

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
  /** Solo en paquetes: precio de referencia tachado. */
  individualTotalLabel?: string
  /** Solo en paquetes: descuento frente a esa referencia. */
  savingsLabel?: string
}

export const PRICING_DATA: PricingRow[] = [
  {
    service: "Preboda",
    description: "Sesión de pareja, 2-3 horas",
    photography: true,
    video: false,
    price: formatEUR(PRICE_LIST.preboda),
    priceNumeric: PRICE_LIST.preboda,
  },
  {
    service: "Boda — Solo foto",
    description: "Reportaje fotográfico del día completo",
    photography: true,
    video: false,
    price: formatEUR(PRICE_LIST.bodaFoto),
    priceNumeric: PRICE_LIST.bodaFoto,
  },
  {
    service: "Boda — Solo vídeo",
    description: "Vídeo cinematográfico del día completo",
    photography: false,
    video: true,
    price: formatEUR(PRICE_LIST.bodaVideo),
    priceNumeric: PRICE_LIST.bodaVideo,
  },
  {
    service: "Boda Completa",
    description: "Fotografía + vídeo del día completo",
    photography: true,
    video: true,
    price: BODA_COMPLETA.price,
    priceNumeric: BODA_COMPLETA.priceNumeric,
    individualTotalLabel: BODA_COMPLETA.individualTotalLabel,
    savingsLabel: BODA_COMPLETA.savingsLabel,
  },
  {
    service: "Same Day Edit",
    description: "Vídeo editado para proyectar en el banquete",
    photography: false,
    video: true,
    price: formatEUR(PRICE_LIST.sameDayEdit),
    priceNumeric: PRICE_LIST.sameDayEdit,
  },
  {
    service: "Postboda",
    description: "Sesión artística post-ceremonia",
    photography: true,
    video: false,
    price: formatEUR(PRICE_LIST.postboda),
    priceNumeric: PRICE_LIST.postboda,
  },
  {
    service: PACK_COMPLETO.name,
    description: "Preboda + Boda Completa + Same Day Edit + Postboda",
    photography: true,
    video: true,
    price: PACK_COMPLETO.price,
    priceNumeric: PACK_COMPLETO.priceNumeric,
    individualTotalLabel: PACK_COMPLETO.individualTotalLabel,
    savingsLabel: PACK_COMPLETO.savingsLabel,
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
  "fotógrafo bodas girona",
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

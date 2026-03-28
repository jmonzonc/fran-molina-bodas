/**
 * Configuración centralizada del sitio web de Fran Molina Fotografía
 * Este archivo contiene todos los datos de contacto y configuración
 * para evitar duplicación y facilitar el mantenimiento.
 */

// ============================================================
// DATOS DE CONTACTO
// ============================================================

/** Número de teléfono formateado para WhatsApp (sin espacios ni símbolos) */
export const WHATSAPP_NUMBER = "34638475783"

/** Número de teléfono formateado para mostrar */
export const PHONE_DISPLAY = "+34 638 475 783"

/** Número de teléfono para enlaces tel: */
export const PHONE_LINK = "+34638475783"

/** Email de contacto */
export const EMAIL = "francescmolinamarch@gmail.com"

// ============================================================
// REDES SOCIALES
// ============================================================

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/fran_momarch_wedding?igsh=MWNmbHh5YzV3bWIzMg==",
  facebook: "https://facebook.com/franmolinafotografia",
  youtube: "https://youtube.com/@franmolinafoto",
} as const

// ============================================================
// DATOS DEL NEGOCIO
// ============================================================

export const BUSINESS_INFO = {
  name: "Fran Molina Fotografía",
  shortName: "Fran Molina",
  tagline: "Tu historia en frames eternos",
  description: "Fotografía de bodas premium en Tarragona y Costa Daurada. Capturando momentos eternos con elegancia mediterránea desde 2015.",
  location: {
    city: "Tarragona",
    region: "Costa Daurada",
    country: "ES",
    coordinates: {
      latitude: 41.1189,
      longitude: 1.2445,
    },
  },
  priceRange: "€€€",
  foundedYear: 2015,
} as const

// ============================================================
// URL DEL SITIO
// ============================================================

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://franmolinafotografia.com"

// ============================================================
// UTILIDADES PARA WHATSAPP
// ============================================================

/**
 * Genera un enlace de WhatsApp con mensaje predefinido
 * @param message - Mensaje a enviar (se codificará automáticamente)
 * @returns URL completa de WhatsApp
 */
export function getWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

/**
 * Mensajes predefinidos para diferentes servicios
 */
export const WHATSAPP_MESSAGES = {
  general: "Hola Fran! Me gustaría más información sobre tus servicios de fotografía de bodas.",
  preboda: "Hola Fran, me interesa el servicio de Preboda Foto",
  bodaCompleta: "Hola Fran, me interesa el paquete de Boda Completa",
  postboda: "Hola Fran, me interesa el servicio de Postboda Premium",
} as const

// ============================================================
// SERVICIOS Y PRECIOS
// ============================================================

export const SERVICES = [
  {
    id: "preboda",
    title: "Sesión Preboda",
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
    features: [
      "Cobertura del día completo (10h+)",
      "Fotografía y vídeo cinematográfico",
      "400+ fotos + highlight reel",
    ],
    price: "€2.200",
    priceNumeric: 2200,
    whatsappMessage: WHATSAPP_MESSAGES.bodaCompleta,
  },
  {
    id: "postboda",
    title: "Sesión Postboda",
    features: [
      "Sesión artística post-ceremonia",
      "Ubicación especial Costa Daurada",
      "Álbum de lujo incluido",
    ],
    price: "€400",
    priceNumeric: 400,
    whatsappMessage: WHATSAPP_MESSAGES.postboda,
  },
] as const

// ============================================================
// KEYWORDS SEO
// ============================================================

export const SEO_KEYWORDS = [
  "fotógrafo bodas tarragona",
  "fotografo bodas costa daurada",
  "wedding photographer tarragona",
  "fotografia nupcial premium",
  "reportaje boda tarragona",
  "preboda tarragona",
  "postboda costa daurada",
  "fotógrafo bodas reus",
  "fotógrafo bodas salou",
  "fotografía bodas mediterráneo",
  "videógrafo bodas tarragona",
  "mejor fotógrafo bodas cataluña",
] as const

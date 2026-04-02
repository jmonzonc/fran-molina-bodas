// ─── Tipos ────────────────────────────────────────────────────────────────────

/**
 * `name` es el campo canónico (Schema.org). El componente y el JSON-LD
 * leen del mismo campo — sin duplicados title/name ni features/includes.
 */
export interface ServiceItem {
  id: string;
  name: string;
  subtitle?: string;
  description: string;
  price: string;
  priceNumeric: number;
  features: string[]; // usado en UI y en JSON-LD (itemOffered description)
  whatsappMessage: string;
}

// ─── Contacto ─────────────────────────────────────────────────────────────────

export const PHONE_DISPLAY = "+34 638 475 783";
export const PHONE_LINK = "tel:+34638475783";
export const EMAIL = "francescmolinamarch@gmail.com";
export const SITE_URL = "https://www.franmomarchbodas.es";

// ─── Negocio ──────────────────────────────────────────────────────────────────

export const BUSINESS_INFO = {
  name: "Fran Molina Fotografía",
  legalName: "Fran Molina March",
  tagline: "Tu historia en momentos eternos",
  description:
    "Fotografía y vídeo de bodas premium en Tarragona, Reus, Salou, Cambrils " +
    "y toda la Costa Daurada. Reportajes de preboda, boda completa y postboda " +
    "con estilo natural y elegante mediterráneo desde 2015.",
  location: "Tarragona, Costa Daurada",
  coordinates: {
    lat: 41.1189,
    lng: 1.2445,
  },
  priceRange: "€€€",
  foundingYear: 2015,
} as const;

// ─── Social ───────────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/franmolinafoto",
  facebook: "",
  youtube: "",
} as const;

// ─── SEO ──────────────────────────────────────────────────────────────────────

export const SEO_KEYWORDS: string[] = [
  "fotógrafo bodas Tarragona",
  "videógrafo bodas Tarragona",
  "fotografía bodas Costa Daurada",
  "fotógrafo bodas Reus",
  "fotógrafo bodas Salou",
  "fotógrafo bodas Cambrils",
  "fotógrafo bodas Cataluña",
  "fotógrafo bodas premium Tarragona",
  "reportaje fotográfico boda Tarragona",
  "preboda Tarragona",
  "postboda Costa Daurada",
  "same day edit boda",
  "álbum lujo boda",
  "Fran Molina March fotógrafo",
];

// ─── WhatsApp helper ──────────────────────────────────────────────────────────

export function getWhatsAppLink(message: string): string {
  return `https://wa.me/34638475783?text=${encodeURIComponent(message)}`;
}

// ─── Servicios individuales ───────────────────────────────────────────────────

export const SERVICES: ServiceItem[] = [
  {
    id: "preboda",
    name: "Preboda",
    subtitle: "Sesión de pareja",
    description:
      "Sesión de pareja de 2-3 horas en ubicación elegida. " +
      "50+ fotos editadas profesionalmente y galería online privada.",
    price: "€400",
    priceNumeric: 400,
    features: [
      "Sesión de 2-3 horas en ubicación elegida",
      "50+ fotos editadas profesionalmente",
      "Galería online privada",
    ],
    whatsappMessage: "Hola Fran, me interesa la sesión de Preboda",
  },
  {
    id: "boda-completa",
    name: "Boda Completa",
    subtitle: "Foto + Vídeo",
    description:
      "Cobertura del día completo (10h+) con fotografía y vídeo cinematográfico. " +
      "400+ fotos editadas, highlight reel y galería privada descargable.",
    price: "€2.200",
    priceNumeric: 2200,
    features: [
      "Cobertura del día completo (10h+)",
      "Fotografía y vídeo cinematográfico",
      "400+ fotos editadas + highlight reel",
      "Galería online privada descargable",
    ],
    whatsappMessage:
      "Hola Fran, me interesa la Boda Completa con fotografía y vídeo",
  },
  {
    id: "postboda",
    name: "Postboda",
    subtitle: "Sesión artística",
    description:
      "Sesión artística post-ceremonia en la Costa Daurada con álbum de lujo incluido.",
    price: "€400",
    priceNumeric: 400,
    features: [
      "Sesión artística post-ceremonia",
      "Ubicación especial Costa Daurada",
      "Álbum de lujo incluido",
    ],
    whatsappMessage: "Hola Fran, me interesa la sesión de Postboda",
  },
];

// ─── Pack Completo ────────────────────────────────────────────────────────────

export const PACK_COMPLETO = {
  id: "pack-completo",
  name: "Pack Completo",
  subtitle: "Tu boda de principio a fin",
  description:
    "La experiencia completa: desde la sesión de preboda hasta la postboda, " +
    "con cobertura total del día de la boda y tu Same Day Edit para sorprender a los invitados.",
  price: "€3.000",
  priceNumeric: 3000,
  individualTotal: 3800,
  savings: 800,
  whatsappMessage:
    "Hola Fran, me interesa el Pack Completo (Preboda + Boda + Same Day Edit + Postboda)",
  features: [
    "Sesión de Preboda",
    "Boda Completa — fotografía + vídeo (10h+)",
    "Same Day Edit para proyectar en el banquete",
    "Sesión de Postboda con álbum de lujo",
    "500+ fotos editadas + highlight reel",
    "Galería online privada descargable",
  ],
} as const;

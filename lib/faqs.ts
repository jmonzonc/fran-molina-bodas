import {
  BODA_COMPLETA,
  BUSINESS_INFO,
  DELIVERABLES,
  PACK_COMPLETO,
  PRICE_LIST,
} from "@/lib/config"
import { formatEURProse } from "@/lib/format"

/**
 * Fuente ÚNICA de preguntas frecuentes.
 *
 * Consumida por:
 *   - components/faq-section.tsx  (HTML visible)
 *   - app/layout.tsx              (JSON-LD FAQPage)
 *
 * Antes ambos mantenían copias divergentes: la sección decía "más de 400
 * fotos" y config.ts "900+". Con precios y cifras interpolados desde
 * PRICE_LIST y DELIVERABLES la divergencia es imposible por construcción.
 */
export interface Faq {
  id: string
  question: string
  answer: string
}

const { city, region } = BUSINESS_INFO.location

export const FAQS: Faq[] = [
  {
    id: "precio",
    question: `¿Cuánto cuesta un fotógrafo de bodas en ${city}?`,
    answer: `La sesión de preboda o postboda parte de ${formatEURProse(PRICE_LIST.preboda)}. El reportaje fotográfico de boda arranca en ${formatEURProse(PRICE_LIST.bodaFoto)} y el vídeo cinematográfico en ${formatEURProse(PRICE_LIST.bodaVideo)}. La Boda Completa, con fotografía y vídeo, cuesta desde ${formatEURProse(BODA_COMPLETA.priceNumeric)} frente a los ${formatEURProse(BODA_COMPLETA.individualTotal)} que suman ambos servicios por separado: ${BODA_COMPLETA.savingsLabel} de ahorro. El Pack Completo (preboda + boda completa + Same Day Edit + postboda) está en ${PACK_COMPLETO.price}, frente a ${PACK_COMPLETO.individualTotalLabel} contratando cada servicio por separado, con ${PACK_COMPLETO.savingsLabel} de ahorro. Son precios orientativos: personalizamos cada propuesta según la ubicación y los detalles de vuestra boda en ${city}, Reus, Salou, Cambrils o cualquier punto de la ${region}.`,
  },
  {
    id: "antelacion",
    question: "¿Con cuánta antelación debemos reservar?",
    answer: `Recomendamos entre ${DELIVERABLES.bookingMonthsMin} y ${DELIVERABLES.bookingMonthsMax} meses, sobre todo para bodas de primavera (abril–junio) y otoño (septiembre–octubre), las temporadas más demandadas en ${city} y la ${region}. Para 2026 y 2027 la disponibilidad es muy limitada. La reserva se confirma con la firma del contrato y un depósito del ${DELIVERABLES.depositPercent} %.`,
  },
  {
    id: "cobertura",
    question: `¿Cubrís bodas fuera de ${city} y la ${region}?`,
    answer: `Sí. Trabajamos en toda Cataluña: ${city}, Reus, Salou, Cambrils, Valls, Tortosa, Barcelona, Girona, Sitges y Lleida. También viajamos a otras comunidades y al extranjero para bodas destino. Consultadnos disponibilidad y condiciones de desplazamiento sin compromiso.`,
  },
  {
    id: "boda-completa",
    question: "¿Qué incluye el paquete de Boda Completa?",
    answer: `Cubre el día entero, desde los preparativos hasta el baile (${DELIVERABLES.coverageHours} horas o más). Incluye fotografía y vídeo cinematográfico en alta resolución, más de ${DELIVERABLES.photosWedding} fotos editadas profesionalmente en galería online privada y un highlight reel de ${DELIVERABLES.highlightMinutesMin}–${DELIVERABLES.highlightMinutesMax} minutos. Contratada como paquete cuesta ${BODA_COMPLETA.price} en lugar de los ${BODA_COMPLETA.individualTotalLabel} que suman la cobertura de foto y la de vídeo por separado. Se puede añadir el Same Day Edit para proyectar durante el banquete, o combinarlo todo en el Pack Completo, con un ahorro total de ${PACK_COMPLETO.savingsLabel}.`,
  },
  {
    id: "plazos",
    question: "¿Cuánto tardáis en entregar las fotos?",
    answer: `Recibiréis un avance de 30–50 fotos en las primeras ${DELIVERABLES.previewHours} horas. El reportaje completo se entrega entre ${DELIVERABLES.galleryWeeksMin} y ${DELIVERABLES.galleryWeeksMax} semanas después de la boda, en galería online privada con descarga en alta resolución, en color y blanco y negro, sin coste adicional por compartirla.`,
  },
  {
    id: "same-day-edit",
    question: "¿Qué es el Same Day Edit?",
    answer: `Es un vídeo cinematográfico que editamos el mismo día de la boda para proyectarlo durante el banquete. Recoge los mejores momentos de los preparativos y la ceremonia en un montaje de ${DELIVERABLES.highlightMinutesMin}–${DELIVERABLES.highlightMinutesMax} minutos. Está disponible como servicio individual por ${formatEURProse(PRICE_LIST.sameDayEdit)} o incluido en el Pack Completo.`,
  },
]

/** JSON-LD FAQPage — usar en app/layout.tsx, nunca duplicar el texto */
export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

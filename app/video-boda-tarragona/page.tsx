import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  SITE_URL,
  BUSINESS_INFO,
  PHONE_DISPLAY,
  PHONE_LINK,
  getWhatsAppLink,
} from "@/lib/config"
import { Footer } from "@/components/footer"

// ─── METADATA ────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Vídeo de Bodas en Tarragona | Fran Molina — Same Day Edit y Cine",
  description:
    "Vídeo de bodas en Tarragona · Same day edit, highlight y cine. Fran Molina captura cada momento con un estilo cinematográfico único. Pide presupuesto.",
  alternates: {
    canonical: `${SITE_URL}/video-boda-tarragona`,
  },
  openGraph: {
    title: "Vídeo de Bodas en Tarragona | Fran Molina — Same Day Edit y Cine",
    description:
      "Videógrafo de bodas en Tarragona y Costa Daurada. Same day edit, highlight reel y vídeo cinematográfico. Estilo natural y elegante.",
    url: `${SITE_URL}/video-boda-tarragona`,
    type: "website",
    locale: "es_ES",
    siteName: BUSINESS_INFO.name,
    images: [
      {
        url: `${SITE_URL}/images/og/og-video-boda-tarragona.jpg`,
        width: 1200,
        height: 630,
        alt: "Vídeo de bodas en Tarragona — Fran Molina",
      },
    ],
  },
}

// ─── JSON-LD ─────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vídeo de Bodas en Tarragona",
  description:
    "Servicio de videografía de bodas premium en Tarragona y la Costa Daurada. Same day edit, highlight reel y vídeo cinematográfico con estilo natural y narrativo.",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "City", name: "Tarragona" },
    { "@type": "AdministrativeArea", name: "Reus" },
    { "@type": "AdministrativeArea", name: "Salou" },
    { "@type": "AdministrativeArea", name: "Cambrils" },
    { "@type": "AdministrativeArea", name: "Valls" },
    { "@type": "AdministrativeArea", name: "Tortosa" },
  ],
  serviceType: "Videografía de bodas",
  offers: [
    {
      "@type": "Offer",
      name: "Same Day Edit",
      description: "Montaje de 3-5 minutos editado el mismo día de la boda para proyectar en el banquete.",
      price: "400",
      priceCurrency: "EUR",
    },
    {
      "@type": "Offer",
      name: "Boda — Solo vídeo",
      description: "Vídeo cinematográfico del día completo con highlight reel.",
      price: "1400",
      priceCurrency: "EUR",
    },
    {
      "@type": "Offer",
      name: "Boda Completa (foto + vídeo)",
      description: "Cobertura completa con fotografía y vídeo cinematográfico.",
      price: "2200",
      priceCurrency: "EUR",
    },
  ],
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
    {
      "@type": "ListItem",
      position: 2,
      name: "Vídeo de Bodas en Tarragona",
      item: `${SITE_URL}/video-boda-tarragona`,
    },
  ],
}

const VIDEO_FAQS = [
  {
    question: "¿Cuánto dura el vídeo final de boda?",
    answer:
      "Depende del formato contratado. El same day edit dura entre 3 y 5 minutos. El highlight reel, entre 5 y 8. El vídeo cinematográfico completo puede alcanzar los 30-40 minutos. Siempre acordamos la duración antes de la boda para que no haya sorpresas.",
  },
  {
    question: "¿Cuál es el plazo de entrega del vídeo?",
    answer:
      "El same day edit se entrega el mismo día de la boda. El highlight y el cinematográfico tienen un plazo de entrega de 8 a 12 semanas, dependiendo de la temporada. Recibiréis un enlace de descarga en alta resolución.",
  },
  {
    question: "¿Qué diferencia hay entre el highlight y el cinematográfico?",
    answer:
      "El highlight es una pieza corta y dinámica que resume el día en pocos minutos, pensada para compartir. El cinematográfico es un documental largo que respeta el orden cronológico y conserva momentos completos como votos y discursos. Son complementarios: muchas parejas contratan ambos.",
  },
  {
    question: "¿Se puede contratar solo vídeo, sin fotografía?",
    answer:
      "Sí. Aunque el pack completo (foto + vídeo) ofrece la mejor relación calidad-precio y una coordinación más fluida, el servicio de vídeo se puede contratar de forma independiente sin ningún problema.",
  },
  {
    question: "¿Cubrís bodas en toda la provincia de Tarragona?",
    answer:
      "Sí. Trabajo habitualmente en Tarragona ciudad, Reus, Salou, Cambrils, Valls, Tortosa y toda la Costa Daurada. También cubro bodas en Barcelona y Girona. El desplazamiento dentro de la provincia no tiene coste adicional.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: VIDEO_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

// ─── VIDEO SERVICES DATA ─────────────────────────────────────

const VIDEO_SERVICES = [
  {
    name: "Same Day Edit",
    description:
      "Un montaje de 3-5 minutos editado durante la propia boda y proyectado al final de la celebración. Se graba desde los preparativos hasta la ceremonia y el cóctel, y se entrega listo para proyectar antes o durante la cena. El impacto en los invitados es inmediato — es el momento más comentado de la noche.",
    price: "€400",
  },
  {
    name: "Highlight Reel",
    description:
      "Pieza de 5-8 minutos que resume los mejores momentos de toda la jornada: preparativos, ceremonia, banquete y fiesta. Editada con música licenciada, corrección de color cinematográfica y ritmo dinámico. Es el vídeo que compartiréis con familia y amigos y el que más veces volveréis a ver.",
    price: "Incluido en Boda vídeo",
  },
  {
    name: "Vídeo Cinematográfico (Largometraje)",
    description:
      "Documental completo de 20-40 minutos que recoge la boda íntegra con una narrativa lineal. Incluye los votos completos, los discursos, los momentos espontáneos y las escenas que en un highlight se pierden. Ideal para quienes quieren revivir el día entero, no solo un resumen.",
    price: "Consultar",
  },
]

// ─── PAGE ────────────────────────────────────────────────────

export default function VideoBodaTarragona() {
  const whatsappVideo = getWhatsAppLink(
    "Hola Fran, me interesa información sobre vídeo de bodas en Tarragona."
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <main itemScope itemType="https://schema.org/WebPage">
        {/* ─── HERO ─── */}
        <section className="relative h-[60vh] w-full overflow-hidden bg-[#111827]">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
          <header className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-serif text-white/95 leading-[1.1] mb-6 drop-shadow-2xl text-balance">
                Vídeo de Bodas en Tarragona
              </h1>
              <p className="text-xl md:text-2xl text-[#d4a574]/90 font-medium mb-10">
                <strong>{BUSINESS_INFO.shortName}</strong> — Same day edit,
                highlight y cine en la Costa Daurada
              </p>
              <a
                href="#contacto-video"
                className="inline-block bg-[#d4a574] hover:bg-[#d4a574]/90 text-[#1a365d] px-10 py-5 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 uppercase tracking-wide"
              >
                Pide presupuesto
              </a>
            </div>
          </header>
        </section>

        {/* ─── INTRO ─── */}
        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8 text-center">
              El vídeo que te devuelve la emoción
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Hay momentos en una boda que una fotografía no puede atrapar: la
                voz que se quiebra en los votos, la risa nerviosa antes del
                primer baile, el murmullo de los invitados al brindar. El{" "}
                <strong>vídeo de boda</strong> existe para eso — para devolverte
                el movimiento, el sonido y la emoción tal como los viviste.
              </p>
              <p>
                Trabajo en Tarragona, la Costa Daurada y toda la provincia con
                un enfoque cinematográfico que huye del vídeo-reportaje
                convencional. Cada pieza se edita con color profesional, audio
                limpio y una narrativa que respeta el ritmo real de tu día, sin
                recreaciones ni poses forzadas.
              </p>
              <p>
                Si ya has visto mi trabajo en fotografía, el vídeo es la otra
                mitad de la historia. Y si buscas ambos servicios, el pack de
                boda completa (foto + vídeo) está pensado para cubrir todo sin
                duplicar equipos ni coordinaciones.
              </p>
            </div>

            <nav
              className="mt-10 text-sm text-muted-foreground"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-accent transition-colors">
                Inicio
              </Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">
                Vídeo de Bodas en Tarragona
              </span>
            </nav>
          </div>
        </section>

        {/* ─── SERVICIOS VÍDEO ─── */}
        <section className="py-20 bg-gradient-to-b from-secondary/20 to-transparent">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-center">
              Formatos de Vídeo de Boda
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-16">
              Tres formatos diferentes para contar vuestra historia en
              movimiento.
            </p>

            <div className="space-y-8">
              {VIDEO_SERVICES.map((service) => (
                <article
                  key={service.name}
                  className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-serif text-primary">
                      {service.name}
                    </h3>
                    <span className="text-lg font-bold text-accent whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/#servicios"
                className="inline-block bg-accent/10 text-accent border-2 border-accent/30 px-10 py-4 rounded-xl font-semibold hover:bg-accent hover:text-[#1a365d] transition-all duration-300"
              >
                Ver todos los packs (foto + vídeo)
              </Link>
            </div>
          </div>
        </section>

        {/* ─── FAQS ─── */}
        <section
          className="py-24 bg-background"
          aria-label="Preguntas frecuentes sobre vídeo de bodas en Tarragona"
        >
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-center">
              Preguntas Frecuentes — Vídeo de Bodas
            </h2>
            <p className="text-muted-foreground text-lg text-center mb-12">
              Todo lo que necesitas saber sobre el servicio de vídeo de bodas en
              Tarragona
            </p>
            <div className="space-y-6">
              {VIDEO_FAQS.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 group open:shadow-lg transition-shadow"
                >
                  <summary className="font-medium text-foreground cursor-pointer list-none flex items-center justify-between">
                    {faq.question}
                    <span className="ml-4 text-accent transition-transform group-open:rotate-45 text-xl">
                      +
                    </span>
                  </summary>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section
          id="contacto-video"
          className="py-24 bg-gradient-to-b from-[#111827] to-gray-900"
        >
          <div className="max-w-lg mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              ¿Quieres vídeo para tu boda?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Cuéntame sobre tu boda y te envío una propuesta personalizada en
              menos de 24 horas. Sin compromiso.
            </p>
            <a
              href={whatsappVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white py-5 px-10 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(34,197,94,0.4)] uppercase tracking-wide transition-all duration-300"
              aria-label="Contactar por WhatsApp para vídeo de boda"
            >
              💬 Chatear por WhatsApp
            </a>
            <p className="mt-6 text-white/50 text-sm">
              o llámame al{" "}
              <a
                href={PHONE_LINK}
                className="text-accent hover:text-accent/80 transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
            </p>
            <nav className="mt-12 pt-8 border-t border-white/10 text-white/50 text-sm space-y-2">
              <p>Servicios de fotografía:</p>
              <div className="flex justify-center gap-6">
                <Link
                  href="/fotografo-bodas-tarragona"
                  className="text-accent/70 hover:text-accent transition-colors"
                >
                  Tarragona
                </Link>
                <Link
                  href="/fotografo-bodas-barcelona"
                  className="text-accent/70 hover:text-accent transition-colors"
                >
                  Barcelona
                </Link>
                <Link
                  href="/fotografo-bodas-girona"
                  className="text-accent/70 hover:text-accent transition-colors"
                >
                  Girona
                </Link>
              </div>
            </nav>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

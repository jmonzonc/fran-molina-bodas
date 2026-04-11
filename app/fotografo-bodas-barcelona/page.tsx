import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  SITE_URL,
  BUSINESS_INFO,
  SERVICES,
  PHONE_DISPLAY,
  getWhatsAppLink,
} from "@/lib/config"
import { Footer } from "@/components/footer"

// ─── METADATA ────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Fotógrafo de Bodas en Barcelona | Fran Molina — Foto y Vídeo",
  description:
    "Fotógrafo de bodas en Barcelona. Reportajes de preboda, boda completa y postboda con estilo natural y cinematográfico. Desplazamiento incluido. Presupuesto sin compromiso.",
  alternates: {
    canonical: `${SITE_URL}/fotografo-bodas-barcelona`,
  },
  openGraph: {
    title: "Fotógrafo de Bodas en Barcelona | Fran Molina — Foto y Vídeo",
    description:
      "Fotógrafo y videógrafo de bodas en Barcelona. Estilo natural, elegante y cinematográfico. Pack completo desde 3.000 €.",
    url: `${SITE_URL}/fotografo-bodas-barcelona`,
    type: "website",
    locale: "es_ES",
    siteName: BUSINESS_INFO.name,
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Fotógrafo de bodas en Barcelona — Fran Molina",
      },
    ],
  },
}

// ─── JSON-LD ─────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fotografía y Vídeo de Bodas en Barcelona",
  description:
    "Servicio de fotografía y videografía de bodas premium en Barcelona. Reportajes de preboda, boda completa, postboda y same day edit con estilo natural y cinematográfico.",
  provider: { "@id": `${SITE_URL}/#business` },
 areaServed: [
  { "@type": "City", name: "Barcelona" },
  { "@type": "AdministrativeArea", name: "Maresme" },
  { "@type": "AdministrativeArea", name: "Vallès" },
  { "@type": "AdministrativeArea", name: "Penedès" },
  { "@type": "AdministrativeArea", name: "Garraf" },
  { "@type": "AdministrativeArea", name: "Baix Llobregat" },
],
  serviceType: "Fotografía de bodas",
  offers: SERVICES.map((s) => ({
    "@type": "Offer",
    name: s.name,
    description: s.description,
    price: String(s.priceNumeric),
    priceCurrency: "EUR",
  })),
}

const BARCELONA_FAQS = [
  {
    question: "¿Cuánto cuesta un fotógrafo de bodas en Barcelona?",
    answer:
      "Nuestros servicios en Barcelona parten desde 400 € para una sesión de preboda o postboda. El reportaje fotográfico de boda completa desde 1.200 €, el vídeo cinematográfico desde 1.400 € y la Boda Completa (foto + vídeo) desde 2.200 €. El Pack Completo con preboda, boda, same day edit y postboda desde 3.000 €. El desplazamiento desde Tarragona a Barcelona está incluido.",
  },
  {
    question: "¿Cuáles son los mejores venues para bodas en Barcelona?",
    answer:
      "Barcelona ofrece venues extraordinarios: masías como Can Riera de la Pineda, Torre Marimon o Can Ribas, fincas con vistas al mar como Masia Vilassar, espacios urbanos como el Hotel W o el Palau de Pedralbes, y cavas del Penedès como Codorníu o Segura Viudas. Hemos trabajado en muchos de ellos y podemos asesorarte sobre la mejor luz y localizaciones para las fotos.",
  },
  {
    question: "¿Necesito permisos especiales para fotos de boda en Barcelona?",
    answer:
      "Para sesiones en espacios públicos emblemáticos como el Parc Güell, la Barceloneta o el Born es recomendable solicitar permiso al Ayuntamiento, especialmente si se usan trípodes o equipos de iluminación. En masías y venues privados el permiso está incluido en el alquiler. Nosotros nos encargamos de gestionar los permisos necesarios.",
  },
  {
    question: "¿Cobráis desplazamiento de Tarragona a Barcelona?",
    answer:
      "No. El desplazamiento a Barcelona y toda la provincia está incluido en el precio del servicio. También cubrimos bodas en el Maresme, Vallès, Baix Llobregat, Penedès y Garraf sin coste adicional.",
  },
  {
    question: "¿Cuáles son las mejores horas de luz para fotos de boda en Barcelona?",
    answer:
      "La hora dorada en Barcelona varía según la temporada: en verano (junio–agosto) entre las 19:30 y 21:00, y en otoño-primavera entre las 17:30 y 19:00. Para sesiones en la playa o con vistas al mar, recomendamos atardeceres. Para jardines y masías con arboleda, la luz filtrada del mediodía también funciona muy bien.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: BARCELONA_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

// ─── PORTFOLIO BARCELONA ─────────────────────────────────────

const BARCELONA_PORTFOLIO = [
  {
    id: 5,
    image:
      "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/1.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzEuSlBHIiwiaWF0IjoxNzc0MzgwMzI0LCJleHAiOjIwODk3NDAzMjR9.I5suMDUXQUM4GkX5TDRsbrmN0Z9DXXa3wzN2WjrgHCI",
    title: "Boda en Castellardal, Barcelona",
    alt: "Ramo de novia en boda en Castellardal, Barcelona — fotógrafo de bodas Barcelona",
  },
  {
    id: 7,
    image:
      "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/AN4A5940.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzL0FONEE1OTQwLkpQRyIsImlhdCI6MTc3NDM4MDI1OSwiZXhwIjoyMDg5NzQwMjU5fQ.-BgV8OUWYqlnNJfwpaK467zNhcDwsWfvBvCvxD1NZYs",
    title: "Preboda en Barcelona",
    alt: "Sesión de preboda romántica en Barcelona — fotografía de bodas Barcelona",
  },
]

// ─── PAGE ────────────────────────────────────────────────────

export default function FotografoBodasBarcelona() {
  const whatsappBarcelona = getWhatsAppLink(
    "Hola Fran, me interesa información sobre fotografía de bodas en Barcelona."
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

      <main itemScope itemType="https://schema.org/WebPage">
        {/* ─── HERO ─── */}
        <section className="relative h-[70vh] w-full overflow-hidden">
          <Image
            src={BARCELONA_PORTFOLIO[0].image}
            alt="Fotógrafo de bodas en Barcelona — Fran Molina"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
          <header className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-serif text-white/95 leading-[1.1] mb-6 drop-shadow-2xl text-balance">
                Fotógrafo de Bodas en Barcelona
              </h1>
              <p className="text-xl md:text-2xl text-[#d4a574]/90 font-medium mb-10">
                <strong>{BUSINESS_INFO.shortName}</strong> — Reportajes de boda
                con alma mediterránea
              </p>
              <a
                href="#contacto-barcelona"
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
              Tu boda en Barcelona, contada con emoción
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Barcelona es una de las ciudades más deseadas para celebrar una
                boda. Desde masías con encanto en el Penedès hasta venues con
                vistas al Mediterráneo, cada rincón de Barcelona ofrece un
                escenario único para tu historia de amor. Como{" "}
                <strong>fotógrafo de bodas en Barcelona</strong>, capturo la
                esencia de tu día con un estilo natural, cinematográfico y
                cuidado hasta el último detalle.
              </p>
              <p>
                Con más de {new Date().getFullYear() - BUSINESS_INFO.foundedYear}{" "}
                años de experiencia fotografiando bodas en Cataluña, conozco la
                luz, los tiempos y los venues de Barcelona como pocos. Trabajo
                con parejas que buscan un reportaje auténtico, sin poses
                forzadas, donde la emoción sea la protagonista.
              </p>
              <p>
                Cada boda es irrepetible. Por eso ofrezco un servicio
                personalizado que se adapta a tu estilo y a los espacios que
                habéis elegido. Desde los preparativos hasta el último baile,
                estaré ahí para que no se pierda ningún momento.
              </p>
            </div>

            <nav className="mt-10 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-accent transition-colors">
                Inicio
              </Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Fotógrafo de Bodas en Barcelona</span>
            </nav>
          </div>
        </section>

        {/* ─── PORTFOLIO ─── */}
        <section className="py-20 px-6 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary">
              Bodas en Barcelona
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {BARCELONA_PORTFOLIO.map((item) => (
                <article
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
                >
                  <figure className="relative h-80 md:h-96">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </figure>
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white font-medium text-lg">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
            <p className="text-center mt-10 text-muted-foreground">
              <Link
                href="/#portfolio"
                className="text-accent hover:text-accent/80 font-medium underline underline-offset-4 transition-colors"
              >
                Ver portfolio completo →
              </Link>
            </p>
          </div>
        </section>

        {/* ─── SERVICIOS ─── */}
        <section className="py-20 bg-gradient-to-b from-secondary/20 to-transparent">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-center">
              Servicios de Fotografía de Bodas en Barcelona
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-16">
              Todos los servicios incluyen desplazamiento a Barcelona y provincia sin coste adicional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {SERVICES.map((service) => (
                <article
                  key={service.id}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col"
                >
                  <h3 className="text-2xl font-serif text-primary mb-2">{service.name}</h3>
                  {service.subtitle && (
                    <p className="text-accent text-sm font-medium mb-4">{service.subtitle}</p>
                  )}
                  <ul className="flex-grow space-y-3 text-gray-700 leading-relaxed mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-accent mt-1" aria-hidden="true">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <div className="text-center mb-6">
                      <span className="text-2xl font-bold text-accent">Desde {service.price}</span>
                    </div>
                    <a
                      href={getWhatsAppLink(service.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-accent/10 text-accent border-2 border-accent/30 px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-[#1a365d] transition-all duration-300"
                    >
                      Reservar
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQS ─── */}
        <section className="py-24 bg-background" aria-label="Preguntas frecuentes sobre fotografía de bodas en Barcelona">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-center">
              Preguntas Frecuentes — Bodas en Barcelona
            </h2>
            <p className="text-muted-foreground text-lg text-center mb-12">
              Todo lo que necesitas saber sobre contratar un fotógrafo de bodas en Barcelona
            </p>
            <div className="space-y-6">
              {BARCELONA_FAQS.map((faq, index) => (
                <details
                  key={index}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 group open:shadow-lg transition-shadow"
                >
                  <summary className="font-medium text-foreground cursor-pointer list-none flex items-center justify-between">
                    {faq.question}
                    <span className="ml-4 text-accent transition-transform group-open:rotate-45 text-xl">+</span>
                  </summary>
                  <p className="text-muted-foreground mt-4 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section id="contacto-barcelona" className="py-24 bg-gradient-to-b from-[#111827] to-gray-900">
          <div className="max-w-lg mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">¿Te casas en Barcelona?</h2>
            <p className="text-white/70 mb-10 text-lg">
              Cuéntame sobre tu boda y te envío una propuesta personalizada en menos de 24 horas. Sin compromiso.
            </p>
            <a
              href={whatsappBarcelona}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white py-5 px-10 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(34,197,94,0.4)] uppercase tracking-wide transition-all duration-300"
              aria-label="Contactar por WhatsApp para boda en Barcelona"
            >
              💬 Chatear por WhatsApp
            </a>
            <p className="mt-6 text-white/50 text-sm">
              o llámame al{" "}
              <a href={`tel:${PHONE_DISPLAY.replace(/\s/g, "")}`} className="text-accent hover:text-accent/80 transition-colors">
                {PHONE_DISPLAY}
              </a>
            </p>
            <nav className="mt-12 pt-8 border-t border-white/10 text-white/50 text-sm space-y-2">
              <p>También trabajo en:</p>
              <div className="flex justify-center gap-6">
                <Link href="/fotografo-bodas-tarragona" className="text-accent/70 hover:text-accent transition-colors">
                  Tarragona
                </Link>
                <Link href="/fotografo-bodas-girona" className="text-accent/70 hover:text-accent transition-colors">
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

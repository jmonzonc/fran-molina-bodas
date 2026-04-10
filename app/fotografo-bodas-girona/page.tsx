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
  title: "Fotógrafo de Bodas en Girona | Fran Molina — Foto y Vídeo",
  description:
    "Fotógrafo de bodas en Girona y Costa Brava. Reportajes de preboda, boda completa y postboda con estilo natural y cinematográfico. Presupuesto sin compromiso.",
  alternates: {
    canonical: `${SITE_URL}/fotografo-bodas-girona`,
  },
  openGraph: {
    title: "Fotógrafo de Bodas en Girona | Fran Molina — Foto y Vídeo",
    description:
      "Fotógrafo y videógrafo de bodas en Girona y Costa Brava. Estilo natural, elegante y cinematográfico. Pack completo desde 3.000 €.",
    url: `${SITE_URL}/fotografo-bodas-girona`,
    type: "website",
    locale: "es_ES",
    siteName: BUSINESS_INFO.name,
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Fotógrafo de bodas en Girona — Fran Molina",
      },
    ],
  },
}

// ─── JSON-LD ─────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fotografía y Vídeo de Bodas en Girona",
  description:
    "Servicio de fotografía y videografía de bodas premium en Girona y la Costa Brava. Reportajes de preboda, boda completa, postboda y same day edit con estilo natural y cinematográfico.",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: {
    "@type": "City",
    name: "Girona",
    sameAs: "https://es.wikipedia.org/wiki/Gerona",
  },
  serviceType: "Fotografía de bodas",
  offers: SERVICES.map((s) => ({
    "@type": "Offer",
    name: s.name,
    description: s.description,
    price: String(s.priceNumeric),
    priceCurrency: "EUR",
  })),
}

const GIRONA_FAQS = [
  {
    question: "¿Cuánto cuesta un fotógrafo de bodas en Girona?",
    answer:
      "Nuestros servicios en Girona parten desde 400 € para una sesión de preboda o postboda. El reportaje fotográfico de boda completa desde 1.200 €, el vídeo cinematográfico desde 1.400 € y la Boda Completa (foto + vídeo) desde 2.200 €. El Pack Completo con preboda, boda, same day edit y postboda desde 3.000 €. El desplazamiento a Girona está incluido.",
  },
  {
    question: "¿Cuáles son los mejores venues para bodas en Girona?",
    answer:
      "Girona y la Costa Brava ofrecen venues de ensueño: masías como Can Riera de la Pineda, Mas Torroella o Castell d'Empordà, espacios frente al mar en Cadaqués, Begur o Calella de Palafrugell, y el casco antiguo de Girona con la Catedral y las casas del río Onyar como telón de fondo. He fotografiado bodas en muchos de estos espacios y puedo asesorarte sobre las mejores localizaciones.",
  },
  {
    question: "¿Necesito permisos especiales para fotos de boda en Girona?",
    answer:
      "Para sesiones en el Barri Vell de Girona, los jardines de la Devesa o espacios del Parc Natural del Cap de Creus es recomendable consultar con el ayuntamiento si se usan equipos de iluminación profesional. En masías y venues privados el permiso está incluido. Nos encargamos de gestionar los permisos necesarios.",
  },
  {
    question: "¿Cobráis desplazamiento de Tarragona a Girona?",
    answer:
      "No. El desplazamiento a Girona y toda la provincia está incluido en el precio del servicio. Cubrimos bodas en toda la Costa Brava, el Empordà, la Garrotxa, el Gironès y el Baix Empordà sin coste adicional.",
  },
  {
    question: "¿Cuáles son las mejores horas de luz para fotos de boda en Girona?",
    answer:
      "La hora dorada en Girona varía según la temporada: en verano (junio–agosto) entre las 19:30 y 21:00, y en otoño-primavera entre las 17:30 y 19:00. Para sesiones en calas de la Costa Brava recomendamos atardeceres orientados al este para reflejos en el agua. En masías entre bosques como Can Riera de la Pineda, la luz filtrada de primera hora de la tarde es espectacular.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GIRONA_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

// ─── PORTFOLIO GIRONA ────────────────────────────────────────

const GIRONA_PORTFOLIO = [
  {
    id: 1,
    image:
      "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_09_27%20BODA%20BERTA&SANTI%20006384.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDlfMjcgQk9EQSBCRVJUQSZTQU5USSAwMDYzODQuSlBHIiwiaWF0IjoxNzc0MzgwMDcwLCJleHAiOjIwODk3NDAwNzB9.Qysf3DS2sKpoW13L03lk5vRWkU7yrM9W31ddpWk5Ru0",
    title: "Boda en Girona — Can Riera de la Pineda",
    alt: "Pareja con ramo en el bosque en Girona — fotógrafo de bodas Girona",
  },
  {
    id: 6,
    image:
      "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_09_27%20BODA%20BERTA&SANTI%20006030.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDlfMjcgQk9EQSBCRVJUQSZTQU5USSAwMDYwMzAuSlBHIiwiaWF0IjoxNzc0MzgwMDU3LCJleHAiOjIwODk3NDAwNTd9.sPL31GapjedhVsHE3t-NvbVIPb1bRqEhknvrs-Vsgt4",
    title: "Boda en Girona — Celebración",
    alt: "Celebración de boda en Can Riera de la Pineda, Girona — Fran Molina fotografía",
  },
  {
    id: 9,
    image:
      "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/01.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzAxLkpQRyIsImlhdCI6MTc3NDM3OTk3MiwiZXhwIjoyMDg5NzM5OTcyfQ.M4cDRSp2dVKMnBXHJ08gnN2kpmh9epipGm6_XBTAAfw",
    title: "Boda en Girona — Llegada",
    alt: "Pareja llegando a la ceremonia en Girona — fotografía de bodas",
  },
  {
    id: 12,
    image:
      "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_09_27%20BODA%20BERTA&SANTI%20008629.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDlfMjcgQk9EQSBCRVJUQSZTQU5USSAwMDg2MjkuanBnIiwiaWF0IjoxNzc0MzgwMDgzLCJleHAiOjIwODk3NDAwODN9.otGhnz3pnGU0hihAJH8NBH6CBac4buPdz9NLKrV14G8",
    title: "Preboda en Girona",
    alt: "Sesión de preboda en Girona — fotografía natural para parejas",
  },
]

// ─── PAGE ────────────────────────────────────────────────────

export default function FotografoBodasGirona() {
  const whatsappGirona = getWhatsAppLink(
    "Hola Fran, me interesa información sobre fotografía de bodas en Girona."
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
            src={GIRONA_PORTFOLIO[0].image}
            alt="Fotógrafo de bodas en Girona — Fran Molina"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
          <header className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-serif text-white/95 leading-[1.1] mb-6 drop-shadow-2xl text-balance">
                Fotógrafo de Bodas en Girona
              </h1>
              <p className="text-xl md:text-2xl text-[#d4a574]/90 font-medium mb-10">
                <strong>{BUSINESS_INFO.shortName}</strong> — Reportajes de boda
                entre masías, bosques y la Costa Brava
              </p>
              <a
                href="#contacto-girona"
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
              Tu boda en Girona, contada con emoción
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Girona y la Costa Brava son un paraíso para las bodas: masías
                centenarias rodeadas de bosques, calas de aguas turquesas,
                pueblos medievales con siglos de historia y una luz que solo
                existe en el Empordà. Como{" "}
                <strong>fotógrafo de bodas en Girona</strong>, llevo más de{" "}
                {new Date().getFullYear() - BUSINESS_INFO.foundedYear} años
                capturando la magia de cada celebración con un estilo natural,
                cinematográfico y lleno de emoción.
              </p>
              <p>
                He fotografiado bodas en masías como Can Riera de la Pineda, en
                venues con vistas al mar en Begur y Cadaqués, y en el casco
                antiguo de Girona con la Catedral como telón de fondo. Ese
                conocimiento de la zona — saber dónde cae la luz a cada hora,
                qué rincones son los más fotogénicos — marca la diferencia en
                tus fotos.
              </p>
              <p>
                Trabajo con parejas que buscan un reportaje auténtico, sin poses
                forzadas, donde la complicidad y la emoción sean las
                protagonistas. Desde los preparativos hasta el último baile,
                estaré ahí para inmortalizar cada instante.
              </p>
            </div>

            <nav className="mt-10 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-accent transition-colors">
                Inicio
              </Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Fotógrafo de Bodas en Girona</span>
            </nav>
          </div>
        </section>

        {/* ─── PORTFOLIO ─── */}
        <section className="py-20 px-6 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary">
              Bodas en Girona y Costa Brava
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {GIRONA_PORTFOLIO.map((item) => (
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
              Servicios de Fotografía de Bodas en Girona
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-16">
              Cobertura completa en Girona, Costa Brava, Empordà, Garrotxa y toda la provincia sin coste adicional de desplazamiento.
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
        <section className="py-24 bg-background" aria-label="Preguntas frecuentes sobre fotografía de bodas en Girona">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-center">
              Preguntas Frecuentes — Bodas en Girona
            </h2>
            <p className="text-muted-foreground text-lg text-center mb-12">
              Todo lo que necesitas saber sobre contratar un fotógrafo de bodas en Girona y la Costa Brava
            </p>
            <div className="space-y-6">
              {GIRONA_FAQS.map((faq, index) => (
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
        <section id="contacto-girona" className="py-24 bg-gradient-to-b from-[#111827] to-gray-900">
          <div className="max-w-lg mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">¿Te casas en Girona?</h2>
            <p className="text-white/70 mb-10 text-lg">
              Cuéntame sobre tu boda y te envío una propuesta personalizada en menos de 24 horas. Sin compromiso.
            </p>
            <a
              href={whatsappGirona}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white py-5 px-10 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(34,197,94,0.4)] uppercase tracking-wide transition-all duration-300"
              aria-label="Contactar por WhatsApp para boda en Girona"
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
                <Link href="/fotografo-bodas-barcelona" className="text-accent/70 hover:text-accent transition-colors">
                  Barcelona
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

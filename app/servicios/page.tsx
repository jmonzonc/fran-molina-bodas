import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  SITE_URL,
  BUSINESS_INFO,
  SERVICES,
  PACK_COMPLETO,
  PHONE_DISPLAY,
  PHONE_LINK,
  getWhatsAppLink,
} from "@/lib/config"
import { Footer } from "@/components/footer"

// ─── METADATA ────────────────────────────────────────────────

export const metadata: Metadata = {
  title:
    "Servicios de Fotografía y Vídeo de Bodas | Fran Molina — Tarragona",
  description:
    "Servicios de fotografía y vídeo de bodas en Tarragona: preboda, boda completa, same day edit y postboda. Descubre cómo trabajamos.",
  alternates: {
    canonical: `${SITE_URL}/servicios`,
  },
  openGraph: {
    title:
      "Servicios de Fotografía y Vídeo de Bodas | Fran Molina — Tarragona",
    description:
      "Preboda, boda completa, same day edit y postboda. Conoce nuestro proceso y cada servicio en detalle. Pack completo desde 3.300 €.",
    url: `${SITE_URL}/servicios`,
    type: "website",
    locale: "es_ES",
    siteName: BUSINESS_INFO.name,
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Servicios de fotografía de bodas — Fran Molina",
      },
    ],
  },
}

// ─── JSON-LD ─────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servicios de Fotografía y Vídeo de Bodas — Fran Molina",
  description:
    "Servicios profesionales de fotografía y videografía de bodas en Tarragona y Cataluña. Preboda, boda completa con foto y vídeo, same day edit, postboda y pack completo.",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Cataluña",
  },
  serviceType: "Fotografía y videografía de bodas",
  offers: [
    ...SERVICES.map((s) => ({
      "@type": "Offer",
      name: s.name,
      description: s.description,
      price: String(s.priceNumeric),
      priceCurrency: "EUR",
    })),
    {
      "@type": "Offer",
      name: PACK_COMPLETO.name,
      description: PACK_COMPLETO.description,
      price: String(PACK_COMPLETO.priceNumeric),
      priceCurrency: "EUR",
    },
  ],
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Servicios",
      item: `${SITE_URL}/servicios`,
    },
  ],
}

// VideoObject dedicado para el vídeo de Same Day Edit embebido en esta página.
// Distinto del showreel genérico en layout.tsx (ese es el vídeo hero del home).
const sameDayEditVideoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Ejemplo de Same Day Edit — Fran Molina March Bodas",
  description:
    "Ejemplo real de un Same Day Edit: resumen editado el mismo día de la boda para proyectar durante el banquete, con los momentos vividos horas antes.",
  thumbnailUrl: "https://i.ytimg.com/vi/VqVdUwGVQMg/maxresdefault.jpg",
  uploadDate: "2026-03-23",
  embedUrl: "https://www.youtube.com/embed/VqVdUwGVQMg",
  contentUrl: "https://www.youtube.com/watch?v=VqVdUwGVQMg",
  publisher: { "@id": `${SITE_URL}/#business` },
}

// ─── IMAGES ──────────────────────────────────────────────────

const IMAGES = {
  hero: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_09_27%20BODA%20BERTA&SANTI%20006384.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDlfMjcgQk9EQSBCRVJUQSZTQU5USSAwMDYzODQuSlBHIiwiaWF0IjoxNzc0MzgwMDcwLCJleHAiOjIwODk3NDAwNzB9.Qysf3DS2sKpoW13L03lk5vRWkU7yrM9W31ddpWk5Ru0",
  preboda:
    "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/AN4A5940.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzL0FONEE1OTQwLkpQRyIsImlhdCI6MTc3NDM4MDI1OSwiZXhwIjoyMDg5NzQwMjU5fQ.-BgV8OUWYqlnNJfwpaK467zNhcDwsWfvBvCvxD1NZYs",
  boda: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_05_10_ANGELA&ANGEL%202081.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDVfMTBfQU5HRUxBJkFOR0VMIDIwODEuSlBHIiwiaWF0IjoxNzc0MzA0MzgxLCJleHAiOjIwODk2NjQzODF9.BlvlBjCPkwHh80JfMZlQlB-ASsnK0kfHhe0tYM2wgHA",
  postboda:
    "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/4.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzQuSlBHIiwiaWF0IjoxNzc1NjcxNzMyLCJleHAiOjIwOTEwMzE3MzJ9.DTiLk2R8b7k683nZxbOOI2LjV2yeDNQjkuDJPApZRhM",
  celebracion:
    "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_09_27%20BODA%20BERTA&SANTI%20006030.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDlfMjcgQk9EQSBCRVJUQSZTQU5USSAwMDYwMzAuSlBHIiwiaWF0IjoxNzc0MzgwMDU3LCJleHAiOjIwODk3NDAwNTd9.sPL31GapjedhVsHE3t-NvbVIPb1bRqEhknvrs-Vsgt4",
}

// ─── VIDEO PLACEHOLDER ──────────────────────────────────────

function VideoPlaceholder({
  label,
  id,
}: {
  label: string
  id: string
}) {
  return (
    <div
      id={id}
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#111827] border border-white/10 flex items-center justify-center group"
    >
      {/* TODO: Reemplazar con <video> o embed de YouTube/Vimeo */}
      <div className="text-center px-6">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#d4a574]/20 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-[#d4a574]"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p className="text-white/60 text-sm font-medium">{label}</p>
      </div>
    </div>
  )
}

// ─── YOUTUBE EMBED ──────────────────────────────────────────

function YouTubeEmbed({
  videoId,
  title,
  id,
}: {
  videoId: string
  title: string
  id: string
}) {
  return (
    <div
      id={id}
      className="relative w-full aspect-video rounded-2xl overflow-hidden bg-[#111827] border border-white/10"
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}

// ─── PAGE ────────────────────────────────────────────────────

export default function ServiciosPage() {
  const whatsappGeneral = getWhatsAppLink(
    "Hola Fran, me gustaría más información sobre vuestros servicios de fotografía y vídeo de bodas."
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(sameDayEditVideoSchema),
        }}
      />

      <main itemScope itemType="https://schema.org/WebPage">
        {/* ═══════════════════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════════════════ */}
        <section className="relative h-[70vh] w-full overflow-hidden">
          <Image
            src={IMAGES.hero}
            alt="Servicios de fotografía y vídeo de bodas — Fran Molina"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
          <header className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-serif text-white/95 leading-[1.1] mb-6 drop-shadow-2xl text-balance">
                Servicios de Fotografía y Vídeo de Bodas
              </h1>
              <p className="text-xl md:text-2xl text-[#d4a574]/90 font-medium mb-10">
                De la preboda a la postboda — cada momento, una historia
              </p>
              <a
                href="#como-trabajamos"
                className="inline-block bg-[#d4a574] hover:bg-[#d4a574]/90 text-[#1a365d] px-10 py-5 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 uppercase tracking-wide"
              >
                Descubre cómo trabajamos
              </a>
            </div>
          </header>
        </section>

        {/* BREADCRUMB */}
        <div className="bg-background border-b border-gray-100">
          <nav
            className="max-w-3xl mx-auto px-6 py-4 text-sm text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-accent transition-colors">
              Inicio
            </Link>
            <span className="mx-2">›</span>
            <span className="text-foreground">Servicios</span>
          </nav>
        </div>

        {/* ═══════════════════════════════════════════════════════
            CÓMO TRABAJAMOS
        ═══════════════════════════════════════════════════════ */}
        <section id="como-trabajamos" className="py-24 bg-background">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6 text-center">
              ¿Cómo trabajamos?
            </h2>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-xl mx-auto">
              Cada boda es única, pero hay algo que todas comparten: una
              historia que merece ser contada con sensibilidad, intención y
              detalle.
            </p>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Nuestro proceso no es solo técnico… es emocional.{" "}
                <strong className="text-foreground">
                  Todo empieza con vosotros.
                </strong>{" "}
                Realizamos una reunión previa donde definimos juntos el estilo,
                el ritmo y el tipo de recuerdo que queréis construir. Este
                primer paso es clave: aquí alineamos expectativas y damos forma
                a algo que será completamente vuestro.
              </p>
            </div>

            {/* Timeline visual */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Reunión",
                  text: "Os conocemos, definimos estilo y visión juntos",
                },
                {
                  step: "02",
                  title: "Preboda",
                  text: "Generamos confianza y conexión antes del gran día",
                },
                {
                  step: "03",
                  title: "La boda",
                  text: "Capturamos cada instante con naturalidad",
                },
                {
                  step: "04",
                  title: "Entrega",
                  text: "Galería privada, vídeo y álbum opcional",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <span className="inline-block text-4xl font-serif text-[#d4a574]/40 mb-3">
                    {item.step}
                  </span>
                  <h3 className="text-lg font-serif text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            PREBODA
        ═══════════════════════════════════════════════════════ */}
        <section
          id="preboda"
          className="py-24 bg-gradient-to-b from-secondary/10 to-background"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={IMAGES.preboda}
                  alt="Sesión de preboda — pareja relajada disfrutando de la sesión fotográfica"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              <div>
                <span className="text-[#d4a574] text-sm font-medium uppercase tracking-wider">
                  El inicio de todo
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mt-2 mb-6">
                  Preboda
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Antes del gran día, nos encontramos para la sesión de
                    preboda. No es solo una sesión de fotos:{" "}
                    <strong className="text-foreground">
                      es el momento en el que nos conocemos de verdad.
                    </strong>
                  </p>
                  <p>
                    Creamos un espacio cómodo, sin prisas, donde podéis ser
                    vosotros mismos. La confianza que generamos aquí es
                    fundamental para que, el día de la boda, todo fluya con
                    naturalidad.
                  </p>
                  <p>
                    Porque cuando os sentís cómodos… las imágenes hablan solas.
                    A veces es mucho más fácil de lo que imagináis.
                  </p>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]">✓</span> Sesión de 2-3 horas en ubicación elegida
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]">✓</span> 50+ fotos editadas profesionalmente
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]">✓</span> Descargable online
                  </li>
                </ul>

                <div className="mt-8 flex items-center gap-6">
                  <span className="text-2xl font-bold text-[#d4a574]">
                    Desde €400
                  </span>
                  <a
                    href={getWhatsAppLink("Hola Fran, me interesa la sesión de Preboda")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#d4a574]/10 text-[#d4a574] border-2 border-[#d4a574]/30 px-6 py-3 rounded-xl font-semibold hover:bg-[#d4a574] hover:text-[#1a365d] transition-all duration-300 text-sm"
                  >
                    Reservar preboda
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-16 max-w-3xl mx-auto">
              <VideoPlaceholder
                label="Vídeo de preboda — Cómo es una sesión con nosotros"
                id="video-preboda"
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SAME DAY EDIT
        ═══════════════════════════════════════════════════════ */}
        <section id="same-day-edit" className="py-24 bg-[#111827]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-[#d4a574] text-sm font-medium uppercase tracking-wider">
                  Emoción en tiempo real
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-white mt-2 mb-6">
                  Same Day Edit
                </h2>
                <div className="space-y-4 text-white/70 leading-relaxed">
                  <p>
                    Imaginad poder revivir vuestra boda…{" "}
                    <strong className="text-white">el mismo día.</strong>
                  </p>
                  <p>
                    El Same Day Edit es una experiencia única y profundamente
                    emotiva. Durante el banquete, proyectamos un resumen
                    editado el mismo día con los momentos vividos horas antes:
                    miradas, abrazos, nervios, felicidad.
                  </p>
                  <p>
                    Es un instante mágico donde vosotros y vuestros invitados
                    conectáis de nuevo con todo lo que está ocurriendo… pero
                    desde otra perspectiva. Un recuerdo inmediato que se
                    convierte en uno de los momentos más especiales del día.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <span className="text-2xl font-bold text-[#d4a574]">
                    Desde €400
                  </span>
                  <a
                    href={getWhatsAppLink("Hola Fran, me interesa el Same Day Edit")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#d4a574]/10 text-[#d4a574] border-2 border-[#d4a574]/30 px-6 py-3 rounded-xl font-semibold hover:bg-[#d4a574] hover:text-[#1a365d] transition-all duration-300 text-sm"
                  >
                    Añadir a mi boda
                  </a>
                </div>
              </div>

              <YouTubeEmbed
                videoId="VqVdUwGVQMg"
                title="Ejemplo de Same Day Edit — Fran Molina March Bodas"
                id="video-same-day-edit"
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            LA BODA
        ═══════════════════════════════════════════════════════ */}
        <section id="boda" className="py-24 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl lg:order-2">
                <Image
                  src={IMAGES.boda}
                  alt="Día de la boda — pareja durante la ceremonia en Tarragona"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              <div className="lg:order-1">
                <span className="text-[#d4a574] text-sm font-medium uppercase tracking-wider">
                  Donde ocurre la magia
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mt-2 mb-6">
                  La Boda
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Y llega el gran momento. El día de la boda no es solo un
                    evento, es una suma de instantes irrepetibles: los
                    preparativos, las miradas cómplices, las lágrimas, la
                    celebración.
                  </p>
                  <p>
                    Nuestro trabajo aquí es{" "}
                    <strong className="text-foreground">
                      acompañaros sin invadir, capturar sin forzar, y
                      transformar cada instante en un recuerdo eterno.
                    </strong>{" "}
                    Estamos atentos a todo: lo evidente y lo invisible.
                  </p>
                  <p>
                    Porque cuando todo pasa tan rápido, las imágenes son lo
                    único que os permitirá volver a sentirlo. Este es vuestro
                    día. Y estamos preparados para hacerlo brillar al máximo.
                  </p>
                </div>

                {/* Modalidades */}
                <div className="mt-8 space-y-4">
                  <div className="bg-secondary/30 rounded-xl p-5 border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-primary">Solo Fotografía</h3>
                      <span className="text-[#d4a574] font-bold">Desde €1.200</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      900+ fotos editadas, cobertura completa del día (10h+).
                      Álbum de Bodas opcional (+€400)
                    </p>
                  </div>
                  <div className="bg-secondary/30 rounded-xl p-5 border border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-primary">Solo Vídeo</h3>
                      <span className="text-[#d4a574] font-bold">Desde €1.400</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Vídeo cinematográfico documental + highlight reel
                    </p>
                  </div>
                  <div className="bg-[#1a365d]/5 rounded-xl p-5 border-2 border-[#d4a574]/30">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-serif text-primary">
                        Boda Completa — Foto + Vídeo
                      </h3>
                      <span className="text-[#d4a574] font-bold">Desde €2.200</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Lo mejor de ambos mundos: 900+ fotos editadas + vídeo
                      cinematográfico, 10h+ de cobertura. Álbum de Bodas
                      opcional (+€400)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            POSTBODA
        ═══════════════════════════════════════════════════════ */}
        <section id="postboda" className="py-24 bg-gradient-to-b from-secondary/10 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-[#d4a574] text-sm font-medium uppercase tracking-wider">
                  El broche final
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mt-2 mb-6">
                  Postboda
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Las últimas fotos donde os tendréis que poner el vestido
                    por última vez. El momento de{" "}
                    <strong className="text-foreground">
                      disfrutar sin prisas, sin protocolos, sin horarios.
                    </strong>
                  </p>
                  <p>
                    Las fotos más auténticas, con los destellos de la pareja a
                    relucir de piel. Es la sesión donde la complicidad manda y
                    donde la magia ocurre casi sin proponérselo.
                  </p>
                  <p>
                    ¿Cómo puede salir mal? No puede. Porque ya os conocemos, ya
                    hay confianza, y solo queda disfrutar.
                  </p>
                </div>

                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]">✓</span> Sesión artística de 2-3 horas en ubicación elegida
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]">✓</span> 50+ fotos editadas profesionalmente
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]">✓</span> Descargable online
                  </li>
                </ul>

                <div className="mt-8 flex items-center gap-6">
                  <span className="text-2xl font-bold text-[#d4a574]">
                    Desde €400
                  </span>
                  <a
                    href={getWhatsAppLink("Hola Fran, me interesa la sesión de Postboda")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#d4a574]/10 text-[#d4a574] border-2 border-[#d4a574]/30 px-6 py-3 rounded-xl font-semibold hover:bg-[#d4a574] hover:text-[#1a365d] transition-all duration-300 text-sm"
                  >
                    Reservar postboda
                  </a>
                </div>
              </div>

              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={IMAGES.postboda}
                  alt="Sesión de postboda en la playa — pareja disfrutando junto al mar en Tarragona"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            ENTREGA — GALERÍA + CEREMONIA
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 bg-gradient-to-b from-secondary/10 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#d4a574] text-sm font-medium uppercase tracking-wider">
                Después de la boda
              </span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mt-2 mb-6">
                Lo que recibiréis
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Una vez finalizado el trabajo, os entregaremos todo el material
                a través de una galería privada online, para que podáis acceder
                fácilmente, compartirlo con vuestros seres queridos y
                conservarlo siempre.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Galería online */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#d4a574]/10 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-[#d4a574]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V4.5a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-primary mb-3">
                  Galería Privada
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  900+ fotos editadas en alta resolución. Galería online
                  privada descargable para compartir con familia y amigos.
                  Entrega en 4-6 semanas.
                </p>
              </div>

              {/* Ceremonia editada */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#d4a574]/10 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-[#d4a574]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl text-primary mb-3">
                  Ceremonia Editada
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Vuestra ceremonia completamente editada para revivir cada
                  instante. Cada palabra, cada mirada, cada promesa — sin
                  perder ni un solo detalle.
                </p>
              </div>
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <VideoPlaceholder
                label="Ejemplo de ceremonia editada"
                id="video-ceremonia"
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            PACK COMPLETO DESTACADO
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 bg-[#1a365d]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="inline-block bg-[#d4a574] text-[#1a365d] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              Mejor valor — Ahorro de €{PACK_COMPLETO.savings}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
              Pack Completo
            </h2>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              {PACK_COMPLETO.description}
            </p>

            <div className="bg-white/5 rounded-2xl p-8 border border-white/10 mb-10 max-w-xl mx-auto text-left">
              <ul className="space-y-3">
                {PACK_COMPLETO.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-white/80"
                  >
                    <span className="text-[#d4a574] mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-bold text-white">
                {PACK_COMPLETO.price}
              </span>
              <p className="text-white/50 text-sm mt-2">
                Valor individual: €
                {PACK_COMPLETO.individualTotal.toLocaleString("es-ES")}
              </p>
            </div>

            <a
              href={getWhatsAppLink(PACK_COMPLETO.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#d4a574] text-[#1a365d] px-12 py-5 rounded-2xl text-xl font-semibold hover:bg-[#d4a574]/90 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(212,165,116,0.4)] transition-all duration-300 uppercase tracking-wide"
            >
              Quiero el Pack Completo
            </a>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            CTA FINAL
        ═══════════════════════════════════════════════════════ */}
        <section className="py-24 bg-gradient-to-b from-[#111827] to-gray-900">
          <div className="max-w-lg mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
              ¿Hablamos de vuestra boda?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Contadme sobre vuestro día y os preparo una propuesta
              personalizada en menos de 24 horas. Sin compromiso.
            </p>

            <a
              href={whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white py-5 px-10 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(34,197,94,0.4)] uppercase tracking-wide transition-all duration-300"
              aria-label="Contactar por WhatsApp"
            >
              💬 Chatear por WhatsApp
            </a>

            <p className="mt-6 text-white/50 text-sm">
              o llámame al{" "}
              <a
                href={PHONE_LINK}
                className="text-[#d4a574] hover:text-[#d4a574]/80 transition-colors"
              >
                {PHONE_DISPLAY}
              </a>
            </p>

            <div className="mt-10 pt-8 border-t border-white/10">
              <Link
                href="/#precios"
                className="text-white/50 hover:text-[#d4a574] text-sm transition-colors underline underline-offset-4"
              >
                Ver tabla de precios detallada →
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

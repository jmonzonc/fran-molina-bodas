import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import {
  SITE_URL,
  ATOMIC_PRICES,
  BODA_COMPLETA,
  BUSINESS_INFO,
  DELIVERABLES,
  SERVICES,
  PACK_COMPLETO,
  PHONE_DISPLAY,
  PHONE_LINK,
  getWhatsAppLink,
} from "@/lib/config"
import { formatEUR, schemaPrice } from "@/lib/format"
import { Container, Section } from "@/components/ui/container"
import { Footer } from "@/components/footer"

/**
 * Cambios vs versión previa:
 *
 * - Todos los importes derivan de lib/config. Antes había "€1.200",
 *   "€2.200", "€400" y "+€400" escritos a mano en el JSX, además de
 *   `€{PACK_COMPLETO.savings}` sin formatear (imprimía "€800" por suerte,
 *   pero "€1200" en cuanto el número pasara de tres dígitos).
 * - Álbum de Bodas eliminado: quedaban dos menciones en las cards de
 *   modalidad y una en el paso 04 del timeline.
 * - Boda Completa muestra su ahorro (2.200 € frente a 2.600 €).
 * - Container/Section: la página mezclaba max-w-4xl, max-w-5xl y max-w-6xl
 *   entre secciones contiguas, que es el origen de los huecos laterales.
 * - Los dos iframes de YouTube pasan a fachada con clic: 3 iframes en una
 *   página cargan ~1,3 MB de JS de terceros antes de cualquier interacción.
 * - `object-[50%_22%]` del hero se mantiene, pero la clase estaba
 *   desindentada y fuera del bloque de props.
 */

// ─── METADATA ────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Servicios de Fotografía y Vídeo de Bodas | Fran Momarch — Tarragona",
  description:
    "Servicios de fotografía y vídeo de bodas en Tarragona: preboda, boda completa, same day edit y postboda. Descubre cómo trabajamos.",
  alternates: {
    canonical: `${SITE_URL}/servicios`,
  },
  openGraph: {
    title: "Servicios de Fotografía y Vídeo de Bodas | Fran Momarch — Tarragona",
    description: `Preboda, boda completa, same day edit y postboda. Conoce nuestro proceso y cada servicio en detalle. Pack completo desde ${PACK_COMPLETO.price}.`,
    url: `${SITE_URL}/servicios`,
    type: "website",
    locale: "es_ES",
    siteName: BUSINESS_INFO.name,
    images: [
      {
        url: `${SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Servicios de fotografía de bodas — Fran Momarch",
      },
    ],
  },
}

// ─── JSON-LD ─────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Servicios de Fotografía y Vídeo de Bodas — Fran Momarch",
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
      price: schemaPrice(s.priceNumeric),
      priceCurrency: "EUR",
    })),
    {
      "@type": "Offer",
      name: PACK_COMPLETO.name,
      description: `${PACK_COMPLETO.description} Ahorro de ${PACK_COMPLETO.savingsLabel} frente a contratar cada servicio por separado.`,
      price: schemaPrice(PACK_COMPLETO.priceNumeric),
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

const sameDayEditVideoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Ejemplo de Same Day Edit — Fran Momarch Bodas",
  description:
    "Ejemplo real de un Same Day Edit: resumen editado el mismo día de la boda para proyectar durante el banquete, con los momentos vividos horas antes.",
  thumbnailUrl: "https://i.ytimg.com/vi/VqVdUwGVQMg/maxresdefault.jpg",
  uploadDate: "2026-03-23",
  embedUrl: "https://www.youtube.com/embed/VqVdUwGVQMg",
  contentUrl: "https://www.youtube.com/watch?v=VqVdUwGVQMg",
  publisher: { "@id": `${SITE_URL}/#business` },
}

const ceremoniaVideoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Ejemplo de ceremonia editada — Fran Momarch Bodas",
  description:
    "Ejemplo real de una ceremonia de boda completamente editada, entregada en la galería online privada de los novios.",
  thumbnailUrl: "https://i.ytimg.com/vi/n5mSVcUFwcM/maxresdefault.jpg",
  uploadDate: "2026-03-23",
  embedUrl: "https://www.youtube.com/embed/n5mSVcUFwcM",
  contentUrl: "https://www.youtube.com/watch?v=n5mSVcUFwcM",
  publisher: { "@id": `${SITE_URL}/#business` },
}

// ─── IMÁGENES ────────────────────────────────────────────────
// ⚠️  URLs firmadas de Supabase con token embebido en el bundle.
// Migrar a bucket público y pre-redimensionar a 2560 px.

const IMAGES = {
  hero: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_09_27%20BODA%20BERTA&SANTI%20006384.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDlfMjcgQk9EQSBCRVJUQSZTQU5USSAwMDYzODQuSlBHIiwiaWF0IjoxNzc0MzgwMDcwLCJleHAiOjIwODk3NDAwNzB9.Qysf3DS2sKpoW13L03lk5vRWkU7yrM9W31ddpWk5Ru0",
  preboda:
    "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/AN4A5940.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzL0FONEE1OTQwLkpQRyIsImlhdCI6MTc3NDM4MDI1OSwiZXhwIjoyMDg5NzQwMjU5fQ.-BgV8OUWYqlnNJfwpaK467zNhcDwsWfvBvCvxD1NZYs",
  boda: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_05_10_ANGELA&ANGEL%202081.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDVfMTBfQU5HRUxBJkFOR0VMIDIwODEuSlBHIiwiaWF0IjoxNzc0MzA0MzgxLCJleHAiOjIwODk2NjQzODF9.BlvlBjCPkwHh80JfMZlQlB-ASsnK0kfHhe0tYM2wgHA",
  postboda:
    "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/4.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzQuSlBHIiwiaWF0IjoxNzc1NjcxNzMyLCJleHAiOjIwOTEwMzE3MzJ9.DTiLk2R8b7k683nZxbOOI2LjV2yeDNQjkuDJPApZRhM",
}

// ─── COMPONENTES ─────────────────────────────────────────────

/**
 * Fachada de YouTube: miniatura estática + play. El iframe real solo se
 * inyecta al hacer clic. Tres iframes de YouTube en una página cargan
 * ~1,3 MB de JS de terceros y hunden el INP aunque nadie los reproduzca.
 * Sin "use client": se resuelve con <details>, cero JavaScript.
 */
function YouTubeFacade({
  videoId,
  title,
  id,
  dark = true,
}: {
  videoId: string
  title: string
  id: string
  dark?: boolean
}) {
  return (
    <details
      id={id}
      className={`group relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl ${
        dark
          ? "border border-white/10 bg-[#111827]"
          : "border border-black/5 bg-secondary/20"
      }`}
    >
      <summary className="absolute inset-0 flex cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden group-open:hidden">
        <Image
          src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 55vw"
          loading="lazy"
        />
        <span
          className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15"
          aria-hidden="true"
        />
        <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#d4a574] shadow-2xl transition-transform duration-300 group-hover:scale-110">
          <svg
            className="ml-1 h-7 w-7 text-[#1a365d]"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
          <span className="sr-only">Reproducir: {title}</span>
        </span>
      </summary>

      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 h-full w-full"
      />
    </details>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d4a574]">
      <span className="h-px w-6 bg-[#d4a574]" aria-hidden="true" />
      {children}
    </span>
  )
}

function PriceCta({
  price,
  href,
  label,
  strikethrough,
  savings,
}: {
  price: string
  href: string
  label: string
  strikethrough?: string
  savings?: string
}) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
      <div className="tabular">
        <div className="flex items-baseline gap-2.5">
          <span className="text-2xl font-bold text-[#d4a574]">
            Desde {price}
          </span>
          {strikethrough && (
            <span className="text-base text-muted-foreground/60 line-through">
              {strikethrough}
            </span>
          )}
        </div>
        {savings && (
          <p className="mt-1 text-xs font-medium text-emerald-700">
            Ahorro de {savings}
          </p>
        )}
      </div>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-xl border-2 border-[#d4a574]/30 bg-[#d4a574]/10 px-6 py-3 text-sm font-semibold text-[#d4a574] transition-all duration-300 hover:bg-[#d4a574] hover:text-[#1a365d]"
      >
        {label}
      </a>
    </div>
  )
}

// ─── TIMELINE ────────────────────────────────────────────────

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Reunión",
    text: "Definimos estilo y visión juntos",
  },
  {
    step: "02",
    title: "Preboda",
    text: "Generamos confianza antes del gran día",
  },
  {
    step: "03",
    title: "La boda",
    text: "Capturamos cada instante con naturalidad",
  },
  {
    step: "04",
    title: "Entrega",
    text: `Galería privada y vídeo editado en ${DELIVERABLES.galleryWeeksMin}-${DELIVERABLES.galleryWeeksMax} semanas`,
  },
]

// ─── PÁGINA ──────────────────────────────────────────────────

export default function ServiciosPage() {
  const whatsappGeneral = getWhatsAppLink(
    "Hola Fran, me gustaría más información sobre vuestros servicios de fotografía y vídeo de bodas.",
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema,
            breadcrumbSchema,
            sameDayEditVideoSchema,
            ceremoniaVideoSchema,
          ]),
        }}
      />

      <main itemScope itemType="https://schema.org/WebPage">
        {/* ═══ HERO ═══ */}
        <section className="relative h-[58svh] min-h-[440px] w-full overflow-hidden">
          <Image
            src={IMAGES.hero}
            alt="Servicios de fotografía y vídeo de bodas — Fran Momarch"
            fill
            priority
            fetchPriority="high"
            quality={72}
            sizes="100vw"
            className="object-cover object-[50%_22%]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-[#111827]"
            aria-hidden="true"
          />
          <header className="absolute inset-0 flex items-end pb-16 sm:pb-20">
            <Container width="content" className="text-center">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-[#d4a574]">
                Preboda · Boda · Same Day Edit · Postboda
              </p>
              <h1 className="font-serif text-[clamp(2.25rem,1.6rem+3.2vw,4.5rem)] leading-[1.08] text-balance text-white drop-shadow-2xl">
                Cada momento, una historia
              </h1>
            </Container>
          </header>
        </section>

        <div className="border-b border-white/10 bg-[#111827]">
          <Container width="content">
            <nav className="py-3 text-sm text-white/50" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors hover:text-[#d4a574]">
                Inicio
              </Link>
              <span className="mx-2" aria-hidden="true">
                ›
              </span>
              <span className="text-white/80">Servicios</span>
            </nav>
          </Container>
        </div>

        {/* ═══ CÓMO TRABAJAMOS ═══ */}
        <Section id="como-trabajamos" className="bg-background">
          <Container width="content">
            <div className="mx-auto mb-14 max-w-[52ch] text-center">
              <Eyebrow>Nuestro proceso</Eyebrow>
              <h2 className="mb-4 mt-3 font-serif text-[clamp(1.875rem,1.5rem+1.9vw,3rem)] leading-[1.1] text-balance text-primary">
                ¿Cómo trabajamos?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Un proceso emocional tanto como técnico: todo empieza con una
                reunión donde alineamos estilo, ritmo y el tipo de recuerdo que
                queréis construir.
              </p>
            </div>

            <ol className="relative">
              <div
                className="absolute left-[12.5%] right-[12.5%] top-5 hidden h-px bg-border md:block"
                aria-hidden="true"
              />
              <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
                {PROCESS_STEPS.map((item) => (
                  <li key={item.step} className="relative text-center">
                    <span
                      className="relative z-10 mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d4a574] bg-background font-serif text-sm text-[#d4a574]"
                      aria-hidden="true"
                    >
                      {item.step}
                    </span>
                    <h3 className="mb-1.5 font-serif text-base text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-snug text-muted-foreground">
                      {item.text}
                    </p>
                  </li>
                ))}
              </div>
            </ol>
          </Container>
        </Section>

        {/* ═══ PREBODA ═══ */}
        <Section
          id="preboda"
          className="bg-gradient-to-b from-secondary/15 to-background"
        >
          <Container width="wide">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="group relative h-[420px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={IMAGES.preboda}
                  alt="Sesión de preboda — pareja relajada disfrutando de la sesión fotográfica"
                  fill
                  quality={72}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              <div>
                <Eyebrow>El inicio de todo</Eyebrow>
                <h2 className="mb-5 mt-3 font-serif text-[clamp(1.875rem,1.5rem+1.9vw,3rem)] leading-[1.1] text-primary">
                  Preboda
                </h2>
                <div className="space-y-3 leading-relaxed text-muted-foreground">
                  <p>
                    Antes del gran día nos encontramos para la sesión de
                    preboda. No es solo una sesión de fotos:{" "}
                    <strong className="text-foreground">
                      es el momento en el que nos conocemos de verdad.
                    </strong>
                  </p>
                  <p>
                    Creamos un espacio cómodo, sin prisas, donde podéis ser
                    vosotros mismos. Esa confianza es la que hace que el día de
                    la boda todo fluya con naturalidad.
                  </p>
                </div>

                <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]" aria-hidden="true">
                      ✓
                    </span>{" "}
                    2-3 horas en ubicación elegida
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]" aria-hidden="true">
                      ✓
                    </span>{" "}
                    {DELIVERABLES.photosSession}+ fotos editadas
                  </li>
                  <li className="col-span-full flex items-center gap-2">
                    <span className="text-[#d4a574]" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Galería online privada descargable
                  </li>
                </ul>

                <PriceCta
                  price={formatEUR(ATOMIC_PRICES.preboda)}
                  href={getWhatsAppLink(
                    "Hola Fran, me interesa la sesión de Preboda",
                  )}
                  label="Reservar preboda"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* ═══ SAME DAY EDIT ═══ */}
        <Section id="same-day-edit" className="bg-[#111827]">
          <Container width="wide">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <Eyebrow>Emoción en tiempo real</Eyebrow>
                <h2 className="mb-5 mt-3 font-serif text-[clamp(1.875rem,1.5rem+1.9vw,3rem)] leading-[1.1] text-white">
                  Same Day Edit
                </h2>
                <div className="space-y-3 leading-relaxed text-white/70">
                  <p>
                    Imaginad poder revivir vuestra boda…{" "}
                    <strong className="text-white">el mismo día.</strong>
                  </p>
                  <p>
                    Durante el banquete proyectamos un resumen editado con los
                    momentos vividos horas antes: miradas, abrazos, nervios,
                    felicidad. Un recuerdo inmediato que se convierte en uno de
                    los momentos más especiales del día.
                  </p>
                </div>

                <PriceCta
                  price={formatEUR(ATOMIC_PRICES.sameDayEdit)}
                  href={getWhatsAppLink(
                    "Hola Fran, me interesa el Same Day Edit",
                  )}
                  label="Añadir a mi boda"
                />
              </div>

              <YouTubeFacade
                videoId="VqVdUwGVQMg"
                title="Ejemplo de Same Day Edit — Fran Momarch Bodas"
                id="video-same-day-edit"
              />
            </div>
          </Container>
        </Section>

        {/* ═══ LA BODA ═══ */}
        <Section id="boda" className="bg-background">
          <Container width="wide">
            <div className="mb-14 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="group relative h-[420px] overflow-hidden rounded-2xl shadow-xl lg:order-2">
                <Image
                  src={IMAGES.boda}
                  alt="Día de la boda — pareja durante la ceremonia en Tarragona"
                  fill
                  quality={72}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              <div className="lg:order-1">
                <Eyebrow>Donde ocurre la magia</Eyebrow>
                <h2 className="mb-5 mt-3 font-serif text-[clamp(1.875rem,1.5rem+1.9vw,3rem)] leading-[1.1] text-primary">
                  La Boda
                </h2>
                <div className="space-y-3 leading-relaxed text-muted-foreground">
                  <p>
                    El día de la boda es una suma de instantes irrepetibles: los
                    preparativos, las miradas cómplices, las lágrimas, la
                    celebración.
                  </p>
                  <p>
                    Nuestro trabajo es{" "}
                    <strong className="text-foreground">
                      acompañaros sin invadir, capturar sin forzar y transformar
                      cada instante en un recuerdo eterno.
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-1 font-serif text-lg text-primary">
                  Solo Fotografía
                </h3>
                <p className="tabular mb-3 text-xl font-bold text-[#d4a574]">
                  Desde {formatEUR(ATOMIC_PRICES.bodaFoto)}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {DELIVERABLES.photosWedding}+ fotos editadas y cobertura
                  completa del día ({DELIVERABLES.coverageHours}h+).
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-1 font-serif text-lg text-primary">
                  Solo Vídeo
                </h3>
                <p className="tabular mb-3 text-xl font-bold text-[#d4a574]">
                  Desde {formatEUR(ATOMIC_PRICES.bodaVideo)}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Vídeo cinematográfico documental y highlight reel de{" "}
                  {DELIVERABLES.highlightMinutesMin}-
                  {DELIVERABLES.highlightMinutesMax} minutos.
                </p>
              </div>

              <div className="relative rounded-2xl border-2 border-[#d4a574]/40 bg-[#1a365d]/[0.04] p-6">
                <span className="absolute -top-3 left-6 rounded-full bg-[#d4a574] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1a365d]">
                  Recomendado
                </span>
                <h3 className="mb-1 mt-1 font-serif text-lg text-primary">
                  Boda Completa
                </h3>
                <div className="tabular mb-3 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-[#d4a574]">
                    Desde {BODA_COMPLETA.price}
                  </span>
                  <span className="text-sm text-muted-foreground/60 line-through">
                    {BODA_COMPLETA.individualTotalLabel}
                  </span>
                </div>
                <p className="mb-3 text-xs font-medium text-emerald-700">
                  Ahorro de {BODA_COMPLETA.savingsLabel} frente a contratar foto
                  y vídeo por separado
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Foto + vídeo con {DELIVERABLES.coverageHours}h+ de cobertura,{" "}
                  {DELIVERABLES.photosWedding}+ fotos editadas y highlight reel.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* ═══ POSTBODA ═══ */}
        <Section
          id="postboda"
          className="bg-gradient-to-b from-secondary/15 to-background"
        >
          <Container width="wide">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <Eyebrow>El broche final</Eyebrow>
                <h2 className="mb-5 mt-3 font-serif text-[clamp(1.875rem,1.5rem+1.9vw,3rem)] leading-[1.1] text-primary">
                  Postboda
                </h2>
                <div className="space-y-3 leading-relaxed text-muted-foreground">
                  <p>
                    Las últimas fotos con el vestido, sin prisas, sin protocolos,
                    sin horarios.{" "}
                    <strong className="text-foreground">Solo disfrutar.</strong>
                  </p>
                  <p>
                    Ya nos conocemos, ya hay confianza — y ahí es donde la magia
                    ocurre casi sin proponérselo.
                  </p>
                </div>

                <ul className="mt-6 grid grid-cols-1 gap-x-4 gap-y-2 text-sm text-muted-foreground sm:grid-cols-2">
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Sesión artística de 2-3 h
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]" aria-hidden="true">
                      ✓
                    </span>{" "}
                    {DELIVERABLES.photosSession}+ fotos editadas
                  </li>
                  <li className="col-span-full flex items-center gap-2">
                    <span className="text-[#d4a574]" aria-hidden="true">
                      ✓
                    </span>{" "}
                    Galería online privada descargable
                  </li>
                </ul>

                <PriceCta
                  price={formatEUR(ATOMIC_PRICES.postboda)}
                  href={getWhatsAppLink(
                    "Hola Fran, me interesa la sesión de Postboda",
                  )}
                  label="Reservar postboda"
                />
              </div>

              <div className="group relative h-[420px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={IMAGES.postboda}
                  alt="Sesión de postboda en la playa — pareja disfrutando junto al mar en Tarragona"
                  fill
                  quality={72}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* ═══ LO QUE RECIBIRÉIS ═══ */}
        <Section className="bg-gradient-to-b from-secondary/15 to-background">
          <Container width="wide">
            <div className="mx-auto mb-12 max-w-[52ch] text-center">
              <Eyebrow>Después de la boda</Eyebrow>
              <h2 className="mb-4 mt-3 font-serif text-[clamp(1.875rem,1.5rem+1.9vw,3rem)] leading-[1.1] text-balance text-primary">
                Lo que recibiréis
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo el material en una galería privada online, lista para
                compartir con vuestros seres queridos y conservar siempre.
              </p>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-8 lg:grid-cols-[1fr_1.3fr]">
              <div className="flex flex-col gap-4">
                <div className="flex-1 rounded-2xl border border-border bg-card p-6 shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a574]/10">
                    <svg
                      className="h-5 w-5 text-[#d4a574]"
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
                  <h3 className="mb-2 font-serif text-lg text-primary">
                    Galería Privada
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {DELIVERABLES.photosWedding}+ fotos editadas en alta
                    resolución, descargables, para compartir con familia y
                    amigos. Entrega en {DELIVERABLES.galleryWeeksMin}-
                    {DELIVERABLES.galleryWeeksMax} semanas.
                  </p>
                </div>

                <div className="flex-1 rounded-2xl border border-border bg-card p-6 shadow-md">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#d4a574]/10">
                    <svg
                      className="h-5 w-5 text-[#d4a574]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <h3 className="mb-2 font-serif text-lg text-primary">
                    Ceremonia Editada
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Vuestra ceremonia completa editada para revivir cada
                    instante — cada palabra, cada mirada, cada promesa.
                  </p>
                </div>
              </div>

              <YouTubeFacade
                videoId="n5mSVcUFwcM"
                title="Ejemplo de ceremonia editada — Fran Momarch Bodas"
                id="video-ceremonia"
                dark={false}
              />
            </div>
          </Container>
        </Section>

        {/* ═══ PACK COMPLETO ═══ */}
        <Section rhythm="loose" className="bg-[#1a365d]">
          <Container width="content" className="text-center">
            <span className="mb-6 inline-block rounded-full bg-[#d4a574] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#1a365d]">
              Mejor valor — ahorro de {PACK_COMPLETO.savingsLabel}
            </span>
            <h2 className="mb-4 font-serif text-[clamp(1.875rem,1.5rem+2.4vw,3.5rem)] leading-[1.08] text-white">
              Pack Completo
            </h2>
            <p className="mx-auto mb-8 max-w-[52ch] text-lg leading-relaxed text-white/70">
              {PACK_COMPLETO.description}
            </p>

            <div className="mx-auto mb-10 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 text-left">
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PACK_COMPLETO.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-white/80"
                  >
                    <span
                      className="mt-0.5 shrink-0 text-[#d4a574]"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tabular mb-8">
              <span className="text-5xl font-bold text-white">
                {PACK_COMPLETO.price}
              </span>
              <p className="mt-2 text-sm text-white/50">
                Valor individual:{" "}
                <span className="line-through">
                  {PACK_COMPLETO.individualTotalLabel}
                </span>
              </p>
            </div>

            <a
              href={getWhatsAppLink(PACK_COMPLETO.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-2xl bg-[#d4a574] px-12 py-5 text-xl font-semibold uppercase tracking-wide text-[#1a365d] shadow-2xl transition-all duration-300 hover:bg-[#d4a574]/90 hover:shadow-[0_25px_50px_-12px_rgba(212,165,116,0.4)]"
            >
              Quiero el Pack Completo
            </a>
          </Container>
        </Section>

        {/* ═══ CTA FINAL ═══ */}
        <Section className="bg-gradient-to-b from-[#111827] to-gray-900">
          <Container width="prose" className="text-center">
            <h2 className="mb-4 font-serif text-[clamp(2rem,1.5rem+2.4vw,3.5rem)] leading-[1.08] text-balance text-white">
              ¿Hablamos de vuestra boda?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-white/70">
              Contadnos cómo imagináis vuestro día y os preparamos una propuesta
              personalizada en menos de 24 horas. Sin compromiso.
            </p>

            <a
              href={whatsappGeneral}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-emerald-500 px-10 py-5 text-xl font-semibold uppercase tracking-wide text-white shadow-2xl transition-all duration-300 hover:bg-emerald-600 hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.4)]"
              aria-label="Contactar por WhatsApp"
            >
              Chatear por WhatsApp
            </a>

            <p className="mt-6 text-sm text-white/50">
              o llamadnos al{" "}
              <a
                href={PHONE_LINK}
                className="text-[#d4a574] transition-colors hover:text-[#d4a574]/80"
              >
                {PHONE_DISPLAY}
              </a>
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <Link
                href="/#precios"
                className="text-sm text-white/50 underline underline-offset-4 transition-colors hover:text-[#d4a574]"
              >
                Ver tabla de precios detallada →
              </Link>
            </div>
          </Container>
        </Section>

        <Footer />
      </main>
    </>
  )
}

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
    "Servicios de Fotografía y Vídeo de Bodas | Fran Momarch — Tarragona",
  description:
    "Servicios de fotografía y vídeo de bodas en Tarragona: preboda, boda completa, same day edit y postboda. Descubre cómo trabajamos.",
  alternates: {
    canonical: `${SITE_URL}/servicios`,
  },
  openGraph: {
    title:
      "Servicios de Fotografía y Vídeo de Bodas | Fran Momarch — Tarragona",
    description:
      "Preboda, boda completa, same day edit y postboda. Conoce nuestro proceso y cada servicio en detalle. Pack completo desde 3.000 €.",
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

// VideoObject dedicado al vídeo de Same Day Edit embebido en esta página.
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

// VideoObject dedicado al vídeo de ceremonia editada embebido en esta página.
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

// ─── YOUTUBE EMBED ──────────────────────────────────────────

function YouTubeEmbed({
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
    <div
      id={id}
      className={`relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl ${
        dark
          ? "bg-[#111827] border border-white/10"
          : "bg-secondary/20 border border-black/5"
      }`}
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

// ─── SECTION EYEBROW ────────────────────────────────────────

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a574]">
      <span className="w-6 h-px bg-[#d4a574]" aria-hidden="true" />
      {children}
    </span>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ceremoniaVideoSchema),
        }}
      />

      <main itemScope itemType="https://schema.org/WebPage">
        {/* ═══════════════════════════════════════════════════════
            HERO — compacto, una sola idea, sin relleno
        ═══════════════════════════════════════════════════════ */}
        <section className="relative h-[58vh] min-h-[440px] w-full overflow-hidden">
          <Image
            src={IMAGES.hero}
            alt="Servicios de fotografía y vídeo de bodas — Fran Momarch"
            fill
  className="object-cover object-[50%_22%]"
  priority
  sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-[#111827]" />
          <header className="absolute inset-0 flex items-end pb-16 sm:pb-20">
            <div className="max-w-4xl mx-auto px-6 text-center w-full">
              <p className="text-[#d4a574] text-sm font-medium uppercase tracking-[0.25em] mb-4">
                Preboda · Boda · Same Day Edit · Postboda
              </p>
              <h1 className="text-4xl md:text-6xl font-serif text-white leading-[1.1] drop-shadow-2xl text-balance">
                Cada momento, una historia
              </h1>
            </div>
          </header>
        </section>

        {/* BREADCRUMB — integrado en la franja oscura del hero, sin salto de color */}
        <div className="bg-[#111827] border-b border-white/10">
          <nav
            className="max-w-3xl mx-auto px-6 py-3 text-sm text-white/50"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-[#d4a574] transition-colors">
              Inicio
            </Link>
            <span className="mx-2">›</span>
            <span className="text-white/80">Servicios</span>
          </nav>
        </div>

        {/* ═══════════════════════════════════════════════════════
            CÓMO TRABAJAMOS — timeline conectada, más compacta
        ═══════════════════════════════════════════════════════ */}
        <section id="como-trabajamos" className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-14">
              <Eyebrow>Nuestro proceso</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mt-3 mb-4">
                ¿Cómo trabajamos?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Un proceso emocional tanto como técnico: todo empieza con una
                reunión donde alineamos estilo, ritmo y el tipo de recuerdo
                que queréis construir.
              </p>
            </div>

            {/* Timeline horizontal con línea conectora — el orden aquí es real */}
            <div className="relative">
              <div
                className="hidden md:block absolute top-5 left-[12.5%] right-[12.5%] h-px bg-border"
                aria-hidden="true"
              />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
                {[
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
                    text: "Galería privada, vídeo y álbum opcional",
                  },
                ].map((item) => (
                  <div key={item.step} className="relative text-center">
                    <span className="relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-background border-2 border-[#d4a574] text-[#d4a574] text-sm font-serif mb-4">
                      {item.step}
                    </span>
                    <h3 className="text-base font-serif text-primary mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-snug">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            PREBODA — sin vídeo, imagen + texto + CTA compacto
        ═══════════════════════════════════════════════════════ */}
        <section
          id="preboda"
          className="py-20 bg-gradient-to-b from-secondary/15 to-background"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={IMAGES.preboda}
                  alt="Sesión de preboda — pareja relajada disfrutando de la sesión fotográfica"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              <div>
                <Eyebrow>El inicio de todo</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mt-3 mb-5">
                  Preboda
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    Antes del gran día, nos encontramos para la sesión de
                    preboda. No es solo una sesión de fotos:{" "}
                    <strong className="text-foreground">
                      es el momento en el que nos conocemos de verdad.
                    </strong>
                  </p>
                  <p>
                    Creamos un espacio cómodo, sin prisas, donde podéis ser
                    vosotros mismos. Esa confianza es la que hace que, el día
                    de la boda, todo fluya con naturalidad.
                  </p>
                </div>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]">✓</span> 2-3 horas en ubicación elegida
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]">✓</span> 50+ fotos editadas
                  </li>
                  <li className="flex items-center gap-2 col-span-2">
                    <span className="text-[#d4a574]">✓</span> Galería online privada descargable
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
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            SAME DAY EDIT
        ═══════════════════════════════════════════════════════ */}
        <section id="same-day-edit" className="py-20 bg-[#111827]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <Eyebrow>Emoción en tiempo real</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-serif text-white mt-3 mb-5">
                  Same Day Edit
                </h2>
                <div className="space-y-3 text-white/70 leading-relaxed">
                  <p>
                    Imaginad poder revivir vuestra boda…{" "}
                    <strong className="text-white">el mismo día.</strong>
                  </p>
                  <p>
                    Durante el banquete proyectamos un resumen editado con los
                    momentos vividos horas antes: miradas, abrazos, nervios,
                    felicidad. Un recuerdo inmediato que se convierte en uno
                    de los momentos más especiales del día.
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
                title="Ejemplo de Same Day Edit — Fran Momarch Bodas"
                id="video-same-day-edit"
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            LA BODA — comparativa de modalidades como cards, no lista
        ═══════════════════════════════════════════════════════ */}
        <section id="boda" className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl lg:order-2 group">
                <Image
                  src={IMAGES.boda}
                  alt="Día de la boda — pareja durante la ceremonia en Tarragona"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>

              <div className="lg:order-1">
                <Eyebrow>Donde ocurre la magia</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mt-3 mb-5">
                  La Boda
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    El día de la boda es una suma de instantes irrepetibles:
                    los preparativos, las miradas cómplices, las lágrimas, la
                    celebración.
                  </p>
                  <p>
                    Nuestro trabajo es{" "}
                    <strong className="text-foreground">
                      acompañaros sin invadir, capturar sin forzar, y
                      transformar cada instante en un recuerdo eterno.
                    </strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Modalidades como cards comparativas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="rounded-2xl p-6 border border-border bg-card">
                <h3 className="font-serif text-lg text-primary mb-1">Solo Fotografía</h3>
                <p className="text-[#d4a574] font-bold text-xl mb-3">Desde €1.200</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  900+ fotos editadas, cobertura completa del día (10h+).
                  Álbum de Bodas opcional (+€400).
                </p>
              </div>
              <div className="rounded-2xl p-6 border border-border bg-card">
                <h3 className="font-serif text-lg text-primary mb-1">Solo Vídeo</h3>
                <p className="text-[#d4a574] font-bold text-xl mb-3">Desde €1.400</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Vídeo cinematográfico documental + highlight reel de 3-5
                  minutos.
                </p>
              </div>
              <div className="rounded-2xl p-6 border-2 border-[#d4a574]/40 bg-[#1a365d]/[0.04] relative">
                <span className="absolute -top-3 left-6 bg-[#d4a574] text-[#1a365d] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Recomendado
                </span>
                <h3 className="font-serif text-lg text-primary mb-1 mt-1">
                  Boda Completa
                </h3>
                <p className="text-[#d4a574] font-bold text-xl mb-3">Desde €2.200</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Foto + vídeo, 10h+ de cobertura. 900+ fotos editadas +
                  highlight reel. Álbum opcional (+€400).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            POSTBODA
        ═══════════════════════════════════════════════════════ */}
        <section id="postboda" className="py-20 bg-gradient-to-b from-secondary/15 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div>
                <Eyebrow>El broche final</Eyebrow>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mt-3 mb-5">
                  Postboda
                </h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p>
                    Las últimas fotos con el vestido, sin prisas, sin
                    protocolos, sin horarios.{" "}
                    <strong className="text-foreground">
                      Solo disfrutar.
                    </strong>
                  </p>
                  <p>
                    Ya nos conocemos, ya hay confianza — y ahí es donde la
                    magia ocurre casi sin proponérselo.
                  </p>
                </div>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]">✓</span> Sesión artística de 2-3h
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#d4a574]">✓</span> 50+ fotos editadas
                  </li>
                  <li className="flex items-center gap-2 col-span-2">
                    <span className="text-[#d4a574]">✓</span> Galería online privada descargable
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

              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-xl group">
                <Image
                  src={IMAGES.postboda}
                  alt="Sesión de postboda en la playa — pareja disfrutando junto al mar en Tarragona"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            ENTREGA — galería + ceremonia editada (vídeo real)
        ═══════════════════════════════════════════════════════ */}
        <section className="py-20 bg-gradient-to-b from-secondary/15 to-background">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Eyebrow>Después de la boda</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mt-3 mb-4">
                Lo que recibiréis
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Todo el material a través de una galería privada online, lista
                para compartir con vuestros seres queridos y conservar
                siempre.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-8 items-stretch max-w-5xl mx-auto">
              <div className="flex flex-col gap-4">
                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex-1">
                  <div className="w-12 h-12 mb-4 rounded-full bg-[#d4a574]/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#d4a574]"
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
                  <h3 className="font-serif text-lg text-primary mb-2">
                    Galería Privada
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    900+ fotos editadas en alta resolución, descargable, para
                    compartir con familia y amigos. Entrega en 4-6 semanas.
                  </p>
                </div>

                <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex-1">
                  <div className="w-12 h-12 mb-4 rounded-full bg-[#d4a574]/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-[#d4a574]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-lg text-primary mb-2">
                    Ceremonia Editada
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Vuestra ceremonia completa editada para revivir cada
                    instante — cada palabra, cada mirada, cada promesa.
                  </p>
                </div>
              </div>

              <YouTubeEmbed
                videoId="n5mSVcUFwcM"
                title="Ejemplo de ceremonia editada — Fran Momarch Bodas"
                id="video-ceremonia"
                dark={false}
              />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════
            PACK COMPLETO DESTACADO
        ═══════════════════════════════════════════════════════ */}
        <section className="py-20 bg-[#1a365d]">
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
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PACK_COMPLETO.features.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-white/80 text-sm"
                  >
                    <span className="text-[#d4a574] mt-0.5 shrink-0">✓</span>
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
        <section className="py-20 bg-gradient-to-b from-[#111827] to-gray-900">
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

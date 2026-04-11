import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  SITE_URL,
  BUSINESS_INFO,
  SERVICES,
  PHONE_DISPLAY,
  PHONE_LINK,
  getWhatsAppLink,
} from "@/lib/config"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Fotógrafo de Bodas en Tarragona | Fran Molina — Foto y Vídeo",
  description:
    "Fotógrafo de bodas en Tarragona y Costa Daurada. Reportajes de preboda, boda completa y postboda con estilo natural y cinematográfico. Presupuesto sin compromiso.",
  alternates: {
    canonical: `${SITE_URL}/fotografo-bodas-tarragona`,
  },
  openGraph: {
    title: "Fotógrafo de Bodas en Tarragona | Fran Molina — Foto y Vídeo",
    description:
      "Fotógrafo y videógrafo de bodas en Tarragona y Costa Daurada. Estilo natural, elegante y cinematográfico. Pack completo desde 3.000 €.",
    url: `${SITE_URL}/fotografo-bodas-tarragona`,
    type: "website",
    locale: "es_ES",
    siteName: BUSINESS_INFO.name,
    images: [
      {
        url: `${SITE_URL}/images/og/og-fotografo-bodas-tarragona.jpg`,
        width: 1200,
        height: 630,
        alt: "Fotógrafo de bodas en Tarragona — Fran Molina",
      },
    ],
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fotografía y Vídeo de Bodas en Tarragona",
  description:
    "Servicio de fotografía y videografía de bodas premium en Tarragona y la Costa Daurada. Reportajes de preboda, boda completa, postboda y same day edit con estilo natural y cinematográfico.",
  provider: { "@id": `${SITE_URL}/#business` },
  areaServed: [
    { "@type": "City", name: "Tarragona" },
    { "@type": "AdministrativeArea", name: "Reus" },
    { "@type": "AdministrativeArea", name: "Salou" },
    { "@type": "AdministrativeArea", name: "Cambrils" },
    { "@type": "AdministrativeArea", name: "Valls" },
    { "@type": "AdministrativeArea", name: "Tortosa" },
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
    {
      "@type": "ListItem",
      position: 2,
      name: "Fotógrafo de Bodas en Tarragona",
      item: `${SITE_URL}/fotografo-bodas-tarragona`,
    },
  ],
}

const TARRAGONA_FAQS = [
  {
    question: "¿Cuánto cuesta un fotógrafo de bodas en Tarragona?",
    answer:
      "Nuestros servicios en Tarragona parten desde 400 € para una sesión de preboda o postboda. El reportaje fotográfico de boda completa desde 1.200 €, el vídeo cinematográfico desde 1.400 € y la Boda Completa (foto + vídeo) desde 2.200 €. El Pack Completo con preboda, boda, same day edit y postboda desde 3.000 €.",
  },
  {
    question: "¿Cuáles son los mejores venues para bodas en Tarragona?",
    answer:
      "Tarragona y la Costa Daurada ofrecen venues extraordinarios: masías como Mas Rodó, Mas Calvó o Cal Blay, fincas frente al mar como el Fortí del Rourell, espacios con historia como la Catedral de Tarragona o el Circ Romà, y cavas del Priorat. También son muy populares los espacios en Cambrils, Salou y Reus. Conozco la mayoría de venues de la zona y puedo asesorarte sobre la mejor luz y localizaciones para las fotos.",
  },
  {
    question: "¿Necesito permisos especiales para fotos de boda en Tarragona?",
    answer:
      "Para sesiones en el casco antiguo, el Anfiteatro Romano, el Balcón del Mediterráneo o la playa del Miracle es recomendable consultar con el Ayuntamiento de Tarragona si se usan trípodes o equipos de iluminación. En masías y venues privados el permiso está incluido en el alquiler. Nos encargamos de gestionar los permisos necesarios.",
  },
  {
    question: "¿Cubres bodas en Reus, Salou, Cambrils y alrededores?",
    answer:
      "Sí. Tarragona es nuestra base y cubrimos toda la Costa Daurada sin coste adicional de desplazamiento: Reus, Salou, Cambrils, Valls, Tortosa, Altafulla, Torredembarra, Vila-seca y cualquier punto de la provincia. También viajamos a Barcelona, Girona y Lleida.",
  },
  {
    question: "¿Cuáles son las mejores horas de luz para fotos de boda en Tarragona?",
    answer:
      "La hora dorada en Tarragona varía según la temporada: en verano (junio–agosto) entre las 19:30 y 21:00, y en otoño-primavera entre las 17:30 y 19:00. Para sesiones con vistas al mar desde el Balcón del Mediterráneo o la playa Larga, los atardeceres son espectaculares. En masías con arboleda como Mas Rodó, la luz filtrada del mediodía también funciona muy bien.",
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: TARRAGONA_FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

const TARRAGONA_PORTFOLIO = [
  {
    id: 4,
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_05_10_ANGELA&ANGEL%202081.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDVfMTBfQU5HRUxBJkFOR0VMIDIwODEuSlBHIiwiaWF0IjoxNzc0MzA0MzgxLCJleHAiOjIwODk2NjQzODF9.BlvlBjCPkwHh80JfMZlQlB-ASsnK0kfHhe0tYM2wgHA",
    title: "Boda en el Rourell, Tarragona",
    alt: "Pareja enamorada en Fortí del Rourell — fotógrafo de bodas Tarragona",
  },
  {
    id: 11,
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_05_10_ANGELA&ANGEL%203052.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDVfMTBfQU5HRUxBJkFOR0VMIDMwNTIuSlBHIiwiaWF0IjoxNzc0MzA0MzIxLCJleHAiOjIwODk2NjQzMjF9.zMzWlycmSOG_GOv-QFS0vHzyO7oBiJiVnDrcL5_s-Uo",
    title: "Boda en el Rourell, Tarragona — Pareja",
    alt: "Momento íntimo de pareja en boda en Tarragona — Fran Molina fotografía",
  },
  {
    id: 2,
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/post4.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzL3Bvc3Q0LkpQRyIsImlhdCI6MTc3NDMwNTU0MywiZXhwIjoyMDg5NjY1NTQzfQ.4oRVCzXJTN7l8tAuD5v-BdzwdzPGAJ8COD0JMpAIUy0",
    title: "Postboda en Tarragona — Bosque de la Marquesa",
    alt: "Sesión de postboda en el Bosque de la Marquesa, Tarragona — fotografía de bodas",
  },
  {
    id: 8,
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/4.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzQuSlBHIiwiaWF0IjoxNzc1NjcxNzMyLCJleHAiOjIwOTEwMzE3MzJ9.DTiLk2R8b7k683nZxbOOI2LjV2yeDNQjkuDJPApZRhM",
    title: "Postboda en Tarragona — Playa",
    alt: "Sesión de postboda en la playa de Tarragona — recuerdos junto al mar",
  },
]

export default function FotografoBodasTarragona() {
  const whatsappTarragona = getWhatsAppLink(
    "Hola Fran, me interesa información sobre fotografía de bodas en Tarragona."
  )

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main itemScope itemType="https://schema.org/WebPage">
        <section className="relative h-[70vh] w-full overflow-hidden">
          <Image src={TARRAGONA_PORTFOLIO[0].image} alt="Fotógrafo de bodas en Tarragona — Fran Molina" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
          <header className="absolute inset-0 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-6xl xl:text-7xl font-serif text-white/95 leading-[1.1] mb-6 drop-shadow-2xl text-balance">Fotógrafo de Bodas en Tarragona</h1>
              <p className="text-xl md:text-2xl text-[#d4a574]/90 font-medium mb-10">
                <strong>{BUSINESS_INFO.shortName}</strong> — Reportajes de boda con alma mediterránea en la Costa Daurada
              </p>
              <a href="#contacto-tarragona" className="inline-block bg-[#d4a574] hover:bg-[#d4a574]/90 text-[#1a365d] px-10 py-5 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 uppercase tracking-wide">Pide presupuesto</a>
            </div>
          </header>
        </section>

        <section className="py-20 bg-background">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8 text-center">Tu boda en Tarragona, contada con emoción</h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>Tarragona y la Costa Daurada son el escenario perfecto para una boda mediterránea. Masías centenarias entre viñedos, playas doradas, ruinas romanas con siglos de historia… Cada rincón de esta tierra ofrece una luz y una atmósfera únicas. Como <strong>fotógrafo de bodas en Tarragona</strong>, llevo más de {new Date().getFullYear() - BUSINESS_INFO.foundedYear} años capturando la esencia de cada pareja con un estilo natural, cinematográfico y cuidado hasta el último detalle.</p>
              <p>Conozco los mejores venues de Tarragona, Reus, Salou, Cambrils y toda la Costa Daurada. Sé a qué hora la luz baña el Anfiteatro Romano, en qué rincón del Bosque de la Marquesa se filtra el sol entre las hojas, y cómo aprovechar cada minuto del atardecer en la playa Larga. Ese conocimiento local marca la diferencia en tus fotos.</p>
              <p>Trabajo con parejas que buscan un reportaje auténtico, sin poses forzadas, donde la emoción y la complicidad sean las protagonistas. Desde los preparativos hasta el último baile, estaré ahí para que no se pierda ningún momento.</p>
            </div>
            <nav className="mt-10 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-accent transition-colors">Inicio</Link>
              <span className="mx-2">›</span>
              <span className="text-foreground">Fotógrafo de Bodas en Tarragona</span>
            </nav>
          </div>
        </section>

        <section className="py-20 px-6 bg-secondary/10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary">Bodas en Tarragona y Costa Daurada</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {TARRAGONA_PORTFOLIO.map((item) => (
                <article key={item.id} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                  <figure className="relative h-80 md:h-96">
                    <Image src={item.image} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" loading="lazy" />
                  </figure>
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white font-medium text-lg">{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
            <p className="text-center mt-10 text-muted-foreground">
              <Link href="/#portfolio" className="text-accent hover:text-accent/80 font-medium underline underline-offset-4 transition-colors">Ver portfolio completo →</Link>
            </p>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-secondary/20 to-transparent">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-center">Servicios de Fotografía de Bodas en Tarragona</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-center mb-16">Cobertura en Tarragona, Reus, Salou, Cambrils, Valls y toda la Costa Daurada sin coste de desplazamiento.</p>
            <div className="space-y-8">
              <article className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-serif text-primary mb-3">Preboda en Tarragona</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Sesiones de pareja en los escenarios más fotogénicos de Tarragona: el Anfiteatro Romano, el Bosque de la Marquesa, viñedos del Priorat o la playa Larga al atardecer. 2-3 horas con más de 50 fotos editadas. <strong>Desde 400 €.</strong></p>
                <Link href="/#servicios" className="text-accent hover:text-accent/80 font-medium underline underline-offset-4 transition-colors">Ver detalles completos →</Link>
              </article>
              <article className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-serif text-primary mb-3">Boda Completa en Tarragona</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Cobertura del día entero en masías como Mas Rodó o Cal Blay, el Fortí del Rourell, o cualquier venue de la Costa Daurada. Fotografía y vídeo cinematográfico con más de 400 fotos editadas y highlight reel. <strong>Desde 2.200 €.</strong></p>
                <Link href="/#servicios" className="text-accent hover:text-accent/80 font-medium underline underline-offset-4 transition-colors">Ver detalles completos →</Link>
              </article>
              <article className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-2xl font-serif text-primary mb-3">Postboda en Tarragona</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">Sesión artística en la playa Larga, el Balcón del Mediterráneo, calas de l'Ametlla de Mar o rincones escondidos de la Costa Daurada. Incluye álbum de lujo. <strong>Desde 400 €.</strong></p>
                <Link href="/#servicios" className="text-accent hover:text-accent/80 font-medium underline underline-offset-4 transition-colors">Ver detalles completos →</Link>
              </article>
            </div>
            <div className="text-center mt-12">
              <Link href="/#servicios" className="inline-block bg-accent/10 text-accent border-2 border-accent/30 px-10 py-4 rounded-xl font-semibold hover:bg-accent hover:text-[#1a365d] transition-all duration-300">Ver todos los servicios y precios</Link>
            </div>
          </div>
        </section>

        <section className="py-24 bg-background" aria-label="Preguntas frecuentes sobre fotografía de bodas en Tarragona">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-center">Preguntas Frecuentes — Bodas en Tarragona</h2>
            <p className="text-muted-foreground text-lg text-center mb-12">Todo lo que necesitas saber sobre contratar un fotógrafo de bodas en Tarragona y la Costa Daurada</p>
            <div className="space-y-6">
              {TARRAGONA_FAQS.map((faq, index) => (
                <details key={index} className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5 group open:shadow-lg transition-shadow">
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

        <section id="contacto-tarragona" className="py-24 bg-gradient-to-b from-[#111827] to-gray-900">
          <div className="max-w-lg mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">¿Te casas en Tarragona?</h2>
            <p className="text-white/70 mb-10 text-lg">Cuéntame sobre tu boda y te envío una propuesta personalizada en menos de 24 horas. Sin compromiso.</p>
            <a href={whatsappTarragona} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white py-5 px-10 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(34,197,94,0.4)] uppercase tracking-wide transition-all duration-300" aria-label="Contactar por WhatsApp para boda en Tarragona">
              💬 Chatear por WhatsApp
            </a>
            <p className="mt-6 text-white/50 text-sm">
              o llámame al{" "}
              <a href={PHONE_LINK} className="text-accent hover:text-accent/80 transition-colors">{PHONE_DISPLAY}</a>
            </p>
            <nav className="mt-12 pt-8 border-t border-white/10 text-white/50 text-sm space-y-2">
              <p>También trabajo en:</p>
              <div className="flex justify-center gap-6">
                <Link href="/fotografo-bodas-barcelona" className="text-accent/70 hover:text-accent transition-colors">Barcelona</Link>
                <Link href="/fotografo-bodas-girona" className="text-accent/70 hover:text-accent transition-colors">Girona</Link>
              </div>
            </nav>
          </div>
        </section>

        <Footer />
      </main>
    </>
  )
}

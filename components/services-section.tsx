"use client"

import { motion } from "framer-motion"
import {
  Camera,
  Film,
  Sparkles,
  Crown,
  Check,
  type LucideIcon,
} from "lucide-react"

import { SERVICES, PACK_COMPLETO, getWhatsAppLink } from "@/lib/config"
import { Container, Section } from "@/components/ui/container"

const SERVICE_ICONS: Record<string, LucideIcon> = {
  preboda: Camera,
  "boda-completa": Film,
  postboda: Sparkles,
}

/**
 * Cambios vs versión previa:
 * - Precio tachado y ahorro leen individualTotalLabel / savingsLabel:
 *   antes se mezclaba "€3.300" literal con toLocaleString("es-ES"), que no
 *   agrupa 4 dígitos → en pantalla salía "€3.300  €3800".
 * - Container/Section: el ancho pasa a ser el mismo del resto del sitio.
 *   Antes max-w-6xl aquí y max-w-4xl en el Pack, con el header a max-w-7xl.
 * - Gradient del Pack como inline style: Tailwind v4 + hex arbitrario en
 *   bg-gradient-* falla en iOS Safari (fondo transparente → texto invisible).
 */
export function ServicesSection() {
  return (
    <Section
      id="servicios"
      rhythm="loose"
      className="bg-gradient-to-b from-secondary/20 to-transparent"
      aria-label="Servicios de fotografía y vídeo de bodas en Tarragona"
      itemScope
      itemType="https://schema.org/Service"
    >
      <Container width="content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-[46ch] text-center sm:mb-16"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.22em] text-accent">
            Servicios
          </p>
          <h2
            className="mb-4 font-serif text-[clamp(1.875rem,1.5rem+1.9vw,3.25rem)] leading-[1.08] text-balance text-primary"
            itemProp="name"
          >
            Fotografía y vídeo de boda, a vuestra medida
          </h2>
          <p
            className="text-muted-foreground leading-relaxed"
            itemProp="description"
          >
            Cada servicio está pensado para capturar la esencia de vuestro amor
            con la elegancia mediterránea de la Costa Daurada.
          </p>
        </motion.div>

        {/* ─── PACK COMPLETO DESTACADO ─── */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12 sm:mb-16"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <div className="absolute -top-4 left-1/2 z-10 -translate-x-1/2">
            <span className="whitespace-nowrap rounded-full bg-accent px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#1a365d] shadow-lg sm:px-6 sm:text-sm">
              Más elegido
            </span>
          </div>

          <div
            style={{
              backgroundImage:
                "linear-gradient(to bottom right, #1a365d 0%, #0f2440 100%)",
            }}
            className="rounded-3xl border border-white/10 p-6 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] sm:p-8 md:p-12"
          >
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <div className="shrink-0 rounded-xl bg-white/10 p-3">
                    <Crown
                      className="h-7 w-7 text-accent sm:h-8 sm:w-8"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="font-serif text-2xl leading-tight text-white sm:text-3xl"
                      itemProp="name"
                    >
                      {PACK_COMPLETO.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-accent sm:text-sm">
                      {PACK_COMPLETO.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mb-6 text-sm leading-relaxed text-white/80 sm:text-base">
                  {PACK_COMPLETO.description}
                </p>

                <div className="mb-6">
                  <div className="tabular flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span
                      className="text-3xl font-bold text-accent sm:text-4xl"
                      itemProp="price"
                    >
                      {PACK_COMPLETO.price}
                    </span>
                    <span className="text-base text-white/50 line-through sm:text-lg">
                      {PACK_COMPLETO.individualTotalLabel}
                    </span>
                  </div>
                  <meta itemProp="priceCurrency" content="EUR" />
                  <p className="mt-2 text-xs font-medium text-emerald-300 sm:text-sm">
                    Ahorro de {PACK_COMPLETO.savingsLabel} respecto a
                    contratarlo por separado
                  </p>
                </div>

                <a
                  href={getWhatsAppLink(PACK_COMPLETO.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-xl bg-accent px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-[#1a365d] shadow-xl transition-all duration-300 hover:bg-accent/90 hover:shadow-2xl sm:px-10 sm:text-base md:inline-block md:w-auto"
                  aria-label="Reservar Pack Completo por WhatsApp"
                >
                  Reservar Pack Completo
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
                <p className="mb-4 text-xs font-medium uppercase tracking-wider text-white sm:text-sm">
                  El pack incluye
                </p>
                <ul className="space-y-3">
                  {PACK_COMPLETO.features.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-white/85 sm:text-base"
                    >
                      <Check
                        className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.article>

        {/* ─── SEPARADOR ─── */}
        <div className="mb-10 flex items-center gap-6 sm:mb-12">
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
          <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">
            O elegid servicios individuales
          </p>
          <span className="h-px flex-1 bg-border" aria-hidden="true" />
        </div>

        {/* ─── SERVICIOS INDIVIDUALES ─── */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id] || Camera

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ y: -8 }}
                className="flex w-full flex-col rounded-3xl border border-border/50 bg-card/80 p-6 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] sm:p-8 md:p-9"
                itemScope
                itemType="https://schema.org/Offer"
              >
                <div className="mb-5 flex justify-center sm:mb-6">
                  <div className="rounded-2xl bg-accent/10 p-4">
                    <Icon
                      className="h-10 w-10 text-accent sm:h-12 sm:w-12"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <h3
                  className="mb-1 text-center font-serif text-xl text-primary sm:text-2xl"
                  itemProp="name"
                >
                  {service.name}
                </h3>
                {service.subtitle && (
                  <p className="mb-4 text-center text-xs text-muted-foreground sm:text-sm">
                    {service.subtitle}
                  </p>
                )}

                <ul
                  className="mb-6 flex-grow space-y-2.5 text-sm leading-relaxed text-card-foreground/80 sm:mb-8 sm:space-y-3 sm:text-base"
                  aria-label={`Características de ${service.name}`}
                >
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span
                        className="mt-1 shrink-0 text-accent"
                        aria-hidden="true"
                      >
                        •
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <div className="mb-5 text-center sm:mb-6">
                    <div className="tabular flex flex-wrap items-baseline justify-center gap-x-2.5">
                      <span
                        className="text-xl font-bold text-accent sm:text-2xl"
                        itemProp="price"
                      >
                        Desde {service.price}
                      </span>
                      {service.individualTotalLabel && (
                        <span className="text-sm text-muted-foreground/60 line-through">
                          {service.individualTotalLabel}
                        </span>
                      )}
                    </div>
                    <meta itemProp="priceCurrency" content="EUR" />
                    {service.savingsLabel && (
                      <p className="mt-1.5 text-xs font-medium text-emerald-700">
                        Ahorro de {service.savingsLabel}
                      </p>
                    )}
                  </div>

                  <a
                    href={getWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full rounded-xl border-2 border-accent/30 bg-accent/10 px-6 py-3.5 text-center text-sm font-semibold text-accent transition-all duration-300 hover:bg-accent hover:text-[#1a365d] sm:px-8 sm:py-4 sm:text-base"
                    aria-label={`Reservar ${service.name} por WhatsApp`}
                  >
                    Reservar
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}

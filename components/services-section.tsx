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

const SERVICE_ICONS: Record<string, LucideIcon> = {
  preboda: Camera,
  "boda-completa": Film,
  postboda: Sparkles,
}

export function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-24 bg-gradient-to-b from-secondary/20 to-transparent"
      aria-label="Servicios de fotografía y vídeo de bodas en Tarragona"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-serif text-primary mb-4"
            itemProp="name"
          >
            Servicios de Fotografía de Bodas Premium
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            itemProp="description"
          >
            Cada servicio está diseñado para capturar la esencia de tu amor con
            la elegancia mediterránea de Tarragona y la Costa Daurada
          </p>
        </motion.div>

        {/* ─── PACK COMPLETO DESTACADO ─── */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-16 max-w-4xl mx-auto"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="bg-accent text-[#1a365d] text-sm font-bold px-6 py-2 rounded-full shadow-lg uppercase tracking-wider">
              Más elegido
            </span>
          </div>

          <div className="bg-gradient-to-br from-[#1a365d] to-[#0f2440] rounded-3xl p-8 md:p-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-accent/20">
                    <Crown
                      className="w-8 h-8 text-accent"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <h3
                      className="text-3xl font-serif text-white"
                      itemProp="name"
                    >
                      {PACK_COMPLETO.name}
                    </h3>
                    <p className="text-accent/80 text-sm font-medium">
                      {PACK_COMPLETO.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-white/70 leading-relaxed mb-6">
                  {PACK_COMPLETO.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    <span
                      className="text-4xl font-bold text-accent"
                      itemProp="price"
                    >
                      {PACK_COMPLETO.price}
                    </span>
                    <span className="text-white/40 line-through text-lg">
                      €{PACK_COMPLETO.individualTotal.toLocaleString("es-ES")}
                    </span>
                  </div>
                  <meta itemProp="priceCurrency" content="EUR" />
                  <p className="text-green-400 text-sm font-medium mt-1">
                    Ahorro de €{PACK_COMPLETO.savings} respecto al valor total
                  </p>
                </div>

                <a
                  href={getWhatsAppLink(PACK_COMPLETO.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-accent text-[#1a365d] px-10 py-4 rounded-xl font-semibold hover:bg-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 uppercase tracking-wide"
                  aria-label="Reservar Pack Completo por WhatsApp"
                >
                  Reservar Pack Completo
                </a>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <p className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
                  El pack incluye
                </p>
                <ul className="space-y-3">
                  {PACK_COMPLETO.features.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-white/80"
                    >
                      <Check
                        className="w-5 h-5 text-accent shrink-0 mt-0.5"
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
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm uppercase tracking-widest">
            O elige servicios individuales
          </p>
        </div>

        {/* ─── SERVICIOS INDIVIDUALES ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.id] || Camera

            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="flex flex-col max-w-sm mx-auto w-full bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 border border-white/50"
                itemScope
                itemType="https://schema.org/Offer"
              >
                {/* Icono */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-accent/10">
                    <Icon
                      className="w-12 h-12 text-accent"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Título + subtítulo */}
                <h3
                  className="text-2xl font-serif mb-1 text-primary text-center"
                  itemProp="name"
                >
                  {service.name}
                </h3>
                {service.subtitle && (
                  <p className="text-muted-foreground text-sm text-center mb-4">
                    {service.subtitle}
                  </p>
                )}

                {/* Features — crece para ocupar espacio variable */}
                <ul
                  className="flex-grow space-y-3 text-gray-700 leading-relaxed mb-8"
                  aria-label={`Características de ${service.name}`}
                >
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1" aria-hidden="true">
                        •
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Precio + CTA — siempre anclados abajo */}
                <div className="mt-auto">
                  <div className="text-center mb-6">
                    <span
                      className="text-2xl font-bold text-accent"
                      itemProp="price"
                    >
                      Desde {service.price}
                    </span>
                    <meta itemProp="priceCurrency" content="EUR" />
                  </div>

                  <a
                    href={getWhatsAppLink(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-accent/10 text-accent border-2 border-accent/30 px-8 py-4 rounded-xl font-semibold hover:bg-accent hover:text-[#1a365d] transition-all duration-300"
                    aria-label={`Reservar ${service.name} por WhatsApp`}
                  >
                    Reservar
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

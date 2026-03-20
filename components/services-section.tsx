"use client"

import { motion } from "framer-motion"
import { Camera, Film, Sparkles, type LucideIcon } from "lucide-react"
import { SERVICES, getWhatsAppLink } from "@/lib/config"

// Mapeo de iconos por servicio para mantener la configuración separada de la UI
const SERVICE_ICONS: Record<string, LucideIcon> = {
  "preboda": Camera,
  "boda-completa": Film,
  "postboda": Sparkles,
}

/**
 * Sección de servicios premium con cards interactivas
 * Cada card incluye schema.org para SEO y enlace directo a WhatsApp
 */
export function ServicesSection() {
  return (
    <section 
      id="servicios"
      className="py-24 bg-gradient-to-b from-secondary/20 to-transparent"
      aria-label="Servicios de fotografía de bodas"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Encabezado de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4" itemProp="name">
            Servicios de Fotografía de Bodas Premium
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" itemProp="description">
            Cada servicio está diseñado para capturar la esencia de tu amor 
            con la elegancia mediterránea de Tarragona y la Costa Daurada
          </p>
        </motion.div>

        {/* Grid de servicios */}
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
                className="max-w-sm mx-auto w-full bg-white/80 backdrop-blur-sm rounded-3xl p-10 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 border border-white/50"
                itemScope
                itemType="https://schema.org/Offer"
              >
                {/* Icono del servicio */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-2xl bg-accent/10">
                    <Icon 
                      className="w-16 h-16 text-accent" 
                      strokeWidth={1.5} 
                      aria-hidden="true" 
                    />
                  </div>
                </div>

                {/* Título */}
                <h3 
                  className="text-2xl font-serif mb-4 text-primary text-center" 
                  itemProp="name"
                >
                  {service.title}
                </h3>

                {/* Lista de características */}
                <ul 
                  className="space-y-3 text-gray-700 leading-relaxed mb-8"
                  aria-label={`Características de ${service.title}`}
                >
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-accent mt-1" aria-hidden="true">•</span>
                      <span itemProp="description">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Precio */}
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-accent" itemProp="price">
                    Desde {service.price}
                  </span>
                  <meta itemProp="priceCurrency" content="EUR" />
                </div>

                {/* Botón de reserva */}
                <a
                  href={getWhatsAppLink(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-accent text-[#1a365d] px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300"
                  aria-label={`Reservar ${service.title} por WhatsApp`}
                >
                  Reservar
                </a>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

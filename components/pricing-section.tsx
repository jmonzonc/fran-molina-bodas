"use client"

import { motion } from "framer-motion"
import { Camera, Check, Minus, Star, Video } from "lucide-react"
import { PRICING_DATA, PACK_COMPLETO, getWhatsAppLink } from "@/lib/config"

/**
 * Sección de precios con tabla detallada + recordatorio del Pack Completo
 *
 * Cambios vs versión previa:
 * - Banner Pack Completo: gradient inline style (Tailwind v4 + arbitrary hex
 *   en bg-gradient-to-r falla en iOS Safari → fondo transparente → texto invisible)
 * - Mobile: badges Foto/Vídeo inline en cada fila (antes ocultos en <640px)
 * - Descripción visible siempre, no solo en sm+
 * - Tokens del tema en lugar de bg-white / text-gray-* hard-coded
 * - Contraste reforzado en precio (text-accent en vez de /80)
 */
export function PricingSection() {
  return (
    <section
      id="precios"
      className="py-16 sm:py-20 bg-gradient-to-r from-primary/5 to-secondary/10"
      aria-label="Precios de fotografía y vídeo de bodas en Tarragona"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Encabezado */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-primary mb-3 sm:mb-4">
            Tu boda, tu presupuesto
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Transparencia total en cada servicio. Combínalos como prefieras.
          </p>
        </motion.header>

        {/* Tabla de precios detallada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl shadow-2xl bg-card mb-8"
        >
          <div className="overflow-x-auto">
            <table
              className="w-full"
              role="table"
              aria-label="Desglose de precios de todos los servicios"
            >
              <thead className="bg-accent/10">
                <tr>
                  <th
                    className="py-4 px-4 sm:px-6 font-medium text-primary text-left text-sm sm:text-base"
                    scope="col"
                  >
                    Servicio
                  </th>
                  <th
                    className="py-4 px-6 font-medium text-primary text-center hidden sm:table-cell"
                    scope="col"
                  >
                    Fotografía
                  </th>
                  <th
                    className="py-4 px-6 font-medium text-primary text-center hidden sm:table-cell"
                    scope="col"
                  >
                    Vídeo
                  </th>
                  <th
                    className="py-4 px-4 sm:px-6 font-medium text-primary text-right text-sm sm:text-base"
                    scope="col"
                  >
                    Desde
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING_DATA.map((row, index) => {
                  const isHighlighted = row.service === "Boda Completa"

                  return (
                    <motion.tr
                      key={row.service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className={`border-b border-border last:border-0 transition-colors ${
                        isHighlighted
                          ? "bg-accent/5 hover:bg-accent/10"
                          : "hover:bg-accent/5"
                      }`}
                    >
                      <td className="py-4 px-4 sm:px-6 align-top">
                        <div className="flex items-start gap-2">
                          {isHighlighted && (
                            <Star
                              className="w-4 h-4 text-accent fill-accent shrink-0 mt-1"
                              aria-hidden="true"
                            />
                          )}
                          <div className="min-w-0">
                            <span
                              className={`font-medium text-sm sm:text-base ${
                                isHighlighted
                                  ? "text-accent"
                                  : "text-foreground"
                              }`}
                            >
                              {row.service}
                            </span>

                            {/* Badges Foto/Vídeo solo en mobile */}
                            <div className="flex gap-2 mt-1.5 sm:hidden">
                              {row.photography && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                                  <Camera className="w-3 h-3" aria-hidden="true" />
                                  Foto
                                </span>
                              )}
                              {row.video && (
                                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                                  <Video className="w-3 h-3" aria-hidden="true" />
                                  Vídeo
                                </span>
                              )}
                            </div>

                            <p className="text-xs text-muted-foreground mt-1 leading-snug">
                              {row.description}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center hidden sm:table-cell align-top">
                        {row.photography ? (
                          <Check
                            className="w-5 h-5 text-green-600 mx-auto"
                            aria-label="Incluido"
                          />
                        ) : (
                          <Minus
                            className="w-5 h-5 text-muted-foreground/40 mx-auto"
                            aria-label="No incluido"
                          />
                        )}
                      </td>
                      <td className="py-4 px-6 text-center hidden sm:table-cell align-top">
                        {row.video ? (
                          <Check
                            className="w-5 h-5 text-green-600 mx-auto"
                            aria-label="Incluido"
                          />
                        ) : (
                          <Minus
                            className="w-5 h-5 text-muted-foreground/40 mx-auto"
                            aria-label="No incluido"
                          />
                        )}
                      </td>
                      <td
                        className={`py-4 px-4 sm:px-6 text-right font-semibold whitespace-nowrap align-top text-sm sm:text-base ${
                          isHighlighted ? "text-accent" : "text-accent"
                        }`}
                      >
                        {row.price}
                      </td>
                    </motion.tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="px-4 sm:px-6 py-4 bg-muted/30 border-t border-border">
            <p className="text-xs sm:text-sm text-muted-foreground italic text-center">
              *Precios orientativos. Personalizamos tu paquete según tus
              necesidades
            </p>
          </div>
        </motion.div>

        {/* Banner Pack Completo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundImage:
              "linear-gradient(to right, #1a365d 0%, #0f2440 100%)",
          }}
          className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="text-center md:text-left w-full md:w-auto">
            <p className="text-accent font-medium text-xs sm:text-sm uppercase tracking-wider mb-2">
              Mejor valor
            </p>
            <p className="text-white text-lg sm:text-xl font-serif leading-tight">
              Pack Completo — Preboda + Boda + Same Day Edit + Postboda
            </p>
            <p className="text-white/70 text-xs sm:text-sm mt-2">
              Pack de{" "}
              <span className="text-accent font-bold">
                {PACK_COMPLETO.price}
              </span>{" "}
              por valor de €
              {PACK_COMPLETO.individualTotal.toLocaleString("es-ES")}
            </p>
          </div>
          <a
            href={getWhatsAppLink(PACK_COMPLETO.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 w-full md:w-auto text-center bg-accent text-[#1a365d] px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 shadow-xl transition-all duration-300 uppercase tracking-wide text-sm"
          >
            Quiero el pack
          </a>
        </motion.div>
      </div>
    </section>
  )
}

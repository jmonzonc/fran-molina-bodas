"use client"

import { motion } from "framer-motion"
import { Check, Minus, Star } from "lucide-react"
import { PRICING_DATA, PACK_COMPLETO, getWhatsAppLink } from "@/lib/config"

/**
 * Sección de precios con tabla detallada + recordatorio del Pack Completo
 *
 * REESTRUCTURACIÓN: ahora muestra 6 filas con todas las opciones reales:
 *  - Preboda (€400)
 *  - Boda solo foto (€1.200)
 *  - Boda solo vídeo (€1.400)
 *  - Boda Completa foto+vídeo (€2.200) ← destacada
 *  - Same Day Edit (€400)
 *  - Postboda (€400)
 */
export function PricingSection() {
  return (
    <section
      id="precios"
      className="py-20 bg-gradient-to-r from-primary/5 to-secondary/10"
      aria-label="Precios de fotografía y vídeo de bodas en Tarragona"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Encabezado */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Tu boda, tu presupuesto
          </h2>
          <p className="text-muted-foreground text-lg">
            Transparencia total en cada servicio. Combínalos como prefieras.
          </p>
        </motion.header>

        {/* Tabla de precios detallada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl shadow-2xl bg-white mb-8"
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
                    className="py-4 px-6 font-medium text-primary text-left"
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
                    className="py-4 px-6 font-medium text-primary text-right"
                    scope="col"
                  >
                    Desde
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING_DATA.map((row, index) => {
                  // Destacar la Boda Completa (foto+vídeo)
                  const isHighlighted = row.service === "Boda Completa"

                  return (
                    <motion.tr
                      key={row.service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className={`border-b border-gray-100 last:border-0 transition-colors ${
                        isHighlighted
                          ? "bg-accent/5 hover:bg-accent/10"
                          : "hover:bg-accent/5"
                      }`}
                    >
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          {isHighlighted && (
                            <Star
                              className="w-4 h-4 text-accent fill-accent shrink-0"
                              aria-hidden="true"
                            />
                          )}
                          <div>
                            <span
                              className={`font-medium ${
                                isHighlighted
                                  ? "text-accent"
                                  : "text-foreground"
                              }`}
                            >
                              {row.service}
                            </span>
                            <p className="text-xs text-muted-foreground mt-0.5 hidden sm:block">
                              {row.description}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center hidden sm:table-cell">
                        {row.photography ? (
                          <Check
                            className="w-5 h-5 text-green-600 mx-auto"
                            aria-label="Incluido"
                          />
                        ) : (
                          <Minus
                            className="w-5 h-5 text-gray-300 mx-auto"
                            aria-label="No incluido"
                          />
                        )}
                      </td>
                      <td className="py-4 px-6 text-center hidden sm:table-cell">
                        {row.video ? (
                          <Check
                            className="w-5 h-5 text-green-600 mx-auto"
                            aria-label="Incluido"
                          />
                        ) : (
                          <Minus
                            className="w-5 h-5 text-gray-300 mx-auto"
                            aria-label="No incluido"
                          />
                        )}
                      </td>
                      <td
                        className={`py-4 px-6 text-right font-semibold ${
                          isHighlighted ? "text-accent" : "text-accent/80"
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

          {/* Nota al pie */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-sm text-gray-600 italic text-center">
              *Precios orientativos. Personalizamos tu paquete según tus
              necesidades
            </p>
          </div>
        </motion.div>

        {/* Banner Pack Completo — recordatorio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#1a365d] to-[#0f2440] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="text-accent font-medium text-sm uppercase tracking-wider mb-1">
              Mejor valor
            </p>
            <p className="text-white text-xl font-serif">
              Pack Completo — Preboda + Boda + Same Day Edit + Postboda
            </p>
            <p className="text-white/60 text-sm mt-1">
              Pack de{" "}
              <span className="text-accent font-bold">
                {PACK_COMPLETO.price}
              </span>{" "}
              por valor de €{PACK_COMPLETO.individualTotal.toLocaleString("es-ES")}
            </p>
          </div>
          <a
            href={getWhatsAppLink(PACK_COMPLETO.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 bg-accent text-[#1a365d] px-8 py-4 rounded-xl font-semibold hover:bg-accent/90 shadow-xl transition-all duration-300 uppercase tracking-wide text-sm"
          >
            Quiero el pack
          </a>
        </motion.div>
      </div>
    </section>
  )
}

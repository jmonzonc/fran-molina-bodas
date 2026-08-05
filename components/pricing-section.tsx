"use client"

import { motion } from "framer-motion"
import { Camera, Check, Minus, Star, Video } from "lucide-react"

import { PRICING_DATA, PACK_COMPLETO, getWhatsAppLink } from "@/lib/config"
import { Container, Section } from "@/components/ui/container"

/**
 * Cambios vs versión previa:
 *
 * - Formato de precio: `toLocaleString("es-ES")` imprimía "3800" sin
 *   separador (es-ES usa minimumGroupingDigits: 2) junto a "€3.000"
 *   hardcodeado. Ahora se leen las etiquetas ya formateadas del config.
 * - Columna "Ahorro": PRICING_DATA incorpora individualTotalLabel y
 *   savingsLabel en los paquetes (Boda Completa y Pack Completo).
 * - Fila del Pack Completo destacada, no solo Boda Completa.
 * - Ancho: max-w-4xl (896 px) era el segundo hueco lateral más grande de
 *   la home. Pasa a `content` (1200 px), alineado con el resto.
 * - `.tabular` en la columna de precios: sin cifras tabulares los importes
 *   bailan verticalmente al tener distinto número de dígitos.
 */

const HIGHLIGHTED = new Set(["Boda Completa", PACK_COMPLETO.name])

export function PricingSection() {
  return (
    <Section
      id="precios"
      rhythm="loose"
      className="bg-gradient-to-r from-primary/5 to-secondary/10"
      aria-label="Precios de fotografía y vídeo de bodas en Tarragona"
    >
      <Container width="content">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-[46ch] text-center sm:mb-12"
        >
          <h2 className="mb-3 font-serif text-[clamp(1.875rem,1.5rem+1.9vw,3.25rem)] leading-[1.08] text-balance text-primary sm:mb-4">
            Vuestra boda, vuestro presupuesto
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Transparencia total en cada servicio. Combinadlos como prefiráis.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 overflow-hidden rounded-3xl bg-card shadow-2xl"
        >
          <div className="overflow-x-auto">
            <table
              className="w-full"
              aria-label="Desglose de precios de todos los servicios"
            >
              <thead className="bg-accent/10">
                <tr>
                  <th
                    className="px-4 py-4 text-left text-sm font-medium text-primary sm:px-6 sm:text-base"
                    scope="col"
                  >
                    Servicio
                  </th>
                  <th
                    className="hidden px-6 py-4 text-center font-medium text-primary sm:table-cell"
                    scope="col"
                  >
                    Fotografía
                  </th>
                  <th
                    className="hidden px-6 py-4 text-center font-medium text-primary sm:table-cell"
                    scope="col"
                  >
                    Vídeo
                  </th>
                  <th
                    className="px-4 py-4 text-right text-sm font-medium text-primary sm:px-6 sm:text-base"
                    scope="col"
                  >
                    Desde
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRICING_DATA.map((row, index) => {
                  const isHighlighted = HIGHLIGHTED.has(row.service)

                  return (
                    <motion.tr
                      key={row.service}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.06 }}
                      className={`border-b border-border transition-colors last:border-0 ${
                        isHighlighted
                          ? "bg-accent/5 hover:bg-accent/10"
                          : "hover:bg-accent/5"
                      }`}
                    >
                      <td className="px-4 py-4 align-top sm:px-6">
                        <div className="flex items-start gap-2">
                          {isHighlighted && (
                            <Star
                              className="mt-1 h-4 w-4 shrink-0 fill-accent text-accent"
                              aria-hidden="true"
                            />
                          )}
                          <div className="min-w-0">
                            <span
                              className={`text-sm font-medium sm:text-base ${
                                isHighlighted ? "text-accent" : "text-foreground"
                              }`}
                            >
                              {row.service}
                            </span>

                            <div className="mt-1.5 flex gap-2 sm:hidden">
                              {row.photography && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                                  <Camera
                                    className="h-3 w-3"
                                    aria-hidden="true"
                                  />
                                  Foto
                                </span>
                              )}
                              {row.video && (
                                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                                  <Video
                                    className="h-3 w-3"
                                    aria-hidden="true"
                                  />
                                  Vídeo
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-xs leading-snug text-muted-foreground">
                              {row.description}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="hidden px-6 py-4 text-center align-top sm:table-cell">
                        {row.photography ? (
                          <Check
                            className="mx-auto h-5 w-5 text-emerald-600"
                            aria-label="Incluido"
                          />
                        ) : (
                          <Minus
                            className="mx-auto h-5 w-5 text-muted-foreground/40"
                            aria-label="No incluido"
                          />
                        )}
                      </td>

                      <td className="hidden px-6 py-4 text-center align-top sm:table-cell">
                        {row.video ? (
                          <Check
                            className="mx-auto h-5 w-5 text-emerald-600"
                            aria-label="Incluido"
                          />
                        ) : (
                          <Minus
                            className="mx-auto h-5 w-5 text-muted-foreground/40"
                            aria-label="No incluido"
                          />
                        )}
                      </td>

                      <td className="tabular whitespace-nowrap px-4 py-4 text-right align-top sm:px-6">
                        <div className="flex flex-col items-end">
                          <span className="text-sm font-semibold text-accent sm:text-base">
                            {row.price}
                          </span>
                          {row.individualTotalLabel && (
                            <span className="text-xs text-muted-foreground/60 line-through">
                              {row.individualTotalLabel}
                            </span>
                          )}
                          {row.savingsLabel && (
                            <span className="mt-0.5 text-[11px] font-medium text-emerald-700">
                              −{row.savingsLabel}
                            </span>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          <div className="border-t border-border bg-muted/30 px-4 py-4 sm:px-6">
            <p className="text-center text-xs italic leading-relaxed text-muted-foreground sm:text-sm">
              Precios orientativos, IVA no incluido. Personalizamos cada
              propuesta según la ubicación y los detalles de vuestra boda.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            backgroundImage:
              "linear-gradient(to right, #1a365d 0%, #0f2440 100%)",
          }}
          className="flex flex-col items-start justify-between gap-6 rounded-2xl p-6 md:flex-row md:items-center md:p-8"
        >
          <div className="w-full text-center md:w-auto md:text-left">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.22em] text-accent sm:text-sm">
              Mejor valor
            </p>
            <p className="font-serif text-lg leading-tight text-white sm:text-xl">
              Pack Completo — Preboda + Boda + Same Day Edit + Postboda
            </p>
            <p className="tabular mt-2 text-xs text-white/70 sm:text-sm">
              <span className="font-bold text-accent">
                {PACK_COMPLETO.price}
              </span>{" "}
              en lugar de{" "}
              <span className="line-through">
                {PACK_COMPLETO.individualTotalLabel}
              </span>{" "}
              — ahorráis {PACK_COMPLETO.savingsLabel}
            </p>
          </div>

          <a
            href={getWhatsAppLink(PACK_COMPLETO.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full shrink-0 rounded-xl bg-accent px-8 py-4 text-center text-sm font-semibold uppercase tracking-wide text-[#1a365d] shadow-xl transition-all duration-300 hover:bg-accent/90 md:w-auto"
          >
            Quiero el pack
          </a>
        </motion.div>
      </Container>
    </Section>
  )
}

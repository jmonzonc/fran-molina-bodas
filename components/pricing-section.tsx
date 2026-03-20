"use client"

import { motion } from "framer-motion"
import { Check, Minus } from "lucide-react"

// ============================================================
// DATOS DE PRECIOS
// ============================================================

interface PricingRow {
  package: string
  photography: boolean
  video: boolean
  price: string
}

const PRICING_DATA: PricingRow[] = [
  { package: "Preboda", photography: true, video: true, price: "€1.200" },
  { package: "Boda", photography: true, video: true, price: "€3.500" },
  { package: "Same Day Edit", photography: false, video: true, price: "€800" },
  { package: "Postboda", photography: true, video: false, price: "€900" },
]

// Columnas de la tabla para evitar repetición
const TABLE_COLUMNS = [
  { key: "package", label: "Paquete", align: "left" },
  { key: "photography", label: "Fotografía", align: "center" },
  { key: "video", label: "Vídeo", align: "center" },
  { key: "price", label: "Desde", align: "right" },
] as const

/**
 * Componente para mostrar iconos de disponibilidad
 */
function AvailabilityIcon({ available }: { available: boolean }) {
  return available ? (
    <Check className="w-5 h-5 text-green-600 mx-auto" aria-label="Incluido" />
  ) : (
    <Minus className="w-5 h-5 text-gray-300 mx-auto" aria-label="No incluido" />
  )
}

/**
 * Sección de precios con tabla responsive
 * Incluye schema.org implícito a través de los servicios
 */
export function PricingSection() {
  return (
    <section 
      id="precios"
      className="py-20 bg-gradient-to-r from-primary/5 to-secondary/10"
      aria-label="Tabla de precios de fotografía de bodas"
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
            Transparencia total en cada servicio
          </p>
        </motion.header>

        {/* Tabla de precios */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-3xl shadow-2xl bg-white"
        >
          <div className="overflow-x-auto">
            <table className="w-full" role="table" aria-label="Comparativa de paquetes">
              <thead className="bg-accent/10">
                <tr>
                  {TABLE_COLUMNS.map(col => (
                    <th 
                      key={col.key}
                      className={`py-4 px-6 font-medium text-primary ${
                        col.align === "left" ? "text-left" : 
                        col.align === "right" ? "text-right" : "text-center"
                      }`}
                      scope="col"
                    >
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PRICING_DATA.map((row, index) => (
                  <motion.tr
                    key={row.package}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-accent/5 border-b border-gray-100 last:border-0 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-foreground">
                      {row.package}
                    </td>
                    <td className="py-4 px-6 text-center">
                      <AvailabilityIcon available={row.photography} />
                    </td>
                    <td className="py-4 px-6 text-center">
                      <AvailabilityIcon available={row.video} />
                    </td>
                    <td className="py-4 px-6 text-right font-semibold text-accent">
                      {row.price}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Nota al pie */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
            <p className="text-sm text-gray-600 italic text-center">
              *Precios orientativos. Personalizamos tu paquete según tus necesidades
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

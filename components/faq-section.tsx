"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BUSINESS_INFO } from "@/lib/config"

// ============================================================
// DATOS DE PREGUNTAS FRECUENTES
//
// PRECIOS CORRECTOS:
//  Preboda €400 | Boda solo foto €1.200 | Boda solo vídeo €1.400
//  Boda Completa (foto+vídeo) €2.200 | Same Day Edit €400 | Postboda €400
//  Pack Completo €3.000
//
// JSON-LD FAQPage → solo en layout.tsx (no duplicar aquí)
// ============================================================

interface FAQ {
  question: string
  answer: string
}

const FAQS: FAQ[] = [
  {
    question: "¿Cuánto cuesta un fotógrafo de bodas en Tarragona?",
    answer:
      "En Fran Molina Fotografía ofrecemos diferentes opciones según tus necesidades. La sesión de preboda o postboda comienza desde 400 €. El reportaje fotográfico de boda parte desde 1.200 € y el vídeo cinematográfico desde 1.400 €. La Boda Completa con fotografía y vídeo tiene un precio desde 2.200 €. Y el Pack Completo (preboda + boda completa + same day edit + postboda) desde 3.000 €. Todos los precios son orientativos y personalizamos cada propuesta según la ubicación y los detalles de tu boda en Tarragona, Reus, Salou, Cambrils o cualquier punto de la Costa Daurada.",
  },
  {
    question: "¿Con cuánta antelación debo reservar mi fotógrafo de bodas?",
    answer:
      "Recomendamos reservar con un mínimo de 9 a 12 meses de antelación, especialmente para bodas en primavera (abril–junio) y otoño (septiembre–octubre), las temporadas más demandadas en Tarragona y la Costa Daurada. Para bodas en 2026 y 2027 la disponibilidad es muy limitada. La reserva se confirma con la firma del contrato y un depósito del 20 %.",
  },
  {
    question: "¿Cubres bodas fuera de Tarragona y la Costa Daurada?",
    answer:
      "Sí. Cubrimos bodas en toda Cataluña: Tarragona, Reus, Salou, Cambrils, Valls, Tortosa, Barcelona, Girona, Sitges, Lleida y alrededores. También viajamos a otras comunidades autónomas y al extranjero para bodas destino. Consúltanos disponibilidad y condiciones de desplazamiento sin compromiso.",
  },
  {
    question: "¿Qué incluye el paquete de boda completa?",
    answer:
      "La Boda Completa cubre el día entero desde los preparativos hasta el baile (10 horas o más). Incluye fotografía y vídeo cinematográfico en alta resolución, más de 400 fotos editadas profesionalmente entregadas en galería online privada, y un highlight reel de 3–5 minutos. Puedes añadir el Same Day Edit para proyectar un vídeo durante el banquete, y combinarlo con preboda y postboda en el Pack Completo con un ahorro de 400 €.",
  },
  {
    question: "¿Cuánto tardáis en entregar las fotos de la boda?",
    answer:
      "El plazo habitual de entrega es de 4 a 6 semanas después de la boda. Recibirás todas las fotografías editadas en color y blanco y negro en una galería online privada de alta resolución, lista para descargar y compartir con familia y amigos sin coste adicional. Para álbumes físicos de lujo el plazo es de 8 a 12 semanas adicionales.",
  },
  {
    question: "¿Qué es el Same Day Edit?",
    answer:
      "El Same Day Edit es un vídeo cinematográfico que editamos el mismo día de tu boda para proyectarlo durante el banquete. Recoge los mejores momentos de los preparativos y la ceremonia en un montaje de 3–5 minutos que sorprende a todos los invitados. Está disponible como servicio individual por 400 € o incluido en el Pack Completo.",
  },
]

/**
 * Sección de preguntas frecuentes
 * JSON-LD FAQPage → exclusivamente en layout.tsx (no duplicar)
 */
export function FaqSection() {
  return (
    <section
      id="preguntas-frecuentes"
      className="py-24 bg-background"
      aria-label="Preguntas frecuentes sobre fotografía de bodas"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Encabezado */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Todo lo que necesitas saber sobre nuestros servicios de fotografía
            de bodas en {BUSINESS_INFO.location.city}
          </p>
        </motion.header>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-accent py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">¿Tienes más preguntas?</p>
          <a
            href="#contacto"
            className="inline-block text-accent hover:text-accent/80 font-medium underline underline-offset-4 transition-colors"
          >
            Contáctanos y te respondemos en menos de 24 horas
          </a>
        </motion.div>
      </div>
    </section>
  )
}

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
// ============================================================

interface FAQ {
  question: string
  answer: string
}

const FAQS: FAQ[] = [
  {
    question: "¿Cuánto cuesta un fotógrafo de bodas en Tarragona?",
    answer: "Nuestros paquetes de fotografía de bodas en Tarragona comienzan desde 1.200€ para sesiones de preboda, 3.500€ para cobertura completa del día de la boda (fotografía + vídeo), y 900€ para postbodas premium. El precio final depende de la duración, servicios adicionales y ubicación específica en la Costa Daurada."
  },
  {
    question: "¿Con cuánta antelación debo reservar mi fotógrafo de bodas?",
    answer: "Recomendamos reservar con 12-18 meses de antelación, especialmente para temporada alta (mayo-octubre). Las fechas más populares en Tarragona y la Costa Daurada se reservan rápido. Para asegurar disponibilidad, lo ideal es contactarnos en cuanto tengáis la fecha confirmada."
  },
  {
    question: "¿Cubres bodas fuera de Tarragona y la Costa Daurada?",
    answer: "Sí, aunque estamos especializados en bodas en Tarragona, Reus, Salou, Cambrils y toda la Costa Daurada, cubrimos bodas en toda Cataluña, España y destinos internacionales. Los gastos de desplazamiento se presupuestan aparte según la ubicación."
  },
  {
    question: "¿Qué incluye el paquete de boda completa?",
    answer: "El paquete de Boda Completa incluye: cobertura de más de 10 horas (desde preparativos hasta baile), fotografía profesional con más de 400 fotos editadas, vídeo cinematográfico con highlight reel, galería online privada para compartir con invitados, y entrega en alta resolución. También ofrecemos álbumes de lujo como opción adicional."
  },
  {
    question: "¿Cuánto tardáis en entregar las fotos de la boda?",
    answer: "Entregamos un adelanto de 30-50 fotos en 7 días tras la boda para compartir en redes. El reportaje completo editado se entrega en 4-6 semanas. El vídeo highlight en 6-8 semanas y el vídeo completo en 10-12 semanas."
  },
  {
    question: "¿Hacéis sesión de preboda incluida?",
    answer: "La sesión de preboda puede incluirse como parte del paquete completo con un descuento especial, o contratarse por separado. Es una excelente oportunidad para conocernos antes del gran día, practicar poses y conseguir fotos increíbles en ubicaciones icónicas de Tarragona como el Anfiteatro Romano o las playas de la Costa Daurada."
  }
]

// ============================================================
// SCHEMA JSON-LD PARA GOOGLE RICH SNIPPETS
// ============================================================

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}

/**
 * Sección de preguntas frecuentes con accordion
 * Incluye JSON-LD para aparecer en Google Rich Snippets
 */
export function FaqSection() {
  return (
    <section 
      id="preguntas-frecuentes" 
      className="py-24 bg-background"
      aria-label="Preguntas frecuentes sobre fotografía de bodas"
    >
      {/* Schema.org FAQ para SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />
      
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
            Todo lo que necesitas saber sobre nuestros servicios de fotografía de bodas en {BUSINESS_INFO.location.city}
          </p>
        </motion.header>

        {/* Accordion de FAQs */}
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

        {/* CTA para más preguntas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            ¿Tienes más preguntas?
          </p>
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

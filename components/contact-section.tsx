"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import { motion } from "framer-motion"
import { MessageCircle, Send } from "lucide-react"
import { WHATSAPP_NUMBER, getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/config"

// Tipo para los datos del formulario
interface ContactFormData {
  name: string
  email: string
  weddingDate: string
  message: string
}

// Estado inicial del formulario
const INITIAL_FORM_STATE: ContactFormData = {
  name: "",
  email: "",
  weddingDate: "",
  message: "",
}

// Estilos compartidos para inputs
const INPUT_CLASSES = "w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/30 text-white placeholder-white/70 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"

/**
 * Sección de contacto con formulario que envía a WhatsApp
 * Incluye validación y accesibilidad completa
 */
export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_STATE)

  // Handler genérico para actualizar campos del formulario
  const handleFieldChange = (field: keyof ContactFormData) => (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
  }

  // Enviar formulario a WhatsApp
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const message = [
      `Hola Fran! Me llamo ${formData.name}.`,
      "",
      `Fecha de boda: ${formData.weddingDate}`,
      `Email: ${formData.email}`,
      "",
      `Mensaje: ${formData.message}`,
    ].join("\n")
    
    window.open(getWhatsAppLink(message), "_blank")
  }

  // Chat directo sin formulario
  const handleDirectWhatsApp = () => {
    window.open(getWhatsAppLink(WHATSAPP_MESSAGES.general), "_blank")
  }

  return (
    <section 
      id="contacto" 
      className="py-24 bg-gradient-to-b from-[#111827] to-gray-900"
      aria-label="Formulario de contacto para reservar fecha de boda"
      itemScope
      itemType="https://schema.org/ContactPage"
    >
      <div className="max-w-lg mx-auto px-6">
        {/* Encabezado */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 
            className="text-4xl md:text-5xl font-serif text-white mb-4" 
            itemProp="name"
          >
            Reserva tu Fotógrafo de Bodas en Tarragona
          </h2>
          <p className="text-white/70" itemProp="description">
            Cuéntanos sobre tu boda y te contactaremos en menos de 24 horas. 
            Disponibilidad limitada para fechas 2025-2026.
          </p>
        </motion.header>

        {/* Formulario de contacto */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-label="Formulario de contacto para fotógrafo de bodas"
        >
          {/* Campo: Nombre */}
          <div>
            <label htmlFor="contact-name" className="sr-only">
              Tu nombre completo
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="Tu nombre"
              required
              autoComplete="name"
              value={formData.name}
              onChange={handleFieldChange("name")}
              className={INPUT_CLASSES}
            />
          </div>
          
          {/* Campo: Email */}
          <div>
            <label htmlFor="contact-email" className="sr-only">
              Tu correo electrónico
            </label>
            <input
              id="contact-email"
              type="email"
              placeholder="Tu email"
              required
              autoComplete="email"
              value={formData.email}
              onChange={handleFieldChange("email")}
              className={INPUT_CLASSES}
            />
          </div>
          
          {/* Campo: Fecha de boda */}
          <div>
            <label htmlFor="contact-date" className="sr-only">
              Fecha de tu boda
            </label>
            <input
              id="contact-date"
              type="date"
              placeholder="Fecha de tu boda"
              required
              value={formData.weddingDate}
              onChange={handleFieldChange("weddingDate")}
              className={`${INPUT_CLASSES} [color-scheme:dark]`}
            />
          </div>
          
          {/* Campo: Mensaje */}
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Cuéntanos sobre tu boda
            </label>
            <textarea
              id="contact-message"
              placeholder="Cuéntanos sobre tu boda, lugar de celebración, número de invitados..."
              rows={4}
              value={formData.message}
              onChange={handleFieldChange("message")}
              className={`${INPUT_CLASSES} resize-none`}
            />
          </div>

          {/* Botón de envío */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-accent text-[#1a365d] py-5 px-8 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(212,165,116,0.4)] hover:bg-accent/90 uppercase tracking-wide mt-6 flex items-center justify-center gap-3 transition-all duration-300"
          >
            <Send className="w-5 h-5" aria-hidden="true" />
            Enviar WhatsApp
          </motion.button>
        </motion.form>

        {/* Separador */}
        <p className="mt-6 text-center text-white/50 text-sm">
          o también puedes
        </p>

        {/* Botón de chat directo */}
        <motion.button
          onClick={handleDirectWhatsApp}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-5 px-8 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(34,197,94,0.4)] uppercase tracking-wide mt-4 flex items-center justify-center gap-3 transition-all duration-300"
          aria-label="Iniciar chat de WhatsApp directamente"
        >
          <MessageCircle className="w-5 h-5" aria-hidden="true" />
          Chatear ahora
        </motion.button>
      </div>
    </section>
  )
}

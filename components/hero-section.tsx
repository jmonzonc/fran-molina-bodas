"use client"

import { motion } from "framer-motion"
import { BUSINESS_INFO } from "@/lib/config"

// ============================================================
// CONFIGURACIÓN DE ANIMACIONES
// ============================================================

const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}

// Video URL (puede moverse a config si necesita cambiar frecuentemente)
const HERO_VIDEO_URL = "https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-walking-hand-in-hand-at-sunset-44517-large.mp4"

/**
 * Sección hero con video de fondo a pantalla completa
 * Incluye H1 principal y CTA de reserva
 */
export function HeroSection() {
  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      aria-label={`Presentación - ${BUSINESS_INFO.name}`}
      itemScope 
      itemType="https://schema.org/WPHeader"
    >
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src={HERO_VIDEO_URL} type="video/mp4" />
        <track kind="descriptions" label="Pareja de novios caminando de la mano al atardecer" />
      </video>

      {/* Overlay con gradiente */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60" 
        aria-hidden="true" 
      />

      {/* Contenido principal */}
      <header className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Headline principal (H1) */}
          <motion.h1
            {...ANIMATION_CONFIG}
            transition={{ ...ANIMATION_CONFIG.transition, delay: 0.2 }}
            className="text-5xl md:text-7xl xl:text-8xl font-serif text-white/95 leading-[1.1] mb-6 drop-shadow-2xl text-balance"
            itemProp="headline"
          >
            {BUSINESS_INFO.tagline}
          </motion.h1>

          {/* Subtítulo con nombre y ubicación */}
          <motion.p
            {...ANIMATION_CONFIG}
            transition={{ ...ANIMATION_CONFIG.transition, delay: 0.4 }}
            className="text-2xl md:text-3xl font-sans text-[#d4a574]/90 font-medium mb-10"
            itemProp="description"
          >
            <strong>{BUSINESS_INFO.shortName}</strong> - Fotógrafo de Bodas en {BUSINESS_INFO.location.city} y {BUSINESS_INFO.location.region}
          </motion.p>

          {/* Botón CTA */}
          <motion.a
            href="#contacto"
            {...ANIMATION_CONFIG}
            transition={{ ...ANIMATION_CONFIG.transition, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block bg-[#d4a574] hover:bg-[#d4a574]/90 text-[#1a365d] px-10 py-5 rounded-2xl text-xl font-semibold shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all duration-300 uppercase tracking-wide"
            aria-label="Reserva tu sesión de fotografía de boda"
          >
            Reserva tu fecha ahora
          </motion.a>
        </div>
      </header>

      {/* Indicador de scroll */}
      <ScrollIndicator />
    </section>
  )
}

/**
 * Indicador animado de scroll en la parte inferior
 */
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2"
      >
        <div className="w-1 h-2 bg-white/70 rounded-full" />
      </motion.div>
    </motion.div>
  )
}

"use client"

import { motion } from "framer-motion"
import { BUSINESS_INFO } from "@/lib/config"

const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}

// ⚠️  Token JWT con fecha de expiración. Cuando caduque, el vídeo dejará de cargar.
// TODO: Hacer el bucket público en Supabase o generar URL sin token.
const HERO_VIDEO_URL =
  "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/loop%20video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzL2xvb3AgdmlkZW8ubXA0IiwiaWF0IjoxNzc0MzAzODc1LCJleHAiOjE3NzUxNjc4NzV9.fqIcsE6z4Jwib64V_puIlE1e8hdnNm7FJX9MlqdZj_Y"

/**
 * Hero: H1 con keyword principal, claim poético en subtítulo
 */
export function HeroSection() {
  return (
    <section
      className="relative h-screen w-full overflow-hidden"
      aria-label={`Presentación - ${BUSINESS_INFO.name}`}
      itemScope
      itemType="https://schema.org/WPHeader"
    >
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
        <track
          kind="descriptions"
          label="Pareja de novios caminando de la mano al atardecer"
        />
      </video>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"
        aria-hidden="true"
      />

      <header className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h1
            {...ANIMATION_CONFIG}
            transition={{ ...ANIMATION_CONFIG.transition, delay: 0.2 }}
            className="text-5xl md:text-7xl xl:text-8xl font-serif text-white/95 leading-[1.1] mb-6 drop-shadow-2xl text-balance"
            itemProp="headline"
          >
            {BUSINESS_INFO.tagline}
          </motion.h1>

          <motion.p
            {...ANIMATION_CONFIG}
            transition={{ ...ANIMATION_CONFIG.transition, delay: 0.4 }}
            className="text-2xl md:text-3xl font-sans text-[#d4a574]/90 font-medium mb-10"
            itemProp="description"
          >
            <strong>{BUSINESS_INFO.shortName}</strong> — Tu historia en momentos
            eternos
          </motion.p>

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

      <ScrollIndicator />
    </section>
  )
}

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

"use client"

import { motion } from "framer-motion"

import { BUSINESS_INFO } from "@/lib/config"
import { HeroVideo } from "@/components/hero-video"

const ANIMATION_CONFIG = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
}

/**
 * Vídeo del hero.
 *
 * ⚠️  La URL firmada de Supabase caduca (exp. 2090) y el token viaja en el
 * bundle. Migrar a bucket público o a Vercel Blob y sustituir estas dos
 * constantes. HERO_VIDEO_WEBM es opcional: si no existe el archivo, borra
 * la prop srcWebm y el componente cae a MP4.
 *
 * Transcodificado recomendado (sin pista de audio, loop de 6 s):
 *   ffmpeg -i origen.mp4 -an -t 6 -vf "scale=1920:-2" \
 *     -c:v libx264 -crf 24 -preset slow -movflags +faststart \
 *     -pix_fmt yuv420p hero-1080.mp4
 */
const HERO_VIDEO_MP4 =
  "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/loop%20video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzL2xvb3AgdmlkZW8ubXA0IiwiaWF0IjoxNzc1MjI4NTAzLCJleHAiOjIwOTA1ODg1MDN9.su-8GN2oqVOuv92gQCXwINxy2cClzQQKI6-FsAOUePs"

/**
 * Poster del hero — foto de ceremonia (Ángela & Ángel, 2025).
 * 2400×1565, 408 KB, recortada un 2 % por abajo para eliminar la marca de
 * agua residual del archivo original. Es el LCP de la home y la imagen que
 * queda visible si el vídeo no carga.
 */
const HERO_POSTER = "/images/hero-poster.jpg"

const HERO_POSTER_ALT =
  "Novios riendo durante la lectura de los votos en su ceremonia de boda en Tarragona"

/**
 * Hero: H1 con keyword principal, claim poético en subtítulo.
 *
 * Cambio clave: el LCP ya no es el vídeo sino el poster servido por
 * next/image con priority. El MP4 solo se descarga si el hero está en
 * viewport y la conexión lo permite (ver components/hero-video.tsx).
 */
export function HeroSection() {
  return (
    <section
      className="relative h-[100svh] w-full overflow-hidden"
      aria-label={`Presentación - ${BUSINESS_INFO.name}`}
      itemScope
      itemType="https://schema.org/WPHeader"
    >
      <HeroVideo
        srcMp4={HERO_VIDEO_MP4}
        poster={HERO_POSTER}
        posterAlt={HERO_POSTER_ALT}
        posterPosition="center 32%"
        className="absolute inset-0"
      />

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/45 to-black/65"
        aria-hidden="true"
      />

      <header className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
          <motion.h1
            {...ANIMATION_CONFIG}
            transition={{ ...ANIMATION_CONFIG.transition, delay: 0.2 }}
            className="mb-6 font-serif text-[clamp(2.25rem,1.6rem+3.2vw,4.5rem)] leading-[1.06] text-balance text-white/95 drop-shadow-2xl"
            itemProp="headline"
          >
            {BUSINESS_INFO.tagline}
          </motion.h1>

          <motion.p
            {...ANIMATION_CONFIG}
            transition={{ ...ANIMATION_CONFIG.transition, delay: 0.4 }}
            className="mb-10 font-sans text-[clamp(1.125rem,1rem+0.9vw,1.875rem)] font-medium text-[#d4a574]/90"
            itemProp="description"
          >
            <strong>{BUSINESS_INFO.shortName}</strong> — Vuestra historia en
            momentos eternos
          </motion.p>

          <motion.a
            href="#contacto"
            {...ANIMATION_CONFIG}
            transition={{ ...ANIMATION_CONFIG.transition, delay: 0.6 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block rounded-2xl bg-[#d4a574] px-8 py-4 text-base font-semibold uppercase tracking-wide text-[#1a365d] shadow-2xl transition-all duration-300 hover:bg-[#d4a574]/90 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] sm:px-10 sm:py-5 sm:text-lg"
            aria-label="Reserva tu sesión de fotografía de boda"
          >
            Reservad vuestra fecha
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
        className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/50 p-2"
      >
        <div className="h-2 w-1 rounded-full bg-white/70" />
      </motion.div>
    </motion.div>
  )
}

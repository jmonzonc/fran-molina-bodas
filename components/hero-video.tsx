"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface HeroVideoProps {
  /** MP4 (H.264) — fallback universal */
  srcMp4: string
  /** WebM/AV1 opcional — ~40 % menos peso en Chrome/Firefox */
  srcWebm?: string
  /** Imagen de respaldo. Es el LCP real y lo que se ve si el vídeo falla. */
  poster: string
  posterAlt: string
  /**
   * object-position del poster. El hero es 100svh: en móvil una foto 3:2
   * se recorta mucho en vertical, y con "center" las caras se van fuera
   * de cuadro. "center 32%" las mantiene en el tercio superior.
   */
  posterPosition?: string
  /** Color visible mientras carga y si todo falla. */
  fallbackColor?: string
  className?: string
}

interface NetworkInformation {
  saveData?: boolean
  effectiveType?: string
}

/**
 * Jerarquía de respaldo, de mejor a peor caso:
 *
 *   1. Poster + vídeo        → funcionamiento normal
 *   2. Poster sin vídeo      → conexión lenta, Save-Data, reduced-motion,
 *                              o el MP4 devuelve error / se corta a mitad
 *   3. Vídeo sin poster      → el JPG no existe o da 404
 *   4. Ni uno ni otro        → color sólido, nunca un icono roto
 *
 * El poster va montado DEBAJO del vídeo, no en su lugar: si el MP4 nunca
 * dispara `playing`, el vídeo se queda en opacity-0 y la foto permanece
 * visible sin lógica adicional. `onError` cubre el caso de un vídeo que
 * empieza y luego se rompe, que si no dejaría un frame congelado encima.
 */
export function HeroVideo({
  srcMp4,
  srcWebm,
  poster,
  posterAlt,
  posterPosition = "center 32%",
  fallbackColor = "#1a365d",
  className,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [posterFailed, setPosterFailed] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (reduceMotion && !posterFailed) return

    const connection = (
      navigator as Navigator & { connection?: NetworkInformation }
    ).connection

    // Si el poster falla, el vídeo pasa a ser el único contenido visual:
    // se carga aunque la conexión sea mala.
    if (!posterFailed) {
      if (connection?.saveData) return
      if (
        connection?.effectiveType &&
        /2g|slow-2g|3g/.test(connection.effectiveType)
      ) {
        return
      }
    }

    setShouldLoad(true)
  }, [posterFailed])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad || videoFailed) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => setVideoFailed(true))
        } else {
          video.pause()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [shouldLoad, videoFailed])

  const showVideo = shouldLoad && !videoFailed

  return (
    <div className={className} style={{ backgroundColor: fallbackColor }}>
      {!posterFailed && (
        <Image
          src={poster}
          alt={posterAlt}
          fill
          priority
          fetchPriority="high"
          quality={72}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: posterPosition }}
          onError={() => setPosterFailed(true)}
        />
      )}

      {showVideo && (
        <video
          ref={videoRef}
          poster={posterFailed ? undefined : poster}
          muted
          loop
          playsInline
          preload={posterFailed ? "auto" : "none"}
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setIsPlaying(true)}
          onError={() => setVideoFailed(true)}
          onStalled={() => setVideoFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            isPlaying || posterFailed ? "opacity-100" : "opacity-0"
          }`}
        >
          {srcWebm && <source src={srcWebm} type="video/webm" />}
          <source src={srcMp4} type="video/mp4" />
        </video>
      )}
    </div>
  )
}

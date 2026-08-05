"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"

interface HeroVideoProps {
  /** MP4 (H.264). Debe estar codificado con -movflags +faststart. */
  srcMp4: string
  /** WebM/AV1 opcional. iOS lo ignora: siempre cae al MP4. */
  srcWebm?: string
  /** Imagen de respaldo. Es el LCP real y lo que se ve si el vídeo falla. */
  poster: string
  posterAlt: string
  /** object-position del poster. El hero es 100svh y recorta mucho en móvil. */
  posterPosition?: string
  fallbackColor?: string
  className?: string
}

interface NetworkInformation {
  saveData?: boolean
  effectiveType?: string
}

/**
 * Notas de iOS Safari — cada línea marcada resuelve un fallo real:
 *
 *  · `stalled` es un evento RUTINARIO durante el buffering en iOS. Tratarlo
 *    como error desmonta el vídeo antes de que llegue a reproducirse.
 *    Solo `error` indica fallo real.
 *  · React fija `muted` como propiedad JS, no como atributo HTML, así que en
 *    el markup servido no aparece. iOS mira el atributo para decidir si
 *    permite autoplay inline → hay que forzarlo por ref antes de play().
 *  · `play()` sobre un elemento con preload="none" se rechaza porque no hay
 *    datos: primero load(), luego play().
 *  · En Modo de Bajo Consumo iOS rechaza todo autoplay. No es un error:
 *    el poster se queda visible y ya está.
 *  · autoPlay + muted + playsInline es la tríada obligatoria; falta uno y
 *    Safari no considera el elemento candidato.
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

  const attemptPlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    // iOS: forzar muted por propiedad. El atributo puede no estar en el SSR.
    video.muted = true
    video.defaultMuted = true

    const play = () => {
      const promise = video.play()
      // Safari <15 devuelve undefined en lugar de una promesa.
      if (promise !== undefined) {
        promise.catch(() => {
          // Autoplay bloqueado (Modo de Bajo Consumo, ajuste del usuario).
          // No es un fallo del recurso: el poster se mantiene visible.
        })
      }
    }

    if (video.readyState >= 2) {
      play()
      return
    }

    video.load()
    video.addEventListener("loadeddata", play, { once: true })
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad || videoFailed) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          attemptPlay()
        } else if (!video.paused) {
          video.pause()
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [shouldLoad, videoFailed, attemptPlay])

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
          autoPlay
          muted
          loop
          playsInline
          // @ts-expect-error — atributo legacy de iOS, aún necesario en Safari antiguo
          webkit-playsinline="true"
          preload="metadata"
          disablePictureInPicture
          aria-hidden="true"
          tabIndex={-1}
          onLoadedData={attemptPlay}
          onPlaying={() => setIsPlaying(true)}
          onError={() => setVideoFailed(true)}
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

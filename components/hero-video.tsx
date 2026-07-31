"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface HeroVideoProps {
  /** MP4 (H.264) — fallback universal */
  srcMp4: string
  /** WebM/AV1 opcional — ~40 % menos peso en Chrome/Firefox */
  srcWebm?: string
  /** Poster estático. Debe ser el frame 0 exacto del vídeo. */
  poster: string
  posterAlt: string
  className?: string
}

interface NetworkInformation {
  saveData?: boolean
  effectiveType?: string
}

/**
 * Estrategia:
 *  1. El LCP es el poster (next/image, priority, AVIF/WebP) — nunca el vídeo.
 *  2. El vídeo no se descarga hasta que el hero está en viewport (preload="none").
 *  3. Se descarta por completo en 2G/3G, Save-Data o prefers-reduced-motion.
 *  4. Fade-in sobre el poster en canplay → sin flash negro ni CLS.
 */
export function HeroVideo({
  srcMp4,
  srcWebm,
  poster,
  posterAlt,
  className,
}: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches
    if (reduceMotion) return

    const connection = (
      navigator as Navigator & { connection?: NetworkInformation }
    ).connection
    if (connection?.saveData) return
    if (connection?.effectiveType && /2g|slow-2g|3g/.test(connection.effectiveType)) {
      return
    }

    setShouldLoad(true)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void video.play().catch(() => undefined)
        } else {
          video.pause()
        }
      },
      { threshold: 0.15 },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [shouldLoad])

  return (
    <div className={className}>
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority
        fetchPriority="high"
        quality={70}
        sizes="100vw"
        className="object-cover"
      />

      {shouldLoad && (
        <video
          ref={videoRef}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
          onPlaying={() => setIsPlaying(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
        >
          {srcWebm && <source src={srcWebm} type="video/webm" />}
          <source src={srcMp4} type="video/mp4" />
        </video>
      )}
    </div>
  )
}

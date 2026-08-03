import type { ComponentProps, ElementType, ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Sistema único de anchos. Sustituye a los max-w-3xl / 4xl / 6xl / 7xl
 * dispersos por secciones, que son la causa de los huecos laterales y del
 * desalineado entre el header (max-w-7xl) y el contenido.
 *
 *  prose   → texto largo (medida óptima de lectura)
 *  content → sección estándar (cards, grids, formularios)
 *  wide    → galerías, mosaicos y layouts a dos columnas
 *  bleed   → full-bleed sin gutter (hero, franjas de imagen)
 */
type ContainerWidth = "prose" | "content" | "wide" | "bleed"

const WIDTHS: Record<ContainerWidth, string> = {
  prose: "max-w-[72ch]",
  content: "max-w-[1200px]",
  wide: "max-w-[1520px]",
  bleed: "max-w-none",
}

const GUTTERS: Record<ContainerWidth, string> = {
  prose: "px-5 sm:px-8",
  content: "px-5 sm:px-8 lg:px-12",
  wide: "px-5 sm:px-8 lg:px-12",
  bleed: "px-0",
}

interface ContainerProps extends ComponentProps<"div"> {
  as?: ElementType
  width?: ContainerWidth
  children: ReactNode
}

export function Container({
  as: Tag = "div",
  width = "content",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full", WIDTHS[width], GUTTERS[width], className)}
      {...rest}
    >
      {children}
    </Tag>
  )
}

/**
 * Ritmo vertical coherente. Reemplaza los py-16 / 20 / 24 arbitrarios.
 *
 *  tight   → separadores y CTAs sueltos
 *  default → secciones normales
 *  loose   → cambios de capítulo (hero → portfolio → servicios)
 */
type SectionRhythm = "tight" | "default" | "loose"

const RHYTHM: Record<SectionRhythm, string> = {
  tight: "py-[clamp(2.5rem,5vw,4rem)]",
  default: "py-[clamp(4rem,8vw,7rem)]",
  loose: "py-[clamp(5rem,11vw,10rem)]",
}

interface SectionProps extends ComponentProps<"section"> {
  rhythm?: SectionRhythm
  children: ReactNode
}

export function Section({
  rhythm = "default",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <section className={cn(RHYTHM[rhythm], className)} {...rest}>
      {children}
    </section>
  )
}

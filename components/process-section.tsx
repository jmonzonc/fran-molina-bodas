"use client"

import { motion, useReducedMotion } from "framer-motion"

import { Container, Section } from "@/components/ui/container"

interface ProcessStep {
  id: string
  label: string
  title: string
  description: string
  meta: string
}

const STEPS: ProcessStep[] = [
  {
    id: "reunion",
    label: "01",
    title: "Reunión",
    description:
      "Nos vemos (en persona o por vídeo) para entender vuestra boda: estilo, ritmo, personas importantes y qué queréis recordar dentro de veinte años.",
    meta: "Sin compromiso · 45 min",
  },
  {
    id: "preboda",
    label: "02",
    title: "Preboda",
    description:
      "Una sesión previa para que la cámara deje de existir. El día de la boda ya nos conocemos, y eso se nota en cada foto.",
    meta: "Opcional · 2-3 h",
  },
  {
    id: "boda",
    label: "03",
    title: "La boda",
    description:
      "Cobertura desde los preparativos hasta el baile. Documental, sin poses forzadas y sin interrumpir lo que está pasando.",
    meta: "10 h o más",
  },
  {
    id: "entrega",
    label: "04",
    title: "Entrega",
    description:
      "Avance en 48 h. Galería privada descargable en 4-6 semanas, con el vídeo editado cuando forma parte del pack contratado.",
    meta: "4-6 semanas",
  },
]

export function ProcessSection() {
  const reduceMotion = useReducedMotion()

  return (
    <Section
      id="proceso"
      rhythm="loose"
      className="bg-gradient-to-b from-secondary/15 to-transparent"
      aria-label="Proceso de trabajo de Fran Momarch"
    >
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Columna editorial fija */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-accent text-xs uppercase tracking-[0.22em] mb-5">
                Nuestro proceso
              </p>
              <h2 className="font-serif text-primary text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] text-balance mb-6">
                ¿Cómo trabajamos?
              </h2>
              <p className="text-muted-foreground text-[clamp(1rem,1.1vw,1.125rem)] leading-relaxed max-w-[42ch]">
                Un proceso emocional tanto como técnico. Todo empieza con una
                reunión donde alineamos estilo, ritmo y el tipo de recuerdo que
                queréis construir.
              </p>

              <a
                href="#contacto"
                className="mt-10 inline-flex items-center gap-2 text-accent font-medium underline underline-offset-[6px] decoration-accent/30 hover:decoration-accent transition-colors"
              >
                Reservar la primera reunión
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Columna de pasos */}
          <ol className="lg:col-span-7 lg:col-start-6 relative">
            <span
              className="absolute left-[27px] top-4 bottom-4 w-px bg-border hidden sm:block"
              aria-hidden="true"
            />

            {STEPS.map((step, index) => (
              <motion.li
                key={step.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="relative flex gap-6 sm:gap-8 pb-12 last:pb-0"
              >
                <span
                  className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-background font-serif text-accent text-lg"
                  aria-hidden="true"
                >
                  {step.label}
                </span>

                <div className="pt-2">
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-3">
                    <h3 className="font-serif text-primary text-[clamp(1.35rem,2vw,1.75rem)] leading-tight">
                      {step.title}
                    </h3>
                    <span className="text-muted-foreground/70 text-xs uppercase tracking-[0.14em]">
                      {step.meta}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-[58ch]">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  )
}

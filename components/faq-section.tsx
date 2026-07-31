import { BUSINESS_INFO } from "@/lib/config"
import { FAQS } from "@/lib/faqs"
import { Container, Section } from "@/components/ui/container"

/**
 * Cambios vs versión previa:
 *
 * 1. Server Component. Radix Accordion desmontaba el contenido cerrado, así
 *    que las respuestas NO existían en el HTML servido: invisibles para
 *    crawlers de IA (ChatGPT, Perplexity, Gemini), que no ejecutan React.
 *    `<details>` nativo mantiene el texto siempre en el DOM.
 * 2. Cero JavaScript en la sección. Menos bundle, mejor INP.
 * 3. Animación de apertura con grid-template-rows (transición real de
 *    altura sin JS y sin CLS).
 * 4. Layout en dos columnas: recupera el ancho muerto de max-w-3xl.
 * 5. Textos y precios interpolados desde lib/faqs.ts (fuente única).
 *
 * El JSON-LD FAQPage vive en app/layout.tsx importando `faqPageSchema`.
 */
export function FaqSection() {
  return (
    <Section
      id="preguntas-frecuentes"
      rhythm="loose"
      className="bg-background"
      aria-label="Preguntas frecuentes sobre fotografía de bodas"
    >
      <Container width="wide">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <header className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-accent text-xs uppercase tracking-[0.22em] mb-5">
                Dudas frecuentes
              </p>
              <h2 className="font-serif text-primary text-[clamp(1.875rem,4vw,3.25rem)] leading-[1.08] text-balance mb-6">
                Preguntas Frecuentes
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-[42ch]">
                Todo lo que necesitáis saber antes de reservar vuestro
                fotógrafo y videógrafo de bodas en {BUSINESS_INFO.location.city}
                .
              </p>
              <a
                href="#contacto"
                className="mt-8 inline-flex items-center gap-2 text-accent font-medium underline underline-offset-[6px] decoration-accent/30 hover:decoration-accent transition-colors"
              >
                ¿Falta la vuestra? Escribidnos
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </header>

          <div className="lg:col-span-7 lg:col-start-6 divide-y divide-border">
            {FAQS.map((faq) => (
              <details
                key={faq.id}
                id={faq.id}
                name="faq"
                className="group py-2"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 text-left font-medium text-foreground transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                  <h3 className="text-[clamp(1.0625rem,1.4vw,1.25rem)] leading-snug">
                    {faq.question}
                  </h3>
                  <span
                    className="mt-1 shrink-0 text-xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>

                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                  <p className="overflow-hidden pb-7 pr-10 leading-[1.65] text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// ============================================================
// TIPOS Y CONSTANTES
// ============================================================

interface PortfolioItem {
  id: number
  category: Category
  image: string
  title: string
  description: string
  alt: string
}

type Category = "Preboda" | "Boda" | "Postboda"

const CATEGORIES = ["Todas", "Preboda", "Boda", "Postboda"] as const
type FilterCategory = (typeof CATEGORIES)[number]

// ============================================================
// DATOS DEL PORTFOLIO
// ============================================================

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: "Boda",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    title: "Boda 15/06 Tarragona",
    description: "Costa Daurada sunset",
    alt: "Fotografía de boda al atardecer en la Costa Daurada, Tarragona - Fran Molina"
  },
  {
    id: 2,
    category: "Preboda",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    title: "Preboda Cambrils",
    description: "Mediterranean love",
    alt: "Sesión de preboda en Cambrils con pareja enamorada frente al Mediterráneo"
  },
  {
    id: 3,
    category: "Boda",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    title: "Boda 22/09 Reus",
    description: "Elegant ceremony",
    alt: "Ceremonia de boda elegante en Reus, fotografía nupcial profesional"
  },
  {
    id: 4,
    category: "Postboda",
    image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80",
    title: "Postboda Salou",
    description: "Beach memories",
    alt: "Sesión de postboda en la playa de Salou, recuerdos junto al mar"
  },
  {
    id: 5,
    category: "Boda",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    title: "Boda 08/07 Vila-seca",
    description: "Golden hour magic",
    alt: "Fotografía de boda durante la hora dorada en Vila-seca, Tarragona"
  },
  {
    id: 6,
    category: "Preboda",
    image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80",
    title: "Preboda Altafulla",
    description: "Romantic vibes",
    alt: "Preboda romántica en Altafulla, sesión de fotos para parejas"
  },
  {
    id: 7,
    category: "Postboda",
    image: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    title: "Postboda Montblanc",
    description: "Medieval charm",
    alt: "Postboda con encanto medieval en Montblanc, fotografía artística"
  },
  {
    id: 8,
    category: "Boda",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    title: "Boda 30/05 Tarragona",
    description: "Cathedral elegance",
    alt: "Boda elegante junto a la Catedral de Tarragona, reportaje premium"
  },
  {
    id: 9,
    category: "Preboda",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80",
    title: "Preboda El Vendrell",
    description: "Vineyard romance",
    alt: "Sesión preboda en viñedos de El Vendrell, romance entre viñas"
  },
]

// ============================================================
// COMPONENTES
// ============================================================

/**
 * Botón de filtro para categorías
 */
function FilterButton({ 
  category, 
  isActive, 
  onClick 
}: { 
  category: string
  isActive: boolean
  onClick: () => void 
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
        isActive
          ? "bg-accent text-[#1a365d]"
          : "bg-transparent border-2 border-gray-200 hover:border-accent text-foreground"
      }`}
      aria-pressed={isActive}
    >
      {category}
    </button>
  )
}

/**
 * Card individual del portfolio con imagen y overlay
 */
function PortfolioCard({ 
  item, 
  index 
}: { 
  item: PortfolioItem
  index: number 
}) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
      itemScope
      itemType="https://schema.org/ImageObject"
    >
      <figure className="relative h-80 md:h-96">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          itemProp="contentUrl"
        />
      </figure>

      {/* Overlay con información */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
        <figcaption>
          <h3 className="text-white font-medium text-lg" itemProp="name">
            {item.title}
          </h3>
          <p className="text-white/70 text-sm" itemProp="description">
            {item.description}
          </p>
        </figcaption>
      </div>
    </motion.article>
  )
}

/**
 * Sección de portfolio con filtros interactivos
 * Galería de imágenes con categorías: Preboda, Boda, Postboda
 */
export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("Todas")

  // Filtrar items según categoría seleccionada
  const filteredItems = useMemo(() => {
    if (activeFilter === "Todas") return PORTFOLIO_ITEMS
    return PORTFOLIO_ITEMS.filter(item => item.category === activeFilter)
  }, [activeFilter])

  return (
    <section 
      id="portfolio" 
      className="py-20 px-6 bg-background"
      aria-label="Portfolio de fotografía de bodas"
      itemScope
      itemType="https://schema.org/ImageGallery"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título de sección */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-serif text-center mb-16 text-primary"
          itemProp="name"
        >
          Momentos que perduran
        </motion.h2>

        {/* Filtros de categoría */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
          aria-label="Filtrar portfolio por categoría"
        >
          {CATEGORIES.map(category => (
            <FilterButton
              key={category}
              category={category}
              isActive={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            />
          ))}
        </motion.nav>

        {/* Grid de imágenes */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

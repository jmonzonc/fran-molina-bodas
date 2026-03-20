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
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_05_10_ANGELA&ANGEL%202752.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDVfMTBfQU5HRUxBJkFOR0VMIDI3NTIuSlBHIiwiaWF0IjoxNzc0MDIyMDkyLCJleHAiOjIwODkzODIwOTJ9.jbRVIMXGUixtnhLdrOnkAglr2yfTDEVjlGYpjOLaA_8",
    title: "Boda 05/25 Rourell, Tarragona",
    description: "Mediterranean love",
    alt: "Pareja enamorada en Fortí del Rourell - Fran Molina"
  },
  {
    id: 2,
    category: "Preboda",
    image: "https://drive.google.com/file/d/1AgfvCn5r6KJThpjVyODrMMQ671ZvqYDp/view",
    title: "Preboda Tarragona",
    description: "True love",
    alt: "Sesión de preboda en Tarragona con pareja enamorada en el campo"
  },
  {
    id: 3,
    category: "Boda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_09_27%20BODA%20BERTA&SANTI%20007823.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDlfMjcgQk9EQSBCRVJUQSZTQU5USSAwMDc4MjMuanBnIiwiaWF0IjoxNzc0MDIyMzUyLCJleHAiOjIwODkzODIzNTJ9.THK-SSDR26-Dd97hO6rJKrXUbukvwJBlNNh4iuEYm8c",
    title: "Boda 09/25 Girona",
    description: "Friends celebrating",
    alt: "Amigos celebrando en Can Riera de la Pineda, Girona"
  },
  {
    id: 4,
    category: "Postboda",
    image: "https://drive.google.com/file/d/1Fz-37C97csqHPQcyFIhs85jZhesDyZzl/view",
    title: "Postboda Tarragona",
    description: "Love is forever",
    alt: "Sesión de postboda en el Bosque de la Marquesa, recuerdos junto al mar"
  },
  {
    id: 5,
    category: "Preboda",
    image: "https://drive.google.com/file/d/1AsVprMi-7a8jURxqJTEz8EEFu-kG-q0z/view",
    title: "Preboda Tarragona",
    description: "Romantic vibes",
    alt: "Preboda romántica en Tarragona, sesión de fotos para parejas"
  },
  {
    id: 6,
    category: "Postboda",
    image: "https://drive.google.com/file/d/1yDwhqLTd44Ucz3k0D49bCMpF4Rg-hdMZ/view",
    title: "Postboda Tarragona",
    description: "Beach memories",
    alt: "Sesión de postboda en el Bosque de la Marquesa, recuerdos junto al mar"
  },
  {
    id: 7,
    category: "Boda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_05_10_ANGELA&ANGEL%203029%20(1).JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDVfMTBfQU5HRUxBJkFOR0VMIDMwMjkgKDEpLkpQRyIsImlhdCI6MTc3NDAyMzMzNywiZXhwIjoyMDg5MzgzMzM3fQ.oNTIdBdT94N6vXb3wslyzwtW-bs-rThFvDMz18DrJ94",
    title: "Boda 05/25 Rourell, Tarragona",
    description: "Pure love",
    alt: "En pareja, en família - Fran Molina"
  },
  {
    id: 8,
    category: "Preboda",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80",
    title: "Preboda El Vendrell",
    description: "Vineyard romance",
    alt: "Sesión preboda en viñedos de El Vendrell, romance entre viñas"
  },
  {
    id: 9,
    category: "Boda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_09_27%20BODA%20BERTA&SANTI%20008629.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDlfMjcgQk9EQSBCRVJUQSZTQU5USSAwMDg2MjkuanBnIiwiaWF0IjoxNzc0MDIyNzg2LCJleHAiOjIwODkzODI3ODZ9.vsDg2k-3-nWjYgM0lJ7vMzQiqbaLt18CTGAPFwBy4xA",
    title: "Boda 09/25 Girona",
    description: "Better with friends",
    alt: "Celebrando juntos en Can Riera de la Pineda, Girona"
  },
    {
    id: 10,
    category: "Boda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_05_10_ANGELA&ANGEL%202907.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDVfMTBfQU5HRUxBJkFOR0VMIDI5MDcuSlBHIiwiaWF0IjoxNzc0MDIzMjQ3LCJleHAiOjIwODkzODMyNDd9.6Y-K3RM6rWqtMPtPjLe4OzWqT2WipZ2IyByoZ2xmY1M",
    title: "Boda 05/25 Rourell, Tarragona",
    description: "Love and nature",
    alt: "Pareja en la naturaleza en Rourell, Tarragona"
  },
   {
    id: 11,
    category: "Boda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_09_27%20BODA%20BERTA&SANTI%20004068.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDlfMjcgQk9EQSBCRVJUQSZTQU5USSAwMDQwNjguanBnIiwiaWF0IjoxNzc0MDI0Mjk5LCJleHAiOjIwODkzODQyOTl9.EGyOGJYjaoCgJXxHitZGIJUuG1BMcCTEnRd6JKzkbK0",
    title: "Boda 09/25 Girona",
    description: "Togehter",
    alt: "Mirada cómplice en el bosque de Can Riera de la Pineda, Girona"
  }, 
    {
    id: 12,
    category: "Boda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_05_10_ANGELA&ANGEL%204439.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDVfMTBfQU5HRUxBJkFOR0VMIDQ0MzkuSlBHIiwiaWF0IjoxNzc0MDIyNjEyLCJleHAiOjIwODkzODI2MTJ9.cfWBQHOxaeG0DzvOogeVnwCruPXPirrhSFkI8vbl-90",
    title: "Boda 05/25 Rourell, Tarragona",
    description: "Friends and love",
    alt: "En pareja, en família - Fran Molina"
  },
  {
    id: 13,
    category: "Boda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_09_27%20BODA%20BERTA&SANTI%20000821.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDlfMjcgQk9EQSBCRVJUQSZTQU5USSAwMDA4MjEuanBnIiwiaWF0IjoxNzc0MDI0MTc4LCJleHAiOjIwODkzODQxNzh9.M9AWyoZs0qNkuc4WDIlxLlAkg7VvCA6-LauHzLu6P78",
    title: "Boda 09/25 Girona",
    description: "Moments before",
    alt: "Novia observando su vestido en Can Riera de la Pineda, Girona"
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

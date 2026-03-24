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
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_05_10_ANGELA&ANGEL%202081.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDVfMTBfQU5HRUxBJkFOR0VMIDIwODEuSlBHIiwiaWF0IjoxNzc0MzA0MzgxLCJleHAiOjIwODk2NjQzODF9.BlvlBjCPkwHh80JfMZlQlB-ASsnK0kfHhe0tYM2wgHA",
    title: "Boda 05/25 Rourell, Tarragona",
    description: "Mediterranean love",
    alt: "Pareja enamorada en Fortí del Rourell - Fran Molina"
  },
  {
    id: 2,
    category: "Preboda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/_A741341.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzL19BNzQxMzQxLkpQRyIsImlhdCI6MTc3NDM4MDExMSwiZXhwIjoyMDg5NzQwMTExfQ.2il86O8SmARlBVVQOj31aUU9VFtCIxq36Z1BsxatpaM",
    title: "Preboda Girona",
    description: "Peace",
    alt: "Sesión de preboda en Girona con pareja enamorada en la naturaleza"
  },
  {
   id: 3,
    category: "Boda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_09_27%20BODA%20BERTA&SANTI%20006030.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDlfMjcgQk9EQSBCRVJUQSZTQU5USSAwMDYwMzAuSlBHIiwiaWF0IjoxNzc0MzgwMDU3LCJleHAiOjIwODk3NDAwNTd9.sPL31GapjedhVsHE3t-NvbVIPb1bRqEhknvrs-Vsgt4",
    title: "Boda 09/25 Girona",
    description: "Better with friends",
    alt: "Celebrando juntos en Can Riera de la Pineda, Girona"
  },
  {
    id: 4,
    category: "Postboda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/post4.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzL3Bvc3Q0LkpQRyIsImlhdCI6MTc3NDMwNTU0MywiZXhwIjoyMDg5NjY1NTQzfQ.4oRVCzXJTN7l8tAuD5v-BdzwdzPGAJ8COD0JMpAIUy0",
    title: "Postboda Tarragona",
    description: "Love is forever",
    alt: "Sesión de postboda en el Bosque de la Marquesa, recuerdos junto al mar"
  },
  {
    id: 5,
    category: "Postboda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2%20(1).JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIgKDEpLkpQRyIsImlhdCI6MTc3NDM4MDM3NCwiZXhwIjoyMDg5NzQwMzc0fQ.ZsEnvq5fFdUxTKP-Qt1veSYYkp_u9J2WKSya0tO23nU",
    title: "Postboda Tarragona",
    description: "Beach memories",
    alt: "Sesión de postboda en el Bosque de la Marquesa, recuerdos junto al mar"
  },
  {
    id: 6,
    category: "Preboda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/AN4A5940.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzL0FONEE1OTQwLkpQRyIsImlhdCI6MTc3NDM4MDI1OSwiZXhwIjoyMDg5NzQwMjU5fQ.-BgV8OUWYqlnNJfwpaK467zNhcDwsWfvBvCvxD1NZYs",
    title: "Preboda Barcelona",
    description: "Romantic vibes",
    alt: "Preboda romántica en Barcelona, sesión de fotos para parejas"
  },
  {
    id: 7,
    category: "Postboda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/post3.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzL3Bvc3QzLkpQRyIsImlhdCI6MTc3NDMwNDQ2MiwiZXhwIjoyMDg5NjY0NDYyfQ.ShDnc7v1D3Iz5FPiohM0Z9yZCKeFRRIr15JKfkUr-ig",
    title: "Postboda Tarragona",
    description: "Beach memories",
    alt: "Sesión de postboda en el Bosque de la Marquesa, recuerdos junto al mar"
  },
 {
    id: 8,
    category: "Boda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/1.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzEuSlBHIiwiaWF0IjoxNzc0MzgwMzI0LCJleHAiOjIwODk3NDAzMjR9.I5suMDUXQUM4GkX5TDRsbrmN0Z9DXXa3wzN2WjrgHCI",
    title: "Boda Castellardal, Barcelona",
    description: "Weeding Bouquet",
    alt: "La novia y el ramo, Castellardal, Barcelona"
  },
  {
    id: 9,
    category: "Preboda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_09_27%20BODA%20BERTA&SANTI%20008629.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDlfMjcgQk9EQSBCRVJUQSZTQU5USSAwMDg2MjkuanBnIiwiaWF0IjoxNzc0MzgwMDgzLCJleHAiOjIwODk3NDAwODN9.otGhnz3pnGU0hihAJH8NBH6CBac4buPdz9NLKrV14G8",
    title: "Preboda en Girona",
    description: "New chapter",
    alt: "Sesión preboda en El Girona"
  },
  {
    id: 10,
    category: "Boda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_05_10_ANGELA&ANGEL%203052.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDVfMTBfQU5HRUxBJkFOR0VMIDMwNTIuSlBHIiwiaWF0IjoxNzc0MzA0MzIxLCJleHAiOjIwODk2NjQzMjF9.zMzWlycmSOG_GOv-QFS0vHzyO7oBiJiVnDrcL5_s-Uo",
    title: "Boda 05/25 Rourell, Tarragona",
    description: "Special moment",
    alt: "Momento íntimo en pareja, Tarragona"
  },
   {
    id: 11,
    category: "Postboda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/1%20(1).JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzEgKDEpLkpQRyIsImlhdCI6MTc3NDM4MDM1MywiZXhwIjoyMDg5NzQwMzUzfQ.7nqkQV-S0XmLIWChiW_WhzhG5BMbww5TxcFl5bNEvpc",
    title: "Postboda Tarragona",
    description: "Beautiful moment",
    alt: "Sesión de postboda en el Bosque de la Marquesa, recuerdos junto al mar"
  },
   {
   id: 12,
    category: "Boda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2025_09_27%20BODA%20BERTA&SANTI%20006384.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIwMjVfMDlfMjcgQk9EQSBCRVJUQSZTQU5USSAwMDYzODQuSlBHIiwiaWF0IjoxNzc0MzgwMDcwLCJleHAiOjIwODk3NDAwNzB9.Qysf3DS2sKpoW13L03lk5vRWkU7yrM9W31ddpWk5Ru0",
    title: "Boda 09/25 Girona",
    description: "A day to remember",
    alt: "Pareja junto con el ramo en el bosque en Girona"
  },
   {
    id: 13,
    category: "Boda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/2.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzIuSlBHIiwiaWF0IjoxNzc0MzgwMzkzLCJleHAiOjIwODk3NDAzOTN9.T60-aoUQCYKUBXyfFlE0oHpmbFEMYsw47BxBRhVeYnI",
    title: "Boda Castellardal, Barcelona",
    description: "Previous moments",
    alt: "Preparativo de la ceremonia en Castellardal, Barcelona"
  },
   {
    id: 13,
    category: "Boda",
    image: "https://clmmicwprzdhnkbeczoi.supabase.co/storage/v1/object/sign/Web's%20components/01.JPG?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZjI4ZmRhYS05MDQzLTQ1NDQtODIzNy1kZjI4MmYxYTBkMzEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJXZWIncyBjb21wb25lbnRzLzAxLkpQRyIsImlhdCI6MTc3NDM3OTk3MiwiZXhwIjoyMDg5NzM5OTcyfQ.M4cDRSp2dVKMnBXHJ08gnN2kpmh9epipGm6_XBTAAfw",
    title: "Boda 09/25 Girona",
    description: "The beginning",
    alt: "Pareja entrando en la ceremonia en una motocicleta"
  }
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

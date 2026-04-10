"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown, MapPin } from "lucide-react"
import { BUSINESS_INFO } from "@/lib/config"

const LOCATIONS = [
  { href: "/fotografo-bodas-tarragona", label: "Tarragona" },
  { href: "/fotografo-bodas-barcelona", label: "Barcelona" },
  { href: "/fotografo-bodas-girona", label: "Girona" },
] as const

const NAV_LINKS = [
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#precios", label: "Precios" },
  { href: "/#preguntas-frecuentes", label: "FAQ" },
] as const

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [locationsOpen, setLocationsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setLocationsOpen(false)
  }, [pathname])

  const bg = scrolled
    ? "bg-[#111827]/95 backdrop-blur-md shadow-lg"
    : "bg-transparent"

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${bg}`}
      aria-label="Navegación principal"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg md:text-xl text-white hover:text-[#d4a574] transition-colors"
        >
          {BUSINESS_INFO.shortName}
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
            >
              {link.label}
            </Link>
          ))}

          {/* Locations dropdown */}
          <div className="relative">
            <button
              onClick={() => setLocationsOpen(!locationsOpen)}
              onBlur={() => setTimeout(() => setLocationsOpen(false), 150)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              aria-expanded={locationsOpen}
              aria-haspopup="true"
            >
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Ubicaciones
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${locationsOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
              />
            </button>

            {locationsOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 bg-[#111827]/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                {LOCATIONS.map((loc) => {
                  const isActive = pathname === loc.href
                  return (
                    <Link
                      key={loc.href}
                      href={loc.href}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                        isActive
                          ? "text-[#d4a574] bg-white/5"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <MapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
                      Fotógrafo de bodas en {loc.label}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>

          {/* CTA */}
          <Link
            href="/#contacto"
            className="ml-3 bg-[#d4a574] hover:bg-[#d4a574]/90 text-[#1a365d] px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 uppercase tracking-wide"
          >
            Reservar
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-white"
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#111827]/98 backdrop-blur-md border-t border-white/10 animate-in slide-in-from-top-2 duration-200">
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Locations - expanded in mobile */}
            <div className="pt-2 pb-1">
              <p className="px-4 py-2 text-xs text-white/40 uppercase tracking-wider font-medium flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                Ubicaciones
              </p>
              {LOCATIONS.map((loc) => {
                const isActive = pathname === loc.href
                return (
                  <Link
                    key={loc.href}
                    href={loc.href}
                    className={`block px-8 py-3 text-sm rounded-lg transition-colors ${
                      isActive
                        ? "text-[#d4a574] bg-white/5"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    Bodas en {loc.label}
                  </Link>
                )
              })}
            </div>

            {/* CTA */}
            <Link
              href="/#contacto"
              className="block text-center bg-[#d4a574] hover:bg-[#d4a574]/90 text-[#1a365d] px-6 py-3 rounded-xl font-semibold transition-all duration-300 uppercase tracking-wide mt-4"
            >
              Reservar fecha
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

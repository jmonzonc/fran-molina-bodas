"use client"

import { Instagram, Mail, Phone, MapPin, Facebook, Youtube, type LucideIcon } from "lucide-react"
import { 
  PHONE_DISPLAY, 
  PHONE_LINK, 
  EMAIL, 
  SOCIAL_LINKS, 
  BUSINESS_INFO 
} from "@/lib/config"

// Configuración de redes sociales con iconos
interface SocialLink {
  href: string
  label: string
  icon: LucideIcon
}

const SOCIAL_CONFIG: SocialLink[] = [
  {
    href: SOCIAL_LINKS.instagram,
    label: "Sigue a Fran Molina en Instagram",
    icon: Instagram,
  },
  {
    href: SOCIAL_LINKS.facebook,
    label: "Sigue a Fran Molina en Facebook",
    icon: Facebook,
  },
  {
    href: SOCIAL_LINKS.youtube,
    label: "Mira los vídeos de bodas en YouTube",
    icon: Youtube,
  },
]

// Enlaces legales del footer
const LEGAL_LINKS = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
  { href: "/aviso-legal", label: "Aviso Legal" },
] as const

// Estilos compartidos para iconos sociales
const SOCIAL_ICON_CLASSES = "w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-[#1a365d] transition-all duration-300"

/**
 * Footer del sitio con información de contacto, redes sociales y enlaces legales
 * Incluye datos estructurados schema.org para SEO
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer 
      className="bg-[#111827] text-white/80 py-12 border-t border-white/10"
      itemScope
      itemType="https://schema.org/LocalBusiness"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Columna 1: Marca y descripción */}
          <div>
            <h3 
              className="font-serif text-2xl text-white mb-4" 
              itemProp="name"
            >
              {BUSINESS_INFO.name}
            </h3>
            <p 
              className="text-white/60 leading-relaxed" 
              itemProp="description"
            >
              {BUSINESS_INFO.description}
            </p>
            <meta itemProp="priceRange" content={BUSINESS_INFO.priceRange} />
          </div>

          {/* Columna 2: Información de contacto */}
          <nav aria-label="Información de contacto">
            <h4 className="font-medium text-white mb-4">Contacto</h4>
            <address 
              className="not-italic space-y-3" 
              itemProp="address" 
              itemScope 
              itemType="https://schema.org/PostalAddress"
            >
              {/* Teléfono */}
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
                <a 
                  href={PHONE_LINK}
                  className="hover:text-accent transition-colors" 
                  itemProp="telephone"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
              
              {/* Email */}
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
                <a 
                  href={`mailto:${EMAIL}`} 
                  className="hover:text-accent transition-colors" 
                  itemProp="email"
                >
                  {EMAIL}
                </a>
              </p>
              
              {/* Ubicación */}
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                <span>
                  <span itemProp="addressLocality">{BUSINESS_INFO.location.city}</span>
                  {", "}
                  <span itemProp="addressRegion">{BUSINESS_INFO.location.region}</span>
                </span>
              </p>
              <meta itemProp="addressCountry" content={BUSINESS_INFO.location.country} />
            </address>
          </nav>

          {/* Columna 3: Redes sociales */}
          <nav aria-label="Redes sociales y enlaces útiles">
            <h4 className="font-medium text-white mb-4">Sígueme</h4>
            
            {/* Iconos de redes sociales */}
            <div className="flex gap-4 mb-6">
              {SOCIAL_CONFIG.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={SOCIAL_ICON_CLASSES}
                  aria-label={label}
                  itemProp="sameAs"
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </a>
              ))}
            </div>
            
            {/* Texto SEO local */}
            <p className="text-white/40 text-xs leading-relaxed">
              Fotógrafo de bodas en Tarragona, Reus, Salou, Cambrils 
              y toda la Costa Daurada. Prebodas y postbodas.
            </p>
          </nav>
        </div>

        {/* Barra inferior con copyright y enlaces legales */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>
            © {currentYear} {BUSINESS_INFO.name}. Todos los derechos reservados.
          </p>
          <nav aria-label="Enlaces legales" className="flex gap-6">
            {LEGAL_LINKS.map(({ href, label }) => (
              <a 
                key={href}
                href={href} 
                className="hover:text-accent transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}

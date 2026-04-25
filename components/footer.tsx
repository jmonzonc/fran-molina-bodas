"use client"

import { Instagram, Mail, Phone, MapPin, Facebook, Youtube, type LucideIcon } from "lucide-react"
import {
  PHONE_DISPLAY,
  PHONE_LINK,
  EMAIL,
  SOCIAL_LINKS,
  BUSINESS_INFO,
} from "@/lib/config"

interface SocialLink {
  href: string
  label: string
  icon: LucideIcon
}

const SOCIAL_CONFIG: SocialLink[] = [
  { href: SOCIAL_LINKS.instagram, label: "Sigue a Fran Molina en Instagram", icon: Instagram },
  { href: SOCIAL_LINKS.facebook, label: "Sigue a Fran Molina en Facebook", icon: Facebook },
  { href: SOCIAL_LINKS.youtube, label: "Mira los vídeos de bodas en YouTube", icon: Youtube },
]

const LEGAL_LINKS = [
  { href: "/privacidad", label: "Privacidad" },
  { href: "/cookies", label: "Cookies" },
  { href: "/aviso-legal", label: "Aviso Legal" },
] as const

function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent("open-cookie-preferences"))
}

function SocialIcon({ href, label, icon: Icon }: SocialLink) {
  return (
    <a>
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-[#1a365d] transition-all duration-300"
      aria-label={label}
    >
      <Icon className="w-5 h-5" aria-hidden="true" />
    </a>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      className="bg-[#111827] text-white/80 py-12 border-t border-white/10"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          <div>
            <h3 className="font-serif text-2xl text-white mb-4">
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-white/60 leading-relaxed">
              {BUSINESS_INFO.description}
            </p>
          </div>

          <nav aria-label="Información de contacto">
            <h4 className="font-medium text-white mb-4">Contacto</h4>
            <address className="not-italic space-y-3">
              <p className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" aria-hidden="true" />
                <a href={PHONE_LINK} className="hover:text-accent transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" aria-hidden="true" />
                <a href={`mailto:${EMAIL}`} className="hover:text-accent transition-colors">
                  {EMAIL}
                </a>
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                <span>
                  {BUSINESS_INFO.location.city}, {BUSINESS_INFO.location.region}
                </span>
              </p>
            </address>
          </nav>

          <nav aria-label="Redes sociales y enlaces útiles">
            <h4 className="font-medium text-white mb-4">Sígueme</h4>
            <div className="flex gap-4 mb-6">
              {SOCIAL_CONFIG.map((social) => (
                <SocialIcon key={social.href} {...social} />
              ))}
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              Fotógrafo de bodas en Tarragona, Reus, Salou, Cambrils y toda la Costa Daurada.
              Prebodas y postbodas.
            </p>
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© {currentYear} {BUSINESS_INFO.name}. Todos los derechos reservados.</p>
          <nav aria-label="Enlaces legales" className="flex flex-wrap gap-4 md:gap-6 items-center">
            {LEGAL_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-accent transition-colors">
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={openCookiePreferences}
              className="hover:text-accent transition-colors"
            >
              Configurar cookies
            </button>
          </nav>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import {
  ALL_ACCEPTED,
  DEFAULT_DENIED,
  getConsent,
  initGoogleConsentDefaults,
  saveConsent,
  type ConsentCategories,
} from "@/lib/cookie-consent"

type View = "banner" | "preferences"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [view, setView] = useState<View>("banner")
  const [prefs, setPrefs] = useState<ConsentCategories>(DEFAULT_DENIED)

  useEffect(() => {
    initGoogleConsentDefaults()
    const existing = getConsent()
    if (!existing) {
      setVisible(true)
    } else {
      setPrefs(existing.categories)
    }

    const handler = () => {
      setView("preferences")
      setVisible(true)
    }
    window.addEventListener("open-cookie-preferences", handler)
    return () => window.removeEventListener("open-cookie-preferences", handler)
  }, [])

  const handleAcceptAll = () => {
    saveConsent(ALL_ACCEPTED)
    setVisible(false)
  }

  const handleRejectAll = () => {
    saveConsent(DEFAULT_DENIED)
    setVisible(false)
  }

  const handleSavePreferences = () => {
    saveConsent(prefs)
    setVisible(false)
  }

  if (!visible) return null

  // ─── Banner inferior ────────────────────────────────────────────
  if (view === "banner") {
    return (
      <div
        className="fixed bottom-0 left-0 right-0 z-[100] p-4 flex justify-center"
        role="dialog"
        aria-labelledby="cookie-banner-title"
      >
        <div className="bg-white shadow-2xl border border-neutral-200 w-full max-w-3xl rounded-2xl overflow-hidden">
          <BannerView
            onAcceptAll={handleAcceptAll}
            onRejectAll={handleRejectAll}
            onCustomize={() => setView("preferences")}
          />
        </div>
      </div>
    )
  }

  // ─── Modal de preferencias ──────────────────────────────────────
  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
    >
      <div
        className="fixed inset-0 bg-black/50"
        onClick={() => setVisible(false)}
        aria-hidden="true"
      />
      <div className="relative min-h-full flex items-center justify-center p-4">
        <div className="relative z-10 bg-white shadow-2xl border border-neutral-200 w-full max-w-2xl rounded-2xl">
          <PreferencesView
            prefs={prefs}
            setPrefs={setPrefs}
            onAcceptAll={handleAcceptAll}
            onRejectAll={handleRejectAll}
            onSave={handleSavePreferences}
            onClose={() => setVisible(false)}
          />
        </div>
      </div>
    </div>
  )
}

function BannerView({
  onAcceptAll,
  onRejectAll,
  onCustomize,
}: {
  onAcceptAll: () => void
  onRejectAll: () => void
  onCustomize: () => void
}) {
  return (
    <div className="p-6 md:p-8">
      <h2 id="cookie-banner-title" className="font-serif text-xl md:text-2xl text-neutral-900 mb-3">
        Tu privacidad importa
      </h2>
      <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-6">
        Usamos cookies propias y de terceros para mejorar tu experiencia, analizar el tráfico y, si lo aceptas, mostrarte contenido personalizado. Más info en nuestra{" "}
        <Link href="/cookies" className="text-[#1a365d] underline underline-offset-2 hover:text-[#0f2440]">
          Política de Cookies
        </Link>.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:justify-end">
        <button
          type="button"
          onClick={onCustomize}
          className="px-5 py-2.5 rounded-xl text-sm font-medium text-neutral-700 hover:bg-neutral-100 transition-colors order-3 sm:order-1"
        >
          Personalizar
        </button>
        <button
          type="button"
          onClick={onRejectAll}
          className="px-5 py-2.5 rounded-xl text-sm font-medium border border-neutral-300 text-neutral-800 hover:bg-neutral-50 transition-colors order-2"
        >
          Rechazar todas
        </button>
        <button
          type="button"
          onClick={onAcceptAll}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#1a365d] text-white hover:bg-[#0f2440] transition-colors order-1 sm:order-3"
        >
          Aceptar todas
        </button>
      </div>
    </div>
  )
}

function PreferencesView({
  prefs,
  setPrefs,
  onAcceptAll,
  onRejectAll,
  onSave,
  onClose,
}: {
  prefs: ConsentCategories
  setPrefs: (p: ConsentCategories) => void
  onAcceptAll: () => void
  onRejectAll: () => void
  onSave: () => void
  onClose: () => void
}) {
  return (
    <div className="p-6 md:p-8 max-h-[90vh] overflow-y-auto">
      <div className="flex items-start justify-between mb-6">
        <h2 id="cookie-banner-title" className="font-serif text-2xl text-neutral-900">
          Preferencias de cookies
        </h2>
        <button
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
          className="p-1 rounded-full hover:bg-neutral-100 transition-colors"
        >
          <X className="w-5 h-5 text-neutral-600" />
        </button>
      </div>

      <p className="text-sm text-neutral-600 leading-relaxed mb-6">
        Activa o desactiva cada categoría según tus preferencias. Las cookies técnicas son necesarias para el funcionamiento del sitio.
      </p>

      <div className="space-y-3 mb-8">
        <CategoryRow
          title="Técnicas (necesarias)"
          description="Imprescindibles para la navegación, formularios y seguridad. Siempre activas."
          checked
          disabled
        />
        <CategoryRow
          title="Analíticas"
          description="Nos permiten medir visitas y entender cómo se usa la web (Google Analytics)."
          checked={prefs.analytics}
          onChange={(v) => setPrefs({ ...prefs, analytics: v })}
        />
        <CategoryRow
          title="Marketing"
          description="Se usan para mostrar anuncios relevantes y medir campañas."
          checked={prefs.marketing}
          onChange={(v) => setPrefs({ ...prefs, marketing: v })}
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            type="button"
            onClick={onRejectAll}
            className="px-4 py-2.5 rounded-xl text-sm font-medium border border-neutral-300 text-neutral-800 hover:bg-neutral-50 transition-colors"
          >
            Rechazar todas
          </button>
          <button
            type="button"
            onClick={onAcceptAll}
            className="px-4 py-2.5 rounded-xl text-sm font-medium border border-neutral-300 text-neutral-800 hover:bg-neutral-50 transition-colors"
          >
            Aceptar todas
          </button>
        </div>
        <button
          type="button"
          onClick={onSave}
          className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-[#1a365d] text-white hover:bg-[#0f2440] transition-colors"
        >
          Guardar preferencias
        </button>
      </div>
    </div>
  )
}

function CategoryRow({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string
  description: string
  checked: boolean
  disabled?: boolean
  onChange?: (v: boolean) => void
}) {
  return (
    <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-neutral-200 bg-neutral-50">
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-neutral-900 mb-1">{title}</h3>
        <p className="text-xs text-neutral-600 leading-relaxed">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={title}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative shrink-0 w-11 h-6 rounded-full transition-colors ${
          checked ? "bg-[#1a365d]" : "bg-neutral-300"
        } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  )
}

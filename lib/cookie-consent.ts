export const COOKIE_CONSENT_KEY = "fmm_cookie_consent_v1"
export const COOKIE_CONSENT_MAX_AGE = 60 * 60 * 24 * 180 // 180 días

export type ConsentCategories = {
  necessary: true
  analytics: boolean
  marketing: boolean
}

export type ConsentState = {
  categories: ConsentCategories
  timestamp: number
  version: 1
}

export const DEFAULT_DENIED: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
}

export const ALL_ACCEPTED: ConsentCategories = {
  necessary: true,
  analytics: true,
  marketing: true,
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function ensureGtag(): void {
  if (typeof window === "undefined") return
  window.dataLayer = window.dataLayer || []
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args)
    }
  }
}

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as ConsentState
    if (parsed.version !== 1) return null
    return parsed
  } catch {
    return null
  }
}

export function saveConsent(categories: ConsentCategories): ConsentState {
  const state: ConsentState = {
    categories,
    timestamp: Date.now(),
    version: 1,
  }
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(state))
  document.cookie =
    `${COOKIE_CONSENT_KEY}=${encodeURIComponent(JSON.stringify(categories))};` +
    `path=/;max-age=${COOKIE_CONSENT_MAX_AGE};SameSite=Lax;Secure`
  updateGoogleConsent(categories)
  window.dispatchEvent(
    new CustomEvent("cookie-consent-change", { detail: state })
  )
  return state
}

export function clearConsent(): void {
  localStorage.removeItem(COOKIE_CONSENT_KEY)
  document.cookie = `${COOKIE_CONSENT_KEY}=;path=/;max-age=0;SameSite=Lax;Secure`
}

/**
 * Red de seguridad cliente-side. Los defaults REALES se inyectan
 * inline desde layout.tsx antes de gtag.js. Esta función solo
 * garantiza que window.gtag existe y re-aplica el consent guardado.
 */
export function initGoogleConsentDefaults(): void {
  if (typeof window === "undefined") return
  ensureGtag()
  const stored = getConsent()
  if (stored) updateGoogleConsent(stored.categories)
}

export function updateGoogleConsent(c: ConsentCategories): void {
  if (typeof window === "undefined") return
  ensureGtag()
  window.gtag!("consent", "update", {
    ad_storage: c.marketing ? "granted" : "denied",
    ad_user_data: c.marketing ? "granted" : "denied",
    ad_personalization: c.marketing ? "granted" : "denied",
    analytics_storage: c.analytics ? "granted" : "denied",
    personalization_storage: c.analytics ? "granted" : "denied",
  })
}

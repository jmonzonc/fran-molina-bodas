import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/config'

/**
 * Genera el sitemap.xml dinámicamente para SEO.
 *
 * IMPORTANTE: Los anchors (#portfolio, #servicios, etc.) NO deben
 * incluirse en el sitemap. Google los ignora porque son fragmentos
 * del lado del cliente, no URLs rastreables independientemente.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()

  return [
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },

    // ─── PÁGINAS DE UBICACIÓN (SEO local) ───
    {
      url: `${SITE_URL}/fotografo-bodas-tarragona`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/fotografo-bodas-barcelona`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/fotografo-bodas-girona`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // ─── LEGALES ───
    {
      url: `${SITE_URL}/privacidad`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/cookies`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/aviso-legal`,
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}

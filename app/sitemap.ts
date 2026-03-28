import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/config'

/**
 * Genera el sitemap.xml dinámicamente para SEO.
 *
 * IMPORTANTE: Los anchors (#portfolio, #servicios, etc.) NO deben
 * incluirse en el sitemap. Google los ignora porque son fragmentos
 * del lado del cliente, no URLs rastreables independientemente.
 * Solo se incluyen rutas que generan un documento HTML distinto.
 *
 * Cuando añadas nuevas páginas reales (blog, about, galería propia...),
 * agrégalas aquí con su priority y changeFrequency correspondientes.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()

  return [
    // Página principal — máxima prioridad
    {
      url: SITE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1,
    },

    // Páginas legales — existen como rutas reales en el proyecto
    // (visibles en el footer: /privacidad, /cookies, /aviso-legal)
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

    // --- PÁGINAS FUTURAS (descomenta cuando existan) ---
    //
    // Blog index
    // {
    //   url: `${SITE_URL}/blog`,
    //   lastModified: currentDate,
    //   changeFrequency: 'weekly',
    //   priority: 0.8,
    // },
    //
    // Artículos de blog — generarlos dinámicamente desde tu CMS/MDX:
    // ...posts.map((post) => ({
    //   url: `${SITE_URL}/blog/${post.slug}`,
    //   lastModified: new Date(post.updatedAt).toISOString(),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.7,
    // })),
    //
    // Página About
    // {
    //   url: `${SITE_URL}/sobre-fran`,
    //   lastModified: currentDate,
    //   changeFrequency: 'monthly',
    //   priority: 0.7,
    // },
  ]
}

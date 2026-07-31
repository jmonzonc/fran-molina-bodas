import type { NextConfig } from "next"

/**
 * Punto 6 — imágenes.
 *
 * Estado actual: originales .JPG sin redimensionar en Supabase Storage,
 * servidos con URL firmada (token embebido en el HTML, exp. 2089).
 * Cada variante que genera next/image parte de un archivo de varios MB
 * y consume cuota de transformación de Vercel.
 *
 * Migración recomendada, en orden:
 *   1. Bucket público → desaparece el token del bundle y las URLs se
 *      vuelven cacheables por el CDN.
 *   2. Pre-redimensionar a 2560 px en el lado largo antes de subir
 *      (mogrify -resize 2560x2560\> -quality 88 *.JPG).
 *   3. Renombrar a minúsculas sin espacios: "Web's components" fuerza
 *      doble encoding (%2520) en cada URL.
 */
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Recortado a los breakpoints reales del sitio: cada valor extra
    // multiplica las variantes generadas y facturadas.
    deviceSizes: [640, 828, 1080, 1280, 1600, 1920],
    imageSizes: [256, 384, 512],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clmmicwprzdhnkbeczoi.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "clmmicwprzdhnkbeczoi.supabase.co",
        pathname: "/storage/v1/object/sign/**",
      },
    ],
  },
}

export default nextConfig

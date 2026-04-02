import type { Metadata } from 'next'
import Link from 'next/link'
import { EMAIL, BUSINESS_INFO } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: `Política de cookies del sitio web de ${BUSINESS_INFO.name}, fotógrafo de bodas en Tarragona.`,
  alternates: { canonical: '/cookies' },
  robots: { index: true, follow: true },
}

function CookieTable({
  rows,
}: {
  rows: { cookie: string; provider: string; purpose: string; duration: string }[]
}) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full text-sm border-collapse border border-neutral-200">
        <thead>
          <tr className="bg-neutral-50">
            <th className="border border-neutral-200 px-4 py-3 text-left font-semibold text-neutral-700">
              Cookie
            </th>
            <th className="border border-neutral-200 px-4 py-3 text-left font-semibold text-neutral-700">
              Proveedor
            </th>
            <th className="border border-neutral-200 px-4 py-3 text-left font-semibold text-neutral-700">
              Finalidad
            </th>
            <th className="border border-neutral-200 px-4 py-3 text-left font-semibold text-neutral-700">
              Duración
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.cookie} className="hover:bg-neutral-50/50">
              <td className="border border-neutral-200 px-4 py-3 font-mono text-xs">
                {row.cookie}
              </td>
              <td className="border border-neutral-200 px-4 py-3">
                {row.provider}
              </td>
              <td className="border border-neutral-200 px-4 py-3">
                {row.purpose}
              </td>
              <td className="border border-neutral-200 px-4 py-3">
                {row.duration}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif mb-2 text-neutral-900">
          Política de Cookies
        </h1>
        <p className="text-sm text-neutral-500 mb-10">
          Última actualización: abril 2026
        </p>

        <section className="space-y-6 text-neutral-700 leading-relaxed">
          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            1. ¿Qué son las cookies?
          </h2>
          <p>
            Las cookies son pequeños archivos de texto que los sitios web
            almacenan en el dispositivo del usuario al navegar por internet.
            Permiten que el sitio recuerde información sobre la visita, como
            preferencias de idioma u otros ajustes, para facilitar la siguiente
            visita y hacer que el sitio resulte más útil.
          </p>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            2. Cookies utilizadas en este sitio web
          </h2>
          <p>Este sitio web utiliza las siguientes cookies:</p>

          <h3 className="text-lg font-semibold text-neutral-800 mt-6">
            Cookies técnicas (necesarias)
          </h3>
          <p>
            Son esenciales para el funcionamiento del sitio web. No requieren
            consentimiento del usuario.
          </p>
          <CookieTable
            rows={[
              {
                cookie: '__vercel_live_token',
                provider: 'Vercel',
                purpose: 'Funcionamiento de la plataforma de hosting',
                duration: 'Sesión',
              },
            ]}
          />

          <h3 className="text-lg font-semibold text-neutral-800 mt-6">
            Cookies analíticas
          </h3>
          <p>
            Permiten medir y analizar la navegación de los usuarios en el sitio
            web para mejorar los servicios ofrecidos.
          </p>
          <CookieTable
            rows={[
              {
                cookie: 'va',
                provider: 'Vercel Analytics',
                purpose: 'Analítica web anónima sin datos personales',
                duration: 'Sesión',
              },
            ]}
          />

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            3. ¿Cómo gestionar las cookies?
          </h2>
          <p>
            El usuario puede permitir, bloquear o eliminar las cookies
            instaladas en su equipo mediante la configuración del navegador.
            A continuación se proporcionan enlaces a las instrucciones de los
            navegadores más comunes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Google Chrome
              </a>
            </li>
            <li>
              <a
                href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Mozilla Firefox
              </a>
            </li>
            <li>
              <a
                href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Safari
              </a>
            </li>
            <li>
              <a
                href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 underline hover:text-blue-900"
              >
                Microsoft Edge
              </a>
            </li>
          </ul>
          <p>
            La desactivación de cookies puede afectar al correcto
            funcionamiento de algunas funcionalidades del sitio web.
          </p>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            4. Actualizaciones
          </h2>
          <p>
            Esta política de cookies puede ser actualizada en función de
            cambios normativos o de la incorporación de nuevos servicios. Se
            recomienda revisarla periódicamente.
          </p>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            5. Contacto
          </h2>
          <p>
            Para cualquier consulta relacionada con esta política de cookies,
            puede contactar con nosotros en{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-blue-700 underline hover:text-blue-900"
            >
              {EMAIL}
            </a>
            .
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </article>
    </main>
  )
}

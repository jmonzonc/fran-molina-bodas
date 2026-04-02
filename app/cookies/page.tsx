import type { Metadata } from 'next'
import Link from 'next/link'
import { EMAIL, BUSINESS_INFO } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description: `Política de cookies del sitio web de ${BUSINESS_INFO.name}, fotógrafo de bodas en Tarragona.`,
  alternates: { canonical: '/cookies' },
  robots: { index: true, follow: true },
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <article className="max-w-3xl mx-auto prose prose-neutral prose-headings:font-serif">
        <h1 className="text-4xl font-serif mb-2">Política de Cookies</h1>
        <p className="text-sm text-neutral-500 mb-10">
          Última actualización: abril 2026
        </p>

        <h2>1. ¿Qué son las cookies?</h2>
        <p>
          Las cookies son pequeños archivos de texto que los sitios web
          almacenan en el dispositivo del usuario al navegar por internet.
          Permiten que el sitio recuerde información sobre la visita, como
          preferencias de idioma u otros ajustes, para facilitar la siguiente
          visita y hacer que el sitio resulte más útil.
        </p>

        <h2>2. Cookies utilizadas en este sitio web</h2>
        <p>
          Este sitio web utiliza las siguientes cookies:
        </p>

        <h3>Cookies técnicas (necesarias)</h3>
        <p>
          Son esenciales para el funcionamiento del sitio web. No requieren
          consentimiento del usuario.
        </p>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Proveedor</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>__vercel_live_token</td>
                <td>Vercel</td>
                <td>Funcionamiento de la plataforma de hosting</td>
                <td>Sesión</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Cookies analíticas</h3>
        <p>
          Permiten medir y analizar la navegación de los usuarios en el sitio
          web para mejorar los servicios ofrecidos.
        </p>

        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Proveedor</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>va</td>
                <td>Vercel Analytics</td>
                <td>Analítica web anónima sin datos personales</td>
                <td>Sesión</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>3. ¿Cómo gestionar las cookies?</h2>
        <p>
          El usuario puede permitir, bloquear o eliminar las cookies
          instaladas en su equipo mediante la configuración del navegador.
          A continuación se proporcionan enlaces a las instrucciones de los
          navegadores más comunes:
        </p>
        <ul>
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Google Chrome
            </a>
          </li>
          <li>
            <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
              Safari
            </a>
          </li>
          <li>
            <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          La desactivación de cookies puede afectar al correcto
          funcionamiento de algunas funcionalidades del sitio web.
        </p>

        <h2>4. Actualizaciones</h2>
        <p>
          Esta política de cookies puede ser actualizada en función de
          cambios normativos o de la incorporación de nuevos servicios. Se
          recomienda revisarla periódicamente.
        </p>

        <h2>5. Contacto</h2>
        <p>
          Para cualquier consulta relacionada con esta política de cookies,
          puede contactar con nosotros en{' '}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>

        <div className="mt-12 pt-8 border-t border-neutral-200">
          <Link
            href="/"
            className="text-sm text-neutral-500 hover:text-neutral-800 transition-colors no-underline"
          >
            ← Volver al inicio
          </Link>
        </div>
      </article>
    </main>
  )
}

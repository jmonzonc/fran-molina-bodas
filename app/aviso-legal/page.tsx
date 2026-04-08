import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE_URL, EMAIL, PHONE_DISPLAY, BUSINESS_INFO } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Aviso Legal',
  description: `Aviso legal y condiciones de uso del sitio web de ${BUSINESS_INFO.name}, fotógrafo de bodas en Tarragona.`,
  alternates: { canonical: '/aviso-legal' },
  robots: { index: true, follow: true },
}

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif mb-2 text-neutral-900">
          Aviso Legal
        </h1>
        <p className="text-sm text-neutral-500 mb-10">
          Última actualización: abril 2026
        </p>

        <section className="space-y-6 text-neutral-700 leading-relaxed">
          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            1. Datos identificativos
          </h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio,
            de Servicios de la Sociedad de la Información y de Comercio
            Electrónico (LSSI-CE), se informa al usuario de los siguientes datos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Titular:</strong> Francesc Molina March</li>
            <li><strong>NIF:</strong> 47769710K</li>
            <li><strong>Domicilio:</strong> Camí Terres Cavades 1, 43007 Tarragona, España</li>
            <li><strong>Correo electrónico:</strong> {EMAIL}</li>
            <li><strong>Teléfono:</strong> {PHONE_DISPLAY}</li>
            <li><strong>Sitio web:</strong> {SITE_URL}</li>
            <li><strong>Actividad:</strong> Servicios de fotografía y videografía de bodas</li>
          </ul>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            2. Objeto
          </h2>
          <p>
            El presente sitio web tiene como finalidad informar sobre los
            servicios de fotografía y vídeo de bodas ofrecidos por Francesc
            Molina March en Tarragona, la Costa Daurada y Cataluña, así como
            facilitar el contacto con posibles clientes.
          </p>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            3. Propiedad intelectual e industrial
          </h2>
          <p>
            Todos los contenidos del sitio web, incluyendo textos, fotografías,
            vídeos, diseño gráfico, logotipos y código fuente, son propiedad de
            Francesc Molina March o se utilizan con la debida autorización, y
            están protegidos por la legislación vigente en materia de propiedad
            intelectual e industrial.
          </p>
          <p>
            Queda prohibida su reproducción, distribución, comunicación pública
            o transformación total o parcial sin la autorización expresa y por
            escrito del titular.
          </p>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            4. Condiciones de uso
          </h2>
          <p>
            El usuario se compromete a utilizar este sitio web de conformidad con
            la ley, el presente aviso legal y las buenas costumbres. El usuario
            se abstendrá de utilizar el sitio web con fines ilícitos, lesivos de
            derechos de terceros, o que puedan dañar, sobrecargar o impedir el
            normal funcionamiento del sitio.
          </p>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            5. Exclusión de responsabilidad
          </h2>
          <p>
            Francesc Molina March no se hace responsable de los daños o
            perjuicios que pudieran derivarse del acceso o uso del sitio web,
            incluyendo errores u omisiones en los contenidos, falta de
            disponibilidad del sitio, o la transmisión de virus o programas
            maliciosos.
          </p>
          <p>
            Los enlaces a sitios web de terceros se proporcionan únicamente a
            título informativo, sin que ello implique relación alguna con dichos
            sitios ni responsabilidad sobre sus contenidos.
          </p>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            6. Legislación aplicable y jurisdicción
          </h2>
          <p>
            El presente aviso legal se rige por la legislación española. Para la
            resolución de cualquier controversia que pudiera derivarse del acceso
            o uso de este sitio web, las partes se someten a los juzgados y
            tribunales de Tarragona, con renuncia a cualquier otro fuero que
            pudiera corresponderles.
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

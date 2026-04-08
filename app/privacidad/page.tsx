import type { Metadata } from 'next'
import Link from 'next/link'
import { EMAIL, PHONE_DISPLAY, BUSINESS_INFO } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: `Política de privacidad y protección de datos de ${BUSINESS_INFO.name}, fotógrafo de bodas en Tarragona.`,
  alternates: { canonical: '/privacidad' },
  robots: { index: true, follow: true },
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white py-20 px-6">
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-serif mb-2 text-neutral-900">
          Política de Privacidad
        </h1>
        <p className="text-sm text-neutral-500 mb-10">
          Última actualización: abril 2026
        </p>

        <section className="space-y-6 text-neutral-700 leading-relaxed">
          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            1. Responsable del tratamiento
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Responsable:</strong> Francesc Molina March</li>
            <li><strong>NIF:</strong> 47769710K</li>
            <li><strong>Domicilio:</strong> Camí Terres Cavades 1, 43007 Tarragona, España</li>
            <li><strong>Correo electrónico:</strong> {EMAIL}</li>
            <li><strong>Teléfono:</strong> {PHONE_DISPLAY}</li>
          </ul>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            2. Datos que recopilamos
          </h2>
          <p>
            A través de este sitio web podemos recopilar los siguientes datos
            personales cuando el usuario nos contacta voluntariamente:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Nombre y apellidos</li>
            <li>Correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Fecha y lugar del evento</li>
            <li>Cualquier información adicional que el usuario incluya en su mensaje</li>
          </ul>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            3. Finalidad del tratamiento
          </h2>
          <p>Los datos personales recogidos serán tratados con las siguientes finalidades:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responder a consultas y solicitudes de presupuesto</li>
            <li>Gestión de la relación contractual para servicios de fotografía y vídeo de bodas</li>
            <li>Envío de comunicaciones relacionadas con los servicios contratados</li>
          </ul>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            4. Base legal del tratamiento
          </h2>
          <p>
            La base legal para el tratamiento de los datos es el consentimiento
            del interesado al contactar a través del formulario o por correo
            electrónico, así como la ejecución de un contrato o medidas
            precontractuales cuando el usuario solicita un presupuesto.
          </p>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            5. Destinatarios de los datos
          </h2>
          <p>
            Los datos personales no serán cedidos a terceros, salvo obligación
            legal. Los datos podrán ser tratados por proveedores de servicios
            (hosting, correo electrónico) que actúan como encargados del
            tratamiento con las debidas garantías.
          </p>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            6. Conservación de los datos
          </h2>
          <p>
            Los datos se conservarán durante el tiempo necesario para cumplir con
            la finalidad para la que fueron recogidos y para determinar posibles
            responsabilidades derivadas de dicha finalidad. Los datos de clientes
            se conservarán mientras dure la relación contractual y, una vez
            finalizada, durante los plazos legales de prescripción aplicables.
          </p>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            7. Derechos del interesado
          </h2>
          <p>
            El usuario puede ejercer los siguientes derechos en cualquier momento
            enviando un correo electrónico a{' '}
            <a
              href={`mailto:${EMAIL}`}
              className="text-blue-700 underline hover:text-blue-900"
            >
              {EMAIL}
            </a>{' '}
            acompañado de copia de su documento de identidad:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Acceso:</strong> conocer qué datos personales se están tratando</li>
            <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de los datos</li>
            <li><strong>Oposición:</strong> oponerse al tratamiento de los datos</li>
            <li><strong>Limitación:</strong> solicitar la limitación del tratamiento</li>
            <li><strong>Portabilidad:</strong> obtener los datos en formato estructurado</li>
          </ul>
          <p>
            Asimismo, el usuario tiene derecho a presentar una reclamación ante
            la Agencia Española de Protección de Datos (
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 underline hover:text-blue-900"
            >
              www.aepd.es
            </a>
            ) si considera que sus derechos no han sido debidamente atendidos.
          </p>

          <h2 className="text-2xl font-serif text-neutral-900 mt-10">
            8. Seguridad
          </h2>
          <p>
            Francesc Molina March adopta las medidas técnicas y organizativas
            necesarias para garantizar la seguridad de los datos personales y
            evitar su alteración, pérdida, tratamiento o acceso no autorizado.
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

/**
 * Formato único de moneda en todo el sitio.
 *
 * Problema que resuelve: hoy conviven strings literales ("€3.300") con
 * `toLocaleString("es-ES")`. El locale es-ES define `minimumGroupingDigits: 2`,
 * así que 3800 se imprime "3800" y 3300 hardcodeado se imprime "3.300".
 * En el mismo bloque de precio se ve: "€3.300   €3800".
 *
 * `useGrouping: "always"` (ES2023) lo resuelve, pero exige lib "esnext" en
 * tsconfig. Para no tocar la configuración de build se agrupa a mano:
 * determinista, sin dependencias y sin riesgo de romper Vercel.
 */

function group(value: number): string {
  const sign = value < 0 ? "-" : ""
  const digits = Math.abs(Math.round(value)).toString()
  return sign + digits.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
}

/** "€3.300" — uso en toda la UI */
export function formatEUR(amount: number): string {
  return `€${group(amount)}`
}

/** "3300" — uso exclusivo en JSON-LD / Schema.org */
export function schemaPrice(amount: number): string {
  return String(Math.round(amount))
}

/** "3.300 €" — variante para prosa larga y FAQ, donde el símbolo va detrás */
export function formatEURProse(amount: number): string {
  return `${group(amount)} €`
}

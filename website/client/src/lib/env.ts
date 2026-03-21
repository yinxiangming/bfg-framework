/**
 * All public origins come from env only — no hardcoded defaults.
 */

function readPublicEnv(name: string): string {
  const v = process.env[name]
  return typeof v === 'string' ? v.trim().replace(/\/$/, '') : ''
}

/** Marketing site origin (e.g. https://www.idlevo.com). May be empty if unset. */
export function getSiteBaseUrl(): string {
  return readPublicEnv('NEXT_PUBLIC_SITE_URL')
}

/** Main BFG app origin for login and deep links. May be empty if unset. */
export function getMainAppOrigin(): string {
  return readPublicEnv('NEXT_PUBLIC_MAIN_APP_ORIGIN')
}

/** Absolute URL to main app login, or null when MAIN_APP_ORIGIN is not configured. */
export function getMainAppLoginUrl(): string | null {
  const origin = getMainAppOrigin()
  if (!origin) return null
  return `${origin}/auth/login`
}

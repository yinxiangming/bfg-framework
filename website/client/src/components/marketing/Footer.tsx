import Link from 'next/link'
import { brand, footerColumns, footerLegal } from '@/config/marketingSite'

export default function MarketingFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-24 border-t border-[color-mix(in_srgb,var(--color-on-surface)_8%,transparent)] bg-[var(--color-surface-low)]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <div className="mb-6 flex items-center gap-2">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold text-white btn-primary-gradient"
                aria-hidden
              >
                C
              </span>
              <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>
                {brand.name}
              </span>
            </div>
            <p className="mb-8 max-w-sm text-sm leading-relaxed text-[var(--color-on-surface-muted)]">
              {brand.tagline}
            </p>
          </div>
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-6 text-sm font-bold text-[var(--color-on-surface)]">{col.title}</h3>
              <ul className="space-y-4 text-sm">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-[var(--color-on-surface-muted)] transition-colors hover:text-[var(--color-primary-mid)]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[color-mix(in_srgb,var(--color-on-surface)_6%,transparent)] pt-8 text-sm md:flex-row md:items-center">
          <p className="text-[var(--color-on-surface-muted)]">© {year} {brand.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-8">
            {footerLegal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[var(--color-on-surface-muted)] transition-colors hover:text-[var(--color-primary-mid)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

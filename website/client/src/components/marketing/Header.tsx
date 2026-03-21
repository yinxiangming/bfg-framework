'use client'

import Link from 'next/link'
import { brand, headerCta, mainNav } from '@/config/marketingSite'
import { getMainAppLoginUrl } from '@/lib/env'

export default function MarketingHeader() {
  const loginUrl = getMainAppLoginUrl()

  return (
    <header className="glass-header sticky top-0 z-50 border-b border-[color-mix(in_srgb,var(--color-on-surface)_6%,transparent)]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold text-white btn-primary-gradient"
            aria-hidden
          >
            C
          </span>
          <span className="text-xl font-bold tracking-tight" style={{ fontFamily: 'var(--font-manrope)' }}>
            {brand.name}
          </span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--color-on-surface-muted)] transition-colors hover:text-[var(--color-primary-mid)]"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          {loginUrl ? (
            <Link
              href={loginUrl}
              className="hidden rounded-full bg-[var(--color-surface-low)] px-5 py-2.5 text-sm font-medium text-[var(--color-on-surface)] transition-colors hover:bg-[var(--color-surface)] md:inline-block"
            >
              Sign in
            </Link>
          ) : null}
          <Link
            href={headerCta.secondary.href}
            className="hidden rounded-full px-4 py-2.5 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface-low)] md:inline-block"
          >
            {headerCta.secondary.label}
          </Link>
          <Link
            href={headerCta.primary.href}
            className="rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-[var(--shadow-soft)] btn-primary-gradient transition-opacity hover:opacity-95"
          >
            {headerCta.primary.label}
          </Link>
        </div>
      </nav>
    </header>
  )
}

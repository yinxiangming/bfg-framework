type PageShellProps = {
  title: string
  subtitle?: string
  children?: React.ReactNode
}

/** Shared hero + content width for marketing inner pages. */
export function PageShell({ title, subtitle, children }: PageShellProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
      <header className="mb-12 max-w-3xl">
        <h1
          className="text-4xl font-bold tracking-tight text-[var(--color-on-surface)] md:text-5xl"
          style={{ fontFamily: 'var(--font-manrope)' }}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 text-lg leading-relaxed text-[var(--color-on-surface-muted)]">{subtitle}</p>
        ) : null}
      </header>
      {children}
    </div>
  )
}

export function ContentBlock({ children }: { children: React.ReactNode }) {
  return <div className="max-w-3xl space-y-4 text-[var(--color-on-surface-muted)] [&_p]:leading-relaxed">{children}</div>
}

import Link from 'next/link'
import { brand, brandEmail, routes } from '@/config/marketingSite'

const sections = [
  { id: 'intro', title: 'Introduction' },
  { id: 'collection', title: 'Information Collection' },
  { id: 'usage', title: 'Data Usage' },
  { id: 'security', title: 'Security Measures' },
  { id: 'rights', title: 'User Rights' },
  { id: 'cookies', title: 'Cookies & Tracking' },
  { id: 'contact', title: 'Contact Us' },
]

export default function PrivacyPageContent() {
  return (
    <div className="pb-24 pt-24">
      <section className="mx-auto mb-16 max-w-7xl px-8">
        <div className="mb-12 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <span className="mb-4 inline-block rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#00714d]">
              Trust &amp; Transparency
            </span>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] md:text-6xl" style={{ fontFamily: 'var(--font-manrope)' }}>
              Privacy Policy
            </h1>
            <p className="text-xl leading-relaxed text-[var(--color-on-surface-muted)]">
              Your data security is the cornerstone of our consignment platform. Learn how we handle, protect, and process your
              information with editorial clarity.
            </p>
          </div>
          <div className="hidden pb-2 md:block">
            <p className="text-xs font-medium uppercase tracking-widest text-[#70787d]">Last Updated: May 24, 2024</p>
          </div>
        </div>
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            ['verified_user', 'GDPR Compliant', 'Full adherence to global data protection standards.'],
            ['lock', '256-bit Encryption', 'All sensitive data is encrypted in transit and at rest.'],
            ['visibility_off', 'Zero Data Selling', 'We never sell your personal or inventory data.'],
          ].map(([icon, title, body]) => (
            <div
              key={title}
              className="flex flex-col justify-between rounded-xl bg-[var(--color-surface-low)] p-8 transition-colors hover:bg-[#dce9ff]"
            >
              <span className="material-symbols-outlined mb-12 text-3xl text-[var(--color-primary)]">{icon}</span>
              <div>
                <h3 className="mb-2 text-lg font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                  {title}
                </h3>
                <p className="text-sm text-[var(--color-on-surface-muted)]">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-8 lg:flex-row">
        <aside className="hidden lg:block lg:w-1/4">
          <nav className="sticky top-28 space-y-4">
            {sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`block py-1 pl-4 text-sm ${i === 0 ? 'border-l-2 border-[var(--color-primary)] font-semibold text-[var(--color-primary)]' : 'font-medium text-[var(--color-on-surface-muted)] hover:text-[var(--color-primary)]'}`}
              >
                {s.title}
              </a>
            ))}
          </nav>
        </aside>
        <div className="space-y-20 lg:w-3/4">
          <section id="intro">
            <h2 className="mb-6 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Introduction
            </h2>
            <div className="prose max-w-none space-y-4 leading-relaxed text-[var(--color-on-surface-muted)]">
              <p>
                Welcome to {brand.name}. This Privacy Policy describes how your personal information is collected, used, and shared when
                you visit or make use of the {brand.name} SaaS platform. We are committed to protecting your privacy and providing a
                secure environment for all consignment operations.
              </p>
              <p>
                By using our service, you agree to the collection and use of information in accordance with this policy. Our platform
                is designed as a &quot;Digital Concierge,&quot; prioritizing your security as much as your operational efficiency.
              </p>
            </div>
          </section>
          <section id="collection">
            <h2 className="mb-6 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Information Collection
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border border-[#bfc8cc]/15 bg-white p-8 shadow-sm">
                <h4 className="mb-4 flex items-center gap-2 font-bold text-[var(--color-primary)]">
                  <span className="material-symbols-outlined text-sm">person</span>
                  Personal Data
                </h4>
                <ul className="space-y-3 text-sm text-[var(--color-on-surface-muted)]">
                  {['Full name and contact details (email, phone number).', 'Account credentials and identity verification.'].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-secondary)]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-[#bfc8cc]/15 bg-white p-8 shadow-sm">
                <h4 className="mb-4 flex items-center gap-2 font-bold text-[var(--color-primary)]">
                  <span className="material-symbols-outlined text-sm">inventory_2</span>
                  Operational Data
                </h4>
                <ul className="space-y-3 text-sm text-[var(--color-on-surface-muted)]">
                  {['Inventory SKUs, pricing, and consignor records.', 'Transaction history and payout preferences.'].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-secondary)]" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <section id="usage">
            <h2 className="mb-6 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Data Usage
            </h2>
            <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
              We use collected information to operate the platform, process settlements, improve product quality, and communicate
              service updates. We do not use consignor inventory data for unrelated advertising.
            </p>
          </section>
          <section id="security">
            <h2 className="mb-6 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Security Measures
            </h2>
            <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
              Technical and organizational safeguards include encryption, access logging, least-privilege roles, and regular security
              reviews. See also our <Link href={routes.security} className="font-semibold text-[var(--color-primary-mid)] hover:underline">Security &amp; Trust</Link> page.
            </p>
          </section>
          <section id="rights">
            <h2 className="mb-6 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              User Rights
            </h2>
            <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
              Depending on jurisdiction, you may request access, correction, export, or deletion of personal data. Contact us using the
              details below; we respond within statutory timelines.
            </p>
          </section>
          <section id="cookies">
            <h2 className="mb-6 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Cookies &amp; Tracking
            </h2>
            <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
              We use cookies and similar technologies for authentication, preferences, and aggregated analytics. You can control
              non-essential cookies via your browser settings.
            </p>
          </section>
          <section id="contact">
            <h2 className="mb-6 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Contact Us
            </h2>
            <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
              Questions about this policy:{' '}
              <a href={`mailto:${brandEmail('privacy')}`} className="font-semibold text-[var(--color-primary-mid)] hover:underline">
                {brandEmail('privacy')}
              </a>{' '}
              or <Link href={routes.contact} className="font-semibold text-[var(--color-primary-mid)] hover:underline">contact form</Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

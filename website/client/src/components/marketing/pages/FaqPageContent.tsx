import Link from 'next/link'
import { brand, routes } from '@/config/marketingSite'

const faqs = [
  {
    q: 'How does the 1-click payout work?',
    a: 'Our 1-click payout system leverages secure bank integrations to transfer funds instantly to your consignors. Once a sale is finalized, you simply review the payout amount and click "Confirm." The system handles the ledger entries, transaction fees, and direct deposits automatically.',
  },
  {
    q: 'Is my data secure?',
    a: `Security is our top priority. We use AES-256 encryption for all stored data and TLS 1.3 for data in transit. ${brand.name} is SOC2 Type II compliant, ensuring your business and customer information is protected by industry-leading standards.`,
  },
  {
    q: 'Can I manage multiple store locations?',
    a: 'Yes, the "Enterprise" tier supports unlimited physical and digital locations. You can track inventory transfers between stores, view location-specific analytics, and manage staff permissions per site from a single unified dashboard.',
  },
  {
    q: 'How are consignment fees calculated?',
    a: 'You can set custom fee structures per category or per consignor. Our dynamic calculator automatically subtracts your commission, cleaning fees, or shipping costs before showing the final payout balance.',
  },
]

const categories = [
  { icon: 'dashboard', label: 'General', active: true },
  { icon: 'payments', label: 'Payouts', active: false },
  { icon: 'inventory_2', label: 'Inventory', active: false },
  { icon: 'security', label: 'Security', active: false },
]

export default function FaqPageContent() {
  return (
    <div className="mx-auto max-w-7xl px-8 pb-24 pt-24">
      <header className="mb-20 max-w-3xl text-center md:text-left">
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tighter text-[var(--color-primary)] md:text-6xl" style={{ fontFamily: 'var(--font-manrope)' }}>
          Knowledge Center
        </h1>
        <p className="text-xl leading-relaxed text-[var(--color-on-surface-muted)]">
          Everything you need to know about scaling your premium consignment business with {brand.name}.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <aside className="space-y-4 lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">Categories</h3>
            <nav className="flex flex-col gap-2">
              {categories.map((c) => (
                <button
                  key={c.label}
                  type="button"
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                    c.active ? 'bg-[#dce9ff] font-bold text-[var(--color-primary)]' : 'text-[var(--color-on-surface-muted)] hover:bg-[var(--color-surface-low)]'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{c.icon}</span>
                  {c.label}
                </button>
              ))}
            </nav>
            <div className="relative mt-12 overflow-hidden rounded-2xl bg-[var(--color-primary)] p-6 text-white">
              <div className="relative z-10">
                <h4 className="mb-2 font-bold">Need more help?</h4>
                <p className="mb-4 text-sm opacity-80">Our concierge team is available 24/7 for premium members.</p>
                <Link href={routes.contact} className="flex items-center gap-2 text-sm font-bold underline underline-offset-4">
                  Contact Support
                </Link>
              </div>
              <div className="absolute -bottom-4 -right-4 opacity-10">
                <span className="material-symbols-outlined text-8xl">support_agent</span>
              </div>
            </div>
          </div>
        </aside>

        <div className="space-y-6 lg:col-span-9">
          <div className="mb-12 space-y-4">
            {faqs.map((item, i) => (
              <details
                key={item.q}
                className="overflow-hidden rounded-2xl bg-white shadow-[0px_12px_32px_rgba(13,28,46,0.04)]"
                open={i === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-left [&::-webkit-details-marker]:hidden">
                  <span className="text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                    {item.q}
                  </span>
                  <span className="material-symbols-outlined text-[#70787d]">expand_more</span>
                </summary>
                <div className="px-6 pb-6 leading-relaxed text-[var(--color-on-surface-muted)]">{item.a}</div>
              </details>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-[color-mix(in_srgb,var(--color-secondary-soft)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-secondary-soft)_20%,white)] p-8">
              <span className="material-symbols-outlined mb-4 text-4xl text-[var(--color-secondary)]">menu_book</span>
              <h3 className="mb-2 text-xl font-bold text-[var(--color-primary)]">API Documentation</h3>
              <p className="mb-6 text-[var(--color-on-surface-muted)]">Explore our technical guides for custom integrations and webhooks.</p>
              <span className="flex items-center gap-2 font-bold text-[var(--color-primary)]">
                Read Docs <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
            <div className="rounded-3xl bg-[color-mix(in_srgb,#d5e3fc_50%,white)] p-8">
              <span className="material-symbols-outlined mb-4 text-4xl text-[var(--color-primary)]">video_library</span>
              <h3 className="mb-2 text-xl font-bold text-[var(--color-primary)]">Video Tutorials</h3>
              <p className="mb-6 text-[var(--color-on-surface-muted)]">Watch step-by-step guides on setting up your inventory glass.</p>
              <span className="flex items-center gap-2 font-bold text-[var(--color-primary)]">
                Watch Now <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

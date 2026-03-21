import Link from 'next/link'
import { brand, routes } from '@/config/marketingSite'

const brandIncludedHighlights = [
  'Unlimited Consignor Portals (Free)',
  'Native QuickBooks & Xero sync',
  'Export all your data, anytime',
  'No hardware lock-in or cloud print fees',
  'Advanced Fixed-Price Discount logic',
]

const competitors = [
  '$100+/mo for Consignor Access',
  '$500/mo integration setup fees',
  'Hidden "Cloud Label" printing taxes',
  'Data held hostage (No CSV export)',
  'Limited to %-based discounts only',
]

export default function PricingPageContent() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-24">
      <header className="mb-16 space-y-4 text-center">
        <h1
          className="text-5xl font-extrabold tracking-tight text-[var(--color-primary)] md:text-6xl"
          style={{ fontFamily: 'var(--font-manrope)' }}
        >
          Transparent pricing for <br />
          growing businesses
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-[var(--color-on-surface-muted)]">
          Choose the plan that fits your shop&apos;s stage. No hidden fees, no complex contracts. Switch plans anytime as you scale.
        </p>
        <div className="mx-auto mt-4 inline-block max-w-2xl rounded-2xl border border-[color-mix(in_srgb,var(--color-secondary)_20%,transparent)] bg-[color-mix(in_srgb,var(--color-secondary-soft)_30%,white)] py-3 px-6">
          <p className="text-sm font-semibold text-[var(--color-secondary)]">
            One Price. Everything Included. No extra charges for Consignor Portals, Cloud Printing, or QuickBooks integration.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 pt-8">
          <span className="text-sm font-semibold text-[var(--color-on-surface)]">Monthly</span>
          <div className="relative h-8 w-14 rounded-full bg-[#dce9ff] p-1">
            <div className="absolute right-1 top-1 h-6 w-6 rounded-full bg-[var(--color-primary)] shadow-sm" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-[var(--color-on-surface-muted)]">Annual</span>
            <span className="rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_50%,white)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#00714d]">
              Save 20%
            </span>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="flex flex-col rounded-[2rem] border border-transparent bg-[var(--color-surface-low)] p-8 transition-all hover:-translate-y-2">
          <div className="mb-8">
            <h3 className="mb-2 text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Starter
            </h3>
            <p className="text-sm text-[var(--color-on-surface-muted)]">
              Perfect for boutique shops and solo entrepreneurs starting their journey.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-[var(--color-on-surface)]">$49</span>
              <span className="text-[var(--color-on-surface-muted)]">/mo</span>
            </div>
            <p className="mt-2 text-xs italic text-[var(--color-on-surface-muted)]">Billed annually</p>
          </div>
          <ul className="mb-10 flex-grow space-y-4">
            {[
              'Up to 500 active items',
              'Full Data Export (CSV/Excel)',
              'Human Support (24h)',
              'Fixed-Price Discounts (Yellow Tags)',
              'Standard reporting',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="material-symbols-outlined pt-1 text-sm text-[var(--color-secondary)]">check_circle</span>
                <span className="text-sm text-[var(--color-on-surface)]">{t}</span>
              </li>
            ))}
          </ul>
          <Link
            href={routes.getStarted}
            className="w-full rounded-xl bg-[#d5e3fc] py-4 text-center font-bold text-[var(--color-on-surface)] transition-all hover:bg-[#dce9ff] active:scale-95"
          >
            Start Free Trial
          </Link>
        </div>

        <div className="relative z-10 flex scale-105 flex-col rounded-[2rem] border-2 border-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] bg-white p-8 shadow-xl transition-all hover:-translate-y-2">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[var(--color-secondary)] px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
            Most Popular
          </div>
          <div className="mb-8">
            <h3 className="mb-2 text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Pro
            </h3>
            <p className="text-sm text-[var(--color-on-surface-muted)]">
              For scaling businesses that need advanced automation and insights.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-[var(--color-on-surface)]">$129</span>
              <span className="text-[var(--color-on-surface-muted)]">/mo</span>
            </div>
            <p className="mt-2 text-xs italic text-[var(--color-on-surface-muted)]">Billed annually</p>
          </div>
          <ul className="mb-10 flex-grow space-y-4">
            {[
              'Unlimited active items',
              'Full Data Export (CSV/Excel)',
              'Priority Human Support (4h)',
              'Advanced AI pricing assistant',
              'Shopify & eBay integration',
              'Fixed-Price Discounts ($1 Deals)',
            ].map((t, i) => (
              <li key={t} className="flex items-start gap-3">
                <span className="material-symbols-outlined pt-1 text-sm text-[var(--color-secondary)]">check_circle</span>
                <span className={`text-sm text-[var(--color-on-surface)] ${i === 0 ? 'font-bold' : ''}`}>{t}</span>
              </li>
            ))}
          </ul>
          <Link
            href={routes.getStarted}
            className="pricing-gradient w-full rounded-xl py-4 text-center font-bold text-white shadow-lg transition-all active:scale-95"
          >
            Get Started with Pro
          </Link>
        </div>

        <div className="flex flex-col rounded-[2rem] border border-transparent bg-[var(--color-surface-low)] p-8 transition-all hover:-translate-y-2">
          <div className="mb-8">
            <h3 className="mb-2 text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Enterprise
            </h3>
            <p className="text-sm text-[var(--color-on-surface-muted)]">
              Tailored solutions for high-volume franchises and multi-location networks.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-[var(--color-on-surface)]">Custom</span>
            </div>
            <p className="mt-2 text-xs italic text-[var(--color-on-surface-muted)]">Contact for quote</p>
          </div>
          <ul className="mb-10 flex-grow space-y-4">
            {[
              'Multi-location sync',
              'Dedicated Human Account Manager',
              'Full Data Export (CSV/Excel)',
              'SLA guaranteed uptime',
              'Unlimited Fixed-Price Logic',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <span className="material-symbols-outlined pt-1 text-sm text-[var(--color-secondary)]">check_circle</span>
                <span className="text-sm text-[var(--color-on-surface)]">{t}</span>
              </li>
            ))}
          </ul>
          <Link
            href={routes.contact}
            className="w-full rounded-xl bg-[#d5e3fc] py-4 text-center font-bold text-[var(--color-on-surface)] transition-all hover:bg-[#dce9ff] active:scale-95"
          >
            Contact Sales
          </Link>
        </div>
      </div>

      <section className="mt-32">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
          The Most Honest Software in the Industry
        </h2>
        <div className="overflow-hidden rounded-[2.5rem] border border-[#bfc8cc]/20 bg-[var(--color-surface-low)] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="border-b border-[#bfc8cc]/20 p-10 md:border-b-0 md:border-r">
              <div className="mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-[var(--color-secondary)]">sentiment_very_satisfied</span>
                <h4 className="text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                  The {brand.name} Way
                </h4>
              </div>
              <ul className="space-y-4">
                {brandIncludedHighlights.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">check</span>
                    <span className="text-[var(--color-on-surface)]">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[color-mix(in_srgb,#ffdad6_10%,white)] p-10">
              <div className="mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-3xl text-[#ba1a1a]">sentiment_very_dissatisfied</span>
                <h4 className="text-2xl font-bold text-[var(--color-on-surface)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Other Competitors
                </h4>
              </div>
              <ul className="space-y-4">
                {competitors.map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#ba1a1a]">close</span>
                    <span className="text-[var(--color-on-surface-muted)]">{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl bg-[color-mix(in_srgb,#ffdad6_20%,white)] p-4">
                <p className="text-sm font-bold text-[#93000a]">
                  Competitors often hide $500+/mo in auxiliary fees. We don&apos;t.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-32 grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="rounded-3xl bg-[color-mix(in_srgb,#dce9ff_50%,white)] p-10 md:col-span-2">
          <h4 className="mb-4 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            Enterprise Grade Security
          </h4>
          <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
            Your data is protected by industry-leading AES-256 encryption. We handle millions of transactions annually with 99.99%
            historical uptime.
          </p>
          <div className="mt-8 flex gap-6 opacity-60">
            <span className="material-symbols-outlined text-4xl">security</span>
            <span className="material-symbols-outlined text-4xl">verified_user</span>
            <span className="material-symbols-outlined text-4xl">lock</span>
          </div>
        </div>
        <div className="rounded-3xl border border-[#bfc8cc]/10 bg-[var(--color-surface-low)] p-10 md:col-span-2">
          <h4 className="mb-4 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            Integrate your stack
          </h4>
          <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
            Connect {brand.name} with your favorite tools. From e-commerce platforms to accounting software.
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4">
            {['Shopify', 'QuickBooks', 'Stripe'].map((name) => (
              <div
                key={name}
                className="flex h-12 items-center justify-center rounded-lg bg-white text-xs font-bold text-[var(--color-on-surface-muted)]"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-[var(--color-on-surface-muted)]">
        Questions?{' '}
        <Link href={routes.faq} className="font-semibold text-[var(--color-primary-mid)] hover:underline">
          Read the FAQ
        </Link>{' '}
        or{' '}
        <Link href={routes.contact} className="font-semibold text-[var(--color-primary-mid)] hover:underline">
          contact sales
        </Link>
        .
      </p>
    </div>
  )
}

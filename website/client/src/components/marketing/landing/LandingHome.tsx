import Link from 'next/link'
import { brand, routes } from '@/config/marketingSite'
import { stitchAssets } from '@/config/stitchAssets'
import StitchImage from '@/components/marketing/StitchImage'

export default function LandingHome() {
  return (
    <>
      {/* Hero — Stitch landing */}
      <section className="relative mx-auto max-w-7xl overflow-hidden px-8 py-20 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="z-10">
            <span className="mb-6 inline-block rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_55%,transparent)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)]">
              Transparent pricing · No hidden fees
            </span>
            <h1
              className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-[var(--color-primary)] lg:text-7xl"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Effortless <br /> <span className="text-[var(--color-secondary)]">Consignment</span> <br /> Management
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-[var(--color-on-surface-muted)] lg:text-xl">
              Scale your resale business with an intelligent platform built for modern inventory, automated payouts, and{' '}
              <span className="font-semibold text-[var(--color-primary)]">Data Freedom</span> through easy CSV exports.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={routes.getStarted}
                className="rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-mid)] px-8 py-4 text-center text-lg font-bold text-white shadow-lg shadow-[var(--color-primary)]/10 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Start free trial
              </Link>
              <Link
                href={routes.platform}
                className="rounded-xl bg-[var(--color-surface)] px-8 py-4 text-center text-lg font-semibold text-[var(--color-on-surface)] shadow-sm ring-1 ring-[color-mix(in_srgb,var(--color-on-surface)_8%,transparent)] transition-all hover:bg-[var(--color-surface-low)] active:scale-95"
              >
                View platform tour
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-20 -top-20 -z-10 h-96 w-96 rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_30%,transparent)] blur-3xl" />
            <div className="absolute -bottom-20 -left-20 -z-10 h-96 w-96 rounded-full bg-[color-mix(in_srgb,var(--color-primary-mid)_10%,transparent)] blur-3xl" />
            <div className="glass-card rounded-3xl border border-[color-mix(in_srgb,var(--color-on-surface)_8%,transparent)] p-4 shadow-2xl shadow-[var(--color-primary)]/5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <StitchImage
                  src={stitchAssets.landing.dashboard}
                  alt={`${brand.name} dashboard`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="glass-card absolute -bottom-8 -right-8 hidden rounded-2xl p-6 shadow-xl md:block">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-secondary-soft)]">
                  <span className="material-symbols-outlined text-[var(--color-secondary)]">trending_up</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-[var(--color-on-surface-muted)]">Monthly growth</p>
                  <p className="text-xl font-bold text-[var(--color-primary)]">+24.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-[var(--color-surface)] px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 rounded-[2.5rem] border border-[color-mix(in_srgb,var(--color-on-surface)_8%,transparent)] bg-[var(--color-surface)] p-8 md:grid-cols-2 md:p-12">
            <div>
              <h2 className="mb-4 text-3xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                Switching is easy. Growing is faster.
              </h2>
              <p className="mb-6 text-[var(--color-on-surface-muted)]">
                Stop waiting for support tickets and struggling with complex workflows. {brand.name} is designed for speed.
              </p>
              <div className="space-y-4">
                {[
                  ['support_agent', 'Human support (no ticket queues)'],
                  ['speed', 'Simple UI for fast onboarding'],
                  ['download', 'Full data ownership (easy CSV export)'],
                ].map(([icon, label]) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[var(--color-secondary)]">{icon}</span>
                    <span className="font-semibold text-[var(--color-on-surface)]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] bg-[color-mix(in_srgb,var(--color-primary)_5%,transparent)] p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] pb-4">
                  <span className="font-medium text-[var(--color-on-surface-muted)]">Pricing</span>
                  <span className="font-bold text-[var(--color-primary)]">Transparent &amp; simple</span>
                </div>
                <div className="flex items-center justify-between border-b border-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] pb-4">
                  <span className="font-medium text-[var(--color-on-surface-muted)]">Hidden fees</span>
                  <span className="font-bold text-[var(--color-secondary)]">Zero</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-[var(--color-on-surface-muted)]">Contract term</span>
                  <span className="font-bold text-[var(--color-primary)]">Month-to-month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento */}
      <section className="bg-[var(--color-surface-low)] px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Designed for growth, built for trust
            </h2>
            <p className="text-lg text-[var(--color-on-surface-muted)]">
              We&apos;ve eliminated the friction of manual consignment, giving you more time to curate what matters with absolute
              data freedom.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-8 rounded-[2rem] border border-[color-mix(in_srgb,var(--color-on-surface)_5%,transparent)] bg-[var(--color-surface)] p-10 shadow-sm md:col-span-2 md:flex-row md:items-center">
              <div className="flex-1">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--color-primary-mid)_10%,transparent)]">
                  <span className="material-symbols-outlined text-3xl text-[var(--color-primary-mid)]">automation</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Intelligent automation
                </h3>
                <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
                  Automate payouts, contract generation, and inventory aging. Our system works while you focus on high-ticket
                  acquisitions.
                </p>
              </div>
              <div className="relative h-48 w-full flex-1 overflow-hidden rounded-2xl md:h-auto md:min-h-[12rem]">
                <StitchImage
                  src={stitchAssets.landing.automationWorkflow}
                  alt="Automation process"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-mid)] p-10 text-white">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <span className="material-symbols-outlined text-3xl text-[var(--color-secondary-soft)]">verified_user</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>
                Foundation of trust
              </h3>
              <p className="leading-relaxed text-white/80">
                Real-time consignor portals ensure complete transparency. Build lasting relationships through accurate, instant
                reporting and no hidden fees.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[color-mix(in_srgb,var(--color-on-surface)_5%,transparent)] bg-[var(--color-surface)] p-10 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--color-secondary-soft)_20%,transparent)]">
                <span className="material-symbols-outlined text-3xl text-[var(--color-secondary)]">rocket_launch</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                Built to scale
              </h3>
              <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
                From a single boutique to a multi-location enterprise, {brand.name} grows with your volume without missing a beat.
              </p>
            </div>
            <div className="grid gap-10 rounded-[2rem] border border-[color-mix(in_srgb,var(--color-on-surface)_5%,transparent)] bg-[var(--color-surface)] p-10 shadow-sm md:col-span-2 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Deep analytics
                </h3>
                <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
                  Predictive trends, sell-through rates, and consignor performance metrics at your fingertips. All exportable in one
                  click.
                </p>
              </div>
              <div className="flex min-h-[10rem] items-end justify-between gap-2 rounded-2xl bg-[var(--color-surface-low)] p-6">
                {[40, 65, 90, 55, 75].map((h, i) => (
                  <div
                    key={i}
                    className={`w-full rounded-t-lg ${i === 2 ? 'bg-[var(--color-secondary)]' : 'bg-[var(--color-primary)]'}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Peak efficiency + team image */}
      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid items-center gap-24 lg:grid-cols-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] shadow-2xl lg:order-1">
            <StitchImage
              src={stitchAssets.landing.teamCollaboration}
              alt={`Team using ${brand.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </div>
          <div className="lg:order-2">
            <h2 className="mb-8 text-4xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Everything you need <br /> to run at peak efficiency
            </h2>
            <ul className="space-y-8">
              {[
                ['bolt', 'Rapid SKU entry (30s vs 5 mins)', 'Slash intake time with our optimized workflow.'],
                ['sync', 'Real-time Shopify sync', 'Inventory levels and sales sync instantly across platforms.'],
                ['group', 'Self-service consignor portal', 'Consignors can track sales and request payouts on their own.'],
              ].map(([icon, title, body]) => (
                <li key={title} className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-primary)_5%,transparent)]">
                    <span className="material-symbols-outlined text-[var(--color-primary)]">{icon}</span>
                  </div>
                  <div>
                    <h4 className="mb-1 text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                      {title}
                    </h4>
                    <p className="text-[var(--color-on-surface-muted)]">{body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="overflow-hidden bg-[var(--color-surface-container)] px-8 py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row">
          <div className="lg:w-1/2">
            <span className="mb-6 inline-block rounded-full bg-[var(--color-primary)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
              Mobile first
            </span>
            <h2
              className="mb-6 text-4xl font-extrabold leading-tight text-[var(--color-primary)] lg:text-5xl"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              A true iPad &amp; tablet <br /> experience
            </h2>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--color-on-surface-muted)]">
              Don&apos;t settle for desktop software squeezed into a mobile screen. Our native app is designed specifically for
              tablets.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="relative h-12 w-[140px]">
                <StitchImage src={stitchAssets.landing.appStoreBadge} alt="Download on the App Store" fill className="object-contain object-left" sizes="140px" />
              </div>
              <div className="relative h-12 w-[160px]">
                <StitchImage src={stitchAssets.landing.googlePlayBadge} alt="Get it on Google Play" fill className="object-contain object-left" sizes="160px" />
              </div>
            </div>
          </div>
          <div className="relative lg:w-1/2">
            <div className="absolute -bottom-10 -left-10 -z-10 h-full w-full rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_20%,transparent)] blur-3xl" />
            <div className="relative z-10 rotate-2 rounded-[2.5rem] bg-black p-4 shadow-2xl">
              <div className="relative aspect-[9/16] w-full max-w-sm overflow-hidden rounded-[2rem] border-4 border-black">
                <StitchImage src={stitchAssets.landing.mobileUi} alt="Mobile app UI" fill className="object-cover" sizes="400px" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-mid)] p-12 text-center lg:p-24">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-[color-mix(in_srgb,var(--color-secondary-soft)_10%,transparent)] blur-3xl" />
          <div className="relative z-10">
            <h2
              className="mb-8 text-4xl font-extrabold text-white lg:text-6xl"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Ready to modernize your <br className="hidden md:block" /> consignment business?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-white/70 lg:text-xl">
              Join 500+ luxury resale brands using {brand.name} to power their daily operations with transparent pricing and full
              data freedom.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Link
                href={routes.getStarted}
                className="rounded-2xl bg-[var(--color-secondary-soft)] px-10 py-5 text-lg font-bold text-[var(--color-secondary)] shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Start free trial
              </Link>
              <Link
                href={routes.bookDemo}
                className="rounded-2xl border-2 border-white/30 bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                Book a demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

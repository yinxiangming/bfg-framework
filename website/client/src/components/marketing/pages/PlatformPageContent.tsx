import Link from 'next/link'
import { brand, routes } from '@/config/marketingSite'
import { stitchAssets } from '@/config/stitchAssets'
import StitchImage from '@/components/marketing/StitchImage'

export default function PlatformPageContent() {
  return (
    <div className="pb-24 pt-24">
      <section className="relative mx-auto max-w-7xl overflow-hidden px-8 py-20 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="z-10">
            <span className="mb-6 inline-block rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00714d]">
              The New Standard
            </span>
            <h1
              className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-[var(--color-primary)] lg:text-7xl"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Effortless <br /> <span className="text-[var(--color-secondary)]">Consignment</span> <br /> Management
            </h1>
            <p className="mb-10 max-w-lg text-lg leading-relaxed text-[var(--color-on-surface-muted)] lg:text-xl">
              Scale your resale business with an intelligent platform built for modern inventory, automated payouts, and seamless
              consignor relations.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={routes.getStarted}
                className="rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-mid)] px-8 py-4 text-center text-lg font-bold text-white shadow-lg shadow-[var(--color-primary)]/10 transition-all hover:-translate-y-0.5 active:scale-95"
              >
                Start Free Trial
              </Link>
              <Link
                href={routes.features}
                className="rounded-xl bg-[#d5e3fc] px-8 py-4 text-center text-lg font-semibold text-[var(--color-on-surface)] transition-all hover:bg-[#dce9ff] active:scale-95"
              >
                View Platform Tour
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-20 -top-20 -z-10 h-96 w-96 rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_30%,transparent)] blur-3xl" />
            <div className="absolute -bottom-20 -left-20 -z-10 h-96 w-96 rounded-full bg-[color-mix(in_srgb,var(--color-primary-mid)_10%,transparent)] blur-3xl" />
            <div className="glass-card rounded-3xl border border-[#bfc8cc]/10 p-4 shadow-2xl shadow-[var(--color-primary)]/5">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <StitchImage
                  src={stitchAssets.platform.dashboard}
                  alt={`${brand.name} Dashboard`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
            <div className="glass-card absolute -bottom-8 -right-8 hidden rounded-2xl p-6 shadow-xl md:block">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)]">
                  <span className="material-symbols-outlined text-[#00714d]">trending_up</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-[var(--color-on-surface-muted)]">Monthly Growth</p>
                  <p className="text-xl font-bold text-[var(--color-primary)]">+24.8%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Designed for Growth, Built for Trust
            </h2>
            <p className="text-lg text-[var(--color-on-surface-muted)]">
              We&apos;ve eliminated the friction of manual consignment, giving you more time to curate what matters.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-8 rounded-[2rem] border border-[#bfc8cc]/5 bg-white p-10 shadow-sm md:col-span-2 md:flex-row md:items-center">
              <div className="flex-1">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--color-primary-mid)_10%,transparent)]">
                  <span className="material-symbols-outlined text-3xl text-[var(--color-primary-mid)]">automation</span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Intelligent Automation
                </h3>
                <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
                  Automate payouts, contract generation, and inventory aging. Our system works while you focus on high-ticket
                  acquisitions.
                </p>
              </div>
              <div className="relative h-48 w-full flex-1 overflow-hidden rounded-2xl md:h-48">
                <StitchImage src={stitchAssets.platform.automation} alt="Automation" fill className="object-cover" sizes="400px" />
              </div>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-mid)] p-10 text-white">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
                <span className="material-symbols-outlined text-3xl text-[var(--color-secondary-soft)]">verified_user</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>
                Foundation of Trust
              </h3>
              <p className="leading-relaxed text-white/80">
                Real-time consignor portals ensure complete transparency. Build lasting relationships through accurate, instant
                reporting.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#bfc8cc]/5 bg-white p-10 shadow-sm">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[color-mix(in_srgb,var(--color-secondary-soft)_20%,transparent)]">
                <span className="material-symbols-outlined text-3xl text-[var(--color-secondary)]">rocket_launch</span>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                Built to Scale
              </h3>
              <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
                From a single boutique to a multi-location enterprise, {brand.name} grows with your volume without missing a beat.
              </p>
            </div>
            <div className="grid gap-10 rounded-[2rem] border border-[#bfc8cc]/5 bg-white p-10 shadow-sm md:col-span-2 md:grid-cols-2">
              <div className="flex flex-col justify-center">
                <h3 className="mb-4 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Deep Analytics
                </h3>
                <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
                  Predictive trends, sell-through rates, and consignor performance metrics at your fingertips.
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

      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="grid items-center gap-24 lg:grid-cols-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[3rem] shadow-2xl lg:order-1">
            <StitchImage src={stitchAssets.platform.team} alt="Team using software" fill className="object-cover" sizes="45vw" />
          </div>
          <div className="lg:order-2">
            <h2 className="mb-8 text-4xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Everything you need <br /> to run at peak efficiency
            </h2>
            <ul className="space-y-8">
              {[
                ['inventory_2', 'Advanced Inventory Tracking', 'Multi-status workflows from intake to authentication and sale.'],
                ['group', 'Self-Service Consignor Portal', 'Consignors can track sales, upload new items, and request payouts.'],
                ['payments', 'Automated Financials', 'Integrated tax calculations, flexible commission structures, and one-click payouts.'],
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

      <section className="px-8 py-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-mid)] p-12 text-center lg:p-24">
          <div className="absolute right-0 top-0 h-full w-1/3 bg-[color-mix(in_srgb,var(--color-secondary-soft)_10%,transparent)] blur-3xl" />
          <div className="relative z-10">
            <h2 className="mb-8 text-4xl font-extrabold text-white lg:text-6xl" style={{ fontFamily: 'var(--font-manrope)' }}>
              Ready to modernize your <br className="hidden md:block" /> consignment business?
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg text-white/70 lg:text-xl">
              Join 500+ luxury resale brands using {brand.name} to power their daily operations.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Link
                href={routes.getStarted}
                className="rounded-2xl bg-[var(--color-secondary-soft)] px-10 py-5 text-lg font-bold text-[#00714d] shadow-xl transition-all hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                href={routes.bookDemo}
                className="rounded-2xl border border-white/10 bg-white/10 px-10 py-5 text-lg font-bold text-white backdrop-blur-sm hover:bg-white/20"
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

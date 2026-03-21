import Link from 'next/link'
import { brand, routes } from '@/config/marketingSite'

/** Stitch Features screen — solution focused (no raster images; mock UI). */
export default function FeaturesPageContent() {
  return (
    <div className="pb-24 pt-24">
      <header className="mx-auto mb-24 max-w-7xl px-8">
        <div className="max-w-3xl">
          <h1
            className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-[var(--color-primary)] md:text-7xl"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            Precision tools for <br />
            <span className="text-[#00714d]">modern commerce.</span>
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-[var(--color-on-surface-muted)]">
            Experience the digital concierge of consignment management. We&apos;ve built an ecosystem where complexity dissolves
            into clarity, letting you focus on curation and growth.
          </p>
        </div>
      </header>

      <section className="mx-auto mb-32 max-w-7xl px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_35%,white)] px-4 py-1.5 text-sm font-semibold text-[#00714d]">
              <span className="material-symbols-outlined text-sm">speed</span>
              Module 01
            </div>
            <h2 className="mb-6 text-4xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Rapid Batch Intake
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-[var(--color-on-surface-muted)]">
              Slash your intake time by 90%. Move from 5 minutes of data entry to{' '}
              <strong>30 seconds per item</strong> with our streamlined batch workflow.
            </p>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#dce9ff] text-[var(--color-primary)]">
                  <span className="material-symbols-outlined">sync_saved_locally</span>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-on-surface)]">Real-time Omni-channel Sync</h4>
                  <p className="text-sm text-[var(--color-on-surface-muted)]">
                    Prevent overselling instantly. When an item sells in your physical store, it&apos;s removed from Shopify in
                    milliseconds.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#dce9ff] text-[var(--color-primary)]">
                  <span className="material-symbols-outlined">bolt</span>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-on-surface)]">30-Second Workflow</h4>
                  <p className="text-sm text-[var(--color-on-surface-muted)]">
                    Optimized UI designed for speed—scan, snap a photo, and list across all platforms in one go.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl bg-[var(--color-surface-low)] p-8 lg:p-12">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#005b71,transparent_70%)] opacity-10" />
              <div className="relative grid h-[400px] grid-cols-6 grid-rows-6 gap-4">
                <div className="glass-card col-span-4 row-span-4 flex flex-col justify-between rounded-2xl border border-white/20 p-6 shadow-xl">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]">
                      <span className="material-symbols-outlined text-[var(--color-primary)]">qr_code_2</span>
                    </div>
                    <span className="rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)] px-3 py-1 text-[10px] font-bold text-[#00714d]">
                      BATCH SYNC ACTIVE
                    </span>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[var(--color-on-surface-muted)]">SHOPIFY + IN-STORE</p>
                    <h3 className="mt-1 text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                      Stock Level Synchronized
                    </h3>
                    <div className="mt-4 flex gap-2">
                      <div className="h-2 flex-1 rounded-full bg-[var(--color-primary)]" />
                      <div className="h-2 flex-1 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]" />
                      <div className="h-2 flex-1 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]" />
                    </div>
                    <p className="mt-2 text-[10px] font-bold uppercase text-[var(--color-on-surface-muted)]">
                      Processing item 1 of 24 (0:12s)
                    </p>
                  </div>
                </div>
                <div className="col-span-2 row-span-3 rounded-2xl bg-[var(--color-primary)] p-6 text-white shadow-xl">
                  <span className="material-symbols-outlined mb-4 text-3xl">timer</span>
                  <p className="text-[10px] uppercase tracking-widest opacity-70">Intake Speed</p>
                  <p className="text-2xl font-bold">
                    28.4s <span className="text-xs font-normal opacity-60">/item</span>
                  </p>
                </div>
                <div className="col-span-2 row-span-3 rounded-2xl border border-[#bfc8cc]/10 bg-[#d5e3fc] p-6 shadow-sm">
                  <span className="material-symbols-outlined mb-2 text-[var(--color-primary)]">shopping_cart</span>
                  <p className="text-xs font-bold text-[var(--color-primary)]">Shopify Linked</p>
                  <p className="mt-1 text-[10px] text-[var(--color-on-surface-muted)]">Live Updates Enabled</p>
                </div>
                <div className="col-span-4 row-span-2 flex items-center gap-4 rounded-2xl border border-white/40 bg-white/40 p-6 backdrop-blur-sm">
                  <span className="material-symbols-outlined text-[var(--color-secondary)]">check_circle</span>
                  <p className="text-xs font-medium text-[var(--color-on-surface-muted)]">
                    Intake complete. 24 items synced to 3 sales channels.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32 overflow-hidden bg-[var(--color-surface-low)] py-24">
        <div className="mx-auto max-w-7xl px-8">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <div className="lg:w-1/2">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#764900] px-4 py-1.5 text-sm font-semibold text-[#ffb960]">
                <span className="material-symbols-outlined text-sm">tablet_mac</span>
                Module 02
              </div>
              <h2 className="mb-6 text-4xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                Full Mobile Management
              </h2>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-[var(--color-on-surface-muted)]">
                Untether from the desk. {brand.name} offers full functionality on iPad and mobile tablets, allowing you to manage your
                entire operation from the floor.
              </p>
              <div className="mb-12">
                <h4 className="mb-4 flex items-center gap-2 font-bold text-[var(--color-primary)]">
                  <span className="material-symbols-outlined text-[#563400]">no_phone</span>
                  No More &quot;Phone Tag&quot;
                </h4>
                <p className="text-sm text-[var(--color-on-surface-muted)]">
                  Give consignors 24/7 access to their sales history and payouts via the portal. They see what you see, reducing
                  administrative overhead and building trust.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="rounded-2xl border border-[#bfc8cc]/10 bg-white p-6 shadow-sm">
                  <span className="material-symbols-outlined mb-4 text-[#563400]">gate</span>
                  <h4 className="mb-2 font-bold text-[var(--color-on-surface)]">Self-Service Portals</h4>
                  <p className="text-sm text-[var(--color-on-surface-muted)]">Real-time balances and item status for every partner.</p>
                </div>
                <div className="rounded-2xl border border-[#bfc8cc]/10 bg-white p-6 shadow-sm">
                  <span className="material-symbols-outlined mb-4 text-[var(--color-secondary)]">payments</span>
                  <h4 className="mb-2 font-bold text-[var(--color-on-surface)]">Auto-Payouts</h4>
                  <p className="text-sm text-[var(--color-on-surface-muted)]">
                    Instant payouts with a single click across your whole database.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <div className="ipad-frame">
                <div className="flex h-[400px] flex-col overflow-hidden rounded-2xl bg-white shadow-inner">
                  <div className="flex items-center justify-between bg-[var(--color-primary)] p-4 text-white">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xl">menu</span>
                      <span className="text-sm font-bold">CONSIGNLY MOBILE</span>
                    </div>
                    <div className="flex gap-4">
                      <span className="material-symbols-outlined text-xl">search</span>
                      <span className="material-symbols-outlined text-xl">notifications</span>
                    </div>
                  </div>
                  <div className="flex-1 space-y-4 bg-[#f8f9ff] p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-bold">Inventory Dashboard</h3>
                      <button type="button" className="rounded-lg bg-[var(--color-secondary)] px-3 py-1 text-xs font-bold text-white">
                        + New Intake
                      </button>
                    </div>
                    {[
                      ['Designer Tote Bag', 'J. Smith', '$299.00'],
                      ['Silk Scarf (Limited)', 'A. Doe', '$85.00'],
                    ].map(([title, consignor, price]) => (
                      <div
                        key={title}
                        className="flex items-center gap-4 rounded-xl border border-[#bfc8cc]/10 bg-white p-4 shadow-sm"
                      >
                        <div className="h-12 w-12 rounded-lg bg-[#e6eeff]" />
                        <div className="flex-1">
                          <p className="text-xs font-bold">{title}</p>
                          <p className="text-[10px] text-[var(--color-on-surface-muted)]">Consignor: {consignor}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-bold text-[var(--color-primary)]">{price}</p>
                          <p className="text-[10px] text-[var(--color-secondary)]">ACTIVE</p>
                        </div>
                      </div>
                    ))}
                    <div className="rounded-xl bg-[color-mix(in_srgb,var(--color-primary-mid)_20%,transparent)] p-4">
                      <p className="mb-1 text-xs font-bold text-[var(--color-primary-mid)]">Today&apos;s Sales</p>
                      <p className="text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                        $2,410.50
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-24 max-w-7xl px-8">
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-mid)] px-4 py-1.5 text-sm font-semibold text-white">
            <span className="material-symbols-outlined text-sm">analytics</span>
            Module 03
          </div>
          <h2 className="mb-6 text-4xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            Advanced Pro-Level Reporting
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[var(--color-on-surface-muted)]">
            Leave legacy software behind. Get clean, powerful day-end summaries and beautiful consignor statements that actually
            make sense for your business.
          </p>
        </div>
        <div className="grid h-auto grid-cols-1 gap-6 md:h-[600px] md:grid-cols-3">
          <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#dce9ff] p-8 md:col-span-2 md:row-span-2">
            <div className="relative z-10">
              <h4 className="mb-2 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                Day-End Summaries
              </h4>
              <p className="max-w-xs text-[var(--color-on-surface-muted)]">
                Total clarity on every dollar in and out. Reconcile in minutes, not hours.
              </p>
            </div>
            <div className="mt-8 flex h-40 items-end gap-2">
              {[40, 65, 50, 90, 75, 60, 100].map((h, i) => (
                <div
                  key={i}
                  className={`w-full rounded-t-lg ${i === 6 ? 'bg-[var(--color-secondary-soft)]' : i % 2 === 0 ? 'bg-[var(--color-primary)]' : 'bg-[var(--color-primary-mid)]'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center rounded-3xl border border-[#bfc8cc]/20 bg-[var(--color-surface-low)] p-8 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[var(--color-primary)] shadow-sm">
              <span className="material-symbols-outlined text-3xl">description</span>
            </div>
            <h4 className="mb-1 text-lg font-bold">Modern Statements</h4>
            <p className="text-sm text-[var(--color-on-surface-muted)]">
              Beautiful, brandable PDFs your consignors will actually love reading.
            </p>
          </div>
          <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-[var(--color-primary)] p-8">
            <div className="absolute right-0 top-0 p-4 opacity-20">
              <span className="material-symbols-outlined text-6xl text-white">auto_awesome</span>
            </div>
            <h4 className="mb-1 text-lg font-bold text-white">Outperform Legacy</h4>
            <p className="text-sm text-white/70">
              Engineered to replace clunky, outdated software with high-speed, modern intelligence.
            </p>
            <Link href={routes.pricing} className="mt-6 self-start border-b border-white/40 pb-1 text-xs font-bold text-white">
              See Comparison
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] p-12 text-center text-white gradient-primary md:p-24">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
          <h2 className="relative z-10 mb-8 text-4xl font-extrabold md:text-5xl" style={{ fontFamily: 'var(--font-manrope)' }}>
            Ready to redefine your <br />
            consignment experience?
          </h2>
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={routes.getStarted}
              className="rounded-xl bg-[var(--color-secondary-soft)] px-10 py-4 text-lg font-bold text-[#00714d] shadow-xl transition-transform active:scale-95"
            >
              Get Started for Free
            </Link>
            <Link
              href={routes.bookDemo}
              className="rounded-xl bg-white/10 px-10 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

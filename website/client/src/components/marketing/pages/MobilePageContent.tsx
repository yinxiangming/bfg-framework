import Link from 'next/link'
import { brand, routes } from '@/config/marketingSite'
import { stitchAssets } from '@/config/stitchAssets'
import StitchImage from '@/components/marketing/StitchImage'

export default function MobilePageContent() {
  return (
    <div className="pb-24 pt-24">
      <section className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 overflow-hidden px-6 py-16 md:py-24 lg:flex-row">
        <div className="z-10 flex-1 space-y-8">
          <div className="inline-flex items-center rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_35%,white)] px-4 py-2 text-sm font-semibold text-[#005236]">
            <span className="material-symbols-outlined mr-2 text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              stars
            </span>
            Now available for iOS &amp; Android
          </div>
          <h1
            className="text-5xl font-extrabold leading-[1.1] tracking-tight text-[var(--color-on-surface)] md:text-7xl"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            Your Inventory,
            <br />
            <span className="text-[var(--color-primary)]">Unbound.</span>
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-[#70787d] md:text-xl">
            The precision of {brand.name}&apos;s enterprise engine, now optimized for the palm of your hand. Scan, track, and approve
            payouts with zero friction.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="relative h-14 w-[160px]">
              <StitchImage src={stitchAssets.landing.appStoreBadge} alt="App Store" fill className="object-contain object-left" sizes="160px" />
            </div>
            <div className="relative h-14 w-[180px]">
              <StitchImage src={stitchAssets.landing.googlePlayBadge} alt="Google Play" fill className="object-contain object-left" sizes="180px" />
            </div>
          </div>
        </div>
        <div className="relative flex w-full max-w-md flex-1">
          <div className="relative z-10 mx-auto h-[580px] w-72 rounded-[3rem] bg-[var(--color-on-surface)] p-3 shadow-2xl ring-8 ring-[color-mix(in_srgb,var(--color-on-surface)_5%,transparent)]">
            <div className="flex h-full flex-col overflow-hidden rounded-[2.2rem] bg-[#e6eeff]">
              <div className="flex h-8 items-center justify-between px-6 pt-2">
                <span className="text-[10px] font-bold text-[var(--color-on-surface)]">9:41</span>
                <div className="flex items-center gap-1">
                  <span className="material-symbols-outlined text-xs">signal_cellular_4_bar</span>
                  <span className="material-symbols-outlined text-xs">wifi</span>
                  <span className="material-symbols-outlined text-xs">battery_full</span>
                </div>
              </div>
              <div className="flex-1 space-y-4 p-4">
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>
                    {brand.name} Mobile
                  </span>
                  <span className="material-symbols-outlined text-[var(--color-primary)]">account_circle</span>
                </div>
                <div className="rounded-xl border border-[#bfc8cc]/10 bg-white p-3 shadow-sm">
                  <div className="mb-2 flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)]">
                      <span className="material-symbols-outlined text-sm text-[#00714d]">payments</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-wider opacity-50">New Sale</p>
                      <p className="text-xs font-bold text-[var(--color-on-surface)]">Luxury Watch #842</p>
                    </div>
                    <span className="ml-auto text-xs font-bold text-[var(--color-secondary)]">+$1,240</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[var(--color-primary-mid)] p-3 text-[#8ed1ea]">
                    <p className="text-[10px] font-medium opacity-80">Pending Payouts</p>
                    <p className="text-lg font-bold">$12,490</p>
                  </div>
                  <div className="rounded-xl bg-[#dce9ff] p-3">
                    <p className="text-[10px] font-medium opacity-80">Items Scanned</p>
                    <p className="text-lg font-bold">428</p>
                  </div>
                </div>
                <div className="relative mt-2 h-48 overflow-hidden rounded-2xl bg-black">
                  <StitchImage src={stitchAssets.mobile.scanWatch} alt="" fill className="object-cover opacity-60" sizes="280px" />
                  <div className="absolute inset-0 m-8 flex items-center justify-center rounded-lg border-2 border-[color-mix(in_srgb,var(--color-primary)_40%,transparent)]">
                    <div className="absolute top-1/2 h-0.5 w-full bg-[color-mix(in_srgb,var(--color-primary)_60%,transparent)]" />
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-lg bg-white/20 p-2 backdrop-blur-md">
                    <span className="material-symbols-outlined text-sm text-white">barcode_scanner</span>
                    <span className="text-[10px] font-medium text-white">Scanning for barcode...</span>
                  </div>
                </div>
                <div className="flex items-center justify-around rounded-full bg-[color-mix(in_srgb,#d5e3fc_50%,white)] p-2 backdrop-blur">
                  <span className="material-symbols-outlined text-xl text-[var(--color-primary)]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    dashboard
                  </span>
                  <span className="material-symbols-outlined text-xl text-[#70787d]">inventory_2</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                    <span className="material-symbols-outlined text-lg">add</span>
                  </div>
                  <span className="material-symbols-outlined text-xl text-[#70787d]">payments</span>
                  <span className="material-symbols-outlined text-xl text-[#70787d]">settings</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -right-12 -top-12 -z-10 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] blur-3xl" />
          <div className="absolute -bottom-12 -left-12 -z-10 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--color-secondary)_10%,transparent)] blur-3xl" />
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-[var(--color-on-surface)] md:text-4xl" style={{ fontFamily: 'var(--font-manrope)' }}>
              Designed for High-Volume Merchants
            </h2>
            <p className="max-w-2xl text-[#70787d]">
              Stop tethering your business to a desk. {brand.name} Mobile brings full-spectrum management to your pocket.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <div className="flex flex-col items-center gap-8 rounded-2xl border border-[#bfc8cc]/5 bg-white p-8 md:col-span-8 md:flex-row">
              <div className="flex-1 space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-primary-mid)_20%,transparent)] text-[var(--color-primary)]">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    barcode_scanner
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-on-surface)]">Mobile Inventory Scanning</h3>
                <p className="leading-relaxed text-[#70787d]">
                  Instantly intake high-value items by scanning barcodes or serial numbers. Automatic database matching reduces entry
                  time by 80%.
                </p>
              </div>
              <div className="relative h-48 w-full flex-1 overflow-hidden rounded-xl bg-[var(--color-surface-low)]">
                <StitchImage src={stitchAssets.mobile.warehouse} alt="" fill className="object-cover grayscale opacity-40" sizes="400px" />
                <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-2xl bg-[var(--color-primary)] p-8 text-white md:col-span-4">
              <span className="material-symbols-outlined mb-8 text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                notifications_active
              </span>
              <div>
                <h3 className="mb-3 text-2xl font-bold">Real-time Sales Alerts</h3>
                <p className="text-sm leading-relaxed text-white/70">
                  Get notified the second an item sells across any of your storefronts. Never miss a high-ticket transaction again.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-[#bfc8cc]/5 bg-[#d5e3fc] p-8 md:col-span-5">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)] text-[#00714d]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  verified_user
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-[var(--color-on-surface)]">On-the-go Payout Approvals</h3>
              <p className="mb-6 text-[#70787d]">Review, verify, and release consignor payouts with a single swipe.</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg bg-white/40 p-3">
                  <span className="text-xs font-bold text-[var(--color-on-surface)]">Payout #9204</span>
                  <span className="rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_50%,white)] px-2 py-0.5 text-[10px] font-bold text-[#005236]">
                    Ready
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-lg bg-white/40 p-3 opacity-50">
                  <span className="text-xs font-bold text-[var(--color-on-surface)]">Payout #9203</span>
                  <span className="rounded-full bg-[#bfc8cc] px-2 py-0.5 text-[10px] text-[var(--color-on-surface-muted)]">Approved</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center rounded-2xl border border-[#bfc8cc]/10 bg-white p-8 md:col-span-7">
              <div className="flex items-center gap-6">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold text-[var(--color-on-surface)]">Seamless Ecosystem</h3>
                  <p className="text-[#70787d]">
                    {brand.name} Mobile syncs instantly with your desktop dashboard. No manual uploads, no data fragmentation.
                  </p>
                </div>
                <span className="material-symbols-outlined hidden text-[80px] text-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] sm:block">
                  sync
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 text-center">
        <div className="hero-gradient relative space-y-8 overflow-hidden rounded-[2rem] p-12 text-white md:p-24">
          <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
          <h2 className="relative z-10 text-4xl font-bold tracking-tight md:text-6xl" style={{ fontFamily: 'var(--font-manrope)' }}>
            Ready to scale mobile?
          </h2>
          <p className="relative z-10 mx-auto max-w-2xl text-lg text-white/80 md:text-xl">
            Join over 2,500+ merchants who have streamlined their consignment operations with {brand.name} Mobile.
          </p>
          <div className="relative z-10 flex flex-wrap justify-center gap-6">
            <Link href={routes.getStarted} className="rounded-xl bg-white px-10 py-4 font-bold text-[var(--color-primary)] shadow-xl transition-all active:scale-95">
              Download Now
            </Link>
            <Link
              href={routes.pricing}
              className="rounded-xl border border-white/20 bg-white/10 px-10 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 active:scale-95"
            >
              View Enterprise Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

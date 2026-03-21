import Link from 'next/link'
import { brand, routes } from '@/config/marketingSite'
import { stitchAssets } from '@/config/stitchAssets'
import StitchImage from '@/components/marketing/StitchImage'

export default function CaseStudiesPageContent() {
  return (
    <div className="pb-24 pt-24">
      <header className="mx-auto mb-24 max-w-7xl px-8">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#00714d]">
            Success Stories
          </span>
          <h1
            className="mb-8 text-6xl font-extrabold leading-tight tracking-tighter text-[var(--color-primary)]"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            Elevating the world&apos;s most <span className="text-[#00714d]">exclusive</span> inventories.
          </h1>
          <p className="text-xl leading-relaxed text-[var(--color-on-surface-muted)]">
            Discover how premium retailers transition from operational complexity to effortless authority with {brand.name}&apos;s digital
            concierge.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-7xl space-y-24 px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="relative min-h-[400px] overflow-hidden rounded-[2rem] lg:col-span-7">
            <StitchImage src={stitchAssets.caseStudies.vintageBoutique} alt="Vintage boutique" fill className="object-cover" sizes="60vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--color-primary)_60%,black)] to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <div className="mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  stars
                </span>
                <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>
                  The Vintage Attic
                </span>
              </div>
              <p className="max-w-sm text-white/80">Luxury Apparel &amp; Accessories Boutique</p>
            </div>
          </div>
          <div className="flex flex-col justify-center rounded-[2rem] bg-[var(--color-surface-low)] p-12 lg:col-span-5">
            <div className="mb-8">
              <span className="mb-2 block text-5xl font-extrabold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                30%
              </span>
              <span className="font-medium tracking-wide text-[var(--color-on-surface-muted)]">Revenue Growth in 6 Months</span>
            </div>
            <blockquote className="relative mb-10">
              <span className="material-symbols-outlined absolute -left-6 -top-4 text-6xl text-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]" style={{ fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>
              <p className="text-xl font-medium italic leading-relaxed text-[var(--color-on-surface)]">
                &quot;{brand.name} didn&apos;t just organize our inventory; it changed our brand&apos;s perception. Our clients now receive a
                white-glove digital experience that matches our physical boutique.&quot;
              </p>
            </blockquote>
            <span className="flex items-center gap-3 font-bold text-[var(--color-primary)]">
              Read More <span className="material-symbols-outlined">arrow_forward</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="order-2 flex flex-col justify-center rounded-[2rem] bg-[var(--color-primary)] p-12 text-white lg:order-1 lg:col-span-5">
            <div className="mb-8">
              <span className="mb-2 block text-5xl font-extrabold text-[var(--color-secondary-soft)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                12h
              </span>
              <span className="font-medium tracking-wide text-white/70">Saved on Weekly Reporting</span>
            </div>
            <blockquote className="relative mb-10">
              <span className="material-symbols-outlined absolute -left-6 -top-4 text-6xl text-white/10" style={{ fontVariationSettings: "'FILL' 1" }}>
                format_quote
              </span>
              <p className="text-xl font-medium italic leading-relaxed">
                &quot;The reporting automation is a game-changer. We finally have real-time visibility into our margins without the
                spreadsheet nightmare.&quot;
              </p>
            </blockquote>
            <span className="flex items-center gap-3 font-bold text-[var(--color-secondary-soft)]">
              Read More <span className="material-symbols-outlined">arrow_forward</span>
            </span>
          </div>
          <div className="relative order-1 min-h-[400px] overflow-hidden rounded-[2rem] lg:order-2 lg:col-span-7">
            <StitchImage src={stitchAssets.caseStudies.furnitureShowroom} alt="Furniture showroom" fill className="object-cover" sizes="60vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <div className="mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  bolt
                </span>
                <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Modern Resale
                </span>
              </div>
              <p className="max-w-sm text-white/80">Curated Designer Furniture</p>
            </div>
          </div>
        </div>

        <div className="rounded-[3rem] bg-[#d5e3fc] p-16 text-center">
          <h3 className="mb-6 text-3xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            Ready to write your success story?
          </h3>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-[var(--color-on-surface-muted)]">
            Join hundreds of premium consignment businesses that have automated their operations and scaled their revenue with
            {brand.name}.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href={routes.getStarted} className="rounded-xl px-10 py-4 text-lg font-bold text-white btn-primary-gradient shadow-lg">
              Start Free Trial
            </Link>
            <Link
              href={routes.bookDemo}
              className="rounded-xl bg-white px-10 py-4 text-lg font-bold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface-low)]"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

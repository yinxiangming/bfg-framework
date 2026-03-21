import Link from 'next/link'
import PlaceholderForm from '@/components/marketing/PlaceholderForm'
import StitchImage from '@/components/marketing/StitchImage'
import { brandEmail, routes } from '@/config/marketingSite'
import { stitchAssets } from '@/config/stitchAssets'

export default function ContactPageContent() {
  return (
    <div className="mx-auto max-w-7xl px-8 pb-24 pt-24">
      <header className="mx-auto mb-20 max-w-3xl text-center">
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-[var(--color-primary)] md:text-6xl" style={{ fontFamily: 'var(--font-manrope)' }}>
          Let&apos;s start a <span className="text-[var(--color-secondary)]">conversation</span>.
        </h1>
        <p className="text-lg leading-relaxed text-[var(--color-on-surface-muted)] md:text-xl">
          Whether you&apos;re scaling a boutique or managing a global inventory, our concierge team is here to help you master your
          consignment workflow.
        </p>
      </header>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <div className="rounded-xl border border-[#bfc8cc]/10 bg-white p-8 shadow-[0px_12px_32px_rgba(13,28,46,0.04)] md:p-12 lg:col-span-7">
          <h2 className="mb-8 text-2xl font-bold text-[var(--color-on-surface)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            Send an Inquiry
          </h2>
          <PlaceholderForm className="space-y-6" action="#">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="ml-1 block text-sm font-semibold text-[var(--color-on-surface-muted)]">Full Name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full rounded-lg border-none bg-[var(--color-surface-low)] p-4 text-[var(--color-on-surface)] transition-all placeholder:text-[#bfc8cc] focus:bg-white focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
                />
              </div>
              <div className="space-y-2">
                <label className="ml-1 block text-sm font-semibold text-[var(--color-on-surface-muted)]">Company</label>
                <input
                  type="text"
                  placeholder="Boutique Co."
                  className="w-full rounded-lg border-none bg-[var(--color-surface-low)] p-4 text-[var(--color-on-surface)] transition-all placeholder:text-[#bfc8cc] focus:bg-white focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="ml-1 block text-sm font-semibold text-[var(--color-on-surface-muted)]">Work Email</label>
              <input
                type="email"
                placeholder="jane@company.com"
                className="w-full rounded-lg border-none bg-[var(--color-surface-low)] p-4 text-[var(--color-on-surface)] transition-all placeholder:text-[#bfc8cc] focus:bg-white focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
              />
            </div>
            <div className="space-y-2">
              <label className="ml-1 block text-sm font-semibold text-[var(--color-on-surface-muted)]">How can we help?</label>
              <textarea
                rows={5}
                placeholder="Tell us about your inventory needs..."
                className="w-full resize-none rounded-lg border-none bg-[var(--color-surface-low)] p-4 text-[var(--color-on-surface)] transition-all placeholder:text-[#bfc8cc] focus:bg-white focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
              />
            </div>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl px-10 py-4 font-bold text-white shadow-lg transition-all hover:shadow-[var(--color-primary)]/20 active:scale-95 md:w-auto btn-primary-gradient"
            >
              Send Message
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </PlaceholderForm>
        </div>

        <div className="space-y-8 lg:col-span-5">
          <div className="space-y-8 rounded-xl bg-[var(--color-surface-low)] p-8">
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#d5e3fc]">
                <span className="material-symbols-outlined text-[var(--color-primary)]">mail</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-on-surface)]">Support Email</h3>
                <p className="mb-2 text-[var(--color-on-surface-muted)]">Technical and billing inquiries</p>
                <a href={`mailto:${brandEmail('support')}`} className="font-semibold text-[var(--color-primary)] hover:underline">
                  {brandEmail('support')}
                </a>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#d5e3fc]">
                <span className="material-symbols-outlined text-[var(--color-primary)]">location_on</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-on-surface)]">Office Address</h3>
                <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
                  450 Tech Plaza, Suite 200
                  <br />
                  San Francisco, CA 94105
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#d5e3fc]">
                <span className="material-symbols-outlined text-[var(--color-primary)]">schedule</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-on-surface)]">Business Hours</h3>
                <p className="text-[var(--color-on-surface-muted)]">Mon — Fri: 9am — 6pm PST</p>
              </div>
            </div>
          </div>

          <div className="group relative h-64 overflow-hidden rounded-xl">
            <StitchImage src={stitchAssets.contact.officeMap} alt="Office" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="500px" />
            <div className="absolute inset-0 flex items-center justify-center bg-[color-mix(in_srgb,var(--color-primary)_20%,transparent)] backdrop-blur-[2px]">
              <div className="glass-card flex items-center gap-3 rounded-full px-6 py-4">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#6ffbbe]" />
                <span className="text-sm font-bold tracking-wide text-[var(--color-primary)]">Live Support Available</span>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-[var(--color-on-surface-muted)]">
            Prefer a call? <Link href={routes.bookDemo} className="font-semibold text-[var(--color-primary-mid)] hover:underline">Book a demo</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

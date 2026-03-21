import Link from 'next/link'
import { brand, routes } from '@/config/marketingSite'
import { stitchAssets } from '@/config/stitchAssets'
import StitchImage from '@/components/marketing/StitchImage'

const benefits = [
  {
    icon: 'person_search',
    title: 'Personalized Strategy',
    body: 'We tailor the walkthrough to your specific business model and current operational pain points.',
  },
  {
    icon: 'query_stats',
    title: 'Data Integration Audit',
    body: `Our experts analyze how your existing inventory data will flow seamlessly into ${brand.name}.`,
  },
  {
    icon: 'psychology',
    title: 'Expert Advice',
    body: 'Direct access to our product architects to answer your technical and architectural questions.',
  },
]

const calendarDays = ['28', '29', '30', '1', '2', '3', '4', '7', '8', '9', '10', '11', '12', '13']

export default function BookDemoPageContent() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-24 pt-24">
      <div className="grid items-start gap-16 lg:grid-cols-12">
        <div className="space-y-12 lg:col-span-5">
          <header className="space-y-6">
            <span className="inline-block rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-[#005236]">
              Personalized Walkthrough
            </span>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] lg:text-6xl" style={{ fontFamily: 'var(--font-manrope)' }}>
              Experience the <br />
              Future of Consignment.
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-[var(--color-on-surface-muted)]">
              See how {brand.name} streamlines your operations, scales your inventory, and maximizes your margins through a bespoke
              platform tour.
            </p>
          </header>
          <div className="space-y-8">
            <h2 className="text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              What to expect in the demo
            </h2>
            <div className="space-y-6">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-6 group">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-surface-low)] text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary-mid)] group-hover:text-white">
                    <span className="material-symbols-outlined">{b.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--color-on-surface)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                      {b.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-on-surface-muted)]">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border-l-4 border-[var(--color-primary)] bg-[var(--color-surface-low)] p-8">
            <div className="mb-4 flex items-center gap-4">
              <StitchImage src={stitchAssets.bookDemo.avatar} alt="Sarah Johnson" width={48} height={48} className="rounded-full object-cover" />
              <div>
                <p className="font-bold text-[var(--color-primary)]">Sarah Johnson</p>
                <p className="text-xs uppercase tracking-wider text-[var(--color-on-surface-muted)]">Solutions Architect</p>
              </div>
            </div>
            <p className="text-sm italic leading-relaxed text-[var(--color-on-surface-muted)]">
              &quot;My goal isn&apos;t just to show you the software, but to help you build a more resilient consignment ecosystem.&quot;
            </p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="glass-card rounded-3xl p-1 shadow-2xl shadow-[var(--color-primary)]/5">
            <div className="overflow-hidden rounded-[1.25rem] bg-white">
              <div className="flex flex-col justify-between gap-4 border-b border-[#e6eeff] p-8 sm:flex-row sm:items-center">
                <div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[var(--color-on-surface-muted)]">Schedule a session</p>
                  <h3 className="text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                    Product Discovery Call
                  </h3>
                </div>
                <div className="flex items-center gap-2 font-medium text-[var(--color-on-surface-muted)]">
                  <span className="material-symbols-outlined text-xl">schedule</span>
                  <span>45 min</span>
                </div>
              </div>
              <div className="grid md:grid-cols-7">
                <div className="border-[#e6eeff] p-8 md:col-span-4 md:border-r">
                  <div className="mb-8 flex items-center justify-between">
                    <h4 className="font-bold text-[var(--color-on-surface)]">October 2024</h4>
                    <div className="flex gap-2">
                      <button type="button" className="rounded-lg p-2 transition-colors hover:bg-[var(--color-surface-low)]">
                        <span className="material-symbols-outlined text-sm">chevron_left</span>
                      </button>
                      <button type="button" className="rounded-lg p-2 transition-colors hover:bg-[var(--color-surface-low)]">
                        <span className="material-symbols-outlined text-sm">chevron_right</span>
                      </button>
                    </div>
                  </div>
                  <div className="mb-4 grid grid-cols-7 gap-2 text-center text-xs font-bold text-[var(--color-on-surface-muted)]">
                    {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {calendarDays.map((d, i) => (
                      <div
                        key={`${d}-${i}`}
                        className={`cursor-pointer rounded-full p-3 text-center text-sm ${
                          d === '9'
                            ? 'bg-[var(--color-primary)] font-bold text-white'
                            : ['28', '29', '30', '3', '4', '12', '13'].includes(d)
                              ? 'text-[#bfc8cc]'
                              : 'font-bold text-[var(--color-primary)] hover:bg-[color-mix(in_srgb,var(--color-primary)_5%,transparent)]'
                        }`}
                      >
                        {d}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="space-y-4 p-8 md:col-span-3">
                  <p className="text-sm font-bold text-[var(--color-on-surface-muted)]">Available slots — Wed, Oct 9</p>
                  {['9:00 AM', '10:30 AM', '1:00 PM', '3:30 PM'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      className="w-full rounded-xl border border-[#e6eeff] py-3 text-sm font-semibold text-[var(--color-primary)] transition-colors hover:border-[var(--color-primary)]"
                    >
                      {t}
                    </button>
                  ))}
                  <Link
                    href={routes.contact}
                    className="block w-full rounded-xl bg-[var(--color-primary)] py-4 text-center font-bold text-white shadow-lg"
                  >
                    Confirm selection
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-[var(--color-on-surface-muted)]">
            Need a custom time? <Link href={routes.contact} className="font-semibold text-[var(--color-primary-mid)] hover:underline">Email us</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

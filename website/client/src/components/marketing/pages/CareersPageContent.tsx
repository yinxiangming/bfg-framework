import Link from 'next/link'
import { routes } from '@/config/marketingSite'
import { stitchAssets } from '@/config/stitchAssets'
import StitchImage from '@/components/marketing/StitchImage'

const roles = [
  { title: 'Senior Full Stack Engineer', loc: 'Remote (US)', type: 'Engineering' },
  { title: 'Product Designer', loc: 'San Francisco / Remote', type: 'Product' },
  { title: 'Customer Success Lead', loc: 'Remote', type: 'Operations' },
]

export default function CareersPageContent() {
  return (
    <div className="pb-24 pt-20">
      <section className="relative mx-auto max-w-7xl overflow-hidden px-8 py-24 md:py-32">
        <div className="flex flex-col items-center gap-16 md:flex-row">
          <div className="z-10 w-full md:w-1/2">
            <span className="mb-6 inline-block rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#00714d]">
              Work With Us
            </span>
            <h1 className="mb-8 text-5xl font-extrabold leading-tight text-[var(--color-on-surface)] md:text-7xl" style={{ fontFamily: 'var(--font-manrope)' }}>
              Join the <span className="italic text-[var(--color-primary)]">Digital Concierge</span> team.
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--color-on-surface-muted)] md:text-xl">
              We are redefining the global consignment economy. Help us build the authoritative platform that powers high-end
              secondary markets with effortless precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#roles" className="flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-8 py-4 font-bold text-white transition-all hover:opacity-90">
                View Open Positions
                <span className="material-symbols-outlined text-sm">arrow_downward</span>
              </a>
              <Link href={routes.about} className="rounded-xl bg-[var(--color-surface-low)] px-8 py-4 font-bold text-[var(--color-primary)] transition-all hover:bg-[#dce9ff]">
                Our Mission
              </Link>
            </div>
          </div>
          <div className="relative w-full md:w-1/2">
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl">
              <StitchImage src={stitchAssets.careers.hero} alt="Team collaborating" fill className="object-cover" sizes="50vw" />
              <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_50%,white)] opacity-70 mix-blend-multiply blur-2xl" />
            <div className="absolute -right-6 -top-6 h-48 w-48 rounded-full bg-[color-mix(in_srgb,var(--color-primary-mid)_20%,transparent)] opacity-20 mix-blend-multiply blur-3xl" />
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface-low)] px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="mb-4 text-3xl font-bold text-[var(--color-on-surface)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Our Culture: Built on Trust
            </h2>
            <p className="max-w-2xl text-[var(--color-on-surface-muted)]">
              We prioritize outcome over output, autonomy over micromanagement, and clarity over complexity.
            </p>
          </div>
          <div className="grid auto-rows-[280px] grid-cols-1 gap-6 md:grid-cols-12">
            <div className="relative flex flex-col justify-end overflow-hidden rounded-xl bg-white p-8 md:col-span-8">
              <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
                <span className="material-symbols-outlined text-[200px] text-[var(--color-primary)]">diversity_3</span>
              </div>
              <h3 className="z-10 mb-2 text-2xl font-bold text-[var(--color-on-surface)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                Radical Transparency
              </h3>
              <p className="z-10 max-w-md text-[var(--color-on-surface-muted)]">
                Every decision, metric, and roadmap is shared with the entire company. We win as one unified concierge team.
              </p>
            </div>
            <div className="flex flex-col justify-between rounded-xl bg-[var(--color-primary)] p-8 text-white md:col-span-4">
              <span className="material-symbols-outlined text-4xl">rocket_launch</span>
              <div>
                <h3 className="mb-2 text-xl font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>
                  High Velocity
                </h3>
                <p className="text-sm leading-relaxed text-[#8ed1ea]">We ship daily, learn fast, and never settle for &apos;good enough&apos;.</p>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-xl bg-[color-mix(in_srgb,var(--color-secondary-soft)_35%,white)] p-8 md:col-span-4">
              <span className="material-symbols-outlined text-4xl text-[#00714d]">psychology</span>
              <div>
                <h3 className="mb-2 text-xl font-bold text-[#00714d]" style={{ fontFamily: 'var(--font-manrope)' }}>
                  Intellectual Curiosity
                </h3>
                <p className="text-sm leading-relaxed text-[#00714d]/80">We are a team of lifelong learners and problem solvers.</p>
              </div>
            </div>
            <div className="group relative flex h-full min-h-[280px] flex-col justify-end overflow-hidden rounded-xl bg-white p-8 md:col-span-8">
              <StitchImage
                src={stitchAssets.careers.meeting}
                alt=""
                fill
                className="object-cover opacity-20 transition-transform duration-500 group-hover:scale-105"
                sizes="60vw"
              />
              <h3 className="z-10 mb-2 text-2xl font-bold text-[var(--color-on-surface)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                Authentic Connections
              </h3>
              <p className="z-10 max-w-md text-[var(--color-on-surface-muted)]">Offsites, hackathons, and coffee chats that actually mean something.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-extrabold text-[var(--color-on-surface)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            Invested in your growth.
          </h2>
          <p className="text-[var(--color-on-surface-muted)]">Exceptional talent deserves exceptional care.</p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {[
            ['public', 'Remote-First Culture', 'Work from anywhere in the world. We provide a $2k setup stipend.'],
            ['medical_services', 'Holistic Wellbeing', 'Premium health coverage, mental health support, and unlimited PTO.'],
            ['trending_up', 'Wealth Sharing', 'Generous equity packages and profit-sharing bonuses.'],
          ].map(([icon, title, body]) => (
            <div key={title} className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#dce9ff]">
                <span className="material-symbols-outlined text-3xl text-[var(--color-primary)]">{icon}</span>
              </div>
              <h4 className="mb-3 text-xl font-bold text-[var(--color-on-surface)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                {title}
              </h4>
              <p className="text-sm leading-relaxed text-[var(--color-on-surface-muted)]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="roles" className="bg-white px-8 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="mb-4 text-4xl font-extrabold text-[var(--color-on-surface)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                Open Roles
              </h2>
              <p className="text-[var(--color-on-surface-muted)]">Find your next challenge in our growing ecosystem.</p>
            </div>
            <div className="flex gap-2">
              <span className="rounded-full bg-[var(--color-primary)] px-4 py-2 text-xs font-bold text-white">All Categories</span>
              <span className="rounded-full bg-[#e6eeff] px-4 py-2 text-xs font-bold text-[var(--color-on-surface)]">Engineering</span>
              <span className="rounded-full bg-[#e6eeff] px-4 py-2 text-xs font-bold text-[var(--color-on-surface)]">Product</span>
            </div>
          </div>
          <div className="space-y-4">
            {roles.map((r) => (
              <div
                key={r.title}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-[#bfc8cc]/15 bg-[var(--color-surface-low)] p-6 sm:flex-row sm:items-center"
              >
                <div>
                  <h3 className="text-lg font-bold text-[var(--color-primary)]">{r.title}</h3>
                  <p className="text-sm text-[var(--color-on-surface-muted)]">
                    {r.loc} · {r.type}
                  </p>
                </div>
                <Link href={routes.contact} className="shrink-0 rounded-xl bg-[var(--color-primary)] px-6 py-3 text-center text-sm font-bold text-white">
                  Apply
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

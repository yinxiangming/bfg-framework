import Link from 'next/link'
import { brand, routes } from '@/config/marketingSite'
import { stitchAssets } from '@/config/stitchAssets'
import StitchImage from '@/components/marketing/StitchImage'

export default function AboutPageContent() {
  return (
    <div className="pb-24 pt-24">
      <section className="mx-auto mb-32 max-w-7xl px-8">
        <div className="relative flex flex-col items-center overflow-hidden rounded-[2rem] bg-[var(--color-surface-low)] p-12 text-center lg:p-24">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 30%, #6cf8bb 0%, transparent 50%), radial-gradient(circle at 80% 70%, #8dd0e9 0%, transparent 50%)',
            }}
          />
          <span className="mb-6 rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)] px-4 py-1.5 text-sm font-bold uppercase tracking-widest text-[#00714d]">
            Our Vision
          </span>
          <h1
            className="mb-8 max-w-4xl text-5xl font-extrabold leading-tight tracking-tighter text-[var(--color-primary)] lg:text-7xl"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            The Digital Concierge for Premium Consignment
          </h1>
          <p className="max-w-2xl text-xl font-light leading-relaxed text-[var(--color-on-surface-muted)]">
            We&apos;re redefining the consignment landscape by blending sophisticated technology with an intuitive touch, empowering
            entrepreneurs to scale their authority effortlessly.
          </p>
        </div>
      </section>

      <section className="mx-auto mb-40 max-w-7xl px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="mb-6 text-4xl font-bold tracking-tight text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Our Mission
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-[var(--color-on-surface-muted)]">
              To empower the next generation of consignment entrepreneurs with tools that feel less like software and more like a
              dedicated staff. We believe business growth shouldn&apos;t come at the cost of operational chaos.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4 rounded-xl bg-[#e6eeff] p-6">
                <span className="material-symbols-outlined text-3xl text-[var(--color-primary)]">auto_awesome</span>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)]">Effortless Authority</h4>
                  <p className="text-sm text-[var(--color-on-surface-muted)]">Streamlining complex workflows into single-click actions.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl bg-[#e6eeff] p-6">
                <span className="material-symbols-outlined text-3xl text-[var(--color-primary)]">hub</span>
                <div>
                  <h4 className="font-bold text-[var(--color-primary)]">Unified Ecosystem</h4>
                  <p className="text-sm text-[var(--color-on-surface-muted)]">
                    Connecting inventory, consignors, and sales in one seamless thread.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-7">
            <div className="relative aspect-video overflow-hidden rounded-3xl shadow-2xl">
              <StitchImage
                src={stitchAssets.about.officeHero}
                alt="Modern office interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--color-primary)_30%,transparent)] to-transparent" />
            </div>
            <div className="glass-card absolute -bottom-10 -left-10 hidden max-w-xs rounded-2xl border border-white/20 p-8 shadow-xl lg:block">
              <p className="font-bold italic text-[var(--color-primary)]">&quot;We don&apos;t just build dashboards; we curate experiences.&quot;</p>
              <p className="mt-2 text-xs text-[var(--color-on-surface-muted)]">— Design Leadership</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-40 bg-[var(--color-surface-low)] py-32">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Core Values
            </h2>
            <p className="text-[var(--color-on-surface-muted)]">The foundations of the {brand.name} philosophy.</p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: 'verified_user',
                fill: true,
                wrap: 'bg-[color-mix(in_srgb,var(--color-secondary-soft)_35%,white)]',
                ic: 'text-[#00714d]',
                title: 'Trust',
                body: 'Radical transparency in data, pricing, and communication. We are the stewards of your legacy.',
              },
              {
                icon: 'lightbulb',
                fill: true,
                wrap: 'bg-[#b7eaff]',
                ic: 'text-[var(--color-primary)]',
                title: 'Innovation',
                body: 'Rejecting the "good enough." We push the boundaries of what high-end SaaS can achieve every single day.',
              },
              {
                icon: 'trending_up',
                fill: true,
                wrap: 'bg-[#ffddb8]',
                ic: 'text-[#563400]',
                title: 'Growth',
                body: "Your success is our only metric. We build for the scale you haven't even dreamed of yet.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-3xl bg-white p-10 shadow-sm transition-shadow hover:shadow-md">
                <div className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${v.wrap}`}>
                  <span
                    className={`material-symbols-outlined text-3xl ${v.ic}`}
                    style={v.fill ? { fontVariationSettings: "'FILL' 1" } : undefined}
                  >
                    {v.icon}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                  {v.title}
                </h3>
                <p className="leading-relaxed text-[var(--color-on-surface-muted)]">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mb-40 max-w-7xl px-8">
        <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div className="max-w-xl">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Meet the Curators
            </h2>
            <p className="text-[var(--color-on-surface-muted)]">The minds behind the Digital Concierge platform.</p>
          </div>
          <Link href={routes.careers} className="flex items-center gap-2 font-bold text-[var(--color-primary)] transition-all hover:gap-4">
            View Careers <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {[
            { name: 'Elena Vance', role: 'Founder & CEO', img: stitchAssets.about.teamMember1 },
            { name: 'Julian Thorne', role: 'Head of Product Design', img: stitchAssets.about.teamMember2 },
            { name: 'Sarah Chen', role: 'Chief Technology Officer', img: stitchAssets.about.teamMember3 },
          ].map((m) => (
            <div key={m.name} className="group">
              <div className="relative mb-6 aspect-[4/5] overflow-hidden rounded-3xl">
                <StitchImage src={m.img} alt={m.name} fill className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--color-primary)_20%,transparent)] opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h4 className="mb-1 text-xl font-bold text-[var(--color-primary)]">{m.name}</h4>
              <p className="mb-4 text-sm font-medium text-[var(--color-on-surface-muted)]">{m.role}</p>
              <div className="flex gap-4">
                <span className="material-symbols-outlined cursor-pointer text-[#70787d] hover:text-[var(--color-primary)]">link</span>
                <span className="material-symbols-outlined cursor-pointer text-[#70787d] hover:text-[var(--color-primary)]">
                  alternate_email
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

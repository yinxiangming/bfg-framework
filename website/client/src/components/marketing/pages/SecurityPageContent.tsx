import Link from 'next/link'
import { brand, routes } from '@/config/marketingSite'
import { stitchAssets } from '@/config/stitchAssets'
import StitchImage from '@/components/marketing/StitchImage'

export default function SecurityPageContent() {
  return (
    <div className="pb-24 pt-24">
      <section className="mx-auto mb-24 max-w-7xl px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)] px-3 py-1 text-xs font-semibold text-[#00714d]">
              <span className="material-symbols-outlined mr-2 text-sm">verified_user</span>
              Enterprise-Grade Infrastructure
            </div>
            <h1
              className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-[var(--color-on-surface)] md:text-6xl"
              style={{ fontFamily: 'var(--font-manrope)' }}
            >
              Security as a <span className="italic text-[var(--color-primary)]">Primary Asset</span>.
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-[var(--color-on-surface-muted)]">
              At {brand.name}, we treat your inventory data with the same rigor as financial institutions. Our multi-layered security
              protocols ensure total integrity and 24/7 availability.
            </p>
            <div className="flex flex-wrap gap-4">
              {['SOC 2 Type II Certified', 'AES-256 Encryption', '99.9% Uptime SLA'].map((t) => (
                <div key={t} className="flex items-center space-x-2 font-medium text-[var(--color-on-surface-muted)]">
                  <span className="material-symbols-outlined text-[var(--color-primary)]">check_circle</span>
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#dce9ff] shadow-2xl">
              <div className="absolute inset-0 gradient-primary opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="glass-card flex h-full w-full flex-col items-center justify-center space-y-8 rounded-2xl border border-[#bfc8cc]/20 shadow-xl">
                  <span className="material-symbols-outlined text-8xl text-[var(--color-primary)]">admin_panel_settings</span>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[var(--color-on-surface)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                      Encrypted Data Vault
                    </div>
                    <div className="text-sm text-[var(--color-on-surface-muted)]">Active Monitoring Enabled</div>
                  </div>
                  <div className="h-2 w-2/3 overflow-hidden rounded-full bg-[#e6eeff]">
                    <div className="h-full w-full bg-[var(--color-secondary)]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="glass-card absolute -bottom-6 -left-6 max-w-[200px] rounded-2xl border border-[#bfc8cc]/20 p-6 shadow-lg">
              <div className="mb-2 flex items-center space-x-3">
                <span className="material-symbols-outlined text-[var(--color-secondary)]">shield</span>
                <span className="font-bold text-[var(--color-primary)]">ISO 27001</span>
              </div>
              <p className="text-xs leading-tight text-[var(--color-on-surface-muted)]">
                Internationally recognized security standard compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-32 max-w-7xl px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
          Comprehensive Safety Layers
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-3xl bg-[var(--color-surface-low)] p-10 md:col-span-2">
            <div className="relative z-10 flex h-full flex-col">
              <span className="material-symbols-outlined mb-6 text-4xl text-[var(--color-primary)]">encrypted</span>
              <h3 className="mb-4 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                Advanced Encryption Standard
              </h3>
              <p className="mb-8 max-w-md text-[var(--color-on-surface-muted)]">
                All data is encrypted at rest using AES-256 and in transit via TLS 1.3. We utilize Hardware Security Modules (HSMs) to
                manage encryption keys with the highest level of protection.
              </p>
              <div className="mt-auto flex space-x-4">
                <span className="rounded-lg bg-[#d5e3fc] px-3 py-1 text-xs font-bold uppercase tracking-wider">AES-256-GCM</span>
                <span className="rounded-lg bg-[#d5e3fc] px-3 py-1 text-xs font-bold uppercase tracking-wider">TLS 1.3</span>
              </div>
            </div>
            <div className="absolute -bottom-20 -right-20 opacity-5 transition-transform duration-700 group-hover:scale-110">
              <span className="material-symbols-outlined text-[300px]">lock</span>
            </div>
          </div>
          <div className="flex flex-col rounded-3xl bg-[var(--color-primary)] p-10 text-white">
            <span className="material-symbols-outlined mb-6 text-4xl">speed</span>
            <h3 className="mb-4 text-2xl font-bold" style={{ fontFamily: 'var(--font-manrope)' }}>
              99.9% Uptime
            </h3>
            <p className="mb-12 leading-relaxed text-[#8ed1ea]">
              Our distributed infrastructure across multiple cloud availability zones ensures your business stays online even during
              regional outages.
            </p>
            <div className="mt-auto text-4xl font-extrabold" style={{ fontFamily: 'var(--font-manrope)' }}>
              Reliable.
            </div>
          </div>
          <div className="rounded-3xl bg-[#d5e3fc] p-10">
            <span className="material-symbols-outlined mb-6 text-4xl text-[var(--color-secondary)]">gavel</span>
            <h3 className="mb-4 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              SOC 2 Type II
            </h3>
            <p className="mb-8 text-[var(--color-on-surface-muted)]">
              Independent audits ensure our operational controls and technical safeguards meet the industry&apos;s most rigorous trust
              principles.
            </p>
            <Link href={routes.contact} className="flex items-center font-bold text-[var(--color-primary)] hover:translate-x-1">
              Request Report
              <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="flex flex-col items-center gap-10 rounded-3xl border border-[#bfc8cc]/10 bg-white p-10 md:col-span-2 md:flex-row">
            <div className="flex-1">
              <span className="material-symbols-outlined mb-6 text-4xl text-[#563400]">visibility</span>
              <h3 className="mb-4 text-2xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
                24/7 Threat Detection
              </h3>
              <p className="leading-relaxed text-[var(--color-on-surface-muted)]">
                Continuous monitoring using AI-driven threat intelligence to identify and neutralize potential vulnerabilities before
                they can be exploited.
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-3 md:w-64">
              {['network_check', 'policy', 'database', 'done_all'].map((ic, i) => (
                <div
                  key={ic}
                  className={`flex aspect-square items-center justify-center rounded-xl ${i === 3 ? 'bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)]' : 'bg-[var(--color-surface-low)]'}`}
                >
                  <span
                    className={`material-symbols-outlined text-3xl ${i === 3 ? 'text-[#00714d]' : 'text-[var(--color-primary)]/40'}`}
                  >
                    {ic}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mb-24 max-w-7xl rounded-[40px] bg-[var(--color-surface-low)] px-8 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-on-surface-muted)]">
            Trusted by Market Leaders
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12 grayscale transition-all duration-500 hover:grayscale-0">
            {stitchAssets.security.badges.map((src, i) => (
              <div key={src} className="relative h-10 w-28">
                <StitchImage src={src} alt={`Partner ${i + 1}`} fill className="object-contain" sizes="112px" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

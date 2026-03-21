import Link from 'next/link'
import PlaceholderForm from '@/components/marketing/PlaceholderForm'
import StitchImage from '@/components/marketing/StitchImage'
import { brand, routes } from '@/config/marketingSite'
import { stitchAssets } from '@/config/stitchAssets'

export default function GetStartedPageContent() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] flex-col lg:flex-row">
      <section className="flex w-full flex-col justify-center px-8 py-16 lg:w-7/12 lg:px-16">
        <div className="mx-auto w-full max-w-md">
          <div className="mb-10 space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-on-surface)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Start your 14-day free trial
            </h1>
            <p className="font-medium text-[var(--color-on-surface-muted)]">Join 500+ premium retailers managing consignment with ease.</p>
          </div>
          <PlaceholderForm className="mt-8 space-y-6" action="#">
            <div className="grid grid-cols-1 gap-5">
              {[
                ['name', 'Full Name', 'text', 'John Doe'],
                ['store_name', 'Store Name', 'text', 'The Vintage Collective'],
                ['email', 'Email Address', 'email', 'john@example.com'],
                ['password', 'Password', 'password', '••••••••'],
              ].map(([id, label, type, ph]) => (
                <div key={id} className="space-y-1.5">
                  <label className="px-1 text-sm font-semibold text-[var(--color-on-surface-muted)]" htmlFor={id}>
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    placeholder={ph}
                    className="w-full rounded border-none bg-[var(--color-surface-low)] px-4 py-3 transition-all placeholder:text-[#bfc8cc] focus:bg-white focus:ring-2 focus:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-start gap-3">
              <input id="terms" type="checkbox" className="mt-1 h-4 w-4 rounded-sm border-none text-[var(--color-primary)] focus:ring-[var(--color-primary)]" />
              <label htmlFor="terms" className="text-sm leading-tight text-[var(--color-on-surface-muted)]">
                I agree to the{' '}
                <Link href={routes.terms} className="font-semibold text-[var(--color-primary)] hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href={routes.privacy} className="font-semibold text-[var(--color-primary)] hover:underline">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>
            <button type="submit" className="w-full rounded-xl py-4 font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl active:scale-95 btn-primary-gradient">
              Create My Account
            </button>
            <p className="text-center text-sm text-[var(--color-on-surface-muted)]">
              Already have an account?{' '}
              <Link href={routes.contact} className="font-bold text-[var(--color-primary)] hover:underline">
                Sign in
              </Link>
            </p>
          </PlaceholderForm>
        </div>
      </section>
      <section className="relative hidden w-full flex-col justify-between overflow-hidden bg-[var(--color-surface-low)] p-16 lg:flex lg:w-5/12">
        <div className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_5%,transparent)] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_10%,transparent)] blur-3xl" />
        <div className="relative z-10 space-y-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold leading-tight text-[var(--color-on-surface)]" style={{ fontFamily: 'var(--font-manrope)' }}>
              Experience the future of consignment management.
            </h2>
            <div className="space-y-6">
              {[
                ['check_circle', 'No credit card required', 'Start your trial immediately without any commitment.'],
                ['cloud_done', 'Cloud-based inventory', 'Access your data from anywhere, on any device.'],
                ['account_balance_wallet', 'Automated Payouts', 'Seamlessly manage consignor balances and distributions.'],
              ].map(([icon, title, body]) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)]">
                    <span className="material-symbols-outlined text-[#00714d]" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-[var(--color-on-surface)]">{title}</h3>
                    <p className="text-sm text-[var(--color-on-surface-muted)]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card space-y-6 rounded-xl border border-[#bfc8cc]/10 p-8 shadow-sm">
            <div className="flex gap-1 text-[#ffb95f]">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  star
                </span>
              ))}
            </div>
            <p className="font-medium italic leading-relaxed text-[var(--color-on-surface)]">
              &quot;{brand.name} has completely transformed how we handle our luxury boutique&apos;s stock. We saved over 15 hours a week on
              admin alone.&quot;
            </p>
            <div className="flex items-center gap-4">
              <StitchImage src={stitchAssets.getStarted.avatar} alt="Sarah Jenkins" width={48} height={48} className="rounded-full object-cover" />
              <div>
                <p className="text-sm font-bold text-[var(--color-on-surface)]">Sarah Jenkins</p>
                <p className="text-xs text-[var(--color-on-surface-muted)]">Founder, Luxe Collective</p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#70787d]">
          <span>Enterprise Ready</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#70787d]" />
          <span>GDPR Compliant</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#70787d]" />
          <span>SOC2 Certified</span>
        </div>
      </section>
    </main>
  )
}

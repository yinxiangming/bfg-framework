import Link from 'next/link'
import { brand, brandEmail, routes } from '@/config/marketingSite'

export default function TermsPageContent() {
  return (
    <div className="mx-auto max-w-3xl px-8 pb-24 pt-24">
      <header className="mb-12">
        <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-[var(--color-primary-mid)]">Legal</span>
        <h1 className="mb-4 text-5xl font-extrabold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
          Terms of Service
        </h1>
        <p className="text-sm text-[var(--color-on-surface-muted)]">Effective date: May 24, 2024</p>
      </header>
      <div className="space-y-10 text-[var(--color-on-surface-muted)] [&_p]:leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            1. Agreement
          </h2>
          <p className="mt-3">
            By accessing or using {brand.name} (&quot;Service&quot;), you agree to these Terms. If you disagree, do not use the Service. We may
            update these Terms; continued use after notice constitutes acceptance.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            2. Accounts
          </h2>
          <p className="mt-3">
            You are responsible for safeguarding credentials and for all activity under your account. Notify us promptly of
            unauthorized use.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            3. Acceptable use
          </h2>
          <p className="mt-3">
            You will not misuse the Service, attempt unauthorized access, reverse engineer except where permitted by law, or use the
            Service for unlawful resale of prohibited goods. We may suspend accounts that violate policy.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            4. Data &amp; privacy
          </h2>
          <p className="mt-3">
            Our collection and use of personal data is described in the{' '}
            <Link href={routes.privacy} className="font-semibold text-[var(--color-primary-mid)] hover:underline">
              Privacy Policy
            </Link>
            . You retain rights to your business data subject to export tools and legal retention requirements.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            5. Fees &amp; trials
          </h2>
          <p className="mt-3">
            Paid plans, taxes, and billing cycles are set in your order form or in-product checkout. Trial terms may convert to paid
            unless cancelled as stated at signup.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            6. Warranties &amp; liability
          </h2>
          <p className="mt-3">
            The Service is provided &quot;as is&quot; to the fullest extent permitted by law. Our aggregate liability for claims arising from
            the Service is limited to amounts paid by you in the twelve months preceding the claim, except where prohibited.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            7. Termination
          </h2>
          <p className="mt-3">
            Either party may terminate for material breach if uncured after notice. We may suspend for risk or legal compliance.
            Provisions that by nature survive will continue.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-bold text-[var(--color-primary)]" style={{ fontFamily: 'var(--font-manrope)' }}>
            8. Contact
          </h2>
          <p className="mt-3">
            Legal notices:{' '}
            <a href={`mailto:${brandEmail('legal')}`} className="font-semibold text-[var(--color-primary-mid)] hover:underline">
              {brandEmail('legal')}
            </a>
            . General questions: <Link href={routes.contact} className="font-semibold text-[var(--color-primary-mid)] hover:underline">Contact</Link>.
          </p>
        </section>
      </div>
    </div>
  )
}

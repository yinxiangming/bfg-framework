/**
 * Single source of truth for marketing routes, header nav, footer, and brand strings.
 * Maps to Stitch project "Consign" screens.
 */

export const routes = {
  home: '/',
  features: '/features',
  pricing: '/pricing',
  caseStudies: '/case-studies',
  blog: '/blog',
  about: '/about',
  security: '/security',
  mobile: '/mobile',
  faq: '/faq',
  bookDemo: '/book-demo',
  getStarted: '/get-started',
  contact: '/contact',
  careers: '/careers',
  privacy: '/privacy',
  terms: '/terms',
  platform: '/platform',
} as const

export type RouteKey = keyof typeof routes

export type NavLink = {
  label: string
  href: string
}

/** Primary header navigation (in order). */
export const mainNav: NavLink[] = [
  { label: 'Features', href: routes.features },
  { label: 'Pricing', href: routes.pricing },
  { label: 'Case Studies', href: routes.caseStudies },
  { label: 'Blog', href: routes.blog },
  { label: 'About', href: routes.about },
  { label: 'Security', href: routes.security },
]

export const headerCta = {
  secondary: { label: 'Get Started', href: routes.getStarted },
  primary: { label: 'Book a Demo', href: routes.bookDemo },
} as const

export type FooterColumn = {
  title: string
  links: NavLink[]
}

export const footerColumns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: routes.features },
      { label: 'Pricing', href: routes.pricing },
      { label: 'Mobile App', href: routes.mobile },
      { label: 'Platform', href: routes.platform },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: routes.about },
      { label: 'Careers', href: routes.careers },
      { label: 'Contact', href: routes.contact },
      { label: 'Blog', href: routes.blog },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: routes.faq },
      { label: 'Case Studies', href: routes.caseStudies },
      { label: 'Security & Trust', href: routes.security },
      { label: 'Get Started', href: routes.getStarted },
    ],
  },
]

export const footerLegal: NavLink[] = [
  { label: 'Privacy Policy', href: routes.privacy },
  { label: 'Terms of Service', href: routes.terms },
]

export const brand = {
  name: 'Idlevo',
  tagline: 'The digital concierge for modern consignment operations.',
  /** Domain for public contact mailboxes (support@, legal@, …). */
  emailDomain: 'idlevo.com',
} as const

/** Build `local@brandDomain` without repeating the domain string. */
export function brandEmail(localPart: string): string {
  return `${localPart}@${brand.emailDomain}`
}

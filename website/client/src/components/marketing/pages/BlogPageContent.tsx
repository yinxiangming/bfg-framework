import Link from 'next/link'
import PlaceholderForm from '@/components/marketing/PlaceholderForm'
import StitchImage from '@/components/marketing/StitchImage'
import { routes } from '@/config/marketingSite'
import { stitchAssets } from '@/config/stitchAssets'

const posts = [
  {
    tag: 'Luxury Market',
    date: 'May 12, 2024',
    read: '8 min read',
    title: '5 Tips for Luxury Resale',
    excerpt: 'Master the nuances of high-end authentication and market positioning to dominate the secondary luxury market.',
    author: 'Elena Vance',
    image: stitchAssets.blog.cards[0],
  },
  {
    tag: 'Automation',
    date: 'May 10, 2024',
    read: '5 min read',
    title: 'Automating Your Payouts',
    excerpt: 'Eliminate manual errors and save hours every week by implementing automated vendor payment systems.',
    author: 'Markus Wright',
    image: stitchAssets.blog.cards[1],
  },
  {
    tag: 'Strategy',
    date: 'May 05, 2024',
    read: '12 min read',
    title: 'How to Attract Premium Consignors',
    excerpt: 'Learn the branding techniques used by top-tier boutiques to secure the most exclusive inventory.',
    author: 'Sarah Chen',
    image: stitchAssets.blog.cards[2],
  },
  {
    tag: 'Growth',
    date: 'April 28, 2024',
    read: '6 min read',
    title: 'The ROI of Digital Inventories',
    excerpt: 'Analyzing how high-fidelity digital catalogs impact conversion rates and customer trust.',
    author: 'David Miller',
    image: stitchAssets.blog.cards[3],
  },
  {
    tag: 'Operations',
    date: 'April 22, 2024',
    read: '10 min read',
    title: 'Sustainable Luxury Models',
    excerpt: 'How the circular economy is reshaping consumer behavior in the premium fashion segment.',
    author: 'Amara Okafor',
    image: stitchAssets.blog.cards[4],
  },
  {
    tag: 'Success Stories',
    date: 'April 15, 2024',
    read: '15 min read',
    title: 'Scaling From Boutique to Global',
    excerpt: "The journey of 'The Archive'—how digital transformation fueled their international expansion.",
    author: 'Julian S.',
    image: stitchAssets.blog.cards[5],
  },
] as const

const filters = ['All Articles', 'Business Strategy', 'Automation', 'Luxury Market', 'Product Updates']

export default function BlogPageContent() {
  return (
    <div className="pb-24 pt-24">
      <header className="mx-auto mb-20 max-w-7xl px-8">
        <div className="max-w-3xl">
          <span className="mb-6 inline-block rounded-full bg-[color-mix(in_srgb,var(--color-secondary-soft)_40%,white)] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#00714d]">
            Resources &amp; Insights
          </span>
          <h1
            className="mb-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-[var(--color-primary)] md:text-6xl"
            style={{ fontFamily: 'var(--font-manrope)' }}
          >
            The Modern Guide to <br />
            <span className="text-[var(--color-primary-mid)]">Consignment Excellence.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-[var(--color-on-surface-muted)]">
            Discover expert strategies, industry trends, and technical guides designed to help luxury consignment businesses scale
            effortlessly.
          </p>
        </div>
      </header>

      <section className="mx-auto mb-12 max-w-7xl px-8">
        <div className="flex flex-wrap items-center gap-3">
          {filters.map((f, i) => (
            <button
              key={f}
              type="button"
              className={`rounded-full px-6 py-2.5 text-sm font-medium transition-colors ${
                i === 0
                  ? 'bg-[var(--color-primary)] text-white shadow-sm'
                  : 'bg-[var(--color-surface-low)] text-[var(--color-on-surface)] hover:bg-[#dce9ff]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto mb-24 max-w-7xl px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-white shadow-[0px_12px_32px_rgba(13,28,46,0.04)] transition-all duration-500 hover:shadow-[0px_12px_32px_rgba(13,28,46,0.06)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <StitchImage src={post.image} alt="" fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="400px" />
                <div className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-1 text-xs font-bold text-[var(--color-primary)] backdrop-blur-md">
                  {post.tag}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-4 flex items-center gap-2 text-xs text-[#70787d]">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-[#bfc8cc]" />
                  <span>{post.read}</span>
                </div>
                <h3
                  className="mb-4 text-2xl font-bold leading-tight text-[var(--color-on-surface)] transition-colors group-hover:text-[var(--color-primary)]"
                  style={{ fontFamily: 'var(--font-manrope)' }}
                >
                  {post.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-[var(--color-on-surface-muted)]">{post.excerpt}</p>
                <div className="mt-auto flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-[#dce9ff]" />
                  <span className="text-sm font-semibold text-[var(--color-on-surface)]">{post.author}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8">
        <div className="btn-primary-gradient relative overflow-hidden rounded-3xl p-12 shadow-2xl md:p-20">
          <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl" style={{ fontFamily: 'var(--font-manrope)' }}>
                Insights delivered to your <span className="text-[#6ffbbe]">Inbox.</span>
              </h2>
              <p className="text-white/80">Weekly consignment strategy — no spam.</p>
            </div>
            <PlaceholderForm className="flex flex-col gap-4 sm:flex-row" action="#">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-xl border-0 bg-white/10 px-5 py-4 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30"
              />
              <button type="submit" className="rounded-xl bg-[var(--color-secondary-soft)] px-8 py-4 font-bold text-[#00714d]">
                Subscribe
              </button>
            </PlaceholderForm>
          </div>
        </div>
      </section>

      <p className="mt-12 text-center text-sm text-[var(--color-on-surface-muted)]">
        <Link href={routes.contact} className="font-semibold text-[var(--color-primary-mid)] hover:underline">
          Pitch a guest post
        </Link>
      </p>
    </div>
  )
}

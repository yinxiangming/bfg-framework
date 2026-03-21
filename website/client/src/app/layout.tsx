import type { Metadata } from 'next'
import { Inter, Manrope } from 'next/font/google'
import MarketingFooter from '@/components/marketing/Footer'
import MarketingHeader from '@/components/marketing/Header'
import { brand } from '@/config/marketingSite'
import { getSiteBaseUrl } from '@/lib/env'
import './globals.css'

const materialSymbolsHref =
  'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const siteUrl = getSiteBaseUrl()

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`) } : {}),
  title: {
    default: `${brand.name} — Consignment operations, simplified`,
    template: `%s — ${brand.name}`,
  },
  description: brand.tagline,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <head>
        <link rel="stylesheet" href={materialSymbolsHref} />
      </head>
      <body className="min-h-screen font-sans antialiased" style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>
        <div className="flex min-h-screen flex-col">
          <MarketingHeader />
          <main className="flex-1">{children}</main>
          <MarketingFooter />
        </div>
      </body>
    </html>
  )
}

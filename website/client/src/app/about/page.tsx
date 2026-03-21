import type { Metadata } from 'next'
import AboutPageContent from '@/components/marketing/pages/AboutPageContent'

export const metadata: Metadata = {
  title: 'About Us',
}

export default function AboutPage() {
  return <AboutPageContent />
}

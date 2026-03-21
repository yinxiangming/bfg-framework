import type { Metadata } from 'next'
import PricingPageContent from '@/components/marketing/pages/PricingPageContent'

export const metadata: Metadata = {
  title: 'Pricing',
}

export default function PricingPage() {
  return <PricingPageContent />
}

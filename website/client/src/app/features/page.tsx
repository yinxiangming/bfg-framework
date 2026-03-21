import type { Metadata } from 'next'
import FeaturesPageContent from '@/components/marketing/pages/FeaturesPageContent'

export const metadata: Metadata = {
  title: 'Features',
}

export default function FeaturesPage() {
  return <FeaturesPageContent />
}

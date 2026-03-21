import type { Metadata } from 'next'
import FaqPageContent from '@/components/marketing/pages/FaqPageContent'

export const metadata: Metadata = {
  title: 'FAQ',
}

export default function FaqPage() {
  return <FaqPageContent />
}

import type { Metadata } from 'next'
import TermsPageContent from '@/components/marketing/pages/TermsPageContent'

export const metadata: Metadata = {
  title: 'Terms of Service',
}

export default function TermsPage() {
  return <TermsPageContent />
}

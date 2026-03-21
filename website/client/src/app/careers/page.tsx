import type { Metadata } from 'next'
import CareersPageContent from '@/components/marketing/pages/CareersPageContent'

export const metadata: Metadata = {
  title: 'Careers',
}

export default function CareersPage() {
  return <CareersPageContent />
}

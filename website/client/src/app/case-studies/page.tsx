import type { Metadata } from 'next'
import CaseStudiesPageContent from '@/components/marketing/pages/CaseStudiesPageContent'

export const metadata: Metadata = {
  title: 'Case Studies',
}

export default function CaseStudiesPage() {
  return <CaseStudiesPageContent />
}

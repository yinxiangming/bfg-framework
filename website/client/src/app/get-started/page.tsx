import type { Metadata } from 'next'
import GetStartedPageContent from '@/components/marketing/pages/GetStartedPageContent'

export const metadata: Metadata = {
  title: 'Get Started',
}

export default function GetStartedPage() {
  return <GetStartedPageContent />
}

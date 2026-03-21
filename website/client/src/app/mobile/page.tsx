import type { Metadata } from 'next'
import MobilePageContent from '@/components/marketing/pages/MobilePageContent'

export const metadata: Metadata = {
  title: 'Mobile App',
}

export default function MobilePage() {
  return <MobilePageContent />
}

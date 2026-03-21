import type { Metadata } from 'next'
import PrivacyPageContent from '@/components/marketing/pages/PrivacyPageContent'

export const metadata: Metadata = {
  title: 'Privacy Policy',
}

export default function PrivacyPage() {
  return <PrivacyPageContent />
}

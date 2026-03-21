import type { Metadata } from 'next'
import SecurityPageContent from '@/components/marketing/pages/SecurityPageContent'

export const metadata: Metadata = {
  title: 'Security & Trust',
}

export default function SecurityPage() {
  return <SecurityPageContent />
}

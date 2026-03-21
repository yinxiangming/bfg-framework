import type { Metadata } from 'next'
import PlatformPageContent from '@/components/marketing/pages/PlatformPageContent'

export const metadata: Metadata = {
  title: 'Management Platform',
}

export default function PlatformPage() {
  return <PlatformPageContent />
}

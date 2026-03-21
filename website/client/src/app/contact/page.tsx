import type { Metadata } from 'next'
import ContactPageContent from '@/components/marketing/pages/ContactPageContent'

export const metadata: Metadata = {
  title: 'Contact',
}

export default function ContactPage() {
  return <ContactPageContent />
}

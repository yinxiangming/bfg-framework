import type { Metadata } from 'next'
import BookDemoPageContent from '@/components/marketing/pages/BookDemoPageContent'

export const metadata: Metadata = {
  title: 'Book a Demo',
}

export default function BookDemoPage() {
  return <BookDemoPageContent />
}

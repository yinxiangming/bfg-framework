import type { Metadata } from 'next'
import BlogPageContent from '@/components/marketing/pages/BlogPageContent'

export const metadata: Metadata = {
  title: 'Blog & Resources',
}

export default function BlogPage() {
  return <BlogPageContent />
}

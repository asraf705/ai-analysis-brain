import type { Metadata } from 'next'
import { Hero } from '@/components/home/Hero'
import { Features } from '@/components/home/Features'
import { CTASection } from '@/components/home/CTASection'

export const metadata: Metadata = {
  title: 'AI Analysis Brain - AI-Powered Data Analysis Platform',
  description: 'Transform your data into actionable insights with cutting-edge artificial intelligence. Modern AI-powered analysis platform with dark theme.',
  keywords: ['AI', 'Analysis', 'Next.js', 'React', 'Data Analysis', 'Machine Learning'],
}

/**
 * Home Page Component
 * Main landing page with hero section, features, and call-to-action
 */
export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <CTASection />
    </div>
  )
}


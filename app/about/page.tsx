import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Brain, Target, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - AI Analysis Brain',
  description: 'Learn about AI Analysis Brain and our mission to democratize AI-powered data analysis. Building the future of intelligent data insights.',
  keywords: ['About', 'AI', 'Analysis', 'Mission', 'Company'],
}

/**
 * About Page Component
 * Information about the platform and its capabilities
 */
export default function AboutPage() {
  return (
    <div className="py-20">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About AI Analysis Brain
          </h1>
          
          <p className="text-lg text-gray-300 mb-12">
            We're building the future of AI-powered analysis, combining cutting-edge
            technology with intuitive design to deliver insights that matter.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Intelligent</h3>
              <p className="text-gray-400">
                Advanced AI algorithms that understand context and deliver accurate results
              </p>
            </Card>

            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent-purple/20 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-accent-purple" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast</h3>
              <p className="text-gray-400">
                Lightning-fast processing speeds for real-time analysis and insights
              </p>
            </Card>

            <Card className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent-cyan/20 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-accent-cyan" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">Accurate</h3>
              <p className="text-gray-400">
                Precision-driven results backed by state-of-the-art machine learning
              </p>
            </Card>
          </div>

          <Card>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-4">
              Our mission is to democratize access to powerful AI analysis tools,
              making sophisticated data insights available to everyone, from
              individual researchers to enterprise teams.
            </p>
            <p className="text-gray-300">
              We believe that the future of work is augmented by intelligent systems
              that enhance human capabilities rather than replace them. Through
              continuous innovation and user-focused design, we're creating tools
              that empower people to make better decisions faster.
            </p>
          </Card>
        </div>
      </Container>
    </div>
  )
}


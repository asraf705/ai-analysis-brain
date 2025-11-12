import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ArrowRight, Sparkles } from 'lucide-react'

/**
 * Hero Component
 * Landing page hero section with call-to-action
 */
export function Hero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-surface border border-dark-border rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-accent-purple" />
            <span className="text-sm">Powered by Advanced AI Technology</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">AI-Powered Analysis</span>
            <br />
            <span className="text-white">For Smarter Decisions</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Transform your data into actionable insights with cutting-edge artificial intelligence.
            Make informed decisions faster than ever before.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg">
              View Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
            <div>
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</p>
              <p className="text-sm text-gray-400">Accuracy</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent-green mb-2">10x</p>
              <p className="text-sm text-gray-400">Faster</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold text-accent-purple mb-2">24/7</p>
              <p className="text-sm text-gray-400">Support</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


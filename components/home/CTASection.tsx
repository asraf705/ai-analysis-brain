import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ArrowRight } from 'lucide-react'

/**
 * CTA Section Component
 * Call-to-action section encouraging user sign-up
 */
export function CTASection() {
  return (
    <section className="py-20">
      <Container>
        <div className="relative overflow-hidden bg-gradient-to-br from-primary via-accent-purple to-accent-cyan rounded-3xl p-12 md:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:24px_24px]" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Data?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Join thousands of teams already using AI Analysis Brain to make
              better decisions faster. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Contact Sales
              </Button>
            </div>
            <p className="text-sm text-white/75 mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}


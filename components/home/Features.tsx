import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { 
  Brain, 
  Zap, 
  Shield, 
  BarChart3, 
  Clock, 
  Globe 
} from 'lucide-react'

/**
 * Features Component
 * Showcase key platform features with icons
 */
export function Features() {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Models',
      description: 'State-of-the-art machine learning algorithms that continuously improve with your data.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Get real-time insights with our optimized processing pipeline built for speed.',
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance with industry standards to protect your data.',
      color: 'text-accent-cyan',
      bgColor: 'bg-accent-cyan/10',
    },
    {
      icon: BarChart3,
      title: 'Rich Analytics',
      description: 'Comprehensive dashboards and visualizations to understand your data at a glance.',
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10',
    },
    {
      icon: Clock,
      title: 'Real-time Processing',
      description: 'Process and analyze data streams in real-time for instant decision making.',
      color: 'text-accent-orange',
      bgColor: 'bg-accent-orange/10',
    },
    {
      icon: Globe,
      title: 'Global Scale',
      description: 'Distributed infrastructure that scales seamlessly with your growing needs.',
      color: 'text-primary-light',
      bgColor: 'bg-primary-light/10',
    },
  ]

  return (
    <section id="features" className="py-20">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Powerful Features for
            <span className="gradient-text"> Every Need</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to transform data into actionable insights,
            all in one powerful platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="hover:border-dark-hover transition-all duration-300 group">
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}


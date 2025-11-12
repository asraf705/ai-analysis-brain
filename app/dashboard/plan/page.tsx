import type { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Check, Crown, Zap, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Update Plan - AI Analysis Brain',
  description: 'Upgrade your account to unlock more features',
}

/**
 * Plan Page
 * Subscription plans and upgrade options
 */
export default function PlanPage() {
  const plans = [
    {
      name: 'Free',
      icon: Crown,
      price: '$0',
      period: '/month',
      description: 'Perfect for getting started',
      features: [
        '10 analyses per month',
        'Basic analytics',
        '1 GB storage',
        'Email support',
        'Access to community'
      ],
      current: true,
      color: 'text-accent-orange',
      bgColor: 'bg-accent-orange/10'
    },
    {
      name: 'Pro',
      icon: Zap,
      price: '$29',
      period: '/month',
      description: 'For professionals and teams',
      features: [
        'Unlimited analyses',
        'Advanced analytics',
        '50 GB storage',
        'Priority support',
        'API access',
        'Custom reports',
        'Export in all formats'
      ],
      popular: true,
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      name: 'Enterprise',
      icon: Star,
      price: '$99',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Everything in Pro',
        'Unlimited storage',
        'Dedicated support',
        'Custom integrations',
        'SLA guarantee',
        'Training sessions',
        'White-label options'
      ],
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h1>
        <p className="text-lg text-gray-400">
          Upgrade to unlock powerful features and take your analysis to the next level
        </p>
      </div>

      {/* Plans Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {plans.map((plan, index) => {
          const Icon = plan.icon
          return (
            <Card 
              key={index}
              className={`relative ${
                plan.popular ? 'border-primary ring-2 ring-primary/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              {plan.current && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent-green text-white text-sm font-semibold rounded-full">
                  Current Plan
                </div>
              )}

              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${plan.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${plan.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.current ? 'secondary' : plan.popular ? 'primary' : 'secondary'}
                fullWidth
                disabled={plan.current}
              >
                {plan.current ? 'Current Plan' : 'Upgrade Now'}
              </Button>
            </Card>
          )
        })}
      </div>

      {/* FAQ Section */}
      <Card className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Can I change plans anytime?</h3>
            <p className="text-gray-400 text-sm">
              Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-400 text-sm">
              We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Is there a free trial for paid plans?</h3>
            <p className="text-gray-400 text-sm">
              Yes! All paid plans come with a 14-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}


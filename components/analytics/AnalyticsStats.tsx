import { Card } from '@/components/ui/Card'
import { LucideIcon } from 'lucide-react'

/**
 * Analytics Stats Component
 * Reusable stat cards for analytics metrics
 */

interface StatItem {
  label: string
  value: string
  change?: string
  trend?: 'up' | 'down'
  icon: LucideIcon
  color: string
}

interface AnalyticsStatsProps {
  stats: StatItem[]
}

export function AnalyticsStats({ stats }: AnalyticsStatsProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        const trendColor = stat.trend === 'up' ? 'text-accent-green' : stat.trend === 'down' ? 'text-red-400' : ''
        
        return (
          <Card key={index} className="hover:border-primary/50 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${stat.color.replace('text-', 'bg-')}/10 flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              {stat.change && (
                <span className={`text-sm font-medium ${trendColor}`}>
                  {stat.change}
                </span>
              )}
            </div>
            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </Card>
        )
      })}
    </div>
  )
}


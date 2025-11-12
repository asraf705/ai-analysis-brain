import { Card } from '@/components/ui/Card'
import { Loader2, Clock, FileText, TrendingUp } from 'lucide-react'

/**
 * Running Analytics Component
 * Displays currently running/in-progress analyses
 * Reusable component for showing active operations
 */

interface RunningAnalytic {
  id: string
  title: string
  type: string
  progress: number
  startTime: string
  estimatedTime?: string
}

interface RunningAnalyticsProps {
  analytics?: RunningAnalytic[]
  showHeader?: boolean
}

export function RunningAnalytics({ 
  analytics = [], 
  showHeader = true 
}: RunningAnalyticsProps) {
  // Default sample data if none provided
  const defaultAnalytics: RunningAnalytic[] = [
    {
      id: '1',
      title: 'Sentiment Analysis - Customer Feedback',
      type: 'Text Analysis',
      progress: 67,
      startTime: '2 minutes ago',
      estimatedTime: '1 min remaining'
    },
    {
      id: '2',
      title: 'Pattern Recognition - Sales Data',
      type: 'Data Mining',
      progress: 34,
      startTime: '5 minutes ago',
      estimatedTime: '3 min remaining'
    },
    {
      id: '3',
      title: 'Predictive Model Training',
      type: 'Machine Learning',
      progress: 89,
      startTime: '12 minutes ago',
      estimatedTime: '30 sec remaining'
    }
  ]

  const displayAnalytics = analytics.length > 0 ? analytics : defaultAnalytics

  if (displayAnalytics.length === 0) {
    return (
      <Card>
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-dark-elevated rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8 text-gray-500" />
          </div>
          <h3 className="font-semibold mb-2">No Running Analytics</h3>
          <p className="text-sm text-gray-400">
            All analyses are complete. Start a new analysis to see it here.
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card>
      {showHeader && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-orange/20 rounded-lg flex items-center justify-center">
              <Loader2 className="w-5 h-5 text-accent-orange animate-spin" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Running Analytics</h2>
              <p className="text-sm text-gray-400">{displayAnalytics.length} active operations</p>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {displayAnalytics.map((analytic) => (
          <div
            key={analytic.id}
            className="p-4 bg-dark-elevated rounded-lg hover:bg-dark-hover transition-colors"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{analytic.title}</h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <FileText className="w-3 h-3" />
                    {analytic.type}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {analytic.startTime}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-accent-orange">
                  {analytic.progress}%
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="relative">
              <div className="w-full bg-dark-surface rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-accent-orange to-accent-green transition-all duration-500"
                  style={{ width: `${analytic.progress}%` }}
                />
              </div>
              {analytic.estimatedTime && (
                <p className="text-xs text-gray-400 mt-2">
                  Est. {analytic.estimatedTime}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}


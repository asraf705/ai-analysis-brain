import type { Metadata } from 'next'
import { AllAnalytics } from '@/components/analytics/AllAnalytics'

export const metadata: Metadata = {
  title: 'All Analytics - AI Analysis Brain',
  description: 'View all your analytics history with filters and search',
}

/**
 * All Analytics Page
 * Complete list of all analytics with advanced filtering
 */
export default function AllAnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">All Analytics</h1>
        <p className="text-gray-400">
          Complete history of all your analyses with advanced filtering and search
        </p>
      </div>

      {/* All Analytics Component */}
      <AllAnalytics />
    </div>
  )
}


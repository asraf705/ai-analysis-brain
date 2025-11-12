import type { Metadata } from 'next'
import { AnalyticsLogsViewer } from '@/components/logs/AnalyticsLogsViewer'

export const metadata: Metadata = {
  title: 'Analytics Logs - AI Analysis Brain',
  description: 'View detailed logs of all analytics operations and status',
}

/**
 * Analytics Logs Page
 * Comprehensive logging system for all analytics operations
 */
export default function LogsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Analytics Logs</h1>
        <p className="text-gray-400">
          Real-time logs showing detailed status and progress of all analytics operations
        </p>
      </div>

      {/* Logs Viewer Component */}
      <AnalyticsLogsViewer />
    </div>
  )
}


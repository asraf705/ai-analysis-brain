'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnalyticsActions } from './AnalyticsActions'
import { DownloadModal } from './DownloadModal'
import { 
  CheckCircle, 
  XCircle, 
  Clock, 
  Eye,
  Download,
  TrendingUp
} from 'lucide-react'

/**
 * Recent Analytics Component
 * Displays completed and recent analytics with actions
 * Reusable component for showing analysis history
 */

interface AnalyticResult {
  id: string
  title: string
  type: string
  status: 'completed' | 'failed'
  completedAt: string
  accuracy?: string
  records: number
  duration?: string
}

interface RecentAnalyticsProps {
  analytics?: AnalyticResult[]
  showHeader?: boolean
  onView?: (id: string) => void
  onDownload?: (id: string) => void
}

export function RecentAnalytics({ 
  analytics = [], 
  showHeader = true,
  onView,
  onDownload
}: RecentAnalyticsProps) {
  const router = useRouter()
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)
  const [selectedAnalysis, setSelectedAnalysis] = useState<AnalyticResult | null>(null)
  // Default sample data if none provided
  const defaultAnalytics: AnalyticResult[] = [
    {
      id: '1',
      title: 'Customer Sentiment Analysis',
      type: 'Text Analysis',
      status: 'completed',
      completedAt: '5 minutes ago',
      accuracy: '98.5%',
      records: 1247,
      duration: '2m 34s'
    },
    {
      id: '2',
      title: 'Sales Data Classification',
      type: 'Data Mining',
      status: 'completed',
      completedAt: '1 hour ago',
      accuracy: '96.2%',
      records: 3892,
      duration: '5m 12s'
    },
    {
      id: '3',
      title: 'Pattern Recognition Failed',
      type: 'Pattern Analysis',
      status: 'failed',
      completedAt: '2 hours ago',
      records: 5621,
      duration: '1m 45s'
    },
    {
      id: '4',
      title: 'Trend Detection Complete',
      type: 'Trend Analysis',
      status: 'completed',
      completedAt: '3 hours ago',
      accuracy: '94.8%',
      records: 2103,
      duration: '3m 56s'
    },
    {
      id: '5',
      title: 'Anomaly Detection',
      type: 'Anomaly Analysis',
      status: 'completed',
      completedAt: '5 hours ago',
      accuracy: '97.1%',
      records: 1876,
      duration: '4m 23s'
    }
  ]

  const displayAnalytics = analytics.length > 0 ? analytics : defaultAnalytics

  const handleView = (id: string) => {
    if (onView) {
      onView(id)
    } else {
      // Navigate to details page
      router.push(`/dashboard/analytics/${id}`)
    }
  }

  const handleDownload = (id: string) => {
    const analysis = displayAnalytics.find(a => a.id === id)
    if (analysis) {
      setSelectedAnalysis(analysis)
      setDownloadModalOpen(true)
    }
    
    if (onDownload) {
      onDownload(id)
    }
  }

  const handleShare = (id: string) => {
    console.log('Share analytics:', id)
    // Implement share functionality
  }

  const handleDuplicate = (id: string) => {
    console.log('Duplicate analytics:', id)
    // Implement duplicate functionality
  }

  const handleDelete = (id: string) => {
    console.log('Delete analytics:', id)
    // Implement delete functionality with confirmation
  }

  const handleRerun = (id: string) => {
    console.log('Re-run analytics:', id)
    // Implement re-run functionality
  }

  const handleEmail = (id: string) => {
    console.log('Email analytics:', id)
    // Implement email functionality
  }

  const handleViewRawData = (id: string) => {
    console.log('View raw data:', id)
    // This will be handled by AllAnalytics component
  }

  return (
    <Card>
      {showHeader && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Recent Analytics</h2>
              <p className="text-sm text-gray-400">Latest completed analyses</p>
            </div>
          </div>
          <Link href="/dashboard/analytics/all">
            <Button variant="secondary" size="sm">
              View All
            </Button>
          </Link>
        </div>
      )}

      <div className="space-y-3">
        {displayAnalytics.map((analytic) => (
          <div
            key={analytic.id}
            className="p-4 bg-dark-elevated rounded-lg hover:bg-dark-hover transition-colors group"
          >
            <div className="flex items-start gap-4">
              {/* Status Icon */}
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                analytic.status === 'completed' 
                  ? 'bg-accent-green/20' 
                  : 'bg-red-400/20'
              }`}>
                {analytic.status === 'completed' ? (
                  <CheckCircle className="w-5 h-5 text-accent-green" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 truncate">{analytic.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                      <span>{analytic.type}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {analytic.completedAt}
                      </span>
                      {analytic.duration && (
                        <>
                          <span>•</span>
                          <span>{analytic.duration}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <div className="px-3 py-1 bg-dark-surface rounded-lg">
                    <span className="text-gray-400">Records: </span>
                    <span className="font-semibold">{analytic.records.toLocaleString()}</span>
                  </div>
                  {analytic.accuracy && (
                    <div className="px-3 py-1 bg-dark-surface rounded-lg">
                      <span className="text-gray-400">Accuracy: </span>
                      <span className="font-semibold text-accent-green">{analytic.accuracy}</span>
                    </div>
                  )}
                  <div className={`px-3 py-1 rounded-lg ${
                    analytic.status === 'completed'
                      ? 'bg-accent-green/20 text-accent-green'
                      : 'bg-red-400/20 text-red-400'
                  }`}>
                    {analytic.status === 'completed' ? 'Completed' : 'Failed'}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                {analytic.status === 'completed' && (
                  <>
                    <button
                      onClick={() => handleView(analytic.id)}
                      className="w-8 h-8 hover:bg-dark-surface rounded-lg transition-colors flex items-center justify-center"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDownload(analytic.id)}
                      className="w-8 h-8 hover:bg-dark-surface rounded-lg transition-colors flex items-center justify-center"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                  </>
                )}
                <AnalyticsActions
                  analysisId={analytic.id}
                  onView={handleView}
                  onDownload={handleDownload}
                  onShare={handleShare}
                  onDuplicate={handleDuplicate}
                  onDelete={handleDelete}
                  onRerun={handleRerun}
                  onEmail={handleEmail}
                  onViewRawData={handleViewRawData}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => {
          setDownloadModalOpen(false)
          setSelectedAnalysis(null)
        }}
        analysisData={selectedAnalysis ? {
          id: selectedAnalysis.id,
          title: selectedAnalysis.title,
          type: selectedAnalysis.type
        } : undefined}
      />
    </Card>
  )
}


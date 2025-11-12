'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { AnalyticsActions } from './AnalyticsActions'
import { DownloadModal } from './DownloadModal'
import { ShareModal } from './ShareModal'
import { ViewRawDataModal } from './ViewRawDataModal'
import {
  Search,
  Filter,
  Calendar,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Download,
  ArrowLeft
} from 'lucide-react'
import Link from 'next/link'

/**
 * All Analytics Component
 * Complete analytics list with filtering, search, and pagination
 */

interface AnalyticItem {
  id: string
  title: string
  type: string
  status: 'completed' | 'failed' | 'processing'
  completedAt: string
  accuracy?: string
  records: number
  duration?: string
}

export function AllAnalytics() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedType, setSelectedType] = useState('all')
  const [downloadModalOpen, setDownloadModalOpen] = useState(false)
  const [shareModalOpen, setShareModalOpen] = useState(false)
  const [rawDataModalOpen, setRawDataModalOpen] = useState(false)
  const [selectedAnalysis, setSelectedAnalysis] = useState<AnalyticItem | null>(null)

  // Extended analytics data
  const allAnalytics: AnalyticItem[] = [
    {
      id: '1',
      title: 'Customer Sentiment Analysis - January 2024',
      type: 'Text Analysis',
      status: 'completed',
      completedAt: '2024-02-14 10:32 AM',
      accuracy: '98.5%',
      records: 1247,
      duration: '2m 34s'
    },
    {
      id: '2',
      title: 'Sales Data Classification Q4 2023',
      type: 'Data Mining',
      status: 'completed',
      completedAt: '2024-02-13 03:45 PM',
      accuracy: '96.2%',
      records: 3892,
      duration: '5m 12s'
    },
    {
      id: '3',
      title: 'Pattern Recognition - User Behavior',
      type: 'Pattern Analysis',
      status: 'failed',
      completedAt: '2024-02-12 11:20 AM',
      records: 5621,
      duration: '1m 45s'
    },
    {
      id: '4',
      title: 'Trend Detection - Market Data',
      type: 'Trend Analysis',
      status: 'completed',
      completedAt: '2024-02-11 09:15 AM',
      accuracy: '94.8%',
      records: 2103,
      duration: '3m 56s'
    },
    {
      id: '5',
      title: 'Anomaly Detection - Transaction Logs',
      type: 'Anomaly Analysis',
      status: 'completed',
      completedAt: '2024-02-10 02:30 PM',
      accuracy: '97.1%',
      records: 1876,
      duration: '4m 23s'
    },
    {
      id: '6',
      title: 'Predictive Modeling - Revenue Forecast',
      type: 'Prediction',
      status: 'processing',
      completedAt: '2024-02-14 11:45 AM',
      records: 4521,
    },
    {
      id: '7',
      title: 'Text Classification - Support Tickets',
      type: 'Classification',
      status: 'completed',
      completedAt: '2024-02-09 04:20 PM',
      accuracy: '93.7%',
      records: 3210,
      duration: '6m 15s'
    },
    {
      id: '8',
      title: 'Clustering Analysis - Customer Segments',
      type: 'Clustering',
      status: 'completed',
      completedAt: '2024-02-08 01:10 PM',
      accuracy: '95.4%',
      records: 7843,
      duration: '8m 42s'
    },
    {
      id: '9',
      title: 'Time Series Analysis - Stock Prices',
      type: 'Time Series',
      status: 'completed',
      completedAt: '2024-02-07 10:05 AM',
      accuracy: '91.2%',
      records: 2156,
      duration: '3m 28s'
    },
    {
      id: '10',
      title: 'NLP Processing - Product Reviews',
      type: 'NLP',
      status: 'completed',
      completedAt: '2024-02-06 03:50 PM',
      accuracy: '97.8%',
      records: 5432,
      duration: '7m 11s'
    }
  ]

  // Filter analytics based on search and filters
  const filteredAnalytics = allAnalytics.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.type.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || item.status === selectedStatus
    const matchesType = selectedType === 'all' || item.type === selectedType
    
    return matchesSearch && matchesStatus && matchesType
  })

  // Get unique types for filter
  const uniqueTypes = ['all', ...new Set(allAnalytics.map(a => a.type))]

  // Action handlers
  const handleView = (id: string) => {
    router.push(`/dashboard/analytics/${id}`)
  }

  const handleDownload = (id: string) => {
    const analysis = allAnalytics.find(a => a.id === id)
    if (analysis) {
      setSelectedAnalysis(analysis)
      setDownloadModalOpen(true)
    }
  }

  const handleShare = (id: string) => {
    const analysis = allAnalytics.find(a => a.id === id)
    if (analysis) {
      setSelectedAnalysis(analysis)
      setShareModalOpen(true)
    }
  }

  const handleDuplicate = (id: string) => {
    if (confirm('Duplicate this analysis?')) {
      console.log('Duplicating:', id)
      alert('Analysis duplicated successfully!')
    }
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this analysis? This action cannot be undone.')) {
      console.log('Deleting:', id)
      alert('Analysis deleted successfully!')
    }
  }

  const handleRerun = (id: string) => {
    if (confirm('Re-run this analysis with the same configuration?')) {
      console.log('Re-running:', id)
      alert('Analysis re-started successfully!')
    }
  }

  const handleEmail = (id: string) => {
    const email = prompt('Enter email address to send report:')
    if (email) {
      console.log('Sending to:', email)
      alert(`Report sent to ${email}!`)
    }
  }

  const handleViewRawData = (id: string) => {
    const analysis = allAnalytics.find(a => a.id === id)
    if (analysis) {
      setSelectedAnalysis(analysis)
      setRawDataModalOpen(true)
    }
  }

  return (
    <>
      {/* Back Button */}
      <Link href="/dashboard/analytics">
        <Button variant="ghost" size="sm" className="mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Analytics
        </Button>
      </Link>

      {/* Stats Summary */}
      <div className="grid sm:grid-cols-4 gap-6 mb-8">
        <Card className="p-4">
          <p className="text-sm text-gray-400 mb-1">Total</p>
          <p className="text-3xl font-bold">{allAnalytics.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-400 mb-1">Completed</p>
          <p className="text-3xl font-bold text-accent-green">
            {allAnalytics.filter(a => a.status === 'completed').length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-400 mb-1">Processing</p>
          <p className="text-3xl font-bold text-accent-orange">
            {allAnalytics.filter(a => a.status === 'processing').length}
          </p>
        </Card>
        <Card className="p-4">
          <p className="text-sm text-gray-400 mb-1">Failed</p>
          <p className="text-3xl font-bold text-red-400">
            {allAnalytics.filter(a => a.status === 'failed').length}
          </p>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search analytics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-elevated border border-dark-border rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="processing">Processing</option>
            <option value="failed">Failed</option>
          </select>

          {/* Type Filter */}
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
          >
            {uniqueTypes.map(type => (
              <option key={type} value={type}>
                {type === 'all' ? 'All Types' : type}
              </option>
            ))}
          </select>
        </div>

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-400">
          Showing {filteredAnalytics.length} of {allAnalytics.length} analytics
        </div>
      </Card>

      {/* Analytics List */}
      <Card>
        <div className="space-y-3">
          {filteredAnalytics.map((analytic) => (
            <div
              key={analytic.id}
              className="p-4 bg-dark-elevated rounded-lg hover:bg-dark-hover transition-colors group"
            >
              <div className="flex items-start gap-4">
                {/* Status Icon */}
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  analytic.status === 'completed' 
                    ? 'bg-accent-green/20' 
                    : analytic.status === 'processing'
                    ? 'bg-accent-orange/20'
                    : 'bg-red-400/20'
                }`}>
                  {analytic.status === 'completed' ? (
                    <CheckCircle className="w-5 h-5 text-accent-green" />
                  ) : analytic.status === 'processing' ? (
                    <Clock className="w-5 h-5 text-accent-orange" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-400" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{analytic.title}</h3>
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
                        : analytic.status === 'processing'
                        ? 'bg-accent-orange/20 text-accent-orange'
                        : 'bg-red-400/20 text-red-400'
                    }`}>
                      {analytic.status}
                    </div>
                  </div>
                </div>

                {/* Quick Actions (Always Visible on Desktop) */}
                <div className="hidden sm:flex gap-2">
                  <button
                    onClick={() => handleView(analytic.id)}
                    className="w-8 h-8 hover:bg-dark-surface rounded-lg transition-colors flex items-center justify-center"
                    title="View Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  {analytic.status === 'completed' && (
                    <button
                      onClick={() => handleDownload(analytic.id)}
                      className="w-8 h-8 hover:bg-dark-surface rounded-lg transition-colors flex items-center justify-center"
                      title="Download"
                    >
                      <Download className="w-4 h-4" />
                    </button>
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

                {/* Mobile Actions */}
                <div className="sm:hidden">
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

        {/* Empty State */}
        {filteredAnalytics.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No analytics found matching your criteria</p>
          </div>
        )}

        {/* Pagination */}
        {filteredAnalytics.length > 0 && (
          <div className="mt-6 flex justify-center">
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">Previous</Button>
              <Button variant="primary" size="sm">1</Button>
              <Button variant="secondary" size="sm">2</Button>
              <Button variant="secondary" size="sm">3</Button>
              <Button variant="secondary" size="sm">Next</Button>
            </div>
          </div>
        )}
      </Card>

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

      {/* Share Modal */}
      <ShareModal
        isOpen={shareModalOpen}
        onClose={() => {
          setShareModalOpen(false)
          setSelectedAnalysis(null)
        }}
        analysisData={selectedAnalysis ? {
          id: selectedAnalysis.id,
          title: selectedAnalysis.title
        } : undefined}
      />

      {/* View Raw Data Modal */}
      <ViewRawDataModal
        isOpen={rawDataModalOpen}
        onClose={() => {
          setRawDataModalOpen(false)
          setSelectedAnalysis(null)
        }}
        analysisData={selectedAnalysis ? {
          id: selectedAnalysis.id,
          title: selectedAnalysis.title,
          records: selectedAnalysis.records
        } : undefined}
      />
    </>
  )
}


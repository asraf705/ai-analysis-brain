'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  TrendingUp,
  TrendingDown,
  Users,
  FileText,
  Activity,
  Clock,
  BarChart3,
  PieChart,
  Download
} from 'lucide-react'
import { AnalyticsStats } from '@/components/analytics/AnalyticsStats'
import { RunningAnalytics } from '@/components/analytics/RunningAnalytics'
import { RecentAnalytics } from '@/components/analytics/RecentAnalytics'
import { ExportReportModal } from '@/components/analytics/ExportReportModal'
import { RunAnalysisModal } from '@/components/analytics/RunAnalysisModal'

/**
 * Analytics Page
 * Comprehensive analytics dashboard with metrics, charts, and insights
 */
export default function AnalyticsPage() {
  const [exportModalOpen, setExportModalOpen] = useState(false)
  const [runAnalysisModalOpen, setRunAnalysisModalOpen] = useState(false)

  const handleStartAnalysis = (config: any) => {
    console.log('Starting analysis with config:', config)
    // Here you would typically:
    // 1. Send the config to your API
    // 2. Start the analysis process
    // 3. Update the UI to show the new running analysis
    // 4. Navigate to the running analytics section or show a success message
  }

  // Sample data - replace with real data from API
  const metrics = [
    {
      label: 'Total Analysis',
      value: '12,847',
      change: '+12.5%',
      trend: 'up' as const,
      icon: Activity,
      color: 'text-primary'
    },
    {
      label: 'Active Users',
      value: '3,429',
      change: '+8.2%',
      trend: 'up' as const,
      icon: Users,
      color: 'text-accent-green'
    },
    {
      label: 'Reports Generated',
      value: '8,392',
      change: '-2.4%',
      trend: 'down' as const,
      icon: FileText,
      color: 'text-accent-cyan'
    },
    {
      label: 'Avg. Processing Time',
      value: '2.4s',
      change: '-15.3%',
      trend: 'up' as const,
      icon: Clock,
      color: 'text-accent-purple'
    }
  ]

  const topPerformers = [
    { name: 'Sentiment Analysis', count: 3421, percentage: 28 },
    { name: 'Data Classification', count: 2847, percentage: 23 },
    { name: 'Trend Detection', count: 2103, percentage: 17 },
    { name: 'Anomaly Detection', count: 1876, percentage: 15 },
    { name: 'Predictive Modeling', count: 2145, percentage: 17 }
  ]

  const recentAnalytics = [
    { time: '2 min ago', type: 'Text Analysis', status: 'completed', accuracy: '98.5%' },
    { time: '5 min ago', type: 'Data Mining', status: 'completed', accuracy: '96.2%' },
    { time: '12 min ago', type: 'Pattern Recognition', status: 'processing', accuracy: '-' },
    { time: '18 min ago', type: 'Classification', status: 'completed', accuracy: '94.8%' },
    { time: '25 min ago', type: 'Clustering', status: 'completed', accuracy: '97.1%' }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
          <p className="text-gray-400">Comprehensive insights into your AI analysis performance</p>
        </div>
        <div className="flex gap-3">
          <Button 
            variant="secondary" 
            size="sm"
            onClick={() => setExportModalOpen(true)}
          >
            <Download className="w-4 h-4" />
            Export Report
          </Button>
          <Button 
            variant="primary" 
            size="sm"
            onClick={() => setRunAnalysisModalOpen(true)}
          >
            <Activity className="w-4 h-4" />
            Run Analysis
          </Button>
        </div>
      </div>

      {/* Key Metrics - Using Reusable Component */}
      <AnalyticsStats stats={metrics} />

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Top Performing Analysis Types */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold">Top Analysis Types</h2>
                <p className="text-sm text-gray-400">By usage count this month</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {topPerformers.map((item, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-sm text-gray-400">{item.count} analyses</span>
                </div>
                <div className="w-full bg-dark-elevated rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-primary to-accent-purple h-2 rounded-full transition-all"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Stats */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-cyan/20 rounded-lg flex items-center justify-center">
              <PieChart className="w-5 h-5 text-accent-cyan" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Quick Stats</h2>
              <p className="text-sm text-gray-400">Last 30 days</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-dark-elevated rounded-lg">
              <p className="text-sm text-gray-400 mb-1">Success Rate</p>
              <p className="text-2xl font-bold text-accent-green">96.8%</p>
            </div>
            <div className="p-4 bg-dark-elevated rounded-lg">
              <p className="text-sm text-gray-400 mb-1">Avg. Accuracy</p>
              <p className="text-2xl font-bold text-primary">94.5%</p>
            </div>
            <div className="p-4 bg-dark-elevated rounded-lg">
              <p className="text-sm text-gray-400 mb-1">Total Data Processed</p>
              <p className="text-2xl font-bold text-accent-purple">127.8 GB</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Running Analytics - New Component */}
      <RunningAnalytics />

      {/* Recent Analytics - New Component */}
      <RecentAnalytics 
        onView={(id) => console.log('View analytics:', id)}
        onDownload={(id) => console.log('Download analytics:', id)}
      />

      {/* Export Report Modal */}
      <ExportReportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        reportData={{
          title: 'Analytics Dashboard Report',
          type: 'comprehensive',
          records: 12847
        }}
      />

      {/* Run Analysis Modal */}
      <RunAnalysisModal
        isOpen={runAnalysisModalOpen}
        onClose={() => setRunAnalysisModalOpen(false)}
        onStart={handleStartAnalysis}
      />
    </div>
  )
}


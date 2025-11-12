import type { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import {
  ArrowLeft,
  Download,
  Share2,
  Clock,
  CheckCircle,
  FileText,
  BarChart3,
  TrendingUp,
  Activity,
  Copy,
  Trash2
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Analysis Details - AI Analysis Brain',
  description: 'View detailed analytics results and insights',
}

/**
 * Analytics Details Page
 * Detailed view of a specific analysis with results, charts, and actions
 */
export default function AnalyticsDetailsPage({ params }: { params: { id: string } }) {
  // In real app, fetch data based on params.id
  const analysisData = {
    id: params.id,
    title: 'Customer Sentiment Analysis',
    type: 'Text Analysis',
    status: 'completed',
    createdAt: '2024-02-14 10:30 AM',
    completedAt: '2024-02-14 10:32 AM',
    duration: '2m 34s',
    accuracy: '98.5%',
    records: 1247,
    dataSource: 'customer_feedback_2024.csv',
    insights: [
      { label: 'Positive Sentiments', value: '78%', color: 'text-accent-green' },
      { label: 'Neutral Sentiments', value: '15%', color: 'text-gray-400' },
      { label: 'Negative Sentiments', value: '7%', color: 'text-red-400' },
    ],
    keyFindings: [
      'Overall customer satisfaction is high with 78% positive feedback',
      'Product quality receives the most positive mentions',
      'Shipping speed is the primary concern in negative feedback',
      'Customer service response time shows improvement',
      'Mobile app experience has mixed reviews'
    ],
    recommendations: [
      'Focus on improving shipping logistics',
      'Enhance mobile app user interface',
      'Maintain current product quality standards',
      'Continue customer service improvements'
    ]
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <Link href="/dashboard/analytics">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to Analytics
          </Button>
        </Link>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{analysisData.title}</h1>
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <FileText className="w-4 h-4" />
                {analysisData.type}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {analysisData.createdAt}
              </span>
              <span>•</span>
              <span className="px-2 py-1 bg-accent-green/20 text-accent-green rounded text-xs font-medium">
                {analysisData.status}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="secondary" size="sm">
              <Share2 className="w-4 h-4" />
              Share
            </Button>
            <Button variant="secondary" size="sm">
              <Copy className="w-4 h-4" />
              Duplicate
            </Button>
            <Button variant="primary" size="sm">
              <Download className="w-4 h-4" />
              Download Report
            </Button>
          </div>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-accent-green" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Accuracy</p>
              <p className="text-2xl font-bold">{analysisData.accuracy}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Records</p>
              <p className="text-2xl font-bold">{analysisData.records.toLocaleString()}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-accent-purple" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Duration</p>
              <p className="text-2xl font-bold">{analysisData.duration}</p>
            </div>
          </div>
        </Card>

        <Card>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-accent-cyan/20 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-accent-cyan" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Data Source</p>
              <p className="text-sm font-semibold truncate">{analysisData.dataSource}</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Results Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Sentiment Distribution */}
        <Card className="lg:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Analysis Results</h2>
              <p className="text-sm text-gray-400">Sentiment distribution breakdown</p>
            </div>
          </div>

          <div className="space-y-6">
            {analysisData.insights.map((insight, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{insight.label}</span>
                  <span className={`text-xl font-bold ${insight.color}`}>
                    {insight.value}
                  </span>
                </div>
                <div className="w-full bg-dark-elevated rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${insight.color.replace('text-', 'bg-')}`}
                    style={{ width: insight.value }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Chart Placeholder */}
          <div className="mt-8 p-8 bg-dark-elevated rounded-xl border border-dark-border">
            <div className="text-center text-gray-400">
              <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Detailed chart visualization would appear here</p>
              <p className="text-sm mt-2">Connect to your charting library (Chart.js, Recharts, etc.)</p>
            </div>
          </div>
        </Card>

        {/* Insights Summary */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent-purple" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Quick Insights</h2>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-accent-green/10 border border-accent-green/20 rounded-lg">
              <p className="text-sm font-semibold text-accent-green mb-1">High Accuracy</p>
              <p className="text-xs text-gray-400">
                Analysis achieved {analysisData.accuracy} accuracy rating
              </p>
            </div>

            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm font-semibold text-primary mb-1">Large Dataset</p>
              <p className="text-xs text-gray-400">
                Processed {analysisData.records.toLocaleString()} records successfully
              </p>
            </div>

            <div className="p-4 bg-accent-cyan/10 border border-accent-cyan/20 rounded-lg">
              <p className="text-sm font-semibold text-accent-cyan mb-1">Fast Processing</p>
              <p className="text-xs text-gray-400">
                Completed in {analysisData.duration}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Key Findings */}
      <Card>
        <h2 className="text-xl font-semibold mb-6">Key Findings</h2>
        <ul className="space-y-3">
          {analysisData.keyFindings.map((finding, index) => (
            <li key={index} className="flex items-start gap-3 p-3 bg-dark-elevated rounded-lg">
              <CheckCircle className="w-5 h-5 text-accent-green flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{finding}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Recommendations */}
      <Card>
        <h2 className="text-xl font-semibold mb-6">AI Recommendations</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {analysisData.recommendations.map((recommendation, index) => (
            <div key={index} className="p-4 bg-dark-elevated rounded-lg border-l-4 border-primary">
              <p className="text-sm text-gray-300">{recommendation}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Actions */}
      <Card className="bg-dark-elevated">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-semibold mb-1">Export or Delete Analysis</h3>
            <p className="text-sm text-gray-400">Download results or permanently remove this analysis</p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary">
              <Download className="w-4 h-4" />
              Export Data
            </Button>
            <Button variant="secondary" className="text-red-400 hover:text-red-300 hover:bg-red-500/20">
              <Trash2 className="w-4 h-4" />
              Delete
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}



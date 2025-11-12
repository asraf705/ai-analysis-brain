'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  FileText,
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  Clock,
  Activity,
  RefreshCw,
  Download,
  Filter,
  Search
} from 'lucide-react'

/**
 * Analytics Logs Viewer Component
 * Real-time logging system for analytics operations
 */

interface LogEntry {
  id: string
  timestamp: string
  analyticsId: string
  analyticsTitle: string
  level: 'info' | 'success' | 'warning' | 'error'
  action: string
  message: string
  details?: string
}

export function AnalyticsLogsViewer() {
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [autoRefresh, setAutoRefresh] = useState(true)

  // Sample log entries - In production, fetch from API or real-time updates
  const logEntries: LogEntry[] = [
    {
      id: '1',
      timestamp: '2024-02-14 10:32:45',
      analyticsId: '1',
      analyticsTitle: 'Customer Sentiment Analysis',
      level: 'success',
      action: 'Analysis Completed',
      message: 'Successfully completed analysis with 98.5% accuracy',
      details: 'Processed 1,247 records in 2m 34s'
    },
    {
      id: '2',
      timestamp: '2024-02-14 10:32:30',
      analyticsId: '1',
      analyticsTitle: 'Customer Sentiment Analysis',
      level: 'info',
      action: 'Processing Data',
      message: 'Analyzing sentiment patterns...',
      details: 'Progress: 85% complete'
    },
    {
      id: '3',
      timestamp: '2024-02-14 10:32:15',
      analyticsId: '1',
      analyticsTitle: 'Customer Sentiment Analysis',
      level: 'info',
      action: 'Data Validation',
      message: 'Validating input data format',
      details: 'Verified 1,247 records, no errors found'
    },
    {
      id: '4',
      timestamp: '2024-02-14 10:32:00',
      analyticsId: '1',
      analyticsTitle: 'Customer Sentiment Analysis',
      level: 'info',
      action: 'Analysis Started',
      message: 'Initiated text sentiment analysis',
      details: 'Source: customer_feedback_2024.csv'
    },
    {
      id: '5',
      timestamp: '2024-02-13 03:45:20',
      analyticsId: '2',
      analyticsTitle: 'Sales Data Classification',
      level: 'success',
      action: 'Analysis Completed',
      message: 'Classification completed successfully',
      details: 'Processed 3,892 records with 96.2% accuracy in 5m 12s'
    },
    {
      id: '6',
      timestamp: '2024-02-13 03:40:08',
      analyticsId: '2',
      analyticsTitle: 'Sales Data Classification',
      level: 'info',
      action: 'Model Training',
      message: 'Training classification model...',
      details: 'Using random forest algorithm'
    },
    {
      id: '7',
      timestamp: '2024-02-12 11:20:35',
      analyticsId: '3',
      analyticsTitle: 'Pattern Recognition',
      level: 'error',
      action: 'Analysis Failed',
      message: 'Pattern recognition failed due to insufficient data',
      details: 'Error: Minimum 10,000 records required, found 5,621'
    },
    {
      id: '8',
      timestamp: '2024-02-12 11:19:50',
      analyticsId: '3',
      analyticsTitle: 'Pattern Recognition',
      level: 'warning',
      action: 'Data Warning',
      message: 'Dataset size below recommended threshold',
      details: 'Current: 5,621 records, Recommended: 10,000+'
    },
    {
      id: '9',
      timestamp: '2024-02-14 11:45:12',
      analyticsId: '6',
      analyticsTitle: 'Predictive Modeling',
      level: 'info',
      action: 'Processing',
      message: 'Currently running predictive analysis...',
      details: 'Progress: 67%, Est. 2m remaining'
    },
    {
      id: '10',
      timestamp: '2024-02-14 11:45:00',
      analyticsId: '6',
      analyticsTitle: 'Predictive Modeling',
      level: 'info',
      action: 'Analysis Started',
      message: 'Started predictive modeling for revenue forecast',
      details: 'Source: sales_data_q4.csv, Records: 4,521'
    },
    {
      id: '11',
      timestamp: '2024-02-14 10:28:00',
      analyticsId: '1',
      analyticsTitle: 'Customer Sentiment Analysis',
      level: 'info',
      action: 'File Uploaded',
      message: 'File uploaded successfully',
      details: 'File: customer_feedback_2024.csv, Size: 2.4 MB'
    },
    {
      id: '12',
      timestamp: '2024-02-13 03:35:00',
      analyticsId: '2',
      analyticsTitle: 'Sales Data Classification',
      level: 'info',
      action: 'Preprocessing',
      message: 'Data preprocessing and cleaning',
      details: 'Removed 23 duplicate records, normalized values'
    }
  ]

  // Filter logs
  const filteredLogs = logEntries.filter(log => {
    const matchesLevel = selectedLevel === 'all' || log.level === selectedLevel
    const matchesSearch = log.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.analyticsTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         log.action.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesLevel && matchesSearch
  })

  // Get log icon and color based on level
  const getLogStyle = (level: string) => {
    switch (level) {
      case 'success':
        return {
          icon: CheckCircle,
          color: 'text-accent-green',
          bgColor: 'bg-accent-green/10',
          borderColor: 'border-accent-green/20'
        }
      case 'error':
        return {
          icon: XCircle,
          color: 'text-red-400',
          bgColor: 'bg-red-400/10',
          borderColor: 'border-red-400/20'
        }
      case 'warning':
        return {
          icon: AlertCircle,
          color: 'text-accent-orange',
          bgColor: 'bg-accent-orange/10',
          borderColor: 'border-accent-orange/20'
        }
      default:
        return {
          icon: Info,
          color: 'text-primary',
          bgColor: 'bg-primary/10',
          borderColor: 'border-primary/20'
        }
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid sm:grid-cols-4 gap-6">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Total Logs</p>
              <p className="text-2xl font-bold">{logEntries.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-accent-green" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Success</p>
              <p className="text-2xl font-bold text-accent-green">
                {logEntries.filter(l => l.level === 'success').length}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-orange/20 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-accent-orange" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Warnings</p>
              <p className="text-2xl font-bold text-accent-orange">
                {logEntries.filter(l => l.level === 'warning').length}
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-400/20 rounded-lg flex items-center justify-center">
              <XCircle className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Errors</p>
              <p className="text-2xl font-bold text-red-400">
                {logEntries.filter(l => l.level === 'error').length}
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Filters and Controls */}
      <Card>
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search logs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-elevated border border-dark-border rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          {/* Level Filter */}
          <select
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
            className="bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
          >
            <option value="all">All Levels</option>
            <option value="info">Info</option>
            <option value="success">Success</option>
            <option value="warning">Warning</option>
            <option value="error">Error</option>
          </select>

          {/* Auto Refresh Toggle */}
          <Button
            variant={autoRefresh ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setAutoRefresh(!autoRefresh)}
          >
            <RefreshCw className={`w-4 h-4 ${autoRefresh ? 'animate-spin' : ''}`} />
            {autoRefresh ? 'Auto-Refresh On' : 'Auto-Refresh Off'}
          </Button>

          {/* Export Logs */}
          <Button variant="secondary" size="sm">
            <Download className="w-4 h-4" />
            Export Logs
          </Button>
        </div>

        <div className="mt-4 text-sm text-gray-400">
          Showing {filteredLogs.length} of {logEntries.length} log entries
          {autoRefresh && <span className="ml-2">• Auto-refreshing every 5 seconds</span>}
        </div>
      </Card>

      {/* Logs Timeline */}
      <Card>
        <div className="space-y-2">
          {filteredLogs.map((log) => {
            const style = getLogStyle(log.level)
            const Icon = style.icon

            return (
              <div
                key={log.id}
                className={`p-4 border-l-4 ${style.borderColor} ${style.bgColor} rounded-lg hover:bg-opacity-80 transition-all`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`w-8 h-8 rounded-lg ${style.bgColor} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4 h-4 ${style.color}`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-semibold uppercase ${style.color}`}>
                            {log.level}
                          </span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs font-medium text-gray-300">
                            {log.action}
                          </span>
                        </div>
                        <h3 className="font-semibold text-sm mb-1">
                          {log.analyticsTitle}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Clock className="w-3 h-3" />
                        <span>{log.timestamp}</span>
                      </div>
                    </div>

                    {/* Message */}
                    <p className="text-sm text-gray-300 mb-2">{log.message}</p>

                    {/* Details */}
                    {log.details && (
                      <div className="px-3 py-2 bg-dark-surface rounded text-xs text-gray-400 font-mono">
                        {log.details}
                      </div>
                    )}

                    {/* Analytics ID */}
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs text-gray-500">
                        Analytics ID: <code className="px-2 py-0.5 bg-dark-surface rounded">{log.analyticsId}</code>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredLogs.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4 opacity-50" />
            <p className="text-gray-400">No logs found matching your criteria</p>
          </div>
        )}

        {/* Load More */}
        {filteredLogs.length > 0 && (
          <div className="mt-6 text-center">
            <Button variant="secondary" fullWidth>
              Load More Logs
            </Button>
          </div>
        )}
      </Card>

      {/* Real-time Status */}
      <Card className="bg-gradient-to-br from-primary/10 to-accent-purple/10 border-primary/20">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-purple rounded-xl flex items-center justify-center">
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold mb-1">Real-time Monitoring Active</h3>
            <p className="text-sm text-gray-300">
              Logs are being monitored in real-time. New entries will appear automatically.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-accent-green rounded-full animate-pulse" />
            <span className="text-sm text-accent-green font-medium">Live</span>
          </div>
        </div>
      </Card>
    </div>
  )
}


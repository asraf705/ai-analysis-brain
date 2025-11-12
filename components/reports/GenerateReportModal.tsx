'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { X, FileText, Calendar, BarChart3, TrendingUp, Target, Play } from 'lucide-react'

/**
 * Generate Report Modal Component
 * Modal for creating new custom reports
 */

interface GenerateReportModalProps {
  isOpen: boolean
  onClose: () => void
}

export function GenerateReportModal({ isOpen, onClose }: GenerateReportModalProps) {
  const [selectedType, setSelectedType] = useState('analytics')
  const [dateRange, setDateRange] = useState({ from: '', to: '' })
  const [includeCharts, setIncludeCharts] = useState(true)
  const [includeRawData, setIncludeRawData] = useState(false)

  if (!isOpen) return null

  const reportTypes = [
    {
      id: 'analytics',
      name: 'Analytics Summary',
      icon: BarChart3,
      description: 'Complete analytics overview',
      color: 'text-primary'
    },
    {
      id: 'sentiment',
      name: 'Sentiment Analysis',
      icon: TrendingUp,
      description: 'Customer sentiment insights',
      color: 'text-accent-green'
    },
    {
      id: 'performance',
      name: 'Performance Report',
      icon: Target,
      description: 'Model performance metrics',
      color: 'text-accent-purple'
    }
  ]

  const handleGenerate = () => {
    const config = {
      type: selectedType,
      dateRange,
      options: {
        includeCharts,
        includeRawData
      }
    }
    console.log('Generating report with config:', config)
    alert('Report generation started! Check Reports page in a few moments.')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-dark-surface border border-dark-border rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-border sticky top-0 bg-dark-surface z-10">
          <div>
            <h2 className="text-2xl font-bold mb-1">Generate New Report</h2>
            <p className="text-sm text-gray-400">Create a custom analytics report</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 hover:bg-dark-hover rounded-lg transition-colors flex items-center justify-center">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Report Type */}
          <div>
            <label className="block text-sm font-semibold mb-3">Report Type</label>
            <div className="space-y-3">
              {reportTypes.map(type => {
                const Icon = type.icon
                return (
                  <label
                    key={type.id}
                    className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedType === type.id
                        ? 'border-primary bg-primary/10'
                        : 'border-dark-border hover:border-dark-hover'
                    }`}
                  >
                    <input
                      type="radio"
                      name="reportType"
                      checked={selectedType === type.id}
                      onChange={() => setSelectedType(type.id)}
                      className="w-5 h-5 accent-primary"
                    />
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedType === type.id ? 'bg-primary/20' : 'bg-dark-elevated'
                    }`}>
                      <Icon className={`w-5 h-5 ${selectedType === type.id ? type.color : 'text-gray-400'}`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium mb-1">{type.name}</div>
                      <p className="text-sm text-gray-400">{type.description}</p>
                    </div>
                  </label>
                )
              })}
            </div>
          </div>

          {/* Date Range */}
          <div>
            <label className="block text-sm font-semibold mb-3">Date Range</label>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 mb-2">From</label>
                <input
                  type="date"
                  value={dateRange.from}
                  onChange={(e) => setDateRange(prev => ({ ...prev, from: e.target.value }))}
                  className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">To</label>
                <input
                  type="date"
                  value={dateRange.to}
                  onChange={(e) => setDateRange(prev => ({ ...prev, to: e.target.value }))}
                  className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Options */}
          <div>
            <label className="block text-sm font-semibold mb-3">Report Options</label>
            <div className="space-y-3">
              <label className="flex items-start gap-3 p-4 bg-dark-elevated rounded-lg cursor-pointer hover:bg-dark-hover transition-colors">
                <input
                  type="checkbox"
                  checked={includeCharts}
                  onChange={(e) => setIncludeCharts(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-primary"
                />
                <div>
                  <div className="font-medium mb-1">Include Charts & Visualizations</div>
                  <p className="text-sm text-gray-400">Add graphical representations to the report</p>
                </div>
              </label>

              <label className="flex items-start gap-3 p-4 bg-dark-elevated rounded-lg cursor-pointer hover:bg-dark-hover transition-colors">
                <input
                  type="checkbox"
                  checked={includeRawData}
                  onChange={(e) => setIncludeRawData(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-primary"
                />
                <div>
                  <div className="font-medium mb-1">Include Raw Data Tables</div>
                  <p className="text-sm text-gray-400">Include detailed data tables in the report</p>
                </div>
              </label>
            </div>
          </div>

          {/* Summary */}
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <h3 className="font-semibold text-primary mb-2">Report Summary</h3>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>• Type: {reportTypes.find(t => t.id === selectedType)?.name}</li>
              <li>• Date Range: {dateRange.from || 'Not set'} to {dateRange.to || 'Not set'}</li>
              <li>• Charts: {includeCharts ? 'Included' : 'Not included'}</li>
              <li>• Raw Data: {includeRawData ? 'Included' : 'Not included'}</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-dark-border sticky bottom-0 bg-dark-surface">
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handleGenerate}>
            <Play className="w-4 h-4" />
            Generate Report
          </Button>
        </div>
      </div>
    </div>
  )
}


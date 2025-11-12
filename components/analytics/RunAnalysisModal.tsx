'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { 
  X, 
  Play, 
  Brain, 
  TrendingUp, 
  Target,
  Sparkles,
  FileText,
  Database,
  Upload
} from 'lucide-react'

/**
 * Run Analysis Modal Component
 * Modal for starting new AI analysis with configuration options
 */

interface RunAnalysisModalProps {
  isOpen: boolean
  onClose: () => void
  onStart?: (config: AnalysisConfig) => void
}

interface AnalysisConfig {
  type: string
  dataSource: string
  options: {
    includeVisualization: boolean
    generateReport: boolean
    notifyOnComplete: boolean
  }
}

export function RunAnalysisModal({ isOpen, onClose, onStart }: RunAnalysisModalProps) {
  const [selectedType, setSelectedType] = useState('sentiment')
  const [selectedSource, setSelectedSource] = useState('upload')
  const [includeVisualization, setIncludeVisualization] = useState(true)
  const [generateReport, setGenerateReport] = useState(true)
  const [notifyOnComplete, setNotifyOnComplete] = useState(false)

  if (!isOpen) return null

  const analysisTypes = [
    {
      id: 'sentiment',
      name: 'Sentiment Analysis',
      icon: Brain,
      description: 'Analyze emotions and opinions in text',
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    {
      id: 'trend',
      name: 'Trend Detection',
      icon: TrendingUp,
      description: 'Identify patterns and trends in data',
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10'
    },
    {
      id: 'classification',
      name: 'Data Classification',
      icon: Target,
      description: 'Categorize and organize data',
      color: 'text-accent-cyan',
      bgColor: 'bg-accent-cyan/10'
    },
    {
      id: 'prediction',
      name: 'Predictive Analysis',
      icon: Sparkles,
      description: 'Forecast future outcomes',
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10'
    }
  ]

  const dataSources = [
    {
      id: 'upload',
      name: 'Upload New File',
      icon: Upload,
      description: 'Upload a file to analyze'
    },
    {
      id: 'existing',
      name: 'Existing Files',
      icon: FileText,
      description: 'Use previously uploaded files'
    },
    {
      id: 'database',
      name: 'Database Connection',
      icon: Database,
      description: 'Connect to external database'
    }
  ]

  const handleStart = () => {
    const config: AnalysisConfig = {
      type: selectedType,
      dataSource: selectedSource,
      options: {
        includeVisualization,
        generateReport,
        notifyOnComplete
      }
    }

    if (onStart) {
      onStart(config)
    } else {
      console.log('Starting analysis with config:', config)
    }
    
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-dark-surface border border-dark-border rounded-2xl shadow-2xl max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-border sticky top-0 bg-dark-surface z-10">
          <div>
            <h2 className="text-2xl font-bold mb-1">Run New Analysis</h2>
            <p className="text-sm text-gray-400">
              Configure and start AI-powered data analysis
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 hover:bg-dark-hover rounded-lg transition-colors flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Analysis Type Selection */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Select Analysis Type
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {analysisTypes.map((type) => {
                const Icon = type.icon
                return (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`
                      p-4 rounded-xl border-2 transition-all text-left
                      ${selectedType === type.id
                        ? 'border-primary bg-primary/10'
                        : 'border-dark-border hover:border-dark-hover'
                      }
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        selectedType === type.id ? type.bgColor : 'bg-dark-elevated'
                      }`}>
                        <Icon className={`w-6 h-6 ${
                          selectedType === type.id ? type.color : 'text-gray-400'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{type.name}</h3>
                        <p className="text-xs text-gray-400">{type.description}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Data Source Selection */}
          <div>
            <label className="block text-sm font-semibold mb-3">
              Select Data Source
            </label>
            <div className="space-y-3">
              {dataSources.map((source) => {
                const Icon = source.icon
                return (
                  <label
                    key={source.id}
                    className={`
                      flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all
                      ${selectedSource === source.id
                        ? 'border-primary bg-primary/5'
                        : 'border-dark-border hover:border-dark-hover'
                      }
                    `}
                  >
                    <input
                      type="radio"
                      name="dataSource"
                      checked={selectedSource === source.id}
                      onChange={() => setSelectedSource(source.id)}
                      className="w-5 h-5 accent-primary"
                    />
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      selectedSource === source.id ? 'bg-primary/20' : 'bg-dark-elevated'
                    }`}>
                      <Icon className={`w-5 h-5 ${
                        selectedSource === source.id ? 'text-primary' : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium mb-1">{source.name}</div>
                      <p className="text-sm text-gray-400">{source.description}</p>
                    </div>
                  </label>
                )
              })}
            </div>
          </div>

          {/* File Upload (if upload is selected) */}
          {selectedSource === 'upload' && (
            <div className="p-6 border-2 border-dashed border-dark-border rounded-xl hover:border-primary/50 transition-colors">
              <div className="text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <h3 className="font-semibold mb-1">Drop your file here</h3>
                <p className="text-sm text-gray-400 mb-4">
                  or click to browse from your computer
                </p>
                <Button variant="secondary" size="sm">
                  Choose File
                </Button>
                <p className="text-xs text-gray-500 mt-3">
                  Supported: CSV, Excel, JSON, PDF (Max: 50MB)
                </p>
              </div>
            </div>
          )}

          {/* Options */}
          <div>
            <label className="block text-sm font-semibold mb-3">Analysis Options</label>
            <div className="space-y-3">
              <label className="flex items-start gap-3 p-4 bg-dark-elevated rounded-lg cursor-pointer hover:bg-dark-hover transition-colors">
                <input
                  type="checkbox"
                  checked={includeVisualization}
                  onChange={(e) => setIncludeVisualization(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-primary"
                />
                <div>
                  <div className="font-medium mb-1">Include Visualizations</div>
                  <p className="text-sm text-gray-400">
                    Generate charts and graphs for visual insights
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 p-4 bg-dark-elevated rounded-lg cursor-pointer hover:bg-dark-hover transition-colors">
                <input
                  type="checkbox"
                  checked={generateReport}
                  onChange={(e) => setGenerateReport(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-primary"
                />
                <div>
                  <div className="font-medium mb-1">Generate Report</div>
                  <p className="text-sm text-gray-400">
                    Create a comprehensive PDF report of findings
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 p-4 bg-dark-elevated rounded-lg cursor-pointer hover:bg-dark-hover transition-colors">
                <input
                  type="checkbox"
                  checked={notifyOnComplete}
                  onChange={(e) => setNotifyOnComplete(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-primary"
                />
                <div>
                  <div className="font-medium mb-1">Notify When Complete</div>
                  <p className="text-sm text-gray-400">
                    Send email notification when analysis is finished
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Configuration Summary */}
          <div className="p-4 bg-gradient-to-br from-primary/10 to-accent-purple/10 border border-primary/20 rounded-lg">
            <h3 className="font-semibold mb-3 text-primary flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Configuration Summary
            </h3>
            <ul className="text-sm space-y-1.5 text-gray-300">
              <li>
                • <strong>Type:</strong> {analysisTypes.find(t => t.id === selectedType)?.name}
              </li>
              <li>
                • <strong>Source:</strong> {dataSources.find(s => s.id === selectedSource)?.name}
              </li>
              <li>
                • <strong>Visualizations:</strong> {includeVisualization ? 'Yes' : 'No'}
              </li>
              <li>
                • <strong>Report:</strong> {generateReport ? 'Yes' : 'No'}
              </li>
              <li>
                • <strong>Notifications:</strong> {notifyOnComplete ? 'Enabled' : 'Disabled'}
              </li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-dark-border sticky bottom-0 bg-dark-surface">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleStart}>
            <Play className="w-4 h-4" />
            Start Analysis
          </Button>
        </div>
      </div>
    </div>
  )
}


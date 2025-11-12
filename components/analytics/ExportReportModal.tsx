'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { X, Download, FileText, Table, Code, Image } from 'lucide-react'

/**
 * Export Report Modal Component
 * Reusable modal for exporting analytics reports
 */

interface ExportReportModalProps {
  isOpen: boolean
  onClose: () => void
  reportData?: {
    title: string
    type: string
    records: number
  }
}

export function ExportReportModal({ isOpen, onClose, reportData }: ExportReportModalProps) {
  const [selectedFormat, setSelectedFormat] = useState('pdf')
  const [includeCharts, setIncludeCharts] = useState(true)
  const [includeRawData, setIncludeRawData] = useState(false)

  if (!isOpen) return null

  const formats = [
    { id: 'pdf', name: 'PDF', icon: FileText, description: 'Formatted report' },
    { id: 'csv', name: 'CSV', icon: Table, description: 'Spreadsheet data' },
    { id: 'json', name: 'JSON', icon: Code, description: 'Structured data' },
    { id: 'png', name: 'PNG', icon: Image, description: 'Chart images' }
  ]

  const handleExport = () => {
    // Export logic here
    console.log('Exporting:', { selectedFormat, includeCharts, includeRawData })
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
      <div className="relative bg-dark-surface border border-dark-border rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-border sticky top-0 bg-dark-surface z-10">
          <div>
            <h2 className="text-2xl font-bold mb-1">Export Report</h2>
            <p className="text-sm text-gray-400">
              {reportData?.title || 'Analytics Report'} • {reportData?.records || 0} records
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
          {/* Format Selection */}
          <div>
            <label className="block text-sm font-semibold mb-3">Select Format</label>
            <div className="grid grid-cols-2 gap-3">
              {formats.map((format) => {
                const Icon = format.icon
                return (
                  <button
                    key={format.id}
                    onClick={() => setSelectedFormat(format.id)}
                    className={`
                      p-4 rounded-xl border-2 transition-all text-left
                      ${selectedFormat === format.id
                        ? 'border-primary bg-primary/10'
                        : 'border-dark-border hover:border-dark-hover'
                      }
                    `}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        selectedFormat === format.id ? 'bg-primary/20' : 'bg-dark-elevated'
                      }`}>
                        <Icon className={`w-5 h-5 ${
                          selectedFormat === format.id ? 'text-primary' : 'text-gray-400'
                        }`} />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{format.name}</h3>
                        <p className="text-xs text-gray-400">{format.description}</p>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Options */}
          <div>
            <label className="block text-sm font-semibold mb-3">Export Options</label>
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
                  <p className="text-sm text-gray-400">Export graphical representations of data</p>
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
                  <div className="font-medium mb-1">Include Raw Data</div>
                  <p className="text-sm text-gray-400">Include detailed data tables in export</p>
                </div>
              </label>
            </div>
          </div>

          {/* Preview Info */}
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <h3 className="font-semibold mb-2 text-primary">Export Summary</h3>
            <ul className="text-sm space-y-1 text-gray-300">
              <li>• Format: {formats.find(f => f.id === selectedFormat)?.name}</li>
              <li>• Records: {reportData?.records || 0}</li>
              <li>• Charts: {includeCharts ? 'Included' : 'Not included'}</li>
              <li>• Raw Data: {includeRawData ? 'Included' : 'Not included'}</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-dark-border sticky bottom-0 bg-dark-surface">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleExport}>
            <Download className="w-4 h-4" />
            Export Report
          </Button>
        </div>
      </div>
    </div>
  )
}


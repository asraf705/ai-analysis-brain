'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { X, Download, FileText, Table, Code, Image, CheckCircle } from 'lucide-react'

/**
 * Download Modal Component
 * Modal for downloading analytics results in various formats
 */

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
  analysisData?: {
    id: string
    title: string
    type: string
  }
}

export function DownloadModal({ isOpen, onClose, analysisData }: DownloadModalProps) {
  const [selectedFormats, setSelectedFormats] = useState<string[]>(['pdf'])

  if (!isOpen) return null

  const formats = [
    {
      id: 'pdf',
      name: 'PDF Report',
      icon: FileText,
      description: 'Complete formatted report',
      size: '~2.4 MB'
    },
    {
      id: 'csv',
      name: 'CSV Data',
      icon: Table,
      description: 'Raw data in spreadsheet format',
      size: '~850 KB'
    },
    {
      id: 'json',
      name: 'JSON Data',
      icon: Code,
      description: 'Structured data for API use',
      size: '~1.2 MB'
    },
    {
      id: 'charts',
      name: 'Chart Images',
      icon: Image,
      description: 'Visualization as PNG files',
      size: '~3.5 MB'
    }
  ]

  const toggleFormat = (formatId: string) => {
    setSelectedFormats(prev =>
      prev.includes(formatId)
        ? prev.filter(id => id !== formatId)
        : [...prev, formatId]
    )
  }

  const handleDownload = () => {
    console.log('Downloading formats:', selectedFormats)
    // Implement actual download logic
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
      <div className="relative bg-dark-surface border border-dark-border rounded-2xl shadow-2xl max-w-2xl w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-border">
          <div>
            <h2 className="text-2xl font-bold mb-1">Download Analysis</h2>
            <p className="text-sm text-gray-400">
              {analysisData?.title || 'Select formats to download'}
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
        <div className="p-6 space-y-4">
          <p className="text-sm text-gray-400 mb-4">
            Select one or more formats to download your analysis results:
          </p>

          {formats.map((format) => {
            const Icon = format.icon
            const isSelected = selectedFormats.includes(format.id)
            
            return (
              <button
                key={format.id}
                onClick={() => toggleFormat(format.id)}
                className={`
                  w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all text-left
                  ${isSelected
                    ? 'border-primary bg-primary/10'
                    : 'border-dark-border hover:border-dark-hover'
                  }
                `}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  isSelected ? 'bg-primary/20' : 'bg-dark-elevated'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    isSelected ? 'text-primary' : 'text-gray-400'
                  }`} />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{format.name}</h3>
                  <p className="text-xs text-gray-400">{format.description}</p>
                </div>

                <div className="text-right">
                  <p className="text-sm text-gray-400">{format.size}</p>
                  {isSelected && (
                    <CheckCircle className="w-5 h-5 text-primary mt-1 ml-auto" />
                  )}
                </div>
              </button>
            )
          })}

          {selectedFormats.length > 0 && (
            <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm font-semibold text-primary mb-2">
                Ready to Download
              </p>
              <p className="text-xs text-gray-400">
                {selectedFormats.length} format(s) selected • Estimated size: {
                  selectedFormats.reduce((total, id) => {
                    const format = formats.find(f => f.id === id)
                    const size = parseFloat(format?.size.replace(/[^\d.]/g, '') || '0')
                    return total + size
                  }, 0).toFixed(1)
                } MB
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-dark-border">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleDownload}
            disabled={selectedFormats.length === 0}
          >
            <Download className="w-4 h-4" />
            Download {selectedFormats.length > 0 && `(${selectedFormats.length})`}
          </Button>
        </div>
      </div>
    </div>
  )
}



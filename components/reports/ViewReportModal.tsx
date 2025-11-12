'use client'

import { Button } from '@/components/ui/Button'
import { X, Download, Share2, FileText, Calendar, Activity, CheckCircle } from 'lucide-react'

/**
 * View Report Modal Component
 * Modal for viewing report details and preview
 */

interface ViewReportModalProps {
  isOpen: boolean
  onClose: () => void
  report?: any
}

export function ViewReportModal({ isOpen, onClose, report }: ViewReportModalProps) {
  if (!isOpen || !report) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-dark-surface border border-dark-border rounded-2xl shadow-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-border sticky top-0 bg-dark-surface z-10">
          <div>
            <h2 className="text-2xl font-bold mb-1">{report.title}</h2>
            <p className="text-sm text-gray-400">Report ID: {report.id}</p>
          </div>
          <button onClick={onClose} className="w-10 h-10 hover:bg-dark-hover rounded-lg transition-colors flex items-center justify-center">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Report Info */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-4 bg-dark-elevated rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Status</p>
              <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                report.status === 'ready' ? 'bg-accent-green/20 text-accent-green' : 'bg-accent-orange/20 text-accent-orange'
              }`}>
                {report.status}
              </span>
            </div>
            <div className="p-4 bg-dark-elevated rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Date</p>
              <p className="text-sm font-semibold">{report.date}</p>
            </div>
            <div className="p-4 bg-dark-elevated rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Size</p>
              <p className="text-sm font-semibold">{report.size}</p>
            </div>
            <div className="p-4 bg-dark-elevated rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Accuracy</p>
              <p className="text-sm font-semibold text-accent-green">{report.accuracy}</p>
            </div>
          </div>

          {/* Report Details */}
          <div className="p-6 bg-dark-elevated rounded-xl border border-dark-border">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              Report Summary
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400 mb-1">Type</p>
                <p className="font-medium">{report.type}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Records Analyzed</p>
                <p className="font-medium">{report.records.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">Generated On</p>
                <p className="font-medium">{report.date}</p>
              </div>
              <div>
                <p className="text-gray-400 mb-1">File Size</p>
                <p className="font-medium">{report.size}</p>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="p-8 bg-dark-elevated rounded-xl border border-dark-border">
            <div className="text-center text-gray-400">
              <FileText className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="mb-2">Report Preview</p>
              <p className="text-sm">
                Full report preview would be displayed here with charts, tables, and insights
              </p>
            </div>
          </div>

          {/* Key Metrics */}
          <div>
            <h3 className="font-semibold mb-4">Key Metrics</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <p className="text-xs text-gray-400">Overall Accuracy</p>
                </div>
                <p className="text-2xl font-bold text-primary">{report.accuracy}</p>
              </div>
              <div className="p-4 bg-accent-green/10 border border-accent-green/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-4 h-4 text-accent-green" />
                  <p className="text-xs text-gray-400">Total Records</p>
                </div>
                <p className="text-2xl font-bold text-accent-green">{report.records.toLocaleString()}</p>
              </div>
              <div className="p-4 bg-accent-purple/10 border border-accent-purple/20 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-accent-purple" />
                  <p className="text-xs text-gray-400">Generated</p>
                </div>
                <p className="text-sm font-bold text-accent-purple">{report.date}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-dark-border sticky bottom-0 bg-dark-surface">
          <Button variant="secondary" onClick={onClose}>Close</Button>
          <Button variant="secondary">
            <Share2 className="w-4 h-4" />
            Share
          </Button>
          {report.status === 'ready' && (
            <Button variant="primary" onClick={() => alert(`Downloading ${report.title}...`)}>
              <Download className="w-4 h-4" />
              Download
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}


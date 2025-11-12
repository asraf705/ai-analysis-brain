'use client'

import { Button } from '@/components/ui/Button'
import { X, Copy, Download, CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react'

/**
 * Log Detail Modal Component
 * Detailed view of a single log entry
 */

interface LogDetailModalProps {
  isOpen: boolean
  onClose: () => void
  logData?: {
    id: string
    timestamp: string
    analyticsId: string
    analyticsTitle: string
    level: 'info' | 'success' | 'warning' | 'error'
    action: string
    message: string
    details?: string
    stackTrace?: string
  }
}

export function LogDetailModal({ isOpen, onClose, logData }: LogDetailModalProps) {
  if (!isOpen || !logData) return null

  const getIcon = () => {
    switch (logData.level) {
      case 'success': return <CheckCircle className="w-6 h-6 text-accent-green" />
      case 'error': return <XCircle className="w-6 h-6 text-red-400" />
      case 'warning': return <AlertCircle className="w-6 h-6 text-accent-orange" />
      default: return <Info className="w-6 h-6 text-primary" />
    }
  }

  const getColor = () => {
    switch (logData.level) {
      case 'success': return 'text-accent-green'
      case 'error': return 'text-red-400'
      case 'warning': return 'text-accent-orange'
      default: return 'text-primary'
    }
  }

  const copyToClipboard = () => {
    const logText = JSON.stringify(logData, null, 2)
    navigator.clipboard.writeText(logText)
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
          <div className="flex items-center gap-3">
            {getIcon()}
            <div>
              <h2 className="text-xl font-bold">Log Details</h2>
              <p className={`text-sm font-semibold uppercase ${getColor()}`}>
                {logData.level}
              </p>
            </div>
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
          {/* Analytics Info */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
              Analytics
            </label>
            <p className="text-lg font-semibold">{logData.analyticsTitle}</p>
            <p className="text-sm text-gray-400">ID: {logData.analyticsId}</p>
          </div>

          {/* Timestamp */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
              Timestamp
            </label>
            <p className="font-mono text-sm">{logData.timestamp}</p>
          </div>

          {/* Action */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
              Action
            </label>
            <p className="font-semibold">{logData.action}</p>
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
              Message
            </label>
            <p className="text-gray-300">{logData.message}</p>
          </div>

          {/* Details */}
          {logData.details && (
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
                Details
              </label>
              <div className="p-4 bg-dark-elevated rounded-lg border border-dark-border">
                <p className="font-mono text-sm text-gray-300">{logData.details}</p>
              </div>
            </div>
          )}

          {/* Stack Trace (if error) */}
          {logData.stackTrace && (
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
                Stack Trace
              </label>
              <div className="p-4 bg-dark-elevated rounded-lg border border-dark-border overflow-x-auto">
                <pre className="font-mono text-xs text-red-300">{logData.stackTrace}</pre>
              </div>
            </div>
          )}

          {/* JSON View */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">
              Raw JSON
            </label>
            <div className="p-4 bg-dark-elevated rounded-lg border border-dark-border overflow-x-auto">
              <pre className="font-mono text-xs text-gray-300">
                {JSON.stringify(logData, null, 2)}
              </pre>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-dark-border sticky bottom-0 bg-dark-surface">
          <Button variant="secondary" onClick={copyToClipboard}>
            <Copy className="w-4 h-4" />
            Copy Log
          </Button>
          <Button variant="secondary">
            <Download className="w-4 h-4" />
            Download
          </Button>
          <Button variant="primary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}


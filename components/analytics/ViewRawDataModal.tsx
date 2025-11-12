'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { X, Database, Download, Search, Filter } from 'lucide-react'

/**
 * View Raw Data Modal Component
 * Modal for viewing and exploring raw analysis data
 */

interface ViewRawDataModalProps {
  isOpen: boolean
  onClose: () => void
  analysisData?: {
    id: string
    title: string
    records: number
  }
}

export function ViewRawDataModal({ isOpen, onClose, analysisData }: ViewRawDataModalProps) {
  const [searchQuery, setSearchQuery] = useState('')

  if (!isOpen) return null

  // Sample raw data (in real app, fetch from API)
  const sampleData = [
    { id: 1, text: 'Great product! Very satisfied with the purchase.', sentiment: 'Positive', score: 0.95 },
    { id: 2, text: 'Shipping was slower than expected.', sentiment: 'Negative', score: 0.72 },
    { id: 3, text: 'Average quality, nothing special.', sentiment: 'Neutral', score: 0.45 },
    { id: 4, text: 'Excellent customer service and support!', sentiment: 'Positive', score: 0.98 },
    { id: 5, text: 'Good value for money.', sentiment: 'Positive', score: 0.88 },
    { id: 6, text: 'Product arrived damaged, disappointed.', sentiment: 'Negative', score: 0.15 },
    { id: 7, text: 'Works as described, no complaints.', sentiment: 'Neutral', score: 0.52 },
    { id: 8, text: 'Highly recommend to others!', sentiment: 'Positive', score: 0.97 },
  ]

  const filteredData = sampleData.filter(item =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-dark-surface border border-dark-border rounded-2xl shadow-2xl max-w-5xl w-full mx-4 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-border flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-cyan/20 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-accent-cyan" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Raw Data</h2>
              <p className="text-sm text-gray-400">
                {analysisData?.title || 'Analysis Data'} • {analysisData?.records || 0} records
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

        {/* Search and Filters */}
        <div className="p-6 border-b border-dark-border flex-shrink-0">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search data..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-elevated border border-dark-border rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <Button variant="secondary">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
            <Button variant="secondary">
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Data Table */}
        <div className="flex-1 overflow-auto p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="sticky top-0 bg-dark-surface">
                <tr className="border-b border-dark-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Text</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Sentiment</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-400">Score</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row) => (
                  <tr key={row.id} className="border-b border-dark-border/50 hover:bg-dark-hover transition-colors">
                    <td className="py-3 px-4 text-sm text-gray-400">#{row.id}</td>
                    <td className="py-3 px-4 text-sm">{row.text}</td>
                    <td className="py-3 px-4">
                      <span className={`
                        px-2 py-1 rounded text-xs font-medium
                        ${row.sentiment === 'Positive' && 'bg-accent-green/20 text-accent-green'}
                        ${row.sentiment === 'Neutral' && 'bg-gray-500/20 text-gray-400'}
                        ${row.sentiment === 'Negative' && 'bg-red-400/20 text-red-400'}
                      `}>
                        {row.sentiment}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm font-medium">{row.score.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No data matches your search</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center p-6 border-t border-dark-border flex-shrink-0">
          <p className="text-sm text-gray-400">
            Showing {filteredData.length} of {sampleData.length} records
          </p>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button variant="primary">
              <Download className="w-4 h-4" />
              Export Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}


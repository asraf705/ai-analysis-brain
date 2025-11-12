'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { X, Calendar, Check } from 'lucide-react'

/**
 * Date Range Modal Component
 * Modal for selecting date range filter
 */

interface DateRangeModalProps {
  isOpen: boolean
  onClose: () => void
  onApply: (range: { from: string; to: string }) => void
  currentRange?: { from: string; to: string }
}

export function DateRangeModal({ isOpen, onClose, onApply, currentRange }: DateRangeModalProps) {
  const [from, setFrom] = useState(currentRange?.from || '')
  const [to, setTo] = useState(currentRange?.to || '')

  if (!isOpen) return null

  const handleApply = () => {
    onApply({ from, to })
  }

  const handleClear = () => {
    setFrom('')
    setTo('')
    onApply({ from: '', to: '' })
  }

  // Quick date presets
  const presets = [
    { label: 'Last 7 Days', days: 7 },
    { label: 'Last 30 Days', days: 30 },
    { label: 'Last 3 Months', days: 90 },
    { label: 'This Year', days: 365 }
  ]

  const applyPreset = (days: number) => {
    const today = new Date()
    const past = new Date(today.getTime() - days * 24 * 60 * 60 * 1000)
    const toDate = today.toISOString().split('T')[0]
    const fromDate = past.toISOString().split('T')[0]
    setFrom(fromDate)
    setTo(toDate)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-dark-surface border border-dark-border rounded-2xl shadow-2xl max-w-lg w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Select Date Range</h2>
              <p className="text-sm text-gray-400">Filter reports by date</p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 hover:bg-dark-hover rounded-lg transition-colors flex items-center justify-center">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Quick Presets */}
          <div>
            <label className="block text-sm font-semibold mb-3">Quick Select</label>
            <div className="grid grid-cols-2 gap-3">
              {presets.map(preset => (
                <button
                  key={preset.label}
                  onClick={() => applyPreset(preset.days)}
                  className="px-4 py-2 bg-dark-elevated hover:bg-dark-hover rounded-lg text-sm transition-colors text-left"
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Date Range */}
          <div>
            <label className="block text-sm font-semibold mb-3">Custom Range</label>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 mb-2">From Date</label>
                <input
                  type="date"
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">To Date</label>
                <input
                  type="date"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Selected Range Preview */}
          {(from || to) && (
            <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-sm text-primary font-medium mb-1">Selected Range</p>
              <p className="text-sm text-gray-300">
                {from || 'Start'} → {to || 'End'}
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-dark-border">
          <Button variant="secondary" onClick={handleClear}>Clear</Button>
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handleApply}>
            <Check className="w-4 h-4" />
            Apply
          </Button>
        </div>
      </div>
    </div>
  )
}


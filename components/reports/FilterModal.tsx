'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { X, Filter, Check } from 'lucide-react'

/**
 * Filter Modal Component
 * Modal for filtering reports by type and status
 */

interface FilterModalProps {
  isOpen: boolean
  onClose: () => void
  onApply: (filters: { type: string; status: string }) => void
  types: string[]
  currentFilters?: { type: string; status: string }
}

export function FilterModal({ isOpen, onClose, onApply, types, currentFilters }: FilterModalProps) {
  const [selectedType, setSelectedType] = useState(currentFilters?.type || 'all')
  const [selectedStatus, setSelectedStatus] = useState(currentFilters?.status || 'all')

  if (!isOpen) return null

  const handleApply = () => {
    onApply({ type: selectedType, status: selectedStatus })
  }

  const handleClear = () => {
    setSelectedType('all')
    setSelectedStatus('all')
    onApply({ type: 'all', status: 'all' })
  }

  const statuses = ['all', 'ready', 'processing', 'failed']

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative bg-dark-surface border border-dark-border rounded-2xl shadow-2xl max-w-md w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Filter className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Filter Reports</h2>
              <p className="text-sm text-gray-400">Refine your results</p>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 hover:bg-dark-hover rounded-lg transition-colors flex items-center justify-center">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Type Filter */}
          <div>
            <label className="block text-sm font-semibold mb-3">Report Type</label>
            <div className="space-y-2">
              {types.map(type => (
                <label
                  key={type}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                    selectedType === type
                      ? 'bg-primary/20 border-2 border-primary'
                      : 'bg-dark-elevated hover:bg-dark-hover border-2 border-transparent'
                  }`}
                >
                  <input
                    type="radio"
                    name="type"
                    checked={selectedType === type}
                    onChange={() => setSelectedType(type)}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="flex-1 capitalize">
                    {type === 'all' ? 'All Types' : type}
                  </span>
                  {selectedType === type && <Check className="w-4 h-4 text-primary" />}
                </label>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-semibold mb-3">Status</label>
            <div className="space-y-2">
              {statuses.map(status => (
                <label
                  key={status}
                  className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                    selectedStatus === status
                      ? 'bg-primary/20 border-2 border-primary'
                      : 'bg-dark-elevated hover:bg-dark-hover border-2 border-transparent'
                  }`}
                >
                  <input
                    type="radio"
                    name="status"
                    checked={selectedStatus === status}
                    onChange={() => setSelectedStatus(status)}
                    className="w-4 h-4 accent-primary"
                  />
                  <span className="flex-1 capitalize">
                    {status === 'all' ? 'All Status' : status}
                  </span>
                  {selectedStatus === status && <Check className="w-4 h-4 text-primary" />}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-dark-border">
          <Button variant="secondary" onClick={handleClear}>Clear All</Button>
          <Button variant="secondary" onClick={onClose}>Cancel</Button>
          <Button variant="primary" onClick={handleApply}>
            <Check className="w-4 h-4" />
            Apply Filters
          </Button>
        </div>
      </div>
    </div>
  )
}


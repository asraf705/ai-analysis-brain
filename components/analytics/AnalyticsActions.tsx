'use client'

import { useState, useRef, useEffect } from 'react'
import {
  MoreVertical,
  Eye,
  Download,
  Share2,
  Copy,
  Trash2,
  RefreshCw,
  FileText,
  Mail
} from 'lucide-react'

/**
 * Analytics Actions Component
 * Dropdown menu with actions for analytics items
 */

interface AnalyticsActionsProps {
  analysisId: string
  onView?: (id: string) => void
  onDownload?: (id: string) => void
  onShare?: (id: string) => void
  onDuplicate?: (id: string) => void
  onDelete?: (id: string) => void
  onRerun?: (id: string) => void
  onEmail?: (id: string) => void
  onViewRawData?: (id: string) => void
}

export function AnalyticsActions({
  analysisId,
  onView,
  onDownload,
  onShare,
  onDuplicate,
  onDelete,
  onRerun,
  onEmail,
  onViewRawData
}: AnalyticsActionsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleAction = (callback?: (id: string) => void) => {
    if (callback) {
      callback(analysisId)
    } else {
      console.log('Action for:', analysisId)
    }
    setIsOpen(false)
  }

  const actions = [
    {
      icon: Eye,
      label: 'View Details',
      onClick: () => handleAction(onView),
      color: 'hover:text-primary'
    },
    {
      icon: Download,
      label: 'Download',
      onClick: () => handleAction(onDownload),
      color: 'hover:text-accent-cyan'
    },
    {
      icon: Share2,
      label: 'Share',
      onClick: () => handleAction(onShare),
      color: 'hover:text-accent-purple'
    },
    {
      icon: Copy,
      label: 'Duplicate',
      onClick: () => handleAction(onDuplicate),
      color: 'hover:text-accent-green'
    },
    {
      icon: Mail,
      label: 'Email Report',
      onClick: () => handleAction(onEmail),
      color: 'hover:text-accent-cyan'
    },
    {
      icon: RefreshCw,
      label: 'Re-run Analysis',
      onClick: () => handleAction(onRerun),
      color: 'hover:text-accent-orange'
    },
    {
      icon: FileText,
      label: 'View Raw Data',
      onClick: () => handleAction(onViewRawData),
      color: 'hover:text-gray-300'
    },
    {
      icon: Trash2,
      label: 'Delete',
      onClick: () => handleAction(onDelete),
      color: 'hover:text-red-400',
      divider: true
    }
  ]

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 hover:bg-dark-surface rounded-lg transition-colors flex items-center justify-center"
        title="More Options"
      >
        <MoreVertical className="w-4 h-4" />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-10 w-48 bg-dark-surface border border-dark-border rounded-lg shadow-2xl overflow-hidden z-50">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <div key={index}>
                {action.divider && <div className="border-t border-dark-border my-1" />}
                <button
                  onClick={action.onClick}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-dark-hover transition-colors text-left text-sm ${action.color}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{action.label}</span>
                </button>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}



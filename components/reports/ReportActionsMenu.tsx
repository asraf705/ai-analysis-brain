'use client'

import { useState, useRef, useEffect } from 'react'
import { MoreVertical, Eye, Download, Share2, Copy, Trash2, Mail } from 'lucide-react'

/**
 * Report Actions Menu Component
 * Dropdown menu with actions for report items
 */

interface ReportActionsMenuProps {
  reportId: string
  report: any
  onView?: () => void
  onDownload?: () => void
  onShare?: () => void
  onDelete?: () => void
}

export function ReportActionsMenu({
  reportId,
  report,
  onView,
  onDownload,
  onShare,
  onDelete
}: ReportActionsMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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

  const handleAction = (callback?: () => void) => {
    if (callback) callback()
    setIsOpen(false)
  }

  const handleDuplicate = () => {
    console.log('Duplicating report:', reportId)
    alert('Report duplicated successfully!')
    setIsOpen(false)
  }

  const handleEmail = () => {
    const email = prompt('Enter email address:')
    if (email) {
      console.log('Emailing report to:', email)
      alert(`Report sent to ${email}!`)
    }
    setIsOpen(false)
  }

  const actions = [
    { icon: Eye, label: 'View Details', onClick: () => handleAction(onView), color: 'hover:text-primary' },
    { icon: Download, label: 'Download', onClick: () => handleAction(onDownload), color: 'hover:text-accent-cyan', disabled: report.status !== 'ready' },
    { icon: Share2, label: 'Share', onClick: () => handleAction(onShare), color: 'hover:text-accent-purple' },
    { icon: Mail, label: 'Email Report', onClick: handleEmail, color: 'hover:text-accent-green' },
    { icon: Copy, label: 'Duplicate', onClick: handleDuplicate, color: 'hover:text-accent-orange' },
    { icon: Trash2, label: 'Delete', onClick: () => handleAction(onDelete), color: 'hover:text-red-400', divider: true }
  ]

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-dark-surface rounded-lg transition-colors"
      >
        <MoreVertical className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-10 w-48 bg-dark-surface border border-dark-border rounded-lg shadow-2xl overflow-hidden z-50">
          {actions.map((action, index) => {
            const Icon = action.icon
            return (
              <div key={index}>
                {action.divider && <div className="border-t border-dark-border my-1" />}
                <button
                  onClick={action.onClick}
                  disabled={action.disabled}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-dark-hover transition-colors text-left text-sm ${action.color} disabled:opacity-50 disabled:cursor-not-allowed`}
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


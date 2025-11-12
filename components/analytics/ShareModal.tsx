'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { X, Share2, Copy, Mail, Link as LinkIcon, CheckCircle } from 'lucide-react'

/**
 * Share Modal Component
 * Modal for sharing analytics results via link or email
 */

interface ShareModalProps {
  isOpen: boolean
  onClose: () => void
  analysisData?: {
    id: string
    title: string
  }
}

export function ShareModal({ isOpen, onClose, analysisData }: ShareModalProps) {
  const [copied, setCopied] = useState(false)
  const [emailSent, setEmailSent] = useState(false)
  const [email, setEmail] = useState('')

  if (!isOpen) return null

  // Generate shareable link
  const shareLink = `${typeof window !== 'undefined' ? window.location.origin : ''}/dashboard/analytics/${analysisData?.id || ''}`

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const handleSendEmail = () => {
    if (email) {
      console.log('Sending to:', email)
      setEmailSent(true)
      setTimeout(() => {
        setEmailSent(false)
        setEmail('')
        onClose()
      }, 2000)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-dark-surface border border-dark-border rounded-2xl shadow-2xl max-w-lg w-full mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-dark-border">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center">
              <Share2 className="w-5 h-5 text-accent-purple" />
            </div>
            <div>
              <h2 className="text-xl font-bold">Share Analysis</h2>
              <p className="text-sm text-gray-400">
                {analysisData?.title || 'Share this analysis'}
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
          {/* Copy Link Section */}
          <div>
            <label className="block text-sm font-semibold mb-3">Share Link</label>
            <div className="flex gap-3">
              <div className="flex-1 flex items-center gap-3 px-4 py-3 bg-dark-elevated border border-dark-border rounded-lg">
                <LinkIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <input
                  type="text"
                  value={shareLink}
                  readOnly
                  className="flex-1 bg-transparent text-sm text-gray-300 outline-none"
                />
              </div>
              <Button 
                variant={copied ? 'secondary' : 'primary'} 
                onClick={handleCopyLink}
                className="flex-shrink-0"
              >
                {copied ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Anyone with this link can view the analysis results
            </p>
          </div>

          {/* Email Section */}
          <div>
            <label className="block text-sm font-semibold mb-3">Send via Email</label>
            <div className="flex gap-3">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="colleague@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <Button 
                variant="primary"
                onClick={handleSendEmail}
                disabled={!email || emailSent}
              >
                {emailSent ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4" />
                    Send
                  </>
                )}
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              The recipient will receive a link to view the analysis
            </p>
          </div>

          {/* Permissions (Future Feature) */}
          <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
            <h3 className="text-sm font-semibold text-primary mb-2">Sharing Permissions</h3>
            <div className="space-y-2 text-xs text-gray-300">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="permission" defaultChecked className="accent-primary" />
                <span>Anyone with the link can view</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="permission" className="accent-primary" />
                <span>Only team members can view</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="permission" className="accent-primary" />
                <span>Require password to view</span>
              </label>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 p-6 border-t border-dark-border">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}


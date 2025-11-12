'use client'

import { useState } from 'react'
import { MessageSquare, X } from 'lucide-react'
import { ChatInterface } from './ChatInterface'

/**
 * Floating Chat Button Component
 * Global AI Chat accessible from anywhere via floating button
 */
export function FloatingChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-primary to-accent-purple rounded-full shadow-2xl hover:shadow-primary/50 transition-all hover:scale-110 flex items-center justify-center group"
          aria-label="Open Global AI Chat"
        >
          <MessageSquare className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent-green rounded-full flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </span>
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:inset-auto lg:bottom-6 lg:right-6 lg:w-[420px] lg:h-[600px]">
          {/* Mobile Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Chat Container */}
          <div className="relative h-full bg-dark-surface border border-dark-border lg:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-dark-border bg-gradient-to-r from-primary/10 to-accent-purple/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Global AI Chat</h3>
                  <p className="text-xs text-gray-400">Analyzing all your data</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 hover:bg-dark-hover rounded-lg transition-colors flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Interface */}
            <div className="flex-1 overflow-hidden">
              <ChatInterface chatType="global" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}


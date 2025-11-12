'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import {
  Send,
  Bot,
  User,
  Sparkles,
  Loader2
} from 'lucide-react'

/**
 * Chat Interface Component
 * Reusable chat interface for both global and file-specific chats
 */

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface ChatInterfaceProps {
  chatType: 'global' | 'file'
  fileName?: string
  fileInfo?: {
    name: string
    records: number
    size: string
  }
}

export function ChatInterface({ chatType, fileName, fileInfo }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: chatType === 'global'
        ? 'Hello! I\'m your AI assistant. I can help you analyze all your data, answer questions about your analytics, and provide insights across all your projects. What would you like to know?'
        : `Hello! I'm ready to help you analyze ${fileName || 'your file'}. I have access to ${fileInfo?.records || 0} records. Ask me anything about this specific dataset!`,
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: generateResponse(input, chatType),
        timestamp: new Date()
      }
      setMessages(prev => [...prev, assistantMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Sample response generator (replace with actual AI integration)
  const generateResponse = (query: string, type: string) => {
    if (type === 'global') {
      return `Based on your entire dataset, I've analyzed your query: "${query}". Your overall data shows strong patterns in user engagement with a 96.8% accuracy rate across 12,847 total analyses. Would you like me to dive deeper into specific metrics?`
    } else {
      return `Looking at ${fileName}, here's what I found regarding "${query}": The data contains ${fileInfo?.records || 0} records with interesting patterns. The sentiment analysis shows predominantly positive indicators. Would you like me to break this down further?`
    }
  }

  const suggestedQuestions = chatType === 'global'
    ? [
        'What are my top performing analysis types?',
        'Show me trends from the last 30 days',
        'Which users are most active?',
        'What\'s my overall accuracy rate?'
      ]
    : [
        'Summarize the key insights from this file',
        'What patterns do you see in the data?',
        'Identify any anomalies or outliers',
        'What\'s the sentiment distribution?'
      ]

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)]">
      {/* File Info Banner (for file-specific chat) */}
      {chatType === 'file' && fileInfo && (
        <Card className="mb-4 bg-primary/5 border-primary/20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Analyzing: {fileInfo.name}</h3>
              <p className="text-sm text-gray-400">
                {fileInfo.records.toLocaleString()} records • {fileInfo.size}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Messages Container */}
      <Card className="flex-1 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-4 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              {/* Avatar */}
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0
                ${message.role === 'user' 
                  ? 'bg-primary' 
                  : 'bg-gradient-to-br from-accent-purple to-accent-cyan'
                }
              `}>
                {message.role === 'user' ? (
                  <User className="w-5 h-5" />
                ) : (
                  <Bot className="w-5 h-5" />
                )}
              </div>

              {/* Message Content */}
              <div className={`
                flex-1 max-w-[80%]
                ${message.role === 'user' ? 'text-right' : ''}
              `}>
                <div className={`
                  inline-block p-4 rounded-xl
                  ${message.role === 'user'
                    ? 'bg-primary text-white'
                    : 'bg-dark-elevated text-gray-100'
                  }
                `}>
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-dark-elevated p-4 rounded-xl">
                <div className="flex items-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-gray-400">Thinking...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="px-6 pb-4">
            <p className="text-sm text-gray-400 mb-3">Suggested questions:</p>
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => setInput(question)}
                  className="px-4 py-2 bg-dark-elevated hover:bg-dark-hover rounded-lg text-sm transition-colors text-left"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="border-t border-dark-border p-4">
          <div className="flex gap-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              rows={1}
              className="flex-1 bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <Button
              variant="primary"
              size="md"
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </Button>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Press Enter to send, Shift + Enter for new line
          </p>
        </div>
      </Card>
    </div>
  )
}


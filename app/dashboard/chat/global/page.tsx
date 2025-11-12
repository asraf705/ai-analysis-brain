import { ChatInterface } from '@/components/dashboard/ChatInterface'
import { Card } from '@/components/ui/Card'
import {
  Database,
  TrendingUp,
  Users,
  Activity
} from 'lucide-react'

/**
 * Global Chat Page
 * AI chat that analyzes ALL data across the platform
 */
export default function GlobalChatPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Global AI Chat</h1>
        <p className="text-gray-400">
          Ask questions about all your data, analytics, and insights across the platform
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
              <Database className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Total Data</p>
              <p className="text-lg font-bold">127.8 GB</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center">
              <Activity className="w-5 h-5 text-accent-green" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Total Analyses</p>
              <p className="text-lg font-bold">12,847</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-accent-purple" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Active Users</p>
              <p className="text-lg font-bold">3,429</p>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-accent-cyan/20 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent-cyan" />
            </div>
            <div>
              <p className="text-xs text-gray-400">Accuracy</p>
              <p className="text-lg font-bold">96.8%</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Chat Interface */}
      <ChatInterface chatType="global" />
    </div>
  )
}


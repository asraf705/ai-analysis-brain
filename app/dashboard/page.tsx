import type { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import {
  Activity,
  TrendingUp,
  Users,
  Database,
  ArrowRight,
  Upload,
  FileText,
  BarChart3,
  Download
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dashboard - AI Analysis Brain',
  description: 'Monitor your AI analysis performance with real-time metrics, analytics, and insights.',
}

/**
 * Dashboard Overview Page
 * Main dashboard with metrics, quick actions, and navigation
 */
export default function DashboardPage() {
  const stats = [
    { label: 'Total Analyses', value: '12,847', icon: Activity, color: 'text-primary', change: '+12.5%' },
    { label: 'Growth Rate', value: '+23%', icon: TrendingUp, color: 'text-accent-green', change: '+2.3%' },
    { label: 'Active Users', value: '3,429', icon: Users, color: 'text-accent-purple', change: '+8.1%' },
    { label: 'Data Processed', value: '127.8 GB', icon: Database, color: 'text-accent-cyan', change: '+45%' },
  ]

  const quickActions = [
    {
      title: 'Upload New File',
      description: 'Upload data for analysis',
      icon: Upload,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      href: '/dashboard/upload'
    },
    {
      title: 'View Analytics',
      description: 'Detailed insights',
      icon: BarChart3,
      color: 'text-accent-cyan',
      bgColor: 'bg-accent-cyan/10',
      href: '/dashboard/analytics'
    },
    {
      title: 'Generate Report',
      description: 'Create new report',
      icon: FileText,
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10',
      href: '/dashboard/reports'
    },
    {
      title: 'Export Data',
      description: 'Download your data',
      icon: Download,
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10',
      href: '/dashboard/export'
    }
  ]

  const recentActivity = [
    { id: 1, type: 'Analysis completed', file: 'customer_data.csv', time: '2 min ago', status: 'success' },
    { id: 2, type: 'File uploaded', file: 'sales_report_Q4.xlsx', time: '15 min ago', status: 'success' },
    { id: 3, type: 'Report generated', file: 'Monthly Summary', time: '1 hour ago', status: 'success' },
    { id: 4, type: 'Data exported', file: 'analytics_export.json', time: '2 hours ago', status: 'success' }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard Overview</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening with your AI analyses.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index} className="hover:border-primary/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.color.replace('text-', 'bg-')}/10 flex items-center justify-center`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <span className="text-sm text-accent-green font-medium">{stat.change}</span>
              </div>
              <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </Card>
          )
        })}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <Link key={index} href={action.href}>
                <Card className="hover:border-primary/50 transition-all cursor-pointer group h-full">
                  <div className={`w-12 h-12 ${action.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-6 h-6 ${action.color}`} />
                  </div>
                  <h3 className="font-semibold mb-1">{action.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{action.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary group-hover:gap-3 transition-all">
                    <span>Get started</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Activity</h2>
            <Link href="/dashboard/activities">
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="space-y-3">
            {recentActivity.map((item) => (
              <div key={item.id} className="flex items-center gap-4 p-4 bg-dark-elevated rounded-lg hover:bg-dark-hover transition-colors">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Activity className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium">{item.type}</h3>
                  <p className="text-sm text-gray-400 truncate">{item.file}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Navigation Card */}
        <Card>
          <h2 className="text-xl font-semibold mb-6">Navigate</h2>
          <div className="space-y-2">
            <Link href="/dashboard/analytics">
              <button className="w-full flex items-center justify-between p-3 bg-dark-elevated hover:bg-dark-hover rounded-lg transition-colors text-left mb-2">
                <span className="font-medium">Analytics</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/dashboard/activities">
              <button className="w-full flex items-center justify-between p-3 bg-dark-elevated hover:bg-dark-hover rounded-lg transition-colors text-left  mb-2">
                <span className="font-medium">Activities</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/dashboard/reports">
              <button className="w-full flex items-center justify-between p-3 bg-dark-elevated hover:bg-dark-hover rounded-lg transition-colors text-left  mb-2">
                <span className="font-medium">Reports</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/dashboard/export">
              <button className="w-full flex items-center justify-between p-3 bg-dark-elevated hover:bg-dark-hover rounded-lg transition-colors text-left  mb-2">
                <span className="font-medium">Export Data</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/dashboard/settings">
              <button className="w-full flex items-center justify-between p-3 bg-dark-elevated hover:bg-dark-hover rounded-lg transition-colors text-left  mb-2">
                <span className="font-medium">Settings</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </Card>
      </div>

      {/* AI Chat Promotion */}
      <Card className="bg-gradient-to-br from-primary/10 via-accent-purple/10 to-accent-cyan/10 border-primary/20">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-purple rounded-2xl flex items-center justify-center flex-shrink-0">
            <Activity className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-300 mb-4">
              Get instant insights from your data using our intelligent chat interface. 
              Click the floating chat button in the bottom-right corner to start a conversation with your data!
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/dashboard/upload">
                <Button variant="primary" size="sm">
                  Upload File
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/dashboard/analytics">
                <Button variant="secondary" size="sm">
                  View Analytics
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}


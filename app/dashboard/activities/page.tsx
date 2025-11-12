import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  Activity,
  FileText,
  Upload,
  Download,
  Edit,
  Trash2,
  Eye,
  Clock,
  CheckCircle,
  AlertCircle,
  Filter
} from 'lucide-react'

/**
 * Activities Page
 * View and manage all recent activities and actions
 */
export default function ActivitiesPage() {
  const activities = [
    {
      id: 1,
      type: 'upload',
      title: 'Uploaded customer_data.csv',
      description: 'File uploaded for sentiment analysis',
      timestamp: '2 minutes ago',
      status: 'completed',
      user: 'John Doe',
      icon: Upload,
      color: 'text-accent-cyan'
    },
    {
      id: 2,
      type: 'analysis',
      title: 'Completed Text Analysis',
      description: 'Analyzed 1,247 records with 98.5% accuracy',
      timestamp: '15 minutes ago',
      status: 'completed',
      user: 'Sarah Smith',
      icon: Activity,
      color: 'text-accent-green'
    },
    {
      id: 3,
      type: 'export',
      title: 'Exported Report #4721',
      description: 'Monthly analytics report downloaded',
      timestamp: '1 hour ago',
      status: 'completed',
      user: 'Mike Johnson',
      icon: Download,
      color: 'text-accent-purple'
    },
    {
      id: 4,
      type: 'analysis',
      title: 'Pattern Recognition in Progress',
      description: 'Processing 5,892 data points',
      timestamp: '2 hours ago',
      status: 'processing',
      user: 'Emily Davis',
      icon: Activity,
      color: 'text-accent-orange'
    },
    {
      id: 5,
      type: 'edit',
      title: 'Updated Model Configuration',
      description: 'Modified neural network parameters',
      timestamp: '3 hours ago',
      status: 'completed',
      user: 'Alex Brown',
      icon: Edit,
      color: 'text-primary'
    },
    {
      id: 6,
      type: 'upload',
      title: 'Uploaded sales_report_Q4.xlsx',
      description: 'File prepared for predictive analysis',
      timestamp: '5 hours ago',
      status: 'completed',
      user: 'John Doe',
      icon: Upload,
      color: 'text-accent-cyan'
    },
    {
      id: 7,
      type: 'analysis',
      title: 'Failed: Data Classification',
      description: 'Error: Invalid data format detected',
      timestamp: '6 hours ago',
      status: 'failed',
      user: 'Sarah Smith',
      icon: AlertCircle,
      color: 'text-red-400'
    },
    {
      id: 8,
      type: 'report',
      title: 'Generated Weekly Summary',
      description: 'Created comprehensive analysis report',
      timestamp: '1 day ago',
      status: 'completed',
      user: 'Mike Johnson',
      icon: FileText,
      color: 'text-accent-green'
    }
  ]

  const stats = [
    { label: 'Total Activities', value: '847', icon: Activity, color: 'text-primary' },
    { label: 'Completed Today', value: '42', icon: CheckCircle, color: 'text-accent-green' },
    { label: 'In Progress', value: '8', icon: Clock, color: 'text-accent-orange' },
    { label: 'Failed', value: '3', icon: AlertCircle, color: 'text-red-400' }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Recent Activities</h1>
          <p className="text-gray-400">Monitor all actions and operations in real-time</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" size="sm">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button variant="primary" size="sm">
            Refresh
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-dark-elevated flex items-center justify-center ${stat.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            </Card>
          )
        })}
      </div>

      {/* Activities Timeline */}
      <Card>
        <h2 className="text-xl font-semibold mb-6">Activity Timeline</h2>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = activity.icon
            return (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-dark-elevated transition-colors group"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-dark-elevated flex items-center justify-center flex-shrink-0 ${activity.color}`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{activity.title}</h3>
                      <p className="text-sm text-gray-400 mb-2">{activity.description}</p>
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {activity.timestamp}
                        </span>
                        <span>by {activity.user}</span>
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`
                        px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap
                        ${activity.status === 'completed' && 'bg-accent-green/20 text-accent-green'}
                        ${activity.status === 'processing' && 'bg-accent-orange/20 text-accent-orange'}
                        ${activity.status === 'failed' && 'bg-red-400/20 text-red-400'}
                      `}>
                        {activity.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions (shown on hover) */}
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-dark-surface rounded-lg transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  {activity.status === 'failed' && (
                    <button className="p-2 hover:bg-dark-surface rounded-lg transition-colors">
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Load More */}
        <div className="mt-6 text-center">
          <Button variant="secondary" fullWidth>
            Load More Activities
          </Button>
        </div>
      </Card>
    </div>
  )
}


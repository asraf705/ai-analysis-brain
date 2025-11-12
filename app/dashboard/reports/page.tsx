import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  FileText,
  Download,
  Eye,
  Calendar,
  Filter,
  Search,
  MoreVertical,
  TrendingUp
} from 'lucide-react'

/**
 * Reports Page
 * View, filter, and download generated reports
 */
export default function ReportsPage() {
  const reports = [
    {
      id: 'RPT-2024-001',
      title: 'Monthly Analytics Summary - January 2024',
      type: 'Analytics',
      date: '2024-01-31',
      size: '2.4 MB',
      status: 'ready',
      records: 12847,
      accuracy: '96.8%'
    },
    {
      id: 'RPT-2024-002',
      title: 'Customer Sentiment Analysis Report',
      type: 'Sentiment',
      date: '2024-02-05',
      size: '1.8 MB',
      status: 'ready',
      records: 8392,
      accuracy: '94.5%'
    },
    {
      id: 'RPT-2024-003',
      title: 'Predictive Model Performance Q1',
      type: 'Performance',
      date: '2024-02-10',
      size: '3.1 MB',
      status: 'ready',
      records: 15234,
      accuracy: '98.2%'
    },
    {
      id: 'RPT-2024-004',
      title: 'Data Classification Overview',
      type: 'Classification',
      date: '2024-02-12',
      size: '1.2 MB',
      status: 'processing',
      records: 5621,
      accuracy: '-'
    },
    {
      id: 'RPT-2024-005',
      title: 'Anomaly Detection Weekly Report',
      type: 'Anomaly',
      date: '2024-02-13',
      size: '890 KB',
      status: 'ready',
      records: 3456,
      accuracy: '97.1%'
    },
    {
      id: 'RPT-2024-006',
      title: 'User Behavior Trends Analysis',
      type: 'Trends',
      date: '2024-02-14',
      size: '2.7 MB',
      status: 'ready',
      records: 9847,
      accuracy: '95.3%'
    }
  ]

  const stats = [
    { label: 'Total Reports', value: '247' },
    { label: 'This Month', value: '18' },
    { label: 'Generated Today', value: '3' },
    { label: 'Total Size', value: '1.2 GB' }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Reports</h1>
          <p className="text-gray-400">Access and download all your generated reports</p>
        </div>
        <Button variant="primary" size="sm">
          <FileText className="w-4 h-4" />
          Generate New Report
        </Button>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
            <p className="text-2xl font-bold">{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Filters and Search */}
      <Card>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search reports..."
              className="w-full bg-dark-elevated border border-dark-border rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <Button variant="secondary">
            <Filter className="w-4 h-4" />
            Filter
          </Button>
          <Button variant="secondary">
            <Calendar className="w-4 h-4" />
            Date Range
          </Button>
        </div>
      </Card>

      {/* Reports List */}
      <Card>
        <div className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-lg hover:bg-dark-elevated transition-colors group"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-semibold mb-1">{report.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {report.date}
                      </span>
                      <span>ID: {report.id}</span>
                      <span>Size: {report.size}</span>
                    </div>
                  </div>
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap
                    ${report.status === 'ready' && 'bg-accent-green/20 text-accent-green'}
                    ${report.status === 'processing' && 'bg-accent-orange/20 text-accent-orange'}
                  `}>
                    {report.status}
                  </span>
                </div>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 text-xs">
                  <div className="px-3 py-1 bg-dark-surface rounded-lg">
                    <span className="text-gray-400">Type: </span>
                    <span className="font-medium">{report.type}</span>
                  </div>
                  <div className="px-3 py-1 bg-dark-surface rounded-lg">
                    <span className="text-gray-400">Records: </span>
                    <span className="font-medium">{report.records.toLocaleString()}</span>
                  </div>
                  <div className="px-3 py-1 bg-dark-surface rounded-lg">
                    <span className="text-gray-400">Accuracy: </span>
                    <span className="font-medium">{report.accuracy}</span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button variant="secondary" size="sm">
                  <Eye className="w-4 h-4" />
                  View
                </Button>
                {report.status === 'ready' && (
                  <Button variant="primary" size="sm">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                )}
                <button className="p-2 hover:bg-dark-surface rounded-lg transition-colors">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center">
          <div className="flex gap-2">
            <Button variant="secondary" size="sm">Previous</Button>
            <Button variant="secondary" size="sm">1</Button>
            <Button variant="primary" size="sm">2</Button>
            <Button variant="secondary" size="sm">3</Button>
            <Button variant="secondary" size="sm">Next</Button>
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="hover:border-primary/50 transition-colors cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Custom Report</h3>
              <p className="text-sm text-gray-400">Create tailored report</p>
            </div>
          </div>
        </Card>

        <Card className="hover:border-accent-green/50 transition-colors cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-green/20 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-accent-green" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Schedule Report</h3>
              <p className="text-sm text-gray-400">Automate generation</p>
            </div>
          </div>
        </Card>

        <Card className="hover:border-accent-purple/50 transition-colors cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-purple/20 rounded-xl flex items-center justify-center">
              <Download className="w-6 h-6 text-accent-purple" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Bulk Download</h3>
              <p className="text-sm text-gray-400">Download multiple</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}


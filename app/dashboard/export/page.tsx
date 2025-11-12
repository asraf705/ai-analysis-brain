import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  Download,
  FileText,
  Table,
  Code,
  Image,
  CheckCircle,
  Calendar,
  Filter
} from 'lucide-react'

/**
 * Export Data Page
 * Export data in multiple formats with customization options
 */
export default function ExportPage() {
  const exportFormats = [
    {
      name: 'CSV',
      description: 'Comma-separated values, ideal for spreadsheets',
      icon: Table,
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10',
      size: 'Up to 100K rows'
    },
    {
      name: 'JSON',
      description: 'JavaScript Object Notation for APIs',
      icon: Code,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      size: 'Structured data'
    },
    {
      name: 'PDF',
      description: 'Portable document with formatted reports',
      icon: FileText,
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10',
      size: 'Print-ready'
    },
    {
      name: 'Excel',
      description: 'Microsoft Excel workbook (.xlsx)',
      icon: Table,
      color: 'text-accent-cyan',
      bgColor: 'bg-accent-cyan/10',
      size: 'Multi-sheet support'
    },
    {
      name: 'XML',
      description: 'Extensible Markup Language',
      icon: Code,
      color: 'text-accent-orange',
      bgColor: 'bg-accent-orange/10',
      size: 'Hierarchical data'
    },
    {
      name: 'PNG Chart',
      description: 'Export visualizations as images',
      icon: Image,
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10',
      size: 'High resolution'
    }
  ]

  const recentExports = [
    {
      filename: 'analytics_report_jan_2024.pdf',
      date: '2024-02-14',
      size: '2.4 MB',
      format: 'PDF',
      status: 'completed'
    },
    {
      filename: 'customer_data_export.csv',
      date: '2024-02-13',
      size: '8.7 MB',
      format: 'CSV',
      status: 'completed'
    },
    {
      filename: 'api_data_dump.json',
      date: '2024-02-12',
      size: '4.2 MB',
      format: 'JSON',
      status: 'completed'
    },
    {
      filename: 'monthly_analytics.xlsx',
      date: '2024-02-10',
      size: '5.1 MB',
      format: 'Excel',
      status: 'completed'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Export Data</h1>
        <p className="text-gray-400">Download your data in various formats for further analysis</p>
      </div>

      {/* Quick Stats */}
      <div className="grid sm:grid-cols-3 gap-6">
        <Card>
          <p className="text-gray-400 text-sm mb-1">Total Exports</p>
          <p className="text-3xl font-bold">1,847</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">This Month</p>
          <p className="text-3xl font-bold">124</p>
        </Card>
        <Card>
          <p className="text-gray-400 text-sm mb-1">Total Size</p>
          <p className="text-3xl font-bold">847 GB</p>
        </Card>
      </div>

      {/* Export Formats */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Choose Export Format</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exportFormats.map((format, index) => {
            const Icon = format.icon
            return (
              <Card key={index} className="hover:border-primary/50 transition-all cursor-pointer group">
                <div className={`w-14 h-14 ${format.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 ${format.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{format.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{format.description}</p>
                <p className="text-xs text-gray-500 mb-4">{format.size}</p>
                <Button variant="primary" size="sm" fullWidth>
                  <Download className="w-4 h-4" />
                  Export as {format.name}
                </Button>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Custom Export Options */}
      <Card>
        <h2 className="text-xl font-semibold mb-6">Custom Export Options</h2>
        <div className="space-y-6">
          {/* Date Range */}
          <div>
            <label className="block text-sm font-medium mb-2">Date Range</label>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-gray-400 mb-2">From</label>
                <input
                  type="date"
                  className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 mb-2">To</label>
                <input
                  type="date"
                  className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Data Selection */}
          <div>
            <label className="block text-sm font-medium mb-3">Select Data Types</label>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {['Analytics Data', 'User Activities', 'Reports', 'Model Results', 'Raw Data', 'Metadata'].map((item) => (
                <label key={item} className="flex items-center gap-3 p-3 bg-dark-elevated rounded-lg cursor-pointer hover:bg-dark-hover transition-colors">
                  <input type="checkbox" className="w-4 h-4 accent-primary" defaultChecked />
                  <span className="text-sm">{item}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Additional Options */}
          <div>
            <label className="block text-sm font-medium mb-3">Additional Options</label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-primary" defaultChecked />
                <span className="text-sm">Include column headers</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-primary" />
                <span className="text-sm">Compress as ZIP file</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 accent-primary" defaultChecked />
                <span className="text-sm">Include data dictionary</span>
              </label>
            </div>
          </div>

          {/* Export Button */}
          <div className="flex gap-3 pt-4">
            <Button variant="primary" size="md">
              <Download className="w-5 h-5" />
              Generate Custom Export
            </Button>
            <Button variant="secondary" size="md">
              <Calendar className="w-5 h-5" />
              Schedule Export
            </Button>
          </div>
        </div>
      </Card>

      {/* Recent Exports */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Exports</h2>
          <Button variant="secondary" size="sm">View All</Button>
        </div>
        <div className="space-y-3">
          {recentExports.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-dark-elevated rounded-lg hover:bg-dark-hover transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{item.filename}</h3>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.size}</span>
                    <span>•</span>
                    <span className="px-2 py-0.5 bg-accent-green/20 text-accent-green rounded">
                      {item.format}
                    </span>
                  </div>
                </div>
              </div>
              <Button variant="ghost" size="sm">
                <Download className="w-4 h-4" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}


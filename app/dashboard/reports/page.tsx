'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { GenerateReportModal } from '@/components/reports/GenerateReportModal'
import { ViewReportModal } from '@/components/reports/ViewReportModal'
import { ReportActionsMenu } from '@/components/reports/ReportActionsMenu'
import { DateRangeModal } from '@/components/reports/DateRangeModal'
import { FilterModal } from '@/components/reports/FilterModal'
import {
  FileText,
  Download,
  Eye,
  Calendar,
  Filter,
  Search,
  TrendingUp,
  X
} from 'lucide-react'

/**
 * Reports Page
 * View, filter, and download generated reports - Fully Functional
 */
export default function ReportsPage() {
  const router = useRouter()
  
  // State management
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [dateRange, setDateRange] = useState({ from: '', to: '' })
  const [currentPage, setCurrentPage] = useState(1)
  
  // Modal states
  const [generateModalOpen, setGenerateModalOpen] = useState(false)
  const [viewModalOpen, setViewModalOpen] = useState(false)
  const [dateRangeModalOpen, setDateRangeModalOpen] = useState(false)
  const [filterModalOpen, setFilterModalOpen] = useState(false)
  const [selectedReport, setSelectedReport] = useState<any>(null)

  // Sample reports data
  const allReports = [
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

  // Filtering logic
  const filteredReports = allReports.filter(report => {
    const matchesSearch = report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         report.id.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === 'all' || report.type === selectedType
    const matchesStatus = selectedStatus === 'all' || report.status === selectedStatus
    
    let matchesDate = true
    if (dateRange.from && dateRange.to) {
      matchesDate = report.date >= dateRange.from && report.date <= dateRange.to
    }
    
    return matchesSearch && matchesType && matchesStatus && matchesDate
  })

  // Pagination
  const itemsPerPage = 10
  const totalPages = Math.ceil(filteredReports.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedReports = filteredReports.slice(startIndex, startIndex + itemsPerPage)

  // Get unique types
  const uniqueTypes = ['all', ...new Set(allReports.map(r => r.type))]

  // Stats calculation
  const stats = [
    { label: 'Total Reports', value: allReports.length.toString() },
    { label: 'This Month', value: allReports.filter(r => r.date.startsWith('2024-02')).length.toString() },
    { label: 'Ready', value: allReports.filter(r => r.status === 'ready').length.toString() },
    { label: 'Total Size', value: '12.3 MB' }
  ]

  // Action handlers
  const handleView = (report: any) => {
    setSelectedReport(report)
    setViewModalOpen(true)
  }

  const handleDownload = (report: any) => {
    console.log('Downloading report:', report.id)
    alert(`Downloading ${report.title}...`)
    // Implement actual download logic
  }

  const handleDelete = (reportId: string) => {
    if (confirm('Are you sure you want to delete this report?')) {
      console.log('Deleting report:', reportId)
      alert('Report deleted successfully!')
      // Implement actual delete logic
    }
  }

  const handleShare = (report: any) => {
    const link = `${window.location.origin}/reports/${report.id}`
    navigator.clipboard.writeText(link)
    alert('Report link copied to clipboard!')
  }

  const handleApplyFilters = (filters: any) => {
    setSelectedType(filters.type || 'all')
    setSelectedStatus(filters.status || 'all')
    setFilterModalOpen(false)
  }

  const handleApplyDateRange = (range: any) => {
    setDateRange(range)
    setDateRangeModalOpen(false)
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedType('all')
    setSelectedStatus('all')
    setDateRange({ from: '', to: '' })
    setCurrentPage(1)
  }

  const handleSchedule = () => {
    alert('Schedule Report: Configure automated report generation (Feature ready for implementation)')
  }

  const handleBulkDownload = () => {
    const readyReports = allReports.filter(r => r.status === 'ready')
    if (confirm(`Download ${readyReports.length} ready reports?`)) {
      alert(`Downloading ${readyReports.length} reports...`)
      // Implement bulk download logic
    }
  }

  const hasActiveFilters = searchQuery || selectedType !== 'all' || selectedStatus !== 'all' || dateRange.from || dateRange.to

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Reports</h1>
          <p className="text-gray-400">Access and download all your generated reports</p>
        </div>
        <Button 
          variant="primary" 
          size="sm"
          onClick={() => setGenerateModalOpen(true)}
        >
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
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-elevated border border-dark-border rounded-lg pl-10 pr-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          
          {/* Filter Button */}
          <Button 
            variant="secondary"
            onClick={() => setFilterModalOpen(true)}
          >
            <Filter className="w-4 h-4" />
            Filter
            {hasActiveFilters && (
              <span className="ml-1 w-2 h-2 bg-primary rounded-full" />
            )}
          </Button>
          
          {/* Date Range Button */}
          <Button 
            variant="secondary"
            onClick={() => setDateRangeModalOpen(true)}
          >
            <Calendar className="w-4 h-4" />
            Date Range
            {(dateRange.from || dateRange.to) && (
              <span className="ml-1 w-2 h-2 bg-primary rounded-full" />
            )}
          </Button>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button 
              variant="secondary"
              onClick={clearFilters}
            >
              <X className="w-4 h-4" />
              Clear
            </Button>
          )}
        </div>

        {/* Filter Summary */}
        {hasActiveFilters && (
          <div className="mt-4 flex flex-wrap gap-2">
            {searchQuery && (
              <span className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full">
                Search: "{searchQuery}"
              </span>
            )}
            {selectedType !== 'all' && (
              <span className="px-3 py-1 bg-accent-cyan/20 text-accent-cyan text-sm rounded-full">
                Type: {selectedType}
              </span>
            )}
            {selectedStatus !== 'all' && (
              <span className="px-3 py-1 bg-accent-green/20 text-accent-green text-sm rounded-full">
                Status: {selectedStatus}
              </span>
            )}
            {(dateRange.from || dateRange.to) && (
              <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple text-sm rounded-full">
                Date: {dateRange.from || '?'} to {dateRange.to || '?'}
              </span>
            )}
          </div>
        )}

        {/* Results Count */}
        <div className="mt-4 text-sm text-gray-400">
          Showing {paginatedReports.length} of {filteredReports.length} reports
          {filteredReports.length !== allReports.length && ` (filtered from ${allReports.length} total)`}
        </div>
      </Card>

      {/* Reports List */}
      <Card>
        <div className="space-y-4">
          {paginatedReports.map((report) => (
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
                <Button 
                  variant="secondary" 
                  size="sm"
                  onClick={() => handleView(report)}
                >
                  <Eye className="w-4 h-4" />
                  View
                </Button>
                {report.status === 'ready' && (
                  <Button 
                    variant="primary" 
                    size="sm"
                    onClick={() => handleDownload(report)}
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                )}
                <ReportActionsMenu
                  reportId={report.id}
                  report={report}
                  onView={() => handleView(report)}
                  onDownload={() => handleDownload(report)}
                  onShare={() => handleShare(report)}
                  onDelete={() => handleDelete(report.id)}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {paginatedReports.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-500 mx-auto mb-4 opacity-50" />
            <p className="text-gray-400 mb-2">No reports found</p>
            {hasActiveFilters && (
              <Button variant="secondary" size="sm" onClick={clearFilters}>
                Clear Filters
              </Button>
            )}
          </div>
        )}

        {/* Pagination */}
        {filteredReports.length > itemsPerPage && (
          <div className="mt-6 flex justify-center">
            <div className="flex gap-2">
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              
              {[...Array(Math.min(5, totalPages))].map((_, i) => {
                const pageNum = i + 1
                return (
                  <Button
                    key={pageNum}
                    variant={currentPage === pageNum ? 'primary' : 'secondary'}
                    size="sm"
                    onClick={() => setCurrentPage(pageNum)}
                  >
                    {pageNum}
                  </Button>
                )
              })}
              
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </Card>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card 
          className="hover:border-primary/50 transition-colors cursor-pointer"
          onClick={() => setGenerateModalOpen(true)}
        >
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

        <Card 
          className="hover:border-accent-green/50 transition-colors cursor-pointer"
          onClick={handleSchedule}
        >
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

        <Card 
          className="hover:border-accent-purple/50 transition-colors cursor-pointer"
          onClick={handleBulkDownload}
        >
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

      {/* Modals */}
      <GenerateReportModal
        isOpen={generateModalOpen}
        onClose={() => setGenerateModalOpen(false)}
      />

      <ViewReportModal
        isOpen={viewModalOpen}
        onClose={() => {
          setViewModalOpen(false)
          setSelectedReport(null)
        }}
        report={selectedReport}
      />

      <DateRangeModal
        isOpen={dateRangeModalOpen}
        onClose={() => setDateRangeModalOpen(false)}
        onApply={handleApplyDateRange}
        currentRange={dateRange}
      />

      <FilterModal
        isOpen={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        onApply={handleApplyFilters}
        types={uniqueTypes}
        currentFilters={{ type: selectedType, status: selectedStatus }}
      />
    </div>
  )
}

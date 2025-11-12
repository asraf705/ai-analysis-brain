'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import {
  Upload,
  File,
  X,
  CheckCircle,
  AlertCircle,
  FileText,
  Table,
  Image as ImageIcon,
  MessageSquare
} from 'lucide-react'

/**
 * Upload File Page
 * Upload files for analysis with AI chat integration
 */
export default function UploadPage() {
  const [uploadedFiles, setUploadedFiles] = useState<Array<{
    id: string
    name: string
    size: string
    type: string
    status: 'uploading' | 'completed' | 'error'
    progress: number
  }>>([])

  const supportedFormats = [
    { name: 'CSV', icon: Table, description: 'Comma-separated values' },
    { name: 'Excel', icon: Table, description: '.xlsx, .xls files' },
    { name: 'JSON', icon: FileText, description: 'JavaScript Object Notation' },
    { name: 'PDF', icon: FileText, description: 'Document files' },
    { name: 'Text', icon: FileText, description: '.txt files' },
    { name: 'Images', icon: ImageIcon, description: '.png, .jpg files' }
  ]

  const recentUploads = [
    {
      id: '1',
      name: 'customer_feedback_2024.csv',
      size: '2.4 MB',
      uploadDate: '2024-02-14 10:30 AM',
      status: 'analyzed',
      records: 1247
    },
    {
      id: '2',
      name: 'sales_data_Q1.xlsx',
      size: '5.8 MB',
      uploadDate: '2024-02-13 03:45 PM',
      status: 'analyzed',
      records: 3892
    },
    {
      id: '3',
      name: 'product_reviews.json',
      size: '1.2 MB',
      uploadDate: '2024-02-12 11:20 AM',
      status: 'analyzed',
      records: 847
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Upload File</h1>
        <p className="text-gray-400">Upload your data files for AI-powered analysis</p>
      </div>

      {/* Upload Area */}
      <Card className="border-2 border-dashed border-dark-border hover:border-primary/50 transition-colors">
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Upload className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Drop your files here</h3>
          <p className="text-gray-400 mb-6">or click to browse from your computer</p>
          <Button variant="primary" size="lg">
            <Upload className="w-5 h-5" />
            Choose Files
          </Button>
          <p className="text-sm text-gray-500 mt-4">
            Maximum file size: 50MB • Supported formats: CSV, Excel, JSON, PDF, TXT
          </p>
        </div>
      </Card>

      {/* Uploaded Files (if any) */}
      {uploadedFiles.length > 0 && (
        <Card>
          <h2 className="text-xl font-semibold mb-4">Uploading Files</h2>
          <div className="space-y-3">
            {uploadedFiles.map((file) => (
              <div key={file.id} className="flex items-center gap-4 p-4 bg-dark-elevated rounded-lg">
                <File className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium truncate">{file.name}</h3>
                    <span className="text-sm text-gray-400">{file.size}</span>
                  </div>
                  {file.status === 'uploading' && (
                    <div className="w-full bg-dark-surface rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all"
                        style={{ width: `${file.progress}%` }}
                      />
                    </div>
                  )}
                  {file.status === 'completed' && (
                    <div className="flex items-center gap-2 text-accent-green text-sm">
                      <CheckCircle className="w-4 h-4" />
                      Upload completed
                    </div>
                  )}
                  {file.status === 'error' && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      Upload failed
                    </div>
                  )}
                </div>
                <button className="p-2 hover:bg-dark-surface rounded-lg transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Supported Formats */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Supported File Formats</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {supportedFormats.map((format, index) => {
            const Icon = format.icon
            return (
              <Card key={index} className="flex items-center gap-4 hover:border-primary/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{format.name}</h3>
                  <p className="text-sm text-gray-400">{format.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>

      {/* Recent Uploads */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Recent Uploads</h2>
          <Button variant="secondary" size="sm">View All</Button>
        </div>
        <div className="space-y-3">
          {recentUploads.map((file) => (
            <div
              key={file.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-dark-elevated rounded-lg hover:bg-dark-hover transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-accent-green" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{file.name}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                    <span>{file.size}</span>
                    <span>•</span>
                    <span>{file.uploadDate}</span>
                    <span>•</span>
                    <span>{file.records.toLocaleString()} records</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Link href={`/dashboard/chat/file/${file.id}`}>
                  <Button variant="primary" size="sm">
                    <MessageSquare className="w-4 h-4" />
                    Chat with File
                  </Button>
                </Link>
                <Button variant="secondary" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Info Card */}
      <Card className="bg-primary/5 border-primary/20">
        <div className="flex gap-4">
          <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <MessageSquare className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold mb-2">Analyze with AI Chat</h3>
            <p className="text-sm text-gray-300 mb-4">
              Once your file is uploaded, you can start an AI chat session specific to that file. 
              Ask questions, get insights, and analyze your data conversationally!
            </p>
            <Link href="/dashboard/chat/global">
              <Button variant="secondary" size="sm">
                Or Use Global Chat
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}


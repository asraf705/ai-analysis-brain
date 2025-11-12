import { ChatInterface } from '@/components/dashboard/ChatInterface'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import Link from 'next/link'
import {
  ArrowLeft,
  Download,
  FileText,
  Eye
} from 'lucide-react'

/**
 * File-Specific Chat Page
 * AI chat for analyzing a specific uploaded file
 */
export default function FileChatPage({ params }: { params: { id: string } }) {
  // In a real app, fetch file data based on params.id
  const fileData = {
    id: params.id,
    name: 'customer_feedback_2024.csv',
    size: '2.4 MB',
    records: 1247,
    uploadDate: '2024-02-14',
    type: 'CSV'
  }

  return (
    <div className="space-y-6">
      {/* Header with Back Button */}
      <div className="flex items-center gap-4">
        <Link href="/dashboard/upload">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Uploads
          </Button>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">File Analysis Chat</h1>
          <p className="text-gray-400">
            AI-powered chat for analyzing {fileData.name}
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="secondary" size="sm">
            <Eye className="w-4 h-4" />
            View Data
          </Button>
          <Button variant="secondary" size="sm">
            <Download className="w-4 h-4" />
            Download
          </Button>
        </div>
      </div>

      {/* File Info Card */}
      <Card>
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-1">{fileData.name}</h3>
              <p className="text-sm text-gray-400">Uploaded on {fileData.uploadDate}</p>
            </div>
          </div>

          <div className="flex gap-6 text-sm">
            <div>
              <p className="text-gray-400 mb-1">Type</p>
              <p className="font-medium">{fileData.type}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Size</p>
              <p className="font-medium">{fileData.size}</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">Records</p>
              <p className="font-medium">{fileData.records.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Chat Interface */}
      <ChatInterface
        chatType="file"
        fileName={fileData.name}
        fileInfo={{
          name: fileData.name,
          records: fileData.records,
          size: fileData.size
        }}
      />
    </div>
  )
}


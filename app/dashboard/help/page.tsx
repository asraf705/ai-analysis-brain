import type { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { 
  HelpCircle, 
  Book, 
  MessageCircle, 
  Mail, 
  FileText,
  Video,
  Search
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help Center - AI Analysis Brain',
  description: 'Get help and support for using AI Analysis Brain',
}

/**
 * Help Page
 * Help center with resources and support options
 */
export default function HelpPage() {
  const helpCategories = [
    {
      icon: Book,
      title: 'Documentation',
      description: 'Complete guides and API references',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      href: '#'
    },
    {
      icon: Video,
      title: 'Video Tutorials',
      description: 'Step-by-step video guides',
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10',
      href: '#'
    },
    {
      icon: MessageCircle,
      title: 'Community Forum',
      description: 'Ask questions and share knowledge',
      color: 'text-accent-cyan',
      bgColor: 'bg-accent-cyan/10',
      href: '#'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help from our support team',
      color: 'text-accent-green',
      bgColor: 'bg-accent-green/10',
      href: '#'
    }
  ]

  const faqItems = [
    {
      question: 'How do I upload a file for analysis?',
      answer: 'Navigate to the Upload page from the sidebar, then drag and drop your file or click to browse. Supported formats include CSV, Excel, JSON, PDF, and more.'
    },
    {
      question: 'What is the Global AI Chat?',
      answer: 'The Global AI Chat analyzes all your data across the platform. Click the floating button in the bottom-right corner to access it anytime.'
    },
    {
      question: 'How do I export my data?',
      answer: 'Go to the Export Data page where you can choose from 6 different formats including CSV, JSON, PDF, Excel, XML, and PNG charts.'
    },
    {
      question: 'Can I chat with a specific file?',
      answer: 'Yes! After uploading a file, click the "Chat with File" button to start an AI conversation about that specific dataset.'
    },
    {
      question: 'How do I upgrade my plan?',
      answer: 'Click on your profile at the bottom of the sidebar, then select "Update Plan" to view and upgrade to Pro or Enterprise plans.'
    },
    {
      question: 'Where can I see my recent activities?',
      answer: 'Visit the Recent Activities page to see a timeline of all your uploads, analyses, reports, and exports with status indicators.'
    }
  ]

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">How can we help you?</h1>
        <p className="text-gray-400 mb-8">
          Search our help center or browse categories below
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for help..."
            className="w-full bg-dark-surface border border-dark-border rounded-lg pl-12 pr-4 py-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      {/* Help Categories */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {helpCategories.map((category, index) => {
          const Icon = category.icon
          return (
            <Card 
              key={index}
              className="hover:border-primary/50 transition-all cursor-pointer group"
            >
              <div className={`w-14 h-14 ${category.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-7 h-7 ${category.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-sm text-gray-400">{category.description}</p>
            </Card>
          )
        })}
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index} className="hover:border-primary/30 transition-colors">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-4 h-4 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-2">{item.question}</h3>
                  <p className="text-sm text-gray-400">{item.answer}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <Card className="bg-gradient-to-br from-primary/10 to-accent-purple/10 border-primary/20">
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-purple rounded-2xl flex items-center justify-center mx-auto mb-4">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-3">Still need help?</h3>
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Our support team is here to help you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary">
              <Mail className="w-4 h-4" />
              Email Support
            </Button>
            <Button variant="secondary">
              <MessageCircle className="w-4 h-4" />
              Live Chat
            </Button>
          </div>
        </div>
      </Card>

      {/* Quick Links */}
      <Card>
        <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <a href="#" className="flex items-center gap-3 p-3 bg-dark-elevated hover:bg-dark-hover rounded-lg transition-colors">
            <FileText className="w-4 h-4 text-gray-400" />
            <span className="text-sm">Getting Started Guide</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 bg-dark-elevated hover:bg-dark-hover rounded-lg transition-colors">
            <Book className="w-4 h-4 text-gray-400" />
            <span className="text-sm">API Documentation</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 bg-dark-elevated hover:bg-dark-hover rounded-lg transition-colors">
            <Video className="w-4 h-4 text-gray-400" />
            <span className="text-sm">Tutorial Videos</span>
          </a>
          <a href="#" className="flex items-center gap-3 p-3 bg-dark-elevated hover:bg-dark-hover rounded-lg transition-colors">
            <MessageCircle className="w-4 h-4 text-gray-400" />
            <span className="text-sm">Community Forums</span>
          </a>
        </div>
      </Card>
    </div>
  )
}


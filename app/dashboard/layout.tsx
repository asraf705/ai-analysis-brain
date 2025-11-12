'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Activity,
  FileText,
  Download,
  Settings,
  Menu,
  X,
  Upload,
  User,
  LogOut,
  Crown,
  ChevronUp,
  HelpCircle,
  CreditCard,
  UserCircle,
  BarChart3,
  ScrollText
} from 'lucide-react'
import { FloatingChatButton } from '@/components/dashboard/FloatingChatButton'

/**
 * Dashboard Layout Component
 * Provides sidebar navigation for all dashboard pages
 */
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Analytics', href: '/dashboard/analytics', icon: Activity },
    { name: 'Recent Analytics', href: '/dashboard/analytics/all', icon: BarChart3 },
    { name: 'Analytics Logs', href: '/dashboard/logs', icon: ScrollText },
    { name: 'Reports', href: '/dashboard/reports', icon: FileText },
    { name: 'Export Data', href: '/dashboard/export', icon: Download },
    { name: 'Upload File', href: '/dashboard/upload', icon: Upload },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ]

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="flex h-screen overflow-hidden">
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar - Fixed Position */}
        <aside
          className={`
            fixed lg:relative top-0 left-0 z-50 h-screen w-64 bg-dark-surface border-r border-dark-border
            transform transition-transform duration-300 ease-in-out flex-shrink-0
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}
        >
          <div className="flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 border-b border-dark-border flex-shrink-0">
              <h2 className="text-lg font-semibold">Dashboard</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 hover:bg-dark-hover rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation Links - Scrollable */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
              {navigation.map((item) => {
                const Icon = item.icon
                const active = isActive(item.href)
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                      ${active 
                        ? 'bg-primary text-white' 
                        : 'text-gray-300 hover:bg-dark-hover hover:text-white'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                )
              })}
            </nav>

            {/* Profile Section */}
            <div className="p-4 border-t border-dark-border flex-shrink-0">
              {/* Dropdown Menu (appears above profile) */}
              {profileDropdownOpen && (
                <div className="mb-2 bg-dark-elevated border border-dark-border rounded-lg overflow-hidden">
                  <Link
                    href="/dashboard/profile"
                    onClick={() => {
                      setProfileDropdownOpen(false)
                      setSidebarOpen(false)
                    }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-dark-hover transition-colors"
                  >
                    <UserCircle className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">Profile</span>
                  </Link>
                  
                  <Link
                    href="/dashboard/settings"
                    onClick={() => {
                      setProfileDropdownOpen(false)
                      setSidebarOpen(false)
                    }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-dark-hover transition-colors"
                  >
                    <Settings className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">Settings</span>
                  </Link>

                  <Link
                    href="/dashboard/plan"
                    onClick={() => {
                      setProfileDropdownOpen(false)
                      setSidebarOpen(false)
                    }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-dark-hover transition-colors"
                  >
                    <CreditCard className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">Update Plan</span>
                  </Link>

                  <Link
                    href="/dashboard/help"
                    onClick={() => {
                      setProfileDropdownOpen(false)
                      setSidebarOpen(false)
                    }}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-dark-hover transition-colors"
                  >
                    <HelpCircle className="w-4 h-4 text-gray-400" />
                    <span className="text-sm">Help</span>
                  </Link>

                  <div className="border-t border-dark-border">
                    <button 
                      onClick={() => {
                        setProfileDropdownOpen(false)
                        // Add logout logic here
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-red-500/20 transition-colors text-gray-300 hover:text-red-400 group"
                    >
                      <LogOut className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm font-medium">Logout</span>
                    </button>
                  </div>
                </div>
              )}

              {/* User Info - Clickable */}
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="w-full flex items-center gap-3 p-3 bg-dark-elevated hover:bg-dark-hover rounded-lg transition-colors"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <h3 className="font-semibold text-sm truncate">John Doe</h3>
                  <div className="flex items-center gap-1.5">
                    <Crown className="w-3 h-3 text-accent-orange" />
                    <span className="text-xs text-gray-400">Free Tier</span>
                  </div>
                </div>
                <ChevronUp 
                  className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                    profileDropdownOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content - Scrollable */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Mobile Header - Sticky */}
          <header className="lg:hidden flex-shrink-0 z-30 bg-dark-surface border-b border-dark-border px-4 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-2 hover:bg-dark-hover rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
          </header>

          {/* Page Content - Scrollable Area */}
          <main className="flex-1 overflow-y-auto p-4 lg:p-8">
            {children}
          </main>
        </div>
      </div>

      {/* Floating Global AI Chat Button */}
      <FloatingChatButton />
    </div>
  )
}


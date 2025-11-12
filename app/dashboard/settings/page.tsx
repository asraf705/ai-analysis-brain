'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import {
  User,
  Bell,
  Shield,
  Palette,
  Database,
  Key,
  Mail,
  Globe,
  Save,
  CheckCircle
} from 'lucide-react'

/**
 * Settings Page
 * User preferences and configuration options
 */
export default function SettingsPage() {
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account and preferences</p>
        </div>
        {saved && (
          <div className="flex items-center gap-2 px-4 py-2 bg-accent-green/20 text-accent-green rounded-lg">
            <CheckCircle className="w-5 h-5" />
            <span className="font-medium">Settings saved successfully!</span>
          </div>
        )}
      </div>

      {/* Profile Settings */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-semibold">Profile Settings</h2>
        </div>

        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Bio</label>
            <textarea
              rows={3}
              defaultValue="AI enthusiast and data analyst"
              className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Company</label>
              <input
                type="text"
                defaultValue="AI Analysis Corp"
                className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Role</label>
              <select className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors">
                <option>Data Analyst</option>
                <option>Data Scientist</option>
                <option>ML Engineer</option>
                <option>Business Analyst</option>
                <option>Manager</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Notification Settings */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-accent-purple/20 rounded-lg flex items-center justify-center">
            <Bell className="w-5 h-5 text-accent-purple" />
          </div>
          <h2 className="text-xl font-semibold">Notifications</h2>
        </div>

        <div className="space-y-4">
          {[
            { label: 'Email notifications for completed analyses', defaultChecked: true },
            { label: 'Push notifications for important alerts', defaultChecked: true },
            { label: 'Weekly summary reports', defaultChecked: false },
            { label: 'New feature announcements', defaultChecked: true },
            { label: 'System maintenance alerts', defaultChecked: true },
            { label: 'Marketing and promotional emails', defaultChecked: false }
          ].map((item, index) => (
            <label key={index} className="flex items-center justify-between p-4 bg-dark-elevated rounded-lg cursor-pointer hover:bg-dark-hover transition-colors">
              <span>{item.label}</span>
              <input
                type="checkbox"
                defaultChecked={item.defaultChecked}
                className="w-5 h-5 accent-primary"
              />
            </label>
          ))}
        </div>
      </Card>

      {/* Privacy & Security */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-accent-cyan/20 rounded-lg flex items-center justify-center">
            <Shield className="w-5 h-5 text-accent-cyan" />
          </div>
          <h2 className="text-xl font-semibold">Privacy & Security</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Current Password</label>
            <input
              type="password"
              placeholder="Enter current password"
              className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">New Password</label>
              <input
                type="password"
                placeholder="Enter new password"
                className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="secondary" size="sm">
              <Key className="w-4 h-4" />
              Enable 2FA
            </Button>
            <Button variant="secondary" size="sm">
              View Login History
            </Button>
          </div>
        </div>
      </Card>

      {/* Appearance */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-accent-green/20 rounded-lg flex items-center justify-center">
            <Palette className="w-5 h-5 text-accent-green" />
          </div>
          <h2 className="text-xl font-semibold">Appearance</h2>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-3">Theme</label>
            <div className="grid sm:grid-cols-3 gap-4">
              {['Dark', 'Light', 'Auto'].map((theme) => (
                <label
                  key={theme}
                  className="flex items-center gap-3 p-4 bg-dark-elevated rounded-lg cursor-pointer hover:bg-dark-hover transition-colors border-2 border-transparent has-[:checked]:border-primary"
                >
                  <input
                    type="radio"
                    name="theme"
                    defaultChecked={theme === 'Dark'}
                    className="w-4 h-4 accent-primary"
                  />
                  <span>{theme}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-3">Language</label>
            <select className="w-full sm:w-64 bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              <option>Chinese</option>
              <option>Japanese</option>
            </select>
          </div>
        </div>
      </Card>

      {/* Data & Storage */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-accent-orange/20 rounded-lg flex items-center justify-center">
            <Database className="w-5 h-5 text-accent-orange" />
          </div>
          <h2 className="text-xl font-semibold">Data & Storage</h2>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-dark-elevated rounded-lg">
            <div>
              <h3 className="font-medium mb-1">Storage Used</h3>
              <p className="text-sm text-gray-400">127.8 GB of 500 GB</p>
            </div>
            <Button variant="secondary" size="sm">Manage</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-dark-elevated rounded-lg">
            <div>
              <h3 className="font-medium mb-1">Data Retention</h3>
              <p className="text-sm text-gray-400">Keep data for 90 days</p>
            </div>
            <Button variant="secondary" size="sm">Configure</Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-dark-elevated rounded-lg">
            <div>
              <h3 className="font-medium mb-1">Export All Data</h3>
              <p className="text-sm text-gray-400">Download a copy of your data</p>
            </div>
            <Button variant="secondary" size="sm">Export</Button>
          </div>
        </div>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end gap-3">
        <Button variant="secondary" size="lg">
          Cancel
        </Button>
        <Button variant="primary" size="lg" onClick={handleSave}>
          <Save className="w-5 h-5" />
          Save Changes
        </Button>
      </div>
    </div>
  )
}


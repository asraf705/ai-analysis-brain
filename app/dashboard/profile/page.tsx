import type { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { User, Mail, Calendar, MapPin, Phone, Save } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Profile - AI Analysis Brain',
  description: 'Manage your profile information and preferences',
}

/**
 * Profile Page
 * User profile information and management
 */
export default function ProfilePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Profile</h1>
        <p className="text-gray-400">Manage your personal information</p>
      </div>

      {/* Profile Card */}
      <Card>
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent-purple rounded-full flex items-center justify-center mb-4">
            <User className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-1">John Doe</h2>
          <p className="text-gray-400 mb-4">john.doe@example.com</p>
          <Button variant="secondary" size="sm">Change Avatar</Button>
        </div>

        <div className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <User className="w-4 h-4" />
                Full Name
              </label>
              <input
                type="text"
                defaultValue="John Doe"
                className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <Mail className="w-4 h-4" />
                Email Address
              </label>
              <input
                type="email"
                defaultValue="john.doe@example.com"
                className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <Phone className="w-4 h-4" />
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <MapPin className="w-4 h-4" />
                Location
              </label>
              <input
                type="text"
                placeholder="City, Country"
                className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Calendar className="w-4 h-4" />
              Date of Birth
            </label>
            <input
              type="date"
              className="w-full sm:w-64 bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Bio</label>
            <textarea
              rows={4}
              placeholder="Tell us about yourself..."
              className="w-full bg-dark-elevated border border-dark-border rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="secondary">Cancel</Button>
            <Button variant="primary">
              <Save className="w-4 h-4" />
              Save Changes
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}


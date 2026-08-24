import React, { useState } from 'react'
import { Settings as SettingsIcon, Save, AlertCircle } from 'lucide-react'

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    siteName: 'PRK Media CMS',
    siteUrl: 'https://prk-media-cms.com',
    adminEmail: 'admin@prkmedia.com',
    defaultLanguage: 'en',
    timezone: 'UTC',
    enableNotifications: true,
    enableAnalytics: true,
    backupFrequency: 'daily',
  })

  const handleChange = (key: string, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
          <SettingsIcon size={32} />
          Settings
        </h1>
        <p className="text-dark-200">Configure system settings and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Settings */}
          <div className="bg-dark-800 border border-dark-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">General Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Site Name</label>
                <input
                  type="text"
                  value={settings.siteName}
                  onChange={(e) => handleChange('siteName', e.target.value)}
                  className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Site URL</label>
                <input
                  type="url"
                  value={settings.siteUrl}
                  onChange={(e) => handleChange('siteUrl', e.target.value)}
                  className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Admin Email</label>
                <input
                  type="email"
                  value={settings.adminEmail}
                  onChange={(e) => handleChange('adminEmail', e.target.value)}
                  className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-primary"
                />
              </div>
            </div>
          </div>

          {/* Regional Settings */}
          <div className="bg-dark-800 border border-dark-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Regional Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Language</label>
                <select
                  value={settings.defaultLanguage}
                  onChange={(e) => handleChange('defaultLanguage', e.target.value)}
                  className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-primary"
                >
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                  <option value="hi">Hindi</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Timezone</label>
                <select
                  value={settings.timezone}
                  onChange={(e) => handleChange('timezone', e.target.value)}
                  className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-primary"
                >
                  <option value="UTC">UTC</option>
                  <option value="EST">Eastern Standard Time</option>
                  <option value="CST">Central Standard Time</option>
                  <option value="IST">Indian Standard Time</option>
                  <option value="PST">Pacific Standard Time</option>
                </select>
              </div>
            </div>
          </div>

          {/* Feature Settings */}
          <div className="bg-dark-800 border border-dark-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Features</h3>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.enableNotifications}
                  onChange={(e) => handleChange('enableNotifications', e.target.checked)}
                  className="w-5 h-5 rounded border-dark-600 text-blue-primary focus:ring-blue-primary"
                />
                <span className="text-white">Enable Notifications</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.enableAnalytics}
                  onChange={(e) => handleChange('enableAnalytics', e.target.checked)}
                  className="w-5 h-5 rounded border-dark-600 text-blue-primary focus:ring-blue-primary"
                />
                <span className="text-white">Enable Analytics</span>
              </label>
            </div>
          </div>

          {/* Backup Settings */}
          <div className="bg-dark-800 border border-dark-600 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-6">Backup & Maintenance</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Backup Frequency</label>
                <select
                  value={settings.backupFrequency}
                  onChange={(e) => handleChange('backupFrequency', e.target.value)}
                  className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-primary"
                >
                  <option value="hourly">Hourly</option>
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                </select>
              </div>
              <button className="w-full bg-dark-700 hover:bg-dark-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Backup Now
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-4">
          <button className="w-full flex items-center justify-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-3 rounded-lg font-medium transition-colors">
            <Save size={18} />
            Save Settings
          </button>

          {/* Info Box */}
          <div className="bg-dark-800 border border-dark-600 rounded-lg p-4 space-y-3">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <AlertCircle size={16} />
              System Info
            </h4>
            <div className="text-xs text-dark-200 space-y-1">
              <p><strong>Version:</strong> 0.1.0 Beta</p>
              <p><strong>Last Updated:</strong> 2024-01-24</p>
              <p><strong>Environment:</strong> Production</p>
            </div>
          </div>

          {/* Database Info */}
          <div className="bg-dark-800 border border-dark-600 rounded-lg p-4 space-y-3">
            <h4 className="text-sm font-semibold text-white">Database Status</h4>
            <div className="text-xs text-dark-200 space-y-1">
              <p className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Connected
              </p>
              <p><strong>Tables:</strong> 10</p>
              <p><strong>Storage:</strong> Active</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings

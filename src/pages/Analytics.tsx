import React from 'react'
import { Download, Filter } from 'lucide-react'

const Analytics: React.FC = () => {
  const analyticsData = [
    {
      id: '1',
      assetTitle: 'Summer Breeze - Remix',
      metricType: 'streams',
      value: 45230,
      platform: 'Spotify',
      period: '2024-01',
    },
    {
      id: '2',
      assetTitle: 'Live Concert - Full Version',
      metricType: 'views',
      value: 12450,
      platform: 'YouTube',
      period: '2024-01',
    },
    {
      id: '3',
      assetTitle: 'Acoustic Sessions',
      metricType: 'downloads',
      value: 3280,
      platform: 'Apple Music',
      period: '2024-01',
    },
  ]

  const metrics = [
    { type: 'views', icon: '👁️', label: 'Views', total: 12450 },
    { type: 'streams', icon: '🎵', label: 'Streams', total: 45230 },
    { type: 'downloads', icon: '📥', label: 'Downloads', total: 3280 },
    { type: 'shares', icon: '🔗', label: 'Shares', total: 892 },
  ]

  return (
    <div className="p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-dark-200">Monitor performance metrics across all platforms</p>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-dark-800 border border-dark-600 rounded-lg p-6 hover:border-blue-primary transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-dark-200 mb-2">{metric.label}</p>
                <p className="text-3xl font-bold text-white">{metric.total.toLocaleString()}</p>
              </div>
              <div className="text-3xl">{metric.icon}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search analytics..."
            className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
          />
        </div>
        <button className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:border-blue-primary text-white px-4 py-2 rounded-lg transition-colors">
          <Filter size={18} />
          Filter
        </button>
        <button className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-4 py-2 rounded-lg transition-colors">
          <Download size={18} />
          Export
        </button>
      </div>

      <div className="bg-dark-800 border border-dark-600 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-900 border-b border-dark-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Metric Type</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Value</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Platform</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Period</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {analyticsData.map((record) => (
                <tr key={record.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{record.assetTitle}</td>
                  <td className="px-6 py-4 text-sm text-dark-200 capitalize">{record.metricType}</td>
                  <td className="px-6 py-4 text-sm text-blue-primary font-medium">{record.value.toLocaleString()}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{record.platform}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{record.period}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-dark-800 border border-blue-primary/30 rounded-lg p-4">
        <p className="text-sm text-blue-primary">
          <strong>Note:</strong> Analytics from existing Supabase 'analytics' table (if exists) will be displayed here.
        </p>
      </div>
    </div>
  )
}

export default Analytics

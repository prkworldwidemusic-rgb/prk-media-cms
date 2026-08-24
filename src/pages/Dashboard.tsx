import React from 'react'
import StatCard from '@/components/StatCard'
import ChartBar from '@/components/ChartBar'
import { TrendingUp, Music, AlertCircle, DollarSign } from 'lucide-react'

const Dashboard: React.FC = () => {
  // Mock data - will be replaced with Supabase queries
  const stats = [
    {
      label: 'Total Assets',
      value: '2,847',
      trend: 'up' as const,
      trendValue: '+12% this month',
      icon: <Music size={24} />,
      color: 'blue' as const,
    },
    {
      label: 'Pending Claims',
      value: '34',
      trend: 'down' as const,
      trendValue: '-5 resolved',
      icon: <AlertCircle size={24} />,
      color: 'red' as const,
    },
    {
      label: 'New Matches',
      value: '156',
      trend: 'up' as const,
      trendValue: '+23% increase',
      icon: <TrendingUp size={24} />,
      color: 'yellow' as const,
    },
    {
      label: 'Revenue (30d)',
      value: '$45,230',
      trend: 'up' as const,
      trendValue: '+8.2% growth',
      icon: <DollarSign size={24} />,
      color: 'green' as const,
    },
  ]

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-dark-200">Welcome back to PRK Media CMS</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart 1 */}
        <div className="lg:col-span-2 bg-dark-800 border border-dark-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Assets Upload Trend</h3>
          <div className="flex items-end justify-around h-48 gap-2">
            {[45, 52, 38, 71, 82, 45, 61, 55, 78, 92, 85, 70].map((val, idx) => (
              <ChartBar
                key={idx}
                value={val}
                maxValue={100}
                label={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][idx]}
              />
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-dark-800 border border-dark-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: 'New asset uploaded', time: '5 mins ago', type: 'upload' },
              { action: 'Claim verified', time: '1 hour ago', type: 'claim' },
              { action: 'Match resolved', time: '3 hours ago', type: 'match' },
              { action: 'Revenue reconciled', time: '1 day ago', type: 'revenue' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 pb-3 border-b border-dark-700 last:border-0">
                <div className="w-2 h-2 rounded-full bg-blue-primary"></div>
                <div className="flex-1">
                  <p className="text-sm text-white">{item.action}</p>
                  <p className="text-xs text-dark-200">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Note about mock data */}
      <div className="mt-8 bg-dark-800 border border-yellow-600/30 rounded-lg p-4">
        <p className="text-sm text-yellow-600">
          <strong>Note:</strong> Dashboard is displaying mock data. Live data will be populated once Supabase is configured with credentials.
        </p>
      </div>
    </div>
  )
}

export default Dashboard

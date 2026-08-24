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

  // Policy breakdown data
  const policyData = [
    { label: 'Monetize', value: 45, color: '#22c77a' },
    { label: 'Track', value: 30, color: '#147df5' },
    { label: 'Block', value: 20, color: '#ff4d5d' },
    { label: 'Other', value: 5, color: '#8196ae' },
  ]

  const totalPolicies = policyData.reduce((sum, item) => sum + item.value, 0)

  // Claims over time data
  const claimsOverTime = [
    { month: 'Jan', claims: 45 },
    { month: 'Feb', claims: 52 },
    { month: 'Mar', claims: 38 },
    { month: 'Apr', claims: 71 },
    { month: 'May', claims: 82 },
    { month: 'Jun', claims: 45 },
  ]

  const maxClaims = Math.max(...claimsOverTime.map(d => d.claims))

  // Revenue data
  const revenueData = [
    { source: 'YouTube', amount: 15230 },
    { source: 'Spotify', amount: 12450 },
    { source: 'Apple Music', amount: 10280 },
    { source: 'Other', amount: 7270 },
  ]

  const totalRevenue = revenueData.reduce((sum, item) => sum + item.amount, 0)

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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Policy Overview Donut Chart */}
        <div className="lg:col-span-1 bg-dark-800 border border-dark-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Policy Overview</h3>
          
          <div className="flex items-center justify-center mb-6">
            <div className="relative w-48 h-48">
              {/* Donut Chart SVG */}
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {policyData.map((item, idx) => {
                  const startAngle = (policyData.slice(0, idx).reduce((sum, i) => sum + i.value, 0) / totalPolicies) * 360
                  const endAngle = ((policyData.slice(0, idx + 1).reduce((sum, i) => sum + i.value, 0)) / totalPolicies) * 360
                  const start = (startAngle * Math.PI) / 180
                  const end = (endAngle * Math.PI) / 180
                  
                  const x1 = 50 + 40 * Math.cos(start)
                  const y1 = 50 + 40 * Math.sin(start)
                  const x2 = 50 + 40 * Math.cos(end)
                  const y2 = 50 + 40 * Math.sin(end)
                  
                  const largeArc = endAngle - startAngle > 180 ? 1 : 0
                  const path = `M ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} L ${50 + 25 * Math.cos(end)} ${50 + 25 * Math.sin(end)} A 25 25 0 ${largeArc} 0 ${50 + 25 * Math.cos(start)} ${50 + 25 * Math.sin(start)} Z`
                  
                  return (
                    <path key={idx} d={path} fill={item.color} opacity="0.9" />
                  )
                })}
                {/* Center circle */}
                <circle cx="50" cy="50" r="25" fill="#0c1b2c" />
              </svg>
              
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-3xl font-bold text-white">{totalPolicies}</p>
                <p className="text-xs text-dark-200">Total Policies</p>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-2">
            {policyData.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-dark-200">{item.label}</span>
                </div>
                <span className="text-white font-semibold">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Claims Over Time */}
        <div className="lg:col-span-2 bg-dark-800 border border-dark-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Claims Over Time</h3>
          <div className="flex items-end justify-around h-48 gap-2">
            {claimsOverTime.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="w-10 bg-gradient-to-t from-blue-primary to-blue-light rounded-t-md transition-all hover:shadow-lg hover:shadow-blue-primary/50" 
                  style={{ height: `${(item.claims / maxClaims) * 160}px` }}
                ></div>
                <span className="text-xs text-dark-200">{item.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-dark-600">
            <p className="text-xs text-dark-200"><strong>Peak:</strong> 82 claims (May) | <strong>Average:</strong> 55.2 claims/month</p>
          </div>
        </div>
      </div>

      {/* Revenue Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-dark-800 border border-dark-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-6">Revenue Overview (30 Days)</h3>
          <div className="space-y-4">
            {revenueData.map((item, idx) => {
              const percentage = (item.amount / totalRevenue) * 100
              return (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-dark-200">{item.source}</span>
                    <span className="text-sm font-semibold text-white">${item.amount.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-dark-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-dark-200 mt-1">{percentage.toFixed(1)}% of total</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-dark-800 border border-dark-600 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { action: 'New asset uploaded', time: '5 mins ago', type: 'upload', icon: '📤' },
              { action: 'Claim verified', time: '1 hour ago', type: 'claim', icon: '✓' },
              { action: 'Match resolved', time: '3 hours ago', type: 'match', icon: '🎯' },
              { action: 'Revenue reconciled', time: '1 day ago', type: 'revenue', icon: '💰' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 pb-3 border-b border-dark-700 last:border-0">
                <div className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-sm">
                  {item.icon}
                </div>
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
      <div className="bg-dark-800 border border-yellow-600/30 rounded-lg p-4">
        <p className="text-sm text-yellow-600">
          <strong>Note:</strong> Dashboard is displaying mock data. Live data will be populated once Supabase is configured with credentials.
        </p>
      </div>
    </div>
  )
}

export default Dashboard

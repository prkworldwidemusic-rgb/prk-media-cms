import React from 'react'
import { ArrowUp, ArrowDown } from 'lucide-react'

interface StatCardProps {
  label: string
  value: string | number
  trend?: 'up' | 'down'
  trendValue?: string
  icon?: React.ReactNode
  color?: 'blue' | 'green' | 'red' | 'yellow'
}

const colorClasses = {
  blue: 'text-blue-primary',
  green: 'text-green-500',
  red: 'text-red-500',
  yellow: 'text-yellow-500',
}

const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  trend,
  trendValue,
  icon,
  color = 'blue',
}) => {
  return (
    <div className="bg-dark-800 border border-dark-600 rounded-lg p-6 hover:border-blue-primary transition-colors">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-dark-200 mb-2">{label}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
        </div>
        {icon && <div className={`text-2xl ${colorClasses[color]}`}>{icon}</div>}
      </div>
      {trend && trendValue && (
        <div className="flex items-center gap-1 text-sm">
          {trend === 'up' ? (
            <>
              <ArrowUp size={16} className="text-green-500" />
              <span className="text-green-500">{trendValue}</span>
            </>
          ) : (
            <>
              <ArrowDown size={16} className="text-red-500" />
              <span className="text-red-500">{trendValue}</span>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default StatCard

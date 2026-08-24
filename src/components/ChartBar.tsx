import React from 'react'

interface ChartBarProps {
  value: number
  maxValue: number
  label: string
  color?: string
}

const ChartBar: React.FC<ChartBarProps> = ({
  value,
  maxValue,
  label,
  color = 'bg-blue-primary',
}) => {
  const percentage = (value / maxValue) * 100

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-8 h-40 bg-dark-700 rounded-full overflow-hidden">
        <div
          className={`w-full ${color} transition-all duration-300`}
          style={{ height: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-xs text-dark-200">{label}</span>
    </div>
  )
}

export default ChartBar

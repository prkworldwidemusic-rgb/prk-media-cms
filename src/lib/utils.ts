import { type ClassValue, clsx } from 'clsx'

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatDate(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function formatDateTime(date: string | Date): string {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function formatCurrency(amount: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount)
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60

  if (hours > 0) {
    return `${hours}h ${minutes}m ${secs}s`
  }
  if (minutes > 0) {
    return `${minutes}m ${secs}s`
  }
  return `${secs}s`
}

export function getStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    active: 'bg-green-600 text-white',
    pending: 'bg-yellow-600 text-white',
    error: 'bg-red-600 text-white',
    draft: 'bg-gray-600 text-white',
    published: 'bg-green-600 text-white',
    archived: 'bg-gray-500 text-white',
    resolved: 'bg-green-600 text-white',
    disputed: 'bg-yellow-600 text-white',
    completed: 'bg-green-600 text-white',
    connected: 'bg-green-600 text-white',
    disconnected: 'bg-red-600 text-white',
  }
  return statusColors[status] || 'bg-gray-600 text-white'
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str
  return str.slice(0, length) + '...'
}

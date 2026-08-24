import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  Music,
  AlertCircle,
  Zap,
  FileText,
  Settings as SettingsIcon,
  DollarSign,
  BarChart3,
  Users,
  ChevronDown,
  Menu,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const Sidebar: React.FC = () => {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(true)

  const isActive = (path: string) => location.pathname === path

  const menuGroups = [
    {
      title: 'CORE',
      items: [
        { icon: LayoutDashboard, label: 'Overview', path: '/' },
        { icon: Music, label: 'Assets', path: '/assets' },
      ],
    },
    {
      title: 'CONTENT ID',
      items: [
        { icon: AlertCircle, label: 'Claims', path: '/claims' },
        { icon: Zap, label: 'Matches', path: '/matches' },
        { icon: FileText, label: 'Reference Files', path: '/reference-files' },
      ],
    },
    {
      title: 'MANAGEMENT',
      items: [
        { icon: Settings, label: 'Policies', path: '/policies' },
        { icon: Settings, label: 'Match Rules', path: '/match-rules' },
        { icon: Settings, label: 'Licenses', path: '/licenses' },
        { icon: Settings, label: 'Rights Holders', path: '/rights-holders' },
      ],
    },
    {
      title: 'CHANNELS & DISPUTES',
      items: [
        { icon: Settings, label: 'Channels', path: '/channels' },
        { icon: AlertCircle, label: 'DMCA', path: '/dmca' },
        { icon: AlertCircle, label: 'Takedowns', path: '/takedowns' },
        { icon: AlertCircle, label: 'Strikes', path: '/strikes' },
      ],
    },
    {
      title: 'BUSINESS',
      items: [
        { icon: DollarSign, label: 'Revenue', path: '/revenue' },
        { icon: BarChart3, label: 'Analytics', path: '/analytics' },
      ],
    },
    {
      title: 'ADMINISTRATION',
      items: [
        { icon: Users, label: 'Users & Permissions', path: '/users' },
        { icon: SettingsIcon, label: 'Settings', path: '/settings' },
      ],
    },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-blue-primary text-white p-2 rounded-lg"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <aside
        className={cn(
          'fixed left-0 top-0 h-screen w-64 bg-dark-900 border-r border-dark-600 overflow-y-auto transition-transform duration-300 z-40',
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        )}
      >
        <div className="p-6 border-b border-dark-600">
          <h1 className="text-2xl font-bold">
            <span className="text-white">PRK</span>
            <span className="text-blue-primary"> Media</span>
          </h1>
          <p className="text-xs text-dark-100 mt-1">CMS Platform</p>
        </div>

        <nav className="p-4 space-y-6">
          {menuGroups.map((group) => (
            <div key={group.title}>
              <h3 className="text-xs font-bold text-dark-100 uppercase tracking-wider px-3 mb-3">
                {group.title}
              </h3>
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon
                  const active = isActive(item.path)

                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200',
                        active
                          ? 'bg-blue-primary text-white shadow-lg shadow-blue-primary/20'
                          : 'text-dark-200 hover:text-white hover:bg-dark-700'
                      )}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-dark-600 bg-dark-950">
          <div className="text-xs text-dark-100 text-center">
            <p>v0.1.0 Beta</p>
            <p className="mt-1 text-dark-200">© 2024 PRK Media</p>
          </div>
        </div>
      </aside>
    </>
  )
}

function Settings() {
  return <SettingsIcon />
}

export default Sidebar

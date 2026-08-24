import React from 'react'
import { Search, Bell, User, LogOut } from 'lucide-react'

const Topbar: React.FC = () => {
  return (
    <header className="h-16 bg-dark-800 border-b border-dark-600 px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-dark-900 border border-dark-600 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-8">
        <button className="relative p-2 text-dark-200 hover:text-white transition-colors">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-dark-600">
          <div className="w-9 h-9 bg-blue-primary rounded-full flex items-center justify-center text-sm font-bold">
            PR
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white">Admin</p>
            <p className="text-xs text-dark-200">PRK Media</p>
          </div>
          <button className="p-2 text-dark-200 hover:text-white transition-colors">
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Topbar

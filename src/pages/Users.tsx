import React from 'react'
import { Search, Filter, Plus, Edit2, Trash2, Shield } from 'lucide-react'

const Users: React.FC = () => {
  const users = [
    {
      id: '1',
      name: 'Admin User',
      email: 'admin@prkmedia.com',
      role: 'admin',
      status: 'active',
      joinedAt: '2023-06-01',
      permissions: ['All'],
    },
    {
      id: '2',
      name: 'Content Manager',
      email: 'manager@prkmedia.com',
      role: 'manager',
      status: 'active',
      joinedAt: '2023-08-15',
      permissions: ['Assets', 'Claims', 'Revenue'],
    },
    {
      id: '3',
      name: 'Viewer User',
      email: 'viewer@prkmedia.com',
      role: 'user',
      status: 'active',
      joinedAt: '2023-10-20',
      permissions: ['Dashboard', 'Analytics'],
    },
  ]

  const getRoleColor = (role: string) => {
    const colors: Record<string, string> = {
      admin: 'bg-red-900 text-red-300',
      manager: 'bg-yellow-900 text-yellow-300',
      user: 'bg-green-900 text-green-300',
    }
    return colors[role] || 'bg-gray-700 text-gray-300'
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
            <Shield size={32} />
            Users & Permissions
          </h1>
          <p className="text-dark-200">Manage team members and access control</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit">
          <Plus size={18} />
          Add User
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-dark-800 border border-dark-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
          />
        </div>
        <button className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:border-blue-primary text-white px-4 py-2 rounded-lg transition-colors">
          <Filter size={18} />
          Filter
        </button>
      </div>

      <div className="bg-dark-800 border border-dark-600 rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-dark-900 border-b border-dark-600">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Permissions</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-dark-200 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-600">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-dark-700 transition-colors">
                  <td className="px-6 py-4 text-sm text-white font-medium">{user.name}</td>
                  <td className="px-6 py-4 text-sm text-dark-200">{user.email}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-dark-200">{user.permissions.join(', ')}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-900 text-green-300">
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm flex gap-2">
                    <button className="text-blue-primary hover:text-blue-light transition-colors">
                      <Edit2 size={16} />
                    </button>
                    <button className="text-red-500 hover:text-red-400 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 bg-dark-800 border border-blue-primary/30 rounded-lg p-4">
        <p className="text-sm text-blue-primary">
          <strong>Note:</strong> User management requires Supabase Auth integration for production use.
        </p>
      </div>
    </div>
  )
}

export default Users

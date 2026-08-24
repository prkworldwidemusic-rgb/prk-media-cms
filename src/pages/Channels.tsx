import React from 'react'
import { Search, Filter, Plus, CheckCircle, AlertCircle } from 'lucide-react'

const Channels: React.FC = () => {
  const channels = [
    {
      id: '1',
      platform: 'youtube',
      channelName: 'PRK Media Official',
      channelId: 'UCxxxxxxxxxxxxxxx',
      status: 'connected',
      lastSync: '2024-01-24 14:30',
    },
    {
      id: '2',
      platform: 'spotify',
      channelName: 'PRK Music Artist',
      channelId: 'spotify:artist:xxxxx',
      status: 'connected',
      lastSync: '2024-01-24 13:15',
    },
    {
      id: '3',
      platform: 'apple_music',
      channelName: 'PRK Releases',
      channelId: 'am-artist-xxxxx',
      status: 'disconnected',
      lastSync: '2024-01-20 10:00',
    },
  ]

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Channels</h1>
          <p className="text-dark-200">Connect and manage distribution channels</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit">
          <Plus size={18} />
          Connect Channel
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search channels..."
            className="w-full bg-dark-800 border border-dark-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
          />
        </div>
        <button className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:border-blue-primary text-white px-4 py-2 rounded-lg transition-colors">
          <Filter size={18} />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {channels.map((channel) => (
          <div key={channel.id} className="bg-dark-800 border border-dark-600 rounded-lg p-6 hover:border-blue-primary transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-xs text-dark-200 uppercase font-semibold">{channel.platform}</p>
                <h3 className="text-lg font-semibold text-white mt-1">{channel.channelName}</h3>
              </div>
              {channel.status === 'connected' ? (
                <CheckCircle className="text-green-500" size={20} />
              ) : (
                <AlertCircle className="text-red-500" size={20} />
              )}
            </div>
            <p className="text-xs text-dark-200 mb-4 font-mono break-all">{channel.channelId}</p>
            <div className="pt-4 border-t border-dark-600">
              <p className="text-xs text-dark-200">
                <span className="font-semibold">Last Sync:</span> {channel.lastSync}
              </p>
            </div>
            <button className="w-full mt-4 bg-dark-700 hover:bg-dark-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              {channel.status === 'connected' ? 'Manage' : 'Reconnect'}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-dark-800 border border-blue-primary/30 rounded-lg p-4">
        <p className="text-sm text-blue-primary">
          <strong>Note:</strong> Channels from existing Supabase 'channels' table will be loaded here. YouTube API configuration deferred.
        </p>
      </div>
    </div>
  )
}

export default Channels

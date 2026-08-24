import React from 'react'
import { Search, Filter, Plus, ExternalLink, Edit2, Trash2 } from 'lucide-react'
import { FaYoutube, FaFacebook, FaInstagram, FaTwitch, FaSpotify } from 'react-icons/fa'

const Channels: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false)
  
  const channels = [
    {
      id: '1',
      platform: 'youtube',
      channelName: 'PRK Media Official',
      username: '@prkmedia',
      url: 'https://youtube.com/c/prkmediaofficial',
      status: 'active',
      notes: 'Main channel for official uploads',
    },
    {
      id: '2',
      platform: 'spotify',
      channelName: 'PRK Music Artist',
      username: 'prkmusic',
      url: 'https://open.spotify.com/artist/xxxxx',
      status: 'active',
      notes: 'Artist profile for streaming releases',
    },
    {
      id: '3',
      platform: 'instagram',
      channelName: 'PRK Productions',
      username: '@prk.productions',
      url: 'https://instagram.com/prk.productions',
      status: 'active',
      notes: 'Social media presence',
    },
    {
      id: '4',
      platform: 'facebook',
      channelName: 'PRK Media Page',
      username: 'prkmedia',
      url: 'https://facebook.com/prkmedia',
      status: 'inactive',
      notes: 'Legacy Facebook page - not actively maintained',
    },
  ]

  const platformInfo: Record<string, { color: string; icon: string }> = {
    youtube: { color: 'bg-red-900 border-red-700', icon: '▶' },
    spotify: { color: 'bg-green-900 border-green-700', icon: '♫' },
    instagram: { color: 'bg-pink-900 border-pink-700', icon: '📷' },
    facebook: { color: 'bg-blue-900 border-blue-700', icon: 'f' },
    twitch: { color: 'bg-purple-900 border-purple-700', icon: '▶' },
    tiktok: { color: 'bg-gray-800 border-gray-700', icon: '♪' },
    twitter: { color: 'bg-sky-900 border-sky-700', icon: '𝕏' },
    other: { color: 'bg-dark-700 border-dark-600', icon: '◉' },
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Channels & Accounts</h1>
          <p className="text-dark-200">Manage your multi-platform presence and distribution channels</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors w-fit"
        >
          <Plus size={18} />
          Add Account
        </button>
      </div>

      {/* Add Account Form */}
      {showForm && (
        <div className="bg-dark-800 border border-dark-600 rounded-lg p-6 mb-8">
          <h3 className="text-lg font-semibold text-white mb-6">Add New Account</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Platform</label>
              <select className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-primary">
                <option>YouTube</option>
                <option>Spotify</option>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>TikTok</option>
                <option>Twitch</option>
                <option>Twitter/X</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Channel/Page Name</label>
              <input
                type="text"
                className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
                placeholder="e.g., PRK Media Official"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Username/Handle</label>
              <input
                type="text"
                className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
                placeholder="e.g., @prkmedia"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Channel URL</label>
              <input
                type="url"
                className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
                placeholder="https://..."
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-white mb-2">Notes</label>
              <textarea
                className="w-full bg-dark-900 border border-dark-600 rounded-lg px-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary h-20 resize-none"
                placeholder="Add notes about this account..."
              />
            </div>
          </div>
          <div className="mt-6 flex gap-3">
            <button className="bg-blue-primary hover:bg-blue-light text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Add Account
            </button>
            <button
              onClick={() => setShowForm(false)}
              className="bg-dark-700 hover:bg-dark-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Filter and Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-dark-200" size={18} />
          <input
            type="text"
            placeholder="Search accounts..."
            className="w-full bg-dark-800 border border-dark-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-dark-200 focus:outline-none focus:border-blue-primary"
          />
        </div>
        <button className="flex items-center gap-2 bg-dark-800 border border-dark-600 hover:border-blue-primary text-white px-4 py-2 rounded-lg transition-colors">
          <Filter size={18} />
          <span className="hidden sm:inline">Filter</span>
        </button>
      </div>

      {/* Channels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {channels.map((channel) => {
          const platform = platformInfo[channel.platform as keyof typeof platformInfo] || platformInfo['other']
          return (
            <div key={channel.id} className={`border-2 rounded-lg p-6 hover:shadow-lg transition-all ${
              platform.color
            }`}>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-3 ${
                    platform.color.split(' ')[0]
                  }`}>
                    {platform.icon}
                  </div>
                  <p className="text-xs text-gray-300 uppercase font-semibold tracking-wider mb-1">
                    {channel.platform}
                  </p>
                  <h3 className="text-lg font-semibold text-white">{channel.channelName}</h3>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-gray-300 hover:text-white transition-colors">
                    <Edit2 size={16} />
                  </button>
                  <button className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-300 font-mono mb-3">{channel.username}</p>

              <a
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-primary hover:text-blue-light transition-colors text-sm font-medium mb-4"
              >
                Visit Channel
                <ExternalLink size={14} />
              </a>

              {channel.notes && (
                <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-600">{channel.notes}</p>
              )}

              <div className="mt-4 flex items-center justify-between">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                  channel.status === 'active'
                    ? 'bg-green-900/50 text-green-300'
                    : 'bg-gray-800 text-gray-400'
                }`}>
                  {channel.status}
                </span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Platform Guide */}
      <div className="bg-dark-800 border border-dark-600 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Supported Platforms</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {Object.entries(platformInfo).map(([platform, info]) => (
            <div key={platform} className="flex items-center gap-2">
              <div className="w-6 h-6 rounded flex items-center justify-center text-white font-bold text-xs">
                {info.icon}
              </div>
              <span className="text-gray-300 capitalize">{platform === 'tiktok' ? 'TikTok' : platform === 'twitter' ? 'X' : platform}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Info Banner */}
      <div className="mt-8 bg-dark-800 border border-blue-primary/30 rounded-lg p-4">
        <p className="text-sm text-blue-primary">
          <strong>Note:</strong> This is a manual multi-platform account directory. OAuth/API integration for automatic sync will be available in future updates. Add your channels and social accounts manually for now.
        </p>
      </div>
    </div>
  )
}

export default Channels

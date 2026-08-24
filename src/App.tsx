import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import Dashboard from '@/pages/Dashboard'
import Assets from '@/pages/Assets'
import Claims from '@/pages/Claims'
import Matches from '@/pages/Matches'
import ReferenceFiles from '@/pages/ReferenceFiles'
import Policies from '@/pages/Policies'
import MatchRules from '@/pages/MatchRules'
import Licenses from '@/pages/Licenses'
import RightsHolders from '@/pages/RightsHolders'
import Channels from '@/pages/Channels'
import DMCA from '@/pages/DMCA'
import Takedowns from '@/pages/Takedowns'
import Strikes from '@/pages/Strikes'
import Ownership from '@/pages/Ownership'
import Revenue from '@/pages/Revenue'
import Analytics from '@/pages/Analytics'
import Users from '@/pages/Users'
import Settings from '@/pages/Settings'
import './index.css'

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-dark-950 text-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-0 lg:ml-64">
          <Topbar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/assets" element={<Assets />} />
              <Route path="/claims" element={<Claims />} />
              <Route path="/matches" element={<Matches />} />
              <Route path="/reference-files" element={<ReferenceFiles />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/match-rules" element={<MatchRules />} />
              <Route path="/licenses" element={<Licenses />} />
              <Route path="/rights-holders" element={<RightsHolders />} />
              <Route path="/channels" element={<Channels />} />
              <Route path="/dmca" element={<DMCA />} />
              <Route path="/takedowns" element={<Takedowns />} />
              <Route path="/strikes" element={<Strikes />} />
              <Route path="/ownership" element={<Ownership />} />
              <Route path="/revenue" element={<Revenue />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App

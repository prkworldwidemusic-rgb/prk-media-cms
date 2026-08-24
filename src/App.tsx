import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from '@/components/Sidebar'
import Topbar from '@/components/Topbar'
import Dashboard from '@/pages/Dashboard'
import Assets from '@/pages/Assets'
import Claims from '@/pages/Claims'
import Matches from '@/pages/Matches'
import './index.css'

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-dark-950 text-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-64">
          <Topbar />
          <main className="flex-1 overflow-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/assets" element={<Assets />} />
              <Route path="/claims" element={<Claims />} />
              <Route path="/matches" element={<Matches />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App

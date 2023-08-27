import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { UserProvider } from './components/Context'
import Navbar from './components/Navbar'
import Home from './components/Home'
import CreateAccount from './components/CreateAccount'
import Deposit from './components/Deposit'
import Withdraw from './components/Withdraw'
import AllData from './components/AllData'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <UserProvider>
        <div className="container" style={{ padding: '20px', margin: '20px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            <Route path="/alldata/" element={<AllData />} />
          </Routes>
        </div>
      </UserProvider>
    </HashRouter>
  )
}

export default App

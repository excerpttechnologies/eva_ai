import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import LandingPage from './pages/LandingPage'
import Registerpage from './pages/Registerpage'
import Loginpage from './pages/loginpage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<Home />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
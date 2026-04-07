import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import LendingPage from './pages/LendingPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LendingPage />} />
        <Route path="/app" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

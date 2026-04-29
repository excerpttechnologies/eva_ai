import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import LendingPage from './pages/LendingPage'
import RegisterPage from './pages/Registerpage'
import LoginPage from './pages/loginpage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LendingPage />} />
        <Route path="/app" element={<Home />} />
         <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

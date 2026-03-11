import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Menu from "./pages/Menu.jsx"
import OrderTrack from "./pages/OrderTrack.jsx"
import Restaurants from "./pages/Restaurants.jsx"
import Profile from "./pages/Profile.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/menu" className="hover:text-blue-600 transition">Menu</Link>
            <Link to="/order-track" className="hover:text-blue-600 transition">OrderTrack</Link>
            <Link to="/restaurants" className="hover:text-blue-600 transition">Restaurants</Link>
            <Link to="/profile" className="hover:text-blue-600 transition">Profile</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order-track" element={<OrderTrack />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/profile" element={<Profile />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Hero from "./pages/Hero.jsx"
import Catalog from "./pages/Catalog.jsx"
import FeaturedBooks from "./pages/FeaturedBooks.jsx"
import LoginSignup from "./pages/LoginSignup.jsx"
import AdminDashboard from "./pages/AdminDashboard.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/hero" className="hover:text-blue-600 transition">Hero</Link>
            <Link to="/catalog" className="hover:text-blue-600 transition">Catalog</Link>
            <Link to="/featured-books" className="hover:text-blue-600 transition">FeaturedBooks</Link>
            <Link to="/login-signup" className="hover:text-blue-600 transition">LoginSignup</Link>
            <Link to="/admin-dashboard" className="hover:text-blue-600 transition">AdminDashboard</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/featured-books" element={<FeaturedBooks />} />
          <Route path="/login-signup" element={<LoginSignup />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/" element={<Hero />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import LibraryManagement from "./pages/LibraryManagement.jsx"
import Features from "./pages/Features.jsx"
import Pricing from "./pages/Pricing.jsx"
import Contact from "./pages/Contact.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/library-management" className="hover:text-blue-600 transition">Library-Management</Link>
            <Link to="/features" className="hover:text-blue-600 transition">Features</Link>
            <Link to="/pricing" className="hover:text-blue-600 transition">Pricing</Link>
            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library-management" element={<LibraryManagement />} />
          <Route path="/features" element={<Features />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
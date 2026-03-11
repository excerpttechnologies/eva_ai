import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home.jsx"
import Features from "./pages/Features.jsx"
import Playlists from "./pages/Playlists.jsx"
import Albums from "./pages/Albums.jsx"
import Pricing from "./pages/Pricing.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <Layout>

        <nav className="bg-white shadow-md sticky top-0 z-50 mb-10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">AI Builder</h1>
            <div className="flex gap-6 font-medium text-gray-700">
              <Link to="/" className="hover:text-primary transition">Home</Link>
              <Link to="/features" className="hover:text-primary transition">Features</Link>
              <Link to="/playlists" className="hover:text-primary transition">Playlists</Link>
              <Link to="/albums" className="hover:text-primary transition">Albums</Link>
              <Link to="/pricing" className="hover:text-primary transition">Pricing</Link>

            </div>
          </div>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/pricing" element={<Pricing />} />

        </Routes>

      </Layout>
    </BrowserRouter>
  )
}
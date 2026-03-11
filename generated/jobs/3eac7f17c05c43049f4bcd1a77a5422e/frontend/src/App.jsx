import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import AudioPlayback from "./pages/AudioPlayback.jsx"
import Playlists from "./pages/Playlists.jsx"
import Albums from "./pages/Albums.jsx"
import PremiumFeatures from "./pages/PremiumFeatures.jsx"
import Support from "./pages/Support.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <Layout>

        <nav className="bg-white shadow-md sticky top-0 z-50 mb-10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">AI Builder</h1>
            <div className="flex gap-6 font-medium text-gray-700">
              <Link to="/audio-playback" className="hover:text-primary transition">Audio Playback</Link>
              <Link to="/playlists" className="hover:text-primary transition">Playlists</Link>
              <Link to="/albums" className="hover:text-primary transition">Albums</Link>
              <Link to="/premium-features" className="hover:text-primary transition">Premium Features</Link>
              <Link to="/support" className="hover:text-primary transition">Support</Link>

            </div>
          </div>
        </nav>

        <Routes>
            <Route path="/audio-playback" element={<AudioPlayback />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/premium-features" element={<PremiumFeatures />} />
            <Route path="/support" element={<Support />} />
            <Route path="/" element={<AudioPlayback />} />

        </Routes>

      </Layout>
    </BrowserRouter>
  )
}
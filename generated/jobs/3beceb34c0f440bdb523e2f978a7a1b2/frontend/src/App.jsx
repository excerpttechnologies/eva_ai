import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import AudioPlayback from "./pages/AudioPlayback.jsx"
import Playlists from "./pages/Playlists.jsx"
import Albums from "./pages/Albums.jsx"
import PremiumFeatures from "./pages/PremiumFeatures.jsx"
import Support from "./pages/Support.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/audio-playback" className="hover:text-blue-600 transition">AudioPlayback</Link>
            <Link to="/playlists" className="hover:text-blue-600 transition">Playlists</Link>
            <Link to="/albums" className="hover:text-blue-600 transition">Albums</Link>
            <Link to="/premium-features" className="hover:text-blue-600 transition">PremiumFeatures</Link>
            <Link to="/support" className="hover:text-blue-600 transition">Support</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/audio-playback" element={<AudioPlayback />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/premium-features" element={<PremiumFeatures />} />
          <Route path="/support" element={<Support />} />
          <Route path="/" element={<AudioPlayback />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
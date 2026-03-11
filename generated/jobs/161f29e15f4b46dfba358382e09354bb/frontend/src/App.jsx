import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import VideoUpload from "./pages/VideoUpload.jsx"
import PlayerExperience from "./pages/PlayerExperience.jsx"
import PlaylistManagement from "./pages/PlaylistManagement.jsx"
import SubscriptionServices from "./pages/SubscriptionServices.jsx"
import FAQ from "./pages/FAQ.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/video-upload" className="hover:text-blue-600 transition">VideoUpload</Link>
            <Link to="/player-experience" className="hover:text-blue-600 transition">PlayerExperience</Link>
            <Link to="/playlist-management" className="hover:text-blue-600 transition">PlaylistManagement</Link>
            <Link to="/subscription-services" className="hover:text-blue-600 transition">SubscriptionServices</Link>
            <Link to="/faq" className="hover:text-blue-600 transition">FAQ</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/video-upload" element={<VideoUpload />} />
          <Route path="/player-experience" element={<PlayerExperience />} />
          <Route path="/playlist-management" element={<PlaylistManagement />} />
          <Route path="/subscription-services" element={<SubscriptionServices />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/" element={<VideoUpload />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
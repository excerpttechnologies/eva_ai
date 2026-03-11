import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import RealtimeChatHome from "./pages/RealtimeChatHome.jsx"
import RealtimeChatFeatures from "./pages/RealtimeChatFeatures.jsx"
import RealtimeChatPricing from "./pages/RealtimeChatPricing.jsx"
import RealtimeChatContact from "./pages/RealtimeChatContact.jsx"
import RealtimeChatAbout from "./pages/RealtimeChatAbout.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/realtime-chat-home" className="hover:text-blue-600 transition">RealtimeChatHome</Link>
            <Link to="/realtime-chat-features" className="hover:text-blue-600 transition">RealtimeChatFeatures</Link>
            <Link to="/realtime-chat-pricing" className="hover:text-blue-600 transition">RealtimeChatPricing</Link>
            <Link to="/realtime-chat-contact" className="hover:text-blue-600 transition">RealtimeChatContact</Link>
            <Link to="/realtime-chat-about" className="hover:text-blue-600 transition">RealtimeChatAbout</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/realtime-chat-home" element={<RealtimeChatHome />} />
          <Route path="/realtime-chat-features" element={<RealtimeChatFeatures />} />
          <Route path="/realtime-chat-pricing" element={<RealtimeChatPricing />} />
          <Route path="/realtime-chat-contact" element={<RealtimeChatContact />} />
          <Route path="/realtime-chat-about" element={<RealtimeChatAbout />} />
          <Route path="/" element={<RealtimeChatHome />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
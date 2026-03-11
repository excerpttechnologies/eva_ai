import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import PrivateMessaging from "./pages/PrivateMessaging.jsx"
import GroupChats from "./pages/GroupChats.jsx"
import Profile from "./pages/Profile.jsx"
import Settings from "./pages/Settings.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/private-messaging" className="hover:text-blue-600 transition">Private-Messaging</Link>
            <Link to="/group-chats" className="hover:text-blue-600 transition">Group-Chats</Link>
            <Link to="/profile" className="hover:text-blue-600 transition">Profile</Link>
            <Link to="/settings" className="hover:text-blue-600 transition">Settings</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/private-messaging" element={<PrivateMessaging />} />
          <Route path="/group-chats" element={<GroupChats />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
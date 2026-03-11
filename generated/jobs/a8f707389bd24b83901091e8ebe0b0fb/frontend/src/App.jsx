import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import UserProfiles from "./pages/UserProfiles.jsx"
import PostsManagement from "./pages/PostsManagement.jsx"
import LikesSystem from "./pages/LikesSystem.jsx"
import CommentsSection from "./pages/CommentsSection.jsx"
import AccountSettings from "./pages/AccountSettings.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/user-profiles" className="hover:text-blue-600 transition">UserProfiles</Link>
            <Link to="/posts-management" className="hover:text-blue-600 transition">PostsManagement</Link>
            <Link to="/likes-system" className="hover:text-blue-600 transition">LikesSystem</Link>
            <Link to="/comments-section" className="hover:text-blue-600 transition">CommentsSection</Link>
            <Link to="/account-settings" className="hover:text-blue-600 transition">AccountSettings</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/user-profiles" element={<UserProfiles />} />
          <Route path="/posts-management" element={<PostsManagement />} />
          <Route path="/likes-system" element={<LikesSystem />} />
          <Route path="/comments-section" element={<CommentsSection />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/" element={<UserProfiles />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
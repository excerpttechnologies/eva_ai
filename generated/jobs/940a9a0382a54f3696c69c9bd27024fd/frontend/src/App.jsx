import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import UserProfiles from "./pages/UserProfiles.jsx"
import PostsManagement from "./pages/PostsManagement.jsx"
import LikesSystem from "./pages/LikesSystem.jsx"
import CommentsSection from "./pages/CommentsSection.jsx"
import AccountSettings from "./pages/AccountSettings.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <Layout>

        <nav className="bg-white shadow-md sticky top-0 z-50 mb-10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">AI Builder</h1>
            <div className="flex gap-6 font-medium text-gray-700">
              <Link to="/user-profiles" className="hover:text-primary transition">User Profiles</Link>
              <Link to="/posts-management" className="hover:text-primary transition">Posts Management</Link>
              <Link to="/likes-system" className="hover:text-primary transition">Likes System</Link>
              <Link to="/comments-section" className="hover:text-primary transition">Comments Section</Link>
              <Link to="/account-settings" className="hover:text-primary transition">Account Settings</Link>

            </div>
          </div>
        </nav>

        <Routes>
            <Route path="/user-profiles" element={<UserProfiles />} />
            <Route path="/posts-management" element={<PostsManagement />} />
            <Route path="/likes-system" element={<LikesSystem />} />
            <Route path="/comments-section" element={<CommentsSection />} />
            <Route path="/account-settings" element={<AccountSettings />} />
            <Route path="/" element={<UserProfiles />} />

        </Routes>

      </Layout>
    </BrowserRouter>
  )
}
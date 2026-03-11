import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import UserProfile from "./pages/UserProfile.jsx"
import PostDetail from "./pages/PostDetail.jsx"
import LikeManagement from "./pages/LikeManagement.jsx"
import CommentSystem from "./pages/CommentSystem.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/user-profile" className="hover:text-blue-600 transition">UserProfile</Link>
            <Link to="/post-detail" className="hover:text-blue-600 transition">PostDetail</Link>
            <Link to="/like-management" className="hover:text-blue-600 transition">LikeManagement</Link>
            <Link to="/comment-system" className="hover:text-blue-600 transition">CommentSystem</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/post-detail" element={<PostDetail />} />
          <Route path="/like-management" element={<LikeManagement />} />
          <Route path="/comment-system" element={<CommentSystem />} />
          <Route path="/" element={<UserProfile />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
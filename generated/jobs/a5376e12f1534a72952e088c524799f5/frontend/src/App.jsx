import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Overview from "./pages/Overview.jsx"
import Innovation from "./pages/Innovation.jsx"
import Testimonials from "./pages/Testimonials.jsx"
import Resources from "./pages/Resources.jsx"
import News from "./pages/News.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/overview" className="hover:text-blue-600 transition">Overview</Link>
            <Link to="/innovation" className="hover:text-blue-600 transition">Innovation</Link>
            <Link to="/testimonials" className="hover:text-blue-600 transition">Testimonials</Link>
            <Link to="/resources" className="hover:text-blue-600 transition">Resources</Link>
            <Link to="/news" className="hover:text-blue-600 transition">News</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/overview" element={<Overview />} />
          <Route path="/innovation" element={<Innovation />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/news" element={<News />} />
          <Route path="/" element={<Overview />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
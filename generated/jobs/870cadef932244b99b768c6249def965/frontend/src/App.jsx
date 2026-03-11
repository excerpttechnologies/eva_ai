import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import EducationERPHome from "./pages/EducationERPHome.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import StudentManagement from "./pages/StudentManagement.jsx"
import TeacherPortal from "./pages/TeacherPortal.jsx"
import AttendanceTracking from "./pages/AttendanceTracking.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/education-erphome" className="hover:text-blue-600 transition">EducationERPHome</Link>
            <Link to="/about-us" className="hover:text-blue-600 transition">AboutUs</Link>
            <Link to="/student-management" className="hover:text-blue-600 transition">StudentManagement</Link>
            <Link to="/teacher-portal" className="hover:text-blue-600 transition">TeacherPortal</Link>
            <Link to="/attendance-tracking" className="hover:text-blue-600 transition">AttendanceTracking</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/education-erphome" element={<EducationERPHome />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/student-management" element={<StudentManagement />} />
          <Route path="/teacher-portal" element={<TeacherPortal />} />
          <Route path="/attendance-tracking" element={<AttendanceTracking />} />
          <Route path="/" element={<EducationERPHome />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
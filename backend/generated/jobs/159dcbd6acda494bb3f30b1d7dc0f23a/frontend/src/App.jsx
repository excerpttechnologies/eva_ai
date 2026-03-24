import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import EducationERPHome from "./pages/EducationERPHome.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import StudentManagement from "./pages/StudentManagement.jsx"
import TeacherPortal from "./pages/TeacherPortal.jsx"
import AttendanceTracking from "./pages/AttendanceTracking.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <Layout>

        <nav className="bg-white shadow-md sticky top-0 z-50 mb-10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">AI Builder</h1>
            <div className="flex gap-6 font-medium text-gray-700">
              <Link to="/education-erphome" className="hover:text-primary transition">Education ERPHome</Link>
              <Link to="/about-us" className="hover:text-primary transition">About Us</Link>
              <Link to="/student-management" className="hover:text-primary transition">Student Management</Link>
              <Link to="/teacher-portal" className="hover:text-primary transition">Teacher Portal</Link>
              <Link to="/attendance-tracking" className="hover:text-primary transition">Attendance Tracking</Link>

            </div>
          </div>
        </nav>

        <Routes>
            <Route path="/education-erphome" element={<EducationERPHome />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/student-management" element={<StudentManagement />} />
            <Route path="/teacher-portal" element={<TeacherPortal />} />
            <Route path="/attendance-tracking" element={<AttendanceTracking />} />
            <Route path="/" element={<EducationERPHome />} />

        </Routes>

      </Layout>
    </BrowserRouter>
  )
}
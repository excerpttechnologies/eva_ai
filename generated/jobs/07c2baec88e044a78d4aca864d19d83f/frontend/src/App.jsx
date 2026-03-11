import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import StudentManagement from "./pages/StudentManagement.jsx"
import TeacherPortal from "./pages/TeacherPortal.jsx"
import AttendanceTracking from "./pages/AttendanceTracking.jsx"
import GradeBooks from "./pages/GradeBooks.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/student-management" className="hover:text-blue-600 transition">Student-Management</Link>
            <Link to="/teacher-portal" className="hover:text-blue-600 transition">Teacher-Portal</Link>
            <Link to="/attendance-tracking" className="hover:text-blue-600 transition">Attendance-Tracking</Link>
            <Link to="/grade-books" className="hover:text-blue-600 transition">Grade-Books</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-management" element={<StudentManagement />} />
          <Route path="/teacher-portal" element={<TeacherPortal />} />
          <Route path="/attendance-tracking" element={<AttendanceTracking />} />
          <Route path="/grade-books" element={<GradeBooks />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
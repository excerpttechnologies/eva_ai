import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function TeacherPortal() {
  return (
<div className="min-h-screen">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Teacher Portal</h1>
    <table className="w-full border-collapse border border-gray-200 mt-4">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="px-4 py-3">Student Name</th>
          <th className="px-4 py-3">Attendance</th>
          <th className="px-4 py-3">Grades</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td><span className="bg-green-200 text-green-600 p-1 rounded-full mr-2">Present</span></td>
          <td>
            <div className="flex items-center space-x-2">
              <div className="text-sm font-medium flex-shrink-0 bg-blue-200 text-blue-700 px-3 py-1 rounded-md">95%</div>
              <div className="text-sm font-medium flex-shrink-0 bg-red-200 text-red-600 px-3 py-1 rounded-md">80%</div>
            </div>
          </td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td><span className="bg-yellow-200 text-yellow-700 p-1 rounded-full mr-2">Absent</span></td>
          <td>
            <div className="flex items-center space-x-2">
              <div className="text-sm font-medium flex-shrink-0 bg-green-200 text-green-600 px-3 py-1 rounded-md">98%</div>
              <div className="text-sm font-medium flex-shrink-0 bg-red-200 text-red-600 px-3 py-1 rounded-md">75%</div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
  )
}
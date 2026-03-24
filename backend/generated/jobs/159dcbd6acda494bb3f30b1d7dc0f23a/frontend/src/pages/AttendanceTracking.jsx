import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function AttendanceTracking() {
  return (
<div className="min-h-screen">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Attendance Tracking</h1>
    <table className="w-full border-collapse table-fixed">
      <thead>
        <tr>
          <th className="border border-gray-200 p-2 text-left">Student Name</th>
          <th className="border border-gray-200 p-2 text-center">Date</th>
          <th className="border border-gray-200 p-2 text-center">Status</th>
        </tr>
      </thead>
      <tbody>
        {[
          { studentName: 'John Doe', date: new Date(2023, 9, 1), status: 'Present' },
          { studentName: 'Jane Smith', date: new Date(2023, 9, 2), status: 'Absent' },
          { studentName: 'Alice Johnson', date: new Date(2023, 9, 3), status: 'Present' }
        ].map((student, index) => (
          <tr key={index} className="border border-gray-200 p-2">
            <td>{student.studentName}</td>
            <td className="text-center">{student.date.toLocaleDateString()}</td>
            <td className="text-center">{student.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  )
}
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function StudentManagement() {
  return (
<div className="min-h-screen">
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-6">Student Management</h1>
    <table className="w-full border-collapse border border-gray-200 mt-4">
      <thead>
        <tr>
          <th className="px-4 py-2 text-left">ID</th>
          <th className="px-4 py-2 text-left">Name</th>
          <th className="px-4 py-2 text-left">Class</th>
          <th className="px-4 py-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {[
          { id: 1, name: 'John Doe', class: 'Grade 5' },
          { id: 2, name: 'Jane Smith', class: 'Grade 6' },
          { id: 3, name: 'Alice Johnson', class: 'Grade 7' }
        ].map((student) => (
          <tr key={student.id} className="hover:bg-gray-100">
            <td className="px-4 py-2">{student.id}</td>
            <td className="px-4 py-2 text-sm font-medium leading-tight truncate">{student.name}</td>
            <td className="px-4 py-2 text-sm font-medium leading-tight truncate">{student.class}</td>
            <td className="px-4 py-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3">View</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
  )
}
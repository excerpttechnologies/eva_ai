import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function EducationERPHome() {
  return (
<div className="min-h-screen">
  <header>
    <h1>Welcome to Education ERP</h1>
  </header>
  <main>
    <section>
      <h2>Student Management</h2>
      <ul>
        <li><strong>Name:</strong> John Doe</li>
        <li><strong>Email:</strong> john.doe@example.com</li>
        <li><strong>Class:</strong> Grade 10</li>
      </ul>
    </section>
    <section>
      <h2>Teacher Portal</h2>
      <p>Welcome, Mr. Smith!</p>
    </section>
    <section>
      <h2>Attendance Tracking</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Class</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>2023-10-05</td>
          <td>Math</td>
          <td>Absent</td>
        </tr>
      </table>
    </section>
    <section>
      <h2>Grade Books</h2>
      <p><strong>Marks:</strong> 85/100 in Math, 90/100 in English</p>
    </section>
  </main>
</div>
  )
}
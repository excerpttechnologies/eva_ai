import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Teachers() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Edify Teachers Portal 📚</h1>
    <p className="text-gray-600 leading-relaxed">Welcome to Edify, your one-stop education platform for teachers, students, and administrators.</p>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Class Management 📖</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Class Schedule 📅</h3>
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Class</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Room</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">Math 101</td>
              <td className="px-4 py-2">9:00 AM - 10:00 AM</td>
              <td className="px-4 py-2">Room 101</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Science 202</td>
              <td className="px-4 py-2">10:00 AM - 11:00 AM</td>
              <td className="px-4 py-2">Room 202</td>
            </tr>
          </tbody>
        </table>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Attendance Tracking 📊</h3>
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Student</th>
              <th className="px-4 py-2">Attendance</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">90%</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Jane Doe</td>
              <td className="px-4 py-2">95%</td>
            </tr>
          </tbody>
        </table>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Grade Book 📚</h3>
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Student</th>
              <th className="px-4 py-2">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">John Doe</td>
              <td className="px-4 py-2">A-</td>
            </tr>
            <tr>
              <td className="px-4 py-2">Jane Doe</td>
              <td className="px-4 py-2">A+</td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Teacher Profile 📄</h2>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold">Teacher Information 📝</h3>
      <div className="flex flex-col">
        <label className="text-gray-600">Name:</label>
        <Input label="Name" placeholder="John Doe" type="text" />
        <label className="text-gray-600">Email:</label>
        <Input label="Email" placeholder="johndoe@example.com" type="email" />
        <label className="text-gray-600">Phone:</label>
        <Input label="Phone" placeholder="123-456-7890" type="tel" />
      </div>
    </Card>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Course Management 📚</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Course List 📖</h3>
        <ul>
          <li>Math 101</li>
          <li>Science 202</li>
          <li>English 303</li>
        </ul>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Course Creation 📝</h3>
        <div className="flex flex-col">
          <label className="text-gray-600">Course Name:</label>
          <Input label="Course Name" placeholder="Math 101" type="text" />
          <label className="text-gray-600">Course Description:</label>
          <Input label="Course Description" placeholder="This is a math course" type="text" />
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Create Course</Button>
        </div>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Calendar 📅</h2>
    <div className="calendar">
      <div className="calendar-header">
        <h3 className="text-xl font-semibold">September 2024</h3>
      </div>
      <div className="calendar-body">
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Sunday</th>
              <th className="px-4 py-2">Monday</th>
              <th className="px-4 py-2">Tuesday</th>
              <th className="px-4 py-2">Wednesday</th>
              <th className="px-4 py-2">Thursday</th>
              <th className="px-4 py-2">Friday</th>
              <th className="px-4 py-2">Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">1</td>
              <td className="px-4 py-2">2</td>
              <td className="px-4 py-2">3</td>
              <td className="px-4 py-2">4</td>
              <td className="px-4 py-2">5</td>
              <td className="px-4 py-2">6</td>
              <td className="px-4 py-2">7</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Charts and Graphs 📊</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Student Performance 📈</h3>
        <div className="chart">
          <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <rect x="10" y="10" width="50" height="50" fill="#007bff" rx="5" />
            <rect x="70" y="10" width="20" height="50" fill="#dc3545" rx="5" />
          </svg>
        </div>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Teacher Performance 📊</h3>
        <div className="chart">
          <svg width="100%" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <rect x="10" y="10" width="50" height="50" fill="#28a745" rx="5" />
            <rect x="70" y="10" width="20" height="50" fill="#17a2b8" rx="5" />
          </svg>
        </div>
      </Card>
    </div>
  </section>
</div>
    </Layout>
  )
}
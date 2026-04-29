import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Attendancetracking() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-screen">
  <div className="container max-w-7xl mx-auto">
    <section className="py-20 px-6">
      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" alt="Attendance Tracking" className="w-full h-[520px] object-cover absolute inset-0" />
        <div className="overlay bg-black bg-opacity-50 absolute inset-0" />
        <h1 className="text-4xl font-bold text-gray-900 relative z-10">Attendance Tracking 📚</h1>
      </div>
    </section>
    <section className="py-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Student Attendance" className="w-full h-64 object-cover rounded-2xl" />
          <h2 className="text-3xl font-bold">Student Attendance 📊</h2>
          <p className="text-gray-600 leading-relaxed">Track student attendance in real-time, with automated reports and notifications 📣</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Teacher Attendance" className="w-full h-64 object-cover rounded-2xl" />
          <h2 className="text-3xl font-bold">Teacher Attendance 📚</h2>
          <p className="text-gray-600 leading-relaxed">Monitor teacher attendance, with customizable reports and alerts 📝</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Admin Attendance" className="w-full h-64 object-cover rounded-2xl" />
          <h2 className="text-3xl font-bold">Admin Attendance 📊</h2>
          <p className="text-gray-600 leading-relaxed">View attendance reports for students, teachers, and staff, with drill-down capabilities 📊</p>
        </Card>
      </div>
    </section>
    <section className="py-20 px-6">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold">Action Area 🚀</h2>
        <p className="text-gray-600 leading-relaxed">Take action on attendance data, with customizable workflows and notifications 📣</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Attendance Reports 📊</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Manage Attendance Settings 📝</Button>
      </div>
    </section>
    <section className="py-20 px-6">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-bold">Call to Action 📣</h2>
        <p className="text-gray-600 leading-relaxed">Get started with Edify's attendance tracking features today, and discover the power of data-driven decision making 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Sign up for Edify 📚</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Learn more about Edify 📖</Button>
      </div>
    </section>
  </div>
</div>
    </Layout>
  )
}
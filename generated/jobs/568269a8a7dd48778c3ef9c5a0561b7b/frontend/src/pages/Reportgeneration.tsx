import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Reportgeneration() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Report Generation 📊</h1>
    <p className="text-gray-600 leading-relaxed">Generate detailed reports for students, teachers, and administrators.</p>
  </section>
  <section className="py-10 px-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-bold">Date Controls</h2>
      <div className="flex items-center">
        <Input label="Start Date" placeholder="2022-01-01" type="date" />
        <Input label="End Date" placeholder="2022-12-31" type="date" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Generate Report 📄</Button>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Student Enrollment 📚</h3>
        <p className="text-gray-600 leading-relaxed">1200 students enrolled in the current semester.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+10% 🚀</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Teacher Count 👨‍🏫</h3>
        <p className="text-gray-600 leading-relaxed">50 teachers employed in the current semester.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+5% 📈</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Course Offerings 📖</h3>
        <p className="text-gray-600 leading-relaxed">200 courses offered in the current semester.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+20% 🚀</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Attendance Rate 📊</h3>
        <p className="text-gray-600 leading-relaxed">95% average attendance rate in the current semester.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+2% 📈</Badge>
      </Card>
    </div>
  </section>
  <section className="py-10 px-6">
    <h2 className="text-3xl font-bold">Large Bar Chart 📊</h2>
    <div className="h-96">
      <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" alt="Bar chart" className="w-full h-full object-cover rounded-2xl" />
    </div>
  </section>
  <section className="py-10 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="h-48">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Chart" className="w-full h-full object-cover rounded-2xl" />
      </div>
      <div className="h-48">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Chart" className="w-full h-full object-cover rounded-2xl" />
      </div>
    </div>
  </section>
  <section className="py-10 px-6">
    <h2 className="text-3xl font-bold">Data Table 📊</h2>
    <table className="w-full table-auto">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2">Student Name</th>
          <th className="px-4 py-2">Attendance Rate</th>
          <th className="px-4 py-2">Grade</th>
          <th className="px-4 py-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-2">John Doe</td>
          <td className="px-4 py-2">95%</td>
          <td className="px-4 py-2">A</td>
          <td className="px-4 py-2"><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Active 📈</Badge></td>
        </tr>
        <tr>
          <td className="px-4 py-2">Jane Doe</td>
          <td className="px-4 py-2">90%</td>
          <td className="px-4 py-2">B</td>
          <td className="px-4 py-2"><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Active 📈</Badge></td>
        </tr>
        <tr>
          <td className="px-4 py-2">Bob Smith</td>
          <td className="px-4 py-2">80%</td>
          <td className="px-4 py-2">C</td>
          <td className="px-4 py-2"><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">Inactive 🚫</Badge></td>
        </tr>
      </tbody>
    </table>
  </section>
  <section className="py-10 px-6">
    <h2 className="text-3xl font-bold">Insights Panel 📊</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Student Engagement 📊</h3>
        <p className="text-gray-600 leading-relaxed">Average student engagement rate: 85%</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Teacher Performance 📊</h3>
        <p className="text-gray-600 leading-relaxed">Average teacher performance rating: 4.5/5</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Course Effectiveness 📊</h3>
        <p className="text-gray-600 leading-relaxed">Average course effectiveness rating: 4.2/5</p>
      </Card>
    </div>
  </section>
</div>
    </Layout>
  )
}
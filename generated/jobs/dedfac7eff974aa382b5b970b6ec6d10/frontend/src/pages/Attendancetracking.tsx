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
      <div className="gradient-hero-banner bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
  <h1 className="text-4xl font-bold text-white">Attendance Tracking 📊</h1>
  <p className="text-xl text-gray-200 leading-relaxed mt-4">Effortlessly monitor and manage student attendance with EduFlow 📚</p>
  <Button className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-xl hover:bg-indigo-900 transition-all duration-200 mt-6">Generate Attendance Report 📄</Button>
</div>

<section className="py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Attendance Overview 📊</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <Card className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
        <h3 className="text-xl font-semibold mb-2">Total Students</h3>
        <p className="text-3xl font-bold text-gray-900">250 📚</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-2">Updated Today 📆</Badge>
      </Card>
      <Card className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
        <h3 className="text-xl font-semibold mb-2">Present Today</h3>
        <p className="text-3xl font-bold text-gray-900">200 👥</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 mt-2">Good Attendance 🌟</Badge>
      </Card>
      <Card className="w-full lg:w-1/3 px-4">
        <h3 className="text-xl font-semibold mb-2">Absent Today</h3>
        <p className="text-3xl font-bold text-gray-900">50 🚫</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 mt-2">Follow Up Required 📞</Badge>
      </Card>
    </div>
  </div>
</section>

<section className="py-20 px-6 bg-gray-100">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Attendance Records 📁</h2>
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-6 py-3 text-left text-xl font-semibold">Student Name</th>
            <th className="px-6 py-3 text-left text-xl font-semibold">Date</th>
            <th className="px-6 py-3 text-left text-xl font-semibold">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="px-6 py-4 text-left text-gray-600">John Doe</td>
            <td className="px-6 py-4 text-left text-gray-600">2023-03-15</td>
            <td className="px-6 py-4 text-left text-gray-600"><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">Present</Badge></td>
          </tr>
          <tr className="border-b border-gray-200">
            <td className="px-6 py-4 text-left text-gray-600">Jane Smith</td>
            <td className="px-6 py-4 text-left text-gray-600">2023-03-15</td>
            <td className="px-6 py-4 text-left text-gray-600"><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">Absent</Badge></td>
          </tr>
          {/* More rows... */}
        </tbody>
      </table>
    </div>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-6">Mark Attendance 📅</Button>
  </div>
</section>

<section className="py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Action Area 📝</h2>
    <form>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-6 lg:mb-0">
          <Input label="Student ID" placeholder="Enter Student ID" type="text" />
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
            <option>Status</option>
            <option>Present</option>
            <option>Absent</option>
          </select>
        </div>
      </div>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Update Status</Button>
    </form>
  </div>
</section>

<section className="py-20 px-6 bg-gray-200">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose EduFlow for Attendance Tracking? 🤔</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
        <svg width="40" height="40" className="mb-4" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2">
          <path d="M20 4C12.238 4 6 10.238 6 18c0 5.762 6.238 14 14 14s14-8.238 14-14C34 10.238 27.762 4 20 4z" fill="#4CAF50"/>
        </svg>
        <h3 className="text-xl font-semibold mb-2">Accurate Records</h3>
        <p className="text-gray-600 leading-relaxed">Ensure accurate attendance tracking with EduFlow.</p>
      </div>
      <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
        <svg width="40" height="40" className="mb-4" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2">
          <path d="M20 4C12.238 4 6 10.238 6 18c0 5.762 6.238 14 14 14s14-8.238 14-14C34 10.238 27.762 4 20 4z" fill="#4CAF50"/>
        </svg>
        <h3 className="text-xl font-semibold mb-2">Real-Time Updates</h3>
        <p className="text-gray-600 leading-relaxed">Get real-time updates on attendance.</p>
      </div>
      <div className="w-full lg:w-1/3 px-4">
        <svg width="40" height="40" className="mb-4" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2">
          <path d="M20 4C12.238 4 6 10.238 6 18c0 5.762 6.238 14 14 14s14-8.238 14-14C34 10.238 27.762 4 20 4z" fill="#4CAF50"/>
        </svg>
        <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
        <p className="text-gray-600 leading-relaxed">Secure your attendance data with EduFlow.</p>
      </div>
    </div>
  </div>
</section>

<section className="py-20 px-6">
  <div className="container max-w-7xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Streamline Attendance Tracking with EduFlow? 🚀</h2>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Sign Up for Free Trial</Button>
    <p className="text-gray-600 leading-relaxed">or <Link to="/contact">Contact Us</Link> for custom solutions.</p>
  </div>
</section>
    </Layout>
  )
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Teacherportal() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
  {/* Header Section */}
  <header className="bg-white shadow-sm">
    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
      <h1 className="text-4xl font-bold text-gray-900">EduFlow Teacher Portal 📚</h1>
      <div className="flex items-center">
        <span className="text-gray-600 mr-4">Welcome, Ms. Johnson 👋</span>
        <img src="https://via.placeholder.com/40?text=E" alt="User Avatar" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  </header>

  {/* KPI Cards Section */}
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-4 gap-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-indigo-600">
          <div className="flex items-center">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-3">
              <path d="M12 9v2m0 4h.01m-6.938 4H9m6.94-3.01 4.95 4.01M21 4l-9.94 9.94 4.95-4.01M16 13l 5 5m 0-12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          <span className="text-2xl font-semibold">145</span> <span className="text-gray-600 block">Students</span>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 ml-2">+5% 📈</Badge>
        </div>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-green-500">
          <div className="flex items-center">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-3">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
          <span className="text-2xl font-semibold">87%</span> <span className="text-gray-600 block">Attendance</span>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700 ml-2">Stable 📊</Badge>
        </div>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-yellow-500">
          <div className="flex items-center">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-3">
              <path d="M11 3v9m0 5h8m-9 4h15a2 2 0 012 2v1a2 2 0 01-2 2v1a2 2 0 01-2 2v1a2 2 0 01-2 2v1a2 2 0 01-2 2v1a2 2 0 01-2 2h-3l-2.967 3.467a2 2 0 01-1.414 0L3 21V5a2 2 0 02 2-2z" />
            </svg>
          <span className="text-2xl font-semibold">32</span> <span className="text-gray-600 block">Assignments</span>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700 ml-2">New 📝</Badge>
        </div>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow border-l-4 border-red-500">
          <div className="flex items-center">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-3">
              <path d="M15 5v2m-4-4l4 4m0 0l-4 4m4.01-9.01L10 5.01 5.01 9l4.99 5z" />
            </svg>
          <span className="text-2xl font-semibold">4</span> <span className="text-gray-600 block">Reminders</span>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 ml-2">Urgent ⏰</Badge>
        </div>
        </Card>
      </div>
    </div>
  </section>

  {/* Main Chart Area */}
  <section className="py-10 px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold mb-4">Monthly Performance 📊</h2>
      <div className="flex justify-around">
        <div style={{height: '75%'}} className="w-1/5 bg-white rounded-xl shadow-sm"></div>
        <div style={{height: '50%'}} className="w-1/5 bg-white rounded-xl shadow-sm"></div>
        <div style={{height: '90%'}} className="w-1/5 bg-white rounded-xl shadow-sm"></div>
        <div style={{height: '40%'}} className="w-1/5 bg-white rounded-xl shadow-sm"></div>
        <div style={{height: '60%'}} className="w-1/5 bg-white rounded-xl shadow-sm"></div>
      </div>
    </div>
  </section>

  {/* 2-Col Row: Activity Table & Quick Actions */}
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl flex flex-wrap justify-between">
      <div className="w-full lg:w-2/3 xl:w-2/3 mb-6 lg:mb-0">
        <h3 className="text-xl font-semibold mb-4">Recent Activities 📝</h3>
        <table className="w-full border border-gray-200 rounded-xl shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Activity</th>
              <th className="px-6 py-3">Students</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-4">2023-02-20</td>
              <td className="px-6 py-4">Math Quiz</td>
              <td className="px-6 py-4">25</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/3">
        <h3 className="text-xl font-semibold mb-4">Quick Actions 🚀</h3>
        <ul>
          <li className="mb-4">
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Create Assignment</Button>
          </li>
          <li className="mb-4">
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Mark Attendance</Button>
          </li>
          <li>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Send Notification</Button>
          </li>
        </ul>
      </div>
    </div>
  </section>

  {/* Progress Bars Section */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold mb-8">Student Progress 📈</h2>
      <div className="mb-8">
        <span className="text-gray-600 block mb-2">John Doe</span>
        <div className="relative w-full bg-gray-200 rounded-full h-2">
          <div className="absolute top-0 left-0 w-4/5 bg-indigo-600 rounded-full h-2"></div>
        </div>
        <span className="text-gray-600 block mt-2">80% Complete</span>
      </div>
      <div className="mb-8">
        <span className="text-gray-600 block mb-2">Jane Smith</span>
        <div className="relative w-full bg-gray-200 rounded-full h-2">
          <div className="absolute top-0 left-0 w-2/5 bg-indigo-600 rounded-full h-2"></div>
        </div>
        <span className="text-gray-600 block mt-2">40% Complete</span>
      </div>
      {/* Add more progress bars as needed */}
    </div>
  </section>
</div>
    </Layout>
  )
}
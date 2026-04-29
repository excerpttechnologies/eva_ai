import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Admindashboard() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
  {/* Header Section */}
  <section className="bg-white py-4 px-6 shadow-sm">
    <div className="container mx-auto max-w-7xl flex justify-between items-center">
      <h1 className="text-4xl font-bold text-gray-900">EduFlow Admin Dashboard 📚</h1>
      <div className="flex items-center">
        <span className="text-xl font-semibold text-gray-600 mr-4">Welcome, Admin! 👋</span>
        <img src="https://via.placeholder.com/50" alt="User Avatar" className="w-12 h-12 rounded-full" />
      </div>
    </div>
  </section>

  {/* KPI Cards Row */}
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-4 gap-6">
        <Card className="border-l-4 border-indigo-600">
          <div className="flex items-center p-6">
            <i className="fas fa-users text-indigo-600 text-2xl mr-3" /> 
            <div>
              <h3 className="text-xl font-semibold">Students</h3>
              <span className="text-3xl font-bold">1,250</span>
              <span className="text-green-500 font-semibold">+15% <i className="fas fa-arrow-up" /></span>
            </div>
          </div>
        </Card>
        <Card className="border-l-4 border-orange-500">
          <div className="flex items-center p-6">
            <i className="fas fa-chalkboard-teacher text-orange-500 text-2xl mr-3" /> 
            <div>
              <h3 className="text-xl font-semibold">Teachers</h3>
              <span className="text-3xl font-bold">120</span>
              <span className="text-red-500 font-semibold">-5% <i className="fas fa-arrow-down" /></span>
            </div>
          </div>
        </Card>
        <Card className="border-l-4 border-green-500">
          <div className="flex items-center p-6">
            <i className="fas fa-book text-green-500 text-2xl mr-3" /> 
            <div>
              <h3 className="text-xl font-semibold">Courses</h3>
              <span className="text-3xl font-bold">500</span>
              <span className="text-blue-500 font-semibold">+8% <i className="fas fa-arrow-up" /></span>
            </div>
          </div>
        </Card>
        <Card className="border-l-4 border-yellow-500">
          <div className="flex items-center p-6">
            <i className="fas fa-graduation-cap text-yellow-500 text-2xl mr-3" /> 
            <div>
              <h3 className="text-xl font-semibold">Graduates</h3>
              <span className="text-3xl font-bold">800</span>
              <span className="text-purple-500 font-semibold">+20% <i className="fas fa-arrow-up" /></span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>

  {/* Main Chart Area */}
  <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold mb-6">Enrollment Trends 📊</h2>
      <div className="flex justify-around">
        <div className="w-1/4 border-r border-white border-opacity-20">
          <div style={{height: '75%'}} className="bg-white bg-opacity-20 w-8 mx-auto mt-auto" /> 
          <span className="block text-center text-xl font-semibold mt-2">Q1</span>
        </div>
        <div className="w-1/4 border-r border-white border-opacity-20">
          <div style={{height: '90%'}} className="bg-white bg-opacity-20 w-8 mx-auto mt-auto" /> 
          <span className="block text-center text-xl font-semibold mt-2">Q2</span>
        </div>
        <div className="w-1/4 border-r border-white border-opacity-20">
          <div style={{height: '60%'}} className="bg-white bg-opacity-20 w-8 mx-auto mt-auto" /> 
          <span className="block text-center text-xl font-semibold mt-2">Q3</span>
        </div>
        <div className="w-1/4">
          <div style={{height: '95%'}} className="bg-white bg-opacity-20 w-8 mx-auto mt-auto" /> 
          <span className="block text-center text-xl font-semibold mt-2">Q4</span>
        </div>
      </div>
    </div>
  </section>

  {/* 2-col Row: Activity Table & Quick Actions */}
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl flex justify-between">
      <div className="w-2/3">
        <h2 className="text-3xl font-bold mb-4">Recent Activities 📝</h2>
        <table className="w-full border border-gray-200 rounded-xl shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-xl font-semibold">Student</th>
              <th className="px-6 py-3 text-xl font-semibold">Course</th>
              <th className="px-6 py-3 text-xl font-semibold">Action</th>
              <th className="px-6 py-3 text-xl font-semibold">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-200">
              <td className="px-6 py-4 text-gray-600">John Doe</td>
              <td className="px-6 py-4 text-gray-600">Mathematics</td>
              <td className="px-6 py-4 text-gray-600">Submitted Assignment</td>
              <td className="px-6 py-4 text-gray-600">1 hour ago</td>
            </tr>
            {/* Repeat for more rows */}
          </tbody>
        </table>
      </div>
      <div className="w-1/3 pl-6">
        <h2 className="text-3xl font-bold mb-4">Quick Actions 🚀</h2>
        <div className="space-y-4">
          <Button className="w-full">Add New Student</Button>
          <Button className="w-full">Manage Courses</Button>
          <Button className="w-full">View Attendance</Button>
          <Button className="w-full">Grade Book</Button>
        </div>
      </div>
    </div>
  </section>

  {/* Progress Bars Section */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold mb-6">Course Completion Rates 📈</h2>
      <div className="space-y-6">
        <div>
          <span className="text-xl font-semibold">Mathematics</span>
          <div className="w-full bg-gray-200 h-4 rounded-full">
            <div className="h-4 bg-indigo-600 rounded-full w-2/3" /> 
          </div>
          <Badge className="ml-2">67%</Badge>
        </div>
        <div>
          <span className="text-xl font-semibold">Science</span>
          <div className="w-full bg-gray-200 h-4 rounded-full">
            <div className="h-4 bg-indigo-600 rounded-full w-1/2" /> 
          </div>
          <Badge className="ml-2">50%</Badge>
        </div>
        {/* Repeat for more courses */}
      </div>
    </div>
  </section>

  {/* Footer (Basic, as not detailed in blueprint) */}
  <section className="py-4 px-6 bg-gray-200 text-gray-600 text-center">
    <div className="container mx-auto max-w-7xl">
      &copy; 2023 EduFlow. All Rights Reserved. 📚
    </div>
  </section>
</div>
    </Layout>
  )
}
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
      <div className="container max-w-7xl mx-auto">
  <header className="bg-white py-6 px-6 shadow-sm border border-gray-100">
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold text-gray-900">Edify Admin Dashboard 📚</h1>
      <div className="flex items-center">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="User Avatar" className="w-12 h-12 rounded-full" />
        <span className="text-gray-600 ml-4">Welcome, Admin 👋</span>
      </div>
    </div>
  </header>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Key Performance Indicators (KPIs) 📊</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="bg-indigo-600 w-2 h-12 rounded-r-lg" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Student Enrollment 📚</h3>
              <p className="text-gray-600">1200 students enrolled 👥</p>
              <p className="text-gray-600">+10% from last year 🚀</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="bg-green-600 w-2 h-12 rounded-r-lg" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Teacher Satisfaction 🤩</h3>
              <p className="text-gray-600">90% teacher satisfaction rate 📈</p>
              <p className="text-gray-600">+5% from last year 🚀</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="bg-yellow-600 w-2 h-12 rounded-r-lg" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Attendance Rate 📊</h3>
              <p className="text-gray-600">95% attendance rate 👥</p>
              <p className="text-gray-600">+2% from last year 🚀</p>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="bg-red-600 w-2 h-12 rounded-r-lg" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Dropout Rate 📉</h3>
              <p className="text-gray-600">5% dropout rate 👥</p>
              <p className="text-gray-600">-1% from last year 🚀</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Main Chart Area 📈</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="w-full h-64 bg-indigo-600 rounded-2xl" style={{ height: '300px' }} />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Activity Table and Quick Actions 📊</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Student Name</th>
                <th className="px-4 py-2">Attendance Rate</th>
                <th className="px-4 py-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">95%</td>
                <td className="px-4 py-2">A</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Jane Doe</td>
                <td className="px-4 py-2">90%</td>
                <td className="px-4 py-2">B</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Quick Actions 🚀</h3>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add Student</Button>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Edit Teacher Profile</Button>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Progress Bars 📈</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="w-full h-12 bg-indigo-600 rounded-2xl" style={{ height: '20px', width: '80%' }} />
            <p className="text-gray-600 ml-4">80% complete 📊</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="w-full h-12 bg-indigo-600 rounded-2xl" style={{ height: '20px', width: '60%' }} />
            <p className="text-gray-600 ml-4">60% complete 📊</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
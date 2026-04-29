import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Studentdashboard() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <header className="bg-white py-4 px-6 shadow-sm">
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold text-gray-900">Edify Student Dashboard 📚</h1>
      <div className="flex items-center">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="User Avatar" className="w-12 h-12 rounded-full" />
        <span className="text-gray-600 ml-4">Welcome, John Doe 👋</span>
      </div>
    </div>
  </header>
  <section className="py-20 px-6">
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="border-l-4 border-indigo-600 pl-4">
            <h2 className="text-3xl font-bold">85%</h2>
            <p className="text-gray-600">Attendance Rate 📊</p>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="border-l-4 border-green-600 pl-4">
            <h2 className="text-3xl font-bold">92%</h2>
            <p className="text-gray-600">Academic Performance 📈</p>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="border-l-4 border-yellow-600 pl-4">
            <h2 className="text-3xl font-bold">120</h2>
            <p className="text-gray-600">Total Courses Enrolled 📚</p>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="border-l-4 border-red-600 pl-4">
            <h2 className="text-3xl font-bold">20</h2>
            <p className="text-gray-600">Upcoming Assignments 📝</p>
          </div>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Activity Table 📊</h2>
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Course</th>
                <th className="px-4 py-2">Assignment</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">2023-02-20</td>
                <td className="px-4 py-2">Mathematics</td>
                <td className="px-4 py-2">Homework 1</td>
                <td className="px-4 py-2">Completed 🎉</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023-02-22</td>
                <td className="px-4 py-2">Science</td>
                <td className="px-4 py-2">Project 1</td>
                <td className="px-4 py-2">In Progress 🕒</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023-02-25</td>
                <td className="px-4 py-2">English</td>
                <td className="px-4 py-2">Essay 1</td>
                <td className="px-4 py-2">Upcoming 📝</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Quick Actions 🚀</h2>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Grades 📊</Button>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <Button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200">Submit Assignment 📝</Button>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <Button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-yellow-700 transition-all duration-200">Join Online Class 📚</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Progress Bars 📈</h2>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div className="bg-gray-200 rounded-full h-4">
                <div className="bg-indigo-600 rounded-full h-4" style={{ width: '75%' }}></div>
              </div>
              <p className="text-gray-600 mt-2">Mathematics: 75% 📊</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div className="bg-gray-200 rounded-full h-4">
                <div className="bg-green-600 rounded-full h-4" style={{ width: '90%' }}></div>
              </div>
              <p className="text-gray-600 mt-2">Science: 90% 🌟</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div className="bg-gray-200 rounded-full h-4">
                <div className="bg-yellow-600 rounded-full h-4" style={{ width: '60%' }}></div>
              </div>
              <p className="text-gray-600 mt-2">English: 60% 📝</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
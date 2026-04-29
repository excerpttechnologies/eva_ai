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
      <div className="container max-w-7xl mx-auto">
  <header className="bg-white py-6 px-6 flex justify-between items-center">
    <h1 className="text-4xl font-bold text-gray-900">Edify Teacher Portal 📚</h1>
    <div className="flex items-center">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Teacher Avatar" className="w-12 h-12 rounded-full" />
      <span className="text-gray-600 ml-4">Welcome, John Doe 👋</span>
    </div>
  </header>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Key Performance Indicators 📊</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/4 px-4 mb-8">
        <div className="border-l-4 border-indigo-600 pl-4">
          <h3 className="text-xl font-semibold">Student Engagement 📈</h3>
          <p className="text-gray-600">85% of students are actively participating in classes</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+10% from last week 🚀</Badge>
        </div>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/4 px-4 mb-8">
        <div className="border-l-4 border-green-600 pl-4">
          <h3 className="text-xl font-semibold">Grade Average 📚</h3>
          <p className="text-gray-600">B+ (87%) average grade across all subjects</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">+5% from last semester 📈</Badge>
        </div>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/4 px-4 mb-8">
        <div className="border-l-4 border-yellow-600 pl-4">
          <h3 className="text-xl font-semibold">Attendance 📆</h3>
          <p className="text-gray-600">95% of students have attended classes this week</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">-2% from last week 📉</Badge>
        </div>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/4 px-4 mb-8">
        <div className="border-l-4 border-red-600 pl-4">
          <h3 className="text-xl font-semibold">Disciplinary Actions 🚫</h3>
          <p className="text-gray-600">5 incidents of misconduct have been reported this month</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">+2 incidents from last month 🚨</Badge>
        </div>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Main Chart Area 📊</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Student Engagement Over Time 📈</h3>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8" style={{ height: '75%' }}>
              <div className="bg-indigo-600 h-full rounded-2xl" />
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8" style={{ height: '50%' }}>
              <div className="bg-green-600 h-full rounded-2xl" />
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8" style={{ height: '25%' }}>
              <div className="bg-yellow-600 h-full rounded-2xl" />
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8" style={{ height: '90%' }}>
              <div className="bg-red-600 h-full rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Activity Table and Quick Actions 📝</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Recent Activities 📝</h3>
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Activity</th>
                <th className="px-4 py-2">Student</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">2023-02-20</td>
                <td className="px-4 py-2">Assignment Submission</td>
                <td className="px-4 py-2">John Doe</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023-02-19</td>
                <td className="px-4 py-2">Quiz Participation</td>
                <td className="px-4 py-2">Jane Doe</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023-02-18</td>
                <td className="px-4 py-2">Class Attendance</td>
                <td className="px-4 py-2">Bob Smith</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Quick Actions 🚀</h3>
          <div className="flex flex-wrap justify-center -mx-4">
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Grade Assignment</Button>
            <Button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200">Create Quiz</Button>
            <Button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-yellow-700 transition-all duration-200">Send Reminder</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Progress Bars 📊</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Student Progress 📈</h3>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
              <div className="bg-indigo-600 h-4 rounded-2xl" style={{ width: '75%' }} />
              <p className="text-gray-600">75% complete 📊</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
              <div className="bg-green-600 h-4 rounded-2xl" style={{ width: '50%' }} />
              <p className="text-gray-600">50% complete 📈</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 px-4 mb-8">
              <div className="bg-yellow-600 h-4 rounded-2xl" style={{ width: '25%' }} />
              <p className="text-gray-600">25% complete 📉</p>
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
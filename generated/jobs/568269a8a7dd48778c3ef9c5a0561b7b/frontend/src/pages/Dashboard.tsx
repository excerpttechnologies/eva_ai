import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Dashboard() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <header className="bg-white py-6 px-6 flex justify-between items-center">
    <h1 className="text-4xl font-bold text-gray-900">Edify 📚</h1>
    <div className="flex items-center">
      <span className="text-gray-600 mr-4">Welcome, John Doe 👋</span>
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="User Avatar" className="w-12 h-12 rounded-full" />
    </div>
  </header>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-6">Key Performance Indicators (KPIs) 📊</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-600 w-4 h-4 rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Student Enrollment 📚</h3>
              <p className="text-gray-600">1200 students</p>
            </div>
          </div>
          <p className="text-gray-600">25% increase from last year 🚀</p>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-green-600 w-4 h-4 rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Teacher Satisfaction 😊</h3>
              <p className="text-gray-600">90% satisfaction rate</p>
            </div>
          </div>
          <p className="text-gray-600">5% increase from last quarter 📈</p>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-yellow-600 w-4 h-4 rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Course Completion 📚</h3>
              <p className="text-gray-600">80% completion rate</p>
            </div>
          </div>
          <p className="text-gray-600">10% increase from last semester 📊</p>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="bg-red-600 w-4 h-4 rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-semibold">Student Engagement 📊</h3>
              <p className="text-gray-600">70% engagement rate</p>
            </div>
          </div>
          <p className="text-gray-600">5% decrease from last quarter 📉</p>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-6">Main Chart 📊</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-semibold">Student Enrollment Trend 📈</h3>
          </div>
          <div className="flex flex-col">
            <div style={{ height: '75%' }} className="bg-indigo-600 w-full rounded-2xl mb-4" />
            <div style={{ height: '50%' }} className="bg-green-600 w-full rounded-2xl mb-4" />
            <div style={{ height: '25%' }} className="bg-yellow-600 w-full rounded-2xl" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-semibold">Teacher Satisfaction Trend 😊</h3>
          </div>
          <div className="flex flex-col">
            <div style={{ height: '50%' }} className="bg-indigo-600 w-full rounded-2xl mb-4" />
            <div style={{ height: '75%' }} className="bg-green-600 w-full rounded-2xl mb-4" />
            <div style={{ height: '25%' }} className="bg-yellow-600 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-6">Activity and Quick Actions 📊</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-semibold">Recent Activity 📊</h3>
          </div>
          <table className="w-full text-gray-600">
            <thead>
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Activity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">2023-02-20</td>
                <td className="px-4 py-2">John Doe completed Course 1 📚</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023-02-19</td>
                <td className="px-4 py-2">Jane Doe started Course 2 📊</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023-02-18</td>
                <td className="px-4 py-2">Bob Smith completed Course 3 📈</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-semibold">Quick Actions 🚀</h3>
          </div>
          <div className="flex flex-col">
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mb-4">Create New Course 📚</Button>
            <Button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200 mb-4">Assign New Task 📊</Button>
            <Button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-yellow-700 transition-all duration-200">Generate Report 📈</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-6">Progress Bars 📊</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-semibold">Course Completion Progress 📚</h3>
          </div>
          <div className="flex flex-col">
            <div className="bg-indigo-600 w-full h-4 rounded-2xl mb-4" style={{ width: '75%' }} />
            <div className="bg-green-600 w-full h-4 rounded-2xl mb-4" style={{ width: '50%' }} />
            <div className="bg-yellow-600 w-full h-4 rounded-2xl" style={{ width: '25%' }} />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <h3 className="text-xl font-semibold">Student Engagement Progress 📊</h3>
          </div>
          <div className="flex flex-col">
            <div className="bg-indigo-600 w-full h-4 rounded-2xl mb-4" style={{ width: '50%' }} />
            <div className="bg-green-600 w-full h-4 rounded-2xl mb-4" style={{ width: '75%' }} />
            <div className="bg-yellow-600 w-full h-4 rounded-2xl" style={{ width: '25%' }} />
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
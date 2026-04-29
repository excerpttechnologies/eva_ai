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
  <header className="bg-white py-4">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <h1 className="text-4xl font-bold text-gray-900">Edify Admin Dashboard 📚</h1>
      <div className="flex items-center">
        <span className="text-gray-600 mr-4">Welcome, Admin 👋</span>
        <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  </header>
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/4 p-4">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </svg>
              <h2 className="text-3xl font-bold ml-4">245 📚</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">Total Students</p>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+5% 🚀</Badge>
          </Card>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4 p-4">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </svg>
              <h2 className="text-3xl font-bold ml-4">120 📊</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">Total Teachers</p>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+2% 📈</Badge>
          </Card>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4 p-4">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </svg>
              <h2 className="text-3xl font-bold ml-4">90% 📈</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">Average Attendance</p>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+1% 📊</Badge>
          </Card>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4 p-4">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </svg>
              <h2 className="text-3xl font-bold ml-4">85% 📚</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">Average Grades</p>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+3% 🚀</Badge>
          </Card>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-2/3 p-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold mb-4">Attendance Chart 📊</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 p-4" style={{ height: '75%' }}>
                <div className="bg-indigo-600 h-full rounded-2xl" />
              </div>
              <div className="w-full md:w-1/2 p-4" style={{ height: '50%' }}>
                <div className="bg-indigo-600 h-full rounded-2xl" />
              </div>
              <div className="w-full md:w-1/2 p-4" style={{ height: '25%' }}>
                <div className="bg-indigo-600 h-full rounded-2xl" />
              </div>
              <div className="w-full md:w-1/2 p-4" style={{ height: '90%' }}>
                <div className="bg-indigo-600 h-full rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold mb-4">Quick Actions 🚀</h2>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add Student 📚</Button>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Add Teacher 📊</Button>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Generate Report 📈</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold mb-4">Progress Bars 📊</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Student Progress 📚</h3>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-indigo-600 h-4 rounded-2xl" style={{ width: '75%' }} />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-indigo-600 h-4 rounded-2xl" style={{ width: '50%' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Teacher Progress 📊</h3>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-indigo-600 h-4 rounded-2xl" style={{ width: '90%' }} />
              </div>
              <div className="w-full md:w-1/2 p-4">
                <div className="bg-indigo-600 h-4 rounded-2xl" style={{ width: '25%' }} />
              </div>
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
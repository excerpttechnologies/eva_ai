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
      <div className="h-screen flex flex-col">
  <header className="bg-white py-4 px-6 flex justify-between items-center">
    <h1 className="text-4xl font-bold text-gray-900">Edify 📚</h1>
    <div className="flex items-center">
      <span className="text-gray-600 leading-relaxed mr-4">Welcome, John Doe!</span>
      <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
    </div>
  </header>
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Key Performance Indicators (KPIs)</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/4 p-4">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-600 w-2 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Student Enrollment</h3>
                <p className="text-gray-600 leading-relaxed">1,234 students 📚</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">+10% from last year 🚀</p>
          </Card>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4 p-4">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-700 w-2 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Teacher Count</h3>
                <p className="text-gray-600 leading-relaxed">50 teachers 👨‍🏫</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">+5% from last year 📈</p>
          </Card>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4 p-4">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 w-2 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Course Completion Rate</h3>
                <p className="text-gray-600 leading-relaxed">85% 📊</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">+2% from last year 📈</p>
          </Card>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4 p-4">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 w-2 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-semibold">Student Engagement</h3>
                <p className="text-gray-600 leading-relaxed">70% 📢</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">-1% from last year 📉</p>
          </Card>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Student Performance Chart</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold">Student Performance</h3>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div style={{ height: '75%' }} className="bg-indigo-600 w-full"></div>
                <p className="text-gray-600 leading-relaxed mt-4">Math: 85% 📝</p>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div style={{ height: '60%' }} className="bg-purple-700 w-full"></div>
                <p className="text-gray-600 leading-relaxed mt-4">Science: 70% 🧬</p>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div style={{ height: '80%' }} className="bg-green-600 w-full"></div>
                <p className="text-gray-600 leading-relaxed mt-4">English: 80% 📚</p>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div style={{ height: '90%' }} className="bg-red-600 w-full"></div>
                <p className="text-gray-600 leading-relaxed mt-4">History: 90% 🏛️</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold">Quick Actions</h3>
            </div>
            <ul>
              <li className="text-gray-600 leading-relaxed mb-4"><Link to="/students">Student Portal 📚</Link></li>
              <li className="text-gray-600 leading-relaxed mb-4"><Link to="/teachers">Teacher Portal 👨‍🏫</Link></li>
              <li className="text-gray-600 leading-relaxed mb-4"><Link to="/admin">Admin Dashboard 📊</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Activity Table</h2>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-gray-600 leading-relaxed py-4">Student Name</th>
              <th className="text-gray-600 leading-relaxed py-4">Course Name</th>
              <th className="text-gray-600 leading-relaxed py-4">Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-gray-600 leading-relaxed py-4">John Doe</td>
              <td className="text-gray-600 leading-relaxed py-4">Math 101</td>
              <td className="text-gray-600 leading-relaxed py-4">A+</td>
            </tr>
            <tr>
              <td className="text-gray-600 leading-relaxed py-4">Jane Doe</td>
              <td className="text-gray-600 leading-relaxed py-4">Science 202</td>
              <td className="text-gray-600 leading-relaxed py-4">B-</td>
            </tr>
            <tr>
              <td className="text-gray-600 leading-relaxed py-4">Bob Smith</td>
              <td className="text-gray-600 leading-relaxed py-4">English 303</td>
              <td className="text-gray-600 leading-relaxed py-4">C+</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Progress Bars</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold">Student Progress</h3>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div className="bg-indigo-600 w-full h-4 rounded-full" style={{ width: '75%' }}></div>
                <p className="text-gray-600 leading-relaxed mt-4">Math: 75% 📝</p>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div className="bg-purple-700 w-full h-4 rounded-full" style={{ width: '60%' }}></div>
                <p className="text-gray-600 leading-relaxed mt-4">Science: 60% 🧬</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-semibold">Teacher Progress</h3>
            </div>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div className="bg-green-600 w-full h-4 rounded-full" style={{ width: '80%' }}></div>
                <p className="text-gray-600 leading-relaxed mt-4">English: 80% 📚</p>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div className="bg-red-600 w-full h-4 rounded-full" style={{ width: '90%' }}></div>
                <p className="text-gray-600 leading-relaxed mt-4">History: 90% 🏛️</p>
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
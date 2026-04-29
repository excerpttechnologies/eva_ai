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
  <header className="bg-white py-6 px-6 shadow-sm border border-gray-100">
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold text-gray-900">Edify Teacher Portal 📚</h1>
      <div className="flex items-center">
        <span className="text-gray-600 leading-relaxed mr-4">Welcome, John Doe 👋</span>
        <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  </header>
  <section className="py-20 px-6">
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="bg-indigo-600 w-10 h-10 rounded-full flex justify-center items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold">120</h2>
              <p className="text-gray-600 leading-relaxed">Students 📚</p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+10% 🚀</Badge>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="bg-purple-600 w-10 h-10 rounded-full flex justify-center items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold">90%</h2>
              <p className="text-gray-600 leading-relaxed">Attendance 📊</p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+5% 📈</Badge>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="bg-green-600 w-10 h-10 rounded-full flex justify-center items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold">85</h2>
              <p className="text-gray-600 leading-relaxed">Average Grade 📝</p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+2% 📊</Badge>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="bg-red-600 w-10 h-10 rounded-full flex justify-center items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold">20</h2>
              <p className="text-gray-600 leading-relaxed">Absent Students 🚫</p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">-5% 📉</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-2/3 xl:w-2/3 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Attendance Chart 📊</h2>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div style={{ height: '75%' }} className="bg-indigo-600 w-full h-full rounded-2xl"></div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div style={{ height: '50%' }} className="bg-purple-600 w-full h-full rounded-2xl"></div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div style={{ height: '25%' }} className="bg-green-600 w-full h-full rounded-2xl"></div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div style={{ height: '90%' }} className="bg-red-600 w-full h-full rounded-2xl"></div>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/3 xl:w-1/3 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Quick Actions 🚀</h2>
          <ul>
            <li className="py-2 border-b border-gray-200">
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add Student 📚</Button>
            </li>
            <li className="py-2 border-b border-gray-200">
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Update Grades 📝</Button>
            </li>
            <li className="py-2 border-b border-gray-200">
              <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Reports 📊</Button>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Activity Table 📊</h2>
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Student Name</th>
                <th className="px-4 py-2">Attendance</th>
                <th className="px-4 py-2">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">90%</td>
                <td className="px-4 py-2">85</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Jane Doe</td>
                <td className="px-4 py-2">80%</td>
                <td className="px-4 py-2">80</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Bob Smith</td>
                <td className="px-4 py-2">70%</td>
                <td className="px-4 py-2">70</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Progress Bars 📈</h2>
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div className="bg-gray-200 w-full h-10 rounded-2xl">
                <div style={{ width: '75%' }} className="bg-indigo-600 h-full rounded-2xl"></div>
              </div>
              <p className="text-gray-600 leading-relaxed">Student Progress 📚</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div className="bg-gray-200 w-full h-10 rounded-2xl">
                <div style={{ width: '50%' }} className="bg-purple-600 h-full rounded-2xl"></div>
              </div>
              <p className="text-gray-600 leading-relaxed">Teacher Progress 📊</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
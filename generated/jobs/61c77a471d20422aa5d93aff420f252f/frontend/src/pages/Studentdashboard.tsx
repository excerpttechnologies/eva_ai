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
      <div className="min-h-screen bg-gray-100">
  <header className="bg-white py-4">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <h1 className="text-4xl font-bold text-gray-900">Edify 📚</h1>
      <div className="flex items-center">
        <span className="text-gray-600 mr-4">Welcome, John Doe 👋</span>
        <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
      </div>
    </div>
  </header>
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-wrap -mx-6">
        <div className="w-full md:w-1/2 xl:w-1/4 p-6">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-indigo-600 w-10 h-10 rounded-full flex justify-center items-center text-white mr-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold">90%</h2>
                <p className="text-gray-600">Attendance 📊</p>
              </div>
            </div>
            <div className="text-right">
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+5% 🚀</Badge>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4 p-6">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-orange-600 w-10 h-10 rounded-full flex justify-center items-center text-white mr-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold">85%</h2>
                <p className="text-gray-600">Grade 📝</p>
              </div>
            </div>
            <div className="text-right">
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">-2% 📉</Badge>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4 p-6">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-green-600 w-10 h-10 rounded-full flex justify-center items-center text-white mr-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold">95%</h2>
                <p className="text-gray-600">Assignment Completion 📁</p>
              </div>
            </div>
            <div className="text-right">
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">+10% 🚀</Badge>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/4 p-6">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <div className="bg-red-600 w-10 h-10 rounded-full flex justify-center items-center text-white mr-4">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold">80%</h2>
                <p className="text-gray-600">Participation 🗣️</p>
              </div>
            </div>
            <div className="text-right">
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">-5% 📉</Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-wrap -mx-6">
        <div className="w-full md:w-2/3 xl:w-2/3 p-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold">Attendance Chart 📊</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div style={{ height: '75%' }} className="bg-indigo-600 rounded-2xl"></div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div style={{ height: '50%' }} className="bg-orange-600 rounded-2xl"></div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div style={{ height: '90%' }} className="bg-green-600 rounded-2xl"></div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div style={{ height: '40%' }} className="bg-red-600 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/3 p-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold">Quick Actions 🚀</h2>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Assignments 📁</Button>
            <Button className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-700 transition-all duration-200">Check Grades 📝</Button>
            <Button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200">Participate in Discussions 🗣️</Button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-wrap -mx-6">
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold">Activity Table 📊</h2>
            <table className="w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Assignment</th>
                  <th className="px-4 py-2">Grade</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">2023-02-20</td>
                  <td className="px-4 py-2">Math Homework</td>
                  <td className="px-4 py-2">85%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">2023-02-22</td>
                  <td className="px-4 py-2">Science Project</td>
                  <td className="px-4 py-2">90%</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">2023-02-25</td>
                  <td className="px-4 py-2">English Essay</td>
                  <td className="px-4 py-2">80%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h2 className="text-3xl font-bold">Progress Bars 📈</h2>
            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div className="bg-indigo-600 rounded-2xl" style={{ height: '20px', width: '75%' }}></div>
                <p className="text-gray-600 mt-2">Math: 75% 📊</p>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div className="bg-orange-600 rounded-2xl" style={{ height: '20px', width: '50%' }}></div>
                <p className="text-gray-600 mt-2">Science: 50% 🌟</p>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div className="bg-green-600 rounded-2xl" style={{ height: '20px', width: '90%' }}></div>
                <p className="text-gray-600 mt-2">English: 90% 📚</p>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2 p-4">
                <div className="bg-red-600 rounded-2xl" style={{ height: '20px', width: '40%' }}></div>
                <p className="text-gray-600 mt-2">History: 40% 🏛️</p>
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
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Admin() {
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
        <div className="w-full md:w-1/4 xl:w-1/4 p-4">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center border-l-4 border-indigo-600 py-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
                <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h2 className="text-3xl font-bold">250</h2>
                <p className="text-gray-600">Total Students 📚</p>
                <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+10% 🚀</Badge>
              </div>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-1/4 xl:w-1/4 p-4">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center border-l-4 border-green-600 py-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
                <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h2 className="text-3xl font-bold">50</h2>
                <p className="text-gray-600">Total Teachers 👨‍🏫</p>
                <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+5% 📈</Badge>
              </div>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-1/4 xl:w-1/4 p-4">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center border-l-4 border-yellow-600 py-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
                <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h2 className="text-3xl font-bold">1000</h2>
                <p className="text-gray-600">Total Courses 📖</p>
                <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">-2% 📉</Badge>
              </div>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-1/4 xl:w-1/4 p-4">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center border-l-4 border-red-600 py-2">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
                <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h2 className="text-3xl font-bold">500</h2>
                <p className="text-gray-600">Total Enrollments 📝</p>
                <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+15% 🚀</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-bold">Student Enrollment Chart 📊</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <div style={{ height: '75%' }} className="bg-gray-200 rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="h-full flex justify-center items-center">
                <div className="flex flex-col items-center">
                  <div style={{ height: '50%' }} className="bg-indigo-600 w-4 rounded-full"></div>
                  <span className="text-gray-600 mt-2">Jan</span>
                </div>
                <div className="flex flex-col items-center mx-4">
                  <div style={{ height: '60%' }} className="bg-indigo-600 w-4 rounded-full"></div>
                  <span className="text-gray-600 mt-2">Feb</span>
                </div>
                <div className="flex flex-col items-center mx-4">
                  <div style={{ height: '70%' }} className="bg-indigo-600 w-4 rounded-full"></div>
                  <span className="text-gray-600 mt-2">Mar</span>
                </div>
                <div className="flex flex-col items-center mx-4">
                  <div style={{ height: '80%' }} className="bg-indigo-600 w-4 rounded-full"></div>
                  <span className="text-gray-600 mt-2">Apr</span>
                </div>
                <div className="flex flex-col items-center mx-4">
                  <div style={{ height: '90%' }} className="bg-indigo-600 w-4 rounded-full"></div>
                  <span className="text-gray-600 mt-2">May</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-3xl font-bold">Quick Actions 🚀</h2>
              <ul>
                <li className="flex items-center py-2 border-b border-gray-200">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
                    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Add New Student 📚</span>
                </li>
                <li className="flex items-center py-2 border-b border-gray-200">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
                    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Add New Teacher 👨‍🏫</span>
                </li>
                <li className="flex items-center py-2 border-b border-gray-200">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
                    <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-600">Add New Course 📖</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-bold">Activity Table 📊</h2>
        <table className="w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-gray-600">Student Name</th>
              <th className="px-4 py-2 text-gray-600">Course Name</th>
              <th className="px-4 py-2 text-gray-600">Enrollment Date</th>
              <th className="px-4 py-2 text-gray-600">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 text-gray-600">John Doe</td>
              <td className="px-4 py-2 text-gray-600">Math 101</td>
              <td className="px-4 py-2 text-gray-600">2022-01-01</td>
              <td className="px-4 py-2 text-gray-600">Active</td>
            </tr>
            <tr>
              <td className="px-4 py-2 text-gray-600">Jane Doe</td>
              <td className="px-4 py-2 text-gray-600">Science 202</td>
              <td className="px-4 py-2 text-gray-600">2022-02-01</td>
              <td className="px-4 py-2 text-gray-600">Inactive</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl font-bold">Progress Bars 📊</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">Student Enrollment Progress</h3>
              <div className="mt-4">
                <div className="h-4 bg-gray-200 rounded-full">
                  <div style={{ width: '75%' }} className="h-4 bg-indigo-600 rounded-full"></div>
                </div>
                <span className="text-gray-600 mt-2">75% Complete 📈</span>
              </div>
            </Card>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold">Teacher Onboarding Progress</h3>
              <div className="mt-4">
                <div className="h-4 bg-gray-200 rounded-full">
                  <div style={{ width: '50%' }} className="h-4 bg-indigo-600 rounded-full"></div>
                </div>
                <span className="text-gray-600 mt-2">50% Complete 📊</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
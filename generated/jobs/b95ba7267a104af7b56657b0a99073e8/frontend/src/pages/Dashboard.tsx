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
      <div className="flex flex-col h-screen">
  <header className="bg-white py-4 px-6 shadow-sm">
    <div className="flex items-center justify-between">
      <h1 className="text-4xl font-bold text-gray-900">Good morning, John 👋</h1>
      <img src="https://picsum.photos/200/300" alt="User Avatar" className="w-12 h-12 rounded-full" />
    </div>
  </header>
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center -mx-4">
        <Card className="w-full md:w-1/2 xl:w-1/4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
            <h2 className="text-3xl font-bold">12</h2>
            <span className="text-gray-600 leading-relaxed">Projects</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M5 10l7-7 7 7"></path>
            </svg>
            <span className="text-green-500">+20%</span>
          </div>
        </Card>
        <Card className="w-full md:w-1/2 xl:w-1/4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
            <h2 className="text-3xl font-bold">50</h2>
            <span className="text-gray-600 leading-relaxed">Clients</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M19 14l-7 7-7-7"></path>
            </svg>
            <span className="text-red-500">-10%</span>
          </div>
        </Card>
        <Card className="w-full md:w-1/2 xl:w-1/4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
            <h2 className="text-3xl font-bold">$100k</h2>
            <span className="text-gray-600 leading-relaxed">Revenue</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M5 10l7-7 7 7"></path>
            </svg>
            <span className="text-green-500">+50%</span>
          </div>
        </Card>
        <Card className="w-full md:w-1/2 xl:w-1/4 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
            <h2 className="text-3xl font-bold">500</h2>
            <span className="text-gray-600 leading-relaxed">Hours Worked</span>
          </div>
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M19 14l-7 7-7-7"></path>
            </svg>
            <span className="text-red-500">-20%</span>
          </div>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Project Progress</h2>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                <span className="text-gray-600 leading-relaxed">20% Complete</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-red-500 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-gray-600 leading-relaxed">50% Complete</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full">
                <div className="h-4 bg-orange-500 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Activity Log</h2>
      <div className="flex flex-wrap justify-center -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-gray-600 leading-relaxed">Date</th>
                    <th className="text-gray-600 leading-relaxed">Activity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-gray-600 leading-relaxed">2023-02-20</td>
                    <td className="text-gray-600 leading-relaxed">Project 1 updated</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 leading-relaxed">2023-02-19</td>
                    <td className="text-gray-600 leading-relaxed">Project 2 created</td>
                  </tr>
                  <tr>
                    <td className="text-gray-600 leading-relaxed">2023-02-18</td>
                    <td className="text-gray-600 leading-relaxed">Client 1 added</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Quick Actions</h3>
              <ul>
                <li>
                  <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Create Project</Button>
                </li>
                <li>
                  <Button className="px-6 py-3 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all duration-200">Add Client</Button>
                </li>
                <li>
                  <Button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition-all duration-200">Update Project</Button>
                </li>
              </ul>
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
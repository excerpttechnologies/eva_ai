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
  <header className="bg-white py-6 px-6 flex justify-between items-center">
    <h1 className="text-4xl font-bold text-gray-900">ShopFlow Admin Dashboard 🚀</h1>
    <div className="flex items-center">
      <span className="text-gray-600 leading-relaxed mr-4">Welcome, Admin 👋</span>
      <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full" />
    </div>
  </header>
  <section className="py-20 px-6">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/4 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="text-indigo-600 mr-2">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
            </svg>
            <h2 className="text-3xl font-bold">1200</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">Total Orders 📦</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+10% 🚀</Badge>
        </Card>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="text-green-600 mr-2">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
            </svg>
            <h2 className="text-3xl font-bold">$10,000</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">Total Revenue 💸</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">+20% 🚀</Badge>
        </Card>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="text-yellow-600 mr-2">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
            </svg>
            <h2 className="text-3xl font-bold">500</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">Total Products 🛍️</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">+5% 🚀</Badge>
        </Card>
      </div>
      <div className="w-full md:w-1/4 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="text-red-600 mr-2">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
            </svg>
            <h2 className="text-3xl font-bold">100</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">Total Customers 👥</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">+2% 🚀</Badge>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-2/3 xl:w-2/3 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold mb-4">Sales Chart 📈</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div style={{ height: '75%' }} className="bg-indigo-600 rounded-2xl"></div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div style={{ height: '50%' }} className="bg-green-600 rounded-2xl"></div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div style={{ height: '25%' }} className="bg-yellow-600 rounded-2xl"></div>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div style={{ height: '10%' }} className="bg-red-600 rounded-2xl"></div>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/3 xl:w-1/3 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold mb-4">Quick Actions 🚀</h2>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add Product 🛍️</Button>
          <Button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200">View Orders 📦</Button>
          <Button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-yellow-700 transition-all duration-200">Manage Customers 👥</Button>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold mb-4">Activity Table 📊</h2>
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Order ID</th>
                <th className="px-4 py-2">Customer</th>
                <th className="px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">2023-02-20</td>
                <td className="px-4 py-2">#1234</td>
                <td className="px-4 py-2">John Doe</td>
                <td className="px-4 py-2">$100</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023-02-19</td>
                <td className="px-4 py-2">#1233</td>
                <td className="px-4 py-2">Jane Doe</td>
                <td className="px-4 py-2">$50</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023-02-18</td>
                <td className="px-4 py-2">#1232</td>
                <td className="px-4 py-2">Bob Smith</td>
                <td className="px-4 py-2">$200</td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold mb-4">Progress Bars 📈</h2>
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div className="bg-gray-200 rounded-2xl h-4">
                <div style={{ width: '75%' }} className="bg-indigo-600 h-4 rounded-2xl"></div>
              </div>
              <p className="text-gray-600 leading-relaxed mt-2">Sales Target 📊</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div className="bg-gray-200 rounded-2xl h-4">
                <div style={{ width: '50%' }} className="bg-green-600 h-4 rounded-2xl"></div>
              </div>
              <p className="text-gray-600 leading-relaxed mt-2">Customer Satisfaction 🤝</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div className="bg-gray-200 rounded-2xl h-4">
                <div style={{ width: '25%' }} className="bg-yellow-600 h-4 rounded-2xl"></div>
              </div>
              <p className="text-gray-600 leading-relaxed mt-2">Product Development 📈</p>
            </div>
            <div className="w-full md:w-1/2 xl:w-1/2 p-4">
              <div className="bg-gray-200 rounded-2xl h-4">
                <div style={{ width: '10%' }} className="bg-red-600 h-4 rounded-2xl"></div>
              </div>
              <p className="text-gray-600 leading-relaxed mt-2">Marketing Campaigns 📢</p>
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
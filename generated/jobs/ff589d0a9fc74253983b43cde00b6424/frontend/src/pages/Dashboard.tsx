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
  <section className="py-20 px-6">
    <header className="bg-white py-6 px-6 rounded-2xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900">PayFlow Dashboard 📊</h1>
        <div className="flex items-center">
          <span className="text-gray-600 leading-relaxed">Welcome, John Doe 👋</span>
          <img src="https://via.placeholder.com/40" alt="User Avatar" className="w-10 h-10 rounded-full ml-4" />
        </div>
      </div>
    </header>
    <div className="flex flex-wrap justify-between mt-10">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/4 xl:w-1/4">
        <div className="flex items-center">
          <div className="bg-indigo-600 w-10 h-10 rounded-full flex justify-center items-center mr-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Total Balance 💸</h3>
            <p className="text-gray-600 leading-relaxed">$12,345.67</p>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+5% 🚀</Badge>
          </div>
        </div>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/4 xl:w-1/4 mt-6 md:mt-0">
        <div className="flex items-center">
          <div className="bg-green-600 w-10 h-10 rounded-full flex justify-center items-center mr-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Income 📈</h3>
            <p className="text-gray-600 leading-relaxed">$5,678.90</p>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">+10% 🚀</Badge>
          </div>
        </div>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/4 xl:w-1/4 mt-6 md:mt-0">
        <div className="flex items-center">
          <div className="bg-red-600 w-10 h-10 rounded-full flex justify-center items-center mr-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Expenses 📉</h3>
            <p className="text-gray-600 leading-relaxed">$3,456.78</p>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">-5% 🚨</Badge>
          </div>
        </div>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/4 xl:w-1/4 mt-6 md:mt-0">
        <div className="flex items-center">
          <div className="bg-yellow-600 w-10 h-10 rounded-full flex justify-center items-center mr-4">
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Savings 🏦</h3>
            <p className="text-gray-600 leading-relaxed">$1,234.56</p>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">+2% 🚀</Badge>
          </div>
        </div>
      </Card>
    </div>
    <div className="mt-10">
      <h2 className="text-3xl font-bold">Transaction History 📊</h2>
      <div className="flex flex-wrap justify-between mt-6">
        <div className="w-full md:w-2/3 xl:w-2/3">
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">2023-02-15</td>
                <td className="px-4 py-2">PayPal Transfer</td>
                <td className="px-4 py-2">$100.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023-02-10</td>
                <td className="px-4 py-2">Bank Deposit</td>
                <td className="px-4 py-2">$500.00</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2023-02-05</td>
                <td className="px-4 py-2">Credit Card Payment</td>
                <td className="px-4 py-2">-$200.00</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/3 mt-6 md:mt-0">
          <h3 className="text-xl font-semibold">Quick Actions 🚀</h3>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Transfer Money 📈</Button>
          <Button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-200 mt-4">Pay Bill 📝</Button>
          <Button className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:bg-yellow-700 transition-all duration-200 mt-4">Deposit Funds 🏦</Button>
        </div>
      </div>
    </div>
    <div className="mt-10">
      <h2 className="text-3xl font-bold">Progress Bars 📊</h2>
      <div className="flex flex-wrap justify-between mt-6">
        <div className="w-full md:w-1/2 xl:w-1/2">
          <div className="bg-gray-200 rounded-full h-4">
            <div className="bg-indigo-600 h-4 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-gray-600 leading-relaxed mt-2">Savings Goal: 75% 🏦</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 mt-6 md:mt-0">
          <div className="bg-gray-200 rounded-full h-4">
            <div className="bg-green-600 h-4 rounded-full" style={{ width: '50%' }}></div>
          </div>
          <p className="text-gray-600 leading-relaxed mt-2">Expense Tracking: 50% 📊</p>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
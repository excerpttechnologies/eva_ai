import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Userprofile() {
  return (
    <Layout>
      <div className="h-screen w-full bg-gray-100">
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 h-40 flex justify-center items-center">
    <h1 className="text-4xl font-bold text-white">User Profile 📊</h1>
  </section>
  <main className="py-20 px-6 max-w-7xl mx-auto">
    <div className="flex flex-wrap justify-center -mx-4">
      <Card className="w-full md:w-1/2 xl:w-1/3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold text-gray-900">Account Information 📈</h2>
        <p className="text-gray-600 leading-relaxed">View and manage your account details, including your name, email, and password.</p>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <Input label="Name" placeholder="John Doe" type="text" />
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <Input label="Email" placeholder="johndoe@example.com" type="email" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <Input label="Password" placeholder="●●●●●●●●" type="password" />
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <Input label="Confirm Password" placeholder="●●●●●●●●" type="password" />
          </div>
        </div>
      </Card>
      <Card className="w-full md:w-1/2 xl:w-1/3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold text-gray-900">Payment Methods 💸</h2>
        <p className="text-gray-600 leading-relaxed">Manage your payment methods, including credit cards and bank accounts.</p>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Visa</Badge>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Mastercard</Badge>
          </div>
        </div>
      </Card>
      <Card className="w-full md:w-1/2 xl:w-1/3 p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold text-gray-900">Transaction History 📊</h2>
        <p className="text-gray-600 leading-relaxed">View your transaction history, including payments and transfers.</p>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <table className="w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Date</th>
                  <th className="px-4 py-2">Amount</th>
                  <th className="px-4 py-2">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">2022-01-01</td>
                  <td className="px-4 py-2">$100.00</td>
                  <td className="px-4 py-2">Payment</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">2022-01-15</td>
                  <td className="px-4 py-2">$50.00</td>
                  <td className="px-4 py-2">Transfer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>
    </div>
  </main>
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save Changes 📝</Button>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Cancel 🚫</Button>
      </div>
    </div>
  </section>
  <footer className="py-20 px-6 max-w-7xl mx-auto">
    <p className="text-gray-600 leading-relaxed">Copyright 2023 PayFlow 📈</p>
  </footer>
</div>
    </Layout>
  )
}
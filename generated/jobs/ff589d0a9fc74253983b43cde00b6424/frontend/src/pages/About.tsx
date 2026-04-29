import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function About() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-900">About PayFlow 🚀</h1>
      <p className="text-gray-600 leading-relaxed text-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4">Our mission is to revolutionize the FinTech industry with secure, fast, and reliable payment solutions 💸</p>
    </div>
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-3xl font-bold">Our Values 🌟</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Security 🔒</h3>
          <p className="text-gray-600 leading-relaxed">We prioritize the security of our users' data and transactions 🛡️</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Innovation 💡</h3>
          <p className="text-gray-600 leading-relaxed">We strive to stay ahead of the curve with cutting-edge technology and innovative solutions 🚀</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Customer Satisfaction 🤝</h3>
          <p className="text-gray-600 leading-relaxed">We are committed to providing exceptional customer service and support 🤝</p>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold">Meet Our Team 👥</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mt-4">John Doe 👋</h3>
          <p className="text-gray-600 leading-relaxed text-center">CEO & Founder 🚀</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mt-4">Jane Smith 👋</h3>
          <p className="text-gray-600 leading-relaxed text-center">CTO 🤖</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-white" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mt-4">Bob Johnson 👋</h3>
          <p className="text-gray-600 leading-relaxed text-center">CMO 📈</p>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold">Company Stats 📊</h2>
      <div className="flex flex-wrap justify-center mt-6">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
          <h3 className="text-xl font-semibold">Transactions Processed 📈</h3>
          <p className="text-gray-600 leading-relaxed">10,000,000+ 💸</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
          <h3 className="text-xl font-semibold">Users Served 🌎</h3>
          <p className="text-gray-600 leading-relaxed">1,000,000+ 👥</p>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-6">
          <h3 className="text-xl font-semibold">Partnerships Established 🤝</h3>
          <p className="text-gray-600 leading-relaxed">500+ 📈</p>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold">Timeline Milestones 📆</h2>
      <div className="flex flex-col mt-6">
        <div className="flex flex-row items-center mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">2020: Founded 🚀</h3>
            <p className="text-gray-600 leading-relaxed">PayFlow was founded by John Doe and Jane Smith 🌟</p>
          </div>
        </div>
        <div className="flex flex-row items-center mb-4">
          <div className="w-12 h-12 bg-indigo-600 rounded-full flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">2022: Launched Payment Gateway 🚀</h3>
            <p className="text-gray-600 leading-relaxed">PayFlow launched its payment gateway, enabling fast and secure transactions 💸</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Contact() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto py-20 px-6">
  <h1 className="text-4xl font-bold text-gray-900">Get in Touch with Edify 📚</h1>
  <p className="text-gray-600 leading-relaxed">Have a question or need help with our Education ERP system? We're here to assist you 🤝</p>
  <div className="flex flex-wrap justify-center mt-10">
    <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Contact Form 📝</h2>
        <form>
          <Input label="Name" placeholder="John Doe" type="text" />
          <Input label="Email" placeholder="john.doe@example.com" type="email" />
          <Input label="Subject" placeholder="General Inquiry" type="text" />
          <textarea className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Your message here..."></textarea>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Submit 🚀</Button>
        </form>
      </Card>
    </div>
    <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Contact Information 📞</h2>
        <p className="text-gray-600 leading-relaxed">Address: 123 Main St, Anytown, USA 🏢</p>
        <p className="text-gray-600 leading-relaxed">Email: <a href="mailto:info@edify.com" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">info@edify.com</a> 📧</p>
        <p className="text-gray-600 leading-relaxed">Phone: 555-555-5555 📞</p>
        <p className="text-gray-600 leading-relaxed">Hours: Monday - Friday, 9am - 5pm 🕒</p>
        <div className="flex flex-wrap justify-start mt-4">
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2">Facebook 📱</Badge>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2">Twitter 🐦</Badge>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">LinkedIn 📈</Badge>
        </div>
      </Card>
    </div>
  </div>
  <div className="flex flex-wrap justify-center mt-10">
    <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Meet Our Team 👥</h2>
        <div className="flex flex-wrap justify-start mt-4">
          <div className="w-full lg:w-1/3 xl:w-1/3 p-4">
            <img src="https://via.placeholder.com/100" alt="Team Member 1" className="w-full h-full object-cover rounded-full" />
            <p className="text-gray-600 leading-relaxed mt-2">John Doe 🤝</p>
            <p className="text-gray-600 leading-relaxed">CEO & Founder 🚀</p>
          </div>
          <div className="w-full lg:w-1/3 xl:w-1/3 p-4">
            <img src="https://via.placeholder.com/100" alt="Team Member 2" className="w-full h-full object-cover rounded-full" />
            <p className="text-gray-600 leading-relaxed mt-2">Jane Smith 🤝</p>
            <p className="text-gray-600 leading-relaxed">CTO & Co-Founder 🤖</p>
          </div>
          <div className="w-full lg:w-1/3 xl:w-1/3 p-4">
            <img src="https://via.placeholder.com/100" alt="Team Member 3" className="w-full h-full object-cover rounded-full" />
            <p className="text-gray-600 leading-relaxed mt-2">Bob Johnson 🤝</p>
            <p className="text-gray-600 leading-relaxed">CMO & Marketing Expert 📈</p>
          </div>
        </div>
      </Card>
    </div>
    <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Our Mission 🚀</h2>
        <p className="text-gray-600 leading-relaxed">At Edify, our mission is to provide innovative education solutions that empower students, teachers, and administrators to succeed 📚</p>
        <p className="text-gray-600 leading-relaxed">We believe in the power of education to transform lives and communities, and we're committed to making a positive impact 🌎</p>
        <div className="flex flex-wrap justify-start mt-4">
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2">Innovation 🚀</Badge>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2">Excellence 🏆</Badge>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Community 🌟</Badge>
        </div>
      </Card>
    </div>
  </div>
</div>
    </Layout>
  )
}
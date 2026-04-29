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
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
    <div className="lg:w-1/2">
      <h1 className="text-4xl font-bold text-gray-900">Get in Touch with FinSecure</h1>
      <p className="text-gray-600 leading-relaxed mt-4">Reach out to our dedicated team for inquiries, support, or partnerships.</p>
      <form className="mt-8">
        <Input label="Full Name" placeholder="John Doe" type="text" className="mb-4" />
        <Input label="Email Address" placeholder="johndoe@example.com" type="email" className="mb-4" />
        <Input label="Subject" placeholder="General Inquiry" type="text" className="mb-4" />
        <Input label="Message" placeholder="Type your message here..." type="textarea" rows={5} className="mb-4" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Submit Inquiry 📲</Button>
      </form>
    </div>
    <div className="lg:w-1/2 mt-10 lg:mt-0">
      <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
      <div className="flex items-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
          <path d="M17.657 5.657L15.242 3.242a2.5 2.5 0 0 0-3.536 0L7.119 9.618 2.253 3.985a2.5 2.5 0 0 0-3.536 0L.119 9.618A2.5 2.5 0 0 0 2.618 12h14.364a2.5 2.5 0 0 0 2.5-2.5z" />
        </svg>
        <div>
          <p className="text-gray-900 font-semibold">Address</p>
          <p className="text-gray-600">123 Financial Blvd, New York, NY 10001</p>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
          <path d="M3 8l8 8 8-8" />
          <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <p className="text-gray-900 font-semibold">Email</p>
          <p className="text-gray-600"><a href="mailto:support@finsecure.com">support@finsecure.com</a></p>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
          <path d="M17 3a5.9 5.9 0 0 1 0 11.8 5.9 5.9 0 0 1-12 0 5.9 5.9 0 0 1 0-11.8z" />
          <path d="M22.09 3H21V1h-1.22C15.67 1 12 4.67 12 9s3.67 8 7.09 8H21v-2a10.97 10.97 0 0 0-7.08-2.88z" />
        </svg>
        <div>
          <p className="text-gray-900 font-semibold">Phone</p>
          <p className="text-gray-600">+1 (800) FIN-SECURE</p>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600 mr-3" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
          <path d="M5 3v4M19 3v4M3 12h16" />
        </svg>
        <div>
          <p className="text-gray-900 font-semibold">Hours of Operation</p>
          <p className="text-gray-600">Mon - Fri, 9:00 AM - 5:00 PM EST</p>
        </div>
      </div>
      <div className="relative w-full h-64 rounded-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="Map Placeholder" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
          <p className="text-xl font-semibold">Map Coming Soon 🗺️</p>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-20">
    <h2 className="text-3xl font-bold mb-4">Why Choose FinSecure? 📈</h2>
    <div className="flex flex-wrap justify-center lg:justify-between -mx-4">
      <Card className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Security" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Robust Security</h3>
        <p className="text-gray-600 leading-relaxed">Leveraging Java's robust security features for unparalleled protection.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Learn More</Badge>
      </Card>
      <Card className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Analytics" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Data-Driven Insights</h3>
        <p className="text-gray-600 leading-relaxed">Utilizing Python for in-depth data analysis and informed decision making.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Explore</Badge>
      </Card>
      <Card className="w-full lg:w-1/3 px-4">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Support" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Dedicated Support</h3>
        <p className="text-gray-600 leading-relaxed">Our team is always ready to assist you via multiple channels.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Contact Us</Badge>
      </Card>
    </div>
  </div>
</div>
    </Layout>
  )
}
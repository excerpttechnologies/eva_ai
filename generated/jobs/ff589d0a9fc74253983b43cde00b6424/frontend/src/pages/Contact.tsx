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
  <h1 className="text-4xl font-bold text-gray-900">Get in Touch with PayFlow 📲</h1>
  <p className="text-gray-600 leading-relaxed">Have a question or need help with your payment flow? Our support team is here to assist you.</p>
  <div className="flex flex-wrap -mx-6">
    <div className="w-full lg:w-1/2 px-6 mb-8 lg:mb-0">
      <h2 className="text-3xl font-bold mb-4">Contact Form 📝</h2>
      <form>
        <Input label="Name" placeholder="John Doe" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
        <Input label="Email" placeholder="john@example.com" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mt-4" />
        <Input label="Subject" placeholder="Payment Inquiry" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mt-4" />
        <Input label="Message" placeholder="Type your message here..." type="textarea" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mt-4" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Submit 🚀</Button>
      </form>
    </div>
    <div className="w-full lg:w-1/2 px-6">
      <h2 className="text-3xl font-bold mb-4">Contact Information 📍</h2>
      <ul>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-gray-600 mr-2">
            <path d="M17.8 11.8l-4.3-4.3c-.4-.4-1-.4-1.4 0l-4.3 4.3c-.4.4-.4 1 0 1.4l4.3 4.3c.4.4 1 .4 1.4 0l4.3-4.3c.4-.4.4-1 0-1.4z" />
          </svg>
          <span className="text-gray-600">Address: 123 Main St, New York, NY 10001 🗽️</span>
        </li>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-gray-600 mr-2">
            <path d="M1.5 12h21m-10.5 0c-.4 0-.8-.2-1-.5l-1-1c-.2-.2-.3-.5-.3-.7v-1.5c0-.4.2-.7.5-1l1-1c.2-.2.5-.3.7-.3h10.5c.4 0 .7.2 1 .5l1 1c.2.2.3.5.3.7v1.5c0 .4-.2.7-.5 1l-1 1c-.2.2-.5.3-.7.3z" />
          </svg>
          <span className="text-gray-600">Email: <a href="mailto:support@payflow.com" className="text-indigo-600 hover:text-indigo-700">support@payflow.com</a> 📧</span>
        </li>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-gray-600 mr-2">
            <path d="M12 18h.01M7.87 18h10.26M16.9 21c-.78.62-2.65 1.77-6.08 2-3.42.24-6.73-1.01-6.08-2v-.01z" />
          </svg>
          <span className="text-gray-600">Phone: +1 (123) 456-7890 📞</span>
        </li>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6 text-gray-600 mr-2">
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-gray-600">Hours: Monday - Friday, 9am - 5pm EST 🕒</span>
        </li>
      </ul>
    </div>
  </div>
  <div className="mt-12">
    <h3 className="text-xl font-semibold mb-4">Follow Us on Social Media 📱</h3>
    <ul className="flex items-center">
      <li className="mr-4">
        <a href="#" className="text-indigo-600 hover:text-indigo-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6">
            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
          </svg>
        </a>
      </li>
      <li className="mr-4">
        <a href="#" className="text-indigo-600 hover:text-indigo-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <path d="M20 3h-1v10c0 6-8 10-8 10H3c0 0 1-6 8-10h3V3c0 0 1 1 1 1h1c0 0 1-1 1-1v1z" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" className="text-indigo-600 hover:text-indigo-700">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6">
            <path d="M19 0H5c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM9 4h6v6H9V4zm3 8V4h3v8h-3z" />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</div>
    </Layout>
  )
}
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
      <div className="container mx-auto px-6 py-20">
  <section className="flex flex-col lg:flex-row justify-between items-center">
    <div className="lg:w-1/2 mb-10 lg:mb-0">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch with BiteBistro 🍴</h2>
      <form>
        <Input label="Name" placeholder="John Doe" type="text" className="mb-4" />
        <Input label="Email" placeholder="johndoe@example.com" type="email" className="mb-4" />
        <Input label="Subject" placeholder="Feedback, Inquiry, etc." type="text" className="mb-4" />
        <textarea placeholder="Your Message..." className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-4"></textarea>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Submit 📲</Button>
      </form>
    </div>
    <div className="lg:w-1/2">
      <h3 className="text-xl font-semibold mb-4">Contact Information 📍</h3>
      <ul>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd">
            <path d="M17.25 6.75L20.25 9.75M9.75 17.25L12.75 20.25M6.75 9.75L9.75 6.75M12.75 9.75L15.75 12.75M9.75 12.75L12.75 9.75" />
          </svg>
          <span>123 BiteBistro Lane, Foodville, USA 12345</span>
        </li>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd">
            <path d="M20 6a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h2.586l6.293 6.293a1 1 0 001.414-1.414L13.828 8H20z" />
          </svg>
          <span><a href="mailto:info@bitebistro.com">info@bitebistro.com</a></span>
        </li>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd">
            <path d="M3 3h18c.55 0 1 .45 1 1v18c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1zm16 16H4V5h16v14zm-4.5-8l-3 3-3-3-1.5 1.5 3 3 3-3 1.5-1.5z" />
          </svg>
          <span>(123) 456-7890</span>
        </li>
        <li className="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd">
            <path d="M19 7V6a5 5 0 00-10-4 5 5 0 00-4 5v6a3 3 0 003 3h8a3 3 0 003-3V7z" />
          </svg>
          <span>Mon - Thu: 11am - 10pm, Fri - Sat: 11am - 11pm, Sun: 12pm - 9pm</span>
        </li>
      </ul>
      <div className="relative w-full h-64 rounded-2xl overflow-hidden">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="Map Placeholder" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
          <span>Map Placeholder 📍</span>
        </div>
      </div>
      <div className="flex mt-4">
        <a href="#" className="mr-4 text-indigo-600 hover:text-indigo-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd">
            <path d="M24 20.193l-4.353-4.354c-.895-.895-2.337-.895-3.232 0L10 18.354v1.432l6.292 6.292c.63.63 1.677.08 1.678-.84V12.43l4.358-4.358c.895-.895.895-2.337 0-3.232z" />
          </svg>
        </a>
        <a href="#" className="mr-4 text-indigo-600 hover:text-indigo-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd">
            <path d="M23 21l-8.485 4.485C15.364 25.09 4.676 25 0 20.211V4.11C4.676-.777 15.364.223 20.485 5.715l8.485-4.485C22.743 2.63 24 4.692 24 7v10c0 2.309-1.257 4.268-3 5.689z" />
          </svg>
        </a>
        <a href="#" className="text-indigo-600 hover:text-indigo-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd">
            <path d="M21 5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h6.59l4.58 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 9h-2V8h2v6zm0 2h-2v-2h2v2z" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
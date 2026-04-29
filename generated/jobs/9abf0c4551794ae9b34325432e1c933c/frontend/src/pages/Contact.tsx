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
  <section className="flex flex-col lg:flex-row justify-between items-center">
    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch with Bistro Bliss 📲</h2>
      <form>
        <Input label="Full Name" placeholder="John Doe" type="text" className="mb-4" />
        <Input label="Email Address" placeholder="johndoe@example.com" type="email" className="mb-4" />
        <Input label="Message" placeholder="Type your message here..." type="textarea" className="mb-4 h-48" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Send Message 📨</Button>
      </form>
    </div>
    <div className="w-full lg:w-1/2">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information 📍</h2>
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M17.657 5.657L20.242 8.243M3 17V19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2M5 15v2m5-2v2m5-2v2" />
        </svg>
        <div>
          <p className="text-xl font-semibold">Address</p>
          <p className="text-gray-600">123 Main St, New York, NY 10001</p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M3 9l2.886 4.926 5.531 1.94 4.905-6.536L24 10l-6.445 4.54L12 15l-1.135.847-6.54 3.235-1.134-.847L3 9z" />
        </svg>
        <div>
          <p className="text-xl font-semibold">Phone</p>
          <p className="text-gray-600"><a href="tel:+1234567890" className="hover:text-indigo-600">+1 (234) 567-890</a></p>
        </div>
      </div>
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M7 10h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2z" />
          <path d="M21 18a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
        </svg>
        <div>
          <p className="text-xl font-semibold">Hours</p>
          <p className="text-gray-600">Mon - Thu: 11am - 10pm <br/> Fri - Sat: 11am - 11pm <br/> Sun: 12pm - 9pm</p>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-xl font-semibold">Follow Us</p>
        <div className="flex">
          <a href="#" className="text-indigo-600 hover:text-indigo-700 mr-4"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M23 9v6a2 2 0 0 1-2 2H6l-2 2v-8a2 2 0 0 1 2-2h3m16-3v3m-9 8h8m-8-8v8a2 2 0 0 0 2 2h3m-6-2h4" />
          </svg></a>
          <a href="#" className="text-indigo-600 hover:text-indigo-700 mr-4"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M4 4h16v5H4V4zm0 6h16v9H4v-9zm0 12h16v5H4v-5z" />
          </svg></a>
          <a href="#" className="text-indigo-600 hover:text-indigo-700"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M9 8a3 3 0 0 1 3 3v2a6 6 0 0 0-6 6H3v3a2 2 0 0 1-2 2 2 2 0 0 1-2-2V6a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2a6 6 0 0 0 6-6 3 3 0 0 1 3-3z" />
            <circle cx="12" cy="13" r="2" />
          </svg></a>
        </div>
      </div>
    </div>
  </section>
  <section className="py-16 px-6">
    <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Find Us on the Map 🗺️</h2>
    <div className="max-w-7xl mx-auto">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.411874191872!2d-74.00698868419143!3d40.712776079329246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a3a5a5a5a5%3A0xc85c32a1b7ff9e5!2sOne+World+Trade+Center!5e0!3m2!1sen!2sus!4v1573452615863!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabIndex="0"></iframe>
    </div>
  </section>
</div>
    </Layout>
  )
}
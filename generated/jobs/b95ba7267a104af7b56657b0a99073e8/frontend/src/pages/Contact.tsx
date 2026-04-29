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
  <h1 className="text-4xl font-bold text-gray-900">Get in Touch 📲</h1>
  <p className="text-gray-600 leading-relaxed">Have a question or want to discuss a project? I'd love to hear from you! 🤗</p>
  <div className="flex flex-wrap -mx-6">
    <div className="w-full lg:w-1/2 px-6 mb-8 lg:mb-0">
      <form>
        <Input label="Name" placeholder="John Doe" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" />
        <Input label="Email" placeholder="johndoe@example.com" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mt-4" />
        <Input label="Subject" placeholder="Project Inquiry" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mt-4" />
        <textarea className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mt-4" placeholder="Message"></textarea>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Send Message 📧</Button>
      </form>
    </div>
    <div className="w-full lg:w-1/2 px-6">
      <h2 className="text-3xl font-bold">Contact Information 📞</h2>
      <p className="text-gray-600 leading-relaxed">You can reach me at the following locations:</p>
      <div className="flex flex-wrap -mx-6">
        <div className="w-full lg:w-1/2 px-6 mb-8 lg:mb-0">
          <p className="text-gray-600 leading-relaxed">Address: <span className="text-indigo-700 font-semibold">123 Main St, Anytown, USA 12345</span> 🏢</p>
          <p className="text-gray-600 leading-relaxed">Email: <span className="text-indigo-700 font-semibold">info@example.com</span> 📧</p>
          <p className="text-gray-600 leading-relaxed">Phone: <span className="text-indigo-700 font-semibold">(123) 456-7890</span> 📞</p>
        </div>
        <div className="w-full lg:w-1/2 px-6">
          <p className="text-gray-600 leading-relaxed">Hours: <span className="text-indigo-700 font-semibold">Monday - Friday, 9am - 5pm EST</span> 🕒</p>
          <p className="text-gray-600 leading-relaxed">Social Media: <span className="text-indigo-700 font-semibold"><Link to="/linkedin">LinkedIn</Link> | <Link to="/github">GitHub</Link> | <Link to="/twitter">Twitter</Link></span> 📱</p>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-center mt-8">
    <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Software Development</Badge>
    <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 ml-2">Web Development</Badge>
    <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 ml-2">Mobile App Development</Badge>
  </div>
  <div className="mt-8">
    <h3 className="text-xl font-semibold">Let's Work Together 🤝</h3>
    <p className="text-gray-600 leading-relaxed">I'm excited to collaborate with you on your next project. Whether you're looking to build a new website, mobile app, or software solution, I'm here to help. Let's get started today! 🚀</p>
  </div>
  <div className="flex justify-center mt-8">
    <Link to="/projects" className="text-indigo-700 font-semibold hover:text-indigo-500 transition-all duration-200">View My Projects 📚</Link>
    <Link to="/about" className="text-indigo-700 font-semibold hover:text-indigo-500 transition-all duration-200 ml-4">Learn More About Me 📖</Link>
  </div>
</div>
    </Layout>
  )
}
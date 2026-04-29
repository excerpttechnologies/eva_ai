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
  <p className="text-gray-600 leading-relaxed">Have a question or need help? Our dedicated team is here to assist you. 🤝</p>
  <div className="flex flex-wrap -mx-4">
    <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Contact Form 📝</h2>
        <form>
          <Input label="Name" placeholder="John Doe" type="text" />
          <Input label="Email" placeholder="johndoe@example.com" type="email" />
          <Input label="Subject" placeholder="General Inquiry" type="text" />
          <textarea className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" rows="5" placeholder="Your message..."></textarea>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Submit 🚀</Button>
        </form>
      </Card>
    </div>
    <div className="w-full lg:w-1/2 px-4">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold">Contact Information 📍</h2>
        <p className="text-gray-600 leading-relaxed">Address: 123 Main St, Anytown, USA 🏢</p>
        <p className="text-gray-600 leading-relaxed">Email: <a href="mailto:info@edify.edu" className="text-indigo-600 hover:text-indigo-700">info@edify.edu</a> 📧</p>
        <p className="text-gray-600 leading-relaxed">Phone: <a href="tel:123-456-7890" className="text-indigo-600 hover:text-indigo-700">(123) 456-7890</a> 📞</p>
        <p className="text-gray-600 leading-relaxed">Hours: Monday - Friday, 9am - 5pm 🕒</p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Monday</Badge>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Tuesday</Badge>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Wednesday</Badge>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Thursday</Badge>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Friday</Badge>
          </div>
        </div>
      </Card>
    </div>
  </div>
  <div className="flex flex-wrap -mx-4 mt-8">
    <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Social Media 📱</h3>
        <p className="text-gray-600 leading-relaxed">Follow us on social media to stay up-to-date on the latest news and updates! 📣</p>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <a href="#" className="text-indigo-600 hover:text-indigo-700"><i className="fab fa-facebook-f"></i> Facebook</a>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <a href="#" className="text-indigo-600 hover:text-indigo-700"><i className="fab fa-twitter"></i> Twitter</a>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
            <a href="#" className="text-indigo-600 hover:text-indigo-700"><i className="fab fa-instagram"></i> Instagram</a>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <a href="#" className="text-indigo-600 hover:text-indigo-700"><i className="fab fa-linkedin-in"></i> LinkedIn</a>
          </div>
        </div>
      </Card>
    </div>
    <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Help Center 🤔</h3>
        <p className="text-gray-600 leading-relaxed">Need help with something? Check out our help center for answers to frequently asked questions! 🤓</p>
        <ul>
          <li><a href="#" className="text-indigo-600 hover:text-indigo-700">FAQs</a></li>
          <li><a href="#" className="text-indigo-600 hover:text-indigo-700">Contact Support</a></li>
          <li><a href="#" className="text-indigo-600 hover:text-indigo-700">User Manual</a></li>
        </ul>
      </Card>
    </div>
    <div className="w-full lg:w-1/3 px-4">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">News and Updates 📰</h3>
        <p className="text-gray-600 leading-relaxed">Stay up-to-date on the latest news and updates from Edify! 📣</p>
        <ul>
          <li><a href="#" className="text-indigo-600 hover:text-indigo-700">Blog</a></li>
          <li><a href="#" className="text-indigo-600 hover:text-indigo-700">Press Releases</a></li>
          <li><a href="#" className="text-indigo-600 hover:text-indigo-700">Events</a></li>
        </ul>
      </Card>
    </div>
  </div>
</div>
    </Layout>
  )
}
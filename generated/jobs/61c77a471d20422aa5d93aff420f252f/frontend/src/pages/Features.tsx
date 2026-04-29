import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Features() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Edify: Empowering Education</h1>
    <p className="text-gray-600 leading-relaxed">Unlock the full potential of your students with our comprehensive Education ERP system 📚</p>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap -mx-6">
      <div className="w-full lg:w-1/2 px-6 mb-8 lg:mb-0">
        <img src="image-placeholder.jpg" alt="Student Learning" className="w-full h-full object-cover object-center" />
      </div>
      <div className="w-full lg:w-1/2 px-6">
        <h2 className="text-3xl font-bold">Student Dashboard</h2>
        <p className="text-gray-600 leading-relaxed">Get instant access to student information, attendance, and grades 📊</p>
        <ul className="list-none mb-4">
          <li className="mb-2"><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Student Profile</Badge></li>
          <li className="mb-2"><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Attendance Tracking</Badge></li>
          <li className="mb-2"><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Grade Book</Badge></li>
        </ul>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore Student Dashboard 🚀</Button>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap -mx-6">
      <div className="w-full lg:w-1/2 px-6 mb-8 lg:mb-0 order-lg-2">
        <img src="image-placeholder.jpg" alt="Teacher Portal" className="w-full h-full object-cover object-center" />
      </div>
      <div className="w-full lg:w-1/2 px-6 order-lg-1">
        <h2 className="text-3xl font-bold">Teacher Portal</h2>
        <p className="text-gray-600 leading-relaxed">Manage student data, track attendance, and update grades with ease 📝</p>
        <ul className="list-none mb-4">
          <li className="mb-2"><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Student Management</Badge></li>
          <li className="mb-2"><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Attendance Tracking</Badge></li>
          <li className="mb-2"><Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Grade Book Updates</Badge></li>
        </ul>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore Teacher Portal 📚</Button>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Integration Grid</h2>
    <p className="text-gray-600 leading-relaxed">Seamlessly integrate with 12+ popular education tools and platforms 🤝</p>
    <div className="grid grid-cols-3 gap-4 mb-8">
      <img src="logo1.png" alt="Logo 1" className="w-full h-full object-contain object-center" />
      <img src="logo2.png" alt="Logo 2" className="w-full h-full object-contain object-center" />
      <img src="logo3.png" alt="Logo 3" className="w-full h-full object-contain object-center" />
      <img src="logo4.png" alt="Logo 4" className="w-full h-full object-contain object-center" />
      <img src="logo5.png" alt="Logo 5" className="w-full h-full object-contain object-center" />
      <img src="logo6.png" alt="Logo 6" className="w-full h-full object-contain object-center" />
      <img src="logo7.png" alt="Logo 7" className="w-full h-full object-contain object-center" />
      <img src="logo8.png" alt="Logo 8" className="w-full h-full object-contain object-center" />
      <img src="logo9.png" alt="Logo 9" className="w-full h-full object-contain object-center" />
      <img src="logo10.png" alt="Logo 10" className="w-full h-full object-contain object-center" />
      <img src="logo11.png" alt="Logo 11" className="w-full h-full object-contain object-center" />
      <img src="logo12.png" alt="Logo 12" className="w-full h-full object-contain object-center" />
    </div>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore Integrations 🚀</Button>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Advanced Features</h2>
    <p className="text-gray-600 leading-relaxed">Unlock the full potential of Edify with our advanced features 🚀</p>
    <div className="flex flex-wrap -mx-6">
      <div className="w-full lg:w-1/2 px-6 mb-8 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Machine Learning-based Predictions</h3>
          <p className="text-gray-600 leading-relaxed">Get accurate predictions on student performance using machine learning algorithms 🤖</p>
        </Card>
      </div>
      <div className="w-full lg:w-1/2 px-6 mb-8 lg:mb-0">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Automated Grade Book Updates</h3>
          <p className="text-gray-600 leading-relaxed">Automate grade book updates using our Java-based APIs 📊</p>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Call to Action</h2>
    <p className="text-gray-600 leading-relaxed">Get started with Edify today and transform your education experience 🚀</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Sign Up for Free 🎉</Button>
    <Link to="/login" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">Already have an account? Log In 📚</Link>
  </section>
</div>
    </Layout>
  )
}
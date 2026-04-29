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
    <p className="text-gray-600 leading-relaxed">Unlock the full potential of your educational institution with Edify, the ultimate Education ERP system.</p>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <h2 className="text-3xl font-bold">Streamlined Student Management</h2>
        <p className="text-gray-600 leading-relaxed">Effortlessly manage student profiles, course enrollment, and grade tracking with our intuitive student portal.</p>
        <img src="image-placeholder" alt="Student Portal" className="w-full h-64 object-cover object-center" />
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <h2 className="text-3xl font-bold">Efficient Teacher Management</h2>
        <p className="text-gray-600 leading-relaxed">Simplify class management, attendance tracking, and grade book management with our comprehensive teacher portal.</p>
        <img src="image-placeholder" alt="Teacher Portal" className="w-full h-64 object-cover object-center" />
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <img src="logo1" alt="Logo 1" className="w-full h-12 object-contain" />
      </div>
      <div className="col-span-3">
        <img src="logo2" alt="Logo 2" className="w-full h-12 object-contain" />
      </div>
      <div className="col-span-3">
        <img src="logo3" alt="Logo 3" className="w-full h-12 object-contain" />
      </div>
      <div className="col-span-3">
        <img src="logo4" alt="Logo 4" className="w-full h-12 object-contain" />
      </div>
      <div className="col-span-3">
        <img src="logo5" alt="Logo 5" className="w-full h-12 object-contain" />
      </div>
      <div className="col-span-3">
        <img src="logo6" alt="Logo 6" className="w-full h-12 object-contain" />
      </div>
      <div className="col-span-3">
        <img src="logo7" alt="Logo 7" className="w-full h-12 object-contain" />
      </div>
      <div className="col-span-3">
        <img src="logo8" alt="Logo 8" className="w-full h-12 object-contain" />
      </div>
      <div className="col-span-3">
        <img src="logo9" alt="Logo 9" className="w-full h-12 object-contain" />
      </div>
      <div className="col-span-3">
        <img src="logo10" alt="Logo 10" className="w-full h-12 object-contain" />
      </div>
      <div className="col-span-3">
        <img src="logo11" alt="Logo 11" className="w-full h-12 object-contain" />
      </div>
      <div className="col-span-3">
        <img src="logo12" alt="Logo 12" className="w-full h-12 object-contain" />
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap justify-center">
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <h2 className="text-3xl font-bold">Advanced Features</h2>
        <ul className="list-disc pl-6">
          <li>Attendance tracking with automated reports 📊</li>
          <li>Grade book management with weighted grades and comments 📚</li>
          <li>Student and teacher profile management with customizable fields 📁</li>
          <li>Course enrollment and management with prerequisites and co-requisites 📅</li>
        </ul>
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <h2 className="text-3xl font-bold">Data-Driven Insights</h2>
        <p className="text-gray-600 leading-relaxed">Gain valuable insights into student performance, attendance, and more with our interactive charts and graphs.</p>
        <img src="image-placeholder" alt="Data Visualization" className="w-full h-64 object-cover object-center" />
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Get Started with Edify</h2>
    <p className="text-gray-600 leading-relaxed">Discover how Edify can transform your educational institution. Sign up for a free trial today! 🚀</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Sign Up for Free Trial</Button>
  </section>
  <section className="py-20 px-6">
    <h3 className="text-xl font-semibold">Login or Register</h3>
    <p className="text-gray-600 leading-relaxed">Already have an account? Log in to access your Edify dashboard. New user? Register now to get started! 📝</p>
    <div className="flex flex-wrap justify-center">
      <Link to="/login" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Login</Link>
      <Link to="/register" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Register</Link>
    </div>
  </section>
  <section className="py-20 px-6">
    <h3 className="text-xl font-semibold">Student Portal</h3>
    <p className="text-gray-600 leading-relaxed">Manage your student profile, enroll in courses, and track your grades with our intuitive student portal. 📚</p>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h4 className="text-xl font-semibold">Student Profile</h4>
      <Input label="Name" placeholder="John Doe" type="text" />
      <Input label="Email" placeholder="johndoe@example.com" type="email" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save Changes</Button>
    </Card>
  </section>
  <section className="py-20 px-6">
    <h3 className="text-xl font-semibold">Teacher Portal</h3>
    <p className="text-gray-600 leading-relaxed">Manage your classes, track attendance, and grade assignments with our comprehensive teacher portal. 📊</p>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h4 className="text-xl font-semibold">Class Management</h4>
      <Input label="Class Name" placeholder="Math 101" type="text" />
      <Input label="Class Description" placeholder="Introduction to mathematics" type="text" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Create Class</Button>
    </Card>
  </section>
  <section className="py-20 px-6">
    <h3 className="text-xl font-semibold">Admin Dashboard</h3>
    <p className="text-gray-600 leading-relaxed">Overview of student and teacher data, system settings, and user management. 📈</p>
    <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <h4 className="text-xl font-semibold">System Settings</h4>
      <Input label="School Name" placeholder="Edify School" type="text" />
      <Input label="School Address" placeholder="123 Main St" type="text" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save Changes</Button>
    </Card>
  </section>
</div>
    </Layout>
  )
}
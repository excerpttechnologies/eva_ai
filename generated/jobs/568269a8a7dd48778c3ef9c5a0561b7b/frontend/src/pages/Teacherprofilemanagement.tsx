import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Teacherprofilemanagement() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-[520px] relative">
      <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" alt="Teacher Profile Management" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white">Teacher Profile Management 📚</h1>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Manage Teacher Profiles 📊</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Teacher Profile" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">Teacher Profile 📄</h3>
        <p className="text-gray-600 leading-relaxed mt-2">View and manage teacher profiles, including contact information, qualifications, and experience.</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Teacher Dashboard" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">Teacher Dashboard 📈</h3>
        <p className="text-gray-600 leading-relaxed mt-2">Access teacher dashboards to view assignments, grades, and student progress.</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Teacher Resources" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">Teacher Resources 📚</h3>
        <p className="text-gray-600 leading-relaxed mt-2">Find teacher resources, including lesson plans, educational tools, and professional development opportunities.</p>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Action Area 🚀</h2>
    <div className="flex justify-center mt-6">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Create New Teacher Profile 📄</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 ml-4">Edit Existing Teacher Profile 📊</Button>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Call to Action 📣</h2>
    <div className="flex justify-center mt-6">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Get Started with Edify Today 🚀</Button>
    </div>
    <p className="text-gray-600 leading-relaxed mt-4 text-center">Join the Edify community and start managing teacher profiles with ease. 📚</p>
  </section>
</div>
    </Layout>
  )
}
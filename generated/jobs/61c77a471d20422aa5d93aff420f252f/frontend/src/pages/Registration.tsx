import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Registration() {
  return (
    <Layout>
      <div className="h-screen flex flex-col">
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 h-40 flex justify-center items-center">
    <h1 className="text-4xl font-bold text-white">Edify Registration 📚</h1>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">Create Your Account 📝</h2>
      <p className="text-gray-600 leading-relaxed">Join the Edify community and start learning today! 🌟</p>
      <div className="flex flex-wrap justify-center">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
          <h3 className="text-xl font-semibold text-gray-900">Student Registration 📚</h3>
          <p className="text-gray-600 leading-relaxed">Register as a student and access our courses and resources.</p>
          <Link to="/student/register" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Register as Student 📝</Link>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
          <h3 className="text-xl font-semibold text-gray-900">Teacher Registration 📊</h3>
          <p className="text-gray-600 leading-relaxed">Register as a teacher and manage your courses and students.</p>
          <Link to="/teacher/register" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Register as Teacher 📝</Link>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
          <h3 className="text-xl font-semibold text-gray-900">Admin Registration 📈</h3>
          <p className="text-gray-600 leading-relaxed">Register as an admin and oversee the Edify platform.</p>
          <Link to="/admin/register" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Register as Admin 📝</Link>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">Already Have an Account? 🤔</h2>
      <p className="text-gray-600 leading-relaxed">Login to your account and start using Edify today! 🚀</p>
      <Link to="/login" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Login 📝</Link>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">Benefits of Edify 🌟</h2>
      <div className="flex flex-wrap justify-center">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
          <h3 className="text-xl font-semibold text-gray-900">Personalized Learning 📊</h3>
          <p className="text-gray-600 leading-relaxed">Edify provides personalized learning paths for each student.</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">AI-powered 🤖</Badge>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
          <h3 className="text-xl font-semibold text-gray-900">Real-time Feedback 📝</h3>
          <p className="text-gray-600 leading-relaxed">Edify provides real-time feedback and assessment tools.</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Automated 🤖</Badge>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
          <h3 className="text-xl font-semibold text-gray-900">Collaboration Tools 📢</h3>
          <p className="text-gray-600 leading-relaxed">Edify provides collaboration tools for students and teachers.</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Real-time 🕒</Badge>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900">Get Started Today! 🚀</h2>
      <p className="text-gray-600 leading-relaxed">Register now and start using Edify to improve your learning experience! 📚</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Register Now 📝</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Coursemanagement() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-[520px] rounded-2xl relative overflow-hidden">
      <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" alt="Edify Hero" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-gray-100">Edify Course Management</h1>
        <p className="text-xl font-semibold text-gray-200">Empowering educators, enriching students 📚</p>
        <div className="flex justify-center mt-6">
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2">Courses: 120</Badge>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mr-2">Students: 5000</Badge>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Teachers: 200</Badge>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Course Catalog</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Course 1" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">Introduction to Python 🐍</h3>
        <p className="text-gray-600 leading-relaxed mt-2">Learn the basics of Python programming and start building your own projects.</p>
        <div className="flex justify-between mt-4">
          <span className="text-gray-600">Instructor: John Doe 👨‍🏫</span>
          <span className="text-gray-600">Rating: 4.5/5 ⭐️</span>
          <span className="text-gray-600">Price: $99 💸</span>
        </div>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Course 2" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">Data Science with Java 📊</h3>
        <p className="text-gray-600 leading-relaxed mt-2">Explore the world of data science and learn how to analyze and visualize data using Java.</p>
        <div className="flex justify-between mt-4">
          <span className="text-gray-600">Instructor: Jane Smith 👩‍🏫</span>
          <span className="text-gray-600">Rating: 4.8/5 ⭐️</span>
          <span className="text-gray-600">Price: $149 💸</span>
        </div>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Course 3" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">Web Development with React 🌐</h3>
        <p className="text-gray-600 leading-relaxed mt-2">Learn how to build fast, scalable, and maintainable web applications using React.</p>
        <div className="flex justify-between mt-4">
          <span className="text-gray-600">Instructor: Bob Johnson 👨‍🏫</span>
          <span className="text-gray-600">Rating: 4.9/5 ⭐️</span>
          <span className="text-gray-600">Price: $199 💸</span>
        </div>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Learning Path</h2>
    <div className="flex flex-col justify-center items-center mt-6">
      <div className="flex justify-center mb-4">
        <span className="text-gray-600 text-xl font-semibold">Step 1: Introduction to Programming 📚</span>
      </div>
      <div className="flex justify-center mb-4">
        <span className="text-gray-600 text-xl font-semibold">Step 2: Data Structures and Algorithms 📊</span>
      </div>
      <div className="flex justify-center mb-4">
        <span className="text-gray-600 text-xl font-semibold">Step 3: Web Development with React 🌐</span>
      </div>
      <div className="flex justify-center mb-4">
        <span className="text-gray-600 text-xl font-semibold">Step 4: Advanced Topics and Project Development 🚀</span>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Instructor Profiles</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Instructor 1" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">John Doe 👨‍🏫</h3>
        <p className="text-gray-600 leading-relaxed mt-2">Experienced instructor with a passion for teaching programming concepts.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Instructor 2" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">Jane Smith 👩‍🏫</h3>
        <p className="text-gray-600 leading-relaxed mt-2">Skilled instructor with expertise in data science and machine learning.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Instructor 3" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">Bob Johnson 👨‍🏫</h3>
        <p className="text-gray-600 leading-relaxed mt-2">Seasoned instructor with a background in web development and software engineering.</p>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Instructor 4" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">Alice Brown 👩‍🏫</h3>
        <p className="text-gray-600 leading-relaxed mt-2">Talented instructor with experience in teaching programming languages and software development.</p>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Call to Action</h2>
    <div className="flex justify-center mt-6">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Enroll Now 📚</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}
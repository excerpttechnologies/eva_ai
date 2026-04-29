import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Students() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Student Portal</h1>
    <p className="text-gray-600 leading-relaxed">Welcome to Edify, your one-stop education platform 📚</p>
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <h2 className="text-3xl font-bold">Student Stats</h2>
        <p className="text-gray-600 leading-relaxed">Total Students: 1000 📈</p>
        <p className="text-gray-600 leading-relaxed">Total Courses: 50 📚</p>
      </div>
      <div className="flex-1">
        <img src="https://via.placeholder.com/200" alt="Student Image" className="w-full h-48 object-cover rounded-2xl" />
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Course Enrollment</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Mathematics</h3>
        <p className="text-gray-600 leading-relaxed">Instructor: John Doe 👨‍🏫</p>
        <p className="text-gray-600 leading-relaxed">Rating: 4.5/5 ⭐️</p>
        <p className="text-gray-600 leading-relaxed">Price: $100 💸</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Category: Science</Badge>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Enroll Now</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Computer Science</h3>
        <p className="text-gray-600 leading-relaxed">Instructor: Jane Doe 👩‍🏫</p>
        <p className="text-gray-600 leading-relaxed">Rating: 4.8/5 ⭐️</p>
        <p className="text-gray-600 leading-relaxed">Price: $150 💸</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Category: Technology</Badge>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Enroll Now</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">English Literature</h3>
        <p className="text-gray-600 leading-relaxed">Instructor: Bob Smith 👨‍🏫</p>
        <p className="text-gray-600 leading-relaxed">Rating: 4.2/5 ⭐️</p>
        <p className="text-gray-600 leading-relaxed">Price: $80 💸</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Category: Arts</Badge>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Enroll Now</Button>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Learning Path</h2>
    <div className="flex flex-col items-center">
      <div className="flex-1">
        <h3 className="text-xl font-semibold">Step 1: Introduction to Mathematics</h3>
        <p className="text-gray-600 leading-relaxed">Learn the basics of mathematics and get started with your journey 📝</p>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold">Step 2: Algebra and Geometry</h3>
        <p className="text-gray-600 leading-relaxed">Build on your foundation and explore the world of algebra and geometry 📐</p>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold">Step 3: Calculus and Statistics</h3>
        <p className="text-gray-600 leading-relaxed">Take your skills to the next level and dive into the world of calculus and statistics 📊</p>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Instructor Profiles</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">John Doe</h3>
        <p className="text-gray-600 leading-relaxed">Instructor of Mathematics 📝</p>
        <p className="text-gray-600 leading-relaxed">Rating: 4.5/5 ⭐️</p>
        <p className="text-gray-600 leading-relaxed">Bio: John Doe is a experienced instructor with a passion for mathematics 📚</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Jane Doe</h3>
        <p className="text-gray-600 leading-relaxed">Instructor of Computer Science 📊</p>
        <p className="text-gray-600 leading-relaxed">Rating: 4.8/5 ⭐️</p>
        <p className="text-gray-600 leading-relaxed">Bio: Jane Doe is a skilled instructor with a love for computer science 💻</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Bob Smith</h3>
        <p className="text-gray-600 leading-relaxed">Instructor of English Literature 📚</p>
        <p className="text-gray-600 leading-relaxed">Rating: 4.2/5 ⭐️</p>
        <p className="text-gray-600 leading-relaxed">Bio: Bob Smith is a dedicated instructor with a passion for English literature 📖</p>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Call to Action</h2>
    <p className="text-gray-600 leading-relaxed">Ready to start your learning journey? 🚀</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Enroll Now</Button>
  </section>
</div>
    </Layout>
  )
}
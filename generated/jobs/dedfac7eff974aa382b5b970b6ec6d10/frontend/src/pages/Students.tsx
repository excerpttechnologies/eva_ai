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
  {/* Hero Section */}
  <section className="py-20 px-6">
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 py-12 px-6 rounded-2xl">
      <h1 className="text-4xl font-bold text-white">Students Dashboard 📚</h1>
      <div className="flex justify-between mt-6 text-white">
        <div className="flex items-center">
          <span className="text-3xl font-bold mr-2">250</span>
          <span className="text-xl font-semibold">Total Students</span>
        </div>
        <div className="flex items-center">
          <span className="text-3xl font-bold mr-2">95%</span>
          <span className="text-xl font-semibold">Attendance Rate 📊</span>
        </div>
        <div className="flex items-center">
          <span className="text-3xl font-bold mr-2">4.5/5</span>
          <span className="text-xl font-semibold">Average Rating ⭐️</span>
        </div>
      </div>
    </div>
  </section>

  {/* Student Management Section */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Student Management 👥</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Add New Student</h3>
        <form>
          <Input label="Name" placeholder="John Doe" type="text" />
          <Input label="Email" placeholder="johndoe@example.com" type="email" />
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add Student</Button>
        </form>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Student List</h3>
        <ul>
          <li className="flex items-center py-2 border-b border-gray-200">
            <span className="text-gray-600">John Doe</span>
            <span className="ml-auto text-gray-600">Active</span>
          </li>
          <li className="flex items-center py-2 border-b border-gray-200">
            <span className="text-gray-600">Jane Doe</span>
            <span className="ml-auto text-gray-600">Active</span>
          </li>
          {/* More students... */}
        </ul>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Attendance Tracking 📆</h3>
        <div className="flex items-center">
          <span className="text-gray-600">Today's Attendance:</span>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 ml-2">90%</Badge>
        </div>
      </Card>
    </div>
  </section>

  {/* Course Cards Grid */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Enrolled Courses 📚</h2>
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-2">Math</Badge>
        <h3 className="text-xl font-semibold">Algebra Fundamentals</h3>
        <span className="text-gray-600">Instructor: Mr. Smith</span>
        <div className="flex items-center mt-2">
          <span className="text-gray-600">Rating:</span>
          <span className="ml-1 text-yellow-500">⭐️⭐️⭐️⭐️⭐️</span>
          <span className="ml-2 text-gray-600">(45 Reviews)</span>
        </div>
        <span className="text-gray-600 mt-2">$199.99</span>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-2">Science</Badge>
        <h3 className="text-xl font-semibold">Biology Essentials</h3>
        <span className="text-gray-600">Instructor: Dr. Lee</span>
        <div className="flex items-center mt-2">
          <span className="text-gray-600">Rating:</span>
          <span className="ml-1 text-yellow-500">⭐️⭐️⭐️⭐️</span>
          <span className="ml-2 text-gray-600">(30 Reviews)</span>
        </div>
        <span className="text-gray-600 mt-2">$149.99</span>
      </Card>
      {/* More courses... */}
    </div>
  </section>

  {/* Learning Path Steps */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Learning Path 🗺️</h2>
    <div className="flex flex-wrap justify-center mt-6">
      <div className="mx-4 my-4 flex items-center">
        <div className="bg-indigo-600 rounded-full p-4">
          <svg width="24" height="24" fill="white" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">Step 1: Foundations</h3>
          <span className="text-gray-600">Complete within 2 weeks</span>
        </div>
      </div>
      <div className="mx-4 my-4 flex items-center">
        <div className="bg-gray-200 rounded-full p-4">
          <svg width="24" height="24" fill="gray-500" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">Step 2: Advanced Topics</h3>
          <span className="text-gray-600">Starts after Step 1 completion</span>
        </div>
      </div>
      {/* More steps... */}
    </div>
  </section>

  {/* Instructor Profiles */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Instructors 👨‍🏫</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <div className="flex items-center">
        <img src="instructor1.jpg" alt="Instructor 1" className="w-24 h-24 rounded-full mr-4" />
        <div>
          <h3 className="text-xl font-semibold">Mr. Smith</h3>
          <span className="text-gray-600">Math Specialist</span>
          <div className="flex items-center mt-2">
            <span className="text-gray-600">Rating:</span>
            <span className="ml-1 text-yellow-500">⭐️⭐️⭐️⭐️⭐️</span>
            <span className="ml-2 text-gray-600">(100 Reviews)</span>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img src="instructor2.jpg" alt="Instructor 2" className="w-24 h-24 rounded-full mr-4" />
        <div>
          <h3 className="text-xl font-semibold">Dr. Lee</h3>
          <span className="text-gray-600">Science Expert</span>
          <div className="flex items-center mt-2">
            <span className="text-gray-600">Rating:</span>
            <span className="ml-1 text-yellow-500">⭐️⭐️⭐️⭐️</span>
            <span className="ml-2 text-gray-600">(50 Reviews)</span>
          </div>
        </div>
      </div>
      {/* More instructors... */}
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 px-6 bg-indigo-100">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-indigo-700">Ready to Enhance Your Learning Journey? 🚀</h2>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Explore More Courses</Button>
    </div>
  </section>

  {/* Footer (Simplified for this example) */}
  <footer className="py-6 px-6 text-gray-600 text-center border-t border-gray-200">
    <span>&copy; 2023 EduFlow. All Rights Reserved.</span>
  </footer>
</div>
    </Layout>
  )
}
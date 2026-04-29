import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Grades() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto px-6 pt-20">
  {/* Hero Section */}
  <section className="py-20">
    <div className="flex flex-col items-center justify-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900">Grades</h1>
      <p className="text-gray-600 leading-relaxed w-1/2 text-center mt-4">Track your academic progress with EduFlow's Grade Book</p>
    </div>
    <div className="flex justify-between w-full">
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-6 rounded-2xl shadow-sm border border-gray-100 w-1/3">
        <div className="flex items-center mb-4">
          <svg width="24" height="24" fill="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="ml-4 text-white">
            <h3 className="text-xl font-semibold">GPA</h3>
            <h2 className="text-3xl font-bold mt-1">3.8</h2>
          </div>
        </div>
        <Badge className="bg-indigo-100 text-indigo-700">Current Semester</Badge>
      </div>
      <div className="flex-1 ml-6">
        <div className="flex items-center mb-4">
          <svg width="24" height="24" fill="gray-600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          </svg>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">Total Courses</h3>
            <h2 className="text-3xl font-bold mt-1">12</h2>
          </div>
        </div>
        <div className="flex items-center mt-6">
          <svg width="24" height="24" fill="gray-600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h5a2 2 0 002-2v-5h1a1 1 0 011 1v5a2 2 0 002 2h5a2 2 0 002-2v-5a1 1 0 01-1-1h-1V7a1 1 0 00-1-1h-5a1 1 0 00-1-1H6a1 1 0 00-1 1v5z" />
          </svg>
          <div className="ml-4">
            <h3 className="text-xl font-semibold">Completed</h3>
            <h2 className="text-3xl font-bold mt-1">9</h2>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Course Grades Section */}
  <section className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Grades</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <Badge className="bg-indigo-100 text-indigo-700 mr-2">Math</Badge>
          <h3 className="text-xl font-semibold">Algebra II</h3>
        </div>
        <h2 className="text-2xl font-bold mb-2">A-</h2>
        <p className="text-gray-600 leading-relaxed">Instructor: <strong>Ms. Johnson</strong></p>
        <div className="mt-4">
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Details</Button>
        </div>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <Badge className="bg-indigo-100 text-indigo-700 mr-2">Science</Badge>
          <h3 className="text-xl font-semibold">Biology</h3>
        </div>
        <h2 className="text-2xl font-bold mb-2">B+</h2>
        <p className="text-gray-600 leading-relaxed">Instructor: <strong>Dr. Lee</strong></p>
        <div className="mt-4">
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Details</Button>
        </div>
      </Card>
      {/* Add more cards as needed for other courses */}
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <Badge className="bg-indigo-100 text-indigo-700 mr-2">English</Badge>
          <h3 className="text-xl font-semibold">Literature</h3>
        </div>
        <h2 className="text-2xl font-bold mb-2">A</h2>
        <p className="text-gray-600 leading-relaxed">Instructor: <strong>Ms. Davis</strong></p>
        <div className="mt-4">
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Details</Button>
        </div>
      </Card>
    </div>
  </section>

  {/* Learning Path Progress Section */}
  <section className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Learning Path Progress</h2>
    <div className="flex flex-col sm:flex-row justify-between mb-6">
      <div className="w-full sm:w-1/2 xl:w-1/3 mb-6 sm:mb-0">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Foundational Courses</h3>
          <div className="flex items-center">
            <svg width="24" height="24" fill="gray-600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
            </svg>
            <p className="ml-4 text-gray-600">Completed 3/5</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 xl:w-1/3 mb-6 sm:mb-0">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Elective Courses</h3>
          <div className="flex items-center">
            <svg width="24" height="24" fill="gray-600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
            </svg>
            <p className="ml-4 text-gray-600">Selected 2/3</p>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 xl:w-1/3">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold mb-4">Specialization</h3>
          <div className="flex items-center">
            <svg width="24" height="24" fill="gray-600" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z" />
            </svg>
            <p className="ml-4 text-gray-600">Not Started</p>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Plan Your Path</Button>
    </div>
  </section>

  {/* Instructor Profiles Section (Partial, as it's more suited for a separate page) */}
  <section className="py-20 mb-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Your Instructors</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <img src="https://via.placeholder.com/60" alt="Instructor Image" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Ms. Johnson</h3>
            <p className="text-gray-600">Math Department</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">Expert in Algebra and Geometry</p>
        <div className="mt-4">
          <Link to="/instructor-profile">View Profile</Link>
        </div>
      </div>
      {/* Add more instructor profiles as needed */}
    </div>
    <div className="w-full mt-6">
      <Link to="/all-instructors" className="text-indigo-600 hover:text-indigo-700">View All Instructors</Link>
    </div>
  </section>

  {/* Call to Action Section */}
  <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
    <div className="container max-w-7xl mx-auto px-6">
      <div className="flex flex-col items-center justify-center mb-6">
        <h2 className="text-3xl font-bold">Ready to Track Your Progress?</h2>
        <p className="text-xl leading-relaxed w-1/2 text-center mt-4">Stay on top of your grades with EduFlow's intuitive grade book system</p>
      </div>
      <div className="flex justify-center">
        <Button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200">Explore Grade Book</Button>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Studentinformationsystem() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Student Information System</h1>
    <p className="text-gray-600 leading-relaxed">Welcome to Edify's Student Information System, where you can access and manage student data, track attendance, and generate reports.</p>
    <div className="flex justify-between mt-6">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" alt="Student Information System" className="w-full h-64 object-cover rounded-2xl" />
      </div>
      <div className="w-full md:w-1/2 xl:w-2/3 p-6">
        <h2 className="text-3xl font-bold">Student Stats</h2>
        <ul>
          <li className="flex items-center py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="ml-2 text-gray-600">Total Students: 1000</span>
          </li>
          <li className="flex items-center py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="ml-2 text-gray-600">Total Courses: 50</span>
          </li>
          <li className="flex items-center py-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="ml-2 text-gray-600">Total Teachers: 20</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Course Cards</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
      <div className="w-full p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Course 1" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold mt-4">Course 1: Introduction to Programming</h3>
          <p className="text-gray-600 leading-relaxed mt-2">Learn the basics of programming with our introductory course.</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Programming</Badge>
          <div className="flex justify-between mt-6">
            <span className="text-gray-600">Instructor: John Doe</span>
            <span className="text-gray-600">Rating: 4.5/5</span>
          </div>
          <div className="flex justify-between mt-6">
            <span className="text-gray-600">Price: $100</span>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Enroll Now</Button>
          </div>
        </Card>
      </div>
      <div className="w-full p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Course 2" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold mt-4">Course 2: Data Structures and Algorithms</h3>
          <p className="text-gray-600 leading-relaxed mt-2">Learn about data structures and algorithms with our advanced course.</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Data Science</Badge>
          <div className="flex justify-between mt-6">
            <span className="text-gray-600">Instructor: Jane Doe</span>
            <span className="text-gray-600">Rating: 4.8/5</span>
          </div>
          <div className="flex justify-between mt-6">
            <span className="text-gray-600">Price: $200</span>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Enroll Now</Button>
          </div>
        </Card>
      </div>
      <div className="w-full p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Course 3" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold mt-4">Course 3: Machine Learning</h3>
          <p className="text-gray-600 leading-relaxed mt-2">Learn about machine learning with our introductory course.</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Machine Learning</Badge>
          <div className="flex justify-between mt-6">
            <span className="text-gray-600">Instructor: Bob Smith</span>
            <span className="text-gray-600">Rating: 4.2/5</span>
          </div>
          <div className="flex justify-between mt-6">
            <span className="text-gray-600">Price: $150</span>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Enroll Now</Button>
          </div>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Learning Path Steps</h2>
    <div className="flex flex-col mt-6">
      <div className="flex items-center py-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="ml-2 text-gray-600">Step 1: Introduction to Programming</span>
      </div>
      <div className="flex items-center py-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="ml-2 text-gray-600">Step 2: Data Structures and Algorithms</span>
      </div>
      <div className="flex items-center py-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="ml-2 text-gray-600">Step 3: Machine Learning</span>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Instructor Profiles</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
      <div className="w-full p-6">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Instructor 1" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">John Doe</h3>
        <p className="text-gray-600 leading-relaxed mt-2">Instructor of Introduction to Programming</p>
      </div>
      <div className="w-full p-6">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Instructor 2" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Jane Doe</h3>
        <p className="text-gray-600 leading-relaxed mt-2">Instructor of Data Structures and Algorithms</p>
      </div>
      <div className="w-full p-6">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Instructor 3" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Bob Smith</h3>
        <p className="text-gray-600 leading-relaxed mt-2">Instructor of Machine Learning</p>
      </div>
      <div className="w-full p-6">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" alt="Instructor 4" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Alice Johnson</h3>
        <p className="text-gray-600 leading-relaxed mt-2">Instructor of Web Development</p>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Call to Action</h2>
    <p className="text-gray-600 leading-relaxed mt-2">Ready to start your learning journey? Enroll now and get started with our courses!</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-6">Enroll Now</Button>
  </section>
</div>
    </Layout>
  )
}
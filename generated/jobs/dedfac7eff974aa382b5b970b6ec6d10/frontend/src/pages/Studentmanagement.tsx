import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Studentmanagement() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto px-6 pt-20">
  {/* Hero Section */}
  <section className="py-20">
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-gray-900">Student Management</h1>
      <p className="text-xl text-gray-600 leading-relaxed mt-4">Effortlessly manage your students with EduFlow</p>
      <div className="flex justify-center mt-8">
        <Badge className="mr-4">Total Students: 250</Badge>
        <Badge>Active Courses: 15</Badge>
      </div>
      <div className="mt-12">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Add New Student</Button>
      </div>
    </div>
  </section>

  {/* Student List Section */}
  <section className="py-20">
    <h2 className="text-3xl font-bold mb-6">Student List</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((_, index) => (
        <Card key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <img src={`https://via.placeholder.com/50?text=S${index+1}`} alt={`Student ${index+1}`} className="w-10 h-10 rounded-full mr-4" />
            <div>
              <h3 className="text-xl font-semibold">{`Student Name ${index+1}`}</h3>
              <p className="text-gray-600">Grade: {`Grade ${index+1}`}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <Badge className="bg-green-100 text-green-700">Active</Badge>
            <Button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Profile</Button>
          </div>
        </Card>
      ))}
    </div>
  </section>

  {/* Attendance Tracking Section */}
  <section className="py-20">
    <h2 className="text-3xl font-bold mb-6">Attendance Tracking</h2>
    <div className="flex flex-col md:flex-row justify-between mb-6">
      <Input label="Student Name" placeholder="Search by name" type="text" />
      <div className="md:ml-4 mt-4 md:mt-0">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Filter</Button>
      </div>
    </div>
    <table className="w-full border border-gray-200 rounded-xl">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-gray-600">Student</th>
          <th className="px-6 py-3 text-gray-600">Attendance</th>
          <th className="px-6 py-3 text-gray-600">Last Updated</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((_, index) => (
          <tr key={index} className="border-t border-gray-200">
            <td className="px-6 py-4">{`Student ${index+1}`}</td>
            <td className="px-6 py-4"><Badge className={index % 2 === 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}>{index % 2 === 0 ? "Present" : "Absent"}</Badge></td>
            <td className="px-6 py-4">{`2023-02-${index+1}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>

  {/* Grade Book Section */}
  <section className="py-20">
    <h2 className="text-3xl font-bold mb-6">Grade Book</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
      <div className="flex items-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M9 5V3m0 2h3m-3 3h8m-5-3l4 4m0-5h5l-4 4m4-5v3m4-4l3 3m-6 0l-3 3m-3-3v-2a9.972 9.972 0 01-3.054-.279m7.1 1.33A10 10 0 008 4.83 9.088 9.088 0 0016.364 6.618z" />
        </svg>
        <div>
          <h3 className="text-xl font-semibold">Average Grade</h3>
          <p className="text-gray-600">B+</p>
        </div>
      </div>
      <div className="flex items-center bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        <div>
          <h3 className="text-xl font-semibold">Assignments Submitted</h3>
          <p className="text-gray-600">12/15</p>
        </div>
      </div>
    </div>
    <table className="w-full border border-gray-200 rounded-xl">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 text-gray-600">Assignment</th>
          <th className="px-6 py-3 text-gray-600">Grade</th>
          <th className="px-6 py-3 text-gray-600">Due Date</th>
        </tr>
      </thead>
      <tbody>
        {[1, 2, 3].map((_, index) => (
          <tr key={index} className="border-t border-gray-200">
            <td className="px-6 py-4">{`Assignment ${index+1}`}</td>
            <td className="px-6 py-4">{`Grade ${index+1}`}</td>
            <td className="px-6 py-4">{`2023-02-${index+10}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>

  {/* CTA Section */}
  <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
    <div className="container max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-6">Streamline Your Education Management with EduFlow</h2>
      <p className="text-xl leading-relaxed mb-8">Discover how EduFlow can transform your educational institution</p>
      <Button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-100 transition-all duration-200">Schedule a Demo</Button>
    </div>
  </section>
</div>
    </Layout>
  )
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Gradebooks() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto py-20 px-6">
  {/* Hero Section */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
    <h1 className="text-4xl font-bold text-white">Gradebooks | EduFlow</h1>
    <div className="flex flex-wrap justify-center mt-6">
      <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold">Total Students</h3>
          <p className="text-3xl font-bold text-gray-900">542</p>
          <Badge className="bg-indigo-100 text-indigo-700">Active</Badge>
        </div>
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold">Total Grades Entered</h3>
          <p className="text-3xl font-bold text-gray-900">2,150</p>
          <Badge className="bg-indigo-100 text-indigo-700">Updated Today</Badge>
        </div>
      </div>
      <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold">Average Grade</h3>
          <p className="text-3xl font-bold text-gray-900">B+</p>
          <Badge className="bg-indigo-100 text-indigo-700">Term Average</Badge>
        </div>
      </div>
    </div>
    <div className="text-center mt-8">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Enter New Grades</Button>
    </div>
  </section>

  {/* Gradebook Table Section */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Gradebook Overview</h2>
    <div className="mt-6">
      <table className="w-full border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-left text-xl font-semibold">Student</th>
            <th className="px-6 py-4 text-left text-xl font-semibold">Assignment 1</th>
            <th className="px-6 py-4 text-left text-xl font-semibold">Assignment 2</th>
            <th className="px-6 py-4 text-left text-xl font-semibold">Average</th>
            <th className="px-6 py-4 text-left text-xl font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-y border-gray-200">
            <td className="px-6 py-4 text-left text-gray-600">John Doe 📚</td>
            <td className="px-6 py-4 text-left text-gray-600">A-</td>
            <td className="px-6 py-4 text-left text-gray-600">B+</td>
            <td className="px-6 py-4 text-left text-gray-600">A-</td>
            <td className="px-6 py-4 text-left text-gray-600"><Button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Edit</Button></td>
          </tr>
          <tr className="border-y border-gray-200">
            <td className="px-6 py-4 text-left text-gray-600">Jane Smith 📖</td>
            <td className="px-6 py-4 text-left text-gray-600">A</td>
            <td className="px-6 py-4 text-left text-gray-600">A-</td>
            <td className="px-6 py-4 text-left text-gray-600">A-</td>
            <td className="px-6 py-4 text-left text-gray-600"><Button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Edit</Button></td>
          </tr>
          {/* Add more students here */}
        </tbody>
      </table>
    </div>
  </section>

  {/* Enter New Grades Section */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Enter New Grades</h2>
    <div className="mt-6">
      <Input label="Student Name" placeholder="John Doe" type="text" />
      <div className="mt-4">
        <Input label="Assignment Name" placeholder="Assignment 3" type="text" />
        <div className="mt-2">
          <Input label="Grade" placeholder="A-" type="text" />
        </div>
      </div>
      <div className="text-center mt-8">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save Grade</Button>
      </div>
    </div>
  </section>

  {/* Learning Path Steps (Modified for Gradebooks Context) */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Grading Workflow</h2>
    <div className="flex flex-wrap justify-center mt-6">
      <div className="w-full lg:w-1/4 xl:w-1/4 p-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold">1. Assign Task</h3>
          <p className="text-gray-600 leading-relaxed">Assign new task to students</p>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
      </div>
      <div className="w-full lg:w-1/4 xl:w-1/4 p-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold">2. Receive Submissions</h3>
          <p className="text-gray-600 leading-relaxed">Collect student submissions</p>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 17h5l-1.88-1.88C20.16 14.1 18 11 15 11H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2m-2 1h.01M21 19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5"></path></svg>
        </div>
      </div>
      <div className="w-full lg:w-1/4 xl:w-1/4 p-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold">3. Enter Grades</h3>
          <p className="text-gray-600 leading-relaxed">Input grades for submissions</p>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 3a6 6 0 0 1 6 6v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a6 6 0 0 1 6-6z"></path><path d="M9 17a3 3 0 0 1 3 3h3a3 3 0 0 1 0 6H9a3 3 0 0 1-3-3z"></path></svg>
        </div>
      </div>
      <div className="w-full lg:w-1/4 xl:w-1/4 p-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold">4. Review & Finalize</h3>
          <p className="text-gray-600 leading-relaxed">Review and finalize grades</p>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2l2-2 4 4M3 10V6.707l9.293 9.293 1.414-1.414L3 10z"></path></svg>
        </div>
      </div>
    </div>
  </section>

  {/* Instructor Profiles (Modified for Gradebooks Context) */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Gradebook Administrators</h2>
    <div className="flex flex-wrap justify-center mt-6">
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold">Ms. Emma Taylor 📖</h3>
          <p className="text-gray-600 leading-relaxed">Mathematics Department</p>
          <p className="text-gray-600 leading-relaxed">Total Students: 120 | Total Grades: 540</p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-xl font-semibold">Mr. David Lee 📚</h3>
          <p className="text-gray-600 leading-relaxed">Science Department</p>
          <p className="text-gray-600 leading-relaxed">Total Students: 110 | Total Grades: 500</p>
        </div>
      </div>
      {/* Add more instructors here */}
    </div>
  </section>

  {/* CTA Section */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-900">Streamline Your Grading Process with EduFlow</h2>
      <p className="text-xl text-gray-600 leading-relaxed mt-4">Discover how EduFlow can help you manage grades efficiently</p>
      <div className="mt-8">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Schedule a Demo</Button>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
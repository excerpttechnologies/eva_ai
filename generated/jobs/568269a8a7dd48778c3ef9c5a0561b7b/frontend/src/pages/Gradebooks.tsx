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
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Gradebooks</h1>
    <p className="text-gray-600 leading-relaxed">Track student progress and performance with our intuitive gradebook system 📚</p>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Student Gradebooks</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" alt="Student Gradebook" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">John Doe's Gradebook</h3>
        <p className="text-gray-600 leading-relaxed">View John's assignments, grades, and progress 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Gradebook</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Student Gradebook" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">Jane Smith's Gradebook</h3>
        <p className="text-gray-600 leading-relaxed">View Jane's assignments, grades, and progress 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Gradebook</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Student Gradebook" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">Bob Johnson's Gradebook</h3>
        <p className="text-gray-600 leading-relaxed">View Bob's assignments, grades, and progress 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Gradebook</Button>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Teacher Gradebooks</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Teacher Gradebook" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">Ms. Thompson's Gradebook</h3>
        <p className="text-gray-600 leading-relaxed">View Ms. Thompson's assignments, grades, and progress 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Gradebook</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Teacher Gradebook" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">Mr. Lee's Gradebook</h3>
        <p className="text-gray-600 leading-relaxed">View Mr. Lee's assignments, grades, and progress 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Gradebook</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Teacher Gradebook" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">Ms. Patel's Gradebook</h3>
        <p className="text-gray-600 leading-relaxed">View Ms. Patel's assignments, grades, and progress 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Gradebook</Button>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Gradebook Settings</h2>
    <form>
      <Input label="Gradebook Name" placeholder="Enter gradebook name" type="text" />
      <Input label="Gradebook Description" placeholder="Enter gradebook description" type="text" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Save Changes</Button>
    </form>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Gradebook Reports</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Gradebook Report" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">Student Progress Report</h3>
        <p className="text-gray-600 leading-relaxed">View student progress report 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Report</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" alt="Gradebook Report" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">Teacher Performance Report</h3>
        <p className="text-gray-600 leading-relaxed">View teacher performance report 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Report</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80" alt="Gradebook Report" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold">Gradebook Summary Report</h3>
        <p className="text-gray-600 leading-relaxed">View gradebook summary report 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Report</Button>
      </Card>
    </div>
  </section>
</div>
    </Layout>
  )
}
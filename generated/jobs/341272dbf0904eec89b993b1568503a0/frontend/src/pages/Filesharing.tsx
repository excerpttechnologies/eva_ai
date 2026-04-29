import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Filesharing() {
  return (
    <Layout>
      <div className="gradient bg-gradient-to-br from-indigo-600 to-purple-700 h-screen">
  <section className="container max-w-7xl mx-auto py-20 px-6">
    <div className="hero-banner relative">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ChatFlow File Sharing Hero" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="hero-content relative z-10">
        <h1 className="text-4xl font-bold text-white">Secure File Sharing</h1>
        <p className="text-xl text-gray-200 leading-relaxed mt-4">Share files securely with end-to-end encryption in ChatFlow</p>
        <Button className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-xl hover:bg-indigo-900 transition-all duration-200 mt-6">Upload File</Button>
      </div>
    </div>
  </section>

  <section className="main-content container max-w-7xl mx-auto py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">How it Works</h2>
    <div className="info-cards flex flex-wrap justify-center gap-6 mt-12">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 lg:w-1/3">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Upload Files" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold">Upload Files</h3>
        <p className="text-gray-600 leading-relaxed">Upload your files securely with our encrypted upload process 📲</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Secure Upload</Badge>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 lg:w-1/3">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Share with Others" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold">Share with Others</h3>
        <p className="text-gray-600 leading-relaxed">Share your uploaded files securely with your contacts in ChatFlow 📱</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">End-to-End Encryption</Badge>
      </Card>

      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 lg:w-1/3">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Download Files" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold">Download Files</h3>
        <p className="text-gray-600 leading-relaxed">Download shared files securely from your contacts in ChatFlow 📁</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">Secure Download</Badge>
      </Card>
    </div>
  </section>

  <section className="action-area container max-w-7xl mx-auto py-12 px-6">
    <div className="flex flex-col items-center mb-8">
      <h3 className="text-xl font-semibold">Upload a File Now</h3>
      <p className="text-gray-600 leading-relaxed mt-2">Start sharing files securely with ChatFlow</p>
    </div>
    <form>
      <Input label="File Title" placeholder="Enter file title" type="text" className="mb-4" />
      <Input label="Select File" placeholder="Select a file to upload" type="file" className="mb-6" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Upload File</Button>
    </form>
  </section>

  <section className="cta-section container max-w-7xl mx-auto py-20 px-6 text-center">
    <h2 className="text-3xl font-bold text-gray-900">Get Started with Secure File Sharing in ChatFlow</h2>
    <p className="text-xl text-gray-600 leading-relaxed mt-4">Join the thousands already sharing files securely with ChatFlow 🚀</p>
    <Link to="/register"><Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-6">Sign Up Now</Button></Link>
    <p className="text-gray-600 mt-4">Already a user? <Link to="/login" className="text-indigo-600 hover:text-indigo-700">Login</Link></p>
  </section>
</div>
    </Layout>
  )
}
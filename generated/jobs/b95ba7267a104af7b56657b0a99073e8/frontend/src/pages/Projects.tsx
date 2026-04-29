import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Projects() {
  return (
    <Layout>
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-700">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-4xl font-bold text-gray-900">Projects 📚</h1>
    <p className="text-gray-600 leading-relaxed">Explore my showcase of completed projects, featuring a range of software development solutions 🚀</p>
  </div>
</section>

<section className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold">Featured Projects 🌟</h2>
    <div className="flex flex-wrap justify-center">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Project 1: AI-Powered Chatbot 🤖</h3>
        <p className="text-gray-600 leading-relaxed">Developed a conversational AI chatbot using Python and natural language processing techniques 📊</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Python</Badge>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">NLP</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Project 2: Web Scraper 🕸️</h3>
        <p className="text-gray-600 leading-relaxed">Built a web scraper using Java and Selenium to extract data from websites 📈</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Java</Badge>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Selenium</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Project 3: Mobile App 📱</h3>
        <p className="text-gray-600 leading-relaxed">Designed and developed a mobile app using React Native and Node.js 📊</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">React Native</Badge>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Node.js</Badge>
      </Card>
    </div>
  </div>
</section>

<section className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold">All Projects 📁</h2>
    <div className="flex flex-wrap justify-center">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Project 4: Machine Learning Model 🤖</h3>
        <p className="text-gray-600 leading-relaxed">Trained a machine learning model using Python and scikit-learn to predict user behavior 📊</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Python</Badge>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Scikit-learn</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Project 5: Web Application 🌐</h3>
        <p className="text-gray-600 leading-relaxed">Developed a web application using Java and Spring Boot to manage user data 📈</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Java</Badge>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Spring Boot</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/2 xl:w-1/3 p-6">
        <h3 className="text-xl font-semibold">Project 6: Data Visualization 📊</h3>
        <p className="text-gray-600 leading-relaxed">Created a data visualization dashboard using React and D3.js to display user metrics 📈</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">React</Badge>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">D3.js</Badge>
      </Card>
    </div>
  </div>
</section>

<section className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold">Filter and Sort 📝</h2>
    <div className="flex flex-wrap justify-center">
      <Input label="Search" placeholder="Search projects" type="search" />
      <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
        <option value="">All</option>
        <option value="python">Python</option>
        <option value="java">Java</option>
        <option value="react">React</option>
      </select>
      <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
        <option value="">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="alphabetical">Alphabetical</option>
      </select>
    </div>
  </div>
</section>

<section className="py-20 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold">Get in Touch 📲</h2>
    <p className="text-gray-600 leading-relaxed">Want to discuss a project or learn more about my services? 🤔</p>
    <Link to="/contact">Contact Me 📲</Link>
  </div>
</section>

<section className="py-20 px-6 bg-gradient-to-br from-indigo-600 to-purple-700">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-white">Let's Build Something Amazing 🚀</h2>
    <p className="text-gray-300 leading-relaxed">Ready to bring your project to life? 🎉</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Get Started 🚀</Button>
  </div>
</section>
    </Layout>
  )
}
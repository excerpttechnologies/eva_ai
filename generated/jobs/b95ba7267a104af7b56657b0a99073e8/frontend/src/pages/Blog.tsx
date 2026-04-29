import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Blog() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto p-6 pt-20">
  <section className="py-20 px-6">
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-40 rounded-2xl flex justify-center items-center">
      <h1 className="text-4xl font-bold text-white">Blog 📄</h1>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold text-gray-900">Software Development Insights 💻</h2>
        <p className="text-gray-600 leading-relaxed">Stay up-to-date with the latest trends and best practices in software development, from coding tips to project management advice.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Software Development</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold text-gray-900">Tech News and Updates 🚀</h2>
        <p className="text-gray-600 leading-relaxed">Get the latest news and updates from the tech world, including new releases, updates, and breakthroughs in AI, machine learning, and more.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Tech News</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h2 className="text-3xl font-bold text-gray-900">Personal Projects and Experiments 🎨</h2>
        <p className="text-gray-600 leading-relaxed">Explore my personal projects and experiments, from coding challenges to creative endeavors, and learn from my experiences and lessons learned.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Personal Projects</Badge>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Recent Articles 📄</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold text-gray-900">Building a Modern Web Application with React and Node.js 🌐</h3>
        <p className="text-gray-600 leading-relaxed">Learn how to build a modern web application using React, Node.js, and a RESTful API, with a focus on scalability, security, and performance.</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Read More 📖</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold text-gray-900">Introduction to Machine Learning with Python and Scikit-learn 🤖</h3>
        <p className="text-gray-600 leading-relaxed">Get started with machine learning using Python and Scikit-learn, with a focus on supervised and unsupervised learning, regression, classification, and clustering.</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Read More 📖</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold text-gray-900">Best Practices for Code Review and Testing 🚫</h3>
        <p className="text-gray-600 leading-relaxed">Learn how to conduct effective code reviews and testing, with a focus on code quality, security, and performance, and best practices for giving and receiving feedback.</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Read More 📖</Button>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Get in Touch 📲</h2>
    <p className="text-gray-600 leading-relaxed">Have a question or want to discuss a project? Get in touch with me through the contact form below, or follow me on social media for the latest updates and insights.</p>
    <form>
      <Input label="Name" placeholder="John Doe" type="text" />
      <Input label="Email" placeholder="john.doe@example.com" type="email" />
      <Input label="Message" placeholder="Hello, I'm interested in..." type="textarea" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Send Message 📧</Button>
    </form>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">Stay Up-to-Date 📅</h2>
    <p className="text-gray-600 leading-relaxed">Stay up-to-date with the latest news, updates, and insights from my blog by subscribing to my newsletter, or follow me on social media for the latest updates and behind-the-scenes insights.</p>
    <form>
      <Input label="Email" placeholder="john.doe@example.com" type="email" />
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Subscribe 📧</Button>
    </form>
    <div className="flex justify-center items-center">
      <Link to="/twitter" className="text-gray-600 hover:text-indigo-600 transition-all duration-200">Twitter 🐦</Link>
      <Link to="/linkedin" className="text-gray-600 hover:text-indigo-600 transition-all duration-200">LinkedIn 📊</Link>
      <Link to="/github" className="text-gray-600 hover:text-indigo-600 transition-all duration-200">GitHub 📚</Link>
    </div>
  </section>
</div>
    </Layout>
  )
}
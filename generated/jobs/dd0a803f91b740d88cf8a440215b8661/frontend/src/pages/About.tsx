import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto max-w-7xl px-6 py-20">
  {/* Hero Section */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6">
    <h1 className="text-4xl font-bold text-white">📖 Poet's Corner</h1>
    <p className="text-xl text-gray-200 leading-relaxed mt-4">
      "Nurturing the soul of literature, one verse at a time 🌟"
    </p>
    <Button className="px-6 py-3 bg-indigo-800 text-white font-semibold rounded-xl hover:bg-indigo-900 transition-all duration-200 mt-6">
      Explore Our Works 📚
    </Button>
  </section>

  {/* Values Section */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">🌱 Creativity</h3>
        <p className="text-gray-600 leading-relaxed">Fostering innovative expression in every line.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">
          Empowering Voices
        </Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">👫 Community</h3>
        <p className="text-gray-600 leading-relaxed">Building a haven for poets and readers alike.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">
          United in Verse
        </Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold mb-4">📚 Excellence</h3>
        <p className="text-gray-600 leading-relaxed">Pursuing perfection in every published piece.</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">
          Quality in Every Line
        </Badge>
      </Card>
    </div>
  </section>

  {/* Team Section */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Poetic Minds</h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl text-white">👤</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Ava Moreno</h3>
        <p className="text-gray-600">Founder & Lead Poet</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl text-white">👥</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Liam Chen</h3>
        <p className="text-gray-600">Editor-in-Chief</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl text-white">📝</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Sophia Patel</h3>
        <p className="text-gray-600">Featured Poet</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl text-white">👂</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Ethan Kim</h3>
        <p className="text-gray-600">Community Manager</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl text-white">📚</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Maya Singh</h3>
        <p className="text-gray-600">Publishing Coordinator</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex items-center justify-center mb-4">
          <span className="text-2xl text-white">👂</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">Oliver Lee</h3>
        <p className="text-gray-600">Social Media Manager</p>
      </div>
    </div>
  </section>

  {/* Company Stats Section */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-gray-900 mb-2">120+</span>
        <p className="text-gray-600">Published Poems</p>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-gray-900 mb-2">5000+</span>
        <p className="text-gray-600">Community Members</p>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-3xl font-bold text-gray-900 mb-2">10+</span>
        <p className="text-gray-600">Awards & Recognitions</p>
      </div>
    </div>
  </section>

  {/* Timeline Section */}
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Milestone Timeline</h2>
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/ w-1 bg-gray-200" />
      <div className="relative flex flex-col items-center justify-center ml-6">
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mb-4">
          <span className="text-lg text-gray-900">📆</span>
        </div>
        <p className="text-gray-600 w-48 text-center mb-8">2020 - Poet's Corner Founded</p>
      </div>
      <div className="relative flex flex-col items-center justify-center ml-6">
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mb-4">
          <span className="text-lg text-gray-900">📖</span>
        </div>
        <p className="text-gray-600 w-48 text-center mb-8">2021 - First Poetry Collection Published</p>
      </div>
      <div className="relative flex flex-col items-center justify-center ml-6">
        <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mb-4">
          <span className="text-lg text-gray-900">🏆</span>
        </div>
        <p className="text-gray-600 w-48 text-center">2022 - Winner of Literary Arts Award</p>
      </div>
    </div>
  </section>

  {/* Call to Action Section */}
  <section className="py-20 px-6 bg-indigo-50">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Join Our Literary Journey</h3>
    <p className="text-gray-600 leading-relaxed mb-8">Submit your poem or join as a reader today! 📝</p>
    <div className="flex justify-center">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mr-4">
        Submit Your Poem 📄
      </Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">
        Explore Our Library 📚
      </Button>
    </div>
  </section>

  {/* Footer (Simplified for this example, as detailed footer not requested) */}
  <footer className="py-6 px-6 text-center text-gray-600">
    <p>&copy; 2023 Poet's Corner. All Rights Reserved. ❤️</p>
  </footer>
</div>
    </Layout>
  )
}
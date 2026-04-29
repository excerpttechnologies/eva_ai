import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Home() {
  return (
    <Layout>
      <div className="min-h-screen">
  {/* Hero Section */}
  <section className="bg-gradient-to-br from-slate-900 to-indigo-900 py-20 px-6" style={{height: '100vh', minHeight: '600px'}}>
    <div className="container mx-auto max-w-7xl">
      <div className="flex flex-col items-center justify-center h-full">
        <Badge className="mb-4">New Collection 📖</Badge>
        <h1 className="text-4xl font-bold text-white">Welcome to Poet's Corner 🌟</h1>
        <h2 className="text-3xl font-bold text-gray-200 mb-8">Unlock Your Literary Potential</h2>
        <div className="flex justify-center space-x-4">
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Explore Poems</Button>
          <Button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-xl hover:bg-purple-600 transition-all duration-200">Submit Your Work 📝</Button>
        </div>
        <div className="text-gray-200 text-xl mt-8">Trusted by:</div>
        <div className="flex justify-center space-x-2 mt-2 text-gray-300">
          <img src="https://via.placeholder.com/40x40?text=CL" alt="Client Logo" className="w-8 h-8 object-cover rounded-full" />
          <img src="https://via.placeholder.com/40x40?text=PL" alt="Client Logo" className="w-8 h-8 object-cover rounded-full" />
          <img src="https://via.placeholder.com/40x40?text=WL" alt="Client Logo" className="w-8 h-8 object-cover rounded-full" />
        </div>
      </div>
    </div>
  </section>

  {/* Social Proof Bar */}
  <section className="py-4 px-6 bg-gray-100">
    <div className="container mx-auto max-w-7xl flex justify-center text-gray-600">
      <div className="flex space-x-4">
        <div>Publishers Weekly</div>
        <div>The Literary Review</div>
        <div>Poetry Foundation</div>
        <div>And 50+ more...</div>
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h2>
      <div className="grid grid-cols-3 gap-8">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M9 5V3m0 2h3m-3 3h3m-3 3h3m-3 3h3m 3 2H15m-2 3l3-3m0 0l-3-3m-3 3l3-3m0 0l-3-3m-3 3l3-3m0 0l-3-3m-3 3l3-3m0 0l-3-3m-3 3l3-3m0 0l-3-3" />
            </svg>
            <h3 className="text-xl font-semibold ml-3">Poem Workshop</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">Refine your craft with our expert-led workshops.</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            <h3 className="text-xl font-semibold ml-3">Publication Opportunities</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">Get published in our quarterly literary magazine.</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M17 3a2.828 2.828 0 01-2.83 2.83L12 8l-4.17-4.17A2.828 2.828 0 016 3h12z" />
              <path d="M4 15h12v1H4z" />
            </svg>
            <h3 className="text-xl font-semibold ml-3">Community Forum</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">Connect with fellow poets and get feedback.</p>
        </Card>
      </div>
    </div>
  </section>

  {/* How It Works Section */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">How to Get Started</h2>
      <div className="flex flex-col items-center">
        <ol className="list-decimal text-gray-600 leading-relaxed w-full">
          <li className="mb-4">
            <div className="flex items-start">
              <div className="text-2xl font-bold text-indigo-600 mr-2">1</div>
              <div>
                <h3 className="text-xl font-semibold">Sign Up</h3>
                <p>Create your account in minutes.</p>
              </div>
            </div>
          </li>
          <li className="mb-4">
            <div className="flex items-start">
              <div className="text-2xl font-bold text-indigo-600 mr-2">2</div>
              <div>
                <h3 className="text-xl font-semibold">Submit Your Poem</h3>
                <p>Share your work with our community.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-start">
              <div className="text-2xl font-bold text-indigo-600 mr-2">3</div>
              <div>
                <h3 className="text-xl font-semibold">Engage & Grow</h3>
                <p>Participate in workshops and forums.</p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>

  {/* Stats Section */}
  <section className="py-20 px-6">
    <div className="container mx-auto max-w-7xl">
      <div className="grid grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">250+</h3>
          <p className="text-gray-600">Published Poets</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">5000+</h3>
          <p className="text-gray-600">Submissions Reviewed</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">100+</h3>
          <p className="text-gray-600">Workshops Held</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">95%</h3>
          <p className="text-gray-600">Satisfaction Rate</p>
        </div>
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section className="py-20 px-6 bg-gray-100">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Poets Say</h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <blockquote className="text-gray-600 leading-relaxed">
            <p>"Poet's Corner changed my writing life."</p>
            <footer className="text-gray-900 mt-2">— Emily W., Published Poet</footer>
          </blockquote>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <blockquote className="text-gray-600 leading-relaxed">
            <p>"The community here is incredibly supportive."</p>
            <footer className="text-gray-900 mt-2">— David L., Aspiring Poet</footer>
          </blockquote>
        </div>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20 px-6 text-white">
    <div className="container mx-auto max-w-7xl">
      <h2 className="text-3xl font-bold mb-4">Ready to Unleash Your Creativity? 🌟</h2>
      <p className="text-xl leading-relaxed mb-8">Join the Poet's Corner community today and start your literary journey.</p>
      <div className="flex justify-center space-x-4">
        <Button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200">Sign Up Free</Button>
        <Button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-200">Explore More</Button>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
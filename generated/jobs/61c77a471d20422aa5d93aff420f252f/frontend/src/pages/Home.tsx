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
      <div className="bg-gradient-to-br from-slate-900 to-indigo-900 h-screen">
  <section className="container max-w-7xl mx-auto py-20 px-6">
    <div className="flex flex-col items-center justify-center">
      <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Edify Premium</Badge>
      <h1 className="text-4xl font-bold text-gray-900">Unlock Your Potential with Edify</h1>
      <div className="flex space-x-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Get Started</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Learn More</Button>
      </div>
      <p className="text-gray-600 leading-relaxed text-center">Trusted by 📚 10,000+ students and 📊 500+ teachers</p>
    </div>
  </section>
  <section className="bg-white py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 xl:w-1/4 p-6">
          <img src="https://edify.com/logo1.png" alt="Company 1" />
        </div>
        <div className="w-full md:w-1/3 xl:w-1/4 p-6">
          <img src="https://edify.com/logo2.png" alt="Company 2" />
        </div>
        <div className="w-full md:w-1/3 xl:w-1/4 p-6">
          <img src="https://edify.com/logo3.png" alt="Company 3" />
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/3 xl:w-1/3 p-6">
          <div className="flex flex-col items-center">
            <img src="https://edify.com/icon1.png" alt="Icon 1" className="w-12 h-12" />
            <h2 className="text-3xl font-bold">Personalized Learning</h2>
            <p className="text-gray-600 leading-relaxed text-center">Get tailored learning experiences with Edify 📚</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/3 p-6">
          <div className="flex flex-col items-center">
            <img src="https://edify.com/icon2.png" alt="Icon 2" className="w-12 h-12" />
            <h2 className="text-3xl font-bold">Real-time Feedback</h2>
            <p className="text-gray-600 leading-relaxed text-center">Stay on top of your progress with instant feedback 📊</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 xl:w-1/3 p-6">
          <div className="flex flex-col items-center">
            <img src="https://edify.com/icon3.png" alt="Icon 3" className="w-12 h-12" />
            <h2 className="text-3xl font-bold">Community Support</h2>
            <p className="text-gray-600 leading-relaxed text-center">Join a community of like-minded individuals for support and motivation 🤝</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold">How it Works</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <ol className="list-decimal">
            <li className="py-3">Sign up for an account 📝</li>
            <li className="py-3">Take a placement test 📝</li>
            <li className="py-3">Get personalized recommendations 📊</li>
          </ol>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <img src="https://edify.com/illustration.png" alt="Illustration" />
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold">Stats</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/4 xl:w-1/4 p-6">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold">10,000+</h3>
            <p className="text-gray-600 leading-relaxed text-center">Students</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 xl:w-1/4 p-6">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold">500+</h3>
            <p className="text-gray-600 leading-relaxed text-center">Teachers</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 xl:w-1/4 p-6">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold">100+</h3>
            <p className="text-gray-600 leading-relaxed text-center">Courses</p>
          </div>
        </div>
        <div className="w-full md:w-1/4 xl:w-1/4 p-6">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold">95%</h3>
            <p className="text-gray-600 leading-relaxed text-center">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold">Testimonials</h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <p className="text-gray-600 leading-relaxed">Edify has been a game-changer for me. I've seen significant improvement in my grades and overall understanding of the material 📚</p>
            <div className="flex items-center">
              <img src="https://edify.com/avatar1.png" alt="Avatar 1" className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">John Doe</h3>
                <p className="text-gray-600 leading-relaxed">Student</p>
              </div>
            </div>
          </Card>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/2 p-6">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <p className="text-gray-600 leading-relaxed">I've been using Edify for a while now, and I must say, it's been a great experience. The platform is user-friendly, and the support team is always available to help 🤝</p>
            <div className="flex items-center">
              <img src="https://edify.com/avatar2.png" alt="Avatar 2" className="w-12 h-12 rounded-full" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold">Jane Smith</h3>
                <p className="text-gray-600 leading-relaxed">Teacher</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-gradient-to-br from-slate-900 to-indigo-900 py-20 px-6">
    <div className="container max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-white">Get Started with Edify Today</h2>
      <p className="text-gray-300 leading-relaxed text-center">Unlock your full potential with our personalized learning platform 🚀</p>
      <div className="flex space-x-4">
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Sign Up</Button>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Learn More</Button>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
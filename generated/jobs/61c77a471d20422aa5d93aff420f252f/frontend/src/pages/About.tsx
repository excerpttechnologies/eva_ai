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
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-900">About Edify</h1>
      <p className="text-gray-600 leading-relaxed text-center">Empowering educators to shape the minds of tomorrow 🌟</p>
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-64 w-full rounded-2xl mt-10"></div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Our Mission</h2>
    <p className="text-gray-600 leading-relaxed">At Edify, we're dedicated to revolutionizing the education landscape through innovative technology and collaborative solutions 🚀</p>
    <div className="grid grid-cols-3 gap-6 mt-10">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Student-Centric Approach</h3>
        <p className="text-gray-600 leading-relaxed">We prioritize student needs, fostering a supportive environment that encourages growth and exploration 📚</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Teacher Empowerment</h3>
        <p className="text-gray-600 leading-relaxed">We equip educators with cutting-edge tools and resources, enabling them to deliver exceptional instruction and mentorship 📊</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Community Engagement</h3>
        <p className="text-gray-600 leading-relaxed">We foster strong relationships between students, teachers, and parents, promoting a sense of belonging and shared purpose 🌈</p>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Meet Our Team</h2>
    <p className="text-gray-600 leading-relaxed">Our team of experts is passionate about shaping the future of education 🌟</p>
    <div className="grid grid-cols-4 gap-6 mt-10">
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full w-24 h-24 flex justify-center items-center">
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="text-white w-12 h-12">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mt-4">John Doe</h3>
        <p className="text-gray-600 leading-relaxed">CEO & Founder</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full w-24 h-24 flex justify-center items-center">
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="text-white w-12 h-12">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mt-4">Jane Smith</h3>
        <p className="text-gray-600 leading-relaxed">CTO</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full w-24 h-24 flex justify-center items-center">
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="text-white w-12 h-12">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mt-4">Bob Johnson</h3>
        <p className="text-gray-600 leading-relaxed">CMO</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full w-24 h-24 flex justify-center items-center">
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="text-white w-12 h-12">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mt-4">Alice Brown</h3>
        <p className="text-gray-600 leading-relaxed">CPO</p>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Company Stats</h2>
    <p className="text-gray-600 leading-relaxed">We're proud of our achievements and the impact we've made in the education sector 📊</p>
    <div className="flex flex-wrap justify-center mt-10">
      <div className="flex flex-col items-center w-64 mx-4">
        <h3 className="text-3xl font-bold">1000+</h3>
        <p className="text-gray-600 leading-relaxed">Students empowered</p>
      </div>
      <div className="flex flex-col items-center w-64 mx-4">
        <h3 className="text-3xl font-bold">500+</h3>
        <p className="text-gray-600 leading-relaxed">Teachers supported</p>
      </div>
      <div className="flex flex-col items-center w-64 mx-4">
        <h3 className="text-3xl font-bold">100+</h3>
        <p className="text-gray-600 leading-relaxed">Partnerships established</p>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Timeline</h2>
    <p className="text-gray-600 leading-relaxed">Our journey so far has been marked by significant milestones and achievements 📆</p>
    <div className="flex flex-col mt-10">
      <div className="flex items-center mb-6">
        <div className="bg-indigo-600 w-12 h-12 rounded-full flex justify-center items-center">
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="text-white w-8 h-8">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">2020</h3>
          <p className="text-gray-600 leading-relaxed">Edify was founded with a mission to transform the education landscape 🌟</p>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <div className="bg-indigo-600 w-12 h-12 rounded-full flex justify-center items-center">
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="text-white w-8 h-8">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">2022</h3>
          <p className="text-gray-600 leading-relaxed">We launched our flagship product, empowering students and teachers worldwide 🚀</p>
        </div>
      </div>
      <div className="flex items-center mb-6">
        <div className="bg-indigo-600 w-12 h-12 rounded-full flex justify-center items-center">
          <svg viewBox="0 0 24 24" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round" className="text-white w-8 h-8">
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-semibold">2023</h3>
          <p className="text-gray-600 leading-relaxed">We expanded our team and established strategic partnerships to further our mission 🤝</p>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
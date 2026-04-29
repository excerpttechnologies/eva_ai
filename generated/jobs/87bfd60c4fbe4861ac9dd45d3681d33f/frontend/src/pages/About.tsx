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
    <h1 className="text-4xl font-bold text-gray-900">About Edify</h1>
    <p className="text-gray-600 leading-relaxed">Empowering educators and students to reach new heights 🚀</p>
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-48 rounded-2xl flex justify-center items-center">
      <p className="text-white font-semibold text-xl">Our mission is to provide innovative education solutions that foster growth, creativity, and success 📚</p>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Our Values</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Innovation</h3>
        <p className="text-gray-600 leading-relaxed">We strive to stay ahead of the curve, leveraging technology to enhance the learning experience 📊</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Collaboration</h3>
        <p className="text-gray-600 leading-relaxed">We believe in the power of teamwork, fostering a community that supports and uplifts each other 🤝</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Excellence</h3>
        <p className="text-gray-600 leading-relaxed">We aim for excellence in all that we do, pushing the boundaries of what is possible 🏆</p>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Meet Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full w-24 h-24 flex justify-center items-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 4 24 4s16 7.18 16 16-7.18 16-16 16z" stroke="#FFFFFF" />
          </svg>
        </div>
        <p className="text-gray-600 text-xl font-semibold mt-4">John Doe</p>
        <p className="text-gray-600 leading-relaxed">CEO & Founder</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full w-24 h-24 flex justify-center items-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 4 24 4s16 7.18 16 16-7.18 16-16 16z" stroke="#FFFFFF" />
          </svg>
        </div>
        <p className="text-gray-600 text-xl font-semibold mt-4">Jane Smith</p>
        <p className="text-gray-600 leading-relaxed">CTO</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full w-24 h-24 flex justify-center items-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 4 24 4s16 7.18 16 16-7.18 16-16 16z" stroke="#FFFFFF" />
          </svg>
        </div>
        <p className="text-gray-600 text-xl font-semibold mt-4">Bob Johnson</p>
        <p className="text-gray-600 leading-relaxed">CMO</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full w-24 h-24 flex justify-center items-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 4 24 4s16 7.18 16 16-7.18 16-16 16z" stroke="#FFFFFF" />
          </svg>
        </div>
        <p className="text-gray-600 text-xl font-semibold mt-4">Alice Brown</p>
        <p className="text-gray-600 leading-relaxed">COO</p>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Company Stats</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="flex flex-col items-center">
        <p className="text-gray-600 text-3xl font-bold">1000+</p>
        <p className="text-gray-600 leading-relaxed">Students Served</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-600 text-3xl font-bold">500+</p>
        <p className="text-gray-600 leading-relaxed">Teachers Trained</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-600 text-3xl font-bold">100+</p>
        <p className="text-gray-600 leading-relaxed">Schools Partnered</p>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-gray-600 text-3xl font-bold">95%</p>
        <p className="text-gray-600 leading-relaxed">Student Satisfaction Rate</p>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Timeline</h2>
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow w-full">
        <p className="text-gray-600 text-xl font-semibold">2020</p>
        <p className="text-gray-600 leading-relaxed">Edify was founded with a mission to revolutionize education 🚀</p>
      </div>
      <div className="bg-gray-100 rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow w-full mt-6">
        <p className="text-gray-600 text-xl font-semibold">2022</p>
        <p className="text-gray-600 leading-relaxed">We launched our flagship product, Edify Learning Platform 📚</p>
      </div>
      <div className="bg-gray-100 rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow w-full mt-6">
        <p className="text-gray-600 text-xl font-semibold">2023</p>
        <p className="text-gray-600 leading-relaxed">We partnered with 100+ schools and served 1000+ students 🎉</p>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
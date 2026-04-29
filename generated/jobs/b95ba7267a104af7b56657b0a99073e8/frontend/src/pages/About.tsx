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
      <div className="container max-w-7xl mx-auto p-6 pt-20">
  <section className="hero bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
    <h1 className="text-4xl font-bold text-gray-900">About Us 🚀</h1>
    <p className="text-xl font-semibold text-gray-200">Our mission is to deliver innovative software solutions that exceed our clients' expectations 🤩</p>
  </section>
  <section className="values py-20 px-6">
    <h2 className="text-3xl font-bold">Our Values 🌟</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Innovation 🚀</h3>
        <p className="text-gray-600 leading-relaxed">We strive to stay ahead of the curve, embracing new technologies and trends to deliver cutting-edge solutions 📈</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Collaboration 🤝</h3>
        <p className="text-gray-600 leading-relaxed">We believe in the power of teamwork, working closely with our clients and partners to achieve common goals 🌈</p>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Excellence 🏆</h3>
        <p className="text-gray-600 leading-relaxed">We are committed to delivering exceptional quality and service, exceeding our clients' expectations and building long-term relationships 📈</p>
      </Card>
    </div>
  </section>
  <section className="team py-20 px-6">
    <h2 className="text-3xl font-bold">Meet Our Team 👥</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex justify-center items-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 4 24 4s16 7.18 16 16-7.18 16-16 16z" fill="#ffffff" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mt-4">John Doe 🚀</h3>
        <p className="text-gray-600 leading-relaxed">CEO & Founder 🌟</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex justify-center items-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 4 24 4s16 7.18 16 16-7.18 16-16 16z" fill="#ffffff" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mt-4">Jane Smith 🌈</h3>
        <p className="text-gray-600 leading-relaxed">CTO 🤖</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex justify-center items-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 4 24 4s16 7.18 16 16-7.18 16-16 16z" fill="#ffffff" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mt-4">Bob Johnson 📊</h3>
        <p className="text-gray-600 leading-relaxed">CMO 📈</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-full flex justify-center items-center">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeWidth="2" fillRule="evenodd" clipRule="evenodd" strokeLinejoin="round">
            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 36c-8.82 0-16-7.18-16-16S15.18 4 24 4s16 7.18 16 16-7.18 16-16 16z" fill="#ffffff" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mt-4">Alice Brown 📚</h3>
        <p className="text-gray-600 leading-relaxed">CTO 📊</p>
      </div>
    </div>
  </section>
  <section className="stats py-20 px-6">
    <h2 className="text-3xl font-bold">Company Stats 📊</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="flex flex-col items-center">
        <h3 className="text-4xl font-bold">10+ 🚀</h3>
        <p className="text-gray-600 leading-relaxed">Years of Experience 📈</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-4xl font-bold">50+ 🌟</h3>
        <p className="text-gray-600 leading-relaxed">Successful Projects 📊</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-4xl font-bold">100+ 🤝</h3>
        <p className="text-gray-600 leading-relaxed">Happy Clients 🌈</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-4xl font-bold">1000+ 📈</h3>
        <p className="text-gray-600 leading-relaxed">Lines of Code 📊</p>
      </div>
    </div>
  </section>
  <section className="timeline py-20 px-6">
    <h2 className="text-3xl font-bold">Timeline 🕰️</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold">2010 🚀</h3>
        <p className="text-gray-600 leading-relaxed">Founded 🌟</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold">2015 📈</h3>
        <p className="text-gray-600 leading-relaxed">First Client 🤝</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold">2020 🌟</h3>
        <p className="text-gray-600 leading-relaxed">10 Years of Experience 📊</p>
      </div>
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold">2022 🚀</h3>
        <p className="text-gray-600 leading-relaxed">New Office 🌟</p>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
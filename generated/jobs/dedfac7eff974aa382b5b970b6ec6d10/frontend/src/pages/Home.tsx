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
  {/* Hero Section */}
  <section className="Container flex flex-col items-center justify-center h-full">
    <Badge className="mb-4">New Release</Badge>
    <h1 className="text-4xl font-bold text-white mb-6">EduFlow: Streamlining Education Management</h1>
    <p className="text-gray-300 text-xl mb-8 leading-relaxed w-80 text-center">Effortlessly manage your educational institution with our comprehensive ERP system.</p>
    <div className="flex justify-center mb-12">
      <Button className="mr-4">Sign Up for Free</Button>
      <Button className="bg-transparent border border-white text-white hover:bg-indigo-600 hover:text-white">Learn More</Button>
    </div>
    <div className="text-gray-300 flex justify-center mb-4">
      <span>Trusted by:</span>
      <img src="logo1.png" alt="Client 1" className="h-6 w-6 ml-2 mr-2" />
      <img src="logo2.png" alt="Client 2" className="h-6 w-6 ml-2 mr-2" />
      <img src="logo3.png" alt="Client 3" className="h-6 w-6 ml-2 mr-2" />
    </div>
  </section>

  {/* Social Proof Bar */}
  <section className="Container py-4 bg-gray-100">
    <div className="flex justify-between text-gray-600">
      <div className="flex items-center">
        <svg width="24" height="24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="mr-2">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333 2.167-1.333 3.938 0L21.938 9H15" />
        </svg>
        <span>500+ Schools Onboarded</span>
      </div>
      <div className="flex items-center">
        <svg width="24" height="24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="mr-2">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333 2.167-1.333 3.938 0L21.938 9H15" />
        </svg>
        <span>10,000+ Happy Teachers</span>
      </div>
      <div className="flex items-center">
        <svg width="24" height="24" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="mr-2">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333 2.167-1.333 3.938 0L21.938 9H15" />
        </svg>
        <span>100,000+ Students Managed</span>
      </div>
    </div>
  </section>

  {/* Features Section */}
  <section className="Sections Container">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Features of EduFlow</h2>
    <div className="grid grid-cols-3 gap-8">
      <Card className="flex flex-col items-center">
        <div className="mb-4 text-2xl">📚</div>
        <h3 className="text-xl font-semibold mb-4">Student Management</h3>
        <p className="text-gray-600 leading-relaxed text-center w-80">Easily track student progress and performance.</p>
      </Card>
      <Card className="flex flex-col items-center">
        <div className="mb-4 text-2xl">👩‍🏫</div>
        <h3 className="text-xl font-semibold mb-4">Teacher Portal</h3>
        <p className="text-gray-600 leading-relaxed text-center w-80">Simplify lesson planning and grade management for teachers.</p>
      </Card>
      <Card className="flex flex-col items-center">
        <div className="mb-4 text-2xl">📊</div>
        <h3 className="text-xl font-semibold mb-4">Attendance & Grade Tracking</h3>
        <p className="text-gray-600 leading-relaxed text-center w-80">Accurately monitor attendance and grades in real-time.</p>
      </Card>
    </div>
  </section>

  {/* How It Works Section */}
  <section className="Sections Container bg-gray-100">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">How EduFlow Works</h2>
    <div className="flex flex-col items-center mb-8">
      <div className="text-2xl mb-4">🤔</div>
      <p className="text-gray-600 leading-relaxed w-80 text-center">A step-by-step guide to getting started with EduFlow:</p>
    </div>
    <div className="grid grid-cols-4 gap-8">
      <div className="flex flex-col items-center">
        <div className="bg-indigo-600 text-white p-4 rounded-full mb-4">1</div>
        <h3 className="text-xl font-semibold mb-2">Sign Up</h3>
        <p className="text-gray-600 leading-relaxed text-center w-60">Create your EduFlow account.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-indigo-600 text-white p-4 rounded-full mb-4">2</div>
        <h3 className="text-xl font-semibold mb-2">Onboard Your School</h3>
        <p className="text-gray-600 leading-relaxed text-center w-60">Add your school's details and users.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-indigo-600 text-white p-4 rounded-full mb-4">3</div>
        <h3 className="text-xl font-semibold mb-2">Manage with Ease</h3>
        <p className="text-gray-600 leading-relaxed text-center w-60">Start managing students, teachers, and more.</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-indigo-600 text-white p-4 rounded-full mb-4">4</div>
        <h3 className="text-xl font-semibold mb-2">Support Always Available</h3>
        <p className="text-gray-600 leading-relaxed text-center w-60">Our support team is here for you.</p>
      </div>
    </div>
  </section>

  {/* Stats Section */}
  <section className="Sections Container">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Impact of EduFlow</h2>
    <div className="grid grid-cols-4 gap-8 text-center">
      <div>
        <div className="text-3xl font-bold mb-4">95%</div>
        <p className="text-gray-600">Increase in Parent Engagement</p>
      </div>
      <div>
        <div className="text-3xl font-bold mb-4">30%</div>
        <p className="text-gray-600">Reduction in Administrative Work</p>
      </div>
      <div>
        <div className="text-3xl font-bold mb-4">99%</div>
        <p className="text-gray-600">Uptime Guarantee</p>
      </div>
      <div>
        <div className="text-3xl font-bold mb-4">24/7</div>
        <p className="text-gray-600">Dedicated Support</p>
      </div>
    </div>
  </section>

  {/* Testimonials Section */}
  <section className="Sections Container bg-gray-100">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Users Say</h2>
    <div className="grid grid-cols-2 gap-8">
      <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <img src="user1.jpg" alt="User 1" className="h-12 w-12 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Jane Doe</h3>
            <p className="text-gray-600">Principal, Green Valley School</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">"EduFlow has been a game-changer for our school's management."</p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <img src="user2.jpg" alt="User 2" className="h-12 w-12 rounded-full mr-4" />
          <div>
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-gray-600">Teacher, Oakwood High School</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">"The teacher portal in EduFlow is incredibly intuitive and helpful."</p>
      </div>
    </div>
  </section>

  {/* CTA Section */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 Container Sections flex flex-col items-center justify-center">
    <h2 className="text-3xl font-bold text-white mb-8">Ready to Transform Your Educational Institution?</h2>
    <Button>Sign Up for a Free Trial</Button>
    <p className="text-white mt-4">or <Link to="/contact">Contact Us</Link> for a custom demo.</p>
  </section>
</div>
    </Layout>
  )
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Pricing() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto py-20 px-6">
  <header className="flex justify-center mb-12">
    <nav className="flex items-center">
      <span className="text-4xl font-bold text-gray-900 mr-6">Edify</span>
      <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">
        Toggle
      </button>
    </nav>
  </header>
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900 mb-6">Pricing Plans</h1>
    <div className="flex flex-wrap justify-center mb-12">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/3 xl:w-1/3 p-6 mx-4 mb-6">
        <h2 className="text-3xl font-bold mb-4">Starter</h2>
        <p className="text-gray-600 leading-relaxed mb-6">Perfect for small schools and institutions</p>
        <ul className="list-none mb-6">
          <li className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
              <path d="M0 0h24v24H0z" fillRule="evenodd" clipRule="evenodd" />
              <path d="M5 13l4 4 4-4M3 5h18M3 19h18" />
            </svg>
            <span>Student Profile Management</span>
          </li>
          <li className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
              <path d="M0 0h24v24H0z" fillRule="evenodd" clipRule="evenodd" />
              <path d="M5 13l4 4 4-4M3 5h18M3 19h18" />
            </svg>
            <span>Course Enrollment</span>
          </li>
        </ul>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">
          Get Started
        </Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/3 xl:w-1/3 p-6 mx-4 mb-6 border-4 border-indigo-600">
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mb-4">
          Featured
        </Badge>
        <h2 className="text-3xl font-bold mb-4">Pro</h2>
        <p className="text-gray-600 leading-relaxed mb-6">Ideal for medium-sized schools and institutions</p>
        <ul className="list-none mb-6">
          <li className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
              <path d="M0 0h24v24H0z" fillRule="evenodd" clipRule="evenodd" />
              <path d="M5 13l4 4 4-4M3 5h18M3 19h18" />
            </svg>
            <span>Student Profile Management</span>
          </li>
          <li className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
              <path d="M0 0h24v24H0z" fillRule="evenodd" clipRule="evenodd" />
              <path d="M5 13l4 4 4-4M3 5h18M3 19h18" />
            </svg>
            <span>Course Enrollment</span>
          </li>
          <li className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
              <path d="M0 0h24v24H0z" fillRule="evenodd" clipRule="evenodd" />
              <path d="M5 13l4 4 4-4M3 5h18M3 19h18" />
            </svg>
            <span>Grade Book Management</span>
          </li>
        </ul>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">
          Get Started
        </Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full md:w-1/3 xl:w-1/3 p-6 mx-4 mb-6">
        <h2 className="text-3xl font-bold mb-4">Enterprise</h2>
        <p className="text-gray-600 leading-relaxed mb-6">Designed for large schools and institutions</p>
        <ul className="list-none mb-6">
          <li className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
              <path d="M0 0h24v24H0z" fillRule="evenodd" clipRule="evenodd" />
              <path d="M5 13l4 4 4-4M3 5h18M3 19h18" />
            </svg>
            <span>Student Profile Management</span>
          </li>
          <li className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
              <path d="M0 0h24v24H0z" fillRule="evenodd" clipRule="evenodd" />
              <path d="M5 13l4 4 4-4M3 5h18M3 19h18" />
            </svg>
            <span>Course Enrollment</span>
          </li>
          <li className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
              <path d="M0 0h24v24H0z" fillRule="evenodd" clipRule="evenodd" />
              <path d="M5 13l4 4 4-4M3 5h18M3 19h18" />
            </svg>
            <span>Grade Book Management</span>
          </li>
          <li className="flex items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
              <path d="M0 0h24v24H0z" fillRule="evenodd" clipRule="evenodd" />
              <path d="M5 13l4 4 4-4M3 5h18M3 19h18" />
            </svg>
            <span>Customizable Fields</span>
          </li>
        </ul>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 w-full">
          Get Started
        </Button>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-6">Feature Comparison</h2>
    <table className="w-full mb-12">
      <thead className="bg-gray-100">
        <tr>
          <th className="py-4 px-6 text-gray-600 font-semibold">Features</th>
          <th className="py-4 px-6 text-gray-600 font-semibold">Starter</th>
          <th className="py-4 px-6 text-gray-600 font-semibold">Pro</th>
          <th className="py-4 px-6 text-gray-600 font-semibold">Enterprise</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-4 px-6 text-gray-600">Student Profile Management</td>
          <td className="py-4 px-6 text-gray-600">👍</td>
          <td className="py-4 px-6 text-gray-600">👍</td>
          <td className="py-4 px-6 text-gray-600">👍</td>
        </tr>
        <tr>
          <td className="py-4 px-6 text-gray-600">Course Enrollment</td>
          <td className="py-4 px-6 text-gray-600">👍</td>
          <td className="py-4 px-6 text-gray-600">👍</td>
          <td className="py-4 px-6 text-gray-600">👍</td>
        </tr>
        <tr>
          <td className="py-4 px-6 text-gray-600">Grade Book Management</td>
          <td className="py-4 px-6 text-gray-600">👎</td>
          <td className="py-4 px-6 text-gray-600">👍</td>
          <td className="py-4 px-6 text-gray-600">👍</td>
        </tr>
        <tr>
          <td className="py-4 px-6 text-gray-600">Customizable Fields</td>
          <td className="py-4 px-6 text-gray-600">👎</td>
          <td className="py-4 px-6 text-gray-600">👎</td>
          <td className="py-4 px-6 text-gray-600">👍</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
    <div className="mb-12">
      <details className="mb-4">
        <summary className="text-gray-600 font-semibold cursor-pointer">What is Edify?</summary>
        <p className="text-gray-600 leading-relaxed mt-4">Edify is an Education ERP system designed to help schools and institutions manage their daily operations efficiently.</p>
      </details>
      <details className="mb-4">
        <summary className="text-gray-600 font-semibold cursor-pointer">How do I get started with Edify?</summary>
        <p className="text-gray-600 leading-relaxed mt-4">To get started with Edify, simply sign up for a plan that suits your needs and follow the onboarding process.</p>
      </details>
      <details className="mb-4">
        <summary className="text-gray-600 font-semibold cursor-pointer">What kind of support does Edify offer?</summary>
        <p className="text-gray-600 leading-relaxed mt-4">Edify offers 24/7 customer support via email, phone, and live chat.</p>
      </details>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold mb-6">Trust Badges</h2>
    <div className="flex flex-wrap justify-center mb-12">
      <div className="flex items-center mb-4 mx-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
          <path d="M0 0h24v24H0z" fillRule="evenodd" clipRule="evenodd" />
          <path d="M5 13l4 4 4-4M3 5h18M3 19h18" />
        </svg>
        <span>No Credit Card Required</span>
      </div>
      <div className="flex items-center mb-4 mx-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
          <path d="M0 0h24v24H0z" fillRule="evenodd" clipRule="evenodd" />
          <path d="M5 13l4 4 4-4M3 5h18M3 19h18" />
        </svg>
        <span>Cancel Anytime</span>
      </div>
      <div className="flex items-center mb-4 mx-4">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mr-2">
          <path d="M0 0h24v24H0z" fillRule="evenodd" clipRule="evenodd" />
          <path d="M5 13l4 4 4-4M3 5h18M3 19h18" />
        </svg>
        <span>24/7 Support</span>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
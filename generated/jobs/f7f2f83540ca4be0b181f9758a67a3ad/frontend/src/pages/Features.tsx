import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Features() {
  return (
    <Layout>
      <div className="container mx-auto px-6 pt-20">
  <section className="py-20">
    <h1 className="text-4xl font-bold text-gray-900">FinSecure Features</h1>
    <p className="text-gray-600 leading-relaxed mt-4">Unlock the full potential of your financial security with FinSecure's cutting-edge features.</p>
  </section>

  <section className="py-20">
    <h2 className="text-3xl font-bold">Real-Time Insights</h2>
    <div className="flex flex-wrap justify-center mt-8">
      <Card className="w-1/2 lg:w-1/3 xl:w-1/4 p-6 mb-8 lg:mb-0">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Real-Time Analytics" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Live Market Data</h3>
        <p className="text-gray-600 leading-relaxed">Stay ahead with real-time market updates.</p>
        <Badge className="mt-4">Pro Feature</Badge>
      </Card>
      
      <Card className="w-1/2 lg:w-1/3 xl:w-1/4 p-6 mb-8 lg:mb-0">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Custom Alerts" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Customizable Alerts</h3>
        <p className="text-gray-600 leading-relaxed">Receive notifications tailored to your needs.</p>
      </Card>
      
      <Card className="w-1/2 lg:w-1/3 xl:w-1/4 p-6">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Portfolio Tracking" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold mt-4">Advanced Portfolio Tracking</h3>
        <p className="text-gray-600 leading-relaxed">Monitor your investments with precision.</p>
        <Badge className="mt-4 bg-green-100 text-green-700">New</Badge>
      </Card>
    </div>
  </section>

  <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold">Security You Can Trust</h2>
      <p className="text-gray-200 leading-relaxed mt-4">Powered by Java's robust security features for unparalleled protection.</p>
      <div className="flex flex-wrap justify-center mt-8 text-gray-200">
        <div className="w-1/2 lg:w-1/4 p-4">
          <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M20 6a2 2 0 012 2 6 6 0 102 4 2 2 0 012 2 6 6 0 01-12 0z" />
            <path d="M12 12a5 5 0 109 0 5 5 0 00-9 0z" />
          </svg>
          <h3 className="text-xl font-semibold mt-4">End-to-End Encryption</h3>
        </div>
        
        <div className="w-1/2 lg:w-1/4 p-4">
          <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M4 6h16M8 10a2 2 0 011.83 3.17l-5 1A2 2 0 013 12.17V8a2 2 0 012-2z" />
          </svg>
          <h3 className="text-xl font-semibold mt-4">Two-Factor Authentication</h3>
        </div>
        
        <div className="w-1/2 lg:w-1/4 p-4">
          <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M11 16l-4-4m0 0l4-4m-4 4h3m-3-4h3m-3 4h3m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold mt-4">Regular Security Audits</h3>
        </div>
        
        <div className="w-1/2 lg:w-1/4 p-4">
          <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
            <path d="M3 10.5 6.5 14 9 10.5M21 10.5 17.5 14 14 10.5" />
            <path d="M6.5 3L14 10.5 21.5 3" />
          </svg>
          <h3 className="text-xl font-semibold mt-4">Dedicated Support</h3>
        </div>
      </div>
    </div>
  </section>

  <section className="py-20">
    <h2 className="text-3xl font-bold">Integration Grid</h2>
    <div className="grid grid-cols-3 gap-4 mt-8">
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&q=80" alt="Bank of America" className="w-full h-24 object-cover rounded" />
      <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=200&q=80" alt="Chase" className="w-full h-24 object-cover rounded" />
      <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=200&q=80" alt="Wells Fargo" className="w-full h-24 object-cover rounded" />
      
      <img src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=200&q=80" alt="PayPal" className="w-full h-24 object-cover rounded" />
      <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&q=80" alt="Stripe" className="w-full h-24 object-cover rounded" />
      <img src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=200&q=80" alt="Square" className="w-full h-24 object-cover rounded" />
      
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Venmo" className="w-full h-24 object-cover rounded" />
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80" alt="Zelle" className="w-full h-24 object-cover rounded" />
      <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80" alt="Cash App" className="w-full h-24 object-cover rounded" />
      
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80" alt="Google Pay" className="w-full h-24 object-cover rounded" />
      <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=200&q=80" alt="Apple Pay" className="w-full h-24 object-cover rounded" />
      <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&q=80" alt="Samsung Pay" className="w-full h-24 object-cover rounded" />
    </div>
  </section>

  <section className="py-20">
    <h2 className="text-3xl font-bold">Advanced Features</h2>
    <div className="flex flex-wrap justify-center mt-8">
      <div className="w-full lg:w-1/2 p-6">
        <h3 className="text-xl font-semibold">AI-Driven Investment Insights</h3>
        <p className="text-gray-600 leading-relaxed">Make data-driven decisions with our AI-powered analytics.</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Learn More</Button>
      </div>
      
      <div className="w-full lg:w-1/2 p-6">
        <h3 className="text-xl font-semibold">Customizable Dashboards</h3>
        <p className="text-gray-600 leading-relaxed">Tailor your view to focus on what matters most.</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Explore</Button>
      </div>
    </div>
  </section>

  <section className="py-20">
    <h2 className="text-3xl font-bold">What Our Clients Say</h2>
    <div className="flex flex-wrap justify-center mt-8">
      <Card className="w-1/2 lg:w-1/3 xl:w-1/4 p-6 mb-8 lg:mb-0">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Client 1" className="w-full h-32 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold">Emily R.</h3>
        <p className="text-gray-600 leading-relaxed">"FinSecure has been a game-changer for my investments."</p>
        <Badge className="mt-4">Happy Client</Badge>
      </Card>
      
      <Card className="w-1/2 lg:w-1/3 xl:w-1/4 p-6 mb-8 lg:mb-0">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Client 2" className="w-full h-32 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold">David K.</h3>
        <p className="text-gray-600 leading-relaxed">"The security features give me peace of mind."</p>
      </Card>
      
      <Card className="w-1/2 lg:w-1/3 xl:w-1/4 p-6">
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="Client 3" className="w-full h-32 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold">Sophia L.</h3>
        <p className="text-gray-600 leading-relaxed">"FinSecure's support team is always helpful."</p>
        <Badge className="mt-4 bg-green-100 text-green-700">New Client</Badge>
      </Card>
    </div>
  </section>

  <section className="py-20">
    <h2 className="text-3xl font-bold">Ready to Secure Your Financial Future?</h2>
    <p className="text-gray-600 leading-relaxed mt-4">Join the thousands who have already made the switch to FinSecure.</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Sign Up Now</Button>
    <Link to="/contact" className="text-indigo-600 hover:text-indigo-700 mt-2 block">Or Contact Us for More Information</Link>
  </section>
</div>
    </Layout>
  )
}
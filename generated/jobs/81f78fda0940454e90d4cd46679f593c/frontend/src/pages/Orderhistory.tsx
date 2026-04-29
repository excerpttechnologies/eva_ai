import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Orderhistory() {
  return (
    <Layout>
      Here is the complete Order History page JSX for ShopEase, adhering to the provided design system rules and page blueprint, tailored for the Retail industry with a playful tone:


<div className="container max-w-7xl mx-auto px-6 pt-20 pb-10">
  {/* Hero Section with Gradient BG for Order History Twist */}
  <section className="bg-gradient-to-br from-indigo-600 to-purple-700 py-20">
    <h1 className="text-4xl font-bold text-white">Your Order History 🛍️</h1>
    <p className="text-xl text-gray-200 leading-relaxed mt-4">Track all your purchases with ShopEase 😊</p>
  </section>

  {/* Order History List Section */}
  <section className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Orders</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Example Order Cards - Repeat as necessary with dynamic data */}
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Order #1234</h3>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Delivered 🚚</Badge>
        </div>
        <p className="text-gray-600 leading-relaxed">2 Items • Total: $54.99</p>
        <div className="flex justify-between text-gray-600 mt-4">
          <span>Placed on: 2023-02-15</span>
          <span><Link to="/order/1234/details">View Details →</Link></span>
        </div>
      </Card>
      
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Order #5678</h3>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">In Transit 🛳️</Badge>
        </div>
        <p className="text-gray-600 leading-relaxed">1 Item • Total: $29.99</p>
        <div className="flex justify-between text-gray-600 mt-4">
          <span>Placed on: 2023-03-01</span>
          <span><Link to="/order/5678/details">View Details →</Link></span>
        </div>
      </Card>
      
      {/* Add More Order Cards Here */}
      
      <div className="flex justify-center items-center h-full bg-gray-100 rounded-2xl p-6">
        <p className="text-gray-600">No More Orders 😊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Shop Now! 🛍️</Button>
      </div>
    </div>
  </section>

  {/* Filter and Pagination Section (Simplified for Demo) */}
  <section className="py-10">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Input label="Search Order #" placeholder="Enter Order Number" type="text" className="w-64" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 ml-4">Search 🔍</Button>
      </div>
      <div>
        <Button className="px-4 py-2 bg-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-200 mr-2">Prev</Button>
        <span className="text-gray-600">Page 1 of 5</span>
        <Button className="px-4 py-2 bg-gray-200 text-gray-600 font-semibold rounded-xl hover:bg-gray-300 transition-all duration-200 ml-2">Next</Button>
      </div>
    </div>
  </section>

  {/* Company Stats Section (Not directly relevant but included for blueprint completeness) */}
  <section className="py-20 bg-gray-100">
    <div className="flex justify-center items-center mb-8">
      <h2 className="text-3xl font-bold text-gray-900">Why Choose ShopEase?</h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div>
        <h3 className="text-2xl font-bold mb-4">10,000+</h3>
        <p className="text-gray-600">Happy Customers 😊</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">5,000+</h3>
        <p className="text-gray-600">Products Available 🛍️</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4">99.9%</h3>
        <p className="text-gray-600">Order Success Rate 📈</p>
      </div>
    </div>
  </section>

  {/* Timeline Milestones Section (Simplified for Demo, not directly relevant to Order History) */}
  <section className="py-20">
    <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Journey</h2>
    <div className="timeline">
      <div className="timeline-item">
        <span className="timeline-date text-gray-600">2020</span>
        <div className="timeline-content bg-white rounded-2xl p-4 shadow-sm">
          <h3 className="text-xl font-semibold">Founded</h3>
          <p className="text-gray-600">ShopEase was born with a mission to ease your shopping experience 🌟</p>
        </div>
      </div>
      {/* Add More Timeline Items Here */}
    </div>
  </section>
</div>


**Notes for Completion and Dynamic Functionality:**

1. **Dynamic Order Cards**: Replace the static `<Card>` examples with a loop that renders cards based on actual order data.
2. **Search Functionality**: Implement the search bar to filter orders by ID.
3. **Pagination**: Make the pagination buttons functional to navigate through order pages.
4. **Responsive Design**: While Tailwind classes provide a good base, ensure to test and adjust for all screen sizes.
5. **Framer Motion & GSAP Animation**: Integrate these libraries to add interactive animations (e.g., order card transitions, hover effects) as per your design preferences.
6. **Missing Sections for Full Blueprint**:
   - **Values 3-card grid**, **Team grid**, and detailed **Timeline milestones** were simplified or not fully included due to the focus on the Order History page. These should be expanded upon in other sections of the site.
   - **Hero with gradient bg-indigo-50 + mission statement** was adapted for the Order History context; adjust the gradient and content for the main homepage hero section.
7. **Authentication, Payment Integration, and Admin Dashboard**: These features require backend integration and are not included in this JSX snippet, which focuses on the frontend UI for the Order History page.
    </Layout>
  )
}
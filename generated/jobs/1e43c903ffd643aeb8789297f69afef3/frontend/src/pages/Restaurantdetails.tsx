import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Restaurantdetails() {
  return (
    <Layout>
      <div className="gradient-hero-banner relative h-screen">
  <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80" alt="FoodPal Hero" className="w-full h-[520px] object-cover absolute inset-0" />
  <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <h1 className="text-4xl font-bold text-white">FoodPal - Restaurant Details</h1>
  </div>
</div>

<section className="py-20 px-6 max-w-7xl mx-auto">
  <div className="flex flex-wrap justify-center -mx-4">
    <Card className="w-full lg:w-1/2 xl:w-1/2 px-4 my-4">
      <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Restaurant Image" className="w-full h-64 object-cover rounded-2xl" />
      <h2 className="text-3xl font-bold text-gray-900 mt-4">Tasty Bites Cafe</h2>
      <p className="text-gray-600 leading-relaxed">Savor the flavors of our expertly crafted dishes, from spicy curries to fresh salads 🥗</p>
      <div className="flex items-center mt-4">
        <Badge className="bg-indigo-100 text-indigo-700 mr-2">4.5/5</Badge>
        <span className="text-gray-600">Based on 250 reviews</span>
      </div>
    </Card>
    
    <Card className="w-full lg:w-1/2 xl:w-1/2 px-4 my-4">
      <div className="flex flex-col">
        <h3 className="text-xl font-semibold">Restaurant Info</h3>
        <ul className="list-none mt-4">
          <li className="flex items-center mb-2"><span className="text-gray-600 mr-2">📍</span> 123 Main St, Anytown</li>
          <li className="flex items-center mb-2"><span className="text-gray-600 mr-2">📞</span> 555-1234</li>
          <li className="flex items-center mb-2"><span className="text-gray-600 mr-2">🕒</span> Mon-Sun, 11am-10pm</li>
        </ul>
      </div>
    </Card>
  </div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto bg-gray-100">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Menu Highlights</h2>
  <div className="flex flex-wrap justify-center -mx-4">
    <Card className="w-full lg:w-1/3 xl:w-1/3 px-4 my-4">
      <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Menu Item" className="w-full h-64 object-cover rounded-2xl" />
      <h3 className="text-xl font-semibold mt-4">Spicy Chicken Curry</h3>
      <p className="text-gray-600 leading-relaxed">Rich, spicy curry with grilled chicken, served with steamed rice 🍛</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Order Now</Button>
    </Card>
    
    <Card className="w-full lg:w-1/3 xl:w-1/3 px-4 my-4">
      <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" alt="Menu Item" className="w-full h-64 object-cover rounded-2xl" />
      <h3 className="text-xl font-semibold mt-4">Fresh Garden Salad</h3>
      <p className="text-gray-600 leading-relaxed">Mixed greens, cherry tomatoes, cucumber, and balsamic vinaigrette 🥗</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Order Now</Button>
    </Card>
    
    <Card className="w-full lg:w-1/3 xl:w-1/3 px-4 my-4">
      <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80" alt="Menu Item" className="w-full h-64 object-cover rounded-2xl" />
      <h3 className="text-xl font-semibold mt-4">Crispy Pizza</h3>
      <p className="text-gray-600 leading-relaxed">Thin crust, mozzarella, tomato sauce, and your choice of toppings 🍕</p>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">Order Now</Button>
    </Card>
  </div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Reviews</h2>
  <div className="flex flex-col">
    <div className="flex items-center mb-4">
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="Reviewer Avatar" className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="text-xl font-semibold">Emily R.</h3>
        <Badge className="bg-indigo-100 text-indigo-700">5/5</Badge>
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed">Amazing service and food! The spicy curry is a must-try 🤩</p>
    
    <div className="flex items-center mt-8 mb-4">
      <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="Reviewer Avatar" className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h3 className="text-xl font-semibold">David K.</h3>
        <Badge className="bg-indigo-100 text-indigo-700">4/5</Badge>
      </div>
    </div>
    <p className="text-gray-600 leading-relaxed">Great food, but the wait time was a bit long. Will still recommend 😊</p>
  </div>
  <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-8">Leave a Review</Button>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto bg-gray-100">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Call to Action</h2>
  <p className="text-gray-600 leading-relaxed mb-8">Ready to taste the difference? Order now and get 10% off your first meal! 🍴</p>
  <Link to="/cart"><Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Order Now & Get 10% Off</Button></Link>
</section>
    </Layout>
  )
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Menu() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-amber-500 to-orange-400 h-screen">
  {/* Hero Section */}
  <section className="container mx-auto py-16 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Menu | Bistro Bliss</h1>
    <p className="text-xl font-semibold text-gray-600">Savor the Flavor of Our Expertly Crafted Dishes</p>
    <Link to="/home"><Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Back to Home</Button></Link>
  </section>

  {/* Categories Navigation */}
  <nav className="container mx-auto py-4 px-6 bg-white shadow-sm border border-gray-100">
    <ul className="flex justify-center gap-6">
      <li><Link to="#starters" className="text-xl font-semibold text-gray-600 hover:text-indigo-600">Starters</Link></li>
      <li><Link to="#main-course" className="text-xl font-semibold text-gray-600 hover:text-indigo-600">Main Course</Link></li>
      <li><Link to="#desserts" className="text-xl font-semibold text-gray-600 hover:text-indigo-600">Desserts</Link></li>
      <li><Link to="#drinks" className="text-xl font-semibold text-gray-600 hover:text-indigo-600">Drinks</Link></li>
    </ul>
  </nav>

  {/* Menu Items Grid */}
  <main className="container mx-auto py-20 px-6">
    {/* Starters */}
    <section id="starters">
      <h2 className="text-3xl font-bold mb-6">Starters 🍴</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Grilled Shrimp Skewers</h3>
          <p className="text-gray-600 leading-relaxed">Marinated in our signature blend, served with tangy mango salsa.</p>
          <p className="text-lg font-bold">$12.99</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Vegetarian Option Available</Badge>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Crispy Fried Calamari</h3>
          <p className="text-gray-600 leading-relaxed">Lightly battered, served with a side of zesty aioli.</p>
          <p className="text-lg font-bold">$9.99</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Hearty Onion Soup</h3>
          <p className="text-gray-600 leading-relaxed">French-inspired, topped with crispy baguette and melted cheese.</p>
          <p className="text-lg font-bold">$8.99</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Gluten-Free</Badge>
        </Card>
      </div>
    </section>

    {/* Main Course */}
    <section id="main-course" className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Main Course 🍽️</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Pan-Seared Salmon</h3>
          <p className="text-gray-600 leading-relaxed">Fresh catch of the day, served with roasted vegetables and quinoa.</p>
          <p className="text-lg font-bold">$25.99</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Herb Crusted Prime Rib</h3>
          <p className="text-gray-600 leading-relaxed">Slow-cooked to perfection, served with garlic mashed potatoes.</p>
          <p className="text-lg font-bold">$32.99</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Vegetarian Stuffed Bell Peppers</h3>
          <p className="text-gray-600 leading-relaxed">Colorful peppers filled with quinoa, cheese, and spices.</p>
          <p className="text-lg font-bold">$18.99</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Vegan Option</Badge>
        </Card>
      </div>
    </section>

    {/* Desserts */}
    <section id="desserts" className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Desserts 🍰</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Warm Chocolate Lava Cake</h3>
          <p className="text-gray-600 leading-relaxed">Rich, gooey chocolate center, served with vanilla ice cream.</p>
          <p className="text-lg font-bold">$7.99</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Fresh Fruit Tart</h3>
          <p className="text-gray-600 leading-relaxed">Seasonal fruits atop a buttery pastry crust.</p>
          <p className="text-lg font-bold">$8.99</p>
          <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Gluten-Free Option</Badge>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Creamy Cheesecake</h3>
          <p className="text-gray-600 leading-relaxed">Silky smooth with a graham cracker crust, topped with mixed berries.</p>
          <p className="text-lg font-bold">$9.99</p>
        </Card>
      </div>
    </section>

    {/* Drinks */}
    <section id="drinks" className="mt-16">
      <h2 className="text-3xl font-bold mb-6">Drinks ☕️</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Specialty Coffee</h3>
          <p className="text-gray-600 leading-relaxed">Espresso, Cappuccino, Latte, or Drip, made with our freshly roasted beans.</p>
          <p className="text-lg font-bold">$3.99-$5.99</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Craft Beers</h3>
          <p className="text-gray-600 leading-relaxed">Rotating selection of local and international brews.</p>
          <p className="text-lg font-bold">$6.99-$8.99</p>
        </Card>
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">Signature Cocktails</h3>
          <p className="text-gray-600 leading-relaxed">Handcrafted with premium spirits and fresh ingredients.</p>
          <p className="text-lg font-bold">$10.99-$12.99</p>
        </Card>
      </div>
    </section>
  </main>

  {/* CTA Section */}
  <section className="container mx-auto py-16 px-6 bg-gray-100">
    <h3 className="text-2xl font-bold mb-4">Ready to Dine with Us?</h3>
    <Link to="/contact"><Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Book a Table or Order Now</Button></Link>
  </section>
</div>
    </Layout>
  )
}
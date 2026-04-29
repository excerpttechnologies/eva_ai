import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Productcatalog() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">Product Catalog</h1>
    <p className="text-gray-600 leading-relaxed">Browse our collection of premium products, carefully curated for your shopping pleasure 🛍️</p>
  </section>
  <section className="py-20 px-6">
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h2 className="text-3xl font-bold">Filters</h2>
          <Input label="Search" placeholder="Search products" type="search" />
          <div className="flex flex-wrap justify-center">
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Category 1</Badge>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Category 2</Badge>
            <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">Category 3</Badge>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-2/3 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">Product 1</h3>
            <p className="text-gray-600 leading-relaxed">Description of product 1 📚</p>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Details</Button>
          </Card>
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">Product 2</h3>
            <p className="text-gray-600 leading-relaxed">Description of product 2 📊</p>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Details</Button>
          </Card>
          <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">Product 3</h3>
            <p className="text-gray-600 leading-relaxed">Description of product 3 📈</p>
            <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Details</Button>
          </Card>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Sorting and Pagination</h2>
    <div className="flex flex-wrap justify-center">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Sort by Price</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Sort by Name</Button>
    </div>
    <div className="flex flex-wrap justify-center">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Previous Page</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Next Page</Button>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Product Recommendations</h2>
    <p className="text-gray-600 leading-relaxed">Based on your browsing history, we recommend the following products 🤔</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Recommended Product 1</h3>
        <p className="text-gray-600 leading-relaxed">Description of recommended product 1 📚</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Details</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Recommended Product 2</h3>
        <p className="text-gray-600 leading-relaxed">Description of recommended product 2 📊</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Details</Button>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <h3 className="text-xl font-semibold">Recommended Product 3</h3>
        <p className="text-gray-600 leading-relaxed">Description of recommended product 3 📈</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">View Details</Button>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">Call to Action</h2>
    <p className="text-gray-600 leading-relaxed">Ready to start shopping? 🛍️</p>
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Start Shopping</Button>
  </section>
</div>
    </Layout>
  )
}
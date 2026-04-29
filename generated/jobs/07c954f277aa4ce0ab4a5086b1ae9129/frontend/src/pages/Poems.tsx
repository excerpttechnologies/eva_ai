import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Poems() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 h-[520px] relative">
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ಕಾ಄ು ಾಕಿುಲು" className="w-full h-[520px] object-cover absolute inset-0" />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white">ಕಾಅು ಾಕಿುಲು</h1>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">ಕವಿತೆಗಳು</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="ಕವಿತೆ 1" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">ಕವಿತೆ 1</h3>
        <p className="text-gray-600 leading-relaxed mt-2">ಕವಿತೆಯ ವಿವರಣೆ...</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">ಕವಿತೆ</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="ಕವಿತೆ 2" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">ಕವಿತೆ 2</h3>
        <p className="text-gray-600 leading-relaxed mt-2">ಕವಿತೆಯ ವಿವರಣೆ...</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">ಕವಿತೆ</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="ಕವಿತೆ 3" className="w-full h-64 object-cover rounded-2xl" />
        <h3 className="text-xl font-semibold text-gray-900 mt-4">ಕವಿತೆ 3</h3>
        <p className="text-gray-600 leading-relaxed mt-2">ಕವಿತೆಯ ವಿವರಣೆ...</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700 mt-4">ಕವಿತೆ</Badge>
      </Card>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">ಕವಿತೆಗಳ ವಿಭಾಗಗಳು</h2>
    <div className="flex flex-wrap justify-center mt-6">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mx-2 mt-2">ಪ್ರೀತಿ</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mx-2 mt-2">ಸ್ನೇಹ</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mx-2 mt-2">ಕುಟುಂಬ</Button>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">ಕವಿತೆಗಳ ಹುಡುಕಾಟ</h2>
    <Input label="ಹುಡುಕಿ" placeholder="ಕವಿತೆಯ ಹೆಸರು" type="search" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mt-4" />
    <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4">ಹುಡುಕಿ</Button>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">ಕವಿತೆಗಳ ವಿವರಣೆ</h2>
    <p className="text-gray-600 leading-relaxed mt-4">ಕವಿತೆಗಳ ವಿವರಣೆ...</p>
    <div className="flex flex-wrap justify-center mt-6">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mx-2 mt-2">ಓದಿ</Button>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mx-2 mt-2">ಡೌನ್ಲೋಡ್</Button>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold text-gray-900">ಕವಿತೆಗಳ ಸಂಪರ್ಕ</h2>
    <p className="text-gray-600 leading-relaxed mt-4">ಕವಿತೆಗಳ ಸಂಪರ್ಕ...</p>
    <div className="flex flex-wrap justify-center mt-6">
      <Link to="/about" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mx-2 mt-2">ನಮ್ಮ ಬಗ್ಗೆ</Link>
      <Link to="/contact" className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mx-2 mt-2">ಸಂಪರ್ಕಿಸಿ</Link>
    </div>
  </section>
</div>
    </Layout>
  )
}
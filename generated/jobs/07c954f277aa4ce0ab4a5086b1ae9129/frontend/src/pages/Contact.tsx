import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Contact() {
  return (
    <Layout>
      <div className="container max-w-7xl mx-auto py-20 px-6">
  <section className="flex flex-wrap justify-center mb-20">
    <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">ಸಂಪರ್ಕಿಸಿ</h2>
      <form>
        <Input label="ಹೆಸರು" placeholder="ನಿಮ್ಮ ಹೆಸರನ್ನು ಪ್ರವೇಶಿಸಿ" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-4" />
        <Input label="ಇಮೇಲ್" placeholder="ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಪ್ರವೇಶಿಸಿ" type="email" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-4" />
        <Input label="ವಿಷಯ" placeholder="ನಿಮ್ಮ ಸಂದೇಶದ ವಿಷಯವನ್ನು ಪ್ರವೇಶಿಸಿ" type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-4" />
        <Input label="ಸಂದೇಶ" placeholder="ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಪ್ರವೇಶಿಸಿ" type="textarea" className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none mb-4" />
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">ಸಂಪರ್ಕಿಸಿ</Button>
      </form>
    </div>
    <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">ಸಂಪರ್ಕ ಮಾಹಿತಿ</h2>
      <p className="text-gray-600 leading-relaxed mb-4">ನಮ್ಮ ಕಛೇರಿಗೆ ಭೇಟಿ ನೀಡಿ</p>
      <p className="text-gray-600 leading-relaxed mb-4">ವಿಳಾಸ: ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ, ಭಾರತ</p>
      <p className="text-gray-600 leading-relaxed mb-4">ದೂರವಾಣಿ: 080-12345678</p>
      <p className="text-gray-600 leading-relaxed mb-4">ಇಮೇಲ್: <a href="mailto:info@kaagilu.com" className="text-indigo-600 hover:text-indigo-700 transition-all duration-200">info@kaagilu.com</a></p>
      <p className="text-gray-600 leading-relaxed mb-4">ಗಂಟೆಗಳು: ಸೋಮವಾರ - ಶನಿವಾರ, 10am - 6pm</p>
      <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="ನಕ್ಷೆ" className="w-full h-64 object-cover rounded-2xl mb-4" />
    </div>
  </section>
  <section className="flex flex-wrap justify-center mb-20">
    <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">ನಮ್ಮ ತಂಡ</h2>
      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="ತಂಡ ಸದಸ್ಯ" className="w-full h-64 object-cover rounded-2xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">ಜಾನ್ ಡೋಯ್</h3>
          <p className="text-gray-600 leading-relaxed mb-4">ಸಂಸ್ಥಾಪಕ ಮತ್ತು ಸಿಇಒ</p>
        </div>
        <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="ತಂಡ ಸದಸ್ಯ" className="w-full h-64 object-cover rounded-2xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">ಜೇನ್ ಡೋಯ್</h3>
          <p className="text-gray-600 leading-relaxed mb-4">ಸಿಒಒ ಮತ್ತು ಸಹ-ಸಂಸ್ಥಾಪಕ</p>
        </div>
        <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="ತಂಡ ಸದಸ್ಯ" className="w-full h-64 object-cover rounded-2xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">ಬಾಬ್ ಸ್ಮಿತ್</h3>
          <p className="text-gray-600 leading-relaxed mb-4">ಸಿಟಿಒ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಅಧಿಕಾರಿ</p>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 xl:w-1/2 p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">ನಮ್ಮ ಉತ್ಪನ್ನಗಳು</h2>
      <div className="flex flex-wrap justify-center mb-4">
        <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
          <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="ಉತ್ಪನ್ನ" className="w-full h-64 object-cover rounded-2xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">ಉತ್ಪನ್ನ 1</h3>
          <p className="text-gray-600 leading-relaxed mb-4">ಉತ್ಪನ್ನ 1 ವಿವರಣೆ</p>
        </div>
        <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
          <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" alt="ಉತ್ಪನ್ನ" className="w-full h-64 object-cover rounded-2xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">ಉತ್ಪನ್ನ 2</h3>
          <p className="text-gray-600 leading-relaxed mb-4">ಉತ್ಪನ್ನ 2 ವಿವರಣೆ</p>
        </div>
        <div className="w-full lg:w-1/3 xl:w-1/3 p-6">
          <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80" alt="ಉತ್ಪನ್ನ" className="w-full h-64 object-cover rounded-2xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-900 mb-2">ಉತ್ಪನ್ನ 3</h3>
          <p className="text-gray-600 leading-relaxed mb-4">ಉತ್ಪನ್ನ 3 ವಿವರಣೆ</p>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
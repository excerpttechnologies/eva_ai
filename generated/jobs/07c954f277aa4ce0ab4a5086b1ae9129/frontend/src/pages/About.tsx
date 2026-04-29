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
      <div className="container max-w-7xl mx-auto">
  <section className="py-20 px-6">
    <h1 className="text-4xl font-bold text-gray-900">ಕಾರು ಕವಿಗಳು</h1>
    <p className="text-gray-600 leading-relaxed">ಕಾರು ಕವಿಗಳು ಕನ್ನಡ ಸಾಹಿತ್ಯದಲ್ಲಿ ಪ್ರಮುಖ ಪಾತ್ರ ವಹಿಸಿದ್ದಾರೆ. ಅವರ ಕವಿತೆಗಳು ಜೀವನದ ವಿವಿಧ ಅಂಶಗಳನ್ನು ಒಳಗೊಂಡಿವೆ.</p>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">ಜೀವನ ಚರಿತ್ರೆ</h2>
    <p className="text-gray-600 leading-relaxed">ಕಾರು ಕವಿಗಳು ಜನಿಸಿದ್ದು ಕರ್ನಾಟಕದಲ್ಲಿ. ಅವರು ತಮ್ಮ ಶಿಕ್ಷಣವನ್ನು ಪೂರ್ಣಗೊಳಿಸಿದ ನಂತರ ಸಾಹಿತ್ಯದಲ್ಲಿ ಆಸಕ್ತಿ ಹೊಂದಿದ್ದರು.</p>
    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="ಕಾರು ಕವಿಗಳು" className="w-full h-64 object-cover rounded-2xl" />
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">ಪ್ರಶಸ್ತಿಗಳು ಮತ್ತು ಪ್ರಕಟಣೆಗಳು</h2>
    <p className="text-gray-600 leading-relaxed">ಕಾರು ಕವಿಗಳು ಅನೇಕ ಪ್ರಶಸ್ತಿಗಳನ್ನು ಪಡೆದಿದ್ದಾರೆ. ಅವರ ಕೆಲಸವನ್ನು ವಿವಿಧ ಪತ್ರಿಕೆಗಳು ಮತ್ತು ನಿಯತಕಾಲಿಕಗಳಲ್ಲಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ.</p>
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">ಪ್ರಶಸ್ತಿ 1</h3>
          <p className="text-gray-600 leading-relaxed">ಕಾರು ಕವಿಗಳು ಈ ಪ್ರಶಸ್ತಿಯನ್ನು ಪಡೆದಿದ್ದಾರೆ.</p>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">ಪ್ರಶಸ್ತಿ 2</h3>
          <p className="text-gray-600 leading-relaxed">ಕಾರು ಕವಿಗಳು ಈ ಪ್ರಶಸ್ತಿಯನ್ನು ಪಡೆದಿದ್ದಾರೆ.</p>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">ಪ್ರಶಸ್ತಿ 3</h3>
          <p className="text-gray-600 leading-relaxed">ಕಾರು ಕವಿಗಳು ಈ ಪ್ರಶಸ್ತಿಯನ್ನು ಪಡೆದಿದ್ದಾರೆ.</p>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">ತಂಡ</h2>
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="ಸದಸ್ಯ 1" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold">ಸದಸ್ಯ 1</h3>
          <p className="text-gray-600 leading-relaxed">ಸದಸ್ಯ 1 ರ ಬಗ್ಗೆ ಮಾಹಿತಿ.</p>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" alt="ಸದಸ್ಯ 2" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold">ಸದಸ್ಯ 2</h3>
          <p className="text-gray-600 leading-relaxed">ಸದಸ್ಯ 2 ರ ಬಗ್ಗೆ ಮಾಹಿತಿ.</p>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" alt="ಸದಸ್ಯ 3" className="w-full h-64 object-cover rounded-2xl" />
          <h3 className="text-xl font-semibold">ಸದಸ್ಯ 3</h3>
          <p className="text-gray-600 leading-relaxed">ಸದಸ್ಯ 3 ರ ಬಗ್ಗೆ ಮಾಹಿತಿ.</p>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">ಅಂಕಿಅಂಶಗಳು</h2>
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">ಅಂಕಿಅಂಶ 1</h3>
          <p className="text-gray-600 leading-relaxed">ಅಂಕಿಅಂಶ 1 ರ ಬಗ್ಗೆ ಮಾಹಿತಿ.</p>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">ಅಂಕಿಅಂಶ 2</h3>
          <p className="text-gray-600 leading-relaxed">ಅಂಕಿಅಂಶ 2 ರ ಬಗ್ಗೆ ಮಾಹಿತಿ.</p>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">ಅಂಕಿಅಂಶ 3</h3>
          <p className="text-gray-600 leading-relaxed">ಅಂಕಿಅಂಶ 3 ರ ಬಗ್ಗೆ ಮಾಹಿತಿ.</p>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">ಕಾಲಕ್ರಮ</h2>
    <div className="flex flex-wrap justify-center">
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">ಮೈಲಿಗಲ್ಲು 1</h3>
          <p className="text-gray-600 leading-relaxed">ಮೈಲಿಗಲ್ಲು 1 ರ ಬಗ್ಗೆ ಮಾಹಿತಿ.</p>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">ಮೈಲಿಗಲ್ಲು 2</h3>
          <p className="text-gray-600 leading-relaxed">ಮೈಲಿಗಲ್ಲು 2 ರ ಬಗ್ಗೆ ಮಾಹಿತಿ.</p>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-6">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">ಮೈಲಿಗಲ್ಲು 3</h3>
          <p className="text-gray-600 leading-relaxed">ಮೈಲಿಗಲ್ಲು 3 ರ ಬಗ್ಗೆ ಮಾಹಿತಿ.</p>
        </Card>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
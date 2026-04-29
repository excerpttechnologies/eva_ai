import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Dashboard() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-100">
  <header className="bg-white py-4">
    <div className="container mx-auto px-6 flex justify-between items-center">
      <h1 className="text-4xl font-bold text-gray-900">ಕಾ಄ು ಾಕಿುಲು</h1>
      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" alt="User Avatar" className="w-12 h-12 rounded-full" />
    </div>
  </header>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">ಕೆಪಿಐ ಕಾರ್ಡ್ಸ್</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Card Image" className="w-full h-64 object-cover rounded-2xl" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold">ಪ್ರಕಟಣೆಗಳು</h3>
              <p className="text-gray-600 leading-relaxed">10</p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+20%</Badge>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80" alt="Card Image" className="w-full h-64 object-cover rounded-2xl" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold">ಓದುಗರು</h3>
              <p className="text-gray-600 leading-relaxed">50</p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+10%</Badge>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80" alt="Card Image" className="w-full h-64 object-cover rounded-2xl" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold">ಕವನಗಳು</h3>
              <p className="text-gray-600 leading-relaxed">20</p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+5%</Badge>
            </div>
          </div>
        </Card>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/4 p-4">
        <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="Card Image" className="w-full h-64 object-cover rounded-2xl" />
            <div className="ml-4">
              <h3 className="text-xl font-semibold">ಪ್ರಶಸ್ತಿಗಳು</h3>
              <p className="text-gray-600 leading-relaxed">5</p>
              <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">+2%</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">ಮುಖ್ಯ ಚಾರ್ಟ್</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="ml-4">
              <h3 className="text-xl font-semibold">ಓದುಗರ ಪ್ರಮಾಣ</h3>
              <p className="text-gray-600 leading-relaxed">50%</p>
            </div>
            <div className="ml-4">
              <div style={{ height: '75%' }} className="bg-indigo-600 w-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="ml-4">
              <h3 className="text-xl font-semibold">ಕವನಗಳ ಪ್ರಮಾಣ</h3>
              <p className="text-gray-600 leading-relaxed">20%</p>
            </div>
            <div className="ml-4">
              <div style={{ height: '40%' }} className="bg-indigo-600 w-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">ಚಟುವಟಿಕೆಗಳು</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <table className="w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">ದಿನಾಂಕ</th>
                <th className="px-4 py-2">ಚಟುವಟಿಕೆ</th>
                <th className="px-4 py-2">ಮಾಹಿತಿ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">2022-01-01</td>
                <td className="px-4 py-2">ಕವನ ಪ್ರಕಟಣೆ</td>
                <td className="px-4 py-2">ಕವನ 1</td>
              </tr>
              <tr>
                <td className="px-4 py-2">2022-01-15</td>
                <td className="px-4 py-2">ಓದುಗರ ಪ್ರತಿಕ್ರಿಯೆ</td>
                <td className="px-4 py-2">ಓದುಗರು 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold">ಶೀಘ್ರ ಕ್ರಿಯೆಗಳು</h3>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">ಕವನ ಪ್ರಕಟಿಸಿ</Button>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">ಓದುಗರನ್ನು ಸೇರಿಸಿ</Button>
        </div>
      </div>
    </div>
  </section>
  <section className="py-20 px-6">
    <h2 className="text-3xl font-bold">ಪ್ರಗತಿ ಪಟ್ಟಿಗಳು</h2>
    <div className="flex flex-wrap justify-center -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="ml-4">
              <h3 className="text-xl font-semibold">ಕವನ ಪ್ರಕಟಣೆಯ ಪ್ರಗತಿ</h3>
              <p className="text-gray-600 leading-relaxed">50%</p>
            </div>
            <div className="ml-4">
              <div style={{ height: '75%' }} className="bg-indigo-600 w-4"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/2 p-4">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex items-center">
            <div className="ml-4">
              <h3 className="text-xl font-semibold">ಓದುಗರ ಪ್ರಗತಿ</h3>
              <p className="text-gray-600 leading-relaxed">20%</p>
            </div>
            <div className="ml-4">
              <div style={{ height: '40%' }} className="bg-indigo-600 w-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
    </Layout>
  )
}
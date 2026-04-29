import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Input from '../components/ui/Input'

export default function Booking() {
  return (
    <Layout>
      <div className="gradient-hero-banner relative h-screen">
  <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80" alt="RideFlow Hero" className="w-full h-[520px] object-cover absolute inset-0" />
  <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <h1 className="text-4xl font-bold text-white">Book Your Ride with RideFlow 🚴‍♀️</h1>
  </div>
</div>

<section className="main-content py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Bike 🚴</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Mountain Bike" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold">Mountain Bike</h3>
        <p className="text-gray-600 leading-relaxed">Perfect for off-road adventures</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">From $20/day</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80" alt="City Bike" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold">City Bike</h3>
        <p className="text-gray-600 leading-relaxed">Ideal for urban commuting</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">From $15/day</Badge>
      </Card>
      <Card className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=600&q=80" alt="Electric Bike" className="w-full h-64 object-cover rounded-2xl mb-4" />
        <h3 className="text-xl font-semibold">Electric Bike</h3>
        <p className="text-gray-600 leading-relaxed">Eco-friendly and efficient</p>
        <Badge className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-700">From $25/day</Badge>
      </Card>
    </div>
  </div>
</section>

<section className="action-area py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Details 📅</h2>
    <form>
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="w-full md:w-1/2 md:pr-4 mb-6 md:mb-0">
          <Input label="Pickup Date" placeholder="YYYY-MM-DD" type="date" />
        </div>
        <div className="w-full md:w-1/2 md:pl-4">
          <Input label="Return Date" placeholder="YYYY-MM-DD" type="date" />
        </div>
      </div>
      <div className="mb-6">
        <Input label="Time Slot" placeholder="Select Time" type="time" />
      </div>
      <div className="flex justify-between mb-6">
        <div className="w-1/2 pr-4">
          <select className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none">
            <option>Bike Type</option>
            <option>Mountain Bike</option>
            <option>City Bike</option>
            <option>Electric Bike</option>
          </select>
        </div>
        <div className="w-1/2 pl-4">
          <Input label="Promo Code (Optional)" placeholder="CODE123" type="text" />
        </div>
      </div>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Book Now 🚀</Button>
    </form>
  </div>
</section>

<section className="cta-section py-20 px-6">
  <div className="container max-w-7xl mx-auto">
    <div className="flex flex-col items-center mb-4">
      <h3 className="text-xl font-semibold text-gray-900">Have Questions? 🤔</h3>
      <Accordion>
        <div className="accordion-item">
          <div className="accordion-header">What's the cancellation policy?</div>
          <div className="accordion-content">You can cancel up to 24 hours before pickup for a full refund.</div>
        </div>
        <div className="accordion-item">
          <div className="accordion-header">Do you offer bike insurance?</div>
          <div className="accordion-content">Yes, optional insurance is available for $5/day.</div>
        </div>
      </Accordion>
    </div>
    <div className="text-center">
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200" onClick={() => showModal("paymentProcessing")}>Payment Processing Demo 🛍️</Button>
      <Modal id="paymentProcessing" title="Payment Processing">
        <p>Payment processing demo. Please do not enter real payment details.</p>
        <form>
          <Input label="Card Number" placeholder="1234-5678-9012-3456" type="text" />
          <div className="flex justify-between">
            <Input label="Expiry" placeholder="MM/YYYY" type="text" className="w-1/2 pr-2" />
            <Input label="CVV" placeholder="123" type="text" className="w-1/2 pl-2" />
          </div>
          <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">Pay Now</Button>
        </form>
      </Modal>
      <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 mt-4" onClick={() => showModal("bookingConfirmation")}>Booking Confirmation Demo 📣</Button>
      <Modal id="bookingConfirmation" title="Booking Confirmation">
        <p>Your booking has been successfully confirmed!</p>
        <p>Booking ID: #RF12345</p>
        <Button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200">OK</Button>
      </Modal>
    </div>
  </div>
</section>
    </Layout>
  )
}
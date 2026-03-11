import React from 'react';

const OrderTrack = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid-cols-3 grid gap-8 container mx-auto">
        <h1 className="text-4xl font-bold text-center">Order Track</h1>
        <p className="text-gray-700 text-center">Track your orders with ease.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-xl shadow-md md:col-span-2">Get Started</button>
      </header>

      <section className="py-20 px-6 bg-white shadow-md rounded-xl grid gap-8 container mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md md:col-span-3">
            <h2 className="text-2xl font-bold mb-4">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="py-20 px-6 bg-white shadow-md rounded-xl container mx-auto">
        <h2 className="text-3xl font-bold text-center py-8">Call To Action</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-8 rounded-full shadow-md md:col-span-2">Place Your Order Now</button>
      </section>

      <footer className="py-16 bg-gray-100 container mx-auto">
        <p>© 2023 OrderTrack. All rights reserved.</p>
      </footer>
    </div>
  );
};

const features = [
  {
    title: 'Fast Delivery',
    description: 'Your order will be delivered within 24 hours.',
  },
  {
    title: 'Secure Payment',
    description: 'Pay with confidence using our secure payment methods.',
  },
  {
    title: 'Customer Support',
    description: 'Get help whenever you need it from our customer support team.',
  },
];

export default OrderTrack;
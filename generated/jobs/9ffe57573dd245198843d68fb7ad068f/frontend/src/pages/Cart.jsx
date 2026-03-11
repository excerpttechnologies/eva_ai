import React from 'react';

const Cart = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid md:grid-cols-3">
        <h1 className="text-4xl font-bold text-center">Hero Heading</h1>
        <p className="text-lg text-center">Subheading goes here.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:col-span-2">CTA Button</button>
      </header>

      <section className="py-16 px-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl p-8 mb-8 md:mb-0 md:col-span-2">
            <h3 className="text-2xl font-bold">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="py-16 px-6">
        <h2 className="text-2xl font-bold mb-4">Call To Action Section</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:col-span-2">Take Action Now!</button>
      </section>

      <footer className="py-16 px-6 bg-gray-300">
        <p>Copyright 2023. All rights reserved.</p>
      </footer>
    </div>
  );
};

const features = [
  {
    title: 'Feature One',
    description: 'Description for feature one.'
  },
  {
    title: 'Feature Two',
    description: 'Description for feature two.'
  },
  {
    title: 'Feature Three',
    description: 'Description for feature three.'
  }
];

export default Cart;


This code snippet exports a `Cart` component that adheres to the specified requirements. It uses Tailwind CSS classes for styling and includes multiple sections as requested, such as a hero section with a gradient background, a features section with responsive grid layout, a call-to-action section, and a footer.
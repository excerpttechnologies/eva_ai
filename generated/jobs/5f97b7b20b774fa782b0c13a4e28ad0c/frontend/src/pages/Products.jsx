import React from 'react';

const Products = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-t-xl md:rounded-none md:shadow-none">
        <h1 className="text-4xl font-bold text-center">Hero Section</h1>
        <p className="text-lg text-center mt-4">Subheading</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-6" role="button">
          CTA Button
        </button>
      </header>

      <section className="py-10 px-6 grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="py-10 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Call To Action Section</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" role="button">
          Bold Message
        </button>
      </section>

      <footer className="py-10 px-6 text-center">Footer Section</footer>
    </div>
  );
};

const features = [
  {
    title: 'Feature 1',
    description: 'Description for Feature 1'
  },
  {
    title: 'Feature 2',
    description: 'Description for Feature 2'
  },
  {
    title: 'Feature 3',
    description: 'Description for Feature 3'
  }
];

export default Products;


This code snippet defines a `Products` component that adheres to the specified requirements using React, Tailwind CSS, and modern SaaS design principles.
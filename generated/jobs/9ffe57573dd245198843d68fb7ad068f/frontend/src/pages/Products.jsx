import React from 'react';

const Products = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <h1 className="text-4xl font-bold">Product Hero</h1>
        <p className="mt-4 text-lg">Subheading for the hero section.</p>
        <button className="bg-white text-gray-800 px-6 py-3 rounded-xl mt-6 shadow-md hover:shadow-lg">CTA Button</button>
      </section>

      {/* Features Section */}
      <section className="py-20 grid md:grid-cols-3 gap-6">
        {[
          {
            title: 'Feature 1',
            description: 'Description for feature 1.',
          },
          {
            title: 'Feature 2',
            description: 'Description for feature 2.',
          },
          {
            title: 'Feature 3',
            description: 'Description for feature 3.',
          },
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
            <h2 className="text-lg font-bold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

      {/* Call To Action Section */}
      <section className="py-20 text-center">
        <h1 className="text-3xl font-bold">Call to Action</h1>
        <button className="bg-blue-500 px-6 py-3 rounded-xl mt-6 shadow-md hover:shadow-lg">Get Started</button>
      </section>

      {/* Footer Section */}
      <footer className="py-20 text-center">
        <p>Copyright © 2023. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Products;

This code snippet adheres to the provided requirements and design rules, using Tailwind CSS for styling and React's functional component structure.
import React from 'react';
import { Container, Grid } from '@tailwindcss/components';

const PremiumFeatures = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 px-6 container mx-auto">
      {/* Hero Section */}
      <section>
        <h1 className="text-white text-4xl font-bold">Premium Features</h1>
        <p className="text-gray-300 mt-2">Unlock advanced capabilities with our premium features.</p>
        <button type="button" className="bg-white text-blue-500 hover:bg-gray-100 py-2 px-4 rounded-xl mt-6">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section className="md:grid md:grid-cols-3 grid-cols-1 gap-6 mt-10">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Call To Action Section */}
      <section className="mt-10 text-white">
        <h2 className="text-3xl font-bold">Boost Your Productivity</h2>
        <button type="button" className="bg-blue-500 hover:bg-gray-700 text-white py-2 px-4 rounded-xl mt-6">Upgrade Now</button>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-gray-300 mt-10">
        © 2023 Premium Features. All rights reserved.
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

export default PremiumFeatures;

Note: The `features` array is a placeholder and should be replaced with actual data or fetched dynamically.
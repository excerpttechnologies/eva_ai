import React from 'react';

const FeatureTours = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 container mx-auto text-white">
        <h1 className="text-4xl font-bold">Hero Section</h1>
        <p className="mt-4 text-lg">Subheading</p>
        <button className="bg-white text-blue-500 py-3 px-8 rounded-xl mt-6 shadow-md hover:shadow-lg transition duration-200">CTA Button</button>
      </header>

      <section className="py-20 px-6 container mx-auto grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-md flex items-center justify-between text-gray-900">
            <h2 className="text-2xl font-bold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      <section className="py-20 px-6 container mx-auto flex items-center justify-between text-gray-900">
        <strong>Call To Action Section</strong>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-md">Action Button</button>
      </section>

      <footer className="py-20 px-6 container mx-auto">
        <p>Copyright © 2023. All rights reserved.</p>
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

export default FeatureTours;
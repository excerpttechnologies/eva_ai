import React from 'react';

const Catalog = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="container mx-auto py-20 px-6 md:py-32 md:px-14">
        <h1 className="text-white text-4xl font-bold">Hero Section</h1>
        <p className="mt-4 text-gray-300">Subheading</p>
        <button className="bg-white text-black px-6 py-3 rounded-xl mt-8 shadow-lg">CTA Button</button>
      </header>

      <section className="container mx-auto md:grid md:grid-cols-3">
        {[
          {
            title: 'Feature 1',
            description: 'Description for feature 1'
          },
          {
            title: 'Feature 2',
            description: 'Description for feature 2'
          },
          {
            title: 'Feature 3',
            description: 'Description for feature 3'
          }
        ].map((feature, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md md:col-span-1"
          >
            <h2 className="text-lg font-bold mb-4">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}

      </section>

      <section className="container mx-auto py-20 px-6 md:py-32 md:px-14">
        <h2 className="text-white text-2xl font-bold mb-8">Call To Action Section</h2>
        <button className="bg-black text-white px-6 py-3 rounded-xl shadow-lg">Take Action</button>
      </section>

      <footer className="container mx-auto md:px-14">
        <p>Copyright © 2023. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Catalog;
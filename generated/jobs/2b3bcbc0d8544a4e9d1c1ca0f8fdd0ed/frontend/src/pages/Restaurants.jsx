import React from 'react';

const Restaurants = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid md:grid-cols-3">
        <h1 className="text-4xl font-bold text-center">Hero Section</h1>
        <p className="text-gray-700 text-center">Subheading</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:col-span-3">CTA Button</button>
      </header>

      <section className="py-16 px-6">
        <h2 className="text-2xl font-semibold mb-8">Features Section</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white p-6 shadow-md rounded-xl flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Feature Title</h3>
              <p className="text-gray-700 text-sm">{`Description of feature ${index + 1}`}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <h2 className="text-2xl font-semibold mb-8">Call To Action Section</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:col-span-3">Bold Message</button>
      </section>

      <footer className="py-16 px-6">
        <p className="text-gray-700 text-center">Footer Section</p>
      </footer>
    </div>
  );
};

export default Restaurants;
import React from 'react';

const News = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid-cols-3 grid gap-8">
        <h1 className="text-4xl font-bold text-center">Hero Section</h1>
        <p className="text-gray-700 text-center">Subheading</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-8 rounded-full shadow-md md:col-span-2" type="button">
          CTA Button
        </button>
      </header>

      <section className="py-16 px-6 bg-white shadow-md rounded-xl grid gap-8 md:grid-cols-3 grid-cols-1">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="bg-gray-50 p-4 flex items-center justify-between rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">Feature Title</h2>
            <p className="text-gray-700 text-sm">{`Description of feature ${i + 1}`}</p>
          </div>
        ))}
      </section>

      <section className="py-16 px-6 bg-white shadow-md rounded-xl grid gap-8 md:grid-cols-3 grid-cols-1">
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-8 rounded-full shadow-md" type="button">
          Call To Action Section
        </button>
      </section>

      <footer className="py-16 px-6 bg-gray-50 text-center border-t border-gray-300">
        Copyright © 2023. All rights reserved.
      </footer>
    </div>
  );
};

export default News;
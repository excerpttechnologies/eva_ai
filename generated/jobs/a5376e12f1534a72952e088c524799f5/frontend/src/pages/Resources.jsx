import React from 'react';

const Resources = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-t-xl md:rounded-none md:shadow-none">
        <h1 className="text-4xl font-bold text-center">Hero Section</h1>
        <p className="text-lg text-center py-4">Subheading</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:col-span-3">CTA Button</button>
      </header>

      <section className="py-16 px-6">
        <h2 className="text-2xl font-semibold mb-8">Features Section</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between mb-8">
              <h3 className="text-lg font-semibold">Feature Title</h3>
              <p className="text-gray-700 text-sm">{`Description of feature ${index + 1}`}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="py-8 px-6 bg-white shadow-md rounded-b-xl md:rounded-none">
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Simple link 1</li>
          <li>Simple link 2</li>
          <li>Simple link 3</li>
        </ul>
      </footer>
    </div>
  );
};

export default Resources;
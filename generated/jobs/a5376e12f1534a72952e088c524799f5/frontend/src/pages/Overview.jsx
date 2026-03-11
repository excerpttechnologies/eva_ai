import React from 'react';

const Overview = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid-cols-3 grid gap-8">
        <h1 className="text-4xl font-bold text-center">Hero Section</h1>
        <p className="text-lg text-center">Subheading</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-md md:col-span-3 col-span-1">CTA Button</button>
      </header>

      <section className="py-20 px-6 bg-white shadow-md rounded-xl grid gap-8">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i} className="bg-gray-50 p-6 flex items-center justify-between rounded-lg shadow-md md:w-full w-full">
            <h2 className="text-xl font-bold">Feature Title</h2>
            <p className="text-base text-gray-700">{`Description of feature ${i + 1}`}</p>
          </div>
        ))}
      </section>

      <footer className="py-20 px-6 bg-white shadow-md rounded-xl">
        <a href="#" className="block py-4 px-6 text-blue-500 hover:text-blue-700">Link 1</a>
        <a href="#" className="block py-4 px-6 text-blue-500 hover:text-blue-700">Link 2</a>
      </footer>
    </div>
  );
};

export default Overview;
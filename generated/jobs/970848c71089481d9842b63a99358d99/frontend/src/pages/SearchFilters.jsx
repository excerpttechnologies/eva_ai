import React from 'react';

const SearchFilters = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid md:grid-cols-3">
        <h1 className="text-4xl font-bold text-center">Hero Heading</h1>
        <p className="text-gray-700 text-center">Subheading Text Here</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:col-span-3">CTA Button</button>
      </header>

      <section className="py-16 px-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-xl md:col-span-1 p-6 md:p-0 md:mt-0 ${index % 2 === 0 ? 'md:col-start-2' : ''}`}
          >
            <h2 className="text-2xl font-bold mb-4">Feature Title {index + 1}</h2>
            <p className="text-gray-700">{`Description for feature ${index + 1}`}</p>
          </div>
        ))}
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Call To Action Section</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full md:col-span-3">Bold Message Button</button>
      </section>

      <footer className="py-16 px-6">
        <p>Copyright Text or Links Here</p>
      </footer>
    </div>
  );
};

export default SearchFilters;
import React from 'react';

const ProductCatalog = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-t-xl md:grid md:grid-cols-3">
        <h1 className="text-4xl font-bold text-center">Hero Section</h1>
        <p className="text-lg text-center">Subheading goes here.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full mt-auto w-full md:w-auto">CTA Button</button>
      </header>

      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Features Section</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="font-semibold text-xl mb-4">Feature 1 Title</h3>
            <p className="text-gray-700">Description of Feature 1.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="font-semibold text-xl mb-4">Feature 2 Title</h3>
            <p className="text-gray-700">Description of Feature 2.</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h3 className="font-semibold text-xl mb-4">Feature 3 Title</h3>
            <p className="text-gray-700">Description of Feature 3.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Call To Action Section</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-4 px-8 rounded-full w-full md:w-auto">Bold Message</button>
      </section>

      <footer className="py-16 px-6 bg-gray-100">
        <p>Copyright © 2023. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ProductCatalog;
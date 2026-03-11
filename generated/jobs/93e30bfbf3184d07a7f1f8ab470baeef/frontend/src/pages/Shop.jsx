```jsx
import React from 'react';

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold">Shop</h1>
      </header>

      {/* Main Content */}
      <main className="flex-auto px-6 py-8 flex justify-center items-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <p className="text-xl font-semibold mb-4">Welcome to the Shop</p>
          <p className="text-gray-700 leading-relaxed mb-6">Explore our products and services.</p>

          {/* Product Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Product 1</h3>
              <p className="text-gray-700">Description of Product 1.</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Product 2</h3>
              <p className="text-gray-700">Description of Product 2.</p>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-auto text-center text-gray-500">
            &copy; 2023 Shop. All rights reserved.
          </footer>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 flex justify-between items-center w-full">
        <p>Footer Content</p>
        <button className="text-white bg-blue-500 px-4 py-2 rounded-md">Contact Us</button>
      </footer>
    </div>
  );
};

export default Shop;
```
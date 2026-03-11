```jsx
import React from 'react';

const Pricing = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      <header className="px-4 py-6 bg-blue-500 text-white flex items-center justify-between">
        <h1 className="text-xl font-bold">Pricing</h1>
        <nav className="flex space-x-2">
          <a href="#" className="p-2 rounded hover:bg-gray-300">Plan 1</a>
          <a href="#" className="p-2 rounded hover:bg-gray-300">Plan 2</a>
          <a href="#" className="p-2 rounded hover:bg-gray-300">Plan 3</a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-between p-4">
        <section className="bg-white shadow-md rounded px-6 py-8 mb-10">
          <h2 className="text-xl font-bold text-gray-700">Plan 1</h2>
          <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex items-center mt-4 space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Subscribe</button>
            <span className="text-gray-500">or</span>
            <a href="#" className="text-blue-600 hover:underline">Learn More</a>
          </div>
        </section>

        <section className="bg-white shadow-md rounded px-6 py-8 mb-10">
          <h2 className="text-xl font-bold text-gray-700">Plan 2</h2>
          <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex items-center mt-4 space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Subscribe</button>
            <span className="text-gray-500">or</span>
            <a href="#" className="text-blue-600 hover:underline">Learn More</a>
          </div>
        </section>

        <section className="bg-white shadow-md rounded px-6 py-8 mb-10">
          <h2 className="text-xl font-bold text-gray-700">Plan 3</h2>
          <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex items-center mt-4 space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Subscribe</button>
            <span className="text-gray-500">or</span>
            <a href="#" className="text-blue-600 hover:underline">Learn More</a>
          </div>
        </section>
      </main>

      <footer className="px-4 py-6 bg-blue-500 text-white flex items-center justify-between">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <nav className="flex space-x-2">
          <a href="#" className="p-2 rounded hover:bg-gray-300">Privacy Policy</a>
          <a href="#" className="p-2 rounded hover:bg-gray-300">Terms of Service</a>
        </nav>
      </footer>
    </div>
  );
};

export default Pricing;
```
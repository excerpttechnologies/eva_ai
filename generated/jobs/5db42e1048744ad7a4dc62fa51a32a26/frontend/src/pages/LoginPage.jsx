import React from 'react';
import { Container, Grid } from '@tailwindcss/forms';

const LoginPage = () => {
  return (
    <div className="bg-gray-100 py-20 px-6 container mx-auto">
      {/* Hero Section */}
      <section className="mb-14 bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg rounded-xl md:grid-cols-3 grid-cols-1 items-center place-items-center">
        <h1 className="text-6xl font-bold">Welcome Back!</h1>
        <p className="mt-4 text-lg">Let's make your day easier with our services.</p>
        <button className="bg-white text-blue-500 px-8 py-3 rounded-xl shadow-md mt-6 md:col-span-2 col-span-1">Get Started</button>
      </section>

      {/* Features Section */}
      <section className="md:grid grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="bg-white p-8 rounded-xl shadow-md flex items-center justify-between text-gray-700 md:w-1/2 w-full">
            <h2 className="text-2xl font-bold">Feature {index + 1}</h2>
            <p className="mt-4">{`Description of feature ${index + 1}`}</p>
          </div>
        ))}
      </section>

      {/* Call To Action Section */}
      <section className="bg-gray-300 text-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4">Ready to streamline your workflow?</h2>
        <button className="bg-blue-500 px-6 py-3 rounded-full shadow-lg mt-4">Get Started</button>
      </section>

      {/* Footer Section */}
      <footer className="p-8 text-gray-700 bg-gray-100">
        <div>© 2023 Your Company. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default LoginPage;
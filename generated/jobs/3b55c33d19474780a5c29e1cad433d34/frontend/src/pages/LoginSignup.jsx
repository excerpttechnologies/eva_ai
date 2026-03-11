import React from 'react';

const LoginSignup = () => {
  return (
    <div className="container mx-auto py-20 px-6">
      {}
      <section>
        <h1 className="text-4xl font-bold text-center">Welcome to Our Library Management System</h1>
        <p className="text-xl text-center mt-4">Discover a world of knowledge and education resources.</p>
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mt-6">Explore Books</button>
      </section>

      {}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-between space-x-4">
            <div>
              <h2 className="text-xl font-bold">{feature.title}</h2>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      {}
      <section className="mt-16 flex items-center justify-center">
        <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-full w-full">Sign Up Now</button>
      </section>

      {}
      <footer className="mt-16 flex items-center justify-center border-t border-gray-300 p-6">
        <p>&copy; 2023 Library Management System. All rights reserved.</p>
      </footer>
    </div>
  );
};

const features = [
  {
    title: 'User-friendly Interface',
    description: 'Designed with simplicity in mind, making it easy for students and educators to navigate.'
  },
  {
    title: 'Comprehensive Book Catalog',
    description: 'Access a vast collection of books across various subjects and levels.'
  },
  {
    title: 'Secure Login System',
    description: 'Ensure the safety and privacy of your account with our robust authentication process.'
  }
];

export default LoginSignup;


This code snippet provides a production-ready `LoginSignup` component following the specified requirements. It includes a hero section, features grid, call to action button, and footer. The design is clean and modern, adhering to Tailwind CSS styling rules without using any plugins or custom components.
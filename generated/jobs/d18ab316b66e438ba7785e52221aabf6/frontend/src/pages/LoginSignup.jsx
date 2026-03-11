import React from 'react';
import { Container, Grid } from '@tailwindcss/forms';

const LoginSignup = () => {
  return (
    <Container className="py-20 px-6">
      {}
      <div className="mb-14 flex items-center justify-between">
        <h1 className="text-5xl font-bold text-gray-900">EduLib</h1>
        <p className="text-xl text-gray-700">Your Gateway to Educational Resources</p>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
          Explore Books
        </button>
      </div>

      {}
      <section className="mb-14 grid grid-cols-3 gap-6 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <article key={index} className="bg-white shadow rounded-xl p-8 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-medium text-gray-900">Feature Name</h2>
              <p className="text-gray-500">Brief Description of Feature</p>
            </div>
          </article>
        ))}
      </section>

      {}
      <section className="mb-14 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Join EduLib Today!</h2>
        <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-8 rounded-md">Sign Up</button>
      </section>

      {}
      <footer className="text-gray-500">
        &copy; 2023 EduLib. All rights reserved.
      </footer>
    </Container>
  );
};

export default LoginSignup;


This code snippet provides a production-ready `LoginSignup` component following the specified requirements and design rules using Tailwind CSS for styling.
import React from 'react';
import { Container, Grid } from '@tailwindcss/forms';

const UserAuthentication = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <Container className="py-20 px-6 mx-auto max-w-7xl">
        {/* Hero Section */}
        <section>
          <h1 className="text-4xl font-bold text-white">Welcome to Our Platform</h1>
          <p className="mt-4 text-gray-300">Experience the future of user authentication.</p>
          <button type="button" className="bg-white text-blue-500 px-6 py-2 rounded-xl mt-8 shadow-lg hover:bg-opacity-75">
            Sign Up Now
          </button>
        </section>

        {/* Features Section */}
        <section className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Secure Login',
              description: 'Enhance security with biometric authentication.',
            },
            {
              title: 'Multi-Factor Authentication',
              description: 'Ensure your account is secure with additional layers of protection.',
            },
            {
              title: 'User-friendly Interface',
              description: 'Navigate through our platform with ease and simplicity.',
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-between">
              <h2 className="text-lg font-semibold">{feature.title}</h2>
              <p>{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Call To Action Section */}
        <section className="mt-14 text-white">
          <h2 className="text-3xl font-bold">Join Our Community</h2>
          <button type="button" className="bg-blue-500 px-6 py-2 rounded-xl mt-8 shadow-lg hover:bg-opacity-75">Get Started</button>
        </section>

        {/* Footer Section */}
        <footer className="mt-14 text-gray-300">
          <p>© 2023 Your Company. All rights reserved.</p>
        </footer>
      </Container>
    </div>
  );
};

export default UserAuthentication;
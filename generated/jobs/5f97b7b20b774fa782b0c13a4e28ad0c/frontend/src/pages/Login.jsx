import React from 'react';

const Login = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-white shadow-md rounded-xl md:grid md:grid-cols-3 md:gap-6">
        <div>
          <h1 className="text-4xl font-bold">Welcome to Our Platform</h1>
          <p className="text-gray-700 text-lg mt-2">Experience seamless and secure authentication.</p>
          <button type="button" className="bg-blue-500 text-white py-3 px-6 rounded-full mt-4 shadow-md hover:bg-blue-600 transition duration-150 ease-in-out">
            Get Started
          </button>
        </div>
        <div className="md:col-span-2">
          <img src="/hero-section-gradient.png" alt="Hero Section Gradient" className="w-full object-cover rounded-t-xl" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-10 px-6 bg-white shadow-md rounded-xl md:grid md:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="md:col-span-1 p-4 border border-gray-200 rounded-lg flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="text-gray-500 mt-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Call To Action Section */}
      <section className="py-10 px-6 bg-white shadow-md rounded-xl">
        <h2 className="text-3xl font-bold text-center mb-4">Join Our Community</h2>
        <p className="text-gray-700 text-center mb-8">Be part of a community that values security and innovation.</p>
        <button type="button" className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-md hover:bg-blue-600 transition duration-150 ease-in-out w-full">
          Sign Up Now
        </button>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-200 text-center border-t-2 border-gray-300">
        <p>© 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

const features = [
  {
    title: 'Secure Authentication',
    description: 'Ensure your data is protected with our advanced security protocols.',
  },
  {
    title: 'User-Friendly Interface',
    description: 'Our intuitive design makes it easy for anyone to use, even without technical expertise.',
  },
  {
    title: '24/7 Support',
    description: 'Get quick and reliable support whenever you need it.',
  },
];

export default Login;


This code snippet defines a `Login` component that adheres to the specified design rules and requirements. It uses Tailwind CSS for styling, ensuring responsiveness and modern SaaS style.
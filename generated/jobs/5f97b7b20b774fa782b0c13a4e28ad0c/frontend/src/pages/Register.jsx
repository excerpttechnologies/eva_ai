import React from 'react';

const Register = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
      <header className="py-20 px-6 bg-white shadow-md rounded-xl md:grid md:grid-cols-3">
        <h1 className="text-4xl font-bold text-center">Register</h1>
        <p className="text-gray-700 text-center">Join our community and get exclusive benefits.</p>
      </header>

      <section className="py-20 px-6 md:grid md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white shadow-md rounded-xl p-6 flex items-center justify-between mb-10 md:mb-0 ${index % 2 === 0 ? 'md:col-span-2' : ''}`}
          >
            <div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
            <img src={feature.icon} alt={feature.title} className="w-24 md:w-36" />
          </div>
        ))}
      </section>

      <footer className="py-10 px-6 bg-white shadow-md rounded-xl">
        <ul className="flex justify-center space-x-4">
          {links.map((link, index) => (
            <li key={index} className="text-gray-700 hover:text-blue-500 transition-colors duration-300 ease-in-out">
              <a href={link.url}>{link.text}</a>
            </li>
          ))}
        </ul>
      </footer>

      <section className="py-20 px-6 md:grid md:grid-cols-3">
        <button className="bg-blue-500 text-white py-4 px-8 rounded-xl shadow-md hover:bg-blue-700 transition-colors duration-300 ease-in-out">Register Now</button>
      </section>
    </div>
  );
};

const features = [
  {
    title: 'Exclusive Access',
    description: 'Get early access to new products and services.',
    icon: '/exclusive-access-icon.png'
  },
  {
    title: 'Community Support',
    description: 'Join our community of like-minded individuals for support and collaboration.',
    icon: '/community-support-icon.png'
  },
  {
    title: 'Personalized Recommendations',
    description: 'Enjoy personalized product recommendations based on your interests.',
    icon: '/personalized-recommendations-icon.png'
  }
];

const links = [
  { text: 'Privacy Policy', url: '#' },
  { text: 'Terms of Service', url: '#' }
];

export default Register;


This code snippet defines a `Register` component that adheres to the specified design and functionality requirements. It uses Tailwind CSS for styling, ensuring responsiveness and accessibility. The component includes multiple sections as requested, with each section styled appropriately according to the provided guidelines.
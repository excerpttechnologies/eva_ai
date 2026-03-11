import React from 'react';
import { Container, Grid } from '@tailwindcss/forms';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 px-6">
      <Container>
        <div className="text-white text-center md:grid md:grid-cols-3 md:text-left">
          <h1 className="text-4xl font-bold">EduLib</h1>
          <p className="mt-4 text-xl md:mt-0 md:text-base">Discover the latest educational resources.</p>
          <button type="button" className="bg-white text-blue-500 hover:bg-gray-200 py-3 px-6 rounded-lg mt-8 shadow-md transition-colors duration-300 ease-in-out">
            Explore Books
          </button>
        </div>
      </Container>
    </section>

    <section className="py-10 px-6 md:grid md:grid-cols-3 md:gap-6 md:items-center md:text-left">
      {[
        {
          title: 'New Arrivals',
          description: 'Discover new educational resources every week.',
          imageSrc: '/new_arrivals.jpg'
        },
        {
          title: 'Expert Reviews',
          description: 'Read reviews by education experts to find the best resources.',
          imageSrc: '/expert_reviews.jpg'
        },
        {
          title: 'Community Recommendations',
          description: 'Join our community for personalized book recommendations.',
          imageSrc: '/community_recommendations.jpg'
        }
      ].map((feature, index) => (
        <div key={index} className="md:flex md:items-center md:justify-between p-6 rounded-lg shadow-md transition-colors duration-300 ease-in-out">
          <img src={feature.imageSrc} alt={feature.title} className="w-full h-48 object-cover" />
          <div>
            <h2 className="text-xl font-bold mb-2">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        </div>
      ))}
    </section>

    <section className="py-10 px-6 md:grid md:grid-cols-3 md:gap-6 md:items-center md:text-left">
      <button type="button" className="bg-blue-500 text-white py-4 px-8 rounded-lg shadow-md transition-colors duration-300 ease-in-out mt-12 md:mt-0">
        Sign Up Now
      </button>
    </section>

    <footer className="py-6 bg-gray-900 text-white text-center">
      &copy; 2023 EduLib. All rights reserved.
    </footer>
  );
};

export default Hero;


This code snippet provides a production-ready `Hero` component using React and Tailwind CSS, following the specified structure and design rules for an Education industry library management website.
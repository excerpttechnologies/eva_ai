import React from 'react';
import { Container, Grid } from '@tailwindcss/forms';

const ProfileSettings = () => {
  return (
    <div className="bg-gray-100 py-20 px-6 container mx-auto">
      {/* Hero Section */}
      <section>
        <h1 className="text-4xl font-bold text-center mb-8">Profile Settings</h1>
        <p className="text-xl text-center mb-4">Manage your profile with ease.</p>
        <button type="button" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">
          Update Profile
        </button>
      </section>

      {/* Features Section */}
      <section className="md:grid md:grid-cols-3 gap-4 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">{feature.title}</h2>
            <p>{feature.description}</p>
          </div>
        ))}
      </section>

      {/* Call To Action Section */}
      <section className="text-center">
        <h2 className="text-3xl mb-4">Ready to take the next step?</h2>
        <button type="button" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700">Get Started</button>
      </section>

      {/* Footer Section */}
      <footer className="text-center text-gray-500">
        © 2023 Your Company. All rights reserved.
      </footer>
    </div>
  );
};

const features = [
  {
    title: 'Customize Profile',
    description: 'Edit your profile information and bio.',
  },
  {
    title: 'Manage Connections',
    description: 'Add, remove, or manage connections easily.',
  },
  {
    title: 'Update Preferences',
    description: 'Change notification settings and more.',
  },
];

export default ProfileSettings;


This code snippet defines a `ProfileSettings` component that adheres to the specified requirements. It uses Tailwind CSS for styling and includes multiple sections as requested, such as a hero section with a CTA button, a features section with responsive grid layout, a call-to-action section, and a footer section.
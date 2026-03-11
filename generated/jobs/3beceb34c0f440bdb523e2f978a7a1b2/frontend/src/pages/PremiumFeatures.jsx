import React from 'react';
import { Container, Heading, Subheading, Button } from '@tailwindcss/components';

const PremiumFeatures = () => {
  return (
    <Container className="py-20 px-6">
      {}
      <div className="mb-14 flex items-center justify-between">
        <Heading as="h1" size="xl" className="text-gray-900 dark:text-white">Premium Features</Heading>
        <Subheading className="text-gray-500 dark:text-gray-400">Unlock Exclusive Music Benefits</Subheading>
      </div>

      {}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-lg font-semibold mb-4">Exclusive Playlists</h2>
          <p className="text-gray-700 dark:text-gray-400">Access to premium playlists curated by industry experts.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-lg font-semibold mb-4">Album Downloads</h2>
          <p className="text-gray-700 dark:text-gray-400">Download high-quality album tracks directly from the app.</p>
        </div>

        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-lg font-semibold mb-4">Exclusive Concerts</h2>
          <p className="text-gray-700 dark:text-gray-400">Access to exclusive concert recordings and live streams.</p>
        </div>
      </section>

      {}
      <Button as="a" href="#" className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mt-10">
        Upgrade Now
      </Button>

      {}
      <footer className="mt-auto bg-gray-100 dark:bg-gray-900 p-6 text-center">
        <p>&copy; 2023 MusicHub. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default PremiumFeatures;


This code snippet defines a `PremiumFeatures` component using Tailwind CSS for styling, adhering to the specified requirements and structure.
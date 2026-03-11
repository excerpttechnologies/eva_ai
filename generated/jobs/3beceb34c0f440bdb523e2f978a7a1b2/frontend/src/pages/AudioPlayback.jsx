import React from 'react';
import { Container, Heading, Subheading, FeatureCard, Button } from '../components';

const AudioPlayback = () => {
  return (
    <Container>
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 py-20 px-6">
        <Heading as="h1" size="xl">Discover Your Music Paradise</Heading>
        <Subheading as="p" size="lg">Explore, Play, and Enjoy the Best of Music.</Subheading>
        <Button variant="primary" href="/playlists" className="mt-4">Start Listening</Button>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Features You'll Love</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Playlists',
              description: 'Create and share your own playlists with friends.',
              icon: 'playlist_add_icon'
            },
            {
              title: 'Albums',
              description: 'Browse through our extensive catalog of albums.',
              icon: 'album_icon'
            },
            {
              title: 'Genres',
              description: 'Discover new music by exploring different genres.',
              icon: 'genre_icon'
            }
          ].map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={<img src={`/assets/${feature.icon}.svg`} alt={`Icon for ${feature.title}`} />}
            />
          ))}
        </div>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold mb-8">Get Started Today</h2>
        <Button variant="primary" href="/playlists" className="mt-4">Create Your Playlist Now</Button>
      </section>

      <footer className="py-10 bg-gray-900 text-white">
        <p>&copy; 2023 Music Haven. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default AudioPlayback;


Note: The SVG icons (`playlist_add_icon`, `album_icon`, and `genre_icon`) should be provided as assets in the project, ensuring they are correctly referenced within the JSX for proper rendering.
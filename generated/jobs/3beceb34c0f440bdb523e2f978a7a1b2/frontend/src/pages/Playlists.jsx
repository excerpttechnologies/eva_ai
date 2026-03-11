import React from 'react';
import { Container, Heading, Subheading, FeatureCard, Button } from '../components';

const Playlists = () => {
  return (
    <Container>
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 px-6">
        <Heading as="h1" size="xl">Discover Your Favorite Music</Heading>
        <Subheading as="p" size="lg">Explore our extensive playlist collection and more.</Subheading>
        <Button variant="primary" href="/playlists">
          Explore Playlists
        </Button>
      </div>

      <section className="py-20 px-6 grid md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <FeatureCard key={index} title={`Playlist ${index + 1}`} description="A curated selection of songs for you to enjoy." />
        ))}
      </section>

      <section className="py-20 px-6">
        <Heading as="h2" size="xl">Why Choose Us?</Heading>
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <FeatureCard key={index} title={`Feature ${index + 1}`} description="Description of feature." />
          ))}
        </div>
      </section>

      <Button variant="primary" href="/playlists">
        Explore Playlists
      </Button>

      <footer className="py-20 px-6 bg-gray-800 text-white">
        <p>&copy; 2023 MusicHub. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default Playlists;


Note: The `Heading`, `Subheading`, and `FeatureCard` components are assumed to be custom Tailwind CSS utility classes or imported from a component library that provides these utilities.
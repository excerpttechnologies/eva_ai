import React from 'react';
import { Container, Heading, Subheading, FeatureCard, CallToAction } from './components';

const Albums = () => {
  return (
    <Container>
      <section className="py-20 px-6">
        <Heading as="h1" size="xl">Discover Exclusive Music Collections</Heading>
        <Subheading>Explore our curated playlists and albums.</Subheading>
        <CallToAction href="#playlists">Start Listening</CallToAction>
      </section>

      <section className="py-20 px-6 grid md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }, (_, i) => (
          <FeatureCard key={i} title={`Album ${i + 1}`} description="A collection of songs by a single artist." />
        ))}
      </section>

      <section className="py-20 px-6">
        <Heading as="h2" size="lg">Exclusive Playlists</Heading>
        <p>Enjoy curated playlists featuring the latest hits and emerging artists.</p>
        <CallToAction href="#playlists">Explore Playlists</CallToAction>
      </section>

      <footer className="py-6 px-6">
        <p>&copy; 2023 MusicHub. All rights reserved.</p>
      </footer>
    </Container>
  );
};

export default Albums;




import { Heading } from '@theme-ui/components';

const Heading = ({ as, size }) => (
  <Heading as={as} size={size}>
    MusicHub
  </Heading>
);

export default Heading;




import { Subheading } from '@theme-ui/components';

const Subheading = () => (
  <Subheading>
    Discover Exclusive Music Collections
  </Subheading>
);

export default Subheading;




import { FeatureCard, CardContent, CardFooter } from '@theme-ui/components';

const FeatureCard = ({ title, description }) => (
  <FeatureCard>
    <CardContent>{title}</CardContent>
    <CardFooter>{description}</CardFooter>
  </FeatureCard>
);

export default FeatureCard;




import { CallToAction } from '@theme-ui/components';

const CallToAction = ({ href, children }) => (
  <CallToAction href={href}>
    {children}
  </CallToAction>
);

export default CallToAction;


Note: The `@theme-ui/components` imports are placeholders for the actual Tailwind CSS components. Ensure you have Tailwind CSS installed and configured in your project to use these component files effectively.
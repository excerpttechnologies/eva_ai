export default function RestaurantInfo() {
  return (
import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const RestaurantInfo = () => {
  return (
    <div className="min-h-screen">
      {}
      <section>
        <h1>Discover Delicious Food Near You</h1>
        <p>Browse through our restaurant listings and order your favorite dishes.</p>
      </section>

      {}
      <section>
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} className="mb-4">
            <h2>Feature Card Title</h2>
            <p>Description of the feature.</p>
            <Button variant="primary">Learn More</Button>
          </Card>
        ))}
      </section>

      {}
      <section>
        <h2>Ready to Order?</h2>
        <p>Explore our restaurant listings and place your order today!</p>
        <Button variant="secondary" href="/order">
          Place an Order
        </Button>
      </section>
    </div>
  );
};

export default RestaurantInfo;


This code snippet defines a React component named `RestaurantInfo` that adheres to the specified structure and requirements. It includes a hero section, three feature cards, and a CTA (Call To Action) section.
  )
}
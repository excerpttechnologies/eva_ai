export default function FoodList() {
  return (
import React from 'react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const FoodList = () => {
  return (
    <div className="min-h-screen">
      {}
      <section>
        <h1>Discover Delicious Meals</h1>
        <p>Explore a variety of cuisines and order your favorite dishes today.</p>
        <Button variant="primary">Order Now</Button>
      </section>

      {}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, index) => (
          <Card key={index} title={`Feature ${index + 1}`} description="Description for feature card" />
        ))}
      </div>

      {}
      <section>
        <h2>Ready to Order?</h2>
        <p>Explore our restaurant listings and browse menus from the comfort of your home.</p>
        <Button variant="secondary">Explore Restaurants</Button>
      </section>
    </div>
  );
};

export default FoodList;


This code snippet defines a `FoodList` component that adheres to the specified structure, including a hero section with a title and button, three feature cards, and a CTA section. The component uses the provided Button and Card components from "../components/ui".
  )
}
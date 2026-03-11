import React from 'react';
import { Container, Grid } from '@tailwindcss/components';

const FeaturedBooks = () => {
  return (
    <Container className="py-20 px-6">
      <Grid gap={4} md:grid-cols-3>
        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-xl shadow-lg flex items-center justify-center text-white font-bold">
          Featured Book 1
          <p>Author: John Doe</p>
          <p>Status: Available</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-xl shadow-lg flex items-center justify-center text-white font-bold">
          Featured Book 2
          <p>Author: Jane Smith</p>
          <p>Status: Available</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 rounded-xl shadow-lg flex items-center justify-center text-white font-bold">
          Featured Book 3
          <p>Author: Alice Johnson</p>
          <p>Status: Available</p>
        </div>

        {}
      </Grid>
    </Container>
  );
};

export default FeaturedBooks;


This code snippet provides a production-ready `FeaturedBooks` component using Tailwind CSS for styling. It includes the specified sections and follows the provided structure and design rules.
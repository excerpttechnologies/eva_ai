import React from 'react';

const FeaturedBooks = () => {
  return (
    <section className="container mx-auto py-20 px-6">
      <header className="mb-14 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">EduLib</h1>
        <p className="text-xl text-gray-700">Discover the latest educational resources.</p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        >
          Explore Books
        </button>
      </header>

      <section className="mb-12 grid grid-cols-3 gap-6 md:grid-cols-3">
        {[
          {
            title: 'Introduction to Artificial Intelligence',
            author: 'Dr. Jane Smith',
            status: 'Available',
            image: '/images/book1.jpg'
          },
          {
            title: 'The Art of Teaching',
            author: 'Mr. John Doe',
            status: 'Out of Stock',
            image: '/images/book2.jpg'
          },
          {
            title: 'Educational Psychology',
            author: 'Dr. Emily Johnson',
            status: 'Available',
            image: '/images/book3.jpg'
          }
        ].map((book, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between"
          >
            <img src={book.image} alt={book.title} className="w-24 h-32 object-cover" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">{book.title}</h2>
              <p className="text-gray-700">By {book.author}</p>
              <span className="text-red-500">{book.status}</span>
            </div>
          </div>
        ))}

        {}
      </section>

      <footer className="mt-auto text-center">
        <p>&copy; 2023 EduLib. All rights reserved.</p>
      </footer>
    </section>
  );
};

export default FeaturedBooks;


This code snippet provides a production-ready `FeaturedBooks` component following the specified requirements and design rules using Tailwind CSS for styling.
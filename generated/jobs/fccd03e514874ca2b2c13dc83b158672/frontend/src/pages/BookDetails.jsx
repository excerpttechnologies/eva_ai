import React from 'react';

const BookDetails = ({ book }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4">{book.title}</h1>
      <p className="mb-4 text-gray-700">{book.author}</p>
      <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-lg" />
      <div className="mt-6">
        <span className="text-gray-500">Published:</span> {book.publishedDate}
      </div>
    </div>
  );
};

export default BookDetails;


Note: This code assumes that the `book` prop passed to the component contains properties such as `title`, `author`, `image`, and `publishedDate`. You would need to implement a way to fetch or pass this data in your application.
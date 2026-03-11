```jsx
import React from 'react';

const GradeBooks = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold">Grade Books</h1>
      </header>

      <main className="flex-grow px-6 py-12">
        {/* Main content goes here */}
        <p className="text-xl mb-6">Welcome to the Grade Books page. This is where you can manage and view your grade books.</p>
        <button className="bg-blue-500 text-white p-4 rounded hover:bg-blue-700" type="button">
          View Grades
        </button>
      </main>

      <footer className="text-center text-gray-600 bg-gray-100 py-4">
        &copy; 2023 Grade Books. All rights reserved.
      </footer>
    </div>
  );
};

export default GradeBooks;
```
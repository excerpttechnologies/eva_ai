```jsx
import React from 'react';

const Blog = () => {
  return (
    <div className="bg-white min-h-screen p-6">
      <header className="text-gray-700 text-xl font-bold mb-4">Blog</header>
      
      {/* Example section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Latest Post</h2>
        <p className="text-gray-600">This is a sample post. You can replace this with actual blog content.</p>
      </section>

      {/* Example section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
        <ul className="list-disc list-outside pl-6 text-gray-600">
          <li>Event 1: Date and Time</li>
          <li>Event 2: Date and Time</li>
        </ul>
      </section>

      {/* Example section */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600">Feel free to reach out for any inquiries.</p>
      </section>

    </div>
  );
}

export default Blog;
```
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

<div className="min-h-screen">
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 px-6 md:py-24 md:px-12 rounded-xl shadow-lg">
    <h1 className="text-3xl font-bold text-white">Library Name</h1>
    <p className="text-gray-300 mt-2">Tagline</p>
    <button type="button" className="mt-6 bg-white text-blue-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 px-4 py-2 rounded-lg shadow-md" aria-label="Explore Books">
      Explore Books
    </button>
  </div>

  <section className="py-6 md:grid md:grid-cols-3 md:gap-6">
    {Array.from({ length: 3 }, (_, i) => (
      <Card key={i} className="bg-white rounded-xl shadow-lg p-4 mb-6">
        <img src="/book-image.jpg" alt="Book Title" className="w-full h-48 object-cover mb-4" />
        <h2 className="text-xl font-bold">Book Title</h2>
        <p className="text-gray-700">Author Name, Publication Year</p>
        <div className="flex items-center justify-between">
          <span className="text-green-500">Available: Yes</span>
          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Issue Book</button>
        </div>
      </Card>
    ))}
  </section>

  <footer className="bg-white text-gray-600 py-4 px-6 md:px-12">
    <p>Copyright © 2023 Library Name. All rights reserved.</p>
  </footer>
</div>
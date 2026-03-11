import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

<div className="min-h-screen">
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 px-6 md:py-24 md:px-12 rounded-xl shadow-lg">
    <h1 className="text-3xl font-bold text-white">Library Management System</h1>
    <p className="mt-4 text-gray-300">Explore Our Catalog and Manage Your Books</p>
    <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full mt-6" aria-label="Explore Books">
      Explore Books
    </button>
  </div>

  <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card className="bg-white shadow-md p-8">
      <h2 className="text-xl font-bold">New Arrivals</h2>
      <p className="text-gray-700 mt-4">Discover the latest additions to our catalog.</p>
    </Card>

    <Card className="bg-white shadow-md p-8">
      <h2 className="text-xl font-bold">Featured Books</h2>
      <p className="text-gray-700 mt-4">Read about our most popular and recommended books.</p>
    </Card>

    <Card className="bg-white shadow-md p-8">
      <h2 className="text-xl font-bold">Upcoming Events</h2>
      <p className="text-gray-700 mt-4">Join us for upcoming book readings, workshops, and more!</p>
    </Card>
  </section>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card className="bg-white shadow-md p-8">
      <h2 className="text-xl font-bold">Book Availability</h2>
      <p className="text-gray-700 mt-4">Check the availability of your requested books.</p>
    </Card>

    <Card className="bg-white shadow-md p-8">
      <h2 className="text-xl font-bold">User Reviews</h2>
      <p className="text-gray-700 mt-4">Read and leave reviews for our featured books.</p>
    </Card>

    <Card className="bg-white shadow-md p-8">
      <h2 className="text-xl font-bold">Book Recommendations</h2>
      <p className="text-gray-700 mt-4">Get personalized book recommendations based on your reading history.</p>
    </Card>
  </div>

  <footer className="mt-12 bg-gray-50 p-6 text-center">
    <p>&copy; 2023 Library Management System. All rights reserved.</p>
  </footer>
</div>
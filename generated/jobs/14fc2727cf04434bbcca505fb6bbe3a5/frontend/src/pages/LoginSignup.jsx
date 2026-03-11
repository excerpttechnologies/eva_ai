import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

<div className="min-h-screen">
  <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 px-6 md:py-24 md:px-12 rounded-xl shadow-lg">
    <h1 className="text-white text-3xl font-bold">Library Management System</h1>
    <p className="mt-4 text-gray-300">Explore our vast collection of books and resources.</p>
    <button type="button" className="bg-white text-blue-500 hover:bg-opacity-70 py-2 px-4 rounded-full mt-6" aria-label="Explore Books">
      Explore Books
    </button>
  </div>

  <section className="py-12 md:py-20 px-6 md:px-12 bg-white rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Featured Books</h2>
    <div className="grid grid-cols-3 gap-6 md:gap-8">
      <Card className="bg-gray-50 p-6 rounded-xl shadow-md">
        <img src="/book1.jpg" alt="Book 1" className="w-full h-48 object-cover mb-4" />
        <h3 className="text-lg font-semibold">Title 1</h3>
        <p className="text-gray-500">Author 1, Published Year</p>
      </Card>

      <Card className="bg-gray-50 p-6 rounded-xl shadow-md">
        <img src="/book2.jpg" alt="Book 2" className="w-full h-48 object-cover mb-4" />
        <h3 className="text-lg font-semibold">Title 2</h3>
        <p className="text-gray-500">Author 2, Published Year</p>
      </Card>

      <Card className="bg-gray-50 p-6 rounded-xl shadow-md">
        <img src="/book3.jpg" alt="Book 3" className="w-full h-48 object-cover mb-4" />
        <h3 className="text-lg font-semibold">Title 3</h3>
        <p className="text-gray-500">Author 3, Published Year</p>
      </Card>
    </div>
  </section>

  <footer className="py-12 md:py-24 px-6 md:px-12 bg-white rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
    <p>Email: support@example.com | Phone: (123) 456-7890</p>
  </footer>
</div>
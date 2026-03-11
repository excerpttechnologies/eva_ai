import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Catalog = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-20 px-6 md:py-32 md:px-12">
        <h1 className="text-white text-4xl font-bold">Library Management</h1>
        <p className="mt-4 text-gray-300">Explore our vast collection of books.</p>
        <Button variant="primary" size="lg" className="mt-6 w-full">
          Explore Books
        </Button>
      </section>

      <section className="py-20 px-6 md:py-14 md:px-8 grid gap-6 grid-cols-3 md:grid-cols-1 md:gap-x-12">
        {Array.from({ length: 3 }, (_, i) => (
          <Card key={i} className="rounded-xl shadow-lg" variant="secondary">
            <div className="p-4 text-center">
              <h2 className="text-gray-700 font-bold">Featured Book</h2>
              <p className="mt-2 text-gray-500">Book Title {i + 1}</p>
              <p className="mt-2 text-gray-600">Author: Author Name {i + 1}</p>
              <p className="mt-4 text-gray-700 font-bold">Availability: Available</p>
            </div>
          </Card>
        ))}
      </section>

      <section className="py-20 px-6 md:py-14 md:px-8">
        <form className="grid gap-6 grid-cols-3 md:grid-cols-1">
          <label htmlFor="search" className="block text-gray-700 font-medium mb-2">Search Books</label>
          <input id="search" type="text" placeholder="Search books..." className="border border-gray-400 p-2 w-full rounded-lg shadow-md focus:outline-none focus:border-blue-500" />
        </form>

        <div className="grid gap-6 grid-cols-3 md:grid-cols-1">
          <label htmlFor="category-filter" className="block text-gray-700 font-medium mb-2">Category Filters</label>
          <select id="category-filter" className="border border-gray-400 p-2 w-full rounded-lg shadow-md focus:outline-none focus:border-blue-500">
            <option value="">Select Category</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
          </select>
        </div>
      </section>

      <footer className="py-20 px-6 md:py-14 md:px-8">
        <p className="text-gray-500">Contact us at support@example.com for any inquiries.</p>
      </footer>
    </div>
  );
};

export default Catalog;
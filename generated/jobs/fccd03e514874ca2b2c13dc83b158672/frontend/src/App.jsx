import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Books from "./pages/Books.jsx"
import BookDetails from "./pages/BookDetails.jsx"
import Cart from "./pages/Cart.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/books" className="hover:text-blue-600 transition">Books</Link>
            <Link to="/book-details" className="hover:text-blue-600 transition">BookDetails</Link>
            <Link to="/cart" className="hover:text-blue-600 transition">Cart</Link>
            <Link to="/about" className="hover:text-blue-600 transition">About</Link>
            <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book-details" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home.jsx"
import Products from "./pages/Products.jsx"
import Cart from "./pages/Cart.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
            <Link to="/cart" className="hover:text-blue-600 transition">Cart</Link>
            <Link to="/login" className="hover:text-blue-600 transition">Login</Link>
            <Link to="/register" className="hover:text-blue-600 transition">Register</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
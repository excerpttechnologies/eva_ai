import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from "./components/Layout"
import ProductCatalog from "./pages/ProductCatalog.jsx"
import ShoppingCart from "./pages/ShoppingCart.jsx"
import UserAuthentication from "./pages/UserAuthentication.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import Profile from "./pages/Profile.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <Layout>

        <nav className="bg-white shadow-md sticky top-0 z-50 mb-10">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-primary">AI Builder</h1>
            <div className="flex gap-6 font-medium text-gray-700">
              <Link to="/product-catalog" className="hover:text-primary transition">Product Catalog</Link>
              <Link to="/shopping-cart" className="hover:text-primary transition">Shopping Cart</Link>
              <Link to="/user-authentication" className="hover:text-primary transition">User Authentication</Link>
              <Link to="/login-page" className="hover:text-primary transition">Login Page</Link>
              <Link to="/profile" className="hover:text-primary transition">Profile</Link>

            </div>
          </div>
        </nav>

        <Routes>
            <Route path="/product-catalog" element={<ProductCatalog />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/user-authentication" element={<UserAuthentication />} />
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<ProductCatalog />} />

        </Routes>

      </Layout>
    </BrowserRouter>
  )
}
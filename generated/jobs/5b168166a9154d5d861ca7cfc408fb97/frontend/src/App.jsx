import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import ProductCatalog from "./pages/ProductCatalog.jsx"
import ShoppingCart from "./pages/ShoppingCart.jsx"
import UserAuthentication from "./pages/UserAuthentication.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import ProfileSettings from "./pages/ProfileSettings.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/product-catalog" className="hover:text-blue-600 transition">ProductCatalog</Link>
            <Link to="/shopping-cart" className="hover:text-blue-600 transition">ShoppingCart</Link>
            <Link to="/user-authentication" className="hover:text-blue-600 transition">UserAuthentication</Link>
            <Link to="/login-page" className="hover:text-blue-600 transition">LoginPage</Link>
            <Link to="/profile-settings" className="hover:text-blue-600 transition">ProfileSettings</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/product-catalog" element={<ProductCatalog />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/user-authentication" element={<UserAuthentication />} />
          <Route path="/login-page" element={<LoginPage />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/" element={<ProductCatalog />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import ProductCatalog from "./pages/ProductCatalog.jsx"
import ShoppingCart from "./pages/ShoppingCart.jsx"
import UserAuthentication from "./pages/UserAuthentication.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import ProfileSettings from "./pages/ProfileSettings.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/product-catalog" element={<ProductCatalog />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/user-authentication" element={<UserAuthentication />} />
            <Route path="/login-page" element={<LoginPage />} />
            <Route path="/profile-settings" element={<ProfileSettings />} />
            <Route path="/" element={<ProductCatalog />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
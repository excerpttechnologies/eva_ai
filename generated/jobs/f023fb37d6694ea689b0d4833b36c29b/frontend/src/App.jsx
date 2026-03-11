import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import FoodList from "./pages/FoodList.jsx"
import MenuBrowse from "./pages/MenuBrowse.jsx"
import OrderTrack from "./pages/OrderTrack.jsx"
import RestaurantInfo from "./pages/RestaurantInfo.jsx"
import UserProfile from "./pages/UserProfile.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
            <Route path="/food-list" element={<FoodList />} />
            <Route path="/menu-browse" element={<MenuBrowse />} />
            <Route path="/order-track" element={<OrderTrack />} />
            <Route path="/restaurant-info" element={<RestaurantInfo />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/" element={<FoodList />} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
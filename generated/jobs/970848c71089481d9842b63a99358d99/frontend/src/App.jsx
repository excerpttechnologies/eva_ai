import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import PropertyListings from "./pages/PropertyListings.jsx"
import SearchFilters from "./pages/SearchFilters.jsx"
import BookingCalendar from "./pages/BookingCalendar.jsx"
import FeatureTours from "./pages/FeatureTours.jsx"
import Support from "./pages/Support.jsx"


export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">AI Builder App</h1>
          <div className="flex gap-6 font-medium text-gray-700">
            <Link to="/property-listings" className="hover:text-blue-600 transition">PropertyListings</Link>
            <Link to="/search-filters" className="hover:text-blue-600 transition">SearchFilters</Link>
            <Link to="/booking-calendar" className="hover:text-blue-600 transition">BookingCalendar</Link>
            <Link to="/feature-tours" className="hover:text-blue-600 transition">FeatureTours</Link>
            <Link to="/support" className="hover:text-blue-600 transition">Support</Link>

          </div>
        </nav>

        <main className="p-8">
          <Routes>
          <Route path="/property-listings" element={<PropertyListings />} />
          <Route path="/search-filters" element={<SearchFilters />} />
          <Route path="/booking-calendar" element={<BookingCalendar />} />
          <Route path="/feature-tours" element={<FeatureTours />} />
          <Route path="/support" element={<Support />} />
          <Route path="/" element={<PropertyListings />} />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}
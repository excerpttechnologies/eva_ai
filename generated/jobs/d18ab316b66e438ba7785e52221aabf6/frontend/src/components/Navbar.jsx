import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">AI Builder</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
        </div>
      </div>
    </nav>
  )
}
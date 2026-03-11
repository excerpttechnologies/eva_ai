import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function ProductCatalog() {
  return (
<div className="min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
    {[
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
      { id: 3, name: "Product 3", price: 30 },
      { id: 4, name: "Product 4", price: 40 },
      { id: 5, name: "Product 5", price: 50 }
    ].map((product) => (
      <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700">Price: ${product.price}</p>
        <button onClick={() => console.log(`Added to cart: ${product.name}`)} className="bg-blue-500 text-white p-2 rounded mt-4">Add to Cart</button>
      </div>
    ))}
  </div>
</div>
  )
}
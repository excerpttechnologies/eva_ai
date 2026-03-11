import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function ProductCatalog() {
  return (
<div className="min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {[
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
      { id: 4, name: 'Product 4', price: 40 },
      { id: 5, name: 'Product 5', price: 50 },
      { id: 6, name: 'Product 6', price: 60 },
    ].map((product) => (
      <div key={product.id} className="p-4 bg-white rounded shadow">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-500">Price: ${product.price}</p>
        <button className="mt-4 bg-blue-500 text-white p-2 rounded">Add to Cart</button>
      </div>
    ))}
  </div>
</div>
  )
}
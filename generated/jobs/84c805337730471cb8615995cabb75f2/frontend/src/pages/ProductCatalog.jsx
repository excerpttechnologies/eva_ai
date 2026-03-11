import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function ProductCatalog() {
  return (
<div className="min-h-screen">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    {products.map((product) => (
      <div key={product.id} className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between h-full">
        <img src={product.imageSrc} alt={product.name} className="w-24 h-24 object-cover" />
        <div>
          <h3 className="text-xl font-bold">{product.name}</h3>
          <p className="text-gray-500">Price: ${product.price.toFixed(2)}</p>
          <button onClick={() => addToCart(product.id)} className="bg-blue-600 text-white px-4 py-2 rounded mt-4">Add to Cart</button>
        </div>
      </div>
    ))}
  </div>
</div>
  )
}
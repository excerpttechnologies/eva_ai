import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function ShoppingCart() {
  return (
<div className="min-h-screen">
  <div className="flex justify-between items-center p-4">
    <h1 className="text-2xl font-bold">Shopping Cart</h1>
    <button className="bg-blue-500 text-white px-4 py-2 rounded">Checkout</button>
  </div>
  <ul className="p-4">
    {cartItems.map((item, index) => (
      <li key={index} className="flex items-center justify-between p-2 border-b border-gray-200">
        <span>{item.name}</span>
        <span>{item.price}</span>
        <button className="bg-red-500 text-white px-2 rounded">Remove</button>
      </li>
    ))}
  </ul>
</div>
  )
}
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function ShoppingCart() {
  return (
<div className="min-h-screen">
  <div className="flex justify-between items-center p-4">
    <h1 className="text-xl font-bold">Shopping Cart</h1>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Checkout</button>
  </div>
  {cartItems.length > 0 ? (
    <ul className="p-4">
      {cartItems.map((item, index) => (
        <li key={index} className="flex items-center justify-between border-b pb-2">
          <span>{item.name}</span>
          <span>${item.price}</span>
          <button onClick={() => removeItemFromCart(index)} className="bg-red-500 text-white px-4 py-1 rounded-md">Remove</button>
        </li>
      ))}
    </ul>
  ) : (
    <p>No items in cart.</p>
  )}
</div>
  )
}
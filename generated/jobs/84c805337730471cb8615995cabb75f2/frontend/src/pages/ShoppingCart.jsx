import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function ShoppingCart() {
  return (
<div className="min-h-screen">
  <h1>Shopping Cart</h1>
  <ul>
    {products.map((product, index) => (
      <li key={index}>
        {product.name} - ${product.price}
        <button onClick={() => removeFromCart(product)}>Remove</button>
      </li>
    ))}
  </ul>
  <div>Total: $<span>{totalPrice}</span></div>
  <button onClick={checkout}>Checkout</button>
</div>
  )
}
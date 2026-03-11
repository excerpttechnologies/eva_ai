import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function LoginPage() {
  return (
<div className="min-h-screen">
  <form action="/submit-login" method="POST">
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" name="username" required />
    
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" required />
    
    <button type="submit">Login</button>
  </form>
</div>
  )
}
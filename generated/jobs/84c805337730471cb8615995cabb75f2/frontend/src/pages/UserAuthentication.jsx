import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function UserAuthentication() {
  return (
<div className="min-h-screen">
  <h1>User Authentication</h1>
  <form action="/submit" method="POST">
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" name="username" required />
    
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" name="password" required />
    
    <button type="submit">Login</button>
  </form>
</div>
  )
}
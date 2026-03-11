import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function UserAuthentication() {
  return (
<div className="min-h-screen">
  <h1>User Authentication Page</h1>
  <form>
    <div>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" />
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" />
    </div>
    <button type="submit">Login</button>
  </form>
</div>
  )
}
import Button from "../components/ui/Button"
import Card from "../components/ui/Card"

export default function Profile() {
  return (
<div className="min-h-screen">
  <div className="profile-header">
    <img src="profile-picture.jpg" alt="Profile Picture" className="profile-picture" />
    <h1 className="profile-name">John Doe</h1>
  </div>
  <div className="profile-content">
    <div className="profile-info">
      <p className="profile-email">john.doe@example.com</p>
      <p className="profile-phone">123-456-7890</p>
    </div>
    <div className="profile-orders">
      <h2 className="profile-order-title">Recent Orders</h2>
      <ul className="profile-order-list">
        <li className="profile-order-item">Order 1</li>
        <li className="profile-order-item">Order 2</li>
        <li className="profile-order-item">Order 3</li>
      </ul>
    </div>
  </div>
</div>
  )
}
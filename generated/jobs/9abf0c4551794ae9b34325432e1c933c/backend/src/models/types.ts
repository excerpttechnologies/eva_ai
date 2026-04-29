// models/types.ts

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'customer' | 'staff';
  createdAt: Date;
  updatedAt: Date;
}

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'appetizer' | 'entree' | 'dessert';
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Order {
  id: string;
  userId: string;
  status: 'pending' | 'in_progress' | 'completed';
  total: number;
  items: OrderItem[];
  createdAt: Date;
  updatedAt: Date;
}

interface OrderItem {
  id: string;
  orderId: string;
  menuItemId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export { User, MenuItem, Order, OrderItem };
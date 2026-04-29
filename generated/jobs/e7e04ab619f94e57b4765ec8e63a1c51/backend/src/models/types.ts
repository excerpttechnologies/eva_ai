// models/types.ts

interface User {
  id: string;
  email: string;
  password: string;
  role: 'admin' | 'customer';
  createdAt: Date;
  updatedAt: Date;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Order {
  id: string;
  userId: string;
  products: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
  createdAt: Date;
  updatedAt: Date;
}

export { User, Product, CartItem, Order };
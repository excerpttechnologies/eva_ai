// models/types.ts

interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Restaurant {
  id: string;
  name: string;
  description: string;
  address: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Order {
  id: string;
  userId: string;
  restaurantId: string;
  items: { id: string; name: string; price: number }[];
  total: number;
  status: 'pending' | 'in_progress' | 'delivered';
  createdAt: Date;
  updatedAt: Date;
}

interface Review {
  id: string;
  userId: string;
  restaurantId: string;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}

export { User, Restaurant, Order, Review };
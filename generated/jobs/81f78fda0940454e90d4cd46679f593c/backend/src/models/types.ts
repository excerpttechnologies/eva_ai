// models/types.ts

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  inventory: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: number;
  userId: number;
  productId: number;
  quantity: number;
  total: number;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  language: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Payment {
  id: number;
  userId: number;
  orderId: number;
  method: 'credit_card' | 'paypal' | 'bank_transfer';
  status: 'pending' | 'success' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}
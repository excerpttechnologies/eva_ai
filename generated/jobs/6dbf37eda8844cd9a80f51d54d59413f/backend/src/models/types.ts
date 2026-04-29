// models/types.ts

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Bike {
  id: string;
  userId: string;
  brand: string;
  model: string;
  color: string;
  status: 'available' | 'unavailable';
  createdAt: Date;
  updatedAt: Date;
}

export interface Route {
  id: string;
  name: string;
  description: string;
  distance: number;
  duration: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Booking {
  id: string;
  userId: string;
  bikeId: string;
  routeId: string;
  startDate: Date;
  endDate: Date;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}
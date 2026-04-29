export interface Restaurant {
  id: number;
  name: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  restaurantId: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Order {
  id: number;
  userId: number;
  restaurantId: number;
  menuItemIds: number[];
  total: number;
  status: 'pending' | 'in_progress' | 'completed';
  createdAt: Date;
  updatedAt: Date;
}

export interface Review {
  id: number;
  userId: number;
  restaurantId: number;
  rating: number;
  comment: string;
  createdAt: Date;
  updatedAt: Date;
}
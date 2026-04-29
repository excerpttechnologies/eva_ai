import express, { Request, Response, NextFunction } from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Mock data for products
interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

const products: Product[] = [
  { id: uuidv4(), name: 'Product 1', price: 19.99, description: 'This is product 1', image: 'product1.jpg' },
  { id: uuidv4(), name: 'Product 2', price: 9.99, description: 'This is product 2', image: 'product2.jpg' },
  { id: uuidv4(), name: 'Product 3', price: 29.99, description: 'This is product 3', image: 'product3.jpg' },
];

// Mock data for users
interface User {
  id: string;
  name: string;
  email: string;
}

const users: User[] = [
  { id: uuidv4(), name: 'John Doe', email: 'john.doe@example.com' },
  { id: uuidv4(), name: 'Jane Doe', email: 'jane.doe@example.com' },
];

// Mock data for orders
interface Order {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
}

const orders: Order[] = [
  { id: uuidv4(), userId: users[0].id, productId: products[0].id, quantity: 2 },
  { id: uuidv4(), userId: users[1].id, productId: products[1].id, quantity: 1 },
];

// GET /products (list)
router.get('/products', (req: Request, res: Response) => {
  res.json(products);
});

// GET /products/:id (by id)
router.get('/products/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const product = products.find((p) => p.id === id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    res.json(product);
  }
});

// POST /products (create)
router.post('/products', (req: Request, res: Response) => {
  const { name, price, description, image } = req.body;
  const newProduct = { id: uuidv4(), name, price, description, image };
  products.push(newProduct);
  res.json(newProduct);
});

// PUT /products/:id (update)
router.put('/products/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const product = products.find((p) => p.id === id);
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    const { name, price, description, image } = req.body;
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    res.json(product);
  }
});

// DELETE /products/:id (delete)
router.delete('/products/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    products.splice(index, 1);
    res.json({ message: 'Product deleted successfully' });
  }
});

// GET /users (list)
router.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

// GET /users/:id (by id)
router.get('/users/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  const user = users.find((u) => u.id === id);
  if (!user) {
    res.status(404).json({ message: 'User not found' });
  } else {
    res.json(user);
  }
});

// POST /orders (create)
router.post('/orders', (req: Request, res: Response) => {
  const { userId, productId, quantity } = req.body;
  const newOrder = { id: uuidv4(), userId, productId, quantity };
  orders.push(newOrder);
  res.json(newOrder);
});

export const apiRouter = router;
import express, { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const apiRouter: Router = express.Router();

// Mock data for menu items
const menuItems: { id: string; name: string; price: number; description: string }[] = [
  { id: uuidv4(), name: 'Burger', price: 10.99, description: 'Juicy beef burger' },
  { id: uuidv4(), name: 'Salad', price: 8.99, description: 'Fresh mixed greens' },
  { id: uuidv4(), name: 'Pizza', price: 12.99, description: 'Cheesy pizza' },
];

// Mock data for orders
const orders: { id: string; menuItemId: string; status: string }[] = [
  { id: uuidv4(), menuItemId: menuItems[0].id, status: 'pending' },
  { id: uuidv4(), menuItemId: menuItems[1].id, status: 'delivered' },
];

// GET all menu items
apiRouter.get('/menu', (req, res) => {
  res.json(menuItems);
});

// GET menu item by id
apiRouter.get('/menu/:id', (req, res) => {
  const id = req.params.id;
  const menuItem = menuItems.find((item) => item.id === id);
  if (!menuItem) {
    res.status(404).json({ message: 'Menu item not found' });
  } else {
    res.json(menuItem);
  }
});

// POST create new order
apiRouter.post('/orders', (req, res) => {
  const { menuItemId, status } = req.body;
  const newOrder = { id: uuidv4(), menuItemId, status };
  orders.push(newOrder);
  res.json(newOrder);
});

// GET all orders
apiRouter.get('/orders', (req, res) => {
  res.json(orders);
});

// GET order by id
apiRouter.get('/orders/:id', (req, res) => {
  const id = req.params.id;
  const order = orders.find((item) => item.id === id);
  if (!order) {
    res.status(404).json({ message: 'Order not found' });
  } else {
    res.json(order);
  }
});

// PUT update order status
apiRouter.put('/orders/:id', (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  const order = orders.find((item) => item.id === id);
  if (!order) {
    res.status(404).json({ message: 'Order not found' });
  } else {
    order.status = status;
    res.json(order);
  }
});

// DELETE order by id
apiRouter.delete('/orders/:id', (req, res) => {
  const id = req.params.id;
  orders = orders.filter((item) => item.id !== id);
  res.json({ message: 'Order deleted successfully' });
});

export const apiRouter = apiRouter;
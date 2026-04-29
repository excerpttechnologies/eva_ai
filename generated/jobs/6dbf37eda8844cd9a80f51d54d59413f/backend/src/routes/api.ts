import { Router, Request, Response } from 'express'

export const apiRouter = Router()

// Health / status
apiRouter.get('/status', (_req: Request, res: Response) => {
  res.json({ success: true, app: 'RideFlow', version: '1.0.0' })
})

// Items list
apiRouter.get('/items', (_req: Request, res: Response) => {
  res.json({ success: true, data: [], total: 0 })
})

// Item by ID
apiRouter.get('/items/:id', (req: Request, res: Response) => {
  res.json({ success: true, data: { id: req.params.id } })
})

// Create item
apiRouter.post('/items', (req: Request, res: Response) => {
  res.status(201).json({ success: true, data: req.body })
})

// Update item
apiRouter.put('/items/:id', (req: Request, res: Response) => {
  res.json({ success: true, data: { id: req.params.id, ...req.body } })
})

// Delete item
apiRouter.delete('/items/:id', (req: Request, res: Response) => {
  res.json({ success: true, message: 'Deleted successfully' })
})
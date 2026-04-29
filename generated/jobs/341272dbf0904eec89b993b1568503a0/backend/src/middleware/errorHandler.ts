import { Request, Response, NextFunction } from 'express'

export interface AppError extends Error {
  statusCode?: number
}

export function errorHandler(
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): void {
  const status  = err.statusCode ?? 500
  const message = err.message    ?? 'Internal Server Error'
  console.error(`[${status}] ${message}`)
  res.status(status).json({ success: false, message })
}
// models/types.ts

export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: string;
  userId: string;
  amount: number;
  currency: string;
  status: 'pending' | 'success' | 'failed';
  createdAt: Date;
  updatedAt: Date;
}

export interface PaymentMethod {
  id: string;
  userId: string;
  type: 'card' | 'bank';
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FraudDetectionResult {
  id: string;
  transactionId: string;
  riskLevel: 'low' | 'medium' | 'high';
  reason: string;
  createdAt: Date;
  updatedAt: Date;
}
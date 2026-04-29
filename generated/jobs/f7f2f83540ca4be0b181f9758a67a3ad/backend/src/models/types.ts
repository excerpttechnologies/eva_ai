// models/types.ts

interface User {
  id: string;
  email: string;
  password: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Transaction {
  id: string;
  userId: string;
  amount: number;
  type: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ChartData {
  id: string;
  userId: string;
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      backgroundColor: string[];
      borderColor: string[];
      borderWidth: number;
    }[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export { User, Transaction, ChartData };
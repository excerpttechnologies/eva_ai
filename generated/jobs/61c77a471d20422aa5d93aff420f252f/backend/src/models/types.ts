// models/types.ts

interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'teacher' | 'student';
  createdAt: Date;
  updatedAt: Date;
}

interface Course {
  id: string;
  name: string;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface StudentPerformance {
  id: string;
  studentId: string;
  courseId: string;
  score: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  userId: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export { User, Course, StudentPerformance, Notification };
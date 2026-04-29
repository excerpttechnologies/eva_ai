// models/types.ts

export interface User {
  id: string;
  email: string;
  role: 'student' | 'teacher';
  createdAt: Date;
  updatedAt: Date;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  courseEnrollments: Course[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Grade {
  id: string;
  studentId: string;
  courseId: string;
  grade: number;
  createdAt: Date;
  updatedAt: Date;
}
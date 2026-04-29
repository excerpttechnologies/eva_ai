// models/types.ts

interface User {
  id: string;
  email: string;
  role: 'student' | 'teacher';
  createdAt: Date;
  updatedAt: Date;
}

interface Student extends User {
  id: string;
  email: string;
  name: string;
  grade: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Teacher extends User {
  id: string;
  email: string;
  name: string;
  subject: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Attendance {
  id: string;
  studentId: string;
  date: Date;
  status: 'present' | 'absent';
  createdAt: Date;
  updatedAt: Date;
}

export { User, Student, Teacher, Attendance };
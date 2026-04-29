// models/types.ts

interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher';
  createdAt: Date;
  updatedAt: Date;
}

interface Student extends User {
  studentId: string;
  grade: string;
  profilePicture: string;
}

interface Teacher extends User {
  teacherId: string;
  subject: string;
  profilePicture: string;
}

interface AttendanceRecord {
  id: string;
  studentId: string;
  attendanceDate: Date;
  status: 'present' | 'absent';
  createdAt: Date;
  updatedAt: Date;
}

export { User, Student, Teacher, AttendanceRecord };
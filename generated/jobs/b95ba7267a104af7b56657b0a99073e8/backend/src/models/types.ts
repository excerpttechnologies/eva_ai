// models/types.ts

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  createdAt: Date;
  updatedAt: Date;
}

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

interface ProjectForm {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ModalWindow {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export { Project, User, ProjectForm, ModalWindow };
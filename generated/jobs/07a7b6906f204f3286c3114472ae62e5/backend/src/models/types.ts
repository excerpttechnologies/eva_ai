// models/types.ts

interface User {
  id: string;
  email: string;
  username: string;
  profilePicture: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Post {
  id: string;
  userId: string;
  content: string;
  likes: number;
  comments: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Comment {
  id: string;
  postId: string;
  userId: string;
  content: string;
  likes: number;
  createdAt: Date;
  updatedAt: Date;
}

interface Notification {
  id: string;
  userId: string;
  type: 'like' | 'comment' | 'follow';
  postId?: string;
  commentId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export { User, Post, Comment, Notification };
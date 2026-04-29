export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: number;
  content: string;
  senderId: number;
  receiverId: number;
  conversationId: number;
  type: 'text' | 'image' | 'video' | 'file';
  createdAt: Date;
  updatedAt: Date;
}

export interface Conversation {
  id: number;
  name: string;
  type: 'private' | 'group';
  participants: number[];
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface File {
  id: number;
  name: string;
  type: 'image' | 'video' | 'file';
  size: number;
  uploadedAt: Date;
  downloadedAt: Date;
  conversationId: number;
}
// models/types.ts

interface Author {
  id: number;
  name: string;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Book {
  id: number;
  title: string;
  authorId: number;
  publicationDate: Date;
  review: Review;
  createdAt: Date;
  updatedAt: Date;
}

interface Review {
  id: number;
  bookId: number;
  rating: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Workshop {
  id: number;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  instructor: string;
  createdAt: Date;
  updatedAt: Date;
}

export { Author, Book, Review, Event, Workshop };
// models/types.ts

export interface Poem {
  id: number;
  title: string;
  content: string;
  analysis: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PoemTag {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface PoemDisplay {
  id: number;
  poemId: number;
  displayDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface PoemCollection {
  id: number;
  name: string;
  description: string;
  poems: Poem[];
  createdAt: Date;
  updatedAt: Date;
}
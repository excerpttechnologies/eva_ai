export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  tracks: Track[];
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: number;
  createdAt: Date;
  updatedAt: Date;
  playlistId: string;
}

export interface SearchQuery {
  query: string;
  type: 'track' | 'playlist';
  limit: number;
  offset: number;
}
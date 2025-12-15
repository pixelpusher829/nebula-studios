export interface Game {
  id: string;
  title: string;
  genre: string;
  image: string;
  rating: number;
  platforms: string[];
  year: string;
  description?: string; // Added for modal
  features?: string[]; // Added for modal
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  content: string; // Markdown content
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string; // Markdown content
}

export interface PressAsset {
  id: string;
  title: string;
  type: 'Logo' | 'Kit' | 'Guide';
  size: string;
  format: string;
  thumbnail: string; // CSS color or image URL
}
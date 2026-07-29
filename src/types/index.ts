export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  instructor: string;
  duration: string;
  lessons: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: string;
  rating: number;
  students: number;
  price: number | "Free";
  featured: boolean;
  tags: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: string;
  category: string;
  tags: string[];
  featured: boolean;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  views: string;
  publishedAt: string;
  category: string;
  videoUrl: string;
}

export interface Roadmap {
  id: string;
  title: string;
  description: string;
  icon: string;
  steps: RoadmapStep[];
  category: string;
  color: string;
}

export interface RoadmapStep {
  title: string;
  description: string;
  resources: string[];
  completed?: boolean;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: "cheatsheet" | "pdf" | "notes" | "interview" | "tool";
  downloadUrl: string;
  externalUrl?: string;
  category: string;
  tags: string[];
  featured: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Stat {
  label: string;
  value: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
  href: string;
}

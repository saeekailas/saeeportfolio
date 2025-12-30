
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export interface CodingProfile {
  platform: 'HackerRank' | 'LeetCode' | 'Codeforces' | 'CodeChef' | 'GitHub';
  username: string;
  url: string;
  icon: string;
  rating?: string;
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  pdfUrl: string; // Direct link to PDF
  id: string;
}

export interface ResearchEngagement {
  type: 'Conference' | 'Engagement';
  title: string;
  venue: string;
  date: string;
  role: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  link: string;
}

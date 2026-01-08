export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image?: string;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "tools" | "other";
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

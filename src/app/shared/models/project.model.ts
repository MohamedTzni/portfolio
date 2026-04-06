export interface ProjectStackItem {
  label: string;
  icon: string;
  alt: string;
}

export interface Project {
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  stack: ProjectStackItem[];
  preview: string;
  previewAlt: string;
  githubUrl: string;
  liveUrl: string;
  hidden?: boolean;
}

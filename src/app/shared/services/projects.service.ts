import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      title: 'projects.elPolloLoco.title',
      subtitle: 'projects.elPolloLoco.subtitle',
      description: 'projects.elPolloLoco.description',
      technologies: ['CSS', 'HTML', 'JavaScript'],
      stack: [
        {
          label: 'CSS',
          icon: 'assets/icon/skill-icon/css_icon.png',
          alt: 'CSS icon',
        },
        {
          label: 'HTML',
          icon: 'assets/icon/skill-icon/html_icon.png',
          alt: 'HTML icon',
        },
        {
          label: 'JavaScript',
          icon: 'assets/icon/skill-icon/javascript_icon.png',
          alt: 'JavaScript icon',
        },
      ],
      preview: 'assets/img/projects/el-pollo-loco.webp',
      previewAlt: 'El Pollo Loco gameplay preview',
      githubUrl: 'https://github.com/MohamedTzni/el-pollo-loco',
      liveUrl: 'http://el-pollo-loco.mohamed-touzani.de/',
    },
    {
      title: 'projects.join.title',
      subtitle: 'projects.join.subtitle',
      description: 'projects.join.description',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'CSS', 'HTML'],
      stack: [
        {
          label: 'Angular',
          icon: 'assets/icon/skill-icon/angular_icon.png',
          alt: 'Angular icon',
        },
        {
          label: 'TypeScript',
          icon: 'assets/icon/skill-icon/typescript_icon.png',
          alt: 'TypeScript icon',
        },
        {
          label: 'Firebase',
          icon: 'assets/icon/skill-icon/firebase_icon.png',
          alt: 'Firebase icon',
        },
        {
          label: 'CSS',
          icon: 'assets/icon/skill-icon/css_icon.png',
          alt: 'CSS icon',
        },
        {
          label: 'HTML',
          icon: 'assets/icon/skill-icon/html_icon.png',
          alt: 'HTML icon',
        },
      ],
      preview: 'assets/img/projects/join.webp',
      previewAlt: 'Join project board preview',
      githubUrl: 'https://github.com/MohamedTzni/join',
      liveUrl: 'http://join.mohamed-touzani.de/',
    },
    {
      title: 'projects.coderr.title',
      subtitle: 'projects.coderr.subtitle',
      description: 'projects.coderr.description',
      technologies: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Docker'],
      stack: [
        {
          label: 'Python',
          icon: 'assets/icon/skill-icon/Python.png',
          alt: 'Python icon',
        },
        {
          label: 'Django',
          icon: 'assets/icon/skill-icon/Django.png',
          alt: 'Django icon',
        },
        {
          label: 'PostgreSQL',
          icon: 'assets/icon/skill-icon/PostgreSQL.png',
          alt: 'PostgreSQL icon',
        },
        {
          label: 'Docker',
          icon: 'assets/icon/skill-icon/Docker.png',
          alt: 'Docker icon',
        },
      ],
      preview: 'assets/img/projects/coderr.png',
      previewAlt: 'Coderr platform preview',
      githubUrl: 'https://github.com/MohamedTzni/coderr',
      liveUrl: 'https://coderr.mohamed-touzani.de',
    },
    {
      title: 'projects.videoflix.title',
      subtitle: 'projects.videoflix.subtitle',
      description: 'projects.videoflix.description',
      technologies: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', 'Docker', 'Cloud'],
      stack: [
        {
          label: 'Python',
          icon: 'assets/icon/skill-icon/Python.png',
          alt: 'Python icon',
        },
        {
          label: 'Django',
          icon: 'assets/icon/skill-icon/Django.png',
          alt: 'Django icon',
        },
        {
          label: 'Django REST Framework',
          icon: 'assets/icon/skill-icon/api_icon.png',
          alt: 'API icon',
        },
        {
          label: 'PostgreSQL',
          icon: 'assets/icon/skill-icon/PostgreSQL.png',
          alt: 'PostgreSQL icon',
        },
        {
          label: 'Docker',
          icon: 'assets/icon/skill-icon/Docker.png',
          alt: 'Docker icon',
        },
        {
          label: 'Cloud',
          icon: 'assets/icon/skill-icon/Cloud.png',
          alt: 'Cloud icon',
        },
      ],
      preview: 'assets/img/projects/videoflix.png',
      previewAlt: 'VideoFlix streaming platform preview',
      githubUrl: 'https://github.com/MohamedTzni/videoflix',
      liveUrl: 'https://videoflix.mohamed-touzani.de/',
    },
    {
      title: 'projects.placeholder.title',
      subtitle: 'projects.placeholder.subtitle',
      description: 'projects.placeholder.description',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'CSS'],
      stack: [
        {
          label: 'Angular',
          icon: 'assets/icon/skill-icon/angular_icon.png',
          alt: 'Angular icon',
        },
        {
          label: 'TypeScript',
          icon: 'assets/icon/skill-icon/typescript_icon.png',
          alt: 'TypeScript icon',
        },
        {
          label: 'Firebase',
          icon: 'assets/icon/skill-icon/firebase_icon.png',
          alt: 'Firebase icon',
        },
        {
          label: 'CSS',
          icon: 'assets/icon/skill-icon/css_icon.png',
          alt: 'CSS icon',
        },
      ],
      preview: 'assets/img/projects/placeholder.png',
      previewAlt: 'Placeholder application preview',
      githubUrl: 'https://github.com/yourusername',
      liveUrl: 'https://yourwebsite.com',
      hidden: true,
    },
    {
      title: 'projects.placeholder2.title',
      subtitle: 'projects.placeholder2.subtitle',
      description: 'projects.placeholder2.description',
      technologies: ['Angular', 'TypeScript', 'Firebase', 'CSS'],
      stack: [
        {
          label: 'Angular',
          icon: 'assets/icon/skill-icon/angular_icon.png',
          alt: 'Angular icon',
        },
        {
          label: 'TypeScript',
          icon: 'assets/icon/skill-icon/typescript_icon.png',
          alt: 'TypeScript icon',
        },
        {
          label: 'Firebase',
          icon: 'assets/icon/skill-icon/firebase_icon.png',
          alt: 'Firebase icon',
        },
        {
          label: 'CSS',
          icon: 'assets/icon/skill-icon/css_icon.png',
          alt: 'CSS icon',
        },
      ],
      preview: 'assets/img/projects/placeholder.png',
      previewAlt: 'Placeholder application preview',
      githubUrl: 'https://github.com/yourusername',
      liveUrl: 'https://yourwebsite.com',
      hidden: true,
    },
  ];

  /**
   * Returns all available projects.
   * @returns {Project[]} Array of all projects.
   */
  getProjects(): Project[] {
    return this.projects.filter(p => !p.hidden);
  }

  /**
   * Returns a project by its index.
   * @param {number} index - The index of the project.
   * @returns {Project | null} The project at the given index or null if not found.
   */
  getProjectByIndex(index: number): Project | null {
    if (index < 0 || index >= this.projects.length) {
      return null;
    }
    return this.projects[index];
  }

  /**
   * Returns the total number of projects.
   * @returns {number} The total count of projects.
   */
  getProjectCount(): number {
    return this.projects.length;
  }
}

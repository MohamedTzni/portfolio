import { Component } from '@angular/core';
import { ProfileImage } from './profile-image/profile-image';
import { AboutContent } from './about-content/about-content';

@Component({
  standalone: true,
  selector: 'app-about-me',
  imports: [ProfileImage, AboutContent],
  templateUrl: './about-me-section.html',
  styleUrl: './about-me-section.scss',
})
export class AboutMe {}

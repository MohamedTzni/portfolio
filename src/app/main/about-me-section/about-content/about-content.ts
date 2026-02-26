import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';

@Component({
  standalone: true,
  selector: 'app-about-content',
  imports: [TranslocoPipe],
  templateUrl: './about-content.html',
  styleUrl: './about-content.scss',
})
export class AboutContent {}

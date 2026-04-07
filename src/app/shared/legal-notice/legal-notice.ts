import { Component, OnInit } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { Footer } from '../footer/footer';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-legal-notice',
  imports: [TranslocoPipe, Footer],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goBack(): void {
    this.router.navigate(['/']).then(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  }
}

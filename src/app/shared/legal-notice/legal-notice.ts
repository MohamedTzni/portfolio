import { Component } from '@angular/core';
import { TranslocoPipe } from '@jsverse/transloco';
import { Footer } from '../footer/footer';

@Component({
  standalone: true,
  selector: 'app-legal-notice',
  imports: [TranslocoPipe, Footer],
  templateUrl: './legal-notice.html',
  styleUrl: './legal-notice.scss',
})
export class LegalNotice {
  goBack(): void {
    window.history.back();
  }
}

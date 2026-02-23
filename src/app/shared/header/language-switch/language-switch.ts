import { Component, inject } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  standalone: true,
  selector: 'app-language-switch',
  imports: [],
  templateUrl: './language-switch.html',
  styleUrl: './language-switch.scss',
})
export class LanguageSwitch {
  private translocoService = inject(TranslocoService);

  activeLanguage: 'en' | 'de' = 'de';
  isHovering = false;

  ngOnInit() {
    const savedLanguage = this.getSavedLanguage();
    this.initializeLanguage(savedLanguage);
  }

  private getSavedLanguage(): 'en' | 'de' | null {
    return localStorage.getItem('preferredLanguage') as 'en' | 'de' | null;
  }

  private initializeLanguage(savedLanguage: 'en' | 'de' | null): void {
    if (savedLanguage) {
      this.activeLanguage = savedLanguage;
      this.translocoService.setActiveLang(savedLanguage);
    } else {
      this.activeLanguage = this.translocoService.getActiveLang() as 'en' | 'de';
    }
  }

  setLanguage(language: 'en' | 'de'): void {
    if (this.activeLanguage === language) {
      return;
    }
    this.activeLanguage = language;
    this.translocoService.setActiveLang(language);
    localStorage.setItem('preferredLanguage', language);
  }
}

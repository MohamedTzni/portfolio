import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnDestroy,
  HostListener,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslocoService, TranslocoPipe } from '@jsverse/transloco';
import { BodyScrollService } from '../../services/body-scroll.service';

@Component({
  standalone: true,
  selector: 'app-burger-menu',
  imports: [TranslocoPipe],
  templateUrl: './burger-menu.html',
  styleUrl: './burger-menu.scss',
})
export class BurgerMenu implements OnChanges, OnDestroy {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  private translocoService = inject(TranslocoService);
  private bodyScrollService = inject(BodyScrollService);
  private router = inject(Router);

  currentLanguage: 'en' | 'de' = 'de';

  constructor() {
    this.currentLanguage = this.translocoService.getActiveLang() as 'en' | 'de';
    this.translocoService.langChanges$.subscribe((lang) => {
      this.currentLanguage = lang as 'en' | 'de';
    });
  }

  @HostListener('document:keydown', ['$event'])
  protected onDocumentKeydown(event: KeyboardEvent): void {
    if (event.key !== 'Escape' || !this.isOpen) {
      return;
    }
    event.preventDefault();
    this.close.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isOpen']) {
      this.handleMenuStateChange();
    }
  }

  ngOnDestroy(): void {
    this.bodyScrollService.unlock();
  }

  onLinkClick(event: Event): void {
    event.preventDefault();
    const href = this.extractHref(event);
    if (href) {
      this.handleNavigation(href);
    }
    this.close.emit();
  }

  private handleMenuStateChange(): void {
    if (this.isOpen) {
      this.bodyScrollService.lock();
    } else {
      this.bodyScrollService.unlock();
    }
  }

  private extractHref(event: Event): string | null {
    const target = event.currentTarget as HTMLAnchorElement;
    return target.getAttribute('href');
  }

  private handleNavigation(href: string): void {
    if (this.router.url !== '/') {
      this.navigateToHomeAndScroll(href);
    } else {
      this.scrollToElement(href);
    }
  }

  private navigateToHomeAndScroll(href: string): void {
    this.router.navigate(['/']).then(() => {
      setTimeout(() => this.scrollToElement(href), 100);
    });
  }

  private scrollToElement(href: string): void {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onBackdropClick(): void {
    this.close.emit();
  }

  switchLanguage(lang: 'en' | 'de'): void {
    if (this.currentLanguage === lang) {
      return;
    }
    this.currentLanguage = lang;
    this.translocoService.setActiveLang(lang);
    localStorage.setItem('preferredLanguage', lang);
  }
}

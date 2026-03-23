import {
  Component,
  signal,
  ElementRef,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  Renderer2,
  HostListener,
  inject,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { BodyScrollService } from './shared/services/body-scroll.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('portfolio');

  @ViewChild('cursorShadow') cursorShadow!: ElementRef<HTMLDivElement>;
  private isTouchDevice = false;
  private readonly bodyScrollService = inject(BodyScrollService);

  constructor(private renderer: Renderer2) {
    this.detectTouchDevice();
  }

  private detectTouchDevice(): void {
    this.isTouchDevice =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (navigator as any).msMaxTouchPoints > 0;

    if (this.isTouchDevice) {
      this.renderer.addClass(document.body, 'touch-device');
    }
  }

  ngAfterViewInit() {
    if (!this.isTouchDevice) {
      this.initializeCursor();
    }
  }

  ngOnDestroy() {
    this.bodyScrollService.forceUnlock();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isTouchDevice) return;
    this.updateCursorPosition(event.clientX, event.clientY);
    this.checkHoverState(event);
  }

  @HostListener('document:mouseleave')
  onMouseLeave() {
    if (this.isTouchDevice) return;
    this.renderer.addClass(document.body, 'cursor-hidden');
  }

  @HostListener('document:mouseenter')
  onMouseEnter() {
    if (this.isTouchDevice) return;
    this.renderer.removeClass(document.body, 'cursor-hidden');
  }

  /** Sets cursor to viewport center on init. */
  private initializeCursor(): void {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    this.updateCursorPosition(centerX, centerY);
  }

  private updateCursorPosition(x: number, y: number): void {
    if (!this.cursorShadow) return;
    this.renderer.setStyle(this.cursorShadow.nativeElement, 'left', `${x}px`);
    this.renderer.setStyle(this.cursorShadow.nativeElement, 'top', `${y}px`);
  }

  private checkHoverState(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const isInteractive = this.isInteractiveElement(target);
    this.toggleCursorHoverClass(isInteractive);
  }

  private isInteractiveElement(target: HTMLElement): boolean {
    return !!target.closest('a, button, [role="button"], input, textarea, select, .clickable');
  }

  private toggleCursorHoverClass(isHovering: boolean): void {
    const method = isHovering ? 'addClass' : 'removeClass';
    this.renderer[method](this.cursorShadow.nativeElement, 'cursor-hover');
  }
}

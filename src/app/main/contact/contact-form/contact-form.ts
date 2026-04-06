import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslocoPipe, TranslocoService } from '@jsverse/transloco';
import { EmailService } from '../../../shared/services/email.service';

@Component({
  standalone: true,
  selector: 'app-contact-form',
  imports: [FormsModule, CommonModule, RouterLink, TranslocoPipe],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
})
export class ContactForm {
  private translocoService = inject(TranslocoService);
  private emailService = inject(EmailService);

  name = '';
  email = '';
  message = '';
  privacyAccepted = false;

  nameError = false;
  emailError = false;
  messageError = false;
  privacyError = false;

  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  get nameErrorMessage(): string {
    return this.translocoService.translate('contact.form.nameError');
  }

  get emailErrorMessage(): string {
    return this.translocoService.translate('contact.form.emailError');
  }

  get messageErrorMessage(): string {
    return this.translocoService.translate('contact.form.messageError');
  }

  onNameInput(): void {
    if (this.nameError) {
      this.nameError = false;
    }
  }

  onNameBlur(): void {
    if (!this.name || this.name.trim() === '') {
      this.nameError = true;
    }
  }

  onEmailInput(): void {
    if (this.emailError) {
      this.emailError = false;
    }
  }

  onEmailBlur(): void {
    if (!this.email || this.email.trim() === '') {
      this.emailError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      this.emailError = !emailRegex.test(this.email);
    }
  }

  onMessageInput(): void {
    if (this.messageError) {
      this.messageError = false;
    }
  }

  onMessageBlur(): void {
    if (!this.message || this.message.trim() === '') {
      this.messageError = true;
    }
  }

  onPrivacyChange(): void {
    if (this.privacyAccepted) {
      this.privacyError = false;
    }
  }

  async onSubmit(): Promise<void> {
    this.resetErrors();

    if (!this.validateForm()) {
      return;
    }

    this.isSubmitting = true;
    await this.submitForm();
  }

  private resetErrors(): void {
    this.nameError = false;
    this.emailError = false;
    this.messageError = false;
    this.privacyError = false;
    this.submitSuccess = false;
    this.submitError = false;
  }

  private validateForm(): boolean {
    const nameValid = this.validateName();
    const emailValid = this.validateEmail();
    const messageValid = this.validateMessage();
    const privacyValid = this.validatePrivacy();

    return nameValid && emailValid && messageValid && privacyValid;
  }

  private validateName(): boolean {
    if (!this.name || this.name.trim() === '') {
      this.nameError = true;
      return false;
    }
    return true;
  }

  private validateEmail(): boolean {
    if (!this.email || this.email.trim() === '') {
      this.emailError = true;
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.emailError = true;
      return false;
    }

    return true;
  }

  private validateMessage(): boolean {
    if (!this.message || this.message.trim() === '') {
      this.messageError = true;
      return false;
    }
    return true;
  }

  private validatePrivacy(): boolean {
    if (!this.privacyAccepted) {
      this.privacyError = true;
      return false;
    }
    return true;
  }

  private async submitForm(): Promise<void> {
    try {
      await this.sendEmail();
      this.handleSuccess();
    } catch (error) {
      this.handleError(error);
    }
  }

  private async sendEmail(): Promise<void> {
    await this.emailService.sendContactEmail(
      this.name.trim(),
      this.email.trim(),
      this.message.trim()
    );
  }

  private handleSuccess(): void {
    this.submitSuccess = true;
    this.isSubmitting = false;
    this.resetForm();
    this.scheduleSuccessReset();
  }

  private handleError(error: unknown): void {
    this.submitError = true;
    this.isSubmitting = false;
    console.error('Failed to send email:', error);
    this.scheduleErrorReset();
  }

  private resetForm(): void {
    this.name = '';
    this.email = '';
    this.message = '';
    this.privacyAccepted = false;
  }

  private scheduleSuccessReset(): void {
    setTimeout(() => {
      this.submitSuccess = false;
    }, 5000);
  }

  private scheduleErrorReset(): void {
    setTimeout(() => {
      this.submitError = false;
    }, 5000);
  }
}

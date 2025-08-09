import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });
  sending = false;
  successMessage = '';
  errorMessage = '';
  envEmailJS = environment.emailJS;
  email = 'lazar.cassandra@gmail.com';

  async sendEmail() {
    if (this.contactForm.invalid) return;

    this.sending = true;
    this.errorMessage = '';
    this.successMessage = '';

    const templateParams = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };

    try {
      await emailjs.send(
        this.envEmailJS.serviceID,
        this.envEmailJS.templateID,
        templateParams,
        this.envEmailJS.publicKey
      );
      this.successMessage = 'Message sent successfully!';
      this.resetContactForm();
    } catch (error) {
      this.errorMessage = 'Failed to send message, please try again.';
      this.resetContactForm();
    }
  }

  resetContactForm() {
    this.sending = false;
    this.contactForm.reset();

    setTimeout(() => {
      this.successMessage = '';
      this.errorMessage = '';
    }, 3000);
  }
}

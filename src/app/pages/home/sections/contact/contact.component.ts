import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})

//   const serviceID = 'service_y57gy5a';
//   const templateID = 'template_ed2ga9q';
//   const userID = 'qRoiYsoDIwvmFds2E';
export class ContactComponent {
  email = 'lazar.cassandra@gmail.com';

  // name = '';
  // email = '';
  // message = '';
  // sending = false;
  // successMessage = '';
  // errorMessage = '';

  // sendEmail() {
  //   if (!this.name || !this.email || !this.message) {
  //     this.errorMessage = 'Please fill in all fields';
  //     return;
  //   }

  //   this.sending = true;
  //   this.errorMessage = '';
  //   this.successMessage = '';

  //   const templateParams = {
  //     from_name: this.name,
  //     from_email: this.email,
  //     message: this.message,
  //   };

  //   emailjs
  //     .send(
  //       'YOUR_SERVICE_ID',
  //       'YOUR_TEMPLATE_ID',
  //       templateParams,
  //       'YOUR_PUBLIC_KEY'
  //     )
  //     .then(
  //       (response) => {
  //         this.sending = false;
  //         this.successMessage = 'Message sent successfully!';
  //         this.name = '';
  //         this.email = '';
  //         this.message = '';
  //       },
  //       (error) => {
  //         this.sending = false;
  //         this.errorMessage = 'Failed to send message, please try again.';
  //         console.error('EmailJS error:', error);
  //       }
  //     );
  // }

  contactForm: FormGroup;
  sending = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  sendEmail() {
    if (this.contactForm.invalid) return;

    this.sending = true;
    this.successMessage = '';
    this.errorMessage = '';

    // Simulare trimitere email
    setTimeout(() => {
      this.sending = false;
      this.successMessage = 'Your message has been sent!';
      this.contactForm.reset();
    }, 1500);
  }
}

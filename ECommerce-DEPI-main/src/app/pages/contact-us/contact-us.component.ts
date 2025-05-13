import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    this.errorMessage = this.validateForm(this.name, this.email, this.message);

    if (this.errorMessage) {
      alert(this.errorMessage);
      return;
    }

    alert('Your message was sent successfully! Redirecting to home page...');
    this.router.navigate(['/']);
  }

  validateForm(name: string, email: string, message: string): string {
    if (!name) {
      return 'Name is required';
    }
    if (!email) {
      return 'Email is required';
    }
    if (!message) {
      return 'Message is required';
    }
    return '';
  }
}

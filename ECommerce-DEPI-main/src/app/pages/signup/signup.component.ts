import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  firstname: string = '';
  email: string = '';
  password: string = '';
  repeatPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onClick() {
    this.errorMessage = this.validateSignup(
      this.firstname,
      this.email,
      this.password,
      this.repeatPassword
    );

    if (this.errorMessage) {
      alert(this.errorMessage);
      return;
    }

    alert('Sign up successful! Redirecting to home page...');
    this.router.navigate(['/']);
  }

  ngOnInit(): void {}

  validateSignup(
    firstname: string,
    email: string,
    password: string,
    repeatPassword: string
  ): string {
    if (!firstname) {
      return 'Firstname is required';
    }
    if (!email) {
      return 'Email is required';
    }
    if (!password) {
      return 'Password is required';
    }
    if (password.length < 8) {
      return 'Password must have at least 8 characters';
    }
    if (password !== repeatPassword) {
      return 'Password does not match';
    }
    return '';
  }
}

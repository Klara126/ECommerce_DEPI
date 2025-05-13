import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true, 
  imports: [FormsModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onClick() {  // Validates the form
    this.errorMessage = this.getLoginFormError(this.email, this.password);
    if (this.errorMessage) {
      alert(this.errorMessage);
      return;
    }

    alert('Log in successful! Redirecting to home page...');
    this.router.navigate(['/']);//and here we will be redirected to home page
  }

  ngOnInit(): void {}

  getLoginFormError(email: string, password: string): string {
    if (!email) {
      return 'Email is required';
    }
    if (!password) {
      return 'Password is required';
    }
    return ''; // No error
  }
}
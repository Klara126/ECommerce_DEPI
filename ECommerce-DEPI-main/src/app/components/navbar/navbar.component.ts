import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] 
})
export class NavbarComponent {
  isNavbarOpen = false; 
  isSearchVisible = false; 

  constructor(private router: Router) {} 

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  toggleSearch() {
    this.isSearchVisible = !this.isSearchVisible; 
  }
  scrollToSearchBar() {
    const searchBarElement = document.getElementById('homepage-search-bar');
    if (searchBarElement) {
      searchBarElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
  isLoginOrSignup(): boolean {
    const currentRoute = this.router.url;
    return currentRoute === '/login' || currentRoute === '/signup';
  }
}


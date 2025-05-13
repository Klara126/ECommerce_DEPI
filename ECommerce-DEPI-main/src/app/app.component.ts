import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { UserComponent } from './user/user.component';
import {HomepageComponent} from './pages/homepage/homepage.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component'
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FooterComponent } from './pages/footer/footer.component';
// import { CardProductService } from './services/card-product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserComponent,HomepageComponent,NavbarComponent,ContactUsComponent,CheckoutComponent,FooterComponent],
  // providers: [CardProductService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}

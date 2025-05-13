import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'login', component: LoginComponent }, 
    { path: 'signup', component: SignupComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
];



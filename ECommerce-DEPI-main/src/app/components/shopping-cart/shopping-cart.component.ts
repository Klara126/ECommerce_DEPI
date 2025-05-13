import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart: Product[] = []; //  this Array will store the products in the cart

  constructor() {}

  ngOnInit(): void {}

  addToCart(product: Product): void {
    this.cart.push(product);
    alert(`${product.name} has been added to your cart!`);
  }

  removeFromCart(productId: number): void {
    this.cart = this.cart.filter(product => product.id !== productId);
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }

  clearCart(): void {
    this.cart = [];
  }
}


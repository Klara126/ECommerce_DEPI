import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { card } from '../../database/card';
import { CommonModule } from '@angular/common';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  card=card;
  constructor(private router: Router) {}
  ngOnInit(): void {}
  onCheckoutClick() {
    alert('Checkout successful! Redirecting to home page...');
    
  this.router.navigate(['/']);
  }
   getTotalPrice(card: Card[]): number {
    const total = card.reduce((total, item) => total + item.price, 0);
  return Math.round(total * 100) / 100;
  }
  RemoveFromCard(id:number){
    console.log(this.card[id])
    this.card.splice(id-1, 1);
  }
}


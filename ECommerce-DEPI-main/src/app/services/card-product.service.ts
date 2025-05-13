// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
// import { Card } from '../models/card.model'; // Adjust import as necessary

// @Injectable({
//   providedIn: 'root'
// })
// export class CardProductService {
//   private card = new BehaviorSubject<Card[]>([]);
//   card$ = this.card.asObservable();

//   addToCard(product: Card): void {
//     const currentCard = this.card.getValue();
//     const updatedCard = [...currentCard, product];
//     this.card.next(updatedCard);
//     console.log('Updated card array:', updatedCard); // Log the contents of the card array
//   }

//   getCard(): Card[] {
//     return this.card.getValue();
//   }
// }

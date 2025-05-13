import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../../components/product-card/product-card.component'; 
import { products } from '../../database/product';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  standalone: true, 
  imports: [CommonModule, ProductCardComponent,FormsModule] 
})


export class HomepageComponent implements OnInit {
  products = products;
  filteredProducts = products; //this is responsible for filtering products

  //and this is the array of categories
  categories = [
    { name: 'All' },
    { name: 'Shirt', icon: 'fas fa-tshirt' },
    { name: 'Dress', icon: 'fas fa-female' },
    { name: 'Suits', icon: 'fas fa-suitcase' },
    { name: 'Accessories', icon: 'fas fa-ring' },
    { name: 'Pants', icon: 'fa-solid fa-person' },
  ];
   

  constructor() { }

  ngOnInit(): void { }

  filterProducts(category: string) {
    if (category === 'All') {
      this.filteredProducts = this.products; //it will display all products with no filteration
    } else {
      this.filteredProducts = this.products.filter(product => product.category === category); // but this will Filter by spec selected category
    }
  }
  
  searchTerm: string = '';
  searchProducts() {
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

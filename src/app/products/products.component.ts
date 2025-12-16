import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  searchTerm = '';

  products = [
    {
      id: 1,
      name: 'Laptop',
      description: 'High-performance business laptop',
      price: 1200
    },
    {
      id: 2,
      name: 'Smartphone',
      description: 'Latest generation smartphone',
      price: 850
    },
    {
      id: 3,
      name: 'Tablet',
      description: 'Lightweight tablet for work and play',
      price: 500
    }
  ];

  filteredProducts() {
    return this.products.filter(product =>
      product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}

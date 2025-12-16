import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  product: any;

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

  constructor(private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.products.find(p => p.id === id);
  }
}

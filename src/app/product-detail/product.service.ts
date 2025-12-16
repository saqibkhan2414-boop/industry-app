import { Injectable } from '@angular/core';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: '1', name: 'Industrial Robot', description: 'High precision industrial robot.', price: 15000, category: 'Automation', imageUrl: 'assets/robot.jpg' },
    { id: '2', name: 'Conveyor Belt', description: 'Durable conveyor belt system.', price: 5000, category: 'Logistics', imageUrl: 'assets/conveyor.jpg' },
    { id: '3', name: '3D Printer', description: 'Fast 3D printer for prototyping.', price: 1200, category: 'Manufacturing', imageUrl: 'assets/3dprinter.jpg' },
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: string | null) {
    return this.products.find(p => p.id === id) ?? null;
  }
}

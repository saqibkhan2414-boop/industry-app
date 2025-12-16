import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Welcome to the Industry App</h1>
    <a routerLink="/products">View Products</a>
  `
})
export class HomeComponent {}

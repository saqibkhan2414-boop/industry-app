import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.component')
        .then(m => m.ProductsComponent)
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('./product-detail/product-detail.component')
        .then(m => m.ProductDetailComponent)
  }
];


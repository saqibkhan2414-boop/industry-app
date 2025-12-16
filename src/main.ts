import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { ProductsComponent } from './app/products/products.component';
import { ProductDetailComponent } from './app/product-detail/product-detail.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/:id', component: ProductDetailComponent }
    ])
  ]
}).catch(err => console.error(err));

import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { ProductsComponent } from './app/products/products.component';
import { ProductDetailComponent } from './app/product-detail/product-detail.component';

// Server bootstrap function
const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(AppComponent, {
    providers: [
      provideRouter([
        { path: '', component: HomeComponent },
        { path: 'products', component: ProductsComponent },
        { path: 'products/:id', component: ProductDetailComponent }
      ])
    ]
  }, context);

export default bootstrap;

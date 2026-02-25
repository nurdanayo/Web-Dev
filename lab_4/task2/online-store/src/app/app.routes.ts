import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductDetailsComponent } from './components/product-details/product-details';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'products/:id', component: ProductDetailsComponent },
];
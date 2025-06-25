import { CartPageComponent } from './cart-page/cart-page.component';
import { Routes } from '@angular/router';
import { ProductPageComponent } from './product-page/product-page.component';

export const routes: Routes = [
  { path: 'products', component: ProductPageComponent },
  { path: 'cart', component: CartPageComponent },
];

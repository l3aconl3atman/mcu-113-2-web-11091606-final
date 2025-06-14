import { Routes } from '@angular/router';
import { CartPageComponent } from './cart-page/cart-page.component';
import { ProductPageComponent } from './product-page/product-page.component';
// import { ProductCartPageComponent } from './product-cart-page/product-cart-page.component';

export const routes: Routes = [
  { path: 'products', component: ProductPageComponent },
  { path: 'cart', component: CartPageComponent },
];

import { Routes } from '@angular/router';
import { ProductFormPageComponent } from './product-form-page/product-form-page.component';
// import { ProductCartPageComponent } from './product-cart-page/product-cart-page.component';

export const routes: Routes = [
  { path: 'products', component: ProductFormPageComponent },
  // { path: 'cart', component: ProductCartPageComponent },
  //   { path: 'products', component: ProductComponent },
];

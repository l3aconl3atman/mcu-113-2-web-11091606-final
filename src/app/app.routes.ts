import { Routes } from '@angular/router';
import { ProductFormPageComponent } from './product-form-page/product-form-page.component';

export const routes: Routes = [
  { path: 'product/form/:id', component: ProductFormPageComponent },
  //   { path: 'products', component: ProductComponent },
];

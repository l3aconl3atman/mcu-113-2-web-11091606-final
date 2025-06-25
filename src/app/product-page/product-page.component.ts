import { Component, Input } from '@angular/core';
import { ProductCardListComponent } from '../product-card-list/product-card-list.component';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-page',
  imports: [ProductCardListComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  products = [
    new Product({
      id: 1,
      name: 'A 產品',
      authors: '作者 A, 作者 B, 作者 C',
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 10000,
    }),
    new Product({
      id: 2,
      name: 'B 產品',
      authors: '作者 A, 作者 B, 作者 C',
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 10000,
    }),
    new Product({
      id: 3,
      name: 'C 產品',
      authors: '作者 A, 作者 B, 作者 C',
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 10000,
    }),
    new Product({
      id: 4,
      name: 'D 產品',
      authors: '作者 A, 作者 B, 作者 C',
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 10000,
    }),
    new Product({
      id: 5,
      name: 'E 產品',
      authors: '作者 A, 作者 B, 作者 C',
      company: '博碩文化',
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
      price: 10000,
    }),
  ];
}

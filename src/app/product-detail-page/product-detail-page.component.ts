import { Component, inject } from '@angular/core';
import { Product } from '../models/product';
import { CurrencyPipe } from '@angular/common';

import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail-page',
  imports: [CurrencyPipe],
  templateUrl: './product-detail-page.component.html',
  styleUrl: './product-detail-page.component.scss',
})
export class ProductDetailPageComponent {
  product = new Product({
    name: '書籍 Z',
    authors: ['作者甲', '作者乙', '作者丙'],
    company: '博碩文化',
    createDate: new Date('2025/8/5'),
    photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    price: 10000,
  });

  readonly router = inject(Router);

  private productService = inject(ProductService);

  onBack(): void {
    this.router.navigate(['products']);
  }
}

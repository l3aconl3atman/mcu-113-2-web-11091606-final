import { Component, input, output } from '@angular/core';
import { Product } from '../models/product';
import { PaginationComponent } from '../pagination/pagination.component';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-card-list',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
})
export class ProductCardListComponent {
  products = input<Product[]>();

  pageIndex = 1;

  readonly view = output<Product>();

  readonly add = output<Product>();
}

import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  Component,
  HostBinding,
  Input,
  input,
  numberAttribute,
  output,
} from '@angular/core';
import { Product } from '../models/product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  readonly id = input.required<number, string | number>({
    transform: numberAttribute,
  });
  readonly productName = input.required<string>();

  readonly authors = input.required<string[]>();

  readonly company = input.required<string>();

  readonly photoUrl = input.required<string>();

  readonly price = input<number, number | string>(0, {
    transform: numberAttribute,
  });

  readonly createDate = input<Date>();

  readonly view = output<void>();

  readonly add = output<void>();

  @HostBinding('class')
  class = 'app-product-card';

  // product = input<Product[]>();

  @Input({ required: true }) product!: Product;

  constructor(private cartService: CartService) {}

  onAddToCart(): void {
    this.cartService.addToCart(this.product);
  }
}

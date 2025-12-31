import { Component, input, output } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-items',
  imports: [],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss',
})
export class CartItemsComponent {
  constructor(private cartService: CartService) {}

  products() {
    return this.cartService.groupedCartItems();
  }

  onDelete(productId: number) {
    this.cartService.removeProducts(productId);
  }
}

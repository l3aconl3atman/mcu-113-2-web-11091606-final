import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-items',
  imports: [],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss',
})
export class CartItemsComponent {
  constructor(private cartService: CartService) {}

  getCartItems() {
    return this.cartService.cartItems();
  }

  removeCartItem(productId: number) {
    this.cartService.removeCartItem(productId);
  }
}

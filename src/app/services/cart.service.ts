import { computed, effect, Injectable, input, signal } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {
    effect(() => {
      const items = this._cartItems();
      console.log('Current Cart Status: ', items);
    });
  }

  private readonly _cartItems = signal<Product[]>([]);

  readonly cartItems = this._cartItems.asReadonly();

  readonly cartCount = computed(() => this._cartItems().length);

  addToCart(product: Product) {
    this._cartItems.update((items) => [...items, product]);
    // console.log(this._cartItems());
    // this._cartItems().push();
  }

  /* Delete items from Cart */
  // delete(id: Product[]): void {
  //   this.emit;
  // }
}

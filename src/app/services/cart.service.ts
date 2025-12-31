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
  }

  /* Delete items from Cart */
  // delete(id: Product[]): void {
  //   this.emit;
  // }

  readonly groupedCartItems = computed(() => {
    const items = this._cartItems();

    const map = new Map<number, { product: Product; quantity: number }>();

    for (const product of items) {
      if (map.has(product.id)) {
        map.get(product.id)!.quantity++;
      } else {
        map.set(product.id, { product, quantity: 1 });
      }
    }

    return Array.from(map.values());
  });

  removeProducts(productId: number) {
    this._cartItems.update((items) =>
      items.filter((item) => item.id !== productId),
    );
  }
}

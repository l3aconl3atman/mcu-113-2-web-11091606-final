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

  submitInformation(name: string, address: string, phoneNum: string) {
    console.log(name, address, phoneNum);
  }

  readonly groupedCartItems = computed(() => {
    const items = this._cartItems();

    const map = new Map<
      number,
      {
        product: Product;
        quantity: number;
      }
    >();

    for (const item of items) {
      if (map.has(item.id)) {
        map.get(item.id)!.quantity++;
      } else {
        map.set(item.id, { product: item, quantity: 1 });
      }
    }

    // return Array.from(map.values());
    return [map.values()];
  });

  removeCartItem(productId: number) {
    this._cartItems.update((items) =>
      items.filter((item) => item.id !== productId),
    );
  }
}

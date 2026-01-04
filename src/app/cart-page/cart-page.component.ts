import { Component } from '@angular/core';

import { PersonalInfoComponent } from '../personal-info/personal-info.component';
import { CartItemsComponent } from '../cart-items/cart-items.component';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  imports: [PersonalInfoComponent, CartItemsComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  constructor(public cartService: CartService) {
    cartService = this.cartService;
  }
}

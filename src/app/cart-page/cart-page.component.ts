import { Component } from '@angular/core';

import { PersonalInfoComponent } from '../personal-info/personal-info.component';

@Component({
  selector: 'app-cart-page',
  imports: [PersonalInfoComponent],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {}

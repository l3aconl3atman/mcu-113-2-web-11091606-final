import { Component, inject, output } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-page',
  imports: [ReactiveFormsModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent {
  products() {
    throw new Error('Method not implemented.');
  }
  form = new FormGroup({
    name: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    address: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    phoneNum: new FormControl<number | null>(null, {
      validators: [Validators.required],
    }),
  });

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get address(): FormControl<string | null> {
    return this.form.get('address') as FormControl<string | null>;
  }

  get phoneNum(): FormControl<string | null> {
    return this.form.get('phoneNum') as FormControl<string | null>;
  }
}

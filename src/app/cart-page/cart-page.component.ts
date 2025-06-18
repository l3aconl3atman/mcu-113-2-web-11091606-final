import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  imports: [ReactiveFormsModule],
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss',
})
export class CartPageComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private router = inject(Router);

  form = new FormGroup({
    name: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    address: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    phoneNo: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
  });

  get name(): FormControl<string | null> {
    return this.form.get('name') as FormControl<string | null>;
  }

  get phoneNo(): FormControl<string | null> {
    return this.form.get('phoneNo') as FormControl<string | null>;
  }

  get address(): FormControl<string | null> {
    return this.form.get('address') as FormControl<string | null>;
  }
}

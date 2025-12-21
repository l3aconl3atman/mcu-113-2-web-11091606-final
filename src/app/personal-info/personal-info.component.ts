import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-personal-info',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent {
  cartService = inject(CartService);
  products() {
    throw new Error('Method not implemented.');
  }

  personalInformationForm = new FormGroup({
    name: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    address: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    phoneNum: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
  });

  get name(): FormControl<string | null> {
    return this.personalInformationForm.get('name') as FormControl<
      string | null
    >;
  }

  get address(): FormControl<string | null> {
    return this.personalInformationForm.get('address') as FormControl<
      string | null
    >;
  }

  get phoneNum(): FormControl<string | null> {
    return this.personalInformationForm.get('phoneNum') as FormControl<
      string | null
    >;
  }

  submitInformation() {
    console.log('Submit Button has been Clicked!');
    this.cartService.submitInformation(
      this.personalInformationForm.value.name ?? '',
      this.personalInformationForm.value.address ?? '',
      this.personalInformationForm.value.phoneNum ?? '',
    );
  }
}

import { DatePipe } from '@angular/common';
import {
  booleanAttribute,
  Component,
  HostBinding,
  Input,
  input,
  numberAttribute,
  output,
} from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [DatePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  // @Input({ required: true, transform: numberAttribute }) id!: number;
  id = input.required<number>();
  productName = input.required<string>();
  authors = input.required<string[]>();
  company = input.required<string>();
  photoUrl = input.required<string>();

  createDate = input<Date>();

  @HostBinding('class')
  class = 'app-product-card';
}

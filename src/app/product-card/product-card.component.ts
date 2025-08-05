import { CurrencyPipe, DatePipe } from '@angular/common';
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
  imports: [DatePipe, CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true, transform: numberAttribute }) id!: number;
  productName = input.required<string>();
  authors = input.required<string[]>();
  company = input.required<string>();
  isShow = input.required<boolean, boolean>({ transform: booleanAttribute });
  isShowChange = output<boolean>();
  photoUrl = input.required<string>();
  price = input.required<number>();

  createDate = input<Date>();

  @HostBinding('class')
  class = 'app-product-card';

  onSetDisplay(isShow: boolean): void {
    this.isShowChange.emit(isShow);
  }
}

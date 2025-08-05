import { DatePipe } from '@angular/common';
import {
  booleanAttribute,
  Component,
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
  @Input({ required: true, transform: numberAttribute }) id!: number;
  productName = input.required<string>();
  author = input.required<string>();
  company = input.required<string>();
  isShow = input.required<boolean, boolean>({ transform: booleanAttribute });
  isShowChange = output<boolean>();
  photoUrl = input.required<string>();

  createDate = input<Date>();

  onSetDisplay(isShow: boolean): void {
    this.isShowChange.emit(isShow);
  }
}

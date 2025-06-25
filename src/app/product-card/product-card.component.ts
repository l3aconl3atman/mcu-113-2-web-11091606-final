import { CurrencyPipe } from '@angular/common';
import { Component, HostBinding, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) productName!: string;

  @Input({ required: true }) author!: string;

  @Input({ required: true }) company!: string;

  @Input({ required: true }) photoUrl!: string;

  @Input({ transform: numberAttribute }) price!: number;

  @HostBinding('class')
  class = 'app-product-card';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input({ required: true }) productName!: string;
  @Input({ required: true }) author!: string;
  @Input({ required: true }) company!: string;
  @Input({ required: true }) photoUrl!: string;
}

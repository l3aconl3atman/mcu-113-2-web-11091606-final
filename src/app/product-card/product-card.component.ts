import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  productName = 'A 產品';
  authors = '作者 A, 作者 B, 作者 C';
  company = '博碩文化';
  photoUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';

  // @Input({ required: true }) productName!: string;
  // @Input({ required: true }) author!: string;
  // @Input({ required: true }) company!: string;
  // @Input({ required: true }) photoUrl!: string;
  // @Input({ required: true }) price!: string;
}

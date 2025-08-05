import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-page',
  imports: [ProductCardComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss',
})
export class ProductPageComponent {
  productName = '書籍 A';
  author = '作者甲, 作者乙,作者丙';
  company = '博碩文化';
  isShow = true;
  photoUrl = 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img';

  createDate = new Date('2025/8/5');

  onSetDisplay(isShow: boolean) {
    this.isShow = isShow;
  }
}

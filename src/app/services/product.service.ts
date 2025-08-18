import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _data: Product[] = [
    new Product({
      id: 1,
      name: '書籍 A',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      createDate: new Date('2025/8/5'),
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: 2,
      name: '書籍 B',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      createDate: new Date('2025/8/5'),
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: 3,
      name: '書籍 C',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      createDate: new Date('2025/8/5'),
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: 4,
      name: '書籍 D',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      createDate: new Date('2025/8/5'),
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
    new Product({
      id: 5,
      name: '書籍 E',
      authors: ['作者甲', '作者乙', '作者丙'],
      company: '博碩文化',
      createDate: new Date('2025/8/5'),
      photoUrl: 'https://api.fnkr.net/testimg/200x200/DDDDDD/999999/?text=img',
    }),
  ];

  getList(): Product[] {
    return this._data;
  }
}

import { Component, computed, signal } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { PaginationComponent } from './pagination/pagination.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [ProductCardComponent, PaginationComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mcu-113-2-web-11091606-final';

  readonly totalCount = computed(() => {
    const { count } = this.data.value();
    return count;
  });

  readonly pageIndex = signal(1);

  readonly pageSize = signal(5);

  data: any;
}

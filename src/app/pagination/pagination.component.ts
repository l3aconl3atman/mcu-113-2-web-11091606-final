import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  readonly totalCount = signal(24);

  readonly pageSize = signal(5);

  readonly pageIndex = signal(1);

  readonly range = computed(() => {
    const length = Math.ceil(this.totalCount() / this.pageSize());
    return Array.from({ length }, (_, i) => i + 1);
  });
}

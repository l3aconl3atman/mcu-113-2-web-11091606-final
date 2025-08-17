import { Component, computed, output, signal } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss',
})
export class PaginationComponent {
  // readonly totalCount = input.required<number, string | number>({
  //   transform: numberAttribute,
  // });

  // readonly pageSize = input.required<number, string | number>({
  //   transform: numberAttribute,
  // });

  // readonly pageIndex = input.required<number, string | number>({
  //   transform: numberAttribute,
  // });

  readonly totalCount = signal(24);

  readonly pageSize = signal(5);

  readonly pageIndex = signal(1);

  readonly pageIndexChange = output<number>();

  readonly range = computed(() => {
    const length = Math.ceil(this.totalCount() / this.pageSize());
    return Array.from({ length }, (_, i) => i + 1);
  });
}

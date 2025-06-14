import { Component, computed, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
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

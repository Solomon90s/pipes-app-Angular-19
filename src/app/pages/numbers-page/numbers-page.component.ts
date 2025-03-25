import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
})
export default class NumbersPageComponent {
  totalSells = signal(2_423_232.5567);
  percent = signal(0.4856);
}

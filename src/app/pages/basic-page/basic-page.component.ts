import {
  DatePipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { AvailableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  private localeService = inject(LocaleService);
  currentLocal = signal(inject(LOCALE_ID));

  nameLower = signal('jose');
  nameUpper = signal('JOSE');
  fullName = signal('jOsE ManUEl');

  customDate = signal(new Date());

  tickingDateEffect = effect((onCleanup): void => {
    const interval = setInterval((): void => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);
    onCleanup((): void => {
      clearInterval(interval);
    });
  });

  changeLocale(locale: AvailableLocale): void {
    this.localeService.changeLocale(locale);
  }
}

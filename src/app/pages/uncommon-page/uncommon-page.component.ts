import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Client } from '../../interfaces/client.interface';
import {
  AsyncPipe,
  I18nPluralPipe,
  I18nSelectPipe,
  JsonPipe,
  KeyValuePipe,
  SlicePipe,
  TitleCasePipe,
} from '@angular/common';
import { interval, map, tap } from 'rxjs';

const firstClient: Client = {
  name: 'Jose',
  gender: 'male',
  age: 25,
  address: 'Valencia, España',
};
const secondClient: Client = {
  name: 'Melissa',
  gender: 'female',
  age: 30,
  address: 'Bilbao, España',
};

@Component({
  selector: 'app-uncommon-page',
  imports: [
    AsyncPipe,
    CardComponent,
    I18nPluralPipe,
    I18nSelectPipe,
    JsonPipe,
    KeyValuePipe,
    SlicePipe,
    TitleCasePipe,
  ],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  //! i18n Select
  client = signal(firstClient);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    if (this.client() === firstClient) {
      this.client.set(secondClient);
      return;
    }
    this.client.set(firstClient);
  }

  //! i18n Plural
  clientsMap = signal({
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    other: 'tenemos # clientes esperando',
  });
  clients = signal([
    'María',
    'Pedro',
    'Juan',
    'Miguel Angel',
    'Carlos',
    'Luis',
    'David',
  ]);

  deleteClient(): void {
    this.clients.update((prev) => prev.slice(1));
  }

  //! KeyValuePipe
  profile: Client = {
    name: 'Carlos',
    gender: 'male',
    age: 25,
    address: 'Madrid, España',
  };

  //! AsyncPipe
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Tenemos un error en los datos');
      // resolve('Tenemos datos en la promesa.');
      console.log('Promesa finalizada');
    }, 3500);
  });

  //! AsyncPipe con observable
  myObservableTimer = interval(2000).pipe(
    map((value) => value + 1),
    tap((value) => console.log('tap:', value))
  );
}

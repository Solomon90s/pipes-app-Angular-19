import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Client } from '../../interfaces/client.interface';
import { I18nPluralPipe, I18nSelectPipe } from '@angular/common';

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
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe],
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
  clients = signal(['María', 'Pedro', 'Juan', 'Miguel Angel', 'Carlos']);

  deleteClient(): void {
    this.clients.update((prev) => prev.slice(1));
  }
}

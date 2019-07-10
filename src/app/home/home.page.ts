import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  colocacao = 3
  usuario = {
    nome: "Bromo da Silva",
    republica: "Liga da Justiça",
    saldo: 1000
  }

}

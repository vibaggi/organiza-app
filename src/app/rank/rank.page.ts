import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rank',
  templateUrl: './rank.page.html',
  styleUrls: ['./rank.page.scss'],
})
export class RankPage implements OnInit {

  constructor(private router: Router) { }

  republica = "Liga da Justiça"
  moradores = [{
    apelido: "Bromo da Silva",
    saldo: 1280
  }, {
    apelido: "Baggison",
    saldo: 1110
  }]

  ngOnInit() {
  }

}

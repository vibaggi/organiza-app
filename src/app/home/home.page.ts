import { Component } from '@angular/core';
import { PontosService } from '../services/pontos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _pontos: PontosService, private router: Router) {}

  ngOnInit(){
    this._pontos.consultaSaldo().subscribe((resp:any)=>{
      console.log(resp);
      this.usuario.saldo = resp.saldo
    })
  }

  colocacao = 3
  usuario = {
    nome: "Bromo da Silva",
    republica: "Liga da Justiça",
    saldo: ""
  }

  tarefas = [
    {
      nome: "Louça",
      pontos: 50
    },
    {
      nome: "Tirar Lixo",
      pontos: 20
    }
  ]

  ocorrencias = [
    {
      nome: "Comida Estragando",
      pontos: 10
    },
    {
      nome: "Sapatos",
      pontos: 5
    }
  ]

}

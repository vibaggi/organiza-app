import { Component } from '@angular/core';
import { PontosService } from '../services/pontos.service';
import { Router } from '@angular/router';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private _pontos: PontosService, private router: Router, private _tarefas: TarefasService) {}

  ngOnInit(){
    this._pontos.consultaSaldo().subscribe((resp:any)=>{
      console.log(resp);
      this.usuario.saldo = resp.saldo
    })
    this._tarefas.buscarListaTarefasConcluidas().subscribe((resp:any)=>{
      console.log(resp);
      this.tarefas = resp
    })
  }

  colocacao = 3
  usuario = {
    nome: "Bromo da Silva",
    republica: "Liga da Justiça",
    saldo: ""
  }
  tarefas = []
  ocorrencias = []

}

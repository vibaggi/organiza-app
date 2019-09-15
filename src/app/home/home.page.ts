import { Component } from '@angular/core';
import { PontosService } from '../services/pontos.service';
import { Router } from '@angular/router';
import { TarefasService } from '../services/tarefas.service';
import { AuthService } from '../services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { RepublicaService } from '../services/republica.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private _pontos:      PontosService, 
    private _tarefas:     TarefasService, 
    private _republica:   RepublicaService,
    private router:       Router,
    private authService:  AuthService
  ) {}

  ngOnInit(){
    this.atualizarDados()
  }


  colocacao = ""
  usuario = {
    nome: localStorage.getItem('organiza-apelido'),
    republica: localStorage.getItem('organiza-republica'),
    saldo: ""
  }
  tarefas = []
  ocorrencias = []


  async doRefresh(event){
    await this.atualizarDados()
    event.target.complete()
  }

  async atualizarDados(){
    this._pontos.consultaSaldo().subscribe((resp:any)=>{
      this.usuario.saldo  = resp.saldo
    })
    this._tarefas.buscarListaTarefasConcluidas().subscribe((resp:any)=>{
      this.tarefas = resp
      
    })

    await this._republica.rankRepublica().subscribe((moradores:any)=>{
      var usuario = localStorage.getItem('organiza-username')
      this.colocacao = moradores.sort(function(a,b){return b.saldo - a.saldo}).findIndex(morador=> morador.login == usuario) + 1
    })
  }

}

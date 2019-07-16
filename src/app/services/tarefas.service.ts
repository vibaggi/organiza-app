import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TarefasService {

  constructor(private _http: HttpClient) { }

  url = "http://localhost:3000"

  buscarModelosTarefas(){
    return this._http.get(this.url+"/republicas/getListaModelos/"+localStorage.getItem('organiza-republica'))
  }

  concluirTarefa(tarefa){
    return this._http.put(this.url+"/tarefas/registrar", {
      login: localStorage.getItem('organiza-username'),
      nomeRepublica: localStorage.getItem('organiza-republica'),
      nomeTarefa: tarefa.nome
    })
  }

  buscarListaTarefasConcluidas(){
    return this._http.get(this.url+"/tarefas/lista", {
      params: {
        login: localStorage.getItem('organiza-username'),
        nomeRepublica: localStorage.getItem('organiza-republica')
      }
    })
  }

  buscarUltimasTarefasRep(quantidade){
    return this._http.get(this.url+"/tarefas/"+localStorage.getItem('organiza-republica')+"/"+quantidade)
  }
}

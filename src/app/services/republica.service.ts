import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepublicaService {

  constructor(private _http: HttpClient) { }

  // url = "http://localhost:3000/republicas"
  url = "https://organiza-back.herokuapp.com/republicas"

  infoRepublica(){
    return this._http.get(this.url+"/info/poruser/"+localStorage.getItem('organiza-username'))
  }

  inforRepublicaPorUsuario(nomeUser){
    return this._http.get(this.url+"/info/poruser/"+nomeUser)
  }

  rankRepublica(){
    return this._http.get(this.url+"/rank/"+localStorage.getItem('organiza-republica'))
  }

  atualizarModelosTarefas(modelos){
    return this._http.post(this.url+"/atualizarModelosTarefas", {
      modelos: modelos,
      nomeRepublica: localStorage.getItem('organiza-republica')
    })
  }


}

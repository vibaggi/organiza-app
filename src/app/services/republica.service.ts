import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepublicaService {
  

  constructor(private _http: HttpClient) { }

  url = environment.urlBackEnd

  criarRepublica(nomeRepublica: string) {
    return this._http.post(this.url+'/republicas/criar', {
      nomeRepublica: nomeRepublica,
      login:  localStorage.getItem('organiza-username')
    })
  }

  infoRepublica(){
    return this._http.get(this.url+"/republicas/info/poruser/"+localStorage.getItem('organiza-username'))
  }

  inforRepublicaPorUsuario(nomeUser){
    return this._http.get(this.url+"/republicas/info/poruser/"+nomeUser)
  }

  rankRepublica(){
    return this._http.get(this.url+"/republicas/rank/"+localStorage.getItem('organiza-republica'))
  }

  atualizarModelosTarefas(modelos){
    return this._http.post(this.url+"/republicas/atualizarModelosTarefas", {
      modelos: modelos,
      nomeRepublica: localStorage.getItem('organiza-republica')
    })
  }


}

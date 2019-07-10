import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RepublicaService {

  constructor(private _http: HttpClient) { }

  url = "http://localhost:3000/republicas"

  infoRepublica(){

  }

  inforRepublicaPorUsuario(nomeUser){
    return this._http.get(this.url+"/info/poruser/"+nomeUser)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PontosService {

  constructor(private _http: HttpClient) { }

  // url = "http://localhost:3000"
  url = "https://organiza-back.herokuapp.com"

  consultaSaldo(){
    return this._http.get(this.url+"/pontos/saldo/"+localStorage.getItem('organiza-username'))
  }


}

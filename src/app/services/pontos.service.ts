import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PontosService {

  constructor(private _http: HttpClient) { }

  url = environment.urlBackEnd

  consultaSaldo(){
    return this._http.get(this.url+"/pontos/saldo/"+localStorage.getItem('organiza-username'))
  }


}

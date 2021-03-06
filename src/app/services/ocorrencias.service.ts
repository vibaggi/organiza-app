import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciasService {

  constructor(private _http: HttpClient) { }

  url = environment.urlBackEnd+"/ocorrencias"

  buscarUltimasOcorrenciasRep(quantidade){
    return this._http.get(this.url+"/"+localStorage.getItem('organiza-republica')+"/"+quantidade)
  }

  registrarOcorrencia(lei, morador){
    return this._http.put(this.url+"/registrar",{
      acusador: localStorage.getItem('organiza-username'),
      reu: morador,
      lei: lei,
      republica: localStorage.getItem('organiza-republica')
    })
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private _router: Router) { }

  url = environment.urlBackEnd

  login(usuario, senha){
    return this.http.post(this.url+"/login", {
        username: usuario,
        password: senha
    })
  }

  cadastrar(campos){
    return this.http.post(this.url+"/register", campos)
  }

  /**
   * Remove cookies de login e redireciona para fora
   */
  logout(){
    localStorage.removeItem('organiza-username')
    localStorage.removeItem('organiza-password')
    localStorage.removeItem('organiza-token')
    localStorage.removeItem('organiza-republica')
    this._router.navigate(['/login'])
  }


}

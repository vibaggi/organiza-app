import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private _router: Router) { }

  // url = "http://localhost:3000"
  url = "https://organiza-back.herokuapp.com"

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
    this._router.navigate(['/login'])
  }


}

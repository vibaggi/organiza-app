import { HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators'
import { of } from 'rxjs'
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * ESSA CLASSE DEVE SER DECLARADA NO APP.MODULE EM PROVIDER. 
 * ELA SERVIRÁ PARA INTERCEPTAR TODAS AS REQUESTS ADICIONANDO UM TOKEN (CASO EXISTA).
 * TAMBÉM VERIFICA SE ALGUMA RESPOSTA RECEBEU 401 (QUE INDICA QUE O TOKEN EXPIROU)
 */

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private router: Router, private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = localStorage.getItem('organiza-token')
        console.log("Intercept - token: ", token);
        //caso exista o token formatará o headers
        if (token) {
            const dupReq = req.clone({
                headers: req.headers.set('token', token)
            })

            //retorna a requisição com o token armazenado
            return next.handle(dupReq).pipe(
                //Tratando token expirado.
                    catchError(error => {
                        console.log("INTERCEPTOR :: ", error);
                        if(error.status == 401) this.authService.logout()
                        return of(error)
                    })
                )
        }
        //caso contrario apenas dará next na request existente
        return next.handle(req)
        
    }



}
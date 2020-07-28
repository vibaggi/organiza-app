import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RepublicaService } from '../services/republica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-home',
  templateUrl: './pre-home.page.html',
  styleUrls: ['./pre-home.page.scss'],
})
export class PreHomePage implements OnInit {

  constructor(private _auth: AuthService,  private _router: Router) { 
    console.log("oi");
  }

  ngOnInit() {
    
  }

  logout(){
    this._auth.logout()
  }

  redirectCriarRep(){
    this._router.navigate(['create-rep-modal'])
  }

}

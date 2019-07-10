import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.page.html',
  styleUrls: ['./pag1.page.scss'],
})
export class Pag1Page implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  cadastro = {
    username: undefined,
    password: undefined,
    email: undefined,
    nickname: undefined
  }

  confirmPass = ""

  verificaCampos(){
    return this.cadastro.password != this.confirmPass || !this.cadastro.username
  }

  cadastrar(){
    this.authService.cadastrar(this.cadastro).subscribe((resp:any)=>{
      console.log(resp);
    }, error =>{
      console.log(error);
    })
  }

}

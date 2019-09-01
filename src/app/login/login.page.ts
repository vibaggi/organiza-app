import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { RepublicaService } from '../services/republica.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private auth: AuthService, 
    private _router: Router, 
    private _rep: RepublicaService, 
    private loadingController: LoadingController,
    private alertController: AlertController
    ) { }

  usuario = ""
  senha = ""

  ngOnInit() {
    this.usuario = localStorage.getItem('organiza-username')
    this.senha = localStorage.getItem('organiza-password')
    var token = localStorage.getItem('organiza-token')
    console.log(this.usuario, this.senha, token);
    if(token != null && this.usuario != null && this.senha != null){
      //sessao em aberto, redirecionar
      this.verificandoRep()
    }
  }

  async login(){

    var loading = await this.loadingController.create({
      message: 'Autenticando com o servidor...',
      spinner: "crescent"
    })

    loading.present()
    this.auth.login(this.usuario, this.senha).subscribe(async (resp:any)=>{
      console.log(resp);
      localStorage.setItem('organiza-username', this.usuario)
      localStorage.setItem('organiza-apelido', resp.apelido)
      localStorage.setItem('organiza-password', this.senha)
      localStorage.setItem('organiza-token', resp.token)
      await this.verificandoRep()
      loading.dismiss()
    }, async error =>{
      console.log(error);
      loading.dismiss()
      var alertModal = await this.alertController.create({
        message: 'Falha ao tentar login, verifique usuario e senha!',
        buttons: ['OK']
      })

      await  alertModal.present()

    })
  }

  async verificandoRep(){
    //verificando se usuario está vinculado a uma republica
    var rep = localStorage.getItem('organiza-republica')
    console.log(rep);
    if(rep == null){
      //Caso não tenha em memoria perguntar uma vez ao banco de dados
      this._rep.inforRepublicaPorUsuario(localStorage.getItem('organiza-username')).subscribe((republica:any)=>{
        if(republica != null){
          //se encontrar registrar na memoria e redirecionar para a home
          localStorage.setItem('organiza-republica', republica.nome)
          this._router.navigate(['/tabs/home'])
        }else{
          this._router.navigate(['/pre-home'])
          //caso não tenha rep vai permanecer na pagina pre-home
        }
        return
      })
    }else{
      //Caso tenha a republica registrada em memoria
      this._router.navigate(['/tabs/home'])
      return
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pag1',
  templateUrl: './pag1.page.html',
  styleUrls: ['./pag1.page.scss'],
})
export class Pag1Page implements OnInit {

  constructor(private authService: AuthService, private _router: Router, private loginModal: LoadingController, private alertController: AlertController) { }

  ngOnInit() {
  }

  cadastro = {
    username: undefined,
    password: undefined,
    email: undefined,
    apelido: undefined
  }

  confirmPass = ""

  verificaCampos(){
    return this.cadastro.password != this.confirmPass || !this.cadastro.username
  }

  async cadastrar(){
    var loading = await this.loginModal.create({
      message: 'Criando conta...',
      spinner: 'crescent'
    })

    loading.present()

    this.authService.cadastrar(this.cadastro).subscribe((resp:any)=>{
      console.log(resp);
      loading.dismiss()
      this._router.navigate(['/login'])
    }, async error =>{
      console.log(error);
      loading.dismiss()
      var alertModal = await this.alertController.create({
        message: error.error,
        buttons: ['OK']
      })

      await  alertModal.present()

    })
  }

}

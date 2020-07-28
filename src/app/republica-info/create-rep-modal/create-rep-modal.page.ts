import { Component, OnInit } from '@angular/core';
import { RepublicaService } from 'src/app/services/republica.service';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalSelectUsuarioPage } from '../modal-select-usuario/modal-select-usuario.page';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-rep-modal',
  templateUrl: './create-rep-modal.page.html',
  styleUrls: ['./create-rep-modal.page.scss'],
})
export class CreateRepModalPage implements OnInit {

  constructor(
    private republicaService: RepublicaService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private router: Router,
    private modal: ModalController,
    public authService: AuthService
  ) { }
  nomeRepublica = ""
  moradores = []
  criador = ''

  ngOnInit() {
    this.criador = localStorage.getItem('organiza-username')
  }

  async criarRepublica() {
    const loading = await this.loadingController.create({
      message: 'Criando republica!',
      spinner: 'crescent'
    })
    loading.present()
    let usuariosLogin = this.moradores.concat([this.criador])
    this.republicaService.criarRepublica(this.nomeRepublica, usuariosLogin).subscribe((resp: any) => {
      loading.dismiss()
      this.router.navigate([''])
    }, async (error) => {
      const alerta = await this.alertController.create({
        message: "Nome da republica já está em uso",
        buttons: ['OK']
      })
      loading.dismiss()
      await alerta.present()
    })
  }


  async selecionarMoradores(){
    let modalMoradores = await this.modal.create({
      component: ModalSelectUsuarioPage
    })
    await modalMoradores.present()
    await modalMoradores.onWillDismiss().then((morador:any)=>{
      console.log(morador);
      this.moradores.push(morador.data.login)
    })
  }

}

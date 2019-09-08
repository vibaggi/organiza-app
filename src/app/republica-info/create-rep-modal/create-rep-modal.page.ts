import { Component, OnInit } from '@angular/core';
import { RepublicaService } from 'src/app/services/republica.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-rep-modal',
  templateUrl: './create-rep-modal.page.html',
  styleUrls: ['./create-rep-modal.page.scss'],
})
export class CreateRepModalPage implements OnInit {

  constructor(
    private republicaService:  RepublicaService, 
    private alertController: AlertController, 
    private loadingController: LoadingController,
    private router: Router
  ) { }
  nomeRepublica = ""

  ngOnInit() {
  }

  async criarRepublica(){
    const loading = await this.loadingController.create({
      message: 'Criando republica!',
      spinner: 'crescent'
    })
    loading.present()
    this.republicaService.criarRepublica(this.nomeRepublica).subscribe((resp:any)=>{
      loading.dismiss()
      this.router.navigate([''])
    }, async (error) =>{
      const alerta = await this.alertController.create({
        message: "Nome da republica já está em uso",
        buttons: ['OK']
      })
      loading.dismiss()
      await alerta.present()
    })
  }

}

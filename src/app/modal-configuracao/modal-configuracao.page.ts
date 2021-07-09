import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSelectUsuarioPage } from '../republica-info/modal-select-usuario/modal-select-usuario.page';
import { RepublicaService } from '../services/republica.service';

@Component({
  selector: 'app-modal-configuracao',
  templateUrl: './modal-configuracao.page.html',
  styleUrls: ['./modal-configuracao.page.scss'],
})
export class ModalConfiguracaoPage implements OnInit {

  constructor(private modalCtrl: ModalController, private service: RepublicaService) { }

  usuario = {
    apelido: localStorage.getItem('organiza-apelido'),
    username: localStorage.getItem('organiza-username')
  }

  republica = {
    nome: localStorage.getItem('organiza-republica'),
    moradores: []
  }


  ngOnInit() {
    this.service.infoRepublica().subscribe((resp:any)=>{
      this.republica.moradores = resp.participantesID
    })
  }

  dismiss(info){
    this.modalCtrl.dismiss(info)
  }

  async selecionarMoradores(){
    let modalMoradores = await this.modalCtrl.create({
      component: ModalSelectUsuarioPage
    })
    await modalMoradores.present()
    await modalMoradores.onWillDismiss().then((morador:any)=>{
      this.service.adicionarMembro(morador.data.login, this.republica.nome).subscribe((resp)=>{
        console.log(resp);
      })
      this.republica.moradores.push(morador.data.login)
    })
  }

}

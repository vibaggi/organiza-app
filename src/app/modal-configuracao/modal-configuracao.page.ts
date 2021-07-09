import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-configuracao',
  templateUrl: './modal-configuracao.page.html',
  styleUrls: ['./modal-configuracao.page.scss'],
})
export class ModalConfiguracaoPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  dismiss(info){
    this.modalCtrl.dismiss(info)
  }

}

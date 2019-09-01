import { Component, OnInit } from '@angular/core';
import { RepublicaService } from '../services/republica.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-select-morador',
  templateUrl: './modal-select-morador.page.html',
  styleUrls: ['./modal-select-morador.page.scss'],
})
export class ModalSelectMoradorPage implements OnInit {

  constructor(private service: RepublicaService, private modal: ModalController) { }
  moradores = []

  ngOnInit() {
    this.service.infoRepublica().subscribe((resp:any)=>{
      console.log(resp);
      this.moradores = resp.participantesID
    })
  }

  dismiss(login){
    this.modal.dismiss(login)
  }

}

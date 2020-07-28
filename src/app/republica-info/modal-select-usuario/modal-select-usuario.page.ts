import { Component, OnInit } from '@angular/core';
import { RepublicaService } from 'src/app/services/republica.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-select-usuario',
  templateUrl: './modal-select-usuario.page.html',
  styleUrls: ['./modal-select-usuario.page.scss'],
})
export class ModalSelectUsuarioPage implements OnInit {

  constructor(private republicaService: RepublicaService, private modal: ModalController) { }
  moradores = []

  ngOnInit() {
    this.republicaService.usuariosSemRepublica().subscribe((resp: any[])=>{
      console.log(resp);
      this.moradores = resp
    })
  }

  dismiss(morador){
    this.modal.dismiss(morador)
  }


}

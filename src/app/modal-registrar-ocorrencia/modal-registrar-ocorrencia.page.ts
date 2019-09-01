import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalSelectMoradorPage } from '../modal-select-morador/modal-select-morador.page';
import { RepublicaService } from '../services/republica.service';
import { OcorrenciasService } from '../services/ocorrencias.service';

@Component({
  selector: 'app-modal-registrar-ocorrencia',
  templateUrl: './modal-registrar-ocorrencia.page.html',
  styleUrls: ['./modal-registrar-ocorrencia.page.scss'],
})
export class ModalRegistrarOcorrenciaPage implements OnInit {

  constructor(private modalController: ModalController, private service: RepublicaService, private ocorrenciaService: OcorrenciasService, private ownModal: ModalController) { }
  ocorrencias = []

  ngOnInit() {
    this.service.infoRepublica().subscribe((resp: any)=>{
      this.ocorrencias = resp.regrasLista
    })
  }

  async selecionarReu(ocorrencia){
    const modalSelMorador = await this.modalController.create({
      component: ModalSelectMoradorPage
    })
    await modalSelMorador.present()

    var morador = (await modalSelMorador.onWillDismiss()).data
    console.log(morador);

    this.ocorrenciaService.registrarOcorrencia(ocorrencia.nome, morador).subscribe((resp:any)=>{
      console.log("OIII");
      console.log(resp);
      this.ownModal.dismiss()
    }, error=>{
      console.log(error);
    })

  }

}

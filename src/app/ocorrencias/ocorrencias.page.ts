import { Component, OnInit } from '@angular/core';
import { OcorrenciasService } from '../services/ocorrencias.service';
import { ModalController } from '@ionic/angular';
import { ModalRegistrarOcorrenciaPage } from '../modal-registrar-ocorrencia/modal-registrar-ocorrencia.page';

@Component({
  selector: 'app-ocorrencias',
  templateUrl: './ocorrencias.page.html',
  styleUrls: ['./ocorrencias.page.scss'],
})
export class OcorrenciasPage implements OnInit {

  constructor(private service: OcorrenciasService, private modal: ModalController) { }
  ocorrencias = []
  totalOcorrencias = 0
  vacilaoNome = ''
  vacilaoOcorrencias = 0
  republica = {nome:'Liga da Justica'}

  ngOnInit() {
    this.pesquisar(5)
  }

  pesquisar(quantidade){
    this.service.buscarUltimasOcorrenciasRep(quantidade).subscribe((resp:any)=>{
      this.totalOcorrencias = resp.total
      this.ocorrencias = resp.ultimas
    })
  }


  async registrarOcorrencia(){
    const modalNovaOcorrencia = await this.modal.create({
      component: ModalRegistrarOcorrenciaPage
    })
    await modalNovaOcorrencia.present()
    await modalNovaOcorrencia.onWillDismiss()

    //Atualizando lista
    this.pesquisar(5)

  }

  doRefresh(event){
    this.service.buscarUltimasOcorrenciasRep(5).subscribe((resp:any)=>{
      this.totalOcorrencias = resp.total
      this.ocorrencias = resp.ultimas
      event.target.complete()
    }, error =>{
      event.target.complete()
    })
  }

}

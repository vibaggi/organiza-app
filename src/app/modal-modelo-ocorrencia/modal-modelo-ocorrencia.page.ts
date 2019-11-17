import { Component, OnInit } from '@angular/core';
import { RepublicaService } from '../services/republica.service';
import { ModalController, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-modal-modelo-ocorrencia',
  templateUrl: './modal-modelo-ocorrencia.page.html',
  styleUrls: ['./modal-modelo-ocorrencia.page.scss'],
})
export class ModalModeloOcorrenciaPage implements OnInit {

  constructor(
    private service: RepublicaService,
    private modalCtrl: ModalController,
    private ionPicker: PickerController
  ) { }

  leis = []

  ngOnInit() {
    this.service.infoRepublica().subscribe((resp:any)=>{
      console.log(resp);
      this.leis = resp.regrasLista
    })
  }

  novaLei(){
    this.leis.push({nome: "", pontos: 2})
  }

  deletarLei(leiIndex){
    this.leis.splice(leiIndex,1)
  }

  dismiss(info){
    this.modalCtrl.dismiss(info)
  }

  atualizaLei(i, event){
    this.leis[i].nome = event.target.value
  }

  async mudarPontuacao(tarefaIndex){
    const picker = await this.ionPicker.create({
      columns: [{
        name: "pontos", 
        options:[
          {text:'2', value:'2'},
          {text:'5', value:'5'},
          {text:'10', value:'10'},
          {text:'20', value:'20'},
          {text:'25', value:'25'},
          {text:'50', value:'50'},
        ]
      }],
      buttons: [
        {text:'cancelar', role:'cancel'},
        {text:'alterar', handler: (itens)=>{
          console.log(itens.pontos);
          console.log(this.leis[tarefaIndex]);
          this.leis[tarefaIndex].pontos = itens.pontos.value
        }}
      ]
    })

    await picker.present()
  }

  salvarMudancas(){
    this.service.atualizarLeis(this.leis).subscribe((resp:any)=>{
      this.modalCtrl.dismiss()
    })
  }

}

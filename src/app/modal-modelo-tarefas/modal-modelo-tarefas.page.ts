import { Component, OnInit } from '@angular/core';
import { RepublicaService } from '../services/republica.service';
import { ModalController, PickerController } from '@ionic/angular';

@Component({
  selector: 'app-modal-modelo-tarefas',
  templateUrl: './modal-modelo-tarefas.page.html',
  styleUrls: ['./modal-modelo-tarefas.page.scss'],
})
export class ModalModeloTarefasPage implements OnInit {

  constructor(private service: RepublicaService, private modalCtrl: ModalController, private ionPicker: PickerController) { }

  tarefas = []

  ngOnInit() {
    this.service.infoRepublica().subscribe((resp:any)=>{
      console.log(resp);
      this.tarefas = resp.modelosTarefas
    })
  }

  novaTarefa(){
    this.tarefas.push({nome: 'nova tarefa', valor: 2})
  }

  deletarTarefa(tarefaIndex){
    this.tarefas.splice(tarefaIndex,1)
  }

  dismiss(info){
    this.modalCtrl.dismiss(info)
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
          {text:'40', value:'40'},
          {text:'50', value:'50'},
          {text:'75', value:'75'},
          {text:'100', value:'100'},
        ]
      }],
      buttons: [
        {text:'cancelar', role:'cancel'},
        {text:'alterar', handler: (itens)=>{
          console.log(itens.pontos);
          console.log(this.tarefas[tarefaIndex]);
          this.tarefas[tarefaIndex].valor = itens.pontos.value
        }}
      ]
    })

    await picker.present()
  }

  salvarMudancas(){
    // console.log(this.tarefas);
    this.service.atualizarModelosTarefas(this.tarefas).subscribe((resp:any)=>{
      console.log(resp);
      this.modalCtrl.dismiss()
    })
  }

  atualizaTarefa(i, event){
    this.tarefas[i].nome = event.target.value
  }


}

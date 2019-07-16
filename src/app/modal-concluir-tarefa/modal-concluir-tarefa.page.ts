import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TarefasService } from '../services/tarefas.service';

@Component({
  selector: 'app-modal-concluir-tarefa',
  templateUrl: './modal-concluir-tarefa.page.html',
  styleUrls: ['./modal-concluir-tarefa.page.scss'],
})
export class ModalConcluirTarefaPage implements OnInit {

  constructor(private modalCtrl: ModalController, private _tarefasService: TarefasService) { }

  ngOnInit() {
    this._tarefasService.buscarModelosTarefas().subscribe((resp:any)=>{
      console.log(resp);
      this.tarefas = resp
    })
  }

  tarefas =  []

  dismiss(info){
    this.modalCtrl.dismiss(info)
  }

}

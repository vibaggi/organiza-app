import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalConcluirTarefaPage } from '../modal-concluir-tarefa/modal-concluir-tarefa.page';
import { TarefasService } from '../services/tarefas.service';
import * as moment from 'moment'


@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.page.html',
  styleUrls: ['./tarefas.page.scss'],
})
export class TarefasPage implements OnInit {

  constructor(private modalController: ModalController, private _tarefasService: TarefasService) { }

  ngOnInit() {
    this._tarefasService.buscarUltimasTarefasRep(5).subscribe((resp:any)=>{
      
      this.totalTarefasSemana = resp.total
      this.tarefas = resp.ultimas.map(t=>{t.data = moment(t.data).format('DD/MM/YYYY'); return t})
    })
  }

  republica = {
    nome: "Liga da Justiça",
    semana: 22
  }

  totalTarefasSemana = 25;
  melhorPontuadoNome = "Barto"
  melhorPontuadoPontos = 100

  tarefas = [
  ]



  async abrirModalConcluirTarefas(){
    const modalConcluirTarefas = await this.modalController.create({
      component: ModalConcluirTarefaPage
    })
    await modalConcluirTarefas.present()
    var tarefa = (await modalConcluirTarefas.onWillDismiss()).data
    console.log(tarefa);
    //caso retorne undefined, o usuário não selecionou nenhuma tarefa
    if(tarefa != undefined && tarefa != null){
      //caso venha a tarefa, aplicar tarefa concluida
      this._tarefasService.concluirTarefa(tarefa).subscribe((resp:any)=>{
        this._tarefasService.buscarUltimasTarefasRep(3).subscribe((resp:any)=>{
          this.totalTarefasSemana = resp.total
          this.tarefas = resp.ultimas.map(t=>{t.data = moment(t.data).format('DD/MM/YYYYY'); return t})
        })
      }, error =>{
        console.log(error);
      })
    }
  }
}

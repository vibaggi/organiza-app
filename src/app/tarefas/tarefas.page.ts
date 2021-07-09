import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalConcluirTarefaPage } from '../modal-concluir-tarefa/modal-concluir-tarefa.page';
import { TarefasService } from '../services/tarefas.service';
import * as moment from 'moment'
import { ModalModeloTarefasPage } from '../modal-modelo-tarefas/modal-modelo-tarefas.page';


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
    nome: localStorage.getItem('organiza-republica'),
    semana: 22
  }

  totalTarefasSemana = 0;
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

  async abrirModalCriarTarefas(){
    const modalCriarTarefas = await this.modalController.create({
      component: ModalModeloTarefasPage
    })
    await modalCriarTarefas.present()
    
  }

  doRefresh(event){
    this._tarefasService.buscarUltimasTarefasRep(5).subscribe((resp:any)=>{
      console.log(resp);
      this.totalTarefasSemana = resp.total
      this.tarefas = resp.ultimas.map(t=>{t.data = moment(t.data).format('DD/MM/YYYY'); return t})
      event.target.complete()
    })
  }
}

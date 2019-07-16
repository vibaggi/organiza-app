import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalConcluirTarefaPage } from '../modal-concluir-tarefa/modal-concluir-tarefa.page';
import { TarefasService } from '../services/tarefas.service';

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
      this.tarefas = resp.ultimas.map(t=>{t.data = new Date(t.data); return t})
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
    {
      nome: "Louça",
      pontos: 50,
      usuario: "Bromo da silva",
      data: "10/10/2018"
    },
    {
      nome: "Tirar Lixo",
      pontos: 20,
      usuario: "Baggi",
      data: "10/10/2018"
    }
  ]



  async abrirModalConcluirTarefas(){
    const modalConcluirTarefas = await this.modalController.create({
      component: ModalConcluirTarefaPage
    })
    await modalConcluirTarefas.present()
    var tarefa = (await modalConcluirTarefas.onWillDismiss()).data
    console.log(tarefa);
    //caso retorne undefined, o usuário não selecionou nenhuma tarefa
    if(!tarefa){
      //caso venha a tarefa, aplicar tarefa concluida
      this._tarefasService.concluirTarefa(tarefa).subscribe((resp:any)=>{
        console.log(resp);
      }, error =>{
        console.log(error);
      })
    }
  }
}

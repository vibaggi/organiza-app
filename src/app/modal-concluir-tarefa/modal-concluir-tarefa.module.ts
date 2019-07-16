import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalConcluirTarefaPage } from './modal-concluir-tarefa.page';

const routes: Routes = [
  {
    path: '',
    component: ModalConcluirTarefaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalConcluirTarefaPage]
})
export class ModalConcluirTarefaPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalModeloTarefasPage } from './modal-modelo-tarefas.page';

const routes: Routes = [
  {
    path: '',
    component: ModalModeloTarefasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalModeloTarefasPage]
})
export class ModalModeloTarefasPageModule {}

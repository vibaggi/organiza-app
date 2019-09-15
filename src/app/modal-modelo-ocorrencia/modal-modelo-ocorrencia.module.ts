import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalModeloOcorrenciaPage } from './modal-modelo-ocorrencia.page';

const routes: Routes = [
  {
    path: '',
    component: ModalModeloOcorrenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalModeloOcorrenciaPage]
})
export class ModalModeloOcorrenciaPageModule {}

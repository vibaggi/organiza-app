import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalRegistrarOcorrenciaPage } from './modal-registrar-ocorrencia.page';

const routes: Routes = [
  {
    path: '',
    component: ModalRegistrarOcorrenciaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalRegistrarOcorrenciaPage]
})
export class ModalRegistrarOcorrenciaPageModule {}

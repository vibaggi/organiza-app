import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalConfiguracaoPage } from './modal-configuracao.page';

const routes: Routes = [
  {
    path: '',
    component: ModalConfiguracaoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalConfiguracaoPage]
})
export class ModalConfiguracaoPageModule {}

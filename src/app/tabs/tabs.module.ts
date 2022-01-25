import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { HomePage } from '../home/home.page';
import { TarefasPage } from '../tarefas/tarefas.page';
import { OcorrenciasPage } from '../ocorrencias/ocorrencias.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        component: HomePage
      },
      {
        path: 'tarefas',
        component: TarefasPage
      },
      {
        path: 'ocorrencias',
        component: OcorrenciasPage
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage, HomePage,OcorrenciasPage]
})
export class TabsPageModule {}

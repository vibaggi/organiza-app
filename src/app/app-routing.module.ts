import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule) },
  { path: 'cadastro', loadChildren: () => import('./cadastro/pag1/pag1.module').then(m => m.Pag1PageModule) },
  { path: 'pre-home', loadChildren: () => import('./pre-home/pre-home.module').then(m => m.PreHomePageModule) },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'rank', loadChildren: () => import('./rank/rank.module').then(m => m.RankPageModule) },
  { path: 'tarefas', loadChildren: () => import('./tarefas/tarefas.module').then(m => m.TarefasPageModule) },
  { path: 'modal-concluir-tarefa', loadChildren: () => import('./modal-concluir-tarefa/modal-concluir-tarefa.module').then(m => m.ModalConcluirTarefaPageModule) },
  { path: 'modal-modelo-tarefas', loadChildren: () => import('./modal-modelo-tarefas/modal-modelo-tarefas.module').then(m => m.ModalModeloTarefasPageModule) },
  { path: 'ocorrencias', loadChildren: () => import('./ocorrencias/ocorrencias.module').then(m => m.OcorrenciasPageModule) },
  { path: 'modal-registrar-ocorrencia', loadChildren: () => import('./modal-registrar-ocorrencia/modal-registrar-ocorrencia.module').then(m => m.ModalRegistrarOcorrenciaPageModule) },
  { path: 'modal-select-morador', loadChildren: () => import('./modal-select-morador/modal-select-morador.module').then(m => m.ModalSelectMoradorPageModule) },
  { path: 'home-rep', loadChildren: () => import('./republica-info/home-rep/home-rep.module').then(m => m.HomeRepPageModule) },
  { path: 'create-rep-modal', loadChildren: () => import('./republica-info/create-rep-modal/create-rep-modal.module').then(m => m.CreateRepModalPageModule) },  { path: 'modal-modelo-ocorrencia', loadChildren: () => import('./modal-modelo-ocorrencia/modal-modelo-ocorrencia.module').then(m => m.ModalModeloOcorrenciaPageModule) },
  { path: 'modal-select-usuario', loadChildren: () => import('./republica-info/modal-select-usuario/modal-select-usuario.module').then(m => m.ModalSelectUsuarioPageModule) },
  { path: 'modal-configuracao', loadChildren: () => import('./modal-configuracao/modal-configuracao.module').then(m => m.ModalConfiguracaoPageModule) }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

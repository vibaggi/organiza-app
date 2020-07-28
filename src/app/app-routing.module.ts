import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'cadastro', loadChildren: './cadastro/pag1/pag1.module#Pag1PageModule' },
  { path: 'pre-home', loadChildren: './pre-home/pre-home.module#PreHomePageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'rank', loadChildren: './rank/rank.module#RankPageModule' },
  { path: 'tarefas', loadChildren: './tarefas/tarefas.module#TarefasPageModule' },
  { path: 'modal-concluir-tarefa', loadChildren: './modal-concluir-tarefa/modal-concluir-tarefa.module#ModalConcluirTarefaPageModule' },
  { path: 'modal-modelo-tarefas', loadChildren: './modal-modelo-tarefas/modal-modelo-tarefas.module#ModalModeloTarefasPageModule' },
  { path: 'ocorrencias', loadChildren: './ocorrencias/ocorrencias.module#OcorrenciasPageModule' },
  { path: 'modal-registrar-ocorrencia', loadChildren: './modal-registrar-ocorrencia/modal-registrar-ocorrencia.module#ModalRegistrarOcorrenciaPageModule' },
  { path: 'modal-select-morador', loadChildren: './modal-select-morador/modal-select-morador.module#ModalSelectMoradorPageModule' },
  { path: 'home-rep', loadChildren: './republica-info/home-rep/home-rep.module#HomeRepPageModule' },
  { path: 'create-rep-modal', loadChildren: './republica-info/create-rep-modal/create-rep-modal.module#CreateRepModalPageModule' },  { path: 'modal-modelo-ocorrencia', loadChildren: './modal-modelo-ocorrencia/modal-modelo-ocorrencia.module#ModalModeloOcorrenciaPageModule' },
  { path: 'modal-select-usuario', loadChildren: './republica-info/modal-select-usuario/modal-select-usuario.module#ModalSelectUsuarioPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

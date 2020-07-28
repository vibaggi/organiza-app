import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';
import { ModalConcluirTarefaPage } from './modal-concluir-tarefa/modal-concluir-tarefa.page';
import { ModalModeloTarefasPage } from './modal-modelo-tarefas/modal-modelo-tarefas.page'
import { ModalRegistrarOcorrenciaPage } from './modal-registrar-ocorrencia/modal-registrar-ocorrencia.page';
import { ModalSelectMoradorPage } from './modal-select-morador/modal-select-morador.page';
import { ModalModeloOcorrenciaPage } from './modal-modelo-ocorrencia/modal-modelo-ocorrencia.page';
import { ModalSelectUsuarioPage } from './republica-info/modal-select-usuario/modal-select-usuario.page';

@NgModule({
  declarations: [AppComponent, ModalConcluirTarefaPage, ModalModeloTarefasPage, ModalRegistrarOcorrenciaPage, ModalSelectMoradorPage, ModalModeloOcorrenciaPage, ModalSelectUsuarioPage],
  entryComponents: [ModalConcluirTarefaPage, ModalModeloTarefasPage, ModalRegistrarOcorrenciaPage, ModalSelectMoradorPage, ModalModeloOcorrenciaPage, ModalSelectUsuarioPage],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    StatusBar,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

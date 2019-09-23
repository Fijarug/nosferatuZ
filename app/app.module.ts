import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Papeis } from '../pages/papeis/papeis';
import { Configuracao } from '../pages/config/config';
import { HomePage } from '../pages/home/home';
import { JogadoresPage } from '../pages/jogadores/jogadores';
import { AdicionarJogador } from '../pages/jogadores/addJogador/adicionarJogador';

@NgModule({
  declarations: [
    MyApp,
    Papeis,
    Configuracao,
    HomePage,
    JogadoresPage,
    AdicionarJogador
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Papeis,
    Configuracao,
    HomePage,
    JogadoresPage,
    AdicionarJogador
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}

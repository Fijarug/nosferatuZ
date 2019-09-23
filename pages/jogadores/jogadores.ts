import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Jogador } from '../../entidades/jogador';
import { Configuracao } from '../config/config';

import { AdicionarJogador } from './addJogador/adicionarJogador';

@Component({
  selector: 'page-jogadores',
  templateUrl: 'jogadores.html'
})
export class JogadoresPage {

  public jogadores: Array<Jogador> = new Array;
  public jogador: Jogador = new Jogador();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogadores = navParams.get('jogadores');
  }

  public addJogador(): void {
    this.navCtrl.push(AdicionarJogador, { jogadores: this.jogadores });
  }

  public redirecionarConfig(): void {
    this.navCtrl.push(Configuracao, { jogadores: this.jogadores });
  }

}

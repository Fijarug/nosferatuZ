import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Jogador } from '../../entidades/jogador';
import { Papeis } from '../papeis/papeis';

import { AdicionarJogador } from './addJogador/adicionarJogador';

@Component({
  selector: 'page-jogadores',
  templateUrl: 'jogadores.html'
})
export class JogadoresPage {

  public jogadores: Array<Jogador> = new Array;
  public jogador: Jogador = new Jogador();
  public habilitar: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogadores = navParams.get('jogadores');
  }

  public addJogador(): void {
    this.navCtrl.push(AdicionarJogador, { jogadores: this.jogadores });
  }

  public redirecionarPapeis(): void {
    this.navCtrl.push(Papeis, { jogadores: this.jogadores });
  }

}

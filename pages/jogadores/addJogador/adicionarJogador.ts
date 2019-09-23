import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Jogador } from '../../../entidades/jogador';

import { JogadoresPage } from '../jogadores';


@Component({
  selector: 'page-adicionarJogador',
  templateUrl: 'adicionarJogador.html'
})
export class AdicionarJogador {

  public jogadores: Array<Jogador> = new Array;
  public jogador: Jogador = new Jogador();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogadores = navParams.get('jogadores');
    console.log(this.jogadores)
  }

  public addJogador(): void {
    if (this.jogador.nome.length > 0) {
      this.jogadores.push(this.jogador);
    }
    console.log(this.jogador)
    // this.redirecionar();
  }

  public redirecionar() {
    this.navCtrl.push(JogadoresPage, { jogadores: this.jogadores });
  }

}

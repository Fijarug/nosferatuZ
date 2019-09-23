import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Jogador } from '../../../entidades/jogador';

import { JogadoresPage } from '../jogadores';


@Component({
  selector: 'page-adicionarJogador',
  templateUrl: 'adicionarJogador.html'
})
export class AdicionarJogador {

  public jogador: Jogador = new Jogador();

  constructor(public navCtrl: NavController) {

  }

  public addJogador(): void {
    this.navCtrl.push(JogadoresPage, { jogador: this.jogador });
  }

}

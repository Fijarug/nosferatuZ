import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Jogador } from '../../entidades/jogador';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class Configuracao {

  public jogadores: Array<Jogador> = new Array;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogadores = navParams.get('jogadores');
    if (!this.jogadores) {
      this.jogadores = new Array;
    }
  }

}

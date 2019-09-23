import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdicionarJogador } from '/addJogador/adicionarJogador';

@Component({
  selector: 'page-jogadores',
  templateUrl: 'jogadores.html'
})
export class JogadoresPage {

  constructor(public navCtrl: NavController) {

  }

  public addJogador(): void {
    this.navCtrl.push(AdicionarJogador);
  }

}

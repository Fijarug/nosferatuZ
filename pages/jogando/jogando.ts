import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { Jogador } from "../../entidades/jogador";
import { Papel } from "../../entidades/papel";

@Component({
  selector: "page-jogando",
  templateUrl: "jogando.html"
})
export class Jogando {
  public jogadores: Array<Jogador> = new Array();
  public jogadorAtual: Jogador;
  public ordem: number = 0;
  public exibirApresentacao: boolean = true;
  public amanheceu: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogadores = navParams.get("jogadores");
    this.jogadorAtual = this.jogadores[this.ordem];
  }

  public proximo() {
    this.jogadorAtual = this.jogadores[this.ordem];
    console.log(this.jogadorAtual);
    this.exibirApresentacao = false;
    this.buscarProximo();
  }

  public buscarProximo() {
    if (this.ordem === this.jogadores.length - 1) {
      this.ordem = 0;
      this.amanheceu = true;
    } else {
      this.ordem = this.ordem + 1;
    }
  }
}

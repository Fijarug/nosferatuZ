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
  public jogadorAtual: Jogador = new Jogador();
  public ordem: number;
  public exibirApresentacao: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogadores = navParams.get("jogadores");
    this.jogadorAtual = this.jogadores[this.ordem];
  }

  public proximo(){
    this.jogadorAtual = this.jogadores[this.ordem];
    this.exibirApresentacao = false;
  }

  public buscarProximo(){
    if(this.ordem < this.jogadores.length){
      this.ordem = this.ordem + 1;
    } else{
      this.ordem = 0;
    }

  }


}

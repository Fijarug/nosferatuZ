import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { Jogador } from "../../entidades/jogador";
import { Papel } from "../../entidades/papel";

import { Papeis } from "../papeis/papeis";

import { AdicionarJogador } from "./addJogador/adicionarJogador";

@Component({
  selector: "page-jogadores",
  templateUrl: "jogadores.html"
})
export class JogadoresPage {
  public jogadores: Array<Jogador> = new Array();
  public jogador: Jogador = new Jogador();
  public habilitar: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogadores = navParams.get("jogadores");

    this.adicionar();

    // if (this.jogadores && this.jogadores.length >= 4) {
    this.habilitar = true;
    // }
  }

  public adicionar() {
    this.jogadores = new Array();
    this.jogador = new Jogador();
    this.jogador.nome = "Jogador 1";
    this.jogador.papel = new Papel();
    this.jogador.foto = this.fotoPadrao;
    this.jogador.selecionado = false;
    this.jogadores.push(this.jogador);
    this.jogador = new Jogador();
    this.jogador.nome = "Jogador 2";
    this.jogador.papel = new Papel();
    this.jogador.foto = this.fotoPadrao;
    this.jogador.selecionado = false;
    this.jogadores.push(this.jogador);
    this.jogador = new Jogador();
    this.jogador.nome = "Jogador 3";
    this.jogador.papel = new Papel();
    this.jogador.foto = this.fotoPadrao;
    this.jogador.selecionado = false;
    this.jogadores.push(this.jogador);
    this.jogador = new Jogador();
    this.jogador.nome = "Jogador 4";
    this.jogador.papel = new Papel();
    this.jogador.foto = this.fotoPadrao;
    this.jogador.selecionado = false;
    this.jogadores.push(this.jogador);
    /*    this.jogador = new Jogador();
    this.jogador.nome = "Jogador 5";
    this.jogador.papel = new Papel;
    this.jogadores.push(this.jogador);
    this.jogador = new Jogador();
    this.jogador.nome = "Jogador 6";
    this.jogador.papel = new Papel;
    this.jogadores.push(this.jogador);
    this.jogador = new Jogador();
    this.jogador.nome = "Jogador 7";
    this.jogador.papel = new Papel;
    this.jogadores.push(this.jogador);
    this.jogador = new Jogador();
    this.jogador.nome = "Jogador 8";
    this.jogador.papel = new Papel;
    this.jogadores.push(this.jogador);*/
  }

  public addJogador(): void {
    this.navCtrl.push(AdicionarJogador, { jogadores: this.jogadores });
  }

  public editJogador(j: Jogador): void {
    this.navCtrl.push(AdicionarJogador, {
      jogadores: this.jogadores,
      jogador: j
    });
  }

  public redirecionarPapeis(): void {
    this.navCtrl.push(Papeis, { jogadores: this.jogadores });
  }

  public fotoPadrao: string =
    "data:image/jpeg;base64,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";
}

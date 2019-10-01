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
  public exibirPapel: boolean = false;
  public exibirFuncaoPapel: boolean = false;
  public exibirFuncaoEscondida: boolean = false;

  public escolhasDeMorte: Array<Jogador> = new Array();
  public revelarJogador: Array<Jogador> = new Array();
  public revelacao: string = "";

  public matar: boolean = false;
  public revelar: boolean = false;
  public defender: boolean = false;
  public transformar: boolean = false;
  public armadilha: boolean = false;
  public semAcao: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogadores = navParams.get("jogadores");
    this.jogadorAtual = this.jogadores[this.ordem];
  }

// depois da apresentação do mestre exibir primeiro jogador/mestre
  public proximo() {
    this.exibirApresentacao = false;
    this.exibirFuncaoEscondida = true;
  }

  public exibirDetalhes() {
    this.exibirPapel = false;
    this.exibirFuncaoPapel = true;
    this.exibirFuncaoEscondida = false;

    if (this.jogadorAtual.papel.matar) {
      this.matar = true;
    } else if (this.jogadorAtual.papel.revelar) {
      this.revelar = true;
    } else if (this.jogadorAtual.papel.defender) {
      this.defender = true;
    } else if (this.jogadorAtual.papel.transformar) {
      this.transformar = true;
    } else if (this.jogadorAtual.papel.armadilha) {
      this.armadilha = true;
    } else {
      this.semAcao = true;
    }
  }

  public buscarProximo() {
    if (this.ordem === this.jogadores.length - 1) {
      this.ordem = 0;
      this.amanheceu = true;
    } else {
      this.ordem = this.ordem + 1;
    }
    this.resetarAcoes();
    this.jogadorAtual = this.jogadores[this.ordem];
  }

  public resetarAcoes() {
    this.matar = false;
    this.revelar = false;
    this.defender = false;
    this.transformar = false;
    this.armadilha = false;
    this.semAcao = false;
  }

  public exibirPapelBt() {
    this.exibirPapel = true;
  }

  public selecionar(j: Jogador) {
    if(this.matar){
      for (var i = 0; i < this.escolhasDeMorte.length; i++) {
        this.escolhasDeMorte[i].selecionado = false;
      }
      this.escolhasDeMorte = new Array();
      j.selecionado = !j.selecionado;
      this.escolhasDeMorte.push(j);
    // } else if(this.revelar){
    } else{
      for (var i = 0; i < this.revelarJogador.length; i++) {
        this.revelarJogador[i].selecionado = false;
      }
      this.revelarJogador = new Array();
      j.selecionado = !j.selecionado;
      this.revelarJogador.push(j);
    }
  }

  public matarVampiro() {
    this.buscarProximo();
    this.exibirPapel = false;
    this.exibirFuncaoPapel = false;
    this.exibirFuncaoEscondida = true;
  }

  public revelarPapel(){
    this.revelacao = this.revelarJogador[0].papel.nome;
    this.exibirFuncaoEscondida = false;
  }

}
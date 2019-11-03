import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";

import { Jogador } from "../../entidades/jogador";
import { Papel } from "../../entidades/papel";

@Component({
  selector: "page-jogando",
  templateUrl: "jogando.html"
})
export class Jogando {
  //lista para votação
  public jogadoresEnforcar: Array<Jogador> = new Array();

  public jogadoresLob: Array<Jogador> = new Array();

  public jogadores: Array<Jogador> = new Array();
  public jogadorAtual: Jogador;
  public ordem: number = 0;
  public exibirApresentacao: boolean = true;
  public anoiteceu: boolean = true;
  public amanheceu: boolean = false;
  public exibirVitimas: boolean = false;
  public exibirPapel: boolean = false;
  public exibirFuncaoPapel: boolean = false;
  public exibirFuncaoEscondida: boolean = false;
  public exibirDiscussao: boolean = false;
  public exibirVotacao: boolean = false;

  public escolhasDeMorte: Array<Jogador> = new Array();
  public relatorioNoite: string = "";
  public revelarJogador: Array<Jogador> = new Array();
  public revelacao: string = "";
  public revelandoJogador: boolean = false;

  public jogadoresMortos: Array<Jogador> = new Array();

  public matar: boolean = false;
  public revelar: boolean = false;
  public defender: boolean = false;
  public transformar: boolean = false;
  public armadilha: boolean = false;
  public semAcao: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogadores = navParams.get("jogadores");
    this.jogadorAtual = this.jogadores[this.ordem];

    this.clonarListaJogador(this.jogadoresEnforcar);
  }

  public centesimas: number = 0;
  public minutos: number = 2;
  public segundos: number = 0;
  public contador: any;

  public _centesimas: string = "";
  public _minutos: string = "2";
  public _segundos: string = "00";

  start() {
    this.exibirVitimas = false;
    this.exibirDiscussao = true;
    this.contador = setInterval(() => {
      this.centesimas += 1;
      if (this.centesimas < 10) {
        this._centesimas = "0" + this.centesimas;
      } else {
        this._centesimas = "" + this.centesimas;
      }
      if (this.centesimas == 10) {
        this.centesimas = 0;
        this.segundos -= 1;
        if (this.segundos < 10) {
          this._segundos = "0" + this.segundos;
        } else {
          this._segundos = this.segundos + "";
        }
        if (this.segundos < 0) {
          this.segundos = 59;
          this.minutos -= 1;
          if (this.minutos < 10) this._minutos = "0" + this.minutos;
          else this._minutos = this.minutos + "";
          this._segundos = "59";
          if (this.minutos == 0) {
            this.pause();
            this.revelarVotacao();
          }
        }
      }
    }, 100);
  }

  pause() {
    clearInterval(this.contador);
  }

  public clonarListaJogador(lista: Array<Jogador>) {
    for (var i = 0; i < this.jogadores.length; i++) {
      lista[i] = new Jogador();
      lista[i].nome = this.jogadores[i].nome;
      lista[i].foto = this.jogadores[i].foto;
      lista[i].nome = this.jogadores[i].nome;
      lista[i].morto = this.jogadores[i].morto;
      lista[i].papel = this.jogadores[i].papel;
      lista[i].selecionado = this.jogadores[i].selecionado;
      lista[i].exibir = this.jogadores[i].exibir;
    }
  }

  public maxTime: any = 30;
  StartTimer() {
    var timer;
    var hidevalue;
    timer = setTimeout(x => {
      if (this.maxTime <= 0) {
        this.maxTime -= 1;
      }
      if (this.maxTime > 0) {
        hidevalue = false;
        this.StartTimer();
      } else {
        hidevalue = true;
      }
    }, 1000);
  }

  // depois da apresentação do mestre exibir primeiro jogador/mestre
  public comecarJogo() {
    this.exibirApresentacao = false;
    this.exibirFuncaoEscondida = true;
    this.anoiteceu = true;

    this.resetarAcoes();
    this.jogadores[this.ordem].exibir = false;
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
      this.anoiteceu = false;
    } else {
      this.ordem = this.ordem + 1;
    }
    this.resetarAcoes();

    this.jogadores[this.ordem].exibir = false;
    this.jogadorAtual = this.jogadores[this.ordem];

    if (this.amanheceu) {
      for (var i = 0; i < this.escolhasDeMorte.length; i++) {
        this.relatorioNoite =
          +this.relatorioNoite +
          "O jogador " +
          this.escolhasDeMorte[i].nome +
          " morreu.";
        this.escolhasDeMorte[i].morto = true;
        this.jogadoresMortos.push(this.escolhasDeMorte[i]);
      }
    }
  }

  public resetarAcoes() {
    for (var i = 0; i < this.jogadores.length; i++) {
      this.jogadores[i].exibir = true;
    }
    for (var i = 0; i < this.revelarJogador.length; i++) {
      this.revelarJogador[i].selecionado = false;
    }
    this.matar = false;
    this.revelar = false;
    this.defender = false;
    this.transformar = false;
    this.armadilha = false;
    this.semAcao = false;
  }

  public exibirPapelBt() {
    this.exibirPapel = !this.exibirPapel;
  }

  public selecionar(j: Jogador) {
    if (this.matar) {
      for (var i = 0; i < this.escolhasDeMorte.length; i++) {
        this.escolhasDeMorte[i].selecionado = false;
      }
      this.escolhasDeMorte = new Array();
      j.selecionado = !j.selecionado;
      this.escolhasDeMorte.push(j);
    } else if(this.exibirVotacao){
      for (var i = 0; i < this.jogadoresEnforcar.length; i++) {
        this.jogadoresEnforcar[i].selecionado = false;
      }
      j.selecionado = !j.selecionado;
    } else {
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

  public proximo() {
    this.buscarProximo();
    this.exibirPapel = false;
    this.exibirFuncaoPapel = false;
    this.exibirFuncaoEscondida = true;
    this.revelandoJogador = false;
  }

  public revelarPapel() {
    this.revelandoJogador = true;
    this.revelacao = this.revelarJogador[0].papel.nome;
    this.exibirPapel = false;
    this.exibirFuncaoPapel = false;
    this.exibirFuncaoEscondida = false;
  }

  public revelarVitimas() {
    this.amanheceu = false;
    this.exibirVitimas = true;
    this.StartTimer();
  }

  public revelarDiscussao() {
    this.exibirVitimas = false;
    this.exibirDiscussao = true;
  }

  public revelarVotacao() {
    this.exibirDiscussao = false;
    this.exibirVotacao = true;
  }

  public votar(j: Jogador){
    this.jogadoresEnforcar.push(j);
    this.buscarProximo();
  }
}

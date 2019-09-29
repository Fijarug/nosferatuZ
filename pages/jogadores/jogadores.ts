import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Jogador } from '../../entidades/jogador';
import { Papel } from '../../entidades/papel';

import { Papeis } from '../papeis/papeis';

import { AdicionarJogador } from './addJogador/adicionarJogador';

@Component({
  selector: 'page-jogadores',
  templateUrl: 'jogadores.html'
})
export class JogadoresPage {

  public jogadores: Array<Jogador> = new Array;
  public jogador: Jogador = new Jogador();
  public habilitar: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogadores = navParams.get('jogadores');

    this.adicionar();

    // if (this.jogadores && this.jogadores.length >= 4) {
    this.habilitar = true;
    // }
  }

  public adicionar() {
    this.jogadores = new Array;
    this.jogador = new Jogador();
    this.jogador.nome = "Jogador 1";
    this.jogador.papel = new Papel;
    this.jogadores.push(this.jogador);
    this.jogador = new Jogador();
    this.jogador.nome = "Jogador 2";
    this.jogador.papel = new Papel;
    this.jogadores.push(this.jogador);
    this.jogador = new Jogador();
    this.jogador.nome = "Jogador 3";
    this.jogador.papel = new Papel;
    this.jogadores.push(this.jogador);
    this.jogador = new Jogador();
    this.jogador.nome = "Jogador 4";
    this.jogador.papel = new Papel;
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
    this.navCtrl.push(AdicionarJogador, { jogadores: this.jogadores, jogador: j });
  }

  public redirecionarPapeis(): void {
    this.navCtrl.push(Papeis, { jogadores: this.jogadores });
  }

}

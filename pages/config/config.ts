import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Jogador } from '../../entidades/jogador';
import { Papel } from '../../entidades/papel';

@Component({
  selector: 'page-config',
  templateUrl: 'config.html'
})
export class Configuracao {

  public jogadores: Array<Jogador> = new Array;
  public papeis: Array<Papel> = new Array;
  public papeisTimeLevel = new Map();

  public Mal: any;
  public Bom1: any;
  public Bom2: any;
  public Bom3: any;
  public e: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogadores = navParams.get('jogadores');
    this.papeis = navParams.get('papeis');
    if (!this.jogadores) {
      this.jogadores = new Array;
    }
    this.instanciar();
    this.definirQtdePorTime();
    this.sortear();
  }

  public instanciar() {
    this.Mal = { time: 'Mal', level: 1, probabilidade: (0.45 * 100), disponivel: true, quantidade: 0 };
    this.Bom1 = { time: 'Bom', level: 1, probabilidade: (0.50 * 100), disponivel: true, quantidade: 0 };
    this.Bom2 = { time: 'Bom', level: 2, probabilidade: (0.35 * 100), disponivel: true, quantidade: 0 };
    this.Bom3 = { time: 'Bom', level: 3, probabilidade: (0.20 * 100), disponivel: true, quantidade: 0 };
    this.e = { time: 'Assassino', level: 1, probabilidade: 0, disponivel: false };
  }

  public definirQtdePorTime() {
    var lista: Array<Papel> = new Array;
    for (var i = 0; i < this.papeis.length; i++) {
      this.papeisTimeLevel.set(this.papeis[i].time + this.papeis[i].level, new Array);
    }

    for (var i = 0; i < this.papeis.length; i++) {
      if (this.papeis[i].time === this.Mal.time) {
        this.papeisTimeLevel.get(this.papeis[i].time + this.papeis[i].level).push(this.papeis[i]);
      } else if (this.papeis[i].time === this.Bom1.time && this.papeis[i].level === this.Bom1.level) {
        this.papeisTimeLevel.get(this.papeis[i].time + this.papeis[i].level).push(this.papeis[i]);
      } else if (this.papeis[i].time === this.Bom2.time && this.papeis[i].level === this.Bom2.level) {
        this.papeisTimeLevel.get(this.papeis[i].time + this.papeis[i].level).push(this.papeis[i]);
      } else if (this.papeis[i].time === this.Bom3.time && this.papeis[i].level === this.Bom3.level) {
        this.papeisTimeLevel.get(this.papeis[i].time + this.papeis[i].level).push(this.papeis[i]);
      }
    }
  }

  public sortear() {
    let papel = [];
    var resultados = new Map();
    resultados.set(this.Mal, 0);
    resultados.set(this.Bom1, 0);
    resultados.set(this.Bom2, 0);
    resultados.set(this.Bom3, 0);
    resultados.set(this.e, 0);

    for (i = 1; i <= 100; i++) {
      if (this.Mal.probabilidade >= i)
        papel.push(this.Mal);
      if (this.Bom1.probabilidade >= i)
        papel.push(this.Bom1);
      if (this.Bom2.probabilidade >= i)
        papel.push(this.Bom2);
      if (this.Bom3.probabilidade >= i)
        papel.push(this.Bom3);
    }


    console.log(this.jogadores.length);
    let totalSorteado = 0;
    while (totalSorteado <= this.jogadores.length) {
      totalSorteado = 0;
      for (var i = 0; i < this.jogadores.length; i++) {
        let sorteado = Math.floor((Math.random() * papel.length - 1) + 1);
        if (papel[sorteado] === this.Mal) {
          resultados.set(this.Mal, resultados.get(this.Mal) + 1)
        } else if (papel[sorteado] === this.Bom1) {
          resultados.set(this.Bom1, resultados.get(this.Bom1) + 1)
        } else if (papel[sorteado] === this.Bom2) {
          resultados.set(this.Bom2, resultados.get(this.Bom2) + 1)
        } else if (papel[sorteado] === this.Bom3) {
          resultados.set(this.Bom3, resultados.get(this.Bom3) + 1)
        }
        totalSorteado = totalSorteado + 1;
      }
    }
    console.log(resultados);
  }

}

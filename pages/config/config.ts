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
  public sortearPapeis = new Array;

  public Mal: any;
  public Bom1: any;
  public Bom2: any;
  public Bom3: any;
  public e: any;
  public resultados = new Map();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogadores = navParams.get('jogadores');
    this.papeis = navParams.get('papeis');
    if (!this.jogadores) {
      this.jogadores = new Array;
    }
    this.instanciar();
    this.definirQtdePorTime();
    this.sortear();
    this.balancear();

    //map to array
    let results = Array.from(this.resultados.keys());    

    for (var i = 0; i <= results.length; i++) {
      console.log(results[i].time)
      // if (results[i].time === this.Mal.time) {
      //   this.sortearPapeis.push(this.Mal.time);
      // } else if (results[i].time === this.Bom1.time && results[i].level === this.Bom1.level) {
      //   this.sortearPapeis.push(this.Bom1.time + this.Bom1.level);
      // } else if (results[i].time === this.Bom2.time && results[i].level === this.Bom2.level) {
      //   this.sortearPapeis.push(this.Bom2.time + this.Bom2.level);
      // } else if (results[i].time === this.Bom3.time && results[i].level === this.Bom3.level) {
      //   this.sortearPapeis.push(this.Bom3.time + this.Bom3.level);
      // }
    }

    console.log(this.resultados.get(this.teste(this.resultados)));
    for (var i = 0; i <= this.jogadores.length; i++) {
      this.jogadores[i].papel = this.resultados.get(this.teste(this.resultados));
    }
  }

  public teste(collection) {
    let keys = Array.from(collection.keys());
    return keys[Math.floor(Math.random() * keys.length)];
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
    this.resultados.set(this.Mal, 0);
    this.resultados.set(this.Bom1, 0);
    this.resultados.set(this.Bom2, 0);
    this.resultados.set(this.Bom3, 0);
    this.resultados.set(this.e, 0);

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

    let totalSorteado = 0;
    for (var i = 0; i < this.jogadores.length; i++) {
      let sorteado = Math.floor((Math.random() * papel.length - 1) + 1);
      if (papel[sorteado] === this.Mal) {
        this.resultados.set(this.Mal, this.resultados.get(this.Mal) + 1)
      } else if (papel[sorteado] === this.Bom1) {
        this.resultados.set(this.Bom1, this.resultados.get(this.Bom1) + 1)
      } else if (papel[sorteado] === this.Bom2) {
        this.resultados.set(this.Bom2, this.resultados.get(this.Bom2) + 1)
      } else if (papel[sorteado] === this.Bom3) {
        this.resultados.set(this.Bom3, this.resultados.get(this.Bom3) + 1)
      }
    }
    console.log("Mal: " + this.resultados.get(this.Mal));
    console.log("Bom1: " + this.resultados.get(this.Bom1));
    console.log("Bom2: " + this.resultados.get(this.Bom2));
    console.log("Bom3: " + this.resultados.get(this.Bom3));
  }

  public balancear() {
    for (var i = 0; i < 100; i++) {
      if (this.resultados.get(this.Mal) < this.resultados.get(this.Bom3)) {
        console.log("Refazendo: time aldeao mto forte");
        console.log("------------------------------------")
        this.sortear();
      } else if (this.resultados.get(this.Mal) >= (this.jogadores.length / 2)) {
        console.log("Refazendo: time vampiro mto forte");
        console.log("------------------------------------")
        this.sortear();
      } else if (this.resultados.get(this.Mal) < 1) {
        console.log("Refazendo: nenhum vampiro");
        console.log("------------------------------------")
        this.sortear();
        // } else if (totalizador(maiores) == 0 && totalizador(zerados) == 0) {
      } else {
        break;
      }
    }
  }

}

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

  public Mal: any;
  public Bom1: any;
  public Bom2: any;
  public Bom3: any;
  public e: any;

  public papeisPorTimeELevel = new Map();
  //quais papeies estao no jogo por time
  public papeisSeparadosPorTimeLevel = new Map();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.jogadores = navParams.get('jogadores');
    this.papeis = navParams.get('papeis');
    this.instanciar();
    this.definirQtdePorTime();
    this.sortear();
    this.balancear();
    this.sortearPapeis();
  }

  public sortearPapeis() {
    var papeisParaSortear = new Array;
    this.papeisPorTimeELevel.forEach((value: number, key: any) => {
      key.quantidade = value;
      if (key.quantidade != 0) {
        for (var i = 0; i < key.quantidade; i++) {
          papeisParaSortear.push(key.time + key.level);
        }
      }
    });

    for (var i = 0; i <= papeisParaSortear.length; i++) {
      var randomJogador = Math.floor((Math.random() * this.jogadores.length - 1) + 1)
      if (!this.jogadores[randomJogador].papel) {
        this.papeisSeparadosPorTimeLevel.forEach((value: number, key: any) => {
          if (papeisParaSortear[randomJogador] == key) {
            //dentro do key tem a lista de papeis por time/level selecionados na tela anterior
            var x = Math.floor((Math.random() * value - 1) + 1)
            this.jogadores[randomJogador].papel = value[0];
            papeisParaSortear.splice[randomJogador];
          }
        })
      }
    }
  }

  public instanciar() {
    this.Mal = { time: 'Mal', level: 1, probabilidade: (0.45 * 100), habilitado: true, quantidade: 0 };
    this.Bom1 = { time: 'Bom', level: 1, probabilidade: (0.50 * 100), habilitado: true, quantidade: 0 };
    this.Bom2 = { time: 'Bom', level: 2, probabilidade: (0.35 * 100), habilitado: true, quantidade: 0 };
    this.Bom3 = { time: 'Bom', level: 3, probabilidade: (0.20 * 100), habilitado: true, quantidade: 0 };
    this.e = { time: 'Assassino', level: 1, probabilidade: 0, habilitado: false };

    for (var i = 0; i <= this.jogadores.length; i++) {
      if (!this.jogadores[i].papel.time) {
        this.jogadores[i].papel = new Papel;
      }
    }
  }

  public definirQtdePorTime() {
    var lista: Array<Papel> = new Array;
    for (var i = 0; i < this.papeis.length; i++) {
      this.papeisSeparadosPorTimeLevel.set(this.papeis[i].time + this.papeis[i].level, new Array);
    }

    for (var i = 0; i < this.papeis.length; i++) {
      if (this.papeis[i].time === this.Mal.time) {
        this.papeisSeparadosPorTimeLevel.get(this.papeis[i].time + this.papeis[i].level).push(this.papeis[i]);
      } else if (this.papeis[i].time === this.Bom1.time && this.papeis[i].level === this.Bom1.level) {
        this.papeisSeparadosPorTimeLevel.get(this.papeis[i].time + this.papeis[i].level).push(this.papeis[i]);
      } else if (this.papeis[i].time === this.Bom2.time && this.papeis[i].level === this.Bom2.level) {
        this.papeisSeparadosPorTimeLevel.get(this.papeis[i].time + this.papeis[i].level).push(this.papeis[i]);
      } else if (this.papeis[i].time === this.Bom3.time && this.papeis[i].level === this.Bom3.level) {
        this.papeisSeparadosPorTimeLevel.get(this.papeis[i].time + this.papeis[i].level).push(this.papeis[i]);
      }
    }
  }

  public sortear() {
    let papel = [];
    this.papeisPorTimeELevel.set(this.Mal, 0);
    this.papeisPorTimeELevel.set(this.Bom1, 0);
    this.papeisPorTimeELevel.set(this.Bom2, 0);
    this.papeisPorTimeELevel.set(this.Bom3, 0);
    this.papeisPorTimeELevel.set(this.e, 0);

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
        this.papeisPorTimeELevel.set(this.Mal, this.papeisPorTimeELevel.get(this.Mal) + 1)
      } else if (papel[sorteado] === this.Bom1) {
        this.papeisPorTimeELevel.set(this.Bom1, this.papeisPorTimeELevel.get(this.Bom1) + 1)
      } else if (papel[sorteado] === this.Bom2) {
        this.papeisPorTimeELevel.set(this.Bom2, this.papeisPorTimeELevel.get(this.Bom2) + 1)
      } else if (papel[sorteado] === this.Bom3) {
        this.papeisPorTimeELevel.set(this.Bom3, this.papeisPorTimeELevel.get(this.Bom3) + 1)
      }
    }
    console.log("Mal: " + this.papeisPorTimeELevel.get(this.Mal));
    console.log("Bom1: " + this.papeisPorTimeELevel.get(this.Bom1));
    console.log("Bom2: " + this.papeisPorTimeELevel.get(this.Bom2));
    console.log("Bom3: " + this.papeisPorTimeELevel.get(this.Bom3));
  }

  public balancear() {
    for (var i = 0; i < 100; i++) {
      if (this.papeisPorTimeELevel.get(this.Mal) < this.papeisPorTimeELevel.get(this.Bom3)) {
        console.log("Refazendo: time aldeao mto forte");
        console.log("------------------------------------")
        this.sortear();
      } else if (this.papeisPorTimeELevel.get(this.Mal) >= (this.jogadores.length / 2)) {
        console.log("Refazendo: time vampiro mto forte");
        console.log("------------------------------------")
        this.sortear();
      } else if (this.papeisPorTimeELevel.get(this.Mal) < 1) {
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

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Jogador } from '../../entidades/jogador';
import { Papel } from '../../entidades/papel';
import { Configuracao } from '../config/config';

@Component({
  selector: 'page-papeis',
  templateUrl: 'papeis.html'
})
export class Papeis {

  public papeis: Array<Papel> = new Array;
  public papel: Papel = new Papel;
  public jogadores: Array<Jogador> = new Array;
  public papeisAdicionados: Array<Papel> = new Array;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.popularLista();
    this.jogadores = navParams.get('jogadores');
  }

  public addPapel(p: Papel) {
    p.habilitado = !p.habilitado;
    if (p.habilitado) {
      this.papeisAdicionados.push(p);
    } else {
      if (this.papeisAdicionados) {
        this.removerPapel(p);
      }
    }
  }

  private removerPapel(p: Papel) {
    const index: number = this.papeisAdicionados.indexOf(p);
    if (index !== -1) {
      this.papeisAdicionados.splice(index, 1);
    }
  }

  public redirecionarConfig(): void {
    // this.navCtrl.push(Configuracao, { jogadores: this.jogadores, papeis: this.papeisAdicionados });
    this.navCtrl.push(Configuracao, { jogadores: this.jogadores, papeis: this.papeis });
  }

  public popularLista() {
    this.papel.nome = "Drácula";
    this.papel.descricao = "mata"
    this.papel.time = "Mal";
    this.papel.probabilidade = (0.45 * 100);
    this.papel.level = 2;
    this.papel.habilitado = false;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Vampiro";
    this.papel.descricao = "mata"
    this.papel.time = "Mal";
    this.papel.probabilidade = (0.45 * 100);
    this.papel.level = 1;
    this.papel.habilitado = false;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Colono";
    this.papel.descricao = "mata"
    this.papel.time = "Bom";
    this.papel.probabilidade = (0.45 * 100);
    this.papel.level = 1;
    this.papel.habilitado = false;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Van Helsing";
    this.papel.descricao = "mata"
    this.papel.time = "Bom";
    this.papel.probabilidade = (0.45 * 100);
    this.papel.level = 2;
    this.papel.habilitado = false;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Vovó do Alho";
    this.papel.descricao = "mata"
    this.papel.time = "Bom";
    this.papel.probabilidade = (0.45 * 100);
    this.papel.level = 2;
    this.papel.habilitado = false;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Coveiro";
    this.papel.descricao = "mata"
    this.papel.time = "Bom";
    this.papel.probabilidade = (0.45 * 100);
    this.papel.level = 1;
    this.papel.habilitado = false;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Xamã";
    this.papel.descricao = "mata"
    this.papel.time = "Bom";
    this.papel.probabilidade = (0.45 * 100);
    this.papel.level = 2;
    this.papel.habilitado = false;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Oráculo";
    this.papel.descricao = "mata"
    this.papel.time = "Bom";
    this.papel.probabilidade = (0.45 * 100);
    this.papel.level = 3;
    this.papel.habilitado = false;
    this.papeis.push(this.papel);
  }

}

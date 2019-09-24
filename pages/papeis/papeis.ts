import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Papel } from '../../entidades/papel';

@Component({
  selector: 'page-papeis',
  templateUrl: 'papeis.html'
})
export class Papeis {

  public papeis: Array<Papel> = new Array;
  public papel: Papel = new Papel;

  constructor(public navCtrl: NavController) {
    this.popularLista();
  }

  public popularLista() {
    this.papel.nome = "Drácula";
    this.papel.descricao = "mata"
    this.papel.time = "Mal";
    this.papel.level = 2;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Vampiro";
    this.papel.descricao = "mata"
    this.papel.time = "Mal";
    this.papel.level = 1;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Colono";
    this.papel.descricao = "mata"
    this.papel.time = "Bom";
    this.papel.level = 1;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Van Helsing";
    this.papel.descricao = "mata"
    this.papel.time = "Bom";
    this.papel.level = 2;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Vovó do Alho";
    this.papel.descricao = "mata"
    this.papel.time = "Bom";
    this.papel.level = 2;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Coveiro";
    this.papel.descricao = "mata"
    this.papel.time = "Bom";
    this.papel.level = 1;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Xamã";
    this.papel.descricao = "mata"
    this.papel.time = "Bom";
    this.papel.level = 2;
    this.papeis.push(this.papel);
    this.papel = new Papel();
    this.papel.nome = "Oráculo";
    this.papel.descricao = "mata"
    this.papel.time = "Bom";
    this.papel.level = 3;
    this.papeis.push(this.papel);
  }

}

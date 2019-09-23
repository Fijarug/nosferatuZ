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
    this.papel.nome = "teste";
    this.papel.descricao = "testestesteste"
    this.papel.habilitado = true;
    this.papeis.push(this.papel);
  }

}

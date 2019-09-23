import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Papel } from '../../entidades/papel';

@Component({
  selector: 'page-papeis',
  templateUrl: 'papeis.html'
})
export class Papeis {

  public papeis: Array<Papel> = new Array;

  constructor(public navCtrl: NavController) {

  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JogadoresPage } from '../jogadores/jogadores';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public logo = "https://github.com/Fijarug/nosferatuZ/blob/master/src/img/logo.png?raw=true";
  public teste: boolean = false;

  constructor(public navCtrl: NavController) {

  }

  public comecarJogo(): void {
    this.navCtrl.push(JogadoresPage);
  }

  public tesete(){
    this.teste= true;
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

public logo = "https://github.com/Fijarug/nosferatuZ/blob/master/src/img/logo.png?raw=true";

  constructor(public navCtrl: NavController) {

  }

 public comecarJogo(): void{
    this.navCtrl.push(AboutPage);
  }

}
